"""Regression tests for bugs found during the final audit."""

from collections import deque
from pathlib import Path

import pytest

from bloxorz.engine import BRIDGE_LOCKED_OPEN, Engine
from bloxorz.search import (
    GoalDistanceHeuristic,
    make_cost_model,
    solve,
    solve_ucs,
)
from bloxorz.stage import load_stages, parse_stage

STAGES = load_stages(Path(__file__).parent.parent / "stages")


def make(data: dict) -> Engine:
    return Engine(parse_stage(data))


def all_reachable(engine: Engine) -> list:
    start = engine.initial_state()
    seen = {start}
    queue = deque([start])
    while queue:
        state = queue.popleft()
        for _, ns in engine.transitions(state):
            if ns not in seen:
                seen.add(ns)
                queue.append(ns)
    return list(seen)


TELEPORT_STAGE = {
    "name": "teleport heuristic",
    "map": ["#" * 21, "#S##t" + "#" * 12 + "##G#", "#" * 21],
    "start": [1, 1],
    "bridges": [],
    "switches": [
        {"kind": "split", "mode": "permanent", "set": "open",
         "cells": [[1, 4]], "bridges": [],
         "teleport": [[1, 17], [1, 18]]}
    ],
}


def test_heuristic_handles_zero_cost_teleports():
    """Regression: the old BFS ignored teleports, so h could drop by 7 in one move."""
    engine = make(TELEPORT_STAGE)
    h = GoalDistanceHeuristic(engine)
    cost = make_cost_model(engine, "risk")
    start = engine.initial_state()

    for state in all_reachable(engine):
        for action, ns in engine.transitions(state):
            assert h(state) <= cost(state, action, ns) + h(ns) + 1e-9

    ucs = solve_ucs(engine, "risk")
    assert ucs.found
    assert h(start) <= ucs.path_cost


SOFT_STATIONARY_STAGE = {
    "name": "stationary soft switch",
    "map": ["##########", "#Ss#t##0G#", "##########"],
    "start": [1, 1],
    "bridges": ["closed"],
    "switches": [
        {"kind": "soft", "mode": "toggle", "cells": [[1, 2]], "bridges": [0]},
        {"kind": "split", "mode": "permanent", "set": "open",
         "cells": [[1, 4]], "bridges": [],
         "teleport": [[1, 2], [1, 6]]},
    ],
}


def test_stationary_cube_does_not_retrigger_soft_switch():
    """Only newly entered cells press switches; moving cube 1 must not toggle bridge 0."""
    engine = make(SOFT_STATIONARY_STAGE)
    state = engine.initial_state()
    state = engine.apply(state, "R")
    state = engine.apply(state, "R")
    assert state.mode == "split"
    assert state.pos == ((1, 2), (1, 6))

    before = state.bridges
    state = engine.apply(state, "X")  # control cube 2
    for action in "LRLR":
        state = engine.apply(state, action)
        assert state.bridges == before


def test_permanent_switch_cannot_close_its_bridge_again():
    stage = next(s for s in STAGES if "Permanent Bridge" in s.name)
    engine = Engine(stage)
    state = engine.initial_state()
    state = engine.apply(state, "R")
    state = engine.apply(state, "R")          # stand on the heavy switch
    assert state.pos == (1, 4)
    assert state.bridges[0] == BRIDGE_LOCKED_OPEN
    assert engine.bridge_open(state.bridges, 0)

    for action in "LLRR":                     # press the switch a second time
        state = engine.apply(state, action)
    assert state.pos == (1, 4)
    assert state.bridges[0] == BRIDGE_LOCKED_OPEN
    assert engine.bridge_open(state.bridges, 0)
    assert solve(engine, "BFS").found


def test_ucs_takes_a_longer_but_cheaper_route_than_bfs():
    stage = next(s for s in STAGES if "Fragile Detour" in s.name)
    engine = Engine(stage)
    bfs = solve(engine, "BFS")
    ucs = solve_ucs(engine, "risk")
    assert bfs.found and ucs.found
    assert ucs.solution_length != bfs.solution_length
    assert ucs.solution_length > bfs.solution_length

    cost = make_cost_model(engine, "risk")
    state = engine.initial_state()
    bfs_risk = 0.0
    for action in bfs.actions:
        ns = engine.apply(state, action)
        bfs_risk += cost(state, action, ns)
        state = ns
    assert ucs.path_cost < bfs_risk


@pytest.mark.parametrize(
    "data,match",
    [
        (
            {"name": "start fragile", "map": ["#####", "#F#G#", "#####"],
             "start": [1, 1], "bridges": [], "switches": []},
            "fragile",
        ),
        (
            {"name": "bad bridge index",
             "map": ["#######", "#Ss#0G#", "#######"], "start": [1, 1],
             "bridges": ["closed"],
             "switches": [{"kind": "soft", "mode": "toggle",
                           "cells": [[1, 2]], "bridges": [1]}]},
            "bridge index",
        ),
        (
            {"name": "duplicate teleport",
             "map": ["########", "#S##t###", "########", "#######G"],
             "start": [1, 1], "bridges": [],
             "switches": [{"kind": "split", "mode": "permanent", "set": "open",
                           "cells": [[1, 4]], "bridges": [],
                           "teleport": [[1, 2], [1, 2]]}]},
            "different",
        ),
        (
            {"name": "fragile teleport",
             "map": ["########", "#S##t#F#", "########", "#######G"],
             "start": [1, 1], "bridges": [],
             "switches": [{"kind": "split", "mode": "permanent", "set": "open",
                           "cells": [[1, 4]], "bridges": [],
                           "teleport": [[1, 2], [1, 6]]}]},
            "fragile",
        ),
        (
            {"name": "closed bridge teleport",
             "map": ["########", "#S##t#0#", "########", "#######G"],
             "start": [1, 1], "bridges": ["closed"],
             "switches": [{"kind": "split", "mode": "permanent", "set": "open",
                           "cells": [[1, 4]], "bridges": [],
                           "teleport": [[1, 2], [1, 6]]}]},
            "closed bridge",
        ),
        (
            {"name": "bad set", "map": ["#######", "#S#x#G#", "#######"],
             "start": [1, 1], "bridges": [],
             "switches": [{"kind": "heavy", "mode": "permanent",
                           "set": "maybe", "cells": [[1, 3]], "bridges": []}]},
            "set",
        ),
    ],
)
def test_stage_validation_rejects_invalid_data(data, match):
    with pytest.raises(ValueError, match=match):
        parse_stage(data)


def test_measurement_can_skip_tracemalloc():
    engine = Engine(STAGES[0])
    without = solve(engine, "BFS", measure_memory=False)
    with_mem = solve(engine, "BFS", measure_memory=True)
    assert without.peak_memory_bytes == 0
    assert with_mem.peak_memory_bytes > 0


@pytest.mark.parametrize("algo", ["DFS", "IDS"])
def test_dfs_and_ids_honour_timeout_and_cancel(algo):
    engine = Engine(STAGES[0])
    timed = solve(engine, algo, time_limit_s=0.0)
    assert timed.timed_out and not timed.found

    cancelled = solve(engine, algo, should_stop=lambda: True)
    assert cancelled.timed_out and not cancelled.found


def test_astar_reports_its_real_name():
    engine = Engine(STAGES[0])
    assert solve(engine, "A*").algorithm == "A*"

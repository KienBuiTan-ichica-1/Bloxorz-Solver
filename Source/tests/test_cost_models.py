"""Tests for the cost models and for the invariants the solvers rely on."""

from collections import deque
from pathlib import Path

import pytest

from bloxorz.engine import Engine
from bloxorz.search import SOLVERS, make_cost_model, solve, solve_astar, solve_ucs
from bloxorz.stage import load_stages, parse_stage

STAGES = load_stages(Path(__file__).parent.parent / "stages")


def reachable(engine: Engine, max_depth: int = 8) -> list:
    start = engine.initial_state()
    seen = {start}
    queue = deque([start])
    depth = {start: 0}
    while queue:
        state = queue.popleft()
        if depth[state] >= max_depth:
            continue
        for _, ns in engine.transitions(state):
            if ns not in seen:
                seen.add(ns)
                depth[ns] = depth[state] + 1
                queue.append(ns)
    return list(seen)


def make(data: dict) -> Engine:
    return Engine(parse_stage(data))


HEAVY_STAGE = {
    "name": "heavy",
    "map": ["#######", "#S##xG#", "#######"],
    "start": [1, 1],
    "bridges": ["closed"],
    "switches": [
        {"kind": "heavy", "mode": "permanent", "set": "open",
         "cells": [[1, 4]], "bridges": [0]}
    ],
}

SOFT_STAGE = {
    "name": "soft",
    "map": ["#######", "#Ss#0G#", "#######"],
    "start": [1, 1],
    "bridges": ["closed"],
    "switches": [
        {"kind": "soft", "mode": "toggle", "cells": [[1, 2]], "bridges": [0]}
    ],
}


def test_landing_on_heavy_switch_is_cheap():
    """Rolling into a *standing* position on a heavy switch must cost 1.

    Regression test: the cost model used to look at the pre-move state (which
    was still lying), so it decided no switch fired and charged 2.
    """
    engine = make(HEAVY_STAGE)
    cost = make_cost_model(engine, "risk")
    state = engine.initial_state()
    lying = engine.apply(state, "R")            # H at (1,2),(1,3)
    standing = engine.apply(lying, "R")         # S on the heavy switch (1,4)
    assert standing.orient == "S" and standing.pos == (1, 4)
    assert engine.switches_triggered(standing) == [0]
    assert cost(lying, "R", standing) == 1.0


def test_landing_on_soft_switch_is_cheap():
    engine = make(SOFT_STAGE)
    cost = make_cost_model(engine, "risk")
    state = engine.initial_state()
    lying = engine.apply(state, "R")            # H covers the soft switch
    assert engine.switches_triggered(lying) == [0]
    assert cost(state, "R", lying) == 1.0


def test_plain_roll_costs_two_and_landing_on_fragile_costs_three():
    plain = make({
        "name": "plain",
        "map": ["#####", "#SG##", "#####"],
        "start": [1, 1],
        "bridges": [],
        "switches": [],
    })
    cost = make_cost_model(plain, "risk")
    state = plain.initial_state()
    lying = plain.apply(state, "R")            # H covers (1,1),(1,2)
    assert cost(state, "R", lying) == 2.0

    fragile = make({
        "name": "frag",
        "map": ["#####", "#SF##", "####G"],
        "start": [1, 1],
        "bridges": [],
        "switches": [],
    })
    cost = make_cost_model(fragile, "risk")
    state = fragile.initial_state()
    lying = fragile.apply(state, "R")          # H covers (1,1) floor + (1,2) F
    assert cost(state, "R", lying) == 3.0


def test_control_switch_costs_one():
    data = {
        "name": "split",
        "map": ["########", "#S##t###", "########", "#######G"],
        "start": [1, 1],
        "bridges": [],
        "switches": [
            {"kind": "split", "mode": "permanent", "set": "open",
             "cells": [[1, 4]], "bridges": [], "teleport": [[1, 2], [1, 6]]}
        ],
    }
    engine = make(data)
    cost = make_cost_model(engine, "risk")
    state = engine.initial_state()
    for action in "RR":
        state = engine.apply(state, action)
    assert state.mode == "split"
    flipped = engine.apply(state, "X")
    assert cost(state, "X", flipped) == 1.0


@pytest.mark.parametrize("stage", STAGES, ids=lambda s: s.name)
def test_every_transition_costs_at_least_one(stage):
    """A* is only admissible if no action can cost less than the heuristic step."""
    engine = Engine(stage)
    cost = make_cost_model(engine, "risk")
    for state in reachable(engine):
        for action, ns in engine.transitions(state):
            assert cost(state, action, ns) >= 1.0


@pytest.mark.parametrize("stage", STAGES, ids=lambda s: s.name)
def test_ucs_and_astar_agree_on_the_optimal_risk_cost(stage):
    engine = Engine(stage)
    ucs = solve_ucs(engine, cost_model="risk")
    astar = solve_astar(engine, cost_model="risk")
    assert ucs.found and astar.found
    assert ucs.path_cost == astar.path_cost, (
        f"UCS and A* disagree on {stage.name}: "
        f"{ucs.path_cost} vs {astar.path_cost}"
    )
    # A* must never expand more nodes than UCS with the same heuristic/cost
    assert astar.expanded_nodes <= ucs.expanded_nodes


def test_landing_state_is_consistent_with_result():
    """Every legal *moving* action must have a landing state (single source).

    ``X`` (switch control) is the documented exception: it only flips
    ``active``, so it has no landing state and is always costed 1.
    """
    for stage in STAGES:
        engine = Engine(stage)
        for state in reachable(engine, max_depth=6):
            for action in ("U", "D", "L", "R", "X", "M"):
                result = engine.result(state, action)
                landing = engine.landing_state(state, action)
                if action == "X":
                    assert landing is None
                    continue
                if result is None:
                    continue
                assert landing is not None, (
                    f"{stage.name}: legal move {action} has no landing state"
                )
                assert landing.occupied()


def test_ids_does_not_blow_up_on_the_open_field():
    stage = next(s for s in STAGES if "Big Open" in s.name)
    engine = Engine(stage)
    ids = solve(engine, "IDS")
    assert ids.found
    assert ids.expanded_nodes < 10_000, (
        "IDS re-explores transposed states; the depth-limited transposition "
        f"table keeps it bounded, got {ids.expanded_nodes}"
    )


def test_unknown_algorithm_raises_a_clear_error():
    engine = Engine(STAGES[0])
    with pytest.raises(ValueError, match="Unknown algorithm"):
        solve(engine, "Dijkstra")


def test_solvers_report_a_consistent_cost_model():
    engine = Engine(STAGES[0])
    for name in SOLVERS:
        res = solve(engine, name)
        assert res.cost_model in ("uniform", "risk")
        if name in ("BFS", "DFS", "IDS"):
            assert res.cost_model == "uniform"
            assert res.path_cost == res.solution_length

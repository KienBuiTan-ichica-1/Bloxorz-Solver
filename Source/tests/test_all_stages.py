from pathlib import Path

import pytest

from bloxorz.engine import Engine
from bloxorz.search import SOLVERS, solve
from bloxorz.stage import load_stages

STAGES = load_stages(Path(__file__).parent.parent / "stages")

COST_MODELS = ["uniform", "risk"]


def replay(engine: Engine, actions):
    state = engine.initial_state()
    for action in actions:
        state = engine.apply(state, action)
    return state


@pytest.mark.parametrize("stage", STAGES, ids=lambda s: s.name)
@pytest.mark.parametrize("algo", sorted(SOLVERS))
def test_solver_solution_is_valid(stage, algo):
    engine = Engine(stage)
    res = solve(engine, algo)
    assert res.found, f"{algo} found no solution for {stage.name}"
    assert res.solution_length == len(res.actions)
    final = replay(engine, res.actions)
    assert engine.is_goal(final), f"{algo} replay failed on {stage.name}"
    if res.algorithm in ("BFS", "DFS"):
        assert res.path_cost == res.solution_length


@pytest.mark.parametrize("stage", STAGES, ids=lambda s: s.name)
def test_bfs_is_optimal_vs_ids(stage):
    engine = Engine(stage)
    bfs = solve(engine, "BFS")
    ids = solve(engine, "IDS")
    if bfs.found and ids.found:
        assert ids.solution_length == bfs.solution_length

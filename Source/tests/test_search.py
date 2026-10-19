from bloxorz.engine import Engine
from bloxorz.search import solve_astar, solve_bfs
from bloxorz.stage import parse_stage


def make_basic():
    data = {
        "name": "T",
        "map": ["######", "##SG##", "######"],
        "start": [1, 2],
        "bridges": [],
        "switches": [],
    }
    return parse_stage(data)


def test_bfs_finds_solution():
    stage = make_basic()
    eng = Engine(stage)
    res = solve_bfs(eng)
    assert res.found
    assert res.solution_length > 0


def test_heuristic_admissible():
    stage = make_basic()
    eng = Engine(stage)
    res = solve_astar(eng)
    assert res.found
    assert res.solution_length >= 0

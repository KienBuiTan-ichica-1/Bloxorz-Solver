from bloxorz.engine import Engine
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


def test_initial():
    stage = make_basic()
    eng = Engine(stage)
    s = eng.initial_state()
    assert s.mode == "block"
    assert s.orient == "S"
    assert s.pos == (1, 2)


def test_roll_standing_right():
    stage = make_basic()
    eng = Engine(stage)
    s = eng.initial_state()
    ns = eng.apply(s, "R")
    assert ns.orient == "H"
    assert ns.pos == (1, 2)


def test_goal():
    stage = make_basic()
    eng = Engine(stage)
    s = eng.initial_state()
    s = eng.apply(s, "L")  # H at (1,1)
    s = eng.apply(s, "R")  # stand on goal (1,3)
    assert eng.is_goal(s)

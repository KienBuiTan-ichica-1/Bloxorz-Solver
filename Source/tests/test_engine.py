import pytest

from bloxorz.engine import Engine, IllegalMove, roll
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


@pytest.mark.parametrize(
    "orient,pos,action,expected",
    [
        ("S", (2, 2), "U", ("V", (0, 2))),
        ("S", (2, 2), "D", ("V", (3, 2))),
        ("S", (2, 2), "L", ("H", (2, 0))),
        ("S", (2, 2), "R", ("H", (2, 3))),
        ("H", (2, 2), "U", ("H", (1, 2))),
        ("H", (2, 2), "D", ("H", (3, 2))),
        ("H", (2, 2), "L", ("S", (2, 1))),
        ("H", (2, 2), "R", ("S", (2, 4))),
        ("V", (2, 2), "U", ("S", (1, 2))),
        ("V", (2, 2), "D", ("S", (4, 2))),
        ("V", (2, 2), "L", ("V", (2, 1))),
        ("V", (2, 2), "R", ("V", (2, 3))),
    ],
)
def test_orientation_transition_table(orient, pos, action, expected):
    assert roll(orient, pos, action) == expected


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
    assert ns.pos == (1, 3)
    assert ns.occupied() == ((1, 3), (1, 4))


def test_roll_out_of_bounds_is_illegal():
    stage = make_basic()
    eng = Engine(stage)
    s = eng.initial_state()
    assert not eng.legal(s, "U")
    with pytest.raises(IllegalMove):
        eng.apply(s, "U")


def test_roll_over_void_is_illegal():
    stage = parse_stage({
        "name": "Void",
        "map": ["######", "##SG.#", "######"],
        "start": [1, 2],
        "bridges": [],
        "switches": [],
    })
    eng = Engine(stage)
    s = eng.initial_state()
    assert not eng.legal(s, "R")


def test_goal():
    stage = parse_stage({
        "name": "Goal",
        "map": ["######", "#S##G#", "######"],
        "start": [1, 1],
        "bridges": [],
        "switches": [],
    })
    eng = Engine(stage)
    s = eng.initial_state()
    s = eng.apply(s, "R")  # lying over (1,2),(1,3)
    s = eng.apply(s, "R")  # standing on the goal (1,4)
    assert eng.is_goal(s)

from bloxorz.engine import Engine
from bloxorz.stage import parse_stage


def test_soft_switch_toggles_bridge():
    data = {
        "name": "SW",
        "map": ["######", "#Ss0G#", "######"],
        "start": [1, 1],
        "bridges": ["closed"],
        "switches": [
            {"kind": "soft", "mode": "toggle", "cells": [[1, 2]], "bridges": [0]}
        ],
    }
    stage = parse_stage(data)
    eng = Engine(stage)
    s = eng.initial_state()
    assert not eng.bridge_open(s.bridges, 0)
    s = eng.apply(s, "R")  # lying over (1,1),(1,2): presses soft switch
    assert eng.bridge_open(s.bridges, 0)


def test_fragile_breaks_under_standing_block():
    data = {
        "name": "F",
        "map": ["######", "#S#F##", "######", "####G#", "######"],
        "start": [1, 1],
        "bridges": [],
        "switches": [],
    }
    stage = parse_stage(data)
    eng = Engine(stage)
    s = eng.initial_state()
    # rolling right from (1,1) gives H covering (1,1),(1,2) - fine
    s = eng.apply(s, "R")
    # from H at (1,1), rolling right stands on (1,3); (1,2) is fragile
    # H at (1,1) covers (1,1),(1,2) where (1,2) is '#' and (1,3) is 'F'
    # rolling right -> standing at (1,3) which is fragile -> illegal
    assert not eng.legal(s, "R")


def test_split_switch_splits_block():
    data = {
        "name": "SP",
        "map": [
            "########",
            "#S###t##",
            "########",
            "#######G",
        ],
        "start": [1, 1],
        "bridges": [],
        "switches": [
            {
                "kind": "split",
                "mode": "permanent",
                "set": "open",
                "cells": [[1, 5]],
                "bridges": [],
                "teleport": [[1, 2], [1, 6]],
            }
        ],
    }
    stage = parse_stage(data)
    eng = Engine(stage)
    s = eng.initial_state()
    # stand on the split switch at (1,5): go R (H at 1,1), R (stand 1,3), R (H at 1,3), R (stand 1,5)
    for a in ["R", "R", "R", "R"]:
        s = eng.apply(s, a)
    assert s.mode == "split"
    assert s.pos == ((1, 2), (1, 6))

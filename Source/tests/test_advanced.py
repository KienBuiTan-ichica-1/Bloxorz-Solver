from bloxorz.engine import Engine
from bloxorz.stage import parse_stage


def test_soft_switch_toggles_bridge():
    data = {
        "name": "SW",
        "map": ["#######", "#Ss#0G#", "#######"],
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
    s = eng.apply(s, "R")  # lying over (1,2),(1,3): presses the soft switch
    assert eng.bridge_open(s.bridges, 0)


def test_fragile_breaks_under_standing_block():
    data = {
        "name": "F",
        "map": ["######", "#S##F#", "######", "####G#", "######"],
        "start": [1, 1],
        "bridges": [],
        "switches": [],
    }
    stage = parse_stage(data)
    eng = Engine(stage)
    s = eng.initial_state()
    # rolling right from (1,1) gives H covering (1,2),(1,3) - fine
    s = eng.apply(s, "R")
    # rolling right again stands the block on (1,4), which is fragile -> illegal
    assert not eng.legal(s, "R")


def test_split_switch_splits_block():
    data = {
        "name": "SP",
        "map": [
            "########",
            "#S##t###",
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
                "cells": [[1, 4]],
                "bridges": [],
                "teleport": [[1, 2], [1, 6]],
            }
        ],
    }
    stage = parse_stage(data)
    eng = Engine(stage)
    s = eng.initial_state()
    # stand on the split switch at (1,4): R -> H (1,2),(1,3); R -> S (1,4)
    for action in ["R", "R"]:
        s = eng.apply(s, action)
    assert s.mode == "split"
    assert s.pos == ((1, 2), (1, 6))

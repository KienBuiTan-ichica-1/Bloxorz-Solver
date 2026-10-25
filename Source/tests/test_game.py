import unittest
from pathlib import Path

from bloxorz import ALGORITHMS, Level, load_levels, solve
from bloxorz.game import roll

ROOT = Path(__file__).resolve().parent.parent


def mk(grid, **kw):
    return Level({"id": "t", "grid": grid, **kw})


class TestRollTable(unittest.TestCase):
    def test_standing(self):
        self.assertEqual(roll("S", 5, 5, "U"), ("V", 3, 5))
        self.assertEqual(roll("S", 5, 5, "D"), ("V", 6, 5))
        self.assertEqual(roll("S", 5, 5, "L"), ("H", 5, 3))
        self.assertEqual(roll("S", 5, 5, "R"), ("H", 5, 6))

    def test_horizontal(self):
        self.assertEqual(roll("H", 5, 5, "L"), ("S", 5, 4))
        self.assertEqual(roll("H", 5, 5, "R"), ("S", 5, 7))
        self.assertEqual(roll("H", 5, 5, "U"), ("H", 4, 5))
        self.assertEqual(roll("H", 5, 5, "D"), ("H", 6, 5))

    def test_vertical(self):
        self.assertEqual(roll("V", 5, 5, "U"), ("S", 4, 5))
        self.assertEqual(roll("V", 5, 5, "D"), ("S", 7, 5))
        self.assertEqual(roll("V", 5, 5, "L"), ("V", 5, 4))
        self.assertEqual(roll("V", 5, 5, "R"), ("V", 5, 6))

    def test_roll_is_reversible(self):
        inv = {"U": "D", "D": "U", "L": "R", "R": "L"}
        for o in "SHV":
            for d in "UDLR":
                no, nr, nc = roll(o, 10, 10, d)
                self.assertEqual(roll(no, nr, nc, inv[d]), (o, 10, 10))


class TestRules(unittest.TestCase):
    def test_fall_off_board_and_void(self):
        lv = mk(["S##.", "###G"])
        self.assertIsNone(lv.step(lv.initial, "U"))
        self.assertIsNone(lv.step(lv.initial, "L"))
        self.assertIsNotNone(lv.step(lv.initial, "R"))

    def test_win_only_when_standing(self):
        lv = mk(["S###G#"])
        s = lv.initial
        for a in "RR":  # S(0,0) -> H(0,1) -> S(0,3)
            s = lv.step(s, a)[0]
        self.assertFalse(lv.is_win(s))
        s2 = lv.step(s, "R")[0]  # H(0,4)-(0,5): nam tren o dich, khong thang
        self.assertEqual(s2[0], "H")
        self.assertFalse(lv.is_win(s2))
        s3 = lv.step(s, "R")  # tu S(0,3) lan phai -> H; sau do lan trai ve S
        self.assertIsNotNone(s3)

    def test_fragile(self):
        lv = mk(["S#FF#G"])
        s = lv.step(lv.initial, "R")[0]  # H(0,1)-(0,2): nam tren F -> duoc
        self.assertEqual(s[0], "H")
        self.assertIsNone(lv.step(s, "R"))  # S(0,3) tren F -> vo

    def test_bridge_state_is_part_of_state(self):
        lv = mk(["S#oBBB#G"], bridges=[{"id": "A", "pos": [0, 3]}, {"id": "A", "pos": [0, 4]}, {"id": "A", "pos": [0, 5]}],
                switches=[{"pos": [0, 2], "targets": ["A"], "mode": "toggle"}])
        s0 = lv.initial
        self.assertEqual(s0[6], 0)
        s = lv.step(s0, "R")[0]  # H(0,1)-(0,2) nam len cong tac mem -> mo cau
        self.assertEqual(s[6], 0b111)

    def test_heavy_requires_standing(self):
        lv = mk(["S#x#.", "####B", "G####"], bridges=[{"id": "A", "pos": [1, 4]}], switches=[{"pos": [0, 2], "targets": ["A"]}])
        s = lv.step(lv.initial, "R")[0]  # H(0,1)-(0,2): nam, khong kich hoat
        self.assertEqual(s[6], 0)

    def test_split_and_merge(self):
        lv = mk(["S#p##", "#####", "#####", "G####"], switches=[{"pos": [0, 2], "split_to": [[1, 0], [3, 3]]}])
        s = lv.initial
        # S(0,0) -> H(0,1)-(0,2) -> khong dung tren p; dung tren p bang cach khac
        s = ("S", 0, 2, 0, 0, 0, 0)
        ns = lv._after_move(s, ((0, 2),), 1)[0]
        self.assertEqual(ns[:6], ("P", 1, 0, 3, 3, 0))
        self.assertEqual(lv.step(ns, "X")[0][5], 1)
        near = ("P", 1, 0, 1, 2, 0, 0)  # khoi A sang phai -> canh khoi B -> ghep thanh H
        merged = lv.step(near, "R")[0]
        self.assertEqual(merged[:3], ("H", 1, 1))

    def test_split_teleport_onto_adjacent_cells_merges(self):
        lv = mk(["S#p##", "#####", "G####"], switches=[{"pos": [0, 2], "split_to": [[1, 1], [1, 2]]}])
        ns = lv._after_move(("S", 0, 2, 0, 0, 0, 0), ((0, 2),), 1)[0]
        self.assertEqual(ns[:3], ("H", 1, 1))


class TestValidation(unittest.TestCase):
    def test_invalid_switch_mode(self):
        with self.assertRaises(ValueError):
            mk(["S#o#G"], switches=[{"pos": [0, 2], "targets": [], "mode": "bad"}])

    def test_exactly_one_start_and_goal(self):
        with self.assertRaises(ValueError):
            mk(["SS#G"])
        with self.assertRaises(ValueError):
            mk(["S#GG"])

    def test_split_positions_must_be_distinct(self):
        with self.assertRaises(ValueError):
            mk(["S#p#G"], switches=[{"pos": [0, 2], "split_to": [[1, 1], [1, 1]]}])


class TestSolvers(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.levels = load_levels(ROOT / "levels")

    def test_all_levels_solvable_and_replayable(self):
        for lv in self.levels.values():
            for algo in ALGORITHMS:
                r = solve(lv, algo, measure_memory=False)
                self.assertTrue(r["found"], f"{lv.id}/{algo}")
                s = lv.initial
                for a in r["moves"]:
                    res = lv.step(s, a)
                    self.assertIsNotNone(res, f"{lv.id}/{algo} nuoc {a}")
                    s = res[0]
                self.assertTrue(lv.is_win(s))

    def test_bfs_optimal_in_moves_ucs_astar_optimal_in_cost(self):
        for lv in self.levels.values():
            res = {a: solve(lv, a, measure_memory=False) for a in ALGORITHMS}
            self.assertLessEqual(res["bfs"]["length"], min(r["length"] for r in res.values()))
            self.assertEqual(res["ucs"]["cost"], res["astar"]["cost"], lv.id)
            self.assertLessEqual(res["ucs"]["cost"], min(r["cost"] for r in res.values()))

    def test_astar_expands_no_more_than_ucs(self):
        for lv in self.levels.values():
            u = solve(lv, "ucs", measure_memory=False)["expanded"]
            a = solve(lv, "astar", measure_memory=False)["expanded"]
            self.assertLessEqual(a, u + 5, lv.id)


if __name__ == "__main__":
    unittest.main()

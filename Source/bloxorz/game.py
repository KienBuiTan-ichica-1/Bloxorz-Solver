"""Logic cot loi cua Bloxorz: trang thai, phep lan, cong tac, cau, gach de vo.

Trang thai (State) la mot tuple co the bam (hashable):
    (o, r, c, r2, c2, act, mask)
    o    : 'S' dung | 'H' nam ngang | 'V' nam doc | 'P' tach thanh 2 khoi lap phuong
    r, c : o 'S' la o duoc dung; 'H' la o ben trai; 'V' la o phia tren;
           'P' la toa do khoi A
    r2,c2: toa do khoi B (chi dung khi o == 'P', nguoc lai = 0)
    act  : khoi dang duoc dieu khien (0 = A, 1 = B), chi y nghia khi 'P'
    mask : bitmask trang thai dong/mo cua tung vien gach cau
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Dict, List, Optional, Tuple

DIRS = {"U": (-1, 0), "D": (1, 0), "L": (0, -1), "R": (0, 1)}
ACTIONS = ("U", "D", "L", "R", "X")  # X = doi khoi dieu khien khi dang tach
FRAGILE_PENALTY = 2  # phu phi khi khoi nam de len gach de vo

Cell = Tuple[int, int]
State = Tuple[str, int, int, int, int, int, int]


def roll(o: str, r: int, c: int, d: str) -> Tuple[str, int, int]:
    """Bang chuyen huong: (orientation, direction) -> (orientation moi, vi tri moi)."""
    if o == "S":
        if d == "U":
            return "V", r - 2, c
        if d == "D":
            return "V", r + 1, c
        if d == "L":
            return "H", r, c - 2
        return "H", r, c + 1
    if o == "H":
        if d == "U":
            return "H", r - 1, c
        if d == "D":
            return "H", r + 1, c
        if d == "L":
            return "S", r, c - 1
        return "S", r, c + 2
    # o == "V"
    if d == "U":
        return "S", r - 1, c
    if d == "D":
        return "S", r + 2, c
    if d == "L":
        return "V", r, c - 1
    return "V", r, c + 1


def footprint(o: str, r: int, c: int) -> Tuple[Cell, ...]:
    if o == "S":
        return ((r, c),)
    if o == "H":
        return ((r, c), (r, c + 1))
    return ((r, c), (r + 1, c))


class Level:
    """Mot man choi. Ky hieu luoi:
    '.' o trong | '#' san | 'S' diem bat dau | 'G' lo dich | 'F' gach de vo
    'B' gach cau (khai bao trong "bridges") | 'o' cong tac mem | 'x' cong tac nang
    'p' cong tac tach (chi cau hinh trong "switches")
    """

    def __init__(self, data: dict):
        self.data = data
        self.id = data.get("id", "custom")
        self.name = data.get("name", "Custom")
        self.group = data.get("group", "custom")
        grid: List[str] = data["grid"]
        self.rows = len(grid)
        self.cols = max(len(row) for row in grid)

        id_mask: Dict[str, int] = {}
        self.bridge_bit: Dict[Cell, int] = {}
        init_mask = 0
        for i, b in enumerate(data.get("bridges", [])):
            pos = (b["pos"][0], b["pos"][1])
            self.bridge_bit[pos] = i
            id_mask[b["id"]] = id_mask.get(b["id"], 0) | (1 << i)
            if b.get("open", False):
                init_mask |= 1 << i

        cfg = {(s["pos"][0], s["pos"][1]): s for s in data.get("switches", [])}
        self.tiles: List[List[str]] = []
        self.switches: Dict[Cell, dict] = {}
        self.start: Optional[Cell] = None
        self.goal: Optional[Cell] = None
        starts = goals = 0
        for r in range(self.rows):
            line = []
            for c in range(self.cols):
                ch = grid[r][c] if c < len(grid[r]) else "."
                if ch == "S":
                    starts += 1
                    self.start = (r, c)
                    ch = "#"
                elif ch == "G":
                    goals += 1
                    self.goal = (r, c)
                elif ch in "oxp":
                    sw = cfg.get((r, c))
                    if sw is None:
                        raise ValueError(f"Thieu cau hinh cong tac tai {(r, c)}")
                    mode = sw.get("mode", "toggle")
                    if mode not in ("toggle", "open", "close"):
                        raise ValueError(f"Kieu cong tac la '{mode}' tai {(r, c)}")
                    tmask = 0
                    for t in sw.get("targets", []):
                        if t not in id_mask:
                            raise ValueError(f"Cau '{t}' chua khai bao tai {(r, c)}")
                        tmask |= id_mask[t]
                    split_to = sw.get("split_to", [])
                    for p in split_to:
                        if len(p) != 2 or not (0 <= p[0] < self.rows and 0 <= p[1] < self.cols):
                            raise ValueError(f"Vi tri split_to khong hop le tai {(r, c)}")
                    self.switches[(r, c)] = {
                        "type": {"o": "soft", "x": "heavy", "p": "split"}[ch],
                        "mask": tmask,
                        "mode": mode,
                        "split_to": [(p[0], p[1]) for p in split_to],
                    }
                    ch = "#"
                elif ch == "B":
                    if (r, c) not in self.bridge_bit:
                        raise ValueError(f"O cau {(r, c)} chua khai bao trong bridges")
                elif ch not in ".#F":
                    raise ValueError(f"Ky hieu la '{ch}' tai {(r, c)}")
                line.append(ch)
            self.tiles.append(line)
        if starts != 1 or goals != 1:
            raise ValueError("Man choi can co dung mot 'S' va mot 'G'")
        for pos, sw in self.switches.items():
            if sw["type"] == "split":
                if len(sw["split_to"]) != 2:
                    raise ValueError("Cong tac tach can dung 2 vi tri split_to")
                if len(set(sw["split_to"])) != 2:
                    raise ValueError("Hai vi tri split_to phai khac nhau")
        self.initial: State = ("S", self.start[0], self.start[1], 0, 0, 0, init_mask)

    # ----- tien ich -----
    def cells(self, st: State) -> Tuple[Cell, ...]:
        o, r, c, r2, c2 = st[0], st[1], st[2], st[3], st[4]
        if o == "P":
            return ((r, c), (r2, c2))
        return footprint(o, r, c)

    def is_win(self, st: State) -> bool:
        return st[0] == "S" and (st[1], st[2]) == self.goal

    def _supported(self, cells, o: str, mask: int) -> bool:
        for r, c in cells:
            if r < 0 or c < 0 or r >= self.rows or c >= self.cols:
                return False
            t = self.tiles[r][c]
            if t == ".":
                return False
            if t == "B":
                if not (mask >> self.bridge_bit[(r, c)]) & 1:
                    return False
            elif t == "F" and o == "S":
                return False  # dung thang tren gach de vo -> vo
        return True

    @staticmethod
    def _apply(sw: dict, mask: int) -> int:
        if sw["mode"] == "toggle":
            return mask ^ sw["mask"]
        if sw["mode"] == "open":
            return mask | sw["mask"]
        return mask & ~sw["mask"]

    # ----- chuyen trang thai -----
    def step(self, st: State, action: str) -> Optional[Tuple[State, int]]:
        """Tra ve (trang thai moi, chi phi) hoac None neu nuoc di bat hop le."""
        if self.is_win(st):
            return None
        o, r, c, r2, c2, act, mask = st
        if action == "X":
            if o != "P":
                return None
            return (o, r, c, r2, c2, 1 - act, mask), 1
        if action not in DIRS:
            return None
        if o == "P":
            return self._step_split(st, action)
        no, nr, nc = roll(o, r, c, action)
        cells = footprint(no, nr, nc)
        if not self._supported(cells, no, mask):
            return None
        cost = 1
        if any(self.tiles[a][b] == "F" for a, b in cells):
            cost += FRAGILE_PENALTY
        return self._after_move((no, nr, nc, 0, 0, 0, mask), cells, cost)

    def _step_split(self, st: State, d: str) -> Optional[Tuple[State, int]]:
        o, r, c, r2, c2, act, mask = st
        dr, dc = DIRS[d]
        if act == 0:
            nr, nc, orr, occ = r + dr, c + dc, r2, c2
        else:
            nr, nc, orr, occ = r2 + dr, c2 + dc, r, c
        if (nr, nc) == (orr, occ):
            return None
        if not self._supported(((nr, nc),), "P", mask):
            return None
        if abs(nr - orr) + abs(nc - occ) == 1:  # hai khoi canh nhau -> ghep lai
            if nr == orr:
                new = ("H", nr, min(nc, occ), 0, 0, 0, mask)
            else:
                new = ("V", min(nr, orr), nc, 0, 0, 0, mask)
        elif act == 0:
            new = ("P", nr, nc, orr, occ, 0, mask)
        else:
            new = ("P", orr, occ, nr, nc, 1, mask)
        return self._after_move(new, ((nr, nc),), 1)

    def _after_move(self, st: State, moved, cost: int) -> Optional[Tuple[State, int]]:
        o, r, c, r2, c2, act, mask = st
        for cell in moved:
            sw = self.switches.get(cell)
            if sw is None:
                continue
            t = sw["type"]
            if t in ("heavy", "split") and o != "S":
                continue  # chi kich hoat khi khoi dung thang
            mask = self._apply(sw, mask)
            if t == "split":
                (a, b), (d, e) = sw["split_to"]
                if abs(a - d) + abs(b - e) == 1:  # teleport vao hai o canh nhau -> ghep ngay
                    o, r, c, r2, c2, act = ("H", a, min(b, e), 0, 0, 0) if a == d else ("V", min(a, d), b, 0, 0, 0)
                else:
                    o, r, c, r2, c2, act = "P", a, b, d, e, 0
        new = (o, r, c, r2, c2, act, mask)
        # cau co the dong lai ngay duoi khoi -> roi
        if not self._supported(self.cells(new), o, mask):
            return None
        return new, cost

    def neighbors(self, st: State):
        for a in ACTIONS:
            res = self.step(st, a)
            if res is not None:
                yield a, res[0], res[1]


def load_levels(folder: Path) -> Dict[str, Level]:
    out: Dict[str, Level] = {}
    for f in sorted(Path(folder).glob("*.json")):
        data = json.loads(f.read_text(encoding="utf-8"))
        lv = Level(data)
        out[lv.id] = lv
    return out

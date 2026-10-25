"""Bon bo giai tu cai dat: BFS, DFS, UCS, A*. Khong dung thu vien tim kiem co san."""
from __future__ import annotations

import heapq
import time
import tracemalloc
from collections import deque
from typing import Dict, Optional, Tuple

from .game import Level, State, footprint, roll

INF = 10**9
Parent = Dict[State, Optional[Tuple[State, str]]]


# ---------------------------------------------------------------- heuristic
class Heuristic:
    """Heuristic cho A*: khoang cach tren bai toan noi long (relaxed).

    Noi long: bo qua cau (coi nhu san), gach de vo (coi nhu san thuong) va cong tac.
    Moi nuoc di that deu la nuoc di hop le cua bai toan noi long nen
    h(n) = so nuoc lan toi thieu trong bai toan noi long <= so nuoc lan that.
    Moi nuoc co chi phi >= 1 nen h cung <= chi phi that -> admissible.

    Voi man co cong tac tach (teleport), duong that co the 'nhay tat' nen:
      - trang thai 'P' (dang tach): can it nhat 2 nuoc (ghep lai + dung len lo) -> h = 2
      - trang thai khac: h = min(d_goal, d_switch + extra) voi d_switch la khoang cach
        noi long toi viec dung tren cong tac tach; extra = 1 neu split_to canh nhau
        (teleport ghep ngay, chi con 1 nuoc de dung len lo) va 2 neu khong.
    """

    def __init__(self, level: Level):
        self.level = level
        self.dist_goal = self._bfs([("S",) + tuple(level.goal)])
        splits_adj, splits_far = [], []
        for pos, sw in level.switches.items():
            if sw["type"] != "split":
                continue
            (a, b), (d, e) = sw["split_to"]
            (splits_adj if abs(a - d) + abs(b - e) == 1 else splits_far).append(pos)
        self.dist_split_adj = self._bfs([("S",) + pos for pos in splits_adj]) if splits_adj else None
        self.dist_split_far = self._bfs([("S",) + pos for pos in splits_far]) if splits_far else None

    def _walkable(self, cells) -> bool:
        lv = self.level
        for r, c in cells:
            if r < 0 or c < 0 or r >= lv.rows or c >= lv.cols or lv.tiles[r][c] == ".":
                return False
        return True

    def _bfs(self, sources):
        dist = {s: 0 for s in sources}
        q = deque(sources)
        while q:
            o, r, c = q.popleft()
            for d in "UDLR":
                no, nr, nc = roll(o, r, c, d)
                key = (no, nr, nc)
                if key in dist or not self._walkable(footprint(no, nr, nc)):
                    continue
                dist[key] = dist[(o, r, c)] + 1
                q.append(key)
        return dist

    def __call__(self, st: State) -> int:
        if st[0] == "P":
            return 2
        key = (st[0], st[1], st[2])
        d = self.dist_goal.get(key, INF)
        if self.dist_split_adj is not None:
            d = min(d, self.dist_split_adj.get(key, INF) + 1)
        if self.dist_split_far is not None:
            d = min(d, self.dist_split_far.get(key, INF) + 2)
        return d if d < INF else INF // 2


# ---------------------------------------------------------------- thuat toan
def bfs(level: Level, max_nodes: int):
    start = level.initial
    parent: Parent = {start: None}
    if level.is_win(start):
        return start, parent, 0
    q = deque([start])
    expanded = 0
    while q:
        s = q.popleft()
        expanded += 1
        if expanded > max_nodes:
            return None, parent, expanded
        for a, ns, _ in level.neighbors(s):
            if ns in parent:
                continue
            parent[ns] = (s, a)
            if level.is_win(ns):
                return ns, parent, expanded
            q.append(ns)
    return None, parent, expanded


def dfs(level: Level, max_nodes: int):
    """DFS do thi: danh dau da tham khi lay ra khoi stack de tranh chu trinh."""
    start = level.initial
    parent: Parent = {}
    stack = [(start, None, None)]
    expanded = 0
    while stack:
        s, p, a = stack.pop()
        if s in parent:
            continue
        parent[s] = None if p is None else (p, a)
        expanded += 1
        if level.is_win(s):
            return s, parent, expanded
        if expanded > max_nodes:
            return None, parent, expanded
        for a2, ns, _ in reversed(list(level.neighbors(s))):
            if ns not in parent:
                stack.append((ns, s, a2))
    return None, parent, expanded


def ucs(level: Level, max_nodes: int):
    start = level.initial
    parent: Parent = {start: None}
    best = {start: 0}
    heap = [(0, 0, start)]
    tie = 0
    expanded = 0
    while heap:
        g, _, s = heapq.heappop(heap)
        if g > best[s]:
            continue
        expanded += 1
        if level.is_win(s):
            return s, parent, expanded
        if expanded > max_nodes:
            return None, parent, expanded
        for a, ns, c in level.neighbors(s):
            ng = g + c
            if ng < best.get(ns, INF):
                best[ns] = ng
                parent[ns] = (s, a)
                tie += 1
                heapq.heappush(heap, (ng, tie, ns))
    return None, parent, expanded


def astar(level: Level, max_nodes: int):
    """A* cho phep mo lai nut khi tim duoc g nho hon (an toan neu h khong nhat quan)."""
    h = Heuristic(level)
    start = level.initial
    parent: Parent = {start: None}
    best = {start: 0}
    heap = [(h(start), 0, 0, start)]
    tie = 0
    expanded = 0
    while heap:
        _, _, g, s = heapq.heappop(heap)
        if g > best[s]:
            continue
        expanded += 1
        if level.is_win(s):
            return s, parent, expanded
        if expanded > max_nodes:
            return None, parent, expanded
        for a, ns, c in level.neighbors(s):
            ng = g + c
            if ng < best.get(ns, INF):
                best[ns] = ng
                parent[ns] = (s, a)
                tie += 1
                heapq.heappush(heap, (ng + h(ns), tie, ng, ns))
    return None, parent, expanded


ALGORITHMS = {"bfs": bfs, "dfs": dfs, "ucs": ucs, "astar": astar}


def _path(parent: Parent, goal: State):
    acts, states, s = [], [goal], goal
    while parent[s] is not None:
        p, a = parent[s]
        acts.append(a)
        states.append(p)
        s = p
    acts.reverse()
    states.reverse()
    return "".join(acts), states


def solve(level: Level, algo: str, max_nodes: int = 2_000_000, measure_memory: bool = True) -> dict:
    """Chay mot thuat toan va do: thoi gian, bo nho dinh, so nut mo rong, do dai loi giai.

    Thoi gian do o lan chay dau (khong bat tracemalloc vi tracemalloc lam cham ro ret);
    bo nho dinh do o lan chay thu hai.
    """
    fn = ALGORITHMS[algo]
    t0 = time.perf_counter()
    goal, parent, expanded = fn(level, max_nodes)
    elapsed = (time.perf_counter() - t0) * 1000

    mem_kb = 0.0
    if measure_memory:
        tracemalloc.start()
        try:
            fn(level, max_nodes)
            _, peak = tracemalloc.get_traced_memory()
        finally:
            tracemalloc.stop()
        mem_kb = peak / 1024

    result = {
        "algorithm": algo,
        "level_id": level.id,
        "found": goal is not None,
        "moves": "",
        "length": 0,
        "cost": 0,
        "expanded": expanded,
        "time_ms": round(elapsed, 3),
        "memory_kb": round(mem_kb, 1),
        "trace": [],
    }
    if goal is None:
        result["reason"] = "limit" if expanded > max_nodes else "unsolvable"
        return result
    moves, states = _path(parent, goal)
    cost = 0
    for prev, a in zip(states, moves):
        cost += level.step(prev, a)[1]
    result.update(moves=moves, length=len(moves), cost=cost, trace=[list(s) for s in states])
    return result

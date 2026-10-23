"""Search algorithms for Bloxorz (BFS, DFS, IDS, UCS, A*).

All algorithms are implemented from scratch on top of a shared successor
function.  Every run records:

* search time (seconds, ``time.perf_counter``),
* peak memory during the search (bytes, measured with ``tracemalloc``),
* number of expanded nodes,
* solution length (number of moves) and total path cost.
"""

from __future__ import annotations

import heapq
import time
import tracemalloc
from collections import deque
from collections.abc import Callable
from dataclasses import dataclass, field

from .engine import ACTION_NAMES, Engine, GameState

# ----------------------------------------------------------------- cost models
COST_MODELS = ("uniform", "risk")


def uniform_cost(state: GameState, action: str, ns: GameState) -> float:
    """Every action costs 1 (BFS-equivalent UCS)."""
    return 1.0


def risk_cost(engine: Engine):
    """Non-uniform cost model (used to justify the UCS task).

    Evaluated on the *landing* state of the move, i.e. the state produced by
    :meth:`Engine.landing_state` before switch/teleport effects - exactly the
    state the engine uses to decide which switches fire.

    * Switch-control (``X``) costs 1: it only flips ``active``, nothing moves.
    * Any other action that presses at least one switch is *cheap* (cost 1):
      it makes progress in the puzzle, so the search is encouraged to use it.
    * Any other action costs 2.
    * Landing on a fragile tile adds +1 (risky).

    Every cost is >= 1, which is what keeps the goal-distance heuristic
    admissible with respect to this cost model.
    """
    def cost(state: GameState, action: str, ns: GameState) -> float:
        land = engine.landing_state(state, action)
        if land is None:
            return 1.0  # control-switch: no movement at all
        trigger_cells = engine.trigger_cells(state, action)
        c = 1.0 if engine.switches_triggered(land, trigger_cells) else 2.0
        if any(cell in engine.fragile for cell in land.occupied()):
            c += 1.0
        return c
    return cost


def make_cost_model(engine: Engine, name: str) -> Callable:
    if name == "uniform":
        return uniform_cost
    if name == "risk":
        return risk_cost(engine)
    raise ValueError(f"Unknown cost model {name!r}")


# ------------------------------------------------------------------ heuristic
class GoalDistanceHeuristic:
    """Admissible heuristic h(s).

    Pre-compute, on the *relaxed* grid (every non-void cell is walkable,
    bridges / fragile / switches are ignored), the shortest-path distance
    D(cell, goal) for all cells.  Grid moves cost 1 and a split-switch
    teleport is a directed zero-cost edge from the switch cell to each
    teleport target.  Distances are computed backwards from the goal with a
    0-1 BFS, so a teleport target can reach its switch source for free.
    Then::

        h(state) = min over occupied cells c of ceil(D(c, goal) / 2)

    Admissibility: a single roll moves the closest occupied cell at most two
    grid cells closer to the goal (a standing block tips over onto the two
    cells *in front of* it, so the leading cell jumps from c to c+2).  A
    teleport does not add a move of its own: it is part of the roll that
    lands on the split switch.  Hence at least ceil(D/2) moves are needed,
    and h never overestimates.

    Consistency: D can decrease by at most 2 per roll, so ceil(D/2) changes
    by at most 1 per move, which is <= every action cost.  For a teleport,
    D(source) is the minimum of D(target) over the targets, so h does not
    drop when the block teleports.  A* with a closed set therefore remains
    optimal.
    """

    def __init__(self, engine: Engine):
        self.goal = engine.goal
        self.dist: dict[tuple[int, int], int] = {}
        teleport_sources: dict[tuple[int, int], set[tuple[int, int]]] = {}
        for sw in engine.switches:
            if sw.kind == "split" and sw.teleport is not None:
                for target in sw.teleport:
                    teleport_sources.setdefault(target, set()).update(sw.cells)

        q = deque([self.goal])
        self.dist[self.goal] = 0
        while q:
            cell = q.popleft()
            r, c = cell
            d = self.dist[cell]
            for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                nxt = (r + dr, c + dc)
                if nxt in engine.relaxed_cells and d + 1 < self.dist.get(nxt, 10**9):
                    self.dist[nxt] = d + 1
                    q.append(nxt)
            for source in teleport_sources.get(cell, ()):
                if d < self.dist.get(source, 10**9):
                    self.dist[source] = d
                    q.appendleft(source)

    def __call__(self, state: GameState) -> float:
        best = None
        for cell in state.occupied():
            d = self.dist.get(cell)
            if d is None:
                continue
            h_cell = (d + 1) // 2
            best = h_cell if best is None else min(best, h_cell)
        return float(best) if best is not None else 0.0


# -------------------------------------------------------------------- results
@dataclass
class SearchResult:
    algorithm: str
    cost_model: str
    found: bool
    actions: list[str] = field(default_factory=list)
    solution_length: int = 0
    path_cost: float = 0.0
    expanded_nodes: int = 0
    search_time_s: float = 0.0
    peak_memory_bytes: int = 0
    max_frontier: int = 0
    timed_out: bool = False

    def actions_pretty(self) -> list[str]:
        return [ACTION_NAMES[a] for a in self.actions]


def _reconstruct(parent: dict[GameState, GameState | None],
                 action_of: dict[GameState, str],
                 goal: GameState) -> list[str]:
    actions: list[str] = []
    cur = goal
    while parent[cur] is not None:
        actions.append(action_of[cur])
        cur = parent[cur]
    actions.reverse()
    return actions


def _path_cost(cost_fn, engine: Engine, actions) -> float:
    """Replay the action sequence from the initial state to sum its cost."""
    state = engine.initial_state()
    total = 0.0
    for action in actions:
        ns = engine.result(state, action)
        if ns is None:
            break
        total += cost_fn(state, action, ns)
        state = ns
    return total


def _finish(algorithm: str, cost_model: str, found: bool, actions, expanded,
            elapsed: float, peak_memory: int, cost_fn, engine: Engine,
            timed_out: bool = False) -> SearchResult:
    """Build a result after the search loop has stopped.

    ``elapsed`` must be captured *before* replaying the path for its cost:
    ``_path_cost`` is reporting work, not search work.
    """
    return SearchResult(
        algorithm=algorithm,
        cost_model=cost_model,
        found=found,
        actions=actions,
        solution_length=len(actions),
        path_cost=_path_cost(cost_fn, engine, actions) if found else 0.0,
        expanded_nodes=expanded,
        search_time_s=elapsed,
        peak_memory_bytes=peak_memory,
        timed_out=timed_out,
    )


def _aborted(t0: float, time_limit_s: float | None,
             should_stop: Callable[[], bool] | None) -> bool:
    if should_stop is not None and should_stop():
        return True
    return time_limit_s is not None and time.perf_counter() - t0 >= time_limit_s


def _memory_snapshot(measure_memory: bool) -> int:
    return tracemalloc.get_traced_memory()[1] if measure_memory else 0


# ----------------------------------------------------------------------- BFS
def solve_bfs(engine: Engine, cost_model: str = "uniform",
              measure_memory: bool = True, **_ignored) -> SearchResult:
    """Breadth-First Search: optimal in number of moves (uniform cost 1)."""
    cost_fn = make_cost_model(engine, cost_model)
    start = engine.initial_state()
    if measure_memory:
        tracemalloc.start()
    t0 = time.perf_counter()
    try:
        frontier = deque([start])
        parent: dict[GameState, GameState | None] = {start: None}
        action_of: dict[GameState, str] = {}
        expanded = 0
        max_frontier = 1
        found = False
        goal_state = start
        while frontier:
            max_frontier = max(max_frontier, len(frontier))
            s = frontier.popleft()
            expanded += 1
            if engine.is_goal(s):
                found, goal_state = True, s
                break
            for action, ns in engine.transitions(s):
                if ns not in parent:
                    parent[ns] = s
                    action_of[ns] = action
                    frontier.append(ns)
        elapsed = time.perf_counter() - t0
        peak = _memory_snapshot(measure_memory)
        res = _finish("BFS", cost_model, found,
                      _reconstruct(parent, action_of, goal_state) if found else [],
                      expanded, elapsed, peak, cost_fn, engine)
        res.max_frontier = max_frontier
        return res
    finally:
        if measure_memory:
            tracemalloc.stop()


# ----------------------------------------------------------------------- DFS
def solve_dfs(engine: Engine, cost_model: str = "uniform",
              measure_memory: bool = True,
              time_limit_s: float | None = None,
              should_stop: Callable[[], bool] | None = None) -> SearchResult:
    """Depth-First Search with a visited set (avoids cycles).

    ``time_limit_s`` / ``should_stop`` let experiments and the GUI abort a
    run that is taking too long.  The partial result has ``found=False`` and
    ``timed_out=True``.
    """
    cost_fn = make_cost_model(engine, cost_model)
    start = engine.initial_state()
    if measure_memory:
        tracemalloc.start()
    t0 = time.perf_counter()
    timed_out = False
    try:
        stack = [start]
        parent: dict[GameState, GameState | None] = {start: None}
        action_of: dict[GameState, str] = {}
        visited = {start}
        expanded = 0
        max_frontier = 1
        found = False
        goal_state = start
        while stack:
            if expanded % 256 == 0 and _aborted(t0, time_limit_s, should_stop):
                timed_out = True
                break
            max_frontier = max(max_frontier, len(stack))
            s = stack.pop()
            expanded += 1
            if engine.is_goal(s):
                found, goal_state = True, s
                break
            succ = list(engine.transitions(s))
            for action, ns in reversed(succ):  # reversed -> natural order
                if ns not in visited:
                    visited.add(ns)
                    parent[ns] = s
                    action_of[ns] = action
                    stack.append(ns)
        elapsed = time.perf_counter() - t0
        peak = _memory_snapshot(measure_memory)
        actions = _reconstruct(parent, action_of, goal_state) if found else []
        res = _finish("DFS", cost_model, found, actions, expanded, elapsed, peak,
                      cost_fn, engine, timed_out=timed_out)
        res.max_frontier = max_frontier
        return res
    finally:
        if measure_memory:
            tracemalloc.stop()


# ----------------------------------------------------------------------- IDS
def solve_ids(engine: Engine, cost_model: str = "uniform",
              max_depth: int = 200, measure_memory: bool = True,
              time_limit_s: float | None = None,
              should_stop: Callable[[], bool] | None = None) -> SearchResult:
    """Iterative-Deepening Search: complete AND optimal in number of moves.

    Cycle handling uses a per-iteration transposition table that records, for
    every state, the shallowest depth at which it was reached in the current
    iteration.  A state reached again at a depth ``d2 >= d1`` is pruned: it was
    already expanded at depth ``d1`` with at least as much remaining budget, so
    no solution can be missed - but the exponential re-exploration of the same
    state through different paths is eliminated (without this table Level 9
    needs >100k expansions, with it only a few hundred).

    Note for the report: ``SearchResult.max_frontier`` is the maximum size of
    the transposition table, i.e. the number of distinct states reached in one
    iteration, not the size of a real BFS frontier.
    """
    cost_fn = make_cost_model(engine, cost_model)
    start = engine.initial_state()
    if measure_memory:
        tracemalloc.start()
    t0 = time.perf_counter()
    timed_out = False

    class _Aborted(Exception):
        pass

    try:
        expanded = 0
        max_table = 1
        found = False
        actions: list[str] = []

        def dls(state: GameState, depth: int, path: list[str],
                table: dict[GameState, int], limit: int) -> tuple | None:
            """Return (goal_state, actions) or None.  Counts expanded nodes."""
            nonlocal expanded, max_table
            if expanded % 256 == 0 and _aborted(t0, time_limit_s, should_stop):
                raise _Aborted
            reached = limit - depth
            seen_at = table.get(state)
            if seen_at is not None and seen_at <= reached:
                return None  # already explored from at least as shallow a depth
            table[state] = reached
            max_table = max(max_table, len(table))
            if engine.is_goal(state):
                return state, path
            if depth == 0:
                return None
            expanded += 1
            for action, ns in engine.transitions(state):
                hit = dls(ns, depth - 1, path + [action], table, limit)
                if hit is not None:
                    return hit
            return None

        try:
            for depth in range(max_depth + 1):
                hit = dls(start, depth, [], {}, depth)
                if hit is not None:
                    found = True
                    actions = hit[1]
                    break
        except _Aborted:
            timed_out = True
        elapsed = time.perf_counter() - t0
        peak = _memory_snapshot(measure_memory)
        res = _finish("IDS", cost_model, found, actions, expanded, elapsed,
                      peak, cost_fn, engine, timed_out=timed_out)
        res.max_frontier = max_table
        return res
    finally:
        if measure_memory:
            tracemalloc.stop()


# ----------------------------------------------------------------------- UCS
def solve_ucs(engine: Engine, cost_model: str = "risk",
              measure_memory: bool = True, **_ignored) -> SearchResult:
    """Uniform-Cost Search: optimal with respect to the chosen cost function."""
    cost_fn = make_cost_model(engine, cost_model)
    start = engine.initial_state()
    if measure_memory:
        tracemalloc.start()
    t0 = time.perf_counter()
    try:
        g: dict[GameState, float] = {start: 0.0}
        parent: dict[GameState, GameState | None] = {start: None}
        action_of: dict[GameState, str] = {}
        counter = 0
        heap = [(0.0, counter, start)]
        closed = set()
        expanded = 0
        max_frontier = 1
        found = False
        goal_state = start
        while heap:
            max_frontier = max(max_frontier, len(heap))
            gc, _, s = heapq.heappop(heap)
            if s in closed or gc > g.get(s, float("inf")):
                continue
            closed.add(s)
            expanded += 1
            if engine.is_goal(s):
                found, goal_state = True, s
                break
            for action, ns in engine.transitions(s):
                ng = gc + cost_fn(s, action, ns)
                if ng < g.get(ns, float("inf")):
                    g[ns] = ng
                    parent[ns] = s
                    action_of[ns] = action
                    counter += 1
                    heapq.heappush(heap, (ng, counter, ns))
        elapsed = time.perf_counter() - t0
        peak = _memory_snapshot(measure_memory)
        res = _finish("UCS", cost_model, found,
                      _reconstruct(parent, action_of, goal_state) if found else [],
                      expanded, elapsed, peak, cost_fn, engine)
        res.max_frontier = max_frontier
        return res
    finally:
        if measure_memory:
            tracemalloc.stop()


# ------------------------------------------------------------------------ A*
def solve_astar(engine: Engine, cost_model: str = "risk",
                measure_memory: bool = True, **_ignored) -> SearchResult:
    """A* search with the admissible goal-distance heuristic.

    The measurement window (``tracemalloc`` + timer) is opened *before* the
    heuristic table is built, so both its time and its memory are part of the
    reported figures.
    """
    cost_fn = make_cost_model(engine, cost_model)
    if measure_memory:
        tracemalloc.start()
    t0 = time.perf_counter()
    try:
        h = GoalDistanceHeuristic(engine)
        start = engine.initial_state()
        g: dict[GameState, float] = {start: 0.0}
        parent: dict[GameState, GameState | None] = {start: None}
        action_of: dict[GameState, str] = {}
        counter = 0
        heap = [(h(start), 0.0, counter, start)]
        closed = set()
        expanded = 0
        max_frontier = 1
        found = False
        goal_state = start
        while heap:
            max_frontier = max(max_frontier, len(heap))
            _f, gc, _, s = heapq.heappop(heap)
            if s in closed or gc > g.get(s, float("inf")):
                continue
            closed.add(s)
            expanded += 1
            if engine.is_goal(s):
                found, goal_state = True, s
                break
            for action, ns in engine.transitions(s):
                ng = gc + cost_fn(s, action, ns)
                if ng < g.get(ns, float("inf")):
                    g[ns] = ng
                    parent[ns] = s
                    action_of[ns] = action
                    counter += 1
                    heapq.heappush(heap, (ng + h(ns), ng, counter, ns))
        elapsed = time.perf_counter() - t0
        peak = _memory_snapshot(measure_memory)
        res = _finish("A*", cost_model, found,
                      _reconstruct(parent, action_of, goal_state) if found else [],
                      expanded, elapsed, peak, cost_fn, engine)
        res.max_frontier = max_frontier
        return res
    finally:
        if measure_memory:
            tracemalloc.stop()


SOLVERS = {
    "BFS": solve_bfs,
    "DFS": solve_dfs,
    "IDS": solve_ids,
    "UCS": solve_ucs,
    "A*": solve_astar,
}


def solve(engine: Engine, algorithm: str, cost_model: str = "risk",
          measure_memory: bool = True, time_limit_s: float | None = None,
          should_stop: Callable[[], bool] | None = None) -> SearchResult:
    """Run ``algorithm`` (one of :data:`SOLVERS`) on ``engine``.

    BFS/DFS/IDS are move-optimal, so they always report the ``uniform``
    cost model; UCS/A* use ``cost_model`` (``uniform`` or ``risk``).
    ``time_limit_s`` and ``should_stop`` are honoured by DFS and IDS (the
    algorithms that can run for a long time); other solvers ignore them.
    """
    try:
        fn = SOLVERS[algorithm]
    except KeyError:
        raise ValueError(
            f"Unknown algorithm {algorithm!r}; choose from {sorted(SOLVERS)}"
        ) from None
    if algorithm in ("BFS", "DFS", "IDS"):
        if algorithm == "BFS":
            return fn(engine, measure_memory=measure_memory)
        return fn(engine, measure_memory=measure_memory,
                  time_limit_s=time_limit_s, should_stop=should_stop)
    return fn(engine, cost_model=cost_model, measure_memory=measure_memory)

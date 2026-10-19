from collections import deque
from pathlib import Path

from bloxorz.engine import Engine
from bloxorz.search import GoalDistanceHeuristic, make_cost_model
from bloxorz.stage import load_stages

STAGES = {s.name: s for s in load_stages(Path(__file__).parent.parent / "stages")}

SAMPLE_STAGES = ["Level 1 - Basic", "Level 7 - Fragile + Bridge",
                 "Level 10 - Fragile + Heavy Switch"]


def reachable(engine: Engine, max_depth: int) -> list:
    start = engine.initial_state()
    depth = {start: 0}
    queue = deque([start])
    while queue:
        state = queue.popleft()
        if depth[state] >= max_depth:
            continue
        for _, ns in engine.transitions(state):
            if ns not in depth:
                depth[ns] = depth[state] + 1
                queue.append(ns)
    return list(depth)


def optimal_length(engine: Engine, start) -> int | None:
    """Shortest number of moves from ``start`` to the goal (BFS, cost 1)."""
    if engine.is_goal(start):
        return 0
    seen = {start}
    queue = deque([(start, 0)])
    while queue:
        state, dist = queue.popleft()
        for _, ns in engine.transitions(state):
            if ns in seen:
                continue
            if engine.is_goal(ns):
                return dist + 1
            seen.add(ns)
            queue.append((ns, dist + 1))
    return None


def test_h_is_zero_at_goal():
    for name in SAMPLE_STAGES:
        engine = Engine(STAGES[name])
        h = GoalDistanceHeuristic(engine)
        state = engine.initial_state()
        seen = {state}
        queue = deque([state])
        goal_state = None
        while queue and goal_state is None:
            cur = queue.popleft()
            if engine.is_goal(cur):
                goal_state = cur
                break
            for _, ns in engine.transitions(cur):
                if ns not in seen:
                    seen.add(ns)
                    queue.append(ns)
        assert goal_state is not None, f"{name}: no goal found"
        assert h(goal_state) == 0.0


def test_heuristic_admissible_and_consistent():
    """h(s) must never exceed the true remaining cost, and must be consistent.

    Checked empirically: the true remaining cost is measured with BFS from a
    sample of reachable states, and the triangle inequality
    ``h(s) <= c(s, a, s') + h(s')`` is checked for every sampled transition
    under both cost models.
    """
    for name in SAMPLE_STAGES:
        engine = Engine(STAGES[name])
        h = GoalDistanceHeuristic(engine)
        costs = [make_cost_model(engine, "uniform"), make_cost_model(engine, "risk")]

        states = reachable(engine, max_depth=9)
        step = max(1, len(states) // 50)
        sample = states[::step][:50]
        assert len(sample) >= 5, f"{name}: too few sampled states"

        for state in sample:
            true_cost = optimal_length(engine, state)
            if true_cost is None:
                continue
            assert h(state) <= true_cost, (
                f"{name}: h={h(state)} overestimates true cost {true_cost}"
            )
            for action, ns in engine.transitions(state):
                for cost_fn in costs:
                    c = cost_fn(state, action, ns)
                    assert h(state) <= c + h(ns) + 1e-9, (
                        f"{name}: inconsistent at {action}: "
                        f"h(s)={h(state)} > {c} + h(s')={h(ns)}"
                    )

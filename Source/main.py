"""Bloxorz Solver entry point.

Usage
-----
::

    python main.py                          # launch the GUI (default)
    python main.py --list                   # list the available stages
    python main.py --solve BFS              # solve stage 1 without the GUI
    python main.py --solve A* --stage 7     # solve a specific stage
    python main.py --solve UCS --cost risk  # choose the UCS/A* cost model
    python main.py --all                    # run every solver on every stage
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from bloxorz.engine import Engine
from bloxorz.search import SOLVERS, solve
from bloxorz.stage import load_stages

STAGE_DIR = Path(__file__).resolve().parent / "stages"
ACTION_LABELS = {"U": "Up", "D": "Down", "L": "Left", "R": "Right",
                 "X": "Switch cube"}


def fmt_result(res, name: str) -> str:
    status = "" if res.found else "  [NO SOLUTION]"
    return (
        f"{name:<28} moves={res.solution_length:<4} cost={res.path_cost:<6.1f} "
        f"expanded={res.expanded_nodes:<7} time={res.search_time_s * 1000:7.2f}ms "
        f"mem={res.peak_memory_bytes / 1024:7.1f}KiB{status}"
    )


def cmd_list() -> None:
    stages = load_stages(STAGE_DIR)
    if not stages:
        raise SystemExit(f"No stage JSON files found in {STAGE_DIR}")
    for i, stage in enumerate(stages, 1):
        print(f"{i:2}. [{stage.group or '-':16}] {stage.name}")
        if stage.description:
            print(f"      {stage.description}")


def cmd_solve(stage_idx: int, algorithm: str, cost_model: str,
              verbose: bool) -> None:
    stages = load_stages(STAGE_DIR)
    if not 1 <= stage_idx <= len(stages):
        raise SystemExit(f"stage must be between 1 and {len(stages)}")
    stage = stages[stage_idx - 1]
    engine = Engine(stage)
    print(f"Stage {stage_idx}/{len(stages)}: {stage.name}  ({stage.group})")
    res = solve(engine, algorithm, cost_model=cost_model)
    print(fmt_result(res, f"{algorithm} [{res.cost_model}]"))
    if algorithm in ("BFS", "DFS", "IDS") and cost_model != "uniform":
        print(f"  note: {algorithm} is move-optimal, "
              f"--cost {cost_model} only applies to UCS/A*")
    if verbose and res.found:
        print("Solution:", " ".join(ACTION_LABELS.get(a, a) for a in res.actions))
    elif not res.found:
        raise SystemExit(1)


def cmd_all(cost_model: str) -> None:
    stages = load_stages(STAGE_DIR)
    for i, stage in enumerate(stages, 1):
        engine = Engine(stage)
        print(f"\n=== Stage {i}: {stage.name} ===")
        for algo in SOLVERS:
            res = solve(engine, algo, cost_model=cost_model)
            print("  " + fmt_result(res, f"{algo} [{res.cost_model}]"))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Bloxorz solver")
    parser.add_argument("--gui", action="store_true",
                        help="launch the OpenGL 3D GUI (default when no options given)")
    parser.add_argument("--list", action="store_true", help="list available stages")
    parser.add_argument("--solve", metavar="ALGO",
                        choices=sorted(SOLVERS),
                        help="run one solver without the GUI")
    parser.add_argument("--all", action="store_true",
                        help="run every solver on every stage")
    parser.add_argument("--stage", type=int, default=1,
                        help="stage number for --solve (default: 1)")
    parser.add_argument("--cost", default="risk", choices=["uniform", "risk"],
                        help="cost model for UCS/A*")
    parser.add_argument("--verbose", "-v", action="store_true",
                        help="print the move sequence")
    args = parser.parse_args(argv)

    if args.list:
        cmd_list()
        return 0
    if args.solve:
        cmd_solve(args.stage, args.solve, args.cost, args.verbose)
        return 0
    if args.all:
        cmd_all(args.cost)
        return 0

    from gui_gl import main as gui_main
    gui_main()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

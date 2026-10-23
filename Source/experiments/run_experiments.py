"""Run every solver on every stage and record the measurements.

Usage::

    python experiments/run_experiments.py            # 3 repeats per run
    python experiments/run_experiments.py --runs 5
    python experiments/run_experiments.py --skip-ids # skip the slow IDS sweep

Output: ``experiments/results.csv`` with one row per (stage, algorithm).

* ``search_time_s``  - median wall-clock time over the repeats.  The timing
  runs have ``tracemalloc`` disabled so the instrumentation does not distort
  the measurement.
* ``peak_memory_bytes`` - peak allocation from a separate ``tracemalloc`` run.
* ``expanded_nodes`` / ``solution_length`` / ``path_cost`` - from the first run
  (the algorithms are deterministic, so these are identical for every repeat)
* ``timed_out`` - ``True`` when DFS/IDS exceeded ``--timeout`` seconds.
"""

from __future__ import annotations

import argparse
import csv
import statistics
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
if str(HERE.parent) not in sys.path:
    sys.path.insert(0, str(HERE.parent))

from bloxorz.engine import Engine
from bloxorz.search import SOLVERS, solve
from bloxorz.stage import load_stages

STAGE_DIR = HERE.parent / "stages"
OUT_PATH = HERE / "results.csv"

ALGOS = list(SOLVERS)  # BFS, DFS, IDS, UCS, A*
COLUMNS = [
    "stage", "group", "algorithm", "cost_model", "runs", "found", "timed_out",
    "solution_length", "path_cost", "expanded_nodes", "search_time_s",
    "peak_memory_bytes", "max_frontier",
]


def run_combo(engine: Engine, algo: str, repeats: int,
              timeout_s: float) -> dict:
    times: list[float] = []
    first = None

    for i in range(repeats):
        res = solve(engine, algo, measure_memory=False,
                    time_limit_s=timeout_s)
        times.append(res.search_time_s)
        if first is None:
            first = res
        if res.timed_out:
            break

    assert first is not None
    mem = solve(engine, algo, measure_memory=True,
                time_limit_s=timeout_s)
    return {
        "stage": "", "group": "", "algorithm": first.algorithm,
        "cost_model": first.cost_model, "runs": len(times),
        "found": first.found, "timed_out": first.timed_out or mem.timed_out,
        "solution_length": first.solution_length,
        "path_cost": f"{first.path_cost:.3f}",
        "expanded_nodes": first.expanded_nodes,
        "search_time_s": f"{statistics.median(times):.6f}",
        "peak_memory_bytes": mem.peak_memory_bytes,
        "max_frontier": first.max_frontier,
    }


def run(repeats: int = 3, include_ids: bool = True,
        timeout_s: float = 10.0) -> Path:
    stages = load_stages(STAGE_DIR)
    algos = list(ALGOS) if include_ids else [a for a in ALGOS if a != "IDS"]

    with OUT_PATH.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=COLUMNS)
        writer.writeheader()
        for stage in stages:
            engine = Engine(stage)
            for algo in algos:
                try:
                    row = run_combo(engine, algo, repeats, timeout_s)
                except Exception as exc:  # noqa: BLE001 - keep the sweep alive
                    print(f"  !! {stage.name} / {algo} failed: {exc}")
                    continue
                row["stage"] = stage.name
                row["group"] = stage.group
                writer.writerow(row)
                status = " TIMEOUT" if row["timed_out"] else ""
                print(f"  {stage.name:<40} {algo:<4} "
                      f"len={row['solution_length']:<3} "
                      f"exp={row['expanded_nodes']:<7} "
                      f"t={float(row['search_time_s']) * 1000:8.2f}ms"
                      f"{status}")
    print(f"\nWrote {OUT_PATH}")
    return OUT_PATH


def main() -> None:
    parser = argparse.ArgumentParser(description="Bloxorz solver experiments")
    parser.add_argument("--runs", type=int, default=3,
                        help="repeats per (stage, algorithm) (default: 3)")
    parser.add_argument("--skip-ids", action="store_true",
                        help="skip IDS (it is much slower on the open field)")
    parser.add_argument("--timeout", type=float, default=10.0,
                        help="per-run timeout for DFS/IDS in seconds "
                             "(default: 10)")
    args = parser.parse_args()
    run(repeats=max(1, args.runs), include_ids=not args.skip_ids,
        timeout_s=max(0.0, args.timeout))


if __name__ == "__main__":
    main()

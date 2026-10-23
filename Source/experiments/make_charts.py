"""Generate charts and summary tables from experiments/results.csv.

Usage::

    python experiments/run_experiments.py    # (re)produce results.csv
    python experiments/make_charts.py        # charts + summary into charts/

Requires matplotlib (already listed in requirements.txt).
"""

from __future__ import annotations

import csv
import re
import statistics
from collections import defaultdict
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

HERE = Path(__file__).resolve().parent
CSV_PATH = HERE / "results.csv"
OUT_DIR = HERE / "charts"

ALGO_ORDER = ["BFS", "DFS", "IDS", "UCS", "A*"]
ALGO_COLORS = {
    "BFS": "#4a90d9",
    "DFS": "#e07b39",
    "IDS": "#56d274",
    "UCS": "#c968d6",
    "A*": "#e2c94c",
}
METRICS = [
    ("expanded_nodes", "Expanded nodes"),
    ("search_time_s", "Search time (s)"),
    ("peak_memory_bytes", "Peak memory (KiB)"),
    ("solution_length", "Solution length (moves)"),
]


def stage_key(name: str) -> list:
    """Natural order: Level 1, Level 2, ..., Level 15."""
    return [int(part) if part.isdigit() else part.lower()
            for part in re.split(r"(\d+)", name)]


def load_rows() -> list[dict]:
    with CSV_PATH.open("r", encoding="utf-8", newline="") as fh:
        rows = list(csv.DictReader(fh))
    for row in rows:
        row["expanded_nodes"] = int(row["expanded_nodes"])
        row["solution_length"] = int(row["solution_length"])
        row["search_time_s"] = float(row["search_time_s"])
        row["peak_memory_bytes"] = int(row["peak_memory_bytes"])
        row["path_cost"] = float(row["path_cost"])
        row["max_frontier"] = int(row["max_frontier"])
        row["found"] = row["found"] in ("True", "true", "1")
    return rows


def chart_metric(rows: list[dict], key: str, title: str, filename: str,
                 logscale: bool = False, divide: float = 1.0) -> None:
    stages = sorted({r["stage"] for r in rows}, key=stage_key)
    by_algo: dict[str, dict[str, float]] = defaultdict(dict)
    for r in rows:
        if not r["found"]:
            continue
        by_algo[r["algorithm"]][r["stage"]] = r[key] / divide

    algos = [a for a in ALGO_ORDER if a in by_algo]
    if not algos:
        return
    n = len(stages)
    width = 0.8 / len(algos)

    fig, ax = plt.subplots(figsize=(max(9.0, n * 1.5), 5.0))
    xs = list(range(n))
    for i, algo in enumerate(algos):
        vals = [by_algo[algo].get(s, 0.0) for s in stages]
        pos = [x - 0.4 + width * (i + 0.5) for x in xs]
        ax.bar(pos, vals, width=width, label=algo,
               color=ALGO_COLORS.get(algo), edgecolor="black", linewidth=0.4)

    if logscale:
        ax.set_yscale("log")
    ax.set_xticks(xs)
    ax.set_xticklabels(stages, rotation=35, ha="right", fontsize=8)
    ax.set_title(title)
    ax.set_ylabel(title)
    ax.grid(axis="y", alpha=0.3)
    ax.legend()
    fig.tight_layout()
    fig.savefig(OUT_DIR / filename, dpi=140)
    plt.close(fig)


def summary_table(rows: list[dict]) -> str:
    stages = sorted({r["stage"] for r in rows}, key=stage_key)
    lines = [
        ("| Stage | Algorithm | Sol. length | Path cost | Expanded | Time (ms) "
         "| Memory (KiB) | Max frontier | Status |"),
        "|---|---|---:|---:|---:|---:|---:|---:|---|",
    ]
    for stage in stages:
        for algo in ALGO_ORDER:
            match = [r for r in rows if r["stage"] == stage
                     and r["algorithm"] == algo]
            if not match:
                continue
            r = match[0]
            status = "timeout" if str(r.get("timed_out", "")).lower() in (
                "true", "1") else ""
            lines.append(
                f"| {stage} | {algo} | {r['solution_length']} "
                f"| {r['path_cost']:.1f} | {r['expanded_nodes']} "
                f"| {r['search_time_s'] * 1000:.2f} "
                f"| {r['peak_memory_bytes'] / 1024:.1f} "
                f"| {r['max_frontier']} | {status} |"
            )
    return "\n".join(lines)


def average_table(rows: list[dict]) -> str:
    lines = [
        ("| Algorithm | Avg. length | Avg. expanded | Avg. time (ms) "
         "| Avg. memory (KiB) |"),
        "|---|---:|---:|---:|---:|",
    ]
    by_algo: dict[str, list[dict]] = defaultdict(list)
    for r in rows:
        if r["found"]:
            by_algo[r["algorithm"]].append(r)
    for algo in ALGO_ORDER:
        group = by_algo.get(algo)
        if not group:
            continue
        lines.append(
            f"| {algo} | "
            f"{statistics.mean(r['solution_length'] for r in group):.1f} | "
            f"{statistics.mean(r['expanded_nodes'] for r in group):.1f} | "
            f"{statistics.mean(r['search_time_s'] for r in group) * 1000:.2f} | "
            f"{statistics.mean(r['peak_memory_bytes'] for r in group) / 1024:.1f} |"
        )
    return "\n".join(lines)


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)
    rows = load_rows()
    if not rows:
        raise SystemExit("results.csv is empty - run run_experiments.py first")

    for key, label in METRICS:
        divide = 1024.0 if key == "peak_memory_bytes" else 1.0
        chart_metric(
            rows, key, label,
            filename=f"{key}.png",
            logscale=key in ("expanded_nodes", "peak_memory_bytes",
                             "search_time_s"),
            divide=divide,
        )

    (OUT_DIR / "summary.md").write_text(
        "# Experiment results\n\n"
        "## Per stage and algorithm\n\n" + summary_table(rows) +
        "\n\n## Averages over all stages\n\n" + average_table(rows) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote charts + summary to {OUT_DIR}")


if __name__ == "__main__":
    main()

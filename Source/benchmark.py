"""Chay thuc nghiem tren toan bo man choi, in bang va luu results/benchmark.csv + .json."""
import csv
import json
from pathlib import Path

from bloxorz import ALGORITHMS, load_levels, solve

ROOT = Path(__file__).parent
FIELDS = ["level_id", "group", "algorithm", "found", "length", "cost", "expanded", "time_ms", "memory_kb"]


def main():
    levels = load_levels(ROOT / "levels")
    rows = []
    print(f"{'level':<6}{'algo':<7}{'len':>5}{'cost':>6}{'expanded':>10}{'time(ms)':>11}{'mem(KB)':>10}")
    for lv in levels.values():
        for algo in ALGORITHMS:
            r = solve(lv, algo)
            r["group"] = lv.group
            rows.append(r)
            print(f"{lv.id:<6}{algo:<7}{r['length']:>5}{r['cost']:>6}{r['expanded']:>10}{r['time_ms']:>11.2f}{r['memory_kb']:>10.1f}")
    out = ROOT / "results"
    out.mkdir(exist_ok=True)
    with open(out / "benchmark.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
        w.writeheader()
        w.writerows(rows)
    for r in rows:
        r.pop("trace", None)
    (out / "benchmark.json").write_text(json.dumps(rows, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"\nDa luu {out / 'benchmark.csv'}")


if __name__ == "__main__":
    main()

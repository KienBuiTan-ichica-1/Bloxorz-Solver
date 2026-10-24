"""Persistent best-move records for completed stages."""

from __future__ import annotations

import json
import os
import tempfile
from pathlib import Path


def load_progress(path: str | Path) -> dict[str, int]:
    """Load stage filename -> best move count, rejecting malformed data."""
    path = Path(path)
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return {}
    except json.JSONDecodeError as exc:
        raise ValueError(f"invalid progress file {path}: {exc}") from exc

    if not isinstance(payload, dict) or payload.get("version") != 1:
        raise ValueError(f"unsupported progress format in {path}")
    records = payload.get("best_moves")
    if not isinstance(records, dict):
        raise ValueError(f"missing best_moves data in {path}")

    progress = {}
    for stage_id, moves in records.items():
        if (not isinstance(stage_id, str) or not stage_id
                or isinstance(moves, bool) or not isinstance(moves, int)
                or moves < 0):
            raise ValueError(f"invalid progress record in {path}: {stage_id!r}")
        progress[stage_id] = moves
    return progress


def save_progress(path: str | Path, progress: dict[str, int]) -> None:
    """Atomically save stage bests so interrupted writes do not corrupt data."""
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(
        {"version": 1, "best_moves": progress},
        indent=2,
        sort_keys=True,
    )
    temp_path = None
    try:
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            dir=path.parent,
            prefix=f".{path.name}.",
            suffix=".tmp",
            delete=False,
        ) as temp_file:
            temp_path = Path(temp_file.name)
            temp_file.write(payload)
            temp_file.write("\n")
        os.replace(temp_path, path)
    except OSError:
        if temp_path is not None:
            temp_path.unlink(missing_ok=True)
        raise

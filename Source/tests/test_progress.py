import json

import pytest

from bloxorz.progress import load_progress, save_progress


def test_missing_progress_file_starts_empty(tmp_path):
    assert load_progress(tmp_path / "progress.json") == {}


def test_progress_round_trips_atomically(tmp_path):
    path = tmp_path / "profile" / "progress.json"
    expected = {"01_basic.json": 12, "02_vertical.json": 8}

    save_progress(path, expected)

    assert load_progress(path) == expected
    assert json.loads(path.read_text(encoding="utf-8")) == {
        "version": 1,
        "best_moves": expected,
    }
    assert list(path.parent.glob("*.tmp")) == []


@pytest.mark.parametrize(
    "payload",
    [
        {"version": 2, "best_moves": {}},
        {"version": 1, "best_moves": []},
        {"version": 1, "best_moves": {"stage.json": True}},
        {"version": 1, "best_moves": {"stage.json": -1}},
    ],
)
def test_invalid_progress_data_is_rejected(tmp_path, payload):
    path = tmp_path / "progress.json"
    path.write_text(json.dumps(payload), encoding="utf-8")

    with pytest.raises(ValueError, match="progress|best_moves"):
        load_progress(path)

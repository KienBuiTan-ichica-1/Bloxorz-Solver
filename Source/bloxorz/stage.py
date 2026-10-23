"""Stage (level) definition and JSON/ASCII loading for Bloxorz.

Map legend
----------
===========  =======================================================
``#``        floor tile
``.`` or `` ``  empty cell (void)
``G``        goal hole (exactly one per stage)
``F``        fragile tile
``0``-``9``  bridge tile belonging to bridge with that index
``s``        soft switch cell (octagon / circle)
``x``        heavy switch cell (X shaped)
``t``        split switch cell (bracket shaped)
``S``        start tile (optional, may also be given by ``start``)
===========  =======================================================

JSON layout
-----------
::

    {
      "name": "Level 1",
      "group": "A - basic",
      "description": "...",
      "map": ["#####", "#..G#", "..."],
      "start": [4, 1],
      "bridges": ["closed"],            // default state of each bridge
      "switches": [
        {"kind": "soft", "mode": "toggle",
         "cells": [[1, 3]], "bridges": [0]},
        {"kind": "split", "mode": "permanent", "set": "open",
         "cells": [[3, 2]], "bridges": [1],
         "teleport": [[0, 1], [0, 3]]}
      ]
    }
"""

from __future__ import annotations

import json
from collections.abc import Sequence
from dataclasses import dataclass
from pathlib import Path

Cell = tuple[int, int]

TILE_CHARS = "#.GFstxS"
VOID_CHARS = ". "

SWITCH_CHARS = {"s": "soft", "x": "heavy", "t": "split"}


@dataclass(frozen=True)
class SwitchSpec:
    """A switch on the board.

    kind:   ``soft`` (any part presses it), ``heavy`` (block must stand on it),
            ``split`` (block must stand on it; splits the block).
    mode:   ``toggle`` flips the linked bridges, ``permanent`` forces them to
            ``set_state`` and locks them against later toggles.
    """

    kind: str
    mode: str
    cells: tuple[Cell, ...]
    bridges: tuple[int, ...] = ()
    set_state: str = "open"
    teleport: tuple[Cell, Cell] | None = None


@dataclass
class Stage:
    name: str
    group: str
    description: str
    map_rows: list[str]
    rows: int
    cols: int
    start: Cell
    goal: Cell
    tiles: frozenset           # every non-void cell
    floor: frozenset           # plain floor cells
    fragile: frozenset
    bridge_cells: dict[Cell, int]       # cell -> bridge index
    bridge_defaults: list[bool]         # True = open
    switches: list[SwitchSpec]
    path: Path | None = None

    @property
    def n_bridges(self) -> int:
        return len(self.bridge_defaults)

    def switch_cells(self) -> frozenset:
        cells = set()
        for sw in self.switches:
            cells.update(sw.cells)
        return frozenset(cells)

    def cell_kind(self, cell: Cell) -> str:
        """Human readable tile type (used by the GUI)."""
        if cell == self.goal:
            return "goal"
        if cell in self.fragile:
            return "fragile"
        if cell in self.bridge_cells:
            return "bridge"
        for sw in self.switches:
            if cell in sw.cells:
                return f"{sw.kind}-switch"
        return "floor"


def _norm_cells(raw: Sequence[Sequence[int]]) -> tuple[Cell, ...]:
    return tuple((int(r), int(c)) for r, c in raw)


def parse_stage(data: dict, path: Path | None = None) -> Stage:
    if "map" not in data or not isinstance(data["map"], list) or not data["map"]:
        raise ValueError("Stage JSON needs a non-empty 'map' array of rows")
    map_rows = [str(row) for row in data["map"]]
    rows = len(map_rows)
    cols = max(len(row) for row in map_rows)
    if cols == 0:
        raise ValueError("Stage 'map' rows must not be empty strings")
    map_rows = [row.ljust(cols, ".") for row in map_rows]

    tiles = set()
    floor = set()
    fragile = set()
    bridge_cells: dict[Cell, int] = {}
    start: Cell | None = None
    goal: Cell | None = None
    switch_cell_chars: dict[Cell, str] = {}

    for r, row in enumerate(map_rows):
        for c, ch in enumerate(row):
            cell = (r, c)
            if ch in VOID_CHARS:
                continue
            if ch.isdigit():
                tiles.add(cell)
                bridge_cells[cell] = int(ch)
                floor.add(cell)
                continue
            if ch not in TILE_CHARS:
                raise ValueError(f"Unknown map character {ch!r} at {(r, c)}")
            tiles.add(cell)
            if ch == "#":
                floor.add(cell)
            elif ch == "F":
                fragile.add(cell)
            elif ch == "G":
                if goal is not None:
                    raise ValueError("Stage must contain exactly one goal 'G'")
                goal = cell
            elif ch == "S":
                start = cell
                floor.add(cell)
            elif ch in SWITCH_CHARS:
                switch_cell_chars[cell] = ch
                floor.add(cell)

    if goal is None:
        raise ValueError("Stage must contain a goal cell 'G'")

    if start is None:
        if "start" not in data:
            raise ValueError("Stage needs a start cell ('S' on the map or 'start' in JSON)")
        start = (int(data["start"][0]), int(data["start"][1]))

    def _parse_bridge_default(value) -> bool:
        if isinstance(value, str):
            v = value.strip().lower()
            if v in ("open", "1", "true"):
                return True
            if v in ("closed", "close", "0", "false"):
                return False
            raise ValueError(f"Unknown bridge default {value!r}")
        return bool(value)

    bridge_defaults = [_parse_bridge_default(b) for b in data.get("bridges", [])]
    max_bridge = max(bridge_cells.values(), default=-1)
    while len(bridge_defaults) <= max_bridge:
        bridge_defaults.append(True)
    for cell, idx in bridge_cells.items():
        if idx >= len(bridge_defaults):
            raise ValueError(f"Bridge index {idx} used on map but not declared")

    switches: list[SwitchSpec] = []
    for raw in data.get("switches", []):
        kind = str(raw["kind"]).lower()
        mode = str(raw.get("mode", "toggle")).lower()
        if kind not in ("soft", "heavy", "split"):
            raise ValueError(f"Unknown switch kind {kind!r}")
        if mode not in ("toggle", "permanent"):
            raise ValueError(f"Unknown switch mode {mode!r}")
        cells = _norm_cells(raw["cells"])
        for cell in cells:
            expected = SWITCH_CHARS.get(switch_cell_chars.get(cell, ""))
            if expected is None:
                raise ValueError(
                    f"Switch cell {cell} is not marked with s/x/t on the map"
                )
            if expected != kind:
                raise ValueError(
                    f"Switch cell {cell} is marked {expected!r} but declared {kind!r}"
                )
        set_state = str(raw.get("set", "open")).lower()
        if set_state not in ("open", "closed"):
            raise ValueError(
                f"Switch 'set' must be 'open' or 'closed', got {set_state!r}"
            )
        bridge_indices = tuple(int(i) for i in raw.get("bridges", []))
        for idx in bridge_indices:
            if not 0 <= idx < len(bridge_defaults):
                raise ValueError(
                    f"Switch references bridge index {idx}, but only "
                    f"{len(bridge_defaults)} bridge(s) are declared"
                )
        teleport = None
        if kind == "split":
            if "teleport" not in raw:
                raise ValueError("Split switch needs a 'teleport' pair of cells")
            tp = _norm_cells(raw["teleport"])
            if len(tp) != 2:
                raise ValueError("'teleport' must contain exactly two cells")
            if tp[0] == tp[1]:
                raise ValueError(f"Teleport targets must be different: {tp[0]}")
            for cell in tp:
                if cell not in tiles:
                    raise ValueError(f"Teleport target {cell} is a void cell")
                if cell in fragile:
                    raise ValueError(
                        f"Teleport target {cell} is fragile; a unit cube "
                        "cannot stand there"
                    )
                bridge_idx = bridge_cells.get(cell)
                if bridge_idx is not None and not bridge_defaults[bridge_idx]:
                    raise ValueError(
                        f"Teleport target {cell} is on closed bridge "
                        f"{bridge_idx}"
                    )
            teleport = (tp[0], tp[1])
        switches.append(
            SwitchSpec(
                kind=kind,
                mode=mode,
                cells=cells,
                bridges=bridge_indices,
                set_state=set_state,
                teleport=teleport,
            )
        )

    # declared switch cells must exist on the map and vice versa
    declared = {cell for sw in switches for cell in sw.cells}
    if declared != set(switch_cell_chars):
        missing = set(switch_cell_chars) - declared
        extra = declared - set(switch_cell_chars)
        raise ValueError(f"Switch cells mismatch: unlisted={missing}, unknown={extra}")

    if start not in tiles:
        raise ValueError(f"Start cell {start} is a void cell")
    if start in fragile:
        raise ValueError(f"Start cell {start} is fragile; the block would fall")
    start_bridge = bridge_cells.get(start)
    if start_bridge is not None and not bridge_defaults[start_bridge]:
        raise ValueError(
            f"Start cell {start} is on closed bridge {start_bridge}"
        )

    return Stage(
        name=str(data.get("name", "Unnamed stage")),
        group=str(data.get("group", "")),
        description=str(data.get("description", "")),
        map_rows=map_rows,
        rows=rows,
        cols=cols,
        start=start,
        goal=goal,
        tiles=frozenset(tiles),
        floor=frozenset(floor),
        fragile=frozenset(fragile),
        bridge_cells=bridge_cells,
        bridge_defaults=bridge_defaults,
        switches=switches,
        path=path,
    )


def load_stage(path: str | Path) -> Stage:
    path = Path(path)
    with path.open("r", encoding="utf-8") as fh:
        data = json.load(fh)
    return parse_stage(data, path=path)


def load_stages(directory: str | Path) -> list[Stage]:
    directory = Path(directory)
    stages = []
    for path in sorted(directory.glob("*.json")):
        stages.append(load_stage(path))
    return stages

"""Bloxorz game engine: state representation and transition model.

State representation
--------------------
A :class:`GameState` contains everything that can influence the future of the
game:

* ``mode``   - ``"block"`` (normal 1x1x2 block) or ``"split"`` (two unit cubes).
* ``orient`` - ``"S"`` (standing), ``"H"`` (lying horizontally) or ``"V"``
  (lying vertically); empty string in split mode.
* ``pos``    - in block mode the anchor cell (top/left cell of the block);
  in split mode the pair of cells occupied by the two cubes.
* ``active`` - in split mode, which cube is currently controlled (0 or 1).
* ``bridges`` - open/closed (and locked) state of every bridge, so states that
  differ only in bridge configuration are *different* states.

Everything is hashable so the state can be used directly as a dictionary key
or set element by the search algorithms.
"""

from __future__ import annotations

from collections.abc import Iterator
from dataclasses import dataclass

from .stage import Stage

Cell = tuple[int, int]

DIRS: dict[str, Cell] = {"U": (-1, 0), "D": (1, 0), "L": (0, -1), "R": (0, 1)}
ROLL_ACTIONS = ("U", "D", "L", "R")
SWITCH_CONTROL = "X"
ACTIONS = ROLL_ACTIONS + (SWITCH_CONTROL,)
ACTION_NAMES = {
    "U": "Up", "D": "Down", "L": "Left", "R": "Right",
    "X": "Switch control",
}

# bridge encoding: bit 0 = open, bit 1 = locked
BRIDGE_CLOSED, BRIDGE_OPEN, BRIDGE_LOCKED_CLOSED, BRIDGE_LOCKED_OPEN = 0, 1, 2, 3


@dataclass(frozen=True)
class GameState:
    mode: str          # "block" | "split"
    orient: str        # "S" | "H" | "V" | ""
    pos: tuple         # block: (r, c)  |  split: ((r1, c1), (r2, c2))
    active: int        # split: controlled cube (0/1)  |  block: 0
    bridges: tuple     # tuple of bridge states (ints)

    def block_cells(self) -> tuple[Cell, ...]:
        """Cells occupied by the block (empty tuple in split mode)."""
        if self.mode == "split":
            return ()
        r, c = self.pos
        if self.orient == "S":
            return ((r, c),)
        if self.orient == "H":
            return ((r, c), (r, c + 1))
        return ((r, c), (r + 1, c))

    def cube_cells(self) -> tuple[Cell, ...]:
        """Cells occupied by unit cubes (both when split, else the block)."""
        if self.mode == "split":
            return tuple(self.pos)
        return self.block_cells()

    def occupied(self) -> tuple[Cell, ...]:
        return self.cube_cells()


def roll(orient: str, pos: Cell, action: str) -> tuple[str, Cell]:
    """Orientation transition table: (orientation, action) -> (new, new_pos)."""
    r, c = pos
    if orient == "S":
        if action == "U":
            return "V", (r - 2, c)
        if action == "D":
            return "V", (r + 1, c)
        if action == "L":
            return "H", (r, c - 2)
        if action == "R":
            return "H", (r, c + 1)
    elif orient == "H":
        if action == "L":
            return "S", (r, c - 1)
        if action == "R":
            return "S", (r, c + 2)
        if action == "U":
            return "H", (r - 1, c)
        if action == "D":
            return "H", (r + 1, c)
    elif orient == "V":
        if action == "U":
            return "S", (r - 1, c)
        if action == "D":
            return "S", (r + 2, c)
        if action == "L":
            return "V", (r, c - 1)
        if action == "R":
            return "V", (r, c + 1)
    raise ValueError(f"Invalid roll: orient={orient} action={action}")


class IllegalMove(Exception):
    pass


class Engine:
    """Applies the Bloxorz rules for one stage."""

    def __init__(self, stage: Stage):
        self.stage = stage
        self.rows = stage.rows
        self.cols = stage.cols
        self.goal = stage.goal
        self.tiles = stage.tiles
        self.fragile = stage.fragile
        self.bridge_cells = dict(stage.bridge_cells)
        self.switches = list(stage.switches)
        # switch index per cell (a cell belongs to at most one switch)
        self.switch_at: dict[Cell, int] = {}
        for i, sw in enumerate(self.switches):
            for cell in sw.cells:
                self.switch_at[cell] = i
        # map of passable cells used for the relaxed heuristic (goal distance)
        self.relaxed_cells = set(self.tiles)

    # ------------------------------------------------------------------ helpers
    def initial_state(self) -> GameState:
        bridges = tuple(
            BRIDGE_OPEN if op else BRIDGE_CLOSED for op in self.stage.bridge_defaults
        )
        return GameState("block", "S", self.stage.start, 0, bridges)

    def bridge_open(self, bridges: tuple, idx: int) -> bool:
        return bool(bridges[idx] % 2)

    def is_open(self, state: GameState, cell: Cell) -> bool:
        idx = self.bridge_cells.get(cell)
        if idx is None:
            return True
        return self.bridge_open(state.bridges, idx)

    def in_bounds(self, cell: Cell) -> bool:
        r, c = cell
        return 0 <= r < self.rows and 0 <= c < self.cols

    def supported(self, state: GameState, cells) -> bool:
        """Every cell in bounds, on a tile and not on a closed bridge."""
        for cell in cells:
            if not self.in_bounds(cell) or cell not in self.tiles:
                return False
            if not self.is_open(state, cell):
                return False
        return True

    def is_goal(self, state: GameState) -> bool:
        return (
            state.mode == "block"
            and state.orient == "S"
            and state.pos == self.goal
        )

    # ------------------------------------------------------------- transitions
    def actions(self, state: GameState) -> list[str]:
        return [a for a in ACTIONS if self.legal(state, a)]

    def legal(self, state: GameState, action: str) -> bool:
        return self.result(state, action) is not None

    def result(self, state: GameState, action: str) -> GameState | None:
        """Return the successor state, or None when the move is illegal."""
        if state.mode == "block":
            if action in ROLL_ACTIONS:
                return self._roll_block(state, action)
            return None
        # split mode
        if action == SWITCH_CONTROL:
            return GameState(state.mode, state.orient, state.pos, 1 - state.active,
                             state.bridges)
        if action in ROLL_ACTIONS:
            return self._roll_cube(state, action)
        return None

    def apply(self, state: GameState, action: str) -> GameState:
        ns = self.result(state, action)
        if ns is None:
            raise IllegalMove(ACTION_NAMES.get(action, action))
        return ns

    # ------------------------------------------------------------------ block
    def landing_state(self, state: GameState, action: str) -> GameState | None:
        """State right after ``action`` but *before* switch/teleport effects.

        It is the geometry of the move only (no legality checks).  It is the
        reference used both by :meth:`result` and by the risk cost model, so
        the cost function can never disagree with the transition model.
        Returns ``None`` for actions that do not move the block.
        """
        if state.mode == "block":
            if action not in ROLL_ACTIONS:
                return None
            orient, pos = roll(state.orient, state.pos, action)
            return GameState("block", orient, pos, 0, state.bridges)
        if action == SWITCH_CONTROL:
            return None  # only flips `active`, nothing can be pressed
        if action in ROLL_ACTIONS:
            dr, dc = DIRS[action]
            cubes = list(state.pos)
            r, c = cubes[state.active]
            cubes[state.active] = (r + dr, c + dc)
            return GameState("split", "", (cubes[0], cubes[1]), state.active,
                             state.bridges)
        return None

    def switches_triggered(self, state: GameState, cells=None) -> list[int]:
        """Indices of the switches pressed by ``state`` (a *landing* state).

        ``cells`` defaults to every occupied cell.  Callers that know which
        cells were newly entered (see :meth:`trigger_cells`) should pass them
        so a stationary cube on a soft switch does not fire it again.
        """
        if cells is None:
            cells = state.occupied()
        return self._switches_triggered(state, cells)

    def trigger_cells(self, state: GameState, action: str) -> tuple[Cell, ...]:
        """Cells newly occupied by ``action`` that can press a switch.

        A block roll enters every cell of its landing position; a split roll
        enters only the active cube's new cell.  Landing a standing block on
        a split switch also places the two cubes on the teleport targets, so
        those cells are included for the risk cost model.
        """
        land = self.landing_state(state, action)
        if land is None:
            return ()
        if state.mode == "split":
            return (land.pos[state.active],)
        cells = land.block_cells()
        if land.orient == "S":
            sw_idx = self.switch_at.get(land.pos)
            if sw_idx is not None:
                sw = self.switches[sw_idx]
                if sw.kind == "split" and sw.teleport is not None:
                    cells += sw.teleport
        return cells

    def _roll_block(self, state: GameState, action: str) -> GameState | None:
        land = self.landing_state(state, action)
        if land is None:
            return None
        cells = land.block_cells()
        if not self.supported(state, cells):
            return None
        if land.orient == "S" and cells[0] in self.fragile:
            return None  # fragile tile breaks under the standing block
        return self._post_move("block", land.orient, land.pos, 0, state.bridges,
                               trigger_cells=cells)

    # ------------------------------------------------------------------ split
    def _roll_cube(self, state: GameState, action: str) -> GameState | None:
        land = self.landing_state(state, action)
        if land is None:
            return None
        new_cell = land.pos[state.active]
        if new_cell == land.pos[1 - state.active]:
            return None  # the two cubes would swap onto the same tile
        if not self.in_bounds(new_cell) or new_cell not in self.tiles:
            return None
        if not self.is_open(state, new_cell):
            return None
        if new_cell in self.fragile:
            return None  # a unit cube is "standing" weight
        return self._post_move("split", "", land.pos, state.active, state.bridges,
                               trigger_cells=(new_cell,))

    @staticmethod
    def _adjacent_merge(pos) -> tuple[str, Cell] | None:
        """Return the block geometry for two adjacent cubes, if any."""
        (r1, c1), (r2, c2) = pos
        if abs(r1 - r2) + abs(c1 - c2) != 1:
            return None
        if r1 == r2:
            return "H", (r1, min(c1, c2))
        return "V", (min(r1, r2), c1)

    def _auto_merge(self, state: GameState) -> GameState:
        """Merge two unit cubes automatically once they occupy adjacent tiles.

        The cubes keep their cells, so the merge cannot move a cube onto a new
        switch.  Both cells were already supported by the unit cubes, hence
        the resulting lying block is supported as well.
        """
        if state.mode != "split":
            return state
        merged = self._adjacent_merge(state.pos)
        if merged is None:
            return state
        orient, pos = merged
        return GameState("block", orient, pos, 0, state.bridges)

    # ---------------------------------------------------------- switch / goal
    def _post_move(self, mode: str, orient: str, pos, active: int,
                   bridges: tuple, trigger_cells) -> GameState | None:
        state = GameState(mode, orient, pos, active, bridges)
        cells = state.occupied()
        activated = self._switches_triggered(state, trigger_cells)
        bridges, split_switch = self._apply_switches(state.bridges, activated)
        after = GameState(mode, orient, pos, active, bridges)
        if not self.supported(after, cells):
            return None  # a bridge under the block just closed: the block falls
        if split_switch is not None and mode == "block":
            # standing on a split switch teleports + splits the block
            tp = split_switch.teleport
            cubes = (tp[0], tp[1])
            if cubes[0] == cubes[1]:
                return None
            split_state = GameState("split", "", cubes, 0, bridges)
            # the teleport places the cubes on the targets: soft switches there
            # are pressed by the newly occupied cells.
            tp_activated = self._switches_triggered(split_state, cubes)
            tp_bridges, _ = self._apply_switches(bridges, tp_activated)
            split_state = GameState("split", "", cubes, 0, tp_bridges)
            if not self.supported(split_state, cubes):
                return None
            return self._auto_merge(split_state)
        return self._auto_merge(after)

    def _switches_triggered(self, state: GameState, cells) -> list[int]:
        hit = []
        for idx, sw in enumerate(self.switches):
            if sw.kind == "soft":
                if any(cell in sw.cells for cell in cells):
                    hit.append(idx)
            else:  # heavy / split: only when the block stands on it
                if state.mode == "block" and state.orient == "S" and \
                        state.pos in sw.cells:
                    hit.append(idx)
        return hit

    def _apply_switches(self, bridges: tuple, activated: list[int]):
        bridges = list(bridges)
        split_switch = None
        for idx in activated:
            sw = self.switches[idx]
            if sw.kind == "split" and split_switch is None:
                split_switch = sw
            for bi in sw.bridges:
                cur = bridges[bi]
                locked = cur >= 2
                open_ = cur % 2 == 1
                if sw.mode == "toggle":
                    if locked:
                        continue
                    bridges[bi] = BRIDGE_OPEN if not open_ else BRIDGE_CLOSED
                else:  # permanent
                    target_open = sw.set_state == "open"
                    bridges[bi] = BRIDGE_LOCKED_OPEN if target_open else BRIDGE_LOCKED_CLOSED
        return tuple(bridges), split_switch

    # --------------------------------------------------------------- successor
    def transitions(self, state: GameState) -> Iterator[tuple[str, GameState]]:
        for action in ACTIONS:
            ns = self.result(state, action)
            if ns is not None:
                yield action, ns

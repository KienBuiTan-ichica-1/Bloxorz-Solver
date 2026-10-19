"""Pygame GUI for the Bloxorz solver.

Run with::

    python main.py

Controls
--------
* Arrow keys  - roll the block
* ``X``       - switch control between the two cubes (split mode)
* ``M``       - merge two adjacent cubes
* ``R``       - restart the stage
* Buttons at the bottom - stage navigation and the BFS/DFS/IDS/UCS/A* solvers
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import pygame
except ImportError:  # pragma: no cover - exercised only without pygame
    pygame = None

from bloxorz.engine import ACTION_NAMES, MERGE, SWITCH_CONTROL, Engine, IllegalMove
from bloxorz.search import SearchResult, solve
from bloxorz.stage import load_stages

TILE = 56
PADDING_X = 40
PADDING_TOP = 96
PANEL_W = 300
MARGIN = 24

COLORS = {
    "bg": (24, 26, 34),
    "panel": (34, 37, 48),
    "floor": (168, 172, 186),
    "void": (14, 15, 20),
    "goal": (86, 214, 116),
    "fragile": (243, 146, 45),
    "bridge_closed": (74, 58, 50),
    "bridge_open": (150, 116, 74),
    "block": (72, 148, 235),
    "block_edge": (214, 232, 255),
    "switch_soft": (232, 214, 92),
    "switch_heavy": (219, 96, 96),
    "switch_split": (168, 104, 214),
    "text": (238, 240, 246),
    "dim": (150, 156, 172),
    "accent": (86, 158, 246),
    "good": (86, 214, 116),
    "bad": (226, 96, 96),
    "btn": (52, 56, 72),
    "btn_hover": (74, 82, 104),
    "btn_on": (74, 116, 178),
    "btn_border": (96, 102, 124),
}

LEGEND = [
    ("floor", "Floor"),
    ("goal", "Goal"),
    ("fragile", "Fragile"),
    ("bridge_open", "Bridge open"),
    ("bridge_closed", "Bridge closed"),
    ("switch_soft", "Soft switch"),
    ("switch_heavy", "Heavy switch"),
    ("switch_split", "Split switch"),
]


class Button:
    def __init__(self, rect, text, group=None):
        self.rect = pygame.Rect(rect)
        self.text = text
        self.group = group
        self.active = False

    def hovered(self) -> bool:
        return self.rect.collidepoint(pygame.mouse.get_pos())

    def draw(self, screen, font) -> None:
        if self.active:
            color = COLORS["btn_on"]
        elif self.hovered():
            color = COLORS["btn_hover"]
        else:
            color = COLORS["btn"]
        pygame.draw.rect(screen, color, self.rect, border_radius=6)
        pygame.draw.rect(screen, COLORS["btn_border"], self.rect, 1, border_radius=6)
        surf = font.render(self.text, True, COLORS["text"])
        screen.blit(
            surf,
            (self.rect.centerx - surf.get_width() // 2,
             self.rect.centery - surf.get_height() // 2),
        )


class GUI:
    def __init__(self, stage_dir: Path | None = None):
        pygame.init()
        pygame.font.init()
        self.font = pygame.font.SysFont("consolas", 20)
        self.font_small = pygame.font.SysFont("consolas", 15)
        self.font_title = pygame.font.SysFont("consolas", 26, bold=True)
        self.clock = pygame.time.Clock()
        self.screen = pygame.display.set_mode((1180, 780))
        pygame.display.set_caption("Bloxorz Solver - CSC14003")

        directory = stage_dir or Path(__file__).resolve().parent / "stages"
        self.stages = load_stages(directory)
        if not self.stages:
            pygame.quit()
            raise SystemExit(f"No stage JSON files found in {directory}")
        self.stage_idx = 0
        self.restart()
        self.running = True

    # ------------------------------------------------------------- stage mgmt
    def restart(self) -> None:
        self.stage = self.stages[self.stage_idx]
        self.engine = Engine(self.stage)
        self.state = self.engine.initial_state()
        self.history: list[str] = []
        self.result: SearchResult | None = None
        self.replay: list[str] = []
        self.replay_idx = 0
        self.replaying = False
        self.status = f"Loaded {self.stage.name}"
        self.status_color = "text"
        self._active_algo = None
        for b in getattr(self, "_solver_buttons", []):
            b.active = False

    def _switch_stage(self, delta: int) -> None:
        if not self.stages:
            return
        self.stage_idx = (self.stage_idx + delta) % len(self.stages)
        self.restart()

    # ---------------------------------------------------------------- actions
    def move(self, action: str) -> None:
        try:
            self.state = self.engine.apply(self.state, action)
        except IllegalMove:
            self.status = f"Illegal move: {ACTION_NAMES.get(action, action)}"
            self.status_color = "bad"
            return
        if self.replaying:  # a manual move cancels a running replay
            self.replaying = False
            self.replay = []
            self.replay_idx = 0
        self.history.append(action)
        if self.engine.is_goal(self.state):
            self.status = "GOAL REACHED!"
            self.status_color = "good"
        elif self.state.mode == "split":
            self.status = f"Split mode - cube {self.state.active + 1} active"
            self.status_color = "text"
        else:
            self.status = f"Moved {ACTION_NAMES.get(action, action)}"
            self.status_color = "text"

    def run_solver(self, algo: str) -> None:
        self.status = f"Running {algo}..."
        self.status_color = "accent"
        pygame.display.flip()
        try:
            res = solve(self.engine, algo)
        except Exception as exc:  # noqa: BLE001 - pragma: no cover - defensive
            self.status = f"{algo} error: {exc}"
            self.status_color = "bad"
            return
        self.result = res
        if not res.found:
            self.status = f"{algo}: no solution"
            self.status_color = "bad"
            return
        self.restart()          # start the replay from the initial state
        self.result = res
        self.replay = list(res.actions)
        self.replay_idx = 0
        self.replaying = True
        self._active_algo = algo
        self.status = (
            f"{algo}: {res.solution_length} moves, "
            f"{res.expanded_nodes} nodes, {res.search_time_s * 1000:.1f} ms"
        )
        self.status_color = "good"

    def _tick_replay(self) -> None:
        if not self.replaying or not self.replay:
            return
        if self.replay_idx >= len(self.replay):
            self.replaying = False
            if self.engine.is_goal(self.state):
                self.status = "GOAL REACHED!"
                self.status_color = "good"
            return
        action = self.replay[self.replay_idx]
        self.replay_idx += 1
        try:
            self.state = self.engine.apply(self.state, action)
            self.history.append(action)
        except IllegalMove:  # pragma: no cover - defensive
            self.replaying = False
            self.status = "Replay hit an illegal move"
            self.status_color = "bad"
            return
        if self.replay_idx >= len(self.replay) and not self.engine.is_goal(self.state):
            self.status = "Replay finished (not at goal)"
            self.status_color = "bad"

    # ----------------------------------------------------------------- layout
    def _board_rect(self) -> pygame.Rect:
        stage = self.stage
        board_w = stage.cols * TILE
        board_h = stage.rows * TILE
        avail_w = self.screen.get_width() - PANEL_W - 2 * MARGIN - PADDING_X
        avail_h = self.screen.get_height() - PADDING_TOP - 120
        if board_w > avail_w or board_h > avail_h:
            scale = min(avail_w / board_w, avail_h / board_h)
            board_w = int(board_w * scale)
            board_h = int(board_h * scale)
        return pygame.Rect(PADDING_X, PADDING_TOP, board_w, board_h)

    def _buttons(self) -> tuple[list[Button], list[Button]]:
        if hasattr(self, "_nav_buttons"):
            return self._nav_buttons, self._solver_buttons
        sh = self.screen.get_size()[1]
        y = sh - 66
        nav = [
            Button((MARGIN, y, 92, 36), "New Game"),
            Button((MARGIN + 100, y, 92, 36), "Restart"),
            Button((MARGIN + 200, y, 66, 36), "<"),
            Button((MARGIN + 272, y, 66, 36), ">"),
            Button((MARGIN + 344, y, 84, 36), "Undo"),
            Button((MARGIN + 434, y, 92, 36), "Stop"),
        ]
        solvers = []
        labels = ["BFS", "DFS", "IDS", "UCS", "A*"]
        x = MARGIN + 548
        for label in labels:
            solvers.append(Button((x, y, 74, 36), label, group="solver"))
            x += 80
        self._nav_buttons = nav
        self._solver_buttons = solvers
        return nav, solvers

    # ---------------------------------------------------------------- drawing
    def _tile_color(self, cell) -> tuple:
        if cell == self.stage.goal:
            return COLORS["goal"]
        if cell in self.stage.fragile:
            return COLORS["fragile"]
        idx = self.stage.bridge_cells.get(cell)
        if idx is not None:
            open_ = self.engine.bridge_open(self.state.bridges, idx)
            return COLORS["bridge_open"] if open_ else COLORS["bridge_closed"]
        for sw in self.stage.switches:
            if cell in sw.cells:
                return COLORS[f"switch_{sw.kind}"]
        return COLORS["floor"]

    def draw_board(self) -> None:
        rect = self._board_rect()
        tile_w = rect.w / self.stage.cols
        tile_h = rect.h / self.stage.rows
        pygame.draw.rect(self.screen, COLORS["void"], rect)

        occupied = set(self.state.occupied())
        for r in range(self.stage.rows):
            for c in range(self.stage.cols):
                cell = (r, c)
                x = rect.x + c * tile_w
                y = rect.y + r * tile_h
                cell_rect = pygame.Rect(int(x), int(y), int(tile_w), int(tile_h))
                if cell not in self.stage.tiles:
                    continue
                pygame.draw.rect(self.screen, self._tile_color(cell), cell_rect)
                pygame.draw.rect(self.screen, (44, 47, 58), cell_rect, 1)

        for r, c in occupied:
            if (r, c) not in self.stage.tiles:
                continue
            x = rect.x + c * tile_w
            y = rect.y + r * tile_h
            pygame.draw.rect(
                self.screen,
                COLORS["block"],
                (x + 3, y + 3, tile_w - 6, tile_h - 6),
                border_radius=8,
            )
            pygame.draw.rect(
                self.screen,
                COLORS["block_edge"],
                (x + 3, y + 3, tile_w - 6, tile_h - 6),
                3,
                border_radius=8,
            )

        pygame.draw.rect(self.screen, COLORS["btn_border"], rect, 2)

    def _stat_lines(self) -> list[tuple[str, str]]:
        lines = [
            ("Stage", f"{self.stage_idx + 1}/{len(self.stages)} {self.stage.name}"),
            ("Mode", self.state.mode),
            ("Orientation", self.state.orient or "-"),
            ("Position", str(self.state.pos)),
            ("Moves", str(len(self.history))),
        ]
        if self.state.mode == "split":
            lines.append(("Active cube", str(self.state.active + 1)))
        if self.stage.bridge_defaults:
            lines.append(
                ("Bridges",
                 "".join("O" if self.engine.bridge_open(self.state.bridges, i) else "C"
                         for i in range(self.stage.n_bridges)))
            )
        if self.result is not None:
            r = self.result
            lines += [
                ("", ""),
                ("Solver", r.algorithm),
                ("Cost model", r.cost_model),
                ("Solution length", str(r.solution_length)),
                ("Path cost", f"{r.path_cost:.2f}"),
                ("Expanded nodes", str(r.expanded_nodes)),
                ("Search time", f"{r.search_time_s * 1000:.2f} ms"),
                ("Peak memory", f"{r.peak_memory_bytes / 1024:.1f} KiB"),
                ("Max frontier", str(r.max_frontier)),
            ]
        return lines

    def draw_panel(self) -> None:
        w = PANEL_W
        x = self.screen.get_width() - w - MARGIN // 2
        panel = pygame.Rect(x, MARGIN, w, self.screen.get_height() - 2 * MARGIN - 70)
        pygame.draw.rect(self.screen, COLORS["panel"], panel, border_radius=10)
        pygame.draw.rect(self.screen, COLORS["btn_border"], panel, 1, border_radius=10)

        y = panel.y + 14
        title = self.font_title.render("Bloxorz Solver", True, COLORS["text"])
        self.screen.blit(title, (panel.x + 16, y))
        y += 40

        for key, value in self._stat_lines():
            if key == "":
                pygame.draw.line(self.screen, COLORS["btn_border"],
                                 (panel.x + 14, y + 4), (panel.right - 14, y + 4), 1)
                y += 12
                continue
            k = self.font_small.render(f"{key}:", True, COLORS["dim"])
            self.screen.blit(k, (panel.x + 16, y))
            v = self.font_small.render(value, True, COLORS["text"])
            self.screen.blit(v, (panel.right - 16 - v.get_width(), y))
            y += 22

        y += 8
        header = self.font_small.render("Legend", True, COLORS["dim"])
        self.screen.blit(header, (panel.x + 16, y))
        y += 24
        for key, label in LEGEND:
            pygame.draw.rect(self.screen, COLORS[key],
                             (panel.x + 18, y, 16, 16), border_radius=3)
            txt = self.font_small.render(label, True, COLORS["text"])
            self.screen.blit(txt, (panel.x + 42, y - 1))
            y += 22

        if self.replaying:
            total = len(self.replay)
            done = self.replay_idx
            bar = pygame.Rect(panel.x + 16, panel.bottom - 40, panel.w - 32, 14)
            pygame.draw.rect(self.screen, COLORS["btn"], bar, border_radius=7)
            if total:
                fill = pygame.Rect(bar.x, bar.y, int(bar.w * done / total), bar.h)
                pygame.draw.rect(self.screen, COLORS["accent"], fill, border_radius=7)
            label = self.font_small.render(
                f"Replaying {done}/{total}", True, COLORS["text"]
            )
            self.screen.blit(label, (bar.x, bar.bottom + 4))

    def draw_header(self) -> None:
        title = self.font.render("BLOXORZ", True, COLORS["text"])
        self.screen.blit(title, (MARGIN, 18))
        sub = self.font_small.render(self.stage.description or "Bloxorz puzzle", True,
                                     COLORS["dim"])
        self.screen.blit(sub, (MARGIN, 48))
        color = COLORS.get(self.status_color, COLORS["text"])
        status = self.font_small.render(self.status, True, color)
        self.screen.blit(status, (MARGIN + 240, 24))

        hint = self.font_small.render(
            "Arrows: roll   X: switch cube   M: merge   R: restart", True, COLORS["dim"]
        )
        self.screen.blit(hint, (MARGIN + 240, 48))

    def draw_buttons(self) -> None:
        nav, solvers = self._buttons()
        for b in nav + solvers:
            b.active = b.group == "solver" and b.text == getattr(self, "_active_algo", None)
            b.draw(self.screen, self.font_small)

    def _handle_click(self, pos) -> None:
        nav, solvers = self._buttons()
        for b in nav:
            if not b.rect.collidepoint(pos):
                continue
            if b.text == "New Game":
                self.stage_idx = 0
                self.restart()
            elif b.text == "Restart":
                self.restart()
            elif b.text == "<":
                self._switch_stage(-1)
            elif b.text == ">":
                self._switch_stage(1)
            elif b.text == "Undo":
                if self.history:
                    self.history.pop()
                    self.replaying = False
                    self.restart_state_from_history()
                    self.status = f"Undo - {len(self.history)} moves left"
                    self.status_color = "text"
                else:
                    self.status = "Nothing to undo"
                    self.status_color = "dim"
            elif b.text == "Stop":
                self.replaying = False
            return
        for b in solvers:
            if b.rect.collidepoint(pos):
                self._active_algo = b.text
                self.run_solver(b.text)
                return

    def restart_state_from_history(self) -> None:
        history = list(self.history)
        self.state = self.engine.initial_state()
        self.history = []
        for action in history:
            try:
                self.state = self.engine.apply(self.state, action)
                self.history.append(action)
            except IllegalMove:
                break

    # ------------------------------------------------------------------- loop
    def run(self) -> None:
        while self.running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                elif event.type == pygame.KEYDOWN:
                    self._on_key(event.key)
                elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                    self._handle_click(event.pos)

            self._tick_replay()
            self.screen.fill(COLORS["bg"])
            self.draw_board()
            self.draw_panel()
            self.draw_header()
            self.draw_buttons()
            pygame.display.flip()
            self.clock.tick(60 if not self.replaying else 30)
        pygame.quit()

    def _on_key(self, key: int) -> None:
        if key == pygame.K_ESCAPE:
            self.running = False
        elif key in (pygame.K_UP, pygame.K_w):
            self.move("U")
        elif key in (pygame.K_DOWN, pygame.K_s):
            self.move("D")
        elif key in (pygame.K_LEFT, pygame.K_a):
            self.move("L")
        elif key in (pygame.K_RIGHT, pygame.K_d):
            self.move("R")
        elif key == pygame.K_x:
            self.move(SWITCH_CONTROL)
        elif key == pygame.K_m:
            self.move(MERGE)
        elif key == pygame.K_r:
            self.restart()


def main() -> None:
    if pygame is None:  # pragma: no cover
        print("pygame is required:  pip install -r requirements.txt")
        sys.exit(1)
    GUI().run()


if __name__ == "__main__":  # pragma: no cover
    main()

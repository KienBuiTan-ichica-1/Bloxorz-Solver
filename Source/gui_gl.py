"""OpenGL 3D GUI for the Bloxorz solver.

Run with::

    python main.py

The board, the 1x1x2 block and the two unit cubes of split mode are rendered as
real 3D geometry with the fixed-function OpenGL pipeline (lighting, depth
buffer, a rolling animation).  The right-hand panel and the bottom button bar
are drawn as an OpenGL overlay, so the whole program lives in a single window
and shares the pygame event loop.

Controls
--------
* Arrow keys / ``W A S D`` - roll the block
* ``X``                    - switch control between the two cubes (split mode)
* ``M``                    - merge two adjacent cubes
* ``R``                    - restart the stage
* Left / right drag        - orbit the camera
* Mouse wheel              - zoom
* ``Q`` / ``E``            - rotate the camera
* ``PageUp`` / ``PageDown``- change the camera pitch
* ``T``                    - top-down view, ``F`` - reset the camera
* ``Esc``                  - quit

Environment variables (used for automated smoke tests)::

    BLOXORZ_GL_FRAMES=3              quit after N frames
    BLOXORZ_GL_SHOT=shot.png         save a screenshot before quitting
"""

from __future__ import annotations

import math
import os
import sys
import threading
from contextlib import suppress
from pathlib import Path

try:
    import pygame
except ImportError:  # pragma: no cover - exercised only without pygame
    pygame = None

try:
    from OpenGL import GL, GLU
except ImportError:  # pragma: no cover - exercised only without PyOpenGL
    GL = GLU = None

from bloxorz.engine import ACTION_NAMES, MERGE, SWITCH_CONTROL, Engine, IllegalMove
from bloxorz.search import solve
from bloxorz.stage import load_stages

# --------------------------------------------------------------------------- #
# layout & palette
# --------------------------------------------------------------------------- #
WIN_W, WIN_H = 1280, 820
PANEL_W = 310
MARGIN = 22
TILE_H = 0.28          # tile thickness (world units)
BLOCK_ROLL_TIME = 0.15  # seconds for one roll animation

C = {
    "bg": (0.070, 0.078, 0.105),
    "floor_top": (0.61, 0.63, 0.71),
    "floor_side": (0.42, 0.44, 0.52),
    "goal": (0.34, 0.84, 0.45),
    "goal_dark": (0.05, 0.09, 0.07),
    "fragile_top": (0.96, 0.58, 0.19),
    "fragile_side": (0.62, 0.35, 0.10),
    "fragile_line": (0.52, 0.28, 0.07),
    "bridge_open_top": (0.64, 0.48, 0.30),
    "bridge_open_side": (0.40, 0.29, 0.17),
    "bridge_closed": (0.24, 0.19, 0.16),
    "block": (0.28, 0.58, 0.92),
    "block_active": (0.40, 0.74, 1.00),
    "block_idle": (0.22, 0.40, 0.66),
    "block_edge": (0.86, 0.92, 1.00),
    "soft": (0.93, 0.85, 0.36),
    "heavy": (0.88, 0.39, 0.39),
    "split": (0.67, 0.42, 0.86),
    "shadow": (0.00, 0.00, 0.00),
    "panel": (0.133, 0.145, 0.19),
    "border": (0.36, 0.39, 0.47),
    "btn": (0.20, 0.22, 0.28),
    "btn_hover": (0.28, 0.32, 0.40),
    "btn_on": (0.29, 0.45, 0.70),
    "grid": (0.30, 0.32, 0.39),
    "accent": (0.34, 0.62, 0.96),
    "good": (0.34, 0.84, 0.45),
    "bad": (0.89, 0.38, 0.38),
}

TEXT = (238, 240, 246)
DIM = (150, 156, 172)

LEGEND = [
    ("bg", "Void"),
    ("floor_top", "Floor"),
    ("goal", "Goal"),
    ("fragile_top", "Fragile"),
    ("bridge_open_top", "Bridge open"),
    ("bridge_closed", "Bridge closed"),
    ("soft", "Soft switch"),
    ("heavy", "Heavy switch"),
    ("split", "Split switch"),
]


# --------------------------------------------------------------------------- #
# small button widget
# --------------------------------------------------------------------------- #
class Button:
    def __init__(self, rect, text, group=None):
        self.rect = pygame.Rect(rect)
        self.text = text
        self.group = group
        self.active = False

    def hovered(self):
        return self.rect.collidepoint(pygame.mouse.get_pos())


class GUI:
    def __init__(self, stage_dir: Path | None = None):
        pygame.init()
        pygame.font.init()
        self.font = pygame.font.SysFont("consolas", 20)
        self.font_small = pygame.font.SysFont("consolas", 15)
        self.font_title = pygame.font.SysFont("consolas", 24, bold=True)
        self.clock = pygame.time.Clock()

        self._create_window()
        pygame.display.set_caption("Bloxorz 3D - CSC14003")

        directory = stage_dir or Path(__file__).resolve().parent / "stages"
        self.stages = load_stages(directory)
        if not self.stages:
            pygame.quit()
            raise SystemExit(f"No stage JSON files found in {directory}")

        self.view = pygame.Rect(0, 0, WIN_W - PANEL_W - MARGIN, WIN_H - 92)
        self.cam_yaw = -0.55
        self.cam_pitch = 0.90
        self.cam_dist = 12.0
        self.cam_target = (0.0, 0.55, 0.0)

        self._tex_cache = {}
        self._nav_buttons = None
        self._solver_buttons = None

        self.dragging = False
        self.last_mouse = (0, 0)
        self.anim = None
        self.sink = 0.0
        self._frame = 0
        self._solver_token = 0
        self._solver_stop = None
        self._solver_thread = None
        self._solver_result = None

        self._setup_gl_state()
        self.stage_idx = 0
        self.restart()
        self.running = True

    # ----------------------------------------------------------- window / gl
    def _create_window(self):
        with suppress(pygame.error):
            pygame.display.gl_set_attribute(pygame.GL_DEPTH_SIZE, 24)
            pygame.display.gl_set_attribute(pygame.GL_DOUBLEBUFFER, 1)
            pygame.display.gl_set_attribute(pygame.GL_MULTISAMPLEBUFFERS, 1)
            pygame.display.gl_set_attribute(pygame.GL_MULTISAMPLESAMPLES, 4)
        flags = pygame.OPENGL | pygame.DOUBLEBUF
        try:
            self.screen = pygame.display.set_mode((WIN_W, WIN_H), flags, vsync=1)
        except pygame.error:  # pragma: no cover - vsync / MSAA fallback
            self.screen = pygame.display.set_mode((WIN_W, WIN_H), flags)

    def _setup_gl_state(self):
        GL.glEnable(GL.GL_DEPTH_TEST)
        GL.glDepthFunc(GL.GL_LEQUAL)
        GL.glEnable(GL.GL_BLEND)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)
        GL.glEnable(GL.GL_LINE_SMOOTH)
        GL.glShadeModel(GL.GL_SMOOTH)
        GL.glEnable(GL.GL_NORMALIZE)

        GL.glEnable(GL.GL_LIGHTING)
        GL.glEnable(GL.GL_LIGHT0)
        GL.glEnable(GL.GL_LIGHT1)
        GL.glEnable(GL.GL_COLOR_MATERIAL)
        GL.glColorMaterial(GL.GL_FRONT_AND_BACK, GL.GL_AMBIENT_AND_DIFFUSE)
        GL.glLightModelfv(GL.GL_LIGHT_MODEL_AMBIENT, (0.24, 0.26, 0.31, 1.0))
        GL.glMaterialfv(GL.GL_FRONT_AND_BACK, GL.GL_SPECULAR, (0.16, 0.16, 0.18, 1.0))
        GL.glMaterialf(GL.GL_FRONT_AND_BACK, GL.GL_SHININESS, 20.0)

    # ------------------------------------------------------------- stage mgmt
    def restart(self):
        self._cancel_solver()
        self.stage = self.stages[self.stage_idx]
        self.engine = Engine(self.stage)
        self.state = self.engine.initial_state()
        self.history = []
        self.result = None
        self.replay = []
        self.replay_idx = 0
        self.replaying = False
        self.anim = None
        self.sink = 0.0
        self.status = f"Loaded {self.stage.name}"
        self.status_color = TEXT
        self._active_algo = None
        self.ox = (self.stage.cols - 1) / 2.0
        self.oz = (self.stage.rows - 1) / 2.0
        span = max(self.stage.cols, self.stage.rows)
        self._span = span
        self.cam_target = (0.0, 0.55, 0.0)
        self.cam_dist = span * 1.30 + 3.5
        for b in self._solver_buttons or []:
            b.active = False

    def _switch_stage(self, delta):
        if not self.stages:
            return
        self.stage_idx = (self.stage_idx + delta) % len(self.stages)
        self.restart()

    # --------------------------------------------------------------- actions
    def move(self, action):
        old = self.state
        try:
            new = self.engine.apply(old, action)
        except IllegalMove:
            self.status = f"Illegal move: {ACTION_NAMES.get(action, action)}"
            self.status_color = C["bad"]
            return
        if self.replaying:  # a manual move cancels a running replay
            self.replaying = False
            self.replay = []
            self.replay_idx = 0
        self._cancel_solver()
        self.result = None  # the solver metrics no longer describe this state
        self._active_algo = None
        self._advance(old, new, action)
        self.history.append(action)
        if self.engine.is_goal(self.state):
            self.status = "GOAL REACHED!"
            self.status_color = C["good"]
        elif self.state.mode == "split":
            self.status = f"Split mode - cube {self.state.active + 1} active"
            self.status_color = TEXT
        else:
            self.status = f"Moved {ACTION_NAMES.get(action, action)}"
            self.status_color = TEXT

    def _advance(self, old, new, action):
        """Commit a state change, launching a roll animation when possible."""
        self.anim = None
        if action in ("U", "D", "L", "R") and old.mode == new.mode:
            old_boxes = self._boxes(old)
            new_boxes = self._boxes(new)
            if len(old_boxes) == len(new_boxes):
                idx = old.active if old.mode == "split" else 0
                self.anim = self._make_roll(old_boxes[idx], action, idx)
        self.state = new

    @staticmethod
    def _roll_axis(action):
        # returns (world dx, world dz, axis, angle_deg)
        if action == "L":
            return -1, 0, (0, 0, 1), 90.0
        if action == "R":
            return 1, 0, (0, 0, 1), -90.0
        if action == "U":
            return 0, -1, (1, 0, 0), -90.0
        return 0, 1, (1, 0, 0), 90.0

    def _make_roll(self, box, action, idx):
        cx, cy, cz, sx, sy, sz = box
        dx, dz, axis, angle = self._roll_axis(action)
        pivot = (cx + dx * sx / 2.0, cy - sy / 2.0, cz + dz * sz / 2.0)
        return {
            "box": box,
            "idx": idx,
            "pivot": pivot,
            "axis": axis,
            "angle": angle,
            "t": 0.0,
        }

    def _cancel_solver(self):
        """Invalidate any running solver thread and ask it to stop."""
        self._solver_token += 1
        if self._solver_stop is not None:
            self._solver_stop.set()
        self._solver_stop = None
        self._solver_thread = None
        self._solver_result = None

    def _solver_worker(self, engine, algo, token, stop):
        try:
            result = solve(engine, algo, should_stop=stop.is_set)
        except Exception as exc:  # noqa: BLE001 - reported in the UI thread
            result = exc
        self._solver_result = (token, algo, result)

    def _poll_solver(self):
        pending = self._solver_result
        if pending is None:
            return
        self._solver_result = None
        token, algo, res = pending
        if token != self._solver_token:
            return  # a newer stage / solver run superseded this one
        self._solver_stop = None
        self._solver_thread = None
        if isinstance(res, Exception):
            self.result = None
            self._active_algo = None
            self.status = f"{algo} error: {res}"
            self.status_color = C["bad"]
            return
        if res.timed_out:  # cancelled by the Stop button
            self.result = None
            self._active_algo = None
            self.replaying = False
            self.status = f"{algo}: stopped"
            self.status_color = TEXT
            return
        if not res.found:
            self.result = res
            self.replay = []
            self.replay_idx = 0
            self.replaying = False
            self._active_algo = None
            self.status = f"{algo}: no solution"
            self.status_color = C["bad"]
            return
        self.restart()  # replay from the initial state
        self.result = res
        self.replay = list(res.actions)
        self.replay_idx = 0
        self.replaying = True
        self._active_algo = algo
        self.status = (
            f"{algo}: {res.solution_length} moves, "
            f"{res.expanded_nodes} nodes, {res.search_time_s * 1000:.1f} ms"
        )
        self.status_color = C["good"]

    def run_solver(self, algo):
        self.restart()  # clears the board and cancels any previous solver
        self._active_algo = algo
        self.status = f"Solving {algo}..."
        self.status_color = C["accent"]
        token = self._solver_token
        stop = threading.Event()
        self._solver_stop = stop
        thread = threading.Thread(
            target=self._solver_worker,
            args=(self.engine, algo, token, stop),
            daemon=True,
        )
        self._solver_thread = thread
        thread.start()

    def _tick_replay(self):
        if not self.replaying or not self.replay or self.anim is not None:
            return
        if self.replay_idx >= len(self.replay):
            self.replaying = False
            if self.engine.is_goal(self.state):
                self.status = "GOAL REACHED!"
                self.status_color = C["good"]
            return
        action = self.replay[self.replay_idx]
        self.replay_idx += 1
        old = self.state
        try:
            new = self.engine.apply(old, action)
        except IllegalMove:  # pragma: no cover - defensive
            self.replaying = False
            self.status = "Replay hit an illegal move"
            self.status_color = C["bad"]
            return
        self._advance(old, new, action)
        self.history.append(action)
        if self.replay_idx >= len(self.replay) and not self.engine.is_goal(self.state):
            self.status = "Replay finished (not at goal)"
            self.status_color = C["bad"]

    def _update(self, dt):
        self._poll_solver()
        if self.anim is not None:
            self.anim["t"] += dt / BLOCK_ROLL_TIME
            if self.anim["t"] >= 1.0:
                self.anim = None
        if self.engine.is_goal(self.state) and self.anim is None:
            self.sink = min(1.4, self.sink + dt * 3.0)
        else:
            self.sink = 0.0

    # ---------------------------------------------------------- box helpers
    def _box_from_cells(self, cells, tall):
        rs = [r for r, _ in cells]
        cs = [c for _, c in cells]
        minr, maxr = min(rs), max(rs)
        minc, maxc = min(cs), max(cs)
        sx = float(maxc - minc + 1)
        sz = float(maxr - minr + 1)
        sy = 2.0 if tall else 1.0
        cx = (minc + maxc) / 2.0 - self.ox
        cz = (minr + maxr) / 2.0 - self.oz
        return (cx, sy / 2.0, cz, sx, sy, sz)

    def _boxes(self, state):
        out = []
        if state.mode == "block":
            out.append(self._box_from_cells(state.block_cells(), state.orient == "S"))
        else:
            for cell in state.pos:
                out.append(self._box_from_cells((cell,), False))
        return out

    # ------------------------------------------------------------- 3d drawing
    def _begin_3d(self):
        GL.glViewport(
            self.view.x,
            WIN_H - (self.view.y + self.view.h),
            max(1, self.view.w),
            max(1, self.view.h),
        )
        GL.glMatrixMode(GL.GL_PROJECTION)
        GL.glLoadIdentity()
        aspect = self.view.w / max(1, self.view.h)
        GLU.gluPerspective(42.0, aspect, 0.5, 300.0)
        GL.glMatrixMode(GL.GL_MODELVIEW)
        GL.glLoadIdentity()

        tx, ty, tz = self.cam_target
        cp = math.cos(self.cam_pitch)
        ex = tx + self.cam_dist * cp * math.sin(self.cam_yaw)
        ey = ty + self.cam_dist * math.sin(self.cam_pitch)
        ez = tz + self.cam_dist * cp * math.cos(self.cam_yaw)
        GLU.gluLookAt(ex, ey, ez, tx, ty, tz, 0.0, 1.0, 0.0)

        # world-space directional lights
        GL.glLightfv(GL.GL_LIGHT0, GL.GL_POSITION, (0.5, 1.0, 0.45, 0.0))
        GL.glLightfv(GL.GL_LIGHT0, GL.GL_DIFFUSE, (0.86, 0.86, 0.83, 1.0))
        GL.glLightfv(GL.GL_LIGHT1, GL.GL_POSITION, (-0.6, 0.45, -0.5, 0.0))
        GL.glLightfv(GL.GL_LIGHT1, GL.GL_DIFFUSE, (0.22, 0.25, 0.36, 1.0))

        GL.glEnable(GL.GL_DEPTH_TEST)
        GL.glEnable(GL.GL_LIGHTING)

    def _draw_box(self, center, dims, color, top_color=None, alpha=1.0):
        cx, cy, cz = center
        sx, sy, sz = dims
        x0, x1 = cx - sx / 2, cx + sx / 2
        y0, y1 = cy - sy / 2, cy + sy / 2
        z0, z1 = cz - sz / 2, cz + sz / 2
        tc = top_color or color
        sc = (color[0] * 0.72, color[1] * 0.72, color[2] * 0.72)

        GL.glBegin(GL.GL_QUADS)
        # top
        GL.glColor4f(tc[0], tc[1], tc[2], alpha)
        GL.glNormal3f(0, 1, 0)
        GL.glVertex3f(x0, y1, z0)
        GL.glVertex3f(x1, y1, z0)
        GL.glVertex3f(x1, y1, z1)
        GL.glVertex3f(x0, y1, z1)
        # bottom
        GL.glColor4f(sc[0], sc[1], sc[2], alpha)
        GL.glNormal3f(0, -1, 0)
        GL.glVertex3f(x0, y0, z1)
        GL.glVertex3f(x1, y0, z1)
        GL.glVertex3f(x1, y0, z0)
        GL.glVertex3f(x0, y0, z0)
        # +z / -z
        GL.glNormal3f(0, 0, 1)
        GL.glVertex3f(x0, y0, z1)
        GL.glVertex3f(x1, y0, z1)
        GL.glVertex3f(x1, y1, z1)
        GL.glVertex3f(x0, y1, z1)
        GL.glNormal3f(0, 0, -1)
        GL.glVertex3f(x1, y0, z0)
        GL.glVertex3f(x0, y0, z0)
        GL.glVertex3f(x0, y1, z0)
        GL.glVertex3f(x1, y1, z0)
        # +x / -x
        GL.glNormal3f(1, 0, 0)
        GL.glVertex3f(x1, y0, z1)
        GL.glVertex3f(x1, y0, z0)
        GL.glVertex3f(x1, y1, z0)
        GL.glVertex3f(x1, y1, z1)
        GL.glNormal3f(-1, 0, 0)
        GL.glVertex3f(x0, y0, z0)
        GL.glVertex3f(x0, y0, z1)
        GL.glVertex3f(x0, y1, z1)
        GL.glVertex3f(x0, y1, z0)
        GL.glEnd()

    def _wire_box(self, center, dims, color, alpha=1.0):
        cx, cy, cz = center
        sx, sy, sz = dims
        x0, x1 = cx - sx / 2, cx + sx / 2
        y0, y1 = cy - sy / 2, cy + sy / 2
        z0, z1 = cz - sz / 2, cz + sz / 2
        corners = [
            (x0, y0, z0), (x1, y0, z0), (x1, y0, z1), (x0, y0, z1),
            (x0, y1, z0), (x1, y1, z0), (x1, y1, z1), (x0, y1, z1),
        ]
        edges = [(0, 1), (1, 2), (2, 3), (3, 0),
                 (4, 5), (5, 6), (6, 7), (7, 4),
                 (0, 4), (1, 5), (2, 6), (3, 7)]
        GL.glColor4f(color[0], color[1], color[2], alpha)
        GL.glBegin(GL.GL_LINES)
        for a, b in edges:
            GL.glVertex3f(*corners[a])
            GL.glVertex3f(*corners[b])
        GL.glEnd()

    def _flat_quad(self, pts, y, color, alpha=1.0):
        GL.glColor4f(color[0], color[1], color[2], alpha)
        GL.glBegin(GL.GL_QUADS)
        GL.glNormal3f(0, 1, 0)
        for x, z in pts:
            GL.glVertex3f(x, y, z)
        GL.glEnd()

    def _flat_disc(self, cx, cz, y, r, color, segments=22):
        GL.glColor4f(color[0], color[1], color[2], 1.0)
        GL.glBegin(GL.GL_TRIANGLE_FAN)
        GL.glNormal3f(0, 1, 0)
        GL.glVertex3f(cx, y, cz)
        for i in range(segments + 1):
            a = 2 * math.pi * i / segments
            GL.glVertex3f(cx + r * math.cos(a), y, cz + r * math.sin(a))
        GL.glEnd()

    def _flat_bar(self, cx, cz, y, length, width, angle, color, alpha=1.0):
        ca, sa = math.cos(angle), math.sin(angle)
        hl, hw = length / 2, width / 2
        pts = []
        for lx, lz in ((-hl, -hw), (hl, -hw), (hl, hw), (-hl, hw)):
            pts.append((cx + lx * ca - lz * sa, cz + lx * sa + lz * ca))
        self._flat_quad(pts, y, color, alpha)

    def _tile_top_color(self, cell):
        if cell == self.stage.goal:
            return C["goal"]
        if cell in self.stage.fragile:
            return C["fragile_top"]
        idx = self.stage.bridge_cells.get(cell)
        if idx is not None:
            return C["bridge_open_top"]
        for sw in self.stage.switches:
            if cell in sw.cells:
                return C["floor_top"]
        return C["floor_top"]

    def _draw_tiles(self):
        st = self.stage
        for cell in st.tiles:
            r, c = cell
            wx = c - self.ox
            wz = r - self.oz
            if cell == st.goal:
                self._draw_goal(wx, wz)
                continue
            idx = st.bridge_cells.get(cell)
            if idx is not None and not self.engine.bridge_open(self.state.bridges, idx):
                self._draw_box((wx, -0.28, wz), (1.0, 0.16, 1.0),
                               C["bridge_closed"])
                continue
            top = self._tile_top_color(cell)
            side = C["fragile_side"] if cell in st.fragile else C["floor_side"]
            if idx is not None:
                side = C["bridge_open_side"]
            self._draw_box((wx, -TILE_H / 2, wz), (1.0, TILE_H, 1.0), side, top)
            if cell in st.fragile:
                self._draw_fragile_marks(wx, wz)
            # grid outline
            GL.glDisable(GL.GL_LIGHTING)
            GL.glColor4f(C["grid"][0], C["grid"][1], C["grid"][2], 0.5)
            GL.glBegin(GL.GL_LINE_LOOP)
            h = 0.5
            for vx, vz in ((-h, -h), (h, -h), (h, h), (-h, h)):
                GL.glVertex3f(wx + vx, 0.002, wz + vz)
            GL.glEnd()
            GL.glEnable(GL.GL_LIGHTING)

    def _draw_fragile_marks(self, wx, wz):
        GL.glDisable(GL.GL_LIGHTING)
        GL.glColor4f(*C["fragile_line"], 0.8)
        GL.glBegin(GL.GL_LINES)
        for i in range(-2, 3):
            o = i * 0.18
            GL.glVertex3f(wx - 0.42, 0.004, wz + o)
            GL.glVertex3f(wx + 0.42, 0.004, wz + o)
        GL.glEnd()
        GL.glEnable(GL.GL_LIGHTING)

    def _draw_goal(self, wx, wz):
        d = 1.0
        depth = 1.1
        wt = 0.10
        # cavity walls
        for dx, dz, sx, sz in (
            (0, -0.45, d, wt), (0, 0.45, d, wt),
            (-0.45, 0, wt, d), (0.45, 0, wt, d),
        ):
            self._draw_box((wx + dx, -depth / 2, wz + dz), (sx, depth, sz),
                           C["goal_dark"])
        self._draw_box((wx, -depth, wz), (d - 0.1, 0.08, d - 0.1),
                       C["goal_dark"], top_color=(0.10, 0.35, 0.18))
        # green rim on top
        for dx, dz, sx, sz in (
            (0, -0.5, d, 0.16), (0, 0.5, d, 0.16),
            (-0.5, 0, 0.16, d), (0.5, 0, 0.16, d),
        ):
            self._flat_quad(
                [
                    (wx + dx - sx / 2, wz + dz - sz / 2),
                    (wx + dx + sx / 2, wz + dz - sz / 2),
                    (wx + dx + sx / 2, wz + dz + sz / 2),
                    (wx + dx - sx / 2, wz + dz + sz / 2),
                ],
                0.012, C["goal"], 0.85,
            )

    def _draw_switches(self):
        GL.glDisable(GL.GL_LIGHTING)
        y = 0.03
        for sw in self.stage.switches:
            color = C.get(sw.kind, C["soft"])
            for (r, c) in sw.cells:
                wx = c - self.ox
                wz = r - self.oz
                base = [
                    (wx - 0.42, wz - 0.42), (wx + 0.42, wz - 0.42),
                    (wx + 0.42, wz + 0.42), (wx - 0.42, wz + 0.42),
                ]
                self._flat_quad(base, y, color, 0.22)
                if sw.kind == "soft":
                    self._flat_disc(wx, wz, y + 0.006, 0.30, color)
                elif sw.kind == "heavy":
                    self._flat_bar(wx, wz, y + 0.006, 0.82, 0.16,
                                   math.pi / 4, color)
                    self._flat_bar(wx, wz, y + 0.006, 0.82, 0.16,
                                   -math.pi / 4, color)
                else:  # split -> two brackets
                    self._flat_bar(wx - 0.26, wz, y + 0.006, 0.10, 0.52, 0.0, color)
                    self._flat_bar(wx + 0.26, wz, y + 0.006, 0.10, 0.52, 0.0, color)
                    self._flat_bar(wx - 0.26, wz - 0.26, y + 0.006, 0.30, 0.10, 0.0, color)
                    self._flat_bar(wx - 0.26, wz + 0.26, y + 0.006, 0.30, 0.10, 0.0, color)
                    self._flat_bar(wx + 0.26, wz - 0.26, y + 0.006, 0.30, 0.10, 0.0, color)
                    self._flat_bar(wx + 0.26, wz + 0.26, y + 0.006, 0.30, 0.10, 0.0, color)
        GL.glEnable(GL.GL_LIGHTING)

    def _draw_shadow(self, box):
        cx, _cy, cz, sx, _sy, sz = box
        GL.glDisable(GL.GL_LIGHTING)
        GL.glColor4f(0, 0, 0, 0.32)
        hx, hz = sx / 2 + 0.06, sz / 2 + 0.06
        GL.glBegin(GL.GL_QUADS)
        GL.glNormal3f(0, 1, 0)
        GL.glVertex3f(cx - hx, 0.008, cz - hz)
        GL.glVertex3f(cx + hx, 0.008, cz - hz)
        GL.glVertex3f(cx + hx, 0.008, cz + hz)
        GL.glVertex3f(cx - hx, 0.008, cz + hz)
        GL.glEnd()
        GL.glEnable(GL.GL_LIGHTING)

    def _draw_block(self, box, active=False, lifting=0.0):
        cx, cy, cz, sx, sy, sz = box
        cy -= self.sink + lifting
        color = C["block"]
        if active is True:
            color = C["block_active"]
        elif active is False and self.state.mode == "split":
            color = C["block_idle"]
        self._draw_box((cx, cy, cz), (sx, sy, sz), color)
        GL.glDisable(GL.GL_LIGHTING)
        self._wire_box((cx, cy, cz), (sx, sy, sz), C["block_edge"], 0.9)
        GL.glEnable(GL.GL_LIGHTING)

    def _draw_moving(self):
        a = self.anim
        cx, cy, cz, sx, sy, sz = a["box"]
        px, py, pz = a["pivot"]
        ax, ay, az = a["axis"]
        t = min(1.0, a["t"])
        ease = t * t * (3 - 2 * t)
        ang = a["angle"] * ease
        cy -= self.sink
        GL.glPushMatrix()
        GL.glTranslated(px, py, pz)
        GL.glRotated(ang, ax, ay, az)
        GL.glTranslated(-px, -py, -pz)
        color = C["block_active"] if self.state.mode == "split" else C["block"]
        self._draw_box((cx, cy, cz), (sx, sy, sz), color)
        GL.glDisable(GL.GL_LIGHTING)
        self._wire_box((cx, cy, cz), (sx, sy, sz), C["block_edge"], 0.9)
        GL.glEnable(GL.GL_LIGHTING)
        GL.glPopMatrix()

    def _draw_scene(self):
        self._begin_3d()
        self._draw_tiles()
        self._draw_switches()

        boxes = self._boxes(self.state)
        for b in boxes:
            self._draw_shadow(b)

        for i, b in enumerate(boxes):
            if self.anim is not None and i == self.anim["idx"]:
                self._draw_moving()
            else:
                active = (self.state.mode == "split" and i == self.state.active)
                self._draw_block(b, active=active)

    # --------------------------------------------------------------- UI (2D)
    def _ortho_begin(self):
        GL.glViewport(0, 0, WIN_W, WIN_H)
        GL.glMatrixMode(GL.GL_PROJECTION)
        GL.glPushMatrix()
        GL.glLoadIdentity()
        GL.glOrtho(0, WIN_W, WIN_H, 0, -1, 1)
        GL.glMatrixMode(GL.GL_MODELVIEW)
        GL.glPushMatrix()
        GL.glLoadIdentity()
        GL.glDisable(GL.GL_DEPTH_TEST)
        GL.glDisable(GL.GL_LIGHTING)
        GL.glEnable(GL.GL_BLEND)

    def _ortho_end(self):
        GL.glMatrixMode(GL.GL_PROJECTION)
        GL.glPopMatrix()
        GL.glMatrixMode(GL.GL_MODELVIEW)
        GL.glPopMatrix()

    def _rect(self, x, y, w, h, color, alpha=1.0):
        GL.glColor4f(color[0], color[1], color[2], alpha)
        GL.glBegin(GL.GL_QUADS)
        GL.glVertex2f(x, y)
        GL.glVertex2f(x + w, y)
        GL.glVertex2f(x + w, y + h)
        GL.glVertex2f(x, y + h)
        GL.glEnd()

    def _border(self, x, y, w, h, color, alpha=1.0):
        GL.glColor4f(color[0], color[1], color[2], alpha)
        GL.glBegin(GL.GL_LINE_LOOP)
        GL.glVertex2f(x, y)
        GL.glVertex2f(x + w, y)
        GL.glVertex2f(x + w, y + h)
        GL.glVertex2f(x, y + h)
        GL.glEnd()

    def _text_tex(self, text, font, color):
        key = (id(font), text, font.get_height(), color)
        hit = self._tex_cache.get(key)
        if hit is not None:
            return hit
        if len(self._tex_cache) > 600:
            GL.glDeleteTextures([tid for tid, _, _ in self._tex_cache.values()])
            self._tex_cache.clear()
        surf = font.render(text, True, color)
        w, h = surf.get_size()
        if w == 0 or h == 0:
            return (0, 0, 0)
        data = pygame.image.tobytes(surf, "RGBA", True)
        tid = GL.glGenTextures(1)
        GL.glBindTexture(GL.GL_TEXTURE_2D, tid)
        GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_MIN_FILTER, GL.GL_LINEAR)
        GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_MAG_FILTER, GL.GL_LINEAR)
        GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_WRAP_S, GL.GL_CLAMP_TO_EDGE)
        GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_WRAP_T, GL.GL_CLAMP_TO_EDGE)
        GL.glPixelStorei(GL.GL_UNPACK_ALIGNMENT, 4)
        GL.glTexImage2D(GL.GL_TEXTURE_2D, 0, GL.GL_RGBA, w, h, 0,
                        GL.GL_RGBA, GL.GL_UNSIGNED_BYTE, data)
        self._tex_cache[key] = (tid, w, h)
        return (tid, w, h)

    def _text(self, text, x, y, font, color, align="left"):
        if not text:
            return 0
        tid, w, h = self._text_tex(text, font, color)
        if tid == 0:
            return 0
        if align == "right":
            x -= w
        elif align == "center":
            x -= w // 2
        GL.glEnable(GL.GL_TEXTURE_2D)
        GL.glBindTexture(GL.GL_TEXTURE_2D, tid)
        GL.glColor4f(1, 1, 1, 1)
        GL.glBegin(GL.GL_QUADS)
        GL.glTexCoord2f(0, 1)
        GL.glVertex2f(x, y)
        GL.glTexCoord2f(0, 0)
        GL.glVertex2f(x, y + h)
        GL.glTexCoord2f(1, 0)
        GL.glVertex2f(x + w, y + h)
        GL.glTexCoord2f(1, 1)
        GL.glVertex2f(x + w, y)
        GL.glEnd()
        GL.glDisable(GL.GL_TEXTURE_2D)
        return w

    def _buttons(self):
        if self._nav_buttons is not None:
            return self._nav_buttons, self._solver_buttons
        y = WIN_H - 58
        nav = [
            Button((MARGIN, y, 92, 34), "New Game"),
            Button((MARGIN + 100, y, 92, 34), "Restart"),
            Button((MARGIN + 200, y, 60, 34), "<"),
            Button((MARGIN + 268, y, 60, 34), ">"),
            Button((MARGIN + 336, y, 80, 34), "Undo"),
            Button((MARGIN + 424, y, 84, 34), "Stop"),
        ]
        solvers = []
        x = MARGIN + 520
        for label in ["BFS", "DFS", "IDS", "UCS", "A*"]:
            solvers.append(Button((x, y, 72, 34), label, group="solver"))
            x += 78
        self._nav_buttons = nav
        self._solver_buttons = solvers
        return nav, solvers

    def _stat_lines(self):
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
            lines.append((
                "Bridges",
                "".join("O" if self.engine.bridge_open(self.state.bridges, i) else "C"
                        for i in range(self.stage.n_bridges)),
            ))
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

    def _draw_ui(self):
        self._ortho_begin()
        self._draw_panel()
        self._draw_header()
        self._draw_buttons()
        if self.replaying:
            self._draw_progress()
        self._ortho_end()

    def _draw_panel(self):
        px = WIN_W - PANEL_W - MARGIN // 2
        py = MARGIN
        pw = PANEL_W
        ph = WIN_H - 2 * MARGIN - 70
        self._rect(px, py, pw, ph, C["panel"])
        self._border(px, py, pw, ph, C["border"])

        y = py + 14
        self._text("Bloxorz 3D", px + 16, y, self.font_title, TEXT)
        y += 40
        for key, value in self._stat_lines():
            if key == "":
                GL.glColor4f(*C["border"], 0.7)
                GL.glBegin(GL.GL_LINES)
                GL.glVertex2f(px + 14, y + 4)
                GL.glVertex2f(px + pw - 14, y + 4)
                GL.glEnd()
                y += 12
                continue
            self._text(f"{key}:", px + 16, y, self.font_small, DIM)
            self._text(value, px + pw - 16, y, self.font_small, TEXT, align="right")
            y += 22

        y += 8
        self._text("Legend", px + 16, y, self.font_small, DIM)
        y += 24
        for key, label in LEGEND:
            self._rect(px + 18, y, 16, 16, C[key])
            self._border(px + 18, y, 16, 16, C["border"])
            self._text(label, px + 42, y - 2, self.font_small, TEXT)
            y += 22

        hint_y = py + ph - 84
        self._text("Drag: orbit   Wheel: zoom", px + 16, hint_y, self.font_small, DIM)
        self._text("Q/E: rotate   T: top   F: reset", px + 16, hint_y + 20,
                   self.font_small, DIM)

    def _draw_header(self):
        self._text("BLOXORZ", MARGIN, 8, self.font, TEXT)
        self._text(self.stage.description or "Bloxorz puzzle", MARGIN, 36,
                   self.font_small, DIM)
        self._text(self.status, MARGIN + 220, 12, self.font_small,
                   self.status_color)
        self._text(
            "Arrows: roll   X: switch cube   M: merge   R: restart",
            MARGIN + 220, 36, self.font_small, DIM,
        )

    def _draw_buttons(self):
        nav, solvers = self._buttons()
        for b in nav + solvers:
            b.active = b.group == "solver" and b.text == self._active_algo
            if b.active:
                color = C["btn_on"]
            elif b.hovered():
                color = C["btn_hover"]
            else:
                color = C["btn"]
            self._rect(b.rect.x, b.rect.y, b.rect.w, b.rect.h, color)
            self._border(b.rect.x, b.rect.y, b.rect.w, b.rect.h, C["border"])
            self._text(b.text, b.rect.centerx, b.rect.centery - 8,
                       self.font_small, TEXT, align="center")

    def _draw_progress(self):
        total = len(self.replay)
        done = self.replay_idx
        px = WIN_W - PANEL_W - MARGIN // 2 + 16
        pw = PANEL_W - 32
        y = MARGIN + (WIN_H - 2 * MARGIN - 70) - 34
        self._rect(px, y, pw, 14, C["btn"])
        if total:
            self._rect(px, y, int(pw * done / total), 14, C["accent"])
        self._text(f"Replaying {done}/{total}", px, y + 18,
                   self.font_small, TEXT)

    # ---------------------------------------------------------------- events
    def _handle_click(self, pos):
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
                    self._cancel_solver()
                    self.history.pop()
                    self.replaying = False
                    self.replay = []
                    self.replay_idx = 0
                    self.result = None
                    self._active_algo = None
                    self._rebuild_from_history()
                    self.status = f"Undo - {len(self.history)} moves left"
                    self.status_color = TEXT
                else:
                    self.status = "Nothing to undo"
                    self.status_color = DIM
            elif b.text == "Stop":
                was_solving = (self._solver_thread is not None
                               and self._solver_thread.is_alive())
                self._cancel_solver()
                self.replaying = False
                self.replay = []
                self.replay_idx = 0
                if was_solving:
                    self.result = None
                self._active_algo = None
                self.status = "Solver stopped" if was_solving else "Replay stopped"
                self.status_color = TEXT
            return
        for b in solvers:
            if b.rect.collidepoint(pos):
                self._active_algo = b.text
                self.run_solver(b.text)
                return

    def _rebuild_from_history(self):
        history = list(self.history)
        self.state = self.engine.initial_state()
        self.history = []
        self.anim = None
        for action in history:
            try:
                self.state = self.engine.apply(self.state, action)
                self.history.append(action)
            except IllegalMove:
                break

    def _in_view(self, pos):
        return self.view.collidepoint(pos)

    def _on_key(self, key):
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
        elif key == pygame.K_t:
            self.cam_pitch = 1.50
            self.cam_yaw = 0.0
        elif key == pygame.K_f:
            self.cam_yaw = -0.55
            self.cam_pitch = 0.90
            self.cam_dist = self._span * 1.30 + 3.5

    def _camera_keys(self, dt):
        keys = pygame.key.get_pressed()
        if keys[pygame.K_q]:
            self.cam_yaw -= dt * 1.4
        if keys[pygame.K_e]:
            self.cam_yaw += dt * 1.4
        if keys[pygame.K_PAGEUP]:
            self.cam_pitch = min(1.52, self.cam_pitch + dt * 0.9)
        if keys[pygame.K_PAGEDOWN]:
            self.cam_pitch = max(0.12, self.cam_pitch - dt * 0.9)
        if keys[pygame.K_EQUALS] or keys[pygame.K_KP_PLUS]:
            self.cam_dist = max(self._span * 0.7, self.cam_dist - dt * 12)
        if keys[pygame.K_MINUS] or keys[pygame.K_KP_MINUS]:
            self.cam_dist = min(self._span * 4.0 + 6, self.cam_dist + dt * 12)

    def _save_shot(self, path):
        GL.glPixelStorei(GL.GL_PACK_ALIGNMENT, 1)
        data = GL.glReadPixels(0, 0, WIN_W, WIN_H, GL.GL_RGBA, GL.GL_UNSIGNED_BYTE)
        surf = pygame.image.frombuffer(data, (WIN_W, WIN_H), "RGBA")
        surf = pygame.transform.flip(surf, False, True)
        pygame.image.save(surf, path)

    # ------------------------------------------------------------------- loop
    def run(self):
        shot = os.environ.get("BLOXORZ_GL_SHOT")
        max_frames = int(os.environ.get("BLOXORZ_GL_FRAMES", "0") or 0)
        while self.running:
            dt = self.clock.tick(60) / 1000.0
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    self.running = False
                elif event.type == pygame.KEYDOWN:
                    self._on_key(event.key)
                elif event.type == pygame.MOUSEBUTTONDOWN:
                    if event.button in (1, 3) and self._in_view(event.pos):
                        self.dragging = True
                        self.last_mouse = event.pos
                    elif event.button == 1:
                        self._handle_click(event.pos)
                    elif event.button == 4:
                        self.cam_dist = max(self._span * 0.7, self.cam_dist * 0.9)
                    elif event.button == 5:
                        self.cam_dist = min(self._span * 4.0 + 6, self.cam_dist * 1.1)
                elif event.type == pygame.MOUSEBUTTONUP:
                    if event.button in (1, 3):
                        self.dragging = False
                elif event.type == pygame.MOUSEMOTION and self.dragging:
                    dx = event.pos[0] - self.last_mouse[0]
                    dy = event.pos[1] - self.last_mouse[1]
                    self.cam_yaw += dx * 0.008
                    self.cam_pitch = max(0.12, min(1.52, self.cam_pitch + dy * 0.008))
                    self.last_mouse = event.pos
                elif event.type == pygame.MOUSEWHEEL:
                    self.cam_dist = max(self._span * 0.7,
                                        min(self._span * 4.0 + 6,
                                            self.cam_dist * (0.9 ** event.y)))

            self._camera_keys(dt)
            self._update(dt)
            self._tick_replay()

            GL.glViewport(0, 0, WIN_W, WIN_H)
            GL.glClearColor(*C["bg"], 1.0)
            GL.glClear(GL.GL_COLOR_BUFFER_BIT | GL.GL_DEPTH_BUFFER_BIT)

            self._draw_scene()
            self._draw_ui()
            pygame.display.flip()

            self._frame += 1
            if shot and self._frame == 3:
                self._save_shot(shot)
            if max_frames and self._frame >= max_frames:
                self.running = False
        pygame.quit()


def main():
    if pygame is None or GL is None:
        print("pygame and PyOpenGL are required:  pip install -r requirements.txt")
        sys.exit(1)
    GUI().run()


if __name__ == "__main__":  # pragma: no cover
    main()

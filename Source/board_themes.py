"""Board themes for the Bloxorz OpenGL GUI: Basic, Forest, Beach, Volcano.

* tile bodies are batched into numpy vertex arrays (rebuilt only when the
  stage / theme / bridge state changes) -> a handful of GL calls per frame
* animated decoration (grass, water, lava, particles) is computed with numpy
  and drawn with ``glDrawArrays`` / ``glDrawElements``
* the block interacts with the decoration:
    Forest  - grass is pressed flat and bends away from the block, rustles and
              throws a few leaves when the block rolls in / out
    Beach   - shallow-water tiles ripple and splash when the block rolls in
    Volcano - lava glows underneath, embers fly up, sparks on every landing

Public API used by gui_gl.py::

    from board_themes import BOARD_PALETTES, BoardThemes
    self.themes = BoardThemes()
    ...
    def _draw_tiles(self):
        self.themes.draw(self)
"""

from __future__ import annotations

import math
import time

import numpy as np
from OpenGL import GL

TILE_H = 0.28

# colours that gui_gl.C also defines (duplicated to avoid a circular import)
FRAGILE_TOP = (1.00, 0.66, 0.31)
FRAGILE_SIDE = (0.67, 0.37, 0.13)
FRAGILE_LINE = (0.52, 0.28, 0.07)
BRIDGE_CLOSED = (0.20, 0.18, 0.28)

BOARD_PALETTES = [
    {   # original look
        "name": "Basic", "theme": "basic",
        "floor_top": (0.58, 0.67, 0.77), "floor_side": (0.31, 0.40, 0.52),
        "bridge_top": (0.57, 0.48, 0.77), "bridge_side": (0.35, 0.27, 0.52),
        "grid": (0.20, 0.29, 0.40), "accent": (0.30, 0.75, 0.95),
    },
    {
        "name": "Forest", "theme": "forest",
        "floor_top": (0.34, 0.60, 0.27), "floor_side": (0.42, 0.29, 0.18),
        "bridge_top": (0.68, 0.52, 0.31), "bridge_side": (0.40, 0.28, 0.16),
        "grid": (0.14, 0.30, 0.13), "accent": (0.98, 0.56, 0.76),
    },
    {
        "name": "Beach", "theme": "beach",
        "floor_top": (0.95, 0.86, 0.63), "floor_side": (0.74, 0.62, 0.41),
        "bridge_top": (0.62, 0.46, 0.30), "bridge_side": (0.38, 0.27, 0.17),
        "grid": (0.60, 0.50, 0.32), "accent": (0.14, 0.72, 0.86),
    },
    {
        "name": "Volcano", "theme": "volcano",
        "floor_top": (0.27, 0.23, 0.24), "floor_side": (0.14, 0.11, 0.11),
        "bridge_top": (0.44, 0.35, 0.31), "bridge_side": (0.21, 0.15, 0.13),
        "grid": (0.08, 0.05, 0.05), "accent": (1.00, 0.45, 0.08),
    },
]

GRID_ALPHA = {"basic": 0.50, "forest": 0.20, "beach": 0.16, "volcano": 0.45}
SEA_Y = -0.14        # sea surface (just below the sand)
WATER_Y = -0.03      # shallow water on the board
LAVA_Y = -0.85


# --------------------------------------------------------------------------- #
# helpers
# --------------------------------------------------------------------------- #
def _s01(x):
    x = np.clip(x, 0.0, 1.0)
    return x * x * (3.0 - 2.0 * x)


def _hash2(r, c, salt=0.0):
    v = math.sin(r * 12.9898 + c * 78.233 + salt * 37.719) * 43758.5453
    return v - math.floor(v)


def _f32(a):
    return np.ascontiguousarray(a, dtype=np.float32)


def _draw_arrays(mode, verts, colors=None, normals=None, indices=None):
    GL.glEnableClientState(GL.GL_VERTEX_ARRAY)
    GL.glVertexPointer(3, GL.GL_FLOAT, 0, verts)
    if colors is not None:
        GL.glEnableClientState(GL.GL_COLOR_ARRAY)
        GL.glColorPointer(colors.shape[1], GL.GL_FLOAT, 0, colors)
    if normals is not None:
        GL.glEnableClientState(GL.GL_NORMAL_ARRAY)
        GL.glNormalPointer(GL.GL_FLOAT, 0, normals)
    if indices is None:
        GL.glDrawArrays(mode, 0, len(verts))
    else:
        GL.glDrawElements(mode, len(indices), GL.GL_UNSIGNED_INT, indices)
    if normals is not None:
        GL.glDisableClientState(GL.GL_NORMAL_ARRAY)
    if colors is not None:
        GL.glDisableClientState(GL.GL_COLOR_ARRAY)
    GL.glDisableClientState(GL.GL_VERTEX_ARRAY)


class _Batch:
    """Accumulates axis-aligned boxes (same faces / shading as gui._draw_box)."""

    def __init__(self):
        self.v, self.n, self.c = [], [], []

    def _face(self, verts, normal, colors):
        self.v.extend(verts)
        self.n.extend([normal] * 4)
        self.c.extend(colors)

    def box(self, cx, cy, cz, sx, sy, sz, top, side, glow=None):
        x0, x1 = cx - sx / 2, cx + sx / 2
        y0, y1 = cy - sy / 2, cy + sy / 2
        z0, z1 = cz - sz / 2, cz + sz / 2
        t = (*top, 1.0)
        s = (side[0] * 0.72, side[1] * 0.72, side[2] * 0.72, 1.0)
        g = (*glow, 1.0) if glow else s            # glowing lower edge
        self._face([(x0, y1, z0), (x1, y1, z0), (x1, y1, z1), (x0, y1, z1)],
                   (0, 1, 0), [t] * 4)
        self._face([(x0, y0, z1), (x1, y0, z1), (x1, y0, z0), (x0, y0, z0)],
                   (0, -1, 0), [s] * 4)
        self._face([(x0, y0, z1), (x1, y0, z1), (x1, y1, z1), (x0, y1, z1)],
                   (0, 0, 1), [g, g, s, s])
        self._face([(x1, y0, z0), (x0, y0, z0), (x0, y1, z0), (x1, y1, z0)],
                   (0, 0, -1), [g, g, s, s])
        self._face([(x1, y0, z1), (x1, y0, z0), (x1, y1, z0), (x1, y1, z1)],
                   (1, 0, 0), [g, g, s, s])
        self._face([(x0, y0, z0), (x0, y0, z1), (x0, y1, z1), (x0, y1, z0)],
                   (-1, 0, 0), [g, g, s, s])

    def arrays(self):
        return (_f32(self.v), _f32(self.c), _f32(self.n))


class _Particles:
    def __init__(self, cap):
        self.cap = cap
        self.pos = np.zeros((cap, 3), np.float32)
        self.vel = np.zeros((cap, 3), np.float32)
        self.grav = np.zeros(cap, np.float32)
        self.life = np.zeros(cap, np.float32)
        self.maxlife = np.ones(cap, np.float32)
        self.col = np.ones((cap, 3), np.float32)
        self._next = 0

    def spawn(self, pos, vel, life, col, grav):
        i = self._next
        self._next = (i + 1) % self.cap
        self.pos[i], self.vel[i] = pos, vel
        self.life[i] = self.maxlife[i] = life
        self.col[i], self.grav[i] = col, grav

    def update(self, dt):
        m = self.life > 0
        if not m.any():
            return
        self.pos[m] += self.vel[m] * dt
        self.vel[m, 1] -= self.grav[m] * dt
        self.life[m] -= dt

    def draw(self, size, additive):
        m = self.life > 0
        k = int(m.sum())
        if not k:
            return
        col = np.empty((k, 4), np.float32)
        col[:, :3] = self.col[m]
        col[:, 3] = np.clip(self.life[m] / self.maxlife[m], 0, 1)
        GL.glBlendFunc(GL.GL_SRC_ALPHA,
                       GL.GL_ONE if additive else GL.GL_ONE_MINUS_SRC_ALPHA)
        GL.glPointSize(size)
        GL.glEnable(GL.GL_POINT_SMOOTH)
        _draw_arrays(GL.GL_POINTS, _f32(self.pos[m]), _f32(col))
        GL.glDisable(GL.GL_POINT_SMOOTH)


# --------------------------------------------------------------------------- #
# the renderer
# --------------------------------------------------------------------------- #
class BoardThemes:
    def __init__(self):
        self.t0 = time.perf_counter()
        self._last = 0.0
        self._static_key = None
        self._batch_key = None
        self.pfx = _Particles(220)      # normal blended (leaves, droplets)
        self.glow = _Particles(160)     # additive (embers)

    # ------------------------------------------------------------ static data
    def _ensure_static(self, gui, pal):
        key = (id(gui.stage), pal["theme"])
        if key == self._static_key:
            return
        self._static_key = key
        self._batch_key = None
        st, theme = gui.stage, pal["theme"]
        self.theme = theme
        self.ox, self.oz = gui.ox, gui.oz
        self.cells = sorted(st.tiles)
        n = len(self.cells)
        self.cidx = {cell: i for i, cell in enumerate(self.cells)}
        self.cxz = np.array([(c - self.ox, r - self.oz) for r, c in self.cells],
                            np.float32).reshape(-1, 2)

        switch_cells = {c for sw in st.switches for c in sw.cells}
        self.kind = {}
        for cell in self.cells:
            if cell == st.goal:
                self.kind[cell] = "goal"
            elif cell in st.bridge_cells:
                self.kind[cell] = "bridge"
            elif cell in st.fragile:
                self.kind[cell] = "fragile"
            elif cell in switch_cells:
                self.kind[cell] = "switch"
            else:
                self.kind[cell] = "plain"

        # interaction state
        self.on = np.zeros(n, bool)
        self._fresh = True
        self.rust_t = np.full(n, -100.0, np.float32)
        self.rust_amp = np.zeros(n, np.float32)
        self.last_emit = np.full(n, -100.0, np.float32)
        self.ripples = []
        self.pfx.life[:] = 0
        self.glow.life[:] = 0

        self.is_water = np.zeros(n, bool)
        rng = np.random.default_rng(1234 + st.cols * 31 + st.rows)
        plain = [c for c in self.cells if self.kind[c] == "plain"]

        if theme == "forest":
            self._build_grass(plain, rng)
        elif theme == "beach":
            self._pick_water(gui, plain)
            self._build_water(rng)
            self._build_plane(margin=5.0, step=0.5)
        elif theme == "volcano":
            self._build_cracks(plain, rng)
            self._build_plane(margin=3.8, step=0.5)
            self._build_embers(rng)

    def _bounds(self, margin):
        xs, zs = self.cxz[:, 0], self.cxz[:, 1]
        return (xs.min() - margin, xs.max() + margin,
                zs.min() - margin, zs.max() + margin)

    # ---- forest
    def _build_grass(self, plain, rng):
        per = 22
        ids = np.repeat([self.cidx[c] for c in plain], per)
        n = len(ids)
        self.gcell = ids.astype(np.int32)
        self.gx = (self.cxz[ids, 0] + rng.uniform(-0.46, 0.46, n)).astype(np.float32)
        self.gz = (self.cxz[ids, 1] + rng.uniform(-0.46, 0.46, n)).astype(np.float32)
        self.gh = rng.uniform(0.14, 0.32, n).astype(np.float32)
        self.gw = rng.uniform(0.05, 0.085, n).astype(np.float32)
        self.gph = rng.uniform(0, math.tau, n).astype(np.float32)
        self.gang = rng.uniform(0, math.pi, n).astype(np.float32)
        self.gp = np.zeros(n, np.float32)
        s = rng.random(n).astype(np.float32)[:, None]
        tip = np.array((0.46, 0.80, 0.28), np.float32) * (1 - s) + \
            np.array((0.76, 0.94, 0.42), np.float32) * s
        base = np.array((0.10, 0.30, 0.10), np.float32) * (0.8 + 0.5 * s)
        col = np.ones((n, 3, 4), np.float32)
        col[:, 0, :3] = base
        col[:, 1, :3] = base
        col[:, 2, :3] = tip
        self.gcol = _f32(col.reshape(-1, 4))
        self.gverts = np.zeros((n, 3, 3), np.float32)

        # little flowers
        fcells = [c for c in plain if _hash2(*c, 3.0) < 0.55]
        m = len(fcells)
        fid = np.array([self.cidx[c] for c in fcells], np.int32)
        self.fcell = fid
        self.fx = (self.cxz[fid, 0] + rng.uniform(-0.38, 0.38, m)).astype(np.float32)
        self.fz = (self.cxz[fid, 1] + rng.uniform(-0.38, 0.38, m)).astype(np.float32)
        self.fph = rng.uniform(0, math.tau, m).astype(np.float32)
        self.fp = np.zeros(m, np.float32)
        pal = np.array([(1.0, 0.56, 0.76), (1.0, 1.0, 0.94),
                        (1.0, 0.88, 0.30), (0.78, 0.64, 1.0)], np.float32)
        fc = np.ones((m, 4), np.float32)
        if m:
            fc[:, :3] = pal[rng.integers(0, len(pal), m)]
        self.fcol = fc

        # fireflies
        k = 26
        pick = rng.integers(0, len(self.cells), k)
        self.ff_base = np.stack([
            self.cxz[pick, 0] + rng.uniform(-0.8, 0.8, k),
            rng.uniform(0.35, 1.5, k),
            self.cxz[pick, 1] + rng.uniform(-0.8, 0.8, k)], -1).astype(np.float32)
        self.ff_ph = rng.uniform(0, math.tau, (k, 4)).astype(np.float32)

    # ---- beach
    def _pick_water(self, gui, plain):
        try:
            init = gui.engine.initial_state()
            start = set(init.block_cells()) if init.mode == "block" else set(init.pos)
        except Exception:  # noqa: BLE001 - purely cosmetic
            start = set()
        cand = [c for c in plain if c not in start]
        if not cand:
            return

        def score(cell):
            r, c = cell
            return (0.5 * _hash2(r, c, 7.0) + 0.125 * (
                _hash2(r - 1, c, 7.0) + _hash2(r + 1, c, 7.0)
                + _hash2(r, c - 1, 7.0) + _hash2(r, c + 1, 7.0)))

        k = max(1, int(round(len(cand) * 0.28)))
        for cell in sorted(cand, key=score, reverse=True)[:k]:
            self.is_water[self.cidx[cell]] = True

    def _build_water(self, rng):
        wc = np.nonzero(self.is_water)[0]
        self.water_cells = wc
        G = 4
        g = np.linspace(-0.5, 0.5, G + 1)
        XX, ZZ = np.meshgrid(g, g)
        xs, zs, idx = [], [], []
        for k, i in enumerate(wc):
            xs.append(self.cxz[i, 0] + XX.ravel())
            zs.append(self.cxz[i, 1] + ZZ.ravel())
            off = k * (G + 1) ** 2
            for a in range(G):
                for b in range(G):
                    p = off + a * (G + 1) + b
                    q, r_, s_ = p + 1, p + G + 1, p + G + 2
                    idx += [p, q, r_, q, s_, r_]
        self.wx = _f32(np.concatenate(xs)) if xs else np.zeros(0, np.float32)
        self.wz = _f32(np.concatenate(zs)) if zs else np.zeros(0, np.float32)
        self.widx = np.array(idx, np.uint32)

        # foam where water meets sand / void
        segs = []
        water = {self.cells[i] for i in wc}
        for i in wc:
            r, c = self.cells[i]
            cx, cz = self.cxz[i]
            for dr, dc in ((-1, 0), (1, 0), (0, -1), (0, 1)):
                if (r + dr, c + dc) in water:
                    continue
                e = 0.485
                if dr:
                    z = cz + dr * e
                    segs.append(((cx - 0.5, -0.02, z), (cx + 0.5, -0.02, z)))
                else:
                    x = cx + dc * e
                    segs.append(((x, -0.02, cz - 0.5), (x, -0.02, cz + 0.5)))
        self.foam = _f32(segs).reshape(-1, 3) if segs else np.zeros((0, 3), np.float32)
        self.foam_ph = rng.uniform(0, math.tau, len(segs)).astype(np.float32)

        # sand speckles on dry tiles
        pts, cols = [], []
        for cell in self.cells:
            if self.kind[cell] != "plain" or self.is_water[self.cidx[cell]]:
                continue
            cx, cz = self.cxz[self.cidx[cell]]
            for _ in range(7):
                pts.append((cx + rng.uniform(-0.46, 0.46), 0.003,
                            cz + rng.uniform(-0.46, 0.46)))
                cols.append((0.70, 0.60, 0.40, 0.9) if rng.random() < 0.5
                            else (1.0, 0.96, 0.82, 0.9))
        self.speck = _f32(pts).reshape(-1, 3) if pts else np.zeros((0, 3), np.float32)
        self.speck_c = _f32(cols).reshape(-1, 4) if cols else np.zeros((0, 4), np.float32)

    # ---- volcano
    def _build_cracks(self, plain, rng):
        segs, ph = [], []
        for cell in plain:
            if _hash2(*cell, 5.0) > 0.78:
                continue
            cx, cz = self.cxz[self.cidx[cell]]
            x = cx + rng.uniform(-0.3, 0.3)
            z = cz + rng.uniform(-0.3, 0.3)
            a = rng.uniform(0, math.tau)
            p = rng.uniform(0, math.tau)
            for _ in range(rng.integers(2, 5)):
                a += rng.uniform(-0.9, 0.9)
                nx = float(np.clip(x + math.cos(a) * 0.22, cx - 0.46, cx + 0.46))
                nz = float(np.clip(z + math.sin(a) * 0.22, cz - 0.46, cz + 0.46))
                segs.append(((x, 0.004, z), (nx, 0.004, nz)))
                ph.append(p)
                x, z = nx, nz
        self.crack = _f32(segs).reshape(-1, 3) if segs else np.zeros((0, 3), np.float32)
        self.crack_ph = np.repeat(np.array(ph, np.float32), 2)

    def _build_embers(self, rng):
        k = 70
        x0, x1, z0, z1 = self._bounds(2.5)
        self.em_x = rng.uniform(x0, x1, k).astype(np.float32)
        self.em_z = rng.uniform(z0, z1, k).astype(np.float32)
        self.em_ph = rng.random(k).astype(np.float32)
        self.em_sp = rng.uniform(0.10, 0.28, k).astype(np.float32)
        self.em_dr = rng.uniform(0, math.tau, k).astype(np.float32)

    # ---- sea / lava plane (shared grid)
    def _build_plane(self, margin, step):
        x0, x1, z0, z1 = self._bounds(margin)
        nx = int((x1 - x0) / step) + 1
        nz = int((z1 - z0) / step) + 1
        gx, gz = np.meshgrid(np.linspace(x0, x1, nx), np.linspace(z0, z1, nz))
        px, pz = gx.ravel(), gz.ravel()
        dmin = np.full(px.shape, 1e9)
        for tx, tz in self.cxz:
            dmin = np.minimum(dmin, np.hypot(px - tx, pz - tz))
        fade = np.clip(1.0 - (dmin - 0.8) / (margin - 0.8), 0.0, 1.0) ** 1.4
        self.px, self.pz = _f32(px), _f32(pz)
        self.pfade = _f32(fade)
        idx = []
        for a in range(nz - 1):
            for b in range(nx - 1):
                p = a * nx + b
                idx += [p, p + 1, p + nx, p + 1, p + nx + 1, p + nx]
        self.pidx = np.array(idx, np.uint32)

    # ------------------------------------------------------------- tile batch
    def _ensure_batch(self, gui, pal):
        st = gui.stage
        bridges = tuple(
            bool(gui.engine.bridge_open(gui.state.bridges, i))
            for i in range(getattr(st, "n_bridges", 0))
        )
        key = (self._static_key, bridges)
        if key == self._batch_key:
            return
        self._batch_key = key
        theme = self.theme
        B = _Batch()
        lv, lc = [], []

        def seg(a, b, col):
            lv.extend((a, b))
            lc.extend((col, col))

        glow = (1.0, 0.40, 0.07) if theme == "volcano" else None
        galpha = GRID_ALPHA[theme]
        gcol = (*pal["grid"], galpha)
        for i, cell in enumerate(self.cells):
            kind = self.kind[cell]
            if kind == "goal":
                continue
            r, c = cell
            wx, wz = self.cxz[i]
            wx, wz = float(wx), float(wz)
            j = 0.93 + 0.14 * _hash2(r, c)
            if kind == "bridge":
                idx = st.bridge_cells[cell]
                if not gui.engine.bridge_open(gui.state.bridges, idx):
                    B.box(wx, -0.28, wz, 1.0, 0.16, 1.0, BRIDGE_CLOSED, BRIDGE_CLOSED)
                    continue
                top, side = pal["bridge_top"], pal["bridge_side"]
            elif kind == "fragile":
                top, side = FRAGILE_TOP, FRAGILE_SIDE
            else:
                top = tuple(min(1.0, v * j) for v in pal["floor_top"])
                side = pal["floor_side"]

            if self.is_water[i]:
                wet = (0.64 * j, 0.56 * j, 0.38 * j)
                h = TILE_H - 0.10
                B.box(wx, -0.10 - h / 2, wz, 1.0, h, 1.0, wet, side)
                continue
            B.box(wx, -TILE_H / 2, wz, 1.0, TILE_H, 1.0, top, side, glow)

            if galpha > 0:
                x0, x1, z0, z1 = wx - .5, wx + .5, wz - .5, wz + .5
                y = 0.002
                seg((x0, y, z0), (x1, y, z0), gcol)
                seg((x1, y, z0), (x1, y, z1), gcol)
                seg((x1, y, z1), (x0, y, z1), gcol)
                seg((x0, y, z1), (x0, y, z0), gcol)
            if kind == "fragile":
                fc = (*FRAGILE_LINE, 0.8)
                for k in range(-2, 3):
                    o = k * 0.18
                    seg((wx - 0.42, 0.004, wz + o), (wx + 0.42, 0.004, wz + o), fc)

        self.solid = B.arrays()
        self.lines = (_f32(lv).reshape(-1, 3), _f32(lc).reshape(-1, 4)) if lv else None

    # ------------------------------------------------------------ interaction
    def _rects(self, gui):
        boxes = gui._boxes(gui.state)
        anim = gui.anim
        rects = []
        for i, (cx, _cy, cz, sx, _sy, sz) in enumerate(boxes):
            if anim is not None and i == anim["idx"]:
                t = min(1.0, anim["t"])
                e = t * t * (3 - 2 * t)
                ocx, _a, ocz, osx, _b, osz = anim["box"]
                cx, cz = ocx + (cx - ocx) * e, ocz + (cz - ocz) * e
                sx, sz = osx + (sx - osx) * e, osz + (sz - osz) * e
            rects.append((cx, cz, sx / 2, sz / 2))
        return rects

    def _cells_in(self, box):
        cx, _cy, cz, sx, _sy, sz = box
        c0 = int(round(cx + self.ox - (sx - 1) / 2))
        c1 = int(round(cx + self.ox + (sx - 1) / 2))
        r0 = int(round(cz + self.oz - (sz - 1) / 2))
        r1 = int(round(cz + self.oz + (sz - 1) / 2))
        return [(r, c) for r in range(r0, r1 + 1) for c in range(c0, c1 + 1)]

    def _events(self, gui, now):
        boxes = gui._boxes(gui.state)
        anim = gui.anim
        target = np.zeros(len(self.cells), np.float32)

        def add(box, w):
            for cell in self._cells_in(box):
                i = self.cidx.get(cell)
                if i is not None:
                    target[i] = max(target[i], w)

        for i, b in enumerate(boxes):
            if anim is not None and i == anim["idx"]:
                t = min(1.0, anim["t"])
                add(b, float(_s01((t - 0.35) / 0.65)))
                add(anim["box"], float(1 - _s01(t / 0.55)))
            else:
                add(b, 1.0)

        new_on = np.where(target > 0.6, True, np.where(target < 0.3, False, self.on))
        if self._fresh:
            self.on, self._fresh = new_on, False
            return
        entered = np.nonzero(new_on & ~self.on)[0]
        left = np.nonzero(~new_on & self.on)[0]
        self.on = new_on
        for i in entered:
            self._touch(int(i), now, 1.0, False)
        for i in left:
            self._touch(int(i), now, 0.55, True)

        if self.theme == "beach":                    # keep rippling while inside
            for i in np.nonzero(self.on & self.is_water)[0]:
                if now - self.last_emit[i] > 0.55:
                    self.last_emit[i] = now
                    self._ripple(i, now, 0.35)

    def _ripple(self, i, now, amp):
        x, z = self.cxz[i]
        self.ripples.append((float(x), float(z), now, amp))
        if len(self.ripples) > 14:
            self.ripples.pop(0)

    def _touch(self, i, now, amp, leaving):
        x, z = (float(v) for v in self.cxz[i])
        rnd = np.random.random
        self.rust_t[i], self.rust_amp[i] = now, amp
        if self.theme == "forest" and not leaving:
            for _ in range(7):
                self.pfx.spawn((x + rnd() * .6 - .3, 0.10, z + rnd() * .6 - .3),
                               (rnd() * 1.0 - .5, 0.8 + rnd() * 0.9, rnd() * 1.0 - .5),
                               0.9 + rnd() * 0.5, (0.45 + rnd() * .2, 0.80, 0.28), 1.8)
        elif self.theme == "beach" and self.is_water[i]:
            self._ripple(i, now, 1.0 if not leaving else 0.5)
            if not leaving:
                for _ in range(16):
                    self.pfx.spawn((x + rnd() * .5 - .25, 0.0, z + rnd() * .5 - .25),
                                   (rnd() * 1.6 - .8, 1.6 + rnd() * 1.2, rnd() * 1.6 - .8),
                                   0.7 + rnd() * 0.4, (0.72, 0.92, 1.0), 7.5)
        elif self.theme == "volcano" and not leaving:
            for _ in range(10):
                self.glow.spawn((x + rnd() * .5 - .25, 0.05, z + rnd() * .5 - .25),
                                (rnd() * 1.4 - .7, 1.0 + rnd() * 1.4, rnd() * 1.4 - .7),
                                0.8 + rnd() * 0.5, (1.0, 0.55 + rnd() * .25, 0.12), 2.6)

    # -------------------------------------------------------------- the draw
    def draw(self, gui):
        now = time.perf_counter() - self.t0
        dt = min(0.05, max(0.0, now - self._last))
        self._last = now
        pal = BOARD_PALETTES[gui.board_palette_idx % len(BOARD_PALETTES)]
        self._ensure_static(gui, pal)
        self._events(gui, now)
        self._ensure_batch(gui, pal)
        rects = self._rects(gui)
        self.pfx.update(dt)
        self.glow.update(dt)
        theme = self.theme

        GL.glEnable(GL.GL_BLEND)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)
        GL.glDisable(GL.GL_LIGHTING)
        if theme == "beach":
            self._draw_sea(now)
        elif theme == "volcano":
            self._draw_lava(now)

        GL.glEnable(GL.GL_LIGHTING)
        _draw_arrays(GL.GL_QUADS, *self.solid)
        GL.glDisable(GL.GL_LIGHTING)
        if self.lines is not None:
            GL.glLineWidth(1.0)
            _draw_arrays(GL.GL_LINES, *self.lines)
        GL.glEnable(GL.GL_LIGHTING)
        for cell, kind in self.kind.items():
            if kind == "goal":
                x, z = self.cxz[self.cidx[cell]]
                gui._draw_goal(float(x), float(z))
        GL.glDisable(GL.GL_LIGHTING)

        if theme == "forest":
            self._draw_forest(now, dt, rects)
        elif theme == "beach":
            self._draw_beach(now)
        elif theme == "volcano":
            self._draw_volcano(now)

        GL.glDepthMask(True)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)
        GL.glLineWidth(1.0)
        GL.glPointSize(1.0)
        GL.glEnable(GL.GL_LIGHTING)

    # ---- forest ----------------------------------------------------------
    @staticmethod
    def _press(x, z, rects):
        best = np.zeros_like(x)
        lx = np.zeros_like(x)
        lz = np.zeros_like(x)
        for cx, cz, hx, hz in rects:
            d = np.hypot(np.maximum(np.abs(x - cx) - hx, 0),
                         np.maximum(np.abs(z - cz) - hz, 0))
            p = _s01(1.0 - d / 0.55)
            ox_, oz_ = x - cx, z - cz
            ln = np.hypot(ox_, oz_) + 1e-4
            m = p > best
            best = np.where(m, p, best)
            lx = np.where(m, ox_ / ln, lx)
            lz = np.where(m, oz_ / ln, lz)
        return best.astype(np.float32), lx.astype(np.float32), lz.astype(np.float32)

    def _draw_forest(self, now, dt, rects):
        # grass blades -------------------------------------------------------
        x, z = self.gx, self.gz
        pi_, lx, lz = self._press(x, z, rects)
        rate = np.where(pi_ > self.gp, 22.0, 4.5)
        self.gp += (pi_ - self.gp) * (1 - np.exp(-rate * dt))
        p = self.gp
        age = now - self.rust_t[self.gcell]
        rust = self.rust_amp[self.gcell] * np.exp(-age * 2.3)
        shake = rust * np.sin(age * 21.0 + self.gph) * 0.11
        wx = np.sin(now * 1.5 + self.gph + x * 0.55) * 0.055 + np.sin(now * 0.7 + z * 0.3) * 0.03
        wz = np.cos(now * 1.2 + self.gph * 1.3 + z * 0.5) * 0.04
        hs = self.gh * (1 - 0.82 * p)
        tx = x + wx * (1 - 0.7 * p) + shake * np.cos(self.gang + 1.0) + lx * 0.30 * p
        tz = z + wz * (1 - 0.7 * p) + shake * np.sin(self.gang + 1.0) + lz * 0.30 * p
        cs, sn = np.cos(self.gang), np.sin(self.gang)
        hw = self.gw * 0.5
        v = self.gverts
        v[:, 0, 0], v[:, 0, 1], v[:, 0, 2] = x - hw * cs, 0.002, z - hw * sn
        v[:, 1, 0], v[:, 1, 1], v[:, 1, 2] = x + hw * cs, 0.002, z + hw * sn
        v[:, 2, 0], v[:, 2, 1], v[:, 2, 2] = tx, hs, tz
        _draw_arrays(GL.GL_TRIANGLES, _f32(v.reshape(-1, 3)), self.gcol)

        # flowers ------------------------------------------------------------
        if len(self.fx):
            fp_i, flx, flz = self._press(self.fx, self.fz, rects)
            rate = np.where(fp_i > self.fp, 22.0, 4.5)
            self.fp += (fp_i - self.fp) * (1 - np.exp(-rate * dt))
            fage = now - self.rust_t[self.fcell]
            frust = self.rust_amp[self.fcell] * np.exp(-fage * 2.3)
            fx = (self.fx + np.sin(now * 1.5 + self.fph + self.fx * 0.55) * 0.05
                  + flx * 0.28 * self.fp + frust * np.sin(fage * 21.0) * 0.08)
            fz = (self.fz + np.cos(now * 1.2 + self.fph) * 0.04 + flz * 0.28 * self.fp)
            fy = 0.17 * (1 - 0.85 * self.fp) + 0.01
            fv = np.stack([fx, fy, fz], -1)
            GL.glPointSize(6.0)
            GL.glEnable(GL.GL_POINT_SMOOTH)
            _draw_arrays(GL.GL_POINTS, _f32(fv), _f32(self.fcol))
            GL.glDisable(GL.GL_POINT_SMOOTH)

        # fireflies + leaves -------------------------------------------------
        t, ph, b = now, self.ff_ph, self.ff_base
        pos = np.stack([b[:, 0] + np.sin(t * 0.50 + ph[:, 0]) * 0.55,
                        b[:, 1] + np.sin(t * 0.80 + ph[:, 1]) * 0.18,
                        b[:, 2] + np.cos(t * 0.45 + ph[:, 2]) * 0.55], -1)
        a = (0.5 + 0.5 * np.sin(t * 2.2 + ph[:, 3])) ** 2
        col = np.empty((len(pos), 4), np.float32)
        col[:, 0], col[:, 1], col[:, 2], col[:, 3] = 0.85, 1.0, 0.35, 0.15 + 0.85 * a
        GL.glDepthMask(False)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE)
        GL.glPointSize(4.0)
        GL.glEnable(GL.GL_POINT_SMOOTH)
        _draw_arrays(GL.GL_POINTS, _f32(pos), _f32(col))
        GL.glDisable(GL.GL_POINT_SMOOTH)
        self.pfx.draw(4.0, False)
        GL.glDepthMask(True)

    # ---- beach -----------------------------------------------------------
    def _wave_colors(self, x, z, now):
        n = (np.sin(x * 0.9 + now * 0.9) + np.sin(z * 1.2 - now * 0.7)
             + np.sin((x + z) * 0.8 + now * 0.6)
             + np.sin(np.hypot(x - 1.0, z + 0.6) * 1.6 - now * 1.1))
        return (n + 4.0) / 8.0

    def _draw_sea(self, now):
        x, z = self.px, self.pz
        n = self._wave_colors(x, z, now)
        y = SEA_Y + 0.025 * np.sin(x * 1.3 + now * 1.2) + 0.02 * np.sin(z * 1.6 - now * 1.0)
        deep = np.array((0.02, 0.22, 0.40), np.float32)
        lite = np.array((0.14, 0.66, 0.80), np.float32)
        m = _s01(n)[:, None]
        col = deep * (1 - m) + lite * m
        foam = _s01((n - 0.80) / 0.15)[:, None]
        col = col * (1 - foam * 0.7) + np.array((0.92, 1.0, 1.0), np.float32) * foam * 0.7
        rgba = np.empty((len(x), 4), np.float32)
        rgba[:, :3] = col
        rgba[:, 3] = self.pfade * 0.93
        GL.glDepthMask(False)
        _draw_arrays(GL.GL_TRIANGLES, _f32(np.stack([x, y, z], -1)), _f32(rgba),
                     indices=self.pidx)
        GL.glDepthMask(True)

    def _draw_beach(self, now):
        if len(self.speck):
            GL.glPointSize(2.0)
            _draw_arrays(GL.GL_POINTS, self.speck, self.speck_c)
        GL.glDepthMask(False)
        if len(self.wx):
            x, z = self.wx, self.wz
            h = 0.009 * np.sin(x * 3.0 + now * 1.9) + 0.007 * np.sin(z * 2.4 - now * 1.5 + x * 0.9)
            live = []
            for rx, rz, t0, amp in self.ripples:
                age = now - t0
                if age > 3.4:
                    continue
                live.append((rx, rz, t0, amp))
                d = np.hypot(x - rx, z - rz)
                r = age * 1.9
                env = np.exp(-((d - r) / 0.42) ** 2) * math.exp(-age * 1.0) * amp
                h = h + 0.055 * env * np.cos((d - r) * 10.0)
            self.ripples = live
            tint = (0.5 + 0.5 * np.sin(x * 0.9 + z * 0.6 + now * 0.3))[:, None]
            c0 = np.array((0.10, 0.58, 0.74), np.float32)
            c1 = np.array((0.30, 0.86, 0.88), np.float32)
            base = c0 * (1 - tint) + c1 * tint
            lit = np.clip(h * 9.0, 0, 0.7)[:, None]
            rgba = np.empty((len(x), 4), np.float32)
            rgba[:, :3] = base + (1 - base) * lit * 0.8
            rgba[:, 3] = 0.74 + 0.2 * lit[:, 0]
            _draw_arrays(GL.GL_TRIANGLES,
                         _f32(np.stack([x, WATER_Y + h, z], -1)), _f32(rgba),
                         indices=self.widx)
        if len(self.foam):
            fa = 0.30 + 0.28 * np.sin(now * 2.1 + self.foam_ph)
            col = np.empty((len(self.foam), 4), np.float32)
            col[:, :3] = 1.0
            col[:, 3] = np.repeat(fa, 2)
            GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE)
            GL.glLineWidth(2.0)
            _draw_arrays(GL.GL_LINES, self.foam, col)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)
        self.pfx.draw(3.5, False)
        GL.glDepthMask(True)

    # ---- volcano ---------------------------------------------------------
    def _draw_lava(self, now):
        x, z = self.px, self.pz
        n = (np.sin(x * 0.9 + now * 0.40) + np.sin(z * 1.1 - now * 0.33)
             + np.sin((x + z) * 0.7 + now * 0.27)
             + np.sin(np.hypot(x - 1.5, z + 0.8) * 1.5 - now * 0.55))
        n = (n + 4.0) / 8.0
        y = LAVA_Y + 0.05 * np.sin(x * 1.3 + now * 0.8) * np.sin(z * 1.1 - now * 0.6)
        hot = _s01((n - 0.46) / 0.22)[:, None]
        yel = _s01((n - 0.74) / 0.16)[:, None]
        dark = np.array((0.20, 0.035, 0.02), np.float32)
        orange = np.array((1.0, 0.38, 0.05), np.float32)
        yellow = np.array((1.0, 0.84, 0.28), np.float32)
        col = dark * (1 - hot) + orange * hot
        col = col * (1 - yel) + yellow * yel
        rgba = np.empty((len(x), 4), np.float32)
        rgba[:, :3] = col
        rgba[:, 3] = self.pfade * 0.97
        GL.glDepthMask(False)
        _draw_arrays(GL.GL_TRIANGLES, _f32(np.stack([x, y, z], -1)), _f32(rgba),
                     indices=self.pidx)
        GL.glDepthMask(True)

    def _draw_volcano(self, now):
        GL.glDepthMask(False)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE)
        if len(self.crack):
            a = 0.55 + 0.45 * np.sin(now * 1.6 + self.crack_ph)
            col = np.empty((len(self.crack), 4), np.float32)
            col[:, 0], col[:, 1], col[:, 2], col[:, 3] = 1.0, 0.42 + 0.25 * a, 0.06, 0.35 + 0.65 * a
            GL.glLineWidth(2.5)
            _draw_arrays(GL.GL_LINES, self.crack, _f32(col))
        # rising embers
        u = (now * self.em_sp + self.em_ph) % 1.0
        y = LAVA_Y + u * 4.2
        ex = self.em_x + np.sin(u * 7.0 + self.em_dr) * 0.35
        ez = self.em_z + np.cos(u * 6.0 + self.em_dr) * 0.35
        col = np.empty((len(u), 4), np.float32)
        col[:, 0], col[:, 1], col[:, 2] = 1.0, 0.80 - 0.55 * u, 0.15
        col[:, 3] = (1 - u) * np.minimum(1.0, u * 8.0)
        GL.glPointSize(3.0)
        GL.glEnable(GL.GL_POINT_SMOOTH)
        _draw_arrays(GL.GL_POINTS, _f32(np.stack([ex, y, ez], -1)), _f32(col))
        GL.glDisable(GL.GL_POINT_SMOOTH)
        self.glow.draw(3.5, True)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)
        GL.glDepthMask(True)

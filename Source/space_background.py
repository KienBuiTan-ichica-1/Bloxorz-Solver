"""Procedural outer-space background for the Bloxorz OpenGL GUI.

Everything heavy (nebulae, Milky Way band, spiral galaxy, planet, moon) is
rendered ONCE with numpy at start-up into a few textures.  Per frame only a
handful of textured quads and three ``glDrawArrays`` calls are issued, so the
cost is negligible.

Usage (after the GL context exists)::

    self.space = SpaceBackground(WIN_W, WIN_H, focus=(0, 0, view_w, view_h))
    ...
    self.space.draw(self.cam_yaw, self.cam_pitch)   # before the 3D scene
"""

from __future__ import annotations

import math
import time

import numpy as np
from OpenGL import GL


# --------------------------------------------------------------------------- #
# numpy helpers
# --------------------------------------------------------------------------- #
def _smooth(x):
    return x * x * (3.0 - 2.0 * x)


def _smoothstep(a, b, x):
    return _smooth(np.clip((x - a) / (b - a), 0.0, 1.0))


def _value_noise(rng, h, w, cy, cx):
    """Smooth value noise on a (cy x cx) lattice, resampled to (h, w)."""
    grid = rng.random((cy + 2, cx + 2)).astype(np.float32)
    ys = np.linspace(0, cy, h, endpoint=False, dtype=np.float32)
    xs = np.linspace(0, cx, w, endpoint=False, dtype=np.float32)
    y0, x0 = ys.astype(np.int32), xs.astype(np.int32)
    fy = _smooth(ys - y0)[:, None]
    fx = _smooth(xs - x0)[None, :]
    top = grid[y0][:, x0] * (1 - fx) + grid[y0][:, x0 + 1] * fx
    bot = grid[y0 + 1][:, x0] * (1 - fx) + grid[y0 + 1][:, x0 + 1] * fx
    return top * (1 - fy) + bot * fy


def _fbm(rng, h, w, base=3, octaves=6, gain=0.52):
    """Fractal Brownian motion, normalised to 0..1."""
    total = np.zeros((h, w), np.float32)
    amp, norm = 1.0, 0.0
    for i in range(octaves):
        cells = base * (2 ** i)
        total += amp * _value_noise(rng, h, w, max(1, cells * h // w), cells)
        norm += amp
        amp *= gain
    return total / norm


def _warped_fbm(rng, h, w, base=3, octaves=6, strength=0.55):
    """Domain-warped fbm: gives the wispy, swirling nebula look."""
    qx = _fbm(rng, h, w, base, 4)
    qy = _fbm(rng, h, w, base, 4)
    d = _fbm(rng, h, w, base + 1, octaves)
    # cheap warp: shift the final field by the warp noise
    sy = ((qy - 0.5) * strength * h * 0.35).astype(np.int32)
    sx = ((qx - 0.5) * strength * w * 0.35).astype(np.int32)
    yy = np.clip(np.arange(h)[:, None] + sy, 0, h - 1)
    xx = np.clip(np.arange(w)[None, :] + sx, 0, w - 1)
    return d[yy, xx]


def _upload(rgba, wrap=GL.GL_CLAMP_TO_EDGE):
    h, w = rgba.shape[:2]
    data = np.ascontiguousarray(rgba, dtype=np.uint8)
    tid = GL.glGenTextures(1)
    GL.glBindTexture(GL.GL_TEXTURE_2D, tid)
    GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_MIN_FILTER, GL.GL_LINEAR)
    GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_MAG_FILTER, GL.GL_LINEAR)
    GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_WRAP_S, wrap)
    GL.glTexParameteri(GL.GL_TEXTURE_2D, GL.GL_TEXTURE_WRAP_T, wrap)
    GL.glPixelStorei(GL.GL_UNPACK_ALIGNMENT, 1)
    GL.glTexImage2D(GL.GL_TEXTURE_2D, 0, GL.GL_RGBA, w, h, 0,
                    GL.GL_RGBA, GL.GL_UNSIGNED_BYTE, data)
    return tid


# --------------------------------------------------------------------------- #
# texture generators
# --------------------------------------------------------------------------- #
def _make_nebula(rng, w, h, focus):
    """Full-window deep-space image: gradient + nebulae + Milky Way + galaxy."""
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    u, v = xx / w, yy / h                      # 0..1 screen coordinates
    fx0, fy0, fw, fh = focus
    cu, cv = (fx0 + fw / 2) / w, (fy0 + fh / 2) / h

    # base: very dark blue -> violet-black gradient
    img = np.zeros((h, w, 3), np.float32)
    img[..., 0] = 0.010 + 0.020 * v
    img[..., 1] = 0.014 + 0.018 * v
    img[..., 2] = 0.035 + 0.050 * v

    def blob(cx, cy, rx, ry):
        return np.exp(-(((u - cx) / rx) ** 2 + ((v - cy) / ry) ** 2))

    # ---- big coloured nebula clouds (kept away from the board centre) ------
    n1 = _warped_fbm(rng, h, w, base=3)
    n2 = _warped_fbm(rng, h, w, base=4)
    n3 = _warped_fbm(rng, h, w, base=5)

    purple = _smoothstep(0.38, 0.80, n1) * blob(0.16, 0.30, 0.42, 0.40)
    cyan = _smoothstep(0.40, 0.82, n2) * blob(0.78, 0.78, 0.40, 0.34)
    pink = _smoothstep(0.45, 0.85, n3) * blob(0.62, 0.10, 0.26, 0.22)
    teal2 = _smoothstep(0.50, 0.85, n3) * blob(0.05, 0.92, 0.28, 0.24)

    img += purple[..., None] * np.array([0.60, 0.16, 0.86], np.float32) * 0.80
    img += cyan[..., None] * np.array([0.06, 0.52, 0.80], np.float32) * 0.70
    img += pink[..., None] * np.array([1.00, 0.28, 0.58], np.float32) * 0.85
    img += teal2[..., None] * np.array([0.10, 0.70, 0.60], np.float32) * 0.40

    # bright "hot" cores inside the clouds
    core = _smoothstep(0.62, 0.92, n1) * blob(0.16, 0.30, 0.30, 0.28)
    img += core[..., None] * np.array([0.95, 0.60, 1.00], np.float32) * 0.30

    # ---- Milky-Way style band across the sky -------------------------------
    ang = -0.42
    bx = (u - 0.5) * math.cos(ang) * (w / h) - (v - 0.5) * math.sin(ang)
    by = (u - 0.5) * math.sin(ang) * (w / h) + (v - 0.5) * math.cos(ang)
    band = np.exp(-(by / 0.16) ** 2) * (0.55 + 0.45 * _fbm(rng, h, w, 6, 5))
    lanes = _smoothstep(0.52, 0.72, _fbm(rng, h, w, 9, 5))     # dust lanes
    band = band * (1.0 - 0.75 * lanes * np.exp(-(by / 0.10) ** 2))
    band *= 1.0 - 0.80 * blob(cu, cv, 0.22, 0.30)               # dim behind board
    warm = np.array([1.00, 0.82, 0.70], np.float32)
    cool = np.array([0.55, 0.66, 1.00], np.float32)
    mix = np.clip(0.5 + bx * 0.8, 0, 1)[..., None]
    img += (band[..., None] * (warm * mix + cool * (1 - mix))) * 0.16

    # fine grain stars inside the band (unresolved star dust)
    dust = (rng.random((h, w)).astype(np.float32) ** 14) * band * 0.8
    img += dust[..., None] * np.array([0.9, 0.95, 1.0], np.float32)

    # ---- small spiral galaxy ----------------------------------------------
    gx, gy = 0.30, 0.80
    dx, dy = (u - gx) * (w / h), (v - gy)
    rot = 0.6
    px = dx * math.cos(rot) - dy * math.sin(rot)
    py = (dx * math.sin(rot) + dy * math.cos(rot)) / 0.38      # tilt -> ellipse
    r = np.sqrt(px * px + py * py) + 1e-4
    theta = np.arctan2(py, px)
    phase = 2.0 * theta - 7.0 * np.log1p(r * 18.0)
    arms = (0.5 + 0.5 * np.cos(phase)) ** 1.6
    arms *= 0.55 + 0.9 * _fbm(rng, h, w, 7, 4)               # clumpy arms
    glow = np.exp(-r / 0.04) * 1.2 + np.exp(-r / 0.11) * arms * 0.9
    glow *= np.exp(-(r / 0.26) ** 2)
    img += glow[..., None] * np.array([0.85, 0.80, 1.00], np.float32) * 0.55

    # ---- tone map, vignette, dither ---------------------------------------
    vig = 1.0 - 0.55 * np.clip(
        np.sqrt(((u - 0.5) / 0.75) ** 2 + ((v - 0.5) / 0.75) ** 2) - 0.25, 0, 1)
    img *= vig[..., None]
    img = 1.0 - np.exp(-img * 1.55)                     # soft highlight roll-off
    img = np.power(np.clip(img, 0, 1), 0.92)
    img += (rng.random((h, w, 1)).astype(np.float32) - 0.5) / 255.0 * 1.5
    out = np.empty((h, w, 4), np.uint8)
    out[..., :3] = np.clip(img * 255.0, 0, 255).astype(np.uint8)
    out[..., 3] = 255
    return out


def _make_planet(rng, size=512):
    """Banded gas giant with atmosphere glow and a tilted ring (RGBA)."""
    s = size
    ys, xs = np.mgrid[0:s, 0:s].astype(np.float32)
    x = (xs / (s - 1)) * 2 - 1
    y = (ys / (s - 1)) * 2 - 1
    R = 0.46
    rr = np.sqrt(x * x + y * y)

    rgb = np.zeros((s, s, 3), np.float32)
    alpha = np.zeros((s, s), np.float32)

    # --- ring geometry (ellipse, tilted) ---
    tilt = -0.38
    rx = x * math.cos(tilt) + y * math.sin(tilt)
    ry = -x * math.sin(tilt) + y * math.cos(tilt)
    a, b = 0.98, 0.98 * 0.30
    q = np.sqrt((rx / a) ** 2 + (ry / b) ** 2)
    ring_band = (q > 0.58) & (q < 1.0)
    ring_pat = (0.62 + 0.38 * np.sin(q * 46.0)) * (0.75 + 0.25 * np.sin(q * 15.0 + 1.3))
    ring_pat *= _smoothstep(0.58, 0.63, q) * (1 - _smoothstep(0.97, 1.0, q))
    ring_pat *= 1.0 - 0.9 * np.exp(-((q - 0.80) / 0.018) ** 2)     # Cassini gap
    ring_col = np.stack([0.95 * ring_pat, 0.82 * ring_pat, 0.68 * ring_pat], -1)
    ring_a = np.where(ring_band, np.clip(ring_pat * 1.15, 0, 0.95), 0.0).astype(np.float32)
    front = ry > 0

    def put_ring(mask):
        nonlocal rgb, alpha
        m = (mask & ring_band)[..., None]
        rgb = np.where(m, ring_col * ring_a[..., None] + rgb * (1 - ring_a[..., None]), rgb)
        alpha = np.where(mask & ring_band, np.maximum(alpha, ring_a), alpha)

    put_ring(~front)                                   # back half of the ring

    # --- planet body ---
    inside = rr < R
    nz = np.sqrt(np.clip(1 - (rr / R) ** 2, 0, 1))
    nx, ny = x / R, y / R
    light = np.array([-0.62, -0.46, 0.64], np.float32)
    light /= np.linalg.norm(light)
    diff = np.clip(nx * light[0] + ny * light[1] + nz * light[2], 0, 1)
    diff = _smoothstep(0.0, 0.85, diff) ** 0.9

    turb = _fbm(rng, s, s, 4, 5)
    lat = ny + (turb - 0.5) * 0.28
    bands = 0.5 + 0.5 * np.sin(lat * 15.0) * (0.65 + 0.35 * np.sin(lat * 4.7 + 0.8))
    bands = bands * 0.75 + turb * 0.25
    c1 = np.array([0.20, 0.34, 0.74], np.float32)     # deep blue
    c2 = np.array([0.52, 0.76, 0.96], np.float32)     # pale cyan
    c3 = np.array([0.88, 0.52, 0.80], np.float32)     # magenta storm tint
    body = c1 * (1 - bands[..., None]) + c2 * bands[..., None]
    storm = _smoothstep(0.62, 0.80, turb) * _smoothstep(-0.2, 0.5, -ny)
    body = body * (1 - storm[..., None] * 0.45) + c3 * storm[..., None] * 0.45

    ambient = 0.07
    shade = ambient + (1 - ambient) * diff
    body = body * shade[..., None]
    rim = (1 - nz) ** 3.0                              # atmosphere rim light
    body += rim[..., None] * np.array([0.30, 0.62, 1.0], np.float32) * (0.15 + 0.85 * diff[..., None])
    rgb = np.where(inside[..., None], body, rgb)
    alpha = np.where(inside, 1.0, alpha)
    edge = _smoothstep(R, R - 0.012, rr)               # anti-aliased limb
    alpha = np.where(inside, edge + (1 - edge) * alpha, alpha)

    # --- outer atmospheric halo ---
    halo = np.exp(-np.clip(rr - R, 0, None) / 0.035) * (rr >= R)
    halo = halo * (0.30 + 0.70 * np.clip(-(x * light[0] + y * light[1]) / R * -1, 0, 1)) * 0.45
    halo_rgb = np.array([0.30, 0.55, 1.0], np.float32)
    ha = np.clip(halo, 0, 1) * (alpha < 0.5)
    rgb = np.where((ha > 0)[..., None] & (alpha < 0.5)[..., None],
                   halo_rgb * ha[..., None] + rgb * alpha[..., None], rgb)
    alpha = np.maximum(alpha, ha)

    put_ring(front)                                    # front half of the ring

    # the ring's shadow darkens the planet just above the ring plane
    out = np.zeros((s, s, 4), np.uint8)
    out[..., :3] = np.clip(rgb * 255, 0, 255).astype(np.uint8)
    out[..., 3] = np.clip(alpha * 255, 0, 255).astype(np.uint8)
    return out


def _make_moon(rng, size=128):
    s = size
    ys, xs = np.mgrid[0:s, 0:s].astype(np.float32)
    x = (xs / (s - 1)) * 2 - 1
    y = (ys / (s - 1)) * 2 - 1
    R = 0.90
    rr = np.sqrt(x * x + y * y)
    nz = np.sqrt(np.clip(1 - (rr / R) ** 2, 0, 1))
    light = np.array([-0.55, -0.50, 0.66], np.float32)
    light /= np.linalg.norm(light)
    diff = np.clip((x / R) * light[0] + (y / R) * light[1] + nz * light[2], 0, 1)
    tex = 0.55 + 0.45 * _fbm(rng, s, s, 5, 4)
    craters = _smoothstep(0.62, 0.68, _fbm(rng, s, s, 9, 2))
    tex = tex * (1 - 0.35 * craters)
    shade = 0.05 + 0.95 * diff
    col = np.stack([0.80 * tex, 0.78 * tex, 0.76 * tex], -1) * shade[..., None]
    out = np.zeros((s, s, 4), np.uint8)
    out[..., :3] = np.clip(col * 255, 0, 255).astype(np.uint8)
    out[..., 3] = np.clip(_smoothstep(R, R - 0.06, rr) * 255, 0, 255).astype(np.uint8)
    return out


def _make_glow(size=64):
    ys, xs = np.mgrid[0:size, 0:size].astype(np.float32)
    r = np.sqrt(((xs - size / 2 + .5) / (size / 2)) ** 2 +
                ((ys - size / 2 + .5) / (size / 2)) ** 2)
    a = np.clip(1 - r, 0, 1)
    a = a ** 2.6
    out = np.full((size, size, 4), 255, np.uint8)
    out[..., 3] = np.clip(a * 255, 0, 255).astype(np.uint8)
    return out


# --------------------------------------------------------------------------- #
# the background object
# --------------------------------------------------------------------------- #
class SpaceBackground:
    """Create after the GL context exists; call :meth:`draw` every frame."""

    # sizes of the three parallax star layers: (count, point size, parallax)
    LAYERS = ((520, 1.2, 0.035), (200, 1.8, 0.075), (70, 2.6, 0.130))

    def __init__(self, width, height, focus=None, seed=20261024):
        self.w, self.h = width, height
        self.focus = focus or (0, 0, width, height)
        self.t0 = time.perf_counter()
        rng = np.random.default_rng(seed)

        # nebula is rendered at ~60 % resolution (it is smooth anyway)
        nw, nh = int(width * 0.6), int(height * 0.6)
        self.tex_nebula = _upload(_make_nebula(rng, nw, nh, (
            self.focus[0] * 0.6, self.focus[1] * 0.6,
            self.focus[2] * 0.6, self.focus[3] * 0.6)))
        self.tex_planet = _upload(_make_planet(rng))
        self.tex_moon = _upload(_make_moon(rng))
        self.tex_glow = _upload(_make_glow())

        # stars: x, y, phase, speed, base-alpha and an rgb tint per star
        self.layers = []
        palette = np.array([
            (0.65, 0.78, 1.00), (0.80, 0.88, 1.00), (1.00, 1.00, 1.00),
            (1.00, 0.95, 0.80), (1.00, 0.82, 0.62), (1.00, 0.70, 0.55),
        ], np.float32)
        weights = np.array([0.20, 0.22, 0.28, 0.14, 0.10, 0.06])
        for count, size, parallax in self.LAYERS:
            pos = np.stack([rng.random(count) * width,
                            rng.random(count) * height], -1).astype(np.float32)
            tint = palette[rng.choice(len(palette), count, p=weights)]
            col = np.empty((count, 4), np.float32)
            col[:, :3] = tint
            col[:, 3] = 1.0
            self.layers.append({
                "pos": pos, "col": col, "size": size, "par": parallax,
                "phase": (rng.random(count) * math.tau).astype(np.float32),
                "speed": (0.6 + rng.random(count) * 2.2).astype(np.float32),
                "base": (0.45 + rng.random(count) * 0.55).astype(np.float32),
                "xy": np.empty((count, 2), np.float32),
            })

        # a few big glowing stars with diffraction spikes
        self.bright = [
            (float(rng.random() * width), float(rng.random() * height),
             float(10 + rng.random() * 12), float(rng.random() * math.tau),
             tuple(palette[rng.choice(4)]))
            for _ in range(11)
        ]

    # ------------------------------------------------------------------ utils
    def _quad(self, x0, y0, x1, y1, tid, rgba=(1, 1, 1, 1),
              uv=(0.0, 0.0, 1.0, 1.0)):
        GL.glBindTexture(GL.GL_TEXTURE_2D, tid)
        GL.glColor4f(*rgba)
        u0, v0, u1, v1 = uv
        GL.glBegin(GL.GL_QUADS)
        GL.glTexCoord2f(u0, v0); GL.glVertex2f(x0, y0)
        GL.glTexCoord2f(u1, v0); GL.glVertex2f(x1, y0)
        GL.glTexCoord2f(u1, v1); GL.glVertex2f(x1, y1)
        GL.glTexCoord2f(u0, v1); GL.glVertex2f(x0, y1)
        GL.glEnd()

    def _stars(self, t, yaw, pitch):
        GL.glDisable(GL.GL_TEXTURE_2D)
        GL.glEnable(GL.GL_POINT_SMOOTH)
        GL.glEnableClientState(GL.GL_VERTEX_ARRAY)
        GL.glEnableClientState(GL.GL_COLOR_ARRAY)
        for L in self.layers:
            xy = L["xy"]
            xy[:, 0] = (L["pos"][:, 0] - yaw * L["par"] * self.w) % self.w
            xy[:, 1] = (L["pos"][:, 1] + (pitch - 0.9) * L["par"] * self.h * 1.2) % self.h
            tw = 0.62 + 0.38 * np.sin(t * L["speed"] + L["phase"])
            L["col"][:, 3] = np.clip(L["base"] * tw, 0, 1)
            GL.glPointSize(L["size"])
            GL.glVertexPointer(2, GL.GL_FLOAT, 0, xy)
            GL.glColorPointer(4, GL.GL_FLOAT, 0, L["col"])
            GL.glDrawArrays(GL.GL_POINTS, 0, len(xy))
        GL.glDisableClientState(GL.GL_COLOR_ARRAY)
        GL.glDisableClientState(GL.GL_VERTEX_ARRAY)
        GL.glDisable(GL.GL_POINT_SMOOTH)

    def _bright_stars(self, t, yaw, pitch):
        GL.glEnable(GL.GL_TEXTURE_2D)
        for x, y, size, phase, tint in self.bright:
            sx = (x - yaw * 0.16 * self.w) % self.w
            sy = (y + (pitch - 0.9) * 0.16 * self.h * 1.2) % self.h
            pulse = 0.78 + 0.22 * math.sin(t * 1.3 + phase)
            r = size * (0.9 + 0.2 * pulse)
            self._quad(sx - r * 2, sy - r * 2, sx + r * 2, sy + r * 2,
                       self.tex_glow, (tint[0], tint[1], tint[2], 0.55 * pulse))
            self._quad(sx - r * .5, sy - r * .5, sx + r * .5, sy + r * .5,
                       self.tex_glow, (1, 1, 1, 0.95))
        GL.glDisable(GL.GL_TEXTURE_2D)
        GL.glLineWidth(1.0)
        GL.glEnable(GL.GL_LINE_SMOOTH)
        GL.glBegin(GL.GL_LINES)
        for x, y, size, phase, tint in self.bright:
            sx = (x - yaw * 0.16 * self.w) % self.w
            sy = (y + (pitch - 0.9) * 0.16 * self.h * 1.2) % self.h
            pulse = 0.78 + 0.22 * math.sin(t * 1.3 + phase)
            ln = size * 2.1 * pulse
            for (dx, dy), a in (((ln, 0), 0.55), ((0, ln), 0.55)):
                GL.glColor4f(tint[0], tint[1], tint[2], 0.0)
                GL.glVertex2f(sx - dx, sy - dy)
                GL.glColor4f(1, 1, 1, a * pulse)
                GL.glVertex2f(sx, sy)
                GL.glVertex2f(sx, sy)
                GL.glColor4f(tint[0], tint[1], tint[2], 0.0)
                GL.glVertex2f(sx + dx, sy + dy)
        GL.glEnd()

    def _shooting_star(self, t):
        """Stateless: a deterministic meteor every few seconds."""
        period = 5.5
        slot = int(t // period)
        rnd = np.random.default_rng(slot * 7919 + 13)
        if rnd.random() > 0.75:
            return
        start = slot * period + rnd.random() * (period - 1.4)
        p = (t - start) / 0.85
        if not 0.0 <= p <= 1.0:
            return
        x0 = rnd.random() * self.w * 0.7 + self.w * 0.1
        y0 = rnd.random() * self.h * 0.35
        ang = math.radians(25 + rnd.random() * 25)
        dist = self.w * 0.28
        hx, hy = x0 + math.cos(ang) * dist * p, y0 + math.sin(ang) * dist * p
        tail = 120 * math.sin(p * math.pi)
        tx, ty = hx - math.cos(ang) * tail, hy - math.sin(ang) * tail
        fade = math.sin(p * math.pi)
        GL.glLineWidth(1.8)
        GL.glBegin(GL.GL_LINES)
        GL.glColor4f(0.6, 0.8, 1.0, 0.0)
        GL.glVertex2f(tx, ty)
        GL.glColor4f(1.0, 1.0, 1.0, 0.95 * fade)
        GL.glVertex2f(hx, hy)
        GL.glEnd()
        GL.glLineWidth(1.0)

    # ------------------------------------------------------------------- draw
    def draw(self, yaw=0.0, pitch=0.9):
        """Draw the whole backdrop over the full window (call before 3D)."""
        t = time.perf_counter() - self.t0
        w, h = self.w, self.h

        GL.glViewport(0, 0, w, h)
        GL.glMatrixMode(GL.GL_PROJECTION)
        GL.glPushMatrix()
        GL.glLoadIdentity()
        GL.glOrtho(0, w, h, 0, -1, 1)
        GL.glMatrixMode(GL.GL_MODELVIEW)
        GL.glPushMatrix()
        GL.glLoadIdentity()
        GL.glDisable(GL.GL_DEPTH_TEST)
        GL.glDisable(GL.GL_LIGHTING)
        GL.glEnable(GL.GL_BLEND)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)

        # 1) nebula (slightly oversized, drifts a little with the camera)
        GL.glEnable(GL.GL_TEXTURE_2D)
        GL.glDisable(GL.GL_BLEND)
        dx = math.sin(yaw) * 0.018 * w
        dy = (pitch - 0.9) * 0.030 * h
        mx, my = w * 0.04, h * 0.04
        self._quad(-mx + dx, -my + dy, w + mx + dx, h + my + dy, self.tex_nebula)
        GL.glEnable(GL.GL_BLEND)

        # 2) planet + ring, orbiting moon (planet sits in the board's top-right)
        fx, fy, fw, fh = self.focus
        pr = max(80.0, fh * 0.23)                       # half-size of the sprite
        pcx = fx + fw * 0.83 + dx * 1.6
        pcy = fy + fh * 0.23 + dy * 1.6
        ang = t * 0.12
        mdx, mdy = math.cos(ang) * pr * 1.45, math.sin(ang) * pr * 0.42
        tilt = -0.38
        mox = mdx * math.cos(tilt) - mdy * math.sin(tilt)
        moy = mdx * math.sin(tilt) + mdy * math.cos(tilt)
        moon_r = pr * 0.12
        moon_front = math.sin(ang) > 0

        def moon():
            self._quad(pcx + mox - moon_r, pcy + moy - moon_r,
                       pcx + mox + moon_r, pcy + moy + moon_r, self.tex_moon)

        if not moon_front:
            moon()
        self._quad(pcx - pr, pcy - pr, pcx + pr, pcy + pr, self.tex_planet)
        if moon_front:
            moon()

        # 3) stars (additive so they glow over the nebula)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE)
        self._stars(t, yaw, pitch)
        self._bright_stars(t, yaw, pitch)
        self._shooting_star(t)

        # restore the state the rest of the program expects
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)
        GL.glDisable(GL.GL_TEXTURE_2D)
        GL.glColor4f(1, 1, 1, 1)
        GL.glMatrixMode(GL.GL_PROJECTION)
        GL.glPopMatrix()
        GL.glMatrixMode(GL.GL_MODELVIEW)
        GL.glPopMatrix()
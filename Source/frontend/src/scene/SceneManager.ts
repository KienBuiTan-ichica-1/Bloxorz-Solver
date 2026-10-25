import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { Engine, footprint } from '../engine'
import type { Action, Cell, State, StepResult, SwitchType } from '../types'

type Tween = { t: number; dur: number; fn: (k: number) => void; ease: (k: number) => number; done: () => void }
type BridgeObj = { mesh: THREE.Mesh; mat: THREE.MeshStandardMaterial; bit: number; anim: number; target: number; baseY: number }

const easeInOut = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2)
const easeOut = (k: number) => 1 - Math.pow(1 - k, 3)
const easeIn = (k: number) => k * k
const easeOutBack = (k: number) => 1 + 2.70158 * Math.pow(k - 1, 3) + 1.70158 * Math.pow(k - 1, 2)

const PALETTE = ['#0e9aa7', '#e0245e', '#5fa84a', '#e69a00', '#7e57c2']
const PINK = 0xe8245f
const GOAL_PINK = 0xff2f6e
const TILE = 0.97
const THICK = 0.42
const BLOCK_W = 0.94

function canvasTex(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void, srgb = true) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  draw(c.getContext('2d')!)
  const t = new THREE.CanvasTexture(c)
  if (srgb) t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}

function symbolTexture(type: SwitchType, color: string) {
  return canvasTex(256, 256, (g) => {
    g.clearRect(0, 0, 256, 256)
    g.strokeStyle = color
    g.fillStyle = color
    g.lineCap = 'round'
    g.lineWidth = 16
    if (type === 'soft') {
      g.beginPath(); g.arc(128, 128, 92, 0, Math.PI * 2); g.stroke()
      g.globalAlpha = 0.55; g.beginPath(); g.arc(128, 128, 56, 0, Math.PI * 2); g.fill()
    } else if (type === 'heavy') {
      g.beginPath(); g.arc(128, 128, 100, 0, Math.PI * 2); g.stroke()
      g.lineWidth = 26
      g.beginPath(); g.moveTo(84, 84); g.lineTo(172, 172); g.moveTo(172, 84); g.lineTo(84, 172); g.stroke()
    } else {
      g.lineWidth = 20
      g.beginPath(); g.arc(210, 128, 96, Math.PI * 0.72, Math.PI * 1.28); g.stroke()
      g.beginPath(); g.arc(46, 128, 96, -Math.PI * 0.28, Math.PI * 0.28); g.stroke()
      g.beginPath(); g.arc(128, 128, 22, 0, Math.PI * 2); g.fill()
    }
  })
}

export class SceneManager {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera: THREE.PerspectiveCamera
  private controls: OrbitControls
  private composer: EffectComposer
  private ro: ResizeObserver
  private raf = 0
  private last = performance.now()
  private time = 0
  private tweens: Tween[] = []
  private board = new THREE.Group()
  private sun: THREE.DirectionalLight
  private goalCover: THREE.Mesh | null = null
  private block: THREE.Mesh
  private cubes: THREE.Mesh[]
  private marker: THREE.Mesh
  private bridges: BridgeObj[] = []
  private decals: THREE.Mesh[] = []
  private beam: THREE.Mesh | null = null
  private disposables: { dispose(): void }[] = []
  private cur: State | null = null
  private shake = 0
  private center = new THREE.Vector3()
  private radius = 10
  private disposed = false
  private shatterParts: { obj: THREE.Object3D; p: THREE.Vector3; q: THREE.Quaternion; s: THREE.Vector3 }[] = []
  private shatterToken = 0
  private shattering = false
  private shatterTimer: number | null = null

  constructor(private container: HTMLElement) {
    const w = container.clientWidth || 800
    const h = container.clientHeight || 600
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(w, h)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.NoToneMapping
    container.appendChild(this.renderer.domElement)

    const pmrem = new THREE.PMREMGenerator(this.renderer)
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    this.scene.environmentIntensity = 0.3
    this.scene.background = canvasTex(512, 512, (g) => {
      const gr = g.createRadialGradient(300, 210, 10, 300, 210, 360)
      gr.addColorStop(0, '#2bb39a'); gr.addColorStop(0.5, '#1c7a70'); gr.addColorStop(1, '#1c2327')
      g.fillStyle = gr; g.fillRect(0, 0, 512, 512)
    })

    this.camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 400)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.maxPolarAngle = Math.PI * 0.47
    this.controls.minDistance = 5
    this.controls.maxDistance = 70

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x9fb7b3, 0.8))
    this.sun = new THREE.DirectionalLight(0xffffff, 1.5)
    this.sun.castShadow = true
    this.sun.shadow.mapSize.set(2048, 2048)
    this.sun.shadow.bias = -0.0004
    this.sun.shadow.normalBias = 0.02
    this.scene.add(this.sun, this.sun.target)
    const rim = new THREE.DirectionalLight(0xbafff0, 0.5)
    rim.position.set(10, 6, -14)
    this.scene.add(rim)
    this.scene.add(this.board)

    // khoi chinh va hai khoi lap phuong khi tach
    const bm = new THREE.MeshStandardMaterial({ color: PINK, roughness: 0.5, metalness: 0 })
    this.block = new THREE.Mesh(new RoundedBoxGeometry(BLOCK_W, 2 * BLOCK_W + 0.06, BLOCK_W, 3, 0.03), bm)
    this.block.castShadow = true
    const cubeGeo = new RoundedBoxGeometry(BLOCK_W, BLOCK_W, BLOCK_W, 3, 0.03)
    this.cubes = [0, 1].map((i) => {
      const m = bm.clone()
      m.color = new THREE.Color(i === 0 ? PINK : 0xf5a524)
      m.emissive = m.color.clone()
      m.emissiveIntensity = 0
      const mesh = new THREE.Mesh(cubeGeo, m)
      mesh.castShadow = true
      mesh.visible = false
      return mesh
    })
    this.marker = new THREE.Mesh(new THREE.OctahedronGeometry(0.17), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x6ff3ff).multiplyScalar(2.2) }))
    this.marker.visible = false
    this.scene.add(this.block, ...this.cubes, this.marker)

    this.composer = new EffectComposer(this.renderer)
    this.composer.renderTarget1.samples = 4
    this.composer.renderTarget2.samples = 4
    this.composer.addPass(new RenderPass(this.scene, this.camera))
        this.composer.addPass(new OutputPass())

    this.ro = new ResizeObserver(() => this.resize())
    this.ro.observe(container)
    this.resize()
    this.raf = requestAnimationFrame(this.tick)
  }

  // ------------------------------------------------------------ vong lap
  private tick = (now: number) => {
    if (this.disposed) return
    const dt = Math.min(0.05, (now - this.last) / 1000)
    this.last = now
    this.time += dt
    for (const tw of [...this.tweens]) {
      tw.t += dt
      if (tw.t < 0) continue
      const k = Math.min(1, tw.t / tw.dur)
      tw.fn(tw.ease(k))
      if (k >= 1) {
        this.tweens.splice(this.tweens.indexOf(tw), 1)
        tw.done()
      }
    }
    if (!this.shattering) {
      for (const b of this.bridges) {
        b.anim += (b.target - b.anim) * Math.min(1, dt * 7)
        b.mesh.visible = b.anim > 0.02
        b.mesh.scale.y = Math.max(0.05, b.anim)
        b.mesh.position.y = b.baseY - (1 - b.anim) * 0.7
        b.mat.opacity = 0.2 + 0.75 * b.anim
      }
      const s = 1 + 0.05 * Math.sin(this.time * 3)
      for (const d of this.decals) d.scale.setScalar(s)
    }
    if (this.beam) (this.beam.material as THREE.MeshBasicMaterial).opacity = 0.1 + 0.05 * Math.sin(this.time * 2.2)
    if (this.marker.visible && this.cur?.o === 'P') {
      const cube = this.cubes[this.cur.act]
      this.marker.position.set(cube.position.x, cube.position.y + 0.95 + 0.1 * Math.sin(this.time * 4), cube.position.z)
      this.marker.rotation.y = this.time * 2
    }
    this.shake = Math.max(0, this.shake - dt * 2.5)
    this.scene.position.set((Math.random() - 0.5) * this.shake * 0.25, (Math.random() - 0.5) * this.shake * 0.25, 0)
    this.controls.update()
    this.composer.render(dt)
    this.raf = requestAnimationFrame(this.tick)
  }

  private tween(dur: number, fn: (k: number) => void, ease = easeInOut, delay = 0): Promise<void> {
    return new Promise((done) => this.tweens.push({ t: -delay, dur: Math.max(dur, 0.001), fn, ease, done }))
  }

  private resize() {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    if (!w || !h) return
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  dispose() {
    this.disposed = true
    if (this.shatterTimer !== null) clearTimeout(this.shatterTimer)
    this.shatterTimer = null
    cancelAnimationFrame(this.raf)
    this.ro.disconnect()
    this.controls.dispose()
    this.composer.dispose()
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }

  // ------------------------------------------------------------ dung man choi
  loadLevel(eng: Engine) {
    this.tweens = []
    this.shatterToken++
    if (this.shatterTimer !== null) clearTimeout(this.shatterTimer)
    this.shatterTimer = null
    this.shatterParts = []
    this.shattering = false
    this.board.clear()
    this.disposables.forEach((d) => d.dispose())
    this.disposables = []
    this.bridges = []
    this.decals = []
    this.beam = null
    this.goalCover = null
    const track = <T extends { dispose(): void }>(x: T) => (this.disposables.push(x), x)

    const ids = [...new Set(eng.bridgeList.map((b) => b.id))]
    const colorOf = (id: string) => new THREE.Color(PALETTE[Math.max(0, ids.indexOf(id)) % PALETTE.length])

    const tileGeo = track(new RoundedBoxGeometry(TILE, THICK, TILE, 2, 0.02))
    const floorMats = [0xffffff, 0xffffff].map((c) => track(new THREE.MeshStandardMaterial({ color: c, metalness: 0, roughness: 0.82 })))
    const crack = track(canvasTex(256, 256, (g) => {
      g.fillStyle = '#fff7f8'; g.fillRect(0, 0, 256, 256)
      g.strokeStyle = 'rgba(190,45,85,.6)'; g.lineWidth = 5; g.lineJoin = 'round'
      const line = (pts: number[][]) => { g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke() }
      line([[20, 60], [90, 100], [120, 150], [190, 170], [240, 230]])
      line([[130, 0], [110, 70], [150, 110], [140, 190]])
      line([[0, 190], [70, 170], [100, 210]])
      g.strokeStyle = 'rgba(255,120,155,.45)'; g.lineWidth = 8; g.strokeRect(6, 6, 244, 244)
    }))
    const fragMat = track(new THREE.MeshStandardMaterial({ map: crack, metalness: 0, roughness: 0.85 }))
    const frameMat = track(new THREE.MeshStandardMaterial({
      color: GOAL_PINK, emissive: GOAL_PINK, emissiveIntensity: 0.45, metalness: 0, roughness: 0.55,
    }))
    const rnd = (r: number, c: number) => ((r * 73856093) ^ (c * 19349663)) >>> 0

    const intro: { m: THREE.Object3D; y: number; delay: number }[] = []
    const addTile = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, delay: number) => {
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, z)
      m.castShadow = true
      m.receiveShadow = true
      this.board.add(m)
      intro.push({ m, y, delay })
      return m
    }

    for (let r = 0; r < eng.rows; r++) {
      for (let c = 0; c < eng.cols; c++) {
        const t = eng.tiles[r][c]
        const delay = (r + c) * 0.035 + (rnd(r, c) % 100) / 700
        const y = -THICK / 2
        if (t === '#') addTile(tileGeo, floorMats[(r + c) % 2], c, y, r, delay)
        else if (t === 'F') addTile(tileGeo, fragMat, c, y, r, delay)
        else if (t === 'G') {
          // khung bon thanh tao mot lo that o giua
          const hole = 0.9
          const t4 = (TILE - hole) / 2
          const side = track(new RoundedBoxGeometry(t4, THICK, TILE, 1, 0.01))
          const cap = track(new RoundedBoxGeometry(hole, THICK, t4, 1, 0.01))
          const off = hole / 2 + t4 / 2
          addTile(side, frameMat, c - off, y, r, delay); addTile(side, frameMat, c + off, y, r, delay)
          addTile(cap, frameMat, c, y, r - off, delay); addTile(cap, frameMat, c, y, r + off, delay)
          const pit = new THREE.Mesh(track(new THREE.BoxGeometry(hole, 3, hole)), track(new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide })))
          pit.position.set(c, -1.5, r)
          this.board.add(pit)
          this.goalCover = new THREE.Mesh(track(new THREE.PlaneGeometry(hole, hole)), track(new THREE.MeshBasicMaterial({ color: new THREE.Color(GOAL_PINK).multiplyScalar(1.15) })))
          this.goalCover.rotation.x = -Math.PI / 2
          this.goalCover.position.set(c, -0.012, r)
          this.board.add(this.goalCover)
        }
      }
    }

    // cau
    for (const b of eng.bridgeList) {
      const col = colorOf(b.id)
      const mat = track(new THREE.MeshStandardMaterial({
        color: col.clone().lerp(new THREE.Color(0xffffff), 0.25), emissive: col, emissiveIntensity: 0.18, metalness: 0, roughness: 0.6,
        transparent: true, opacity: 0.2 + 0.75 * (b.open ? 1 : 0),
      }))
      const mesh = new THREE.Mesh(tileGeo, mat)
      mesh.position.set(b.c, -THICK / 2, b.r)
      mesh.castShadow = true
      mesh.receiveShadow = true
      this.board.add(mesh)
      const obj: BridgeObj = { mesh, mat, bit: b.bit, anim: b.open ? 1 : 0, target: b.open ? 1 : 0, baseY: -THICK / 2 }
      this.bridges.push(obj)
    }

    // cong tac: hinh dan tren mat gach, mau theo cay cau no dieu khien
    for (const [k, sw] of eng.switches) {
      const [r, c] = k.split(',').map(Number)
      const color = sw.type === 'split' ? '#2d3436' : '#' + colorOf(sw.targets[0] ?? '').getHexString()
      const tex = track(symbolTexture(sw.type, color))
      const decal = new THREE.Mesh(
        track(new THREE.PlaneGeometry(0.78, 0.78)),
        track(new THREE.MeshBasicMaterial({ map: tex, transparent: true, color: new THREE.Color(1, 1, 1), depthWrite: false })),
      )
      decal.rotation.x = -Math.PI / 2
      decal.position.set(c, 0.012, r)
      this.board.add(decal)
      this.decals.push(decal)
      intro.push({ m: decal, y: 0.012, delay: (r + c) * 0.035 + (rnd(r, c) % 100) / 700 })
    }

    for (const it of intro) {
      it.m.position.y = it.y - 9
      void this.tween(0.8, (k) => { it.m.position.y = it.y - 9 * (1 - k) }, easeOutBack, it.delay)
    }

    // khung nhin va anh sang
    this.center.set((eng.cols - 1) / 2, 0, (eng.rows - 1) / 2)
    this.radius = Math.max(eng.rows * 1.15, eng.cols) + 6
    const half = Math.max(eng.rows, eng.cols) * 0.75 + 4
    const sc = this.sun.shadow.camera
    sc.left = -half; sc.right = half; sc.top = half; sc.bottom = -half; sc.near = 1; sc.far = 80
    sc.updateProjectionMatrix()
    this.sun.position.set(this.center.x - 8, 18, this.center.z + 9)
    this.sun.target.position.copy(this.center)
    this.resetView(true)
  }

  resetView(instant = false) {
    const d = this.radius * 1.35
    const az = (-40 * Math.PI) / 180
    const dest = new THREE.Vector3(this.center.x + Math.sin(az) * d * 0.79, d * 0.62, this.center.z + Math.cos(az) * d * 0.79)
    if (instant) {
      this.camera.position.copy(dest)
      this.controls.target.copy(this.center)
      return
    }
    const p0 = this.camera.position.clone()
    const t0 = this.controls.target.clone()
    void this.tween(0.9, (k) => {
      this.camera.position.lerpVectors(p0, dest, k)
      this.controls.target.lerpVectors(t0, this.center, k)
    })
  }

  // ------------------------------------------------------------ khoi
  /** Dat khoi theo trang thai, khong hoat anh. */
  setBlock(st: State) {
    this.cur = st
    this.block.scale.set(1, 1, 1)
    if (st.o === 'P') {
      this.block.visible = false
      const pos: Cell[] = [[st.r, st.c], [st.r2, st.c2]]
      this.cubes.forEach((m, i) => {
        m.visible = true
        m.scale.setScalar(1)
        m.rotation.set(0, 0, 0)
        m.position.set(pos[i][1], BLOCK_W / 2, pos[i][0])
        ;(m.material as THREE.MeshStandardMaterial).emissiveIntensity = i === st.act ? 0.45 : 0
      })
      this.marker.visible = true
      return
    }
    this.cubes.forEach((m) => (m.visible = false))
    this.marker.visible = false
    this.block.visible = true
    this.block.rotation.set(0, 0, 0)
    const half = BLOCK_W + 0.03
    if (st.o === 'S') this.block.position.set(st.c, half, st.r)
    else if (st.o === 'H') { this.block.position.set(st.c + 0.5, BLOCK_W / 2, st.r); this.block.rotation.z = Math.PI / 2 }
    else { this.block.position.set(st.c, BLOCK_W / 2, st.r + 0.5); this.block.rotation.x = Math.PI / 2 }
  }

  setBridges(mask: number, instant = false) {
    for (const b of this.bridges) {
      b.target = (mask >> b.bit) & 1
      if (instant) b.anim = b.target
    }
  }

  /** Dung lai toan bo ban ngay lap tuc (hoan tac, restart som). */
  restoreBoard() {
    this.shatterToken++
    if (this.shatterTimer !== null) clearTimeout(this.shatterTimer)
    this.shatterTimer = null
    for (const part of this.shatterParts) {
      part.obj.position.copy(part.p)
      part.obj.quaternion.copy(part.q)
      part.obj.scale.copy(part.s)
      part.obj.visible = true
    }
    this.shatterParts = []
    this.shattering = false
    if (this.goalCover) this.goalCover.visible = true
  }

  /** Gom cac manh vu vun tro lai dung vi tri cu. */
  private async reassembleBoard() {
    this.shatterTimer = null
    const parts = this.shatterParts
    if (this.disposed || !this.shattering || !parts.length) return
    const token = ++this.shatterToken
    const jobs = parts.map((part, i) => {
      const fromP = part.obj.position.clone()
      const fromQ = part.obj.quaternion.clone()
      const fromS = part.obj.scale.clone()
      return this.tween(0.58, (k) => {
        if (token !== this.shatterToken) return
        part.obj.position.lerpVectors(fromP, part.p, k)
        part.obj.quaternion.copy(fromQ).slerp(part.q, k)
        part.obj.scale.lerpVectors(fromS, part.s, k)
      }, easeOut, Math.min(0.15, i * 0.01)).then(() => {
        if (token !== this.shatterToken) return
        part.obj.position.copy(part.p)
        part.obj.quaternion.copy(part.q)
        part.obj.scale.copy(part.s)
        part.obj.visible = true
      })
    })
    await Promise.all(jobs)
    if (token !== this.shatterToken) return
    this.shatterParts = []
    this.shattering = false
    if (this.goalCover) this.goalCover.visible = true
  }

  /** Ban vo vun khi khoi lan ra ngoai. */
  shatterBoard(at?: THREE.Vector3) {
    if (this.disposed || this.shattering || !this.board.children.length) return
    this.shattering = true
    this.shake = Math.max(this.shake, 1.2)
    const token = ++this.shatterToken
    const parts = this.board.children.map((obj) => ({
      obj, p: obj.position.clone(), q: obj.quaternion.clone(), s: obj.scale.clone(),
    }))
    this.shatterParts = parts
    for (const part of parts) {
      const dx = part.p.x - this.center.x
      const dz = part.p.z - this.center.z
      const delay = Math.min(0.36, Math.hypot(dx, dz) * 0.022) + Math.random() * 0.09
      const dur = 0.8 + Math.random() * 0.55
      const vx = dx * (0.35 + Math.random() * 0.4) + (Math.random() - 0.5) * 1.4
      const vz = dz * (0.35 + Math.random() * 0.4) + (Math.random() - 0.5) * 1.4
      const drop = 5 + Math.random() * 9
      const axis = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()
      const spin = (0.8 + Math.random() * 2.2) * (Math.random() < 0.5 ? -1 : 1)
      const qs = new THREE.Quaternion()
      void this.tween(dur, (k) => {
        if (token !== this.shatterToken) return
        part.obj.position.set(part.p.x + vx * k, part.p.y - drop * k * k, part.p.z + vz * k)
        qs.setFromAxisAngle(axis, spin * k)
        part.obj.quaternion.copy(part.q).multiply(qs)
        part.obj.scale.copy(part.s).multiplyScalar(1 - 0.18 * k)
      }, easeIn, delay)
    }
    const hit = at ?? this.center
    this.burst(hit.x, 0.6, hit.z)
    this.burst(this.center.x, 0.9, this.center.z)
    if (this.shatterTimer !== null) clearTimeout(this.shatterTimer)
    this.shatterTimer = window.setTimeout(() => void this.reassembleBoard(), 1250)
  }

  /** Dat lai man: khoi roi tu tren cao xuong o xuat phat. */
  resetState(st: State) {
    this.restoreBoard()
    this.setBridges(st.mask, true)
    this.setBlock(st)
    const y0 = this.block.position.y
    this.block.position.y = y0 + 9
    void this.tween(0.7, (k) => { this.block.position.y = y0 + 9 * (1 - k) }, easeOutBack, 0.5)
  }

  private rollObject(obj: THREE.Object3D, cells: Cell[], dir: Action, dur: number) {
    const xs = cells.map((c) => c[1])
    const zs = cells.map((c) => c[0])
    const minX = Math.min(...xs) - 0.5, maxX = Math.max(...xs) + 0.5
    const minZ = Math.min(...zs) - 0.5, maxZ = Math.max(...zs) + 0.5
    const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2
    let pivot = new THREE.Vector3(), axis: 'x' | 'z' = 'z', angle = 0
    if (dir === 'R') { pivot.set(maxX, 0, cz); axis = 'z'; angle = -Math.PI / 2 }
    else if (dir === 'L') { pivot.set(minX, 0, cz); axis = 'z'; angle = Math.PI / 2 }
    else if (dir === 'D') { pivot.set(cx, 0, maxZ); axis = 'x'; angle = Math.PI / 2 }
    else { pivot.set(cx, 0, minZ); axis = 'x'; angle = -Math.PI / 2 }
    const holder = new THREE.Group()
    holder.position.copy(pivot)
    this.scene.add(holder)
    holder.attach(obj)
    return this.tween(dur, (k) => { holder.rotation[axis] = angle * k }, easeInOut).then(() => {
      this.scene.attach(obj)
      this.scene.remove(holder)
    })
  }

  private async fall(obj: THREE.Object3D, dir: Action) {
    const v = new THREE.Vector3(dir === 'R' ? 1 : dir === 'L' ? -1 : 0, 0, dir === 'D' ? 1 : dir === 'U' ? -1 : 0)
    const p0 = obj.position.clone()
    const axis = dir === 'L' || dir === 'R' ? new THREE.Vector3(0, 0, dir === 'R' ? -1 : 1) : new THREE.Vector3(dir === 'D' ? 1 : -1, 0, 0)
    this.shake = 0.7
    let prev = 0
    await this.tween(0.95, (k) => {
      obj.position.copy(p0).addScaledVector(v, 0.5 * k)
      obj.position.y = p0.y - 16 * k * k
      obj.rotateOnWorldAxis(axis, (k - prev) * 1.1)
      prev = k
    }, (k) => k)
  }

  async animateMove(prev: State, a: Action, res: StepResult, durMs = 230) {
    const dur = durMs / 1000
    if (a === 'X') {
      this.setBlock(res.state)
      return
    }
    const splitMode = prev.o === 'P'
    const obj = splitMode ? this.cubes[prev.act] : this.block
    const cells: Cell[] = splitMode ? [prev.act === 0 ? [prev.r, prev.c] : [prev.r2, prev.c2]] : footprint(prev.o, prev.r, prev.c)
    await this.rollObject(obj, cells, a, dur)
    if (!res.valid) {
      if (res.reason === 'void' || res.reason === 'fragile') this.shatterBoard(obj.position.clone())
      await this.fall(obj, a)
      return
    }
    this.setBlock(res.state)
    this.setBridges(res.state.mask)
    for (const [r, c] of res.moved) this.ring(c, r, 0x9fd8ff, 0.55, 0.45)
    for (const t of res.triggered) {
      this.ring(t.pos[1], t.pos[0], t.type === 'split' ? 0xffffff : 0xffd24a, 1.6, 0.7)
      this.shake = Math.max(this.shake, 0.25)
    }
    if (res.split) this.spawnCubes()
    if (res.merged) this.ring(res.state.c, res.state.r, 0x6ff3ff, 1.8, 0.7)
  }

  private spawnCubes() {
    this.cubes.forEach((m, i) => {
      m.scale.setScalar(0.01)
      void this.tween(0.55, (k) => m.scale.setScalar(Math.max(0.01, k)), easeOutBack, i * 0.08)
      this.ring(m.position.x, m.position.z, i === 0 ? 0xffb070 : 0x9fd4ff, 1.4, 0.7)
    })
  }

  async playWin(st: State) {
    this.ring(st.c, st.r, PINK, 2.6, 0.9)
    if (this.goalCover) this.goalCover.visible = false
    this.burst(st.c, 0.5, st.r)
    this.shake = 0.6
    const y0 = this.block.position.y
    this.block.scale.set(0.93, 1, 0.93)
    await this.tween(0.75, (k) => { this.block.position.y = y0 - 3.4 * k }, easeIn)
    this.block.visible = false
    this.block.scale.set(1, 1, 1)
  }

  // ------------------------------------------------------------ hieu ung
  private ring(x: number, z: number, color: number, size: number, dur: number) {
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(1.6), transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false })
    const geo = new THREE.RingGeometry(0.36, 0.43, 40)
    const m = new THREE.Mesh(geo, mat)
    m.rotation.x = -Math.PI / 2
    m.position.set(x, 0.03, z)
    this.scene.add(m)
    void this.tween(dur, (k) => { m.scale.setScalar(1 + k * size * 2); mat.opacity = 0.9 * (1 - k) }, easeOut).then(() => {
      this.scene.remove(m); geo.dispose(); mat.dispose()
    })
  }

  private burst(x: number, y: number, z: number) {
    const n = 220
    const pos = new Float32Array(n * 3)
    const col = new Float32Array(n * 3)
    const vel: THREE.Vector3[] = []
    const colors = [PINK, 0xffffff, 0xf5a524, 0xff7aa8, 0x2aa58f].map((c) => new THREE.Color(c))
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2
      const s = 1.5 + Math.random() * 4
      vel.push(new THREE.Vector3(Math.cos(a) * s, 4 + Math.random() * 5, Math.sin(a) * s))
      const c = colors[i % colors.length]
      col.set([c.r, c.g, c.b], i * 3)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const mat = new THREE.PointsMaterial({ size: 0.16, vertexColors: true, transparent: true, depthWrite: false, })
    const pts = new THREE.Points(geo, mat)
    pts.frustumCulled = false
    this.scene.add(pts)
    const life = 1.8
    void this.tween(life, (k) => {
      const t = k * life
      for (let i = 0; i < n; i++) pos.set([x + vel[i].x * t, y + vel[i].y * t - 5 * t * t, z + vel[i].z * t], i * 3)
      geo.attributes.position.needsUpdate = true
      mat.opacity = 1 - k * k
    }, (k) => k).then(() => { this.scene.remove(pts); geo.dispose(); mat.dispose() })
  }
}

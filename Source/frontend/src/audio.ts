// Am thanh tong hop bang Web Audio, khong can file nhac ben ngoai.
// Nhac nen: vong hop am Am - F - C - G (pad + bass + arpeggio ngau nhien co echo).
// Hieu ung: tieng lan, gach vo, cong tac, cau, tach/ghep khoi, roi, thang.

const midi = (n: number) => 440 * Math.pow(2, (n - 69) / 12)
const BPM = 88
const BAR = (4 * 60) / BPM
const CHORDS = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]
const PENTA = [0, 2, 4, 7, 9]
const KEY = 'bloxorz-audio'

export class AudioEngine {
  private ctx: AudioContext | null = null
  private master!: GainNode
  private musicBus!: GainNode
  private sfxBus!: GainNode
  private noiseBuf!: AudioBuffer
  private timer = 0
  private nextBar = 0
  private bar = 0
  musicOn = true
  sfxOn = true
  musicVol = 0.5
  sfxVol = 0.8

  constructor() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) ?? '{}')
      this.musicOn = s.musicOn ?? true
      this.sfxOn = s.sfxOn ?? true
      this.musicVol = s.musicVol ?? 0.5
      this.sfxVol = s.sfxVol ?? 0.8
    } catch { /* bo qua */ }
  }

  private save() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ musicOn: this.musicOn, sfxOn: this.sfxOn, musicVol: this.musicVol, sfxVol: this.sfxVol }))
    } catch { /* bo qua */ }
  }

  /** Phai goi sau mot thao tac cua nguoi dung (trinh duyet chan tu phat). */
  unlock() {
    if (!this.ctx) {
      const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!Ctx) return
      const ctx = new Ctx()
      this.ctx = ctx
      this.master = ctx.createGain()
      this.master.gain.value = 0.9
      const comp = ctx.createDynamicsCompressor()
      this.master.connect(comp).connect(ctx.destination)
      this.musicBus = ctx.createGain()
      this.sfxBus = ctx.createGain()
      this.musicBus.connect(this.master)
      this.sfxBus.connect(this.master)
      const echo = ctx.createDelay(1)
      echo.delayTime.value = (60 / BPM) * 0.75
      const fb = ctx.createGain()
      fb.gain.value = 0.38
      const lp = ctx.createBiquadFilter()
      lp.type = 'lowpass'
      lp.frequency.value = 2200
      this.musicBus.connect(echo)
      echo.connect(lp).connect(fb).connect(echo)
      lp.connect(this.master)
      this.noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate)
      const d = this.noiseBuf.getChannelData(0)
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
      this.applyVolumes()
    }
    void this.ctx.resume()
    if (this.musicOn) this.startMusic()
  }

  private applyVolumes() {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    this.musicBus.gain.setTargetAtTime(this.musicOn ? this.musicVol * 0.8 : 0, t, 0.15)
    this.sfxBus.gain.setTargetAtTime(this.sfxOn ? this.sfxVol : 0, t, 0.05)
  }

  setMusic(on: boolean) {
    this.musicOn = on
    this.save()
    this.applyVolumes()
    if (!this.ctx) return
    if (on) this.startMusic()
    else this.stopMusic()
  }
  setSfx(on: boolean) { this.sfxOn = on; this.save(); this.applyVolumes() }
  setMusicVol(v: number) { this.musicVol = v; this.save(); this.applyVolumes() }
  setSfxVol(v: number) { this.sfxVol = v; this.save(); this.applyVolumes() }

  // ------------------------------------------------------------ nhac nen
  private startMusic() {
    if (!this.ctx || this.timer) return
    this.nextBar = this.ctx.currentTime + 0.15
    this.timer = window.setInterval(() => this.schedule(), 250)
    this.schedule()
  }

  private stopMusic() {
    clearInterval(this.timer)
    this.timer = 0
  }

  private schedule() {
    const ctx = this.ctx
    if (!ctx) return
    while (this.nextBar < ctx.currentTime + 1.5) {
      this.playBar(this.nextBar, this.bar++)
      this.nextBar += BAR
    }
  }

  private playBar(t: number, i: number) {
    const ctx = this.ctx!
    const chord = CHORDS[i % CHORDS.length]
    // pad
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 1100
    const pg = ctx.createGain()
    pg.gain.setValueAtTime(0.0001, t)
    pg.gain.linearRampToValueAtTime(0.05, t + 0.9)
    pg.gain.setValueAtTime(0.05, t + BAR - 0.1)
    pg.gain.linearRampToValueAtTime(0.0001, t + BAR + 1.2)
    lp.connect(pg).connect(this.musicBus)
    for (const n of chord) {
      for (const [type, det] of [['sine', 1], ['triangle', 1.004]] as const) {
        const o = ctx.createOscillator()
        o.type = type
        o.frequency.value = midi(n) * det
        o.connect(lp)
        o.start(t)
        o.stop(t + BAR + 1.3)
      }
    }
    // bass o phach 1 va 3
    for (const beat of [0, 2]) this.tone(midi(chord[0] - 24), 'sine', t + beat * (BAR / 4), 1.3, 0.2, this.musicBus)
    // arpeggio
    const pool = [...chord, ...chord.map((n) => n + 12), chord[0] + 24]
    let idx = 0
    for (let s = 0; s < 8; s++) {
      if (Math.random() < 0.22) continue
      idx = Math.max(0, Math.min(pool.length - 1, idx + Math.floor(Math.random() * 5) - 2 + (s % 4 === 0 ? 1 : 0)))
      this.tone(midi(pool[idx] + 12), 'triangle', t + (s * BAR) / 8, 0.9, 0.07 + Math.random() * 0.03, this.musicBus)
    }
    if (i % 4 === 3) this.tone(midi(chord[2] + 24), 'sine', t + BAR * 0.5, 1.6, 0.05, this.musicBus)
  }

  // ------------------------------------------------------------ cong cu
  private tone(freq: number, type: OscillatorType, t: number, dur: number, vol: number, bus: GainNode, slideTo?: number) {
    const ctx = this.ctx!
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.type = type
    o.frequency.setValueAtTime(freq, t)
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.linearRampToValueAtTime(vol, t + 0.012)
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur)
    o.connect(g).connect(bus)
    o.start(t)
    o.stop(t + dur + 0.05)
  }

  private noise(t: number, dur: number, vol: number, freq: number, type: BiquadFilterType, sweepTo?: number) {
    const ctx = this.ctx!
    const src = ctx.createBufferSource()
    src.buffer = this.noiseBuf
    const f = ctx.createBiquadFilter()
    f.type = type
    f.frequency.setValueAtTime(freq, t)
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur)
    const g = ctx.createGain()
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur)
    src.connect(f).connect(g).connect(this.sfxBus)
    src.start(t)
    src.stop(t + dur + 0.05)
  }

  private now() {
    return this.ctx && this.sfxOn ? this.ctx.currentTime : -1
  }

  // ------------------------------------------------------------ hieu ung
  /** Tieng khoi cham san; cao do tang dan theo thang ngu cung nen cac nuoc di nghe nhu mot giai dieu. */
  move(step: number) {
    const t = this.now()
    if (t < 0) return
    this.noise(t, 0.2, 0.16, 650, 'bandpass', 2400)
    this.tone(150, 'sine', t, 0.14, 0.55, this.sfxBus, 55)
    this.tone(92, 'triangle', t, 0.18, 0.16, this.sfxBus, 58)
    this.noise(t + 0.02, 0.06, 0.18, 1400, 'lowpass')
    const note = 72 + PENTA[step % 5] + (Math.floor(step / 5) % 2) * 12
    this.tone(midi(note), 'triangle', t + 0.02, 0.28, 0.2, this.sfxBus)
  }

  fragile() {
    const t = this.now()
    if (t < 0) return
    this.noise(t, 0.22, 0.35, 3200, 'bandpass', 900)
    this.tone(95, 'square', t, 0.12, 0.12, this.sfxBus, 60)
  }

  swap() {
    const t = this.now()
    if (t < 0) return
    this.tone(880, 'sine', t, 0.07, 0.25, this.sfxBus)
    this.tone(1320, 'sine', t + 0.05, 0.09, 0.2, this.sfxBus)
  }

  switchHit(type: 'soft' | 'heavy' | 'split') {
    const t = this.now()
    if (t < 0) return
    if (type === 'soft') {
      this.tone(660, 'sine', t, 0.1, 0.3, this.sfxBus)
      this.tone(990, 'sine', t + 0.07, 0.14, 0.3, this.sfxBus)
    } else if (type === 'heavy') {
      this.tone(110, 'square', t, 0.22, 0.25, this.sfxBus, 70)
      this.tone(440, 'triangle', t + 0.02, 0.3, 0.2, this.sfxBus)
      this.noise(t, 0.12, 0.2, 800, 'lowpass')
    }
  }

  split() {
    const t = this.now()
    if (t < 0) return
    this.noise(t, 0.5, 0.3, 400, 'bandpass', 4000)
    ;[84, 88, 91, 96].forEach((n, i) => this.tone(midi(n), 'sine', t + 0.08 + i * 0.06, 0.35, 0.16, this.sfxBus))
  }

  merge() {
    const t = this.now()
    if (t < 0) return
    this.tone(midi(79), 'sine', t, 0.45, 0.28, this.sfxBus)
    this.tone(midi(86), 'sine', t + 0.06, 0.5, 0.24, this.sfxBus)
  }

  bridge(open: boolean) {
    const t = this.now()
    if (t < 0) return
    this.tone(open ? 80 : 170, 'sawtooth', t, 0.4, 0.1, this.sfxBus, open ? 170 : 70)
    this.noise(t, 0.35, 0.1, open ? 300 : 900, 'lowpass', open ? 900 : 300)
  }

  fall() {
    const t = this.now()
    if (t < 0) return
    this.tone(720, 'sine', t, 0.85, 0.3, this.sfxBus, 70)
    this.noise(t, 0.7, 0.2, 2200, 'lowpass', 200)
  }

  /** Ban vo vun khi khoi lan ra ngoai. */
  shatter() {
    const t = this.now()
    if (t < 0) return
    this.noise(t, 0.75, 0.42, 3000, 'lowpass', 130)
    this.noise(t + 0.04, 0.9, 0.32, 900, 'bandpass', 160)
    this.tone(64, 'square', t, 0.5, 0.2, this.sfxBus, 38)
    ;[48, 43, 36].forEach((n, i) => this.tone(midi(n), 'triangle', t + 0.08 + i * 0.07, 0.45, 0.16, this.sfxBus, midi(n - 12)))
  }

  win() {
    const t = this.now()
    if (t < 0) return
    ;[72, 76, 79, 84, 88, 91].forEach((n, i) => {
      this.tone(midi(n), 'triangle', t + i * 0.09, 0.7, 0.22, this.sfxBus)
      this.tone(midi(n - 12), 'sine', t + i * 0.09, 0.7, 0.12, this.sfxBus)
    })
  }
}

export const audio = new AudioEngine()

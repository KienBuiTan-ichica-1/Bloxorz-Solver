// Engine game phia client: phan anh dung logic cua bloxorz/game.py de choi tay khong bi tre.
import type {
  Action, BridgeInfo, Cell, FailReason, LevelData, Orient, State, StepResult, SwitchInfo, Trigger,
} from './types'

export const DIRS: Record<string, Cell> = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] }
export const FRAGILE_PENALTY = 2
const key = (r: number, c: number) => `${r},${c}`

export function roll(o: Orient, r: number, c: number, d: Action): [Orient, number, number] {
  if (o === 'S') {
    if (d === 'U') return ['V', r - 2, c]
    if (d === 'D') return ['V', r + 1, c]
    if (d === 'L') return ['H', r, c - 2]
    return ['H', r, c + 1]
  }
  if (o === 'H') {
    if (d === 'U') return ['H', r - 1, c]
    if (d === 'D') return ['H', r + 1, c]
    if (d === 'L') return ['S', r, c - 1]
    return ['S', r, c + 2]
  }
  if (d === 'U') return ['S', r - 1, c]
  if (d === 'D') return ['S', r + 2, c]
  if (d === 'L') return ['V', r, c - 1]
  return ['V', r, c + 1]
}

export function footprint(o: Orient, r: number, c: number): Cell[] {
  if (o === 'S') return [[r, c]]
  if (o === 'H') return [[r, c], [r, c + 1]]
  return [[r, c], [r + 1, c]]
}

export class Engine {
  readonly rows: number
  readonly cols: number
  readonly tiles: string[][] = []
  readonly switches = new Map<string, SwitchInfo>()
  readonly bridgeList: BridgeInfo[] = []
  private bridgeBit = new Map<string, number>()
  start: Cell = [0, 0]
  goal: Cell = [0, 0]
  readonly initial: State

  constructor(readonly data: LevelData) {
    const grid = data.grid
    if (!grid.length) throw new Error('Man choi khong co luoi')
    this.rows = grid.length
    this.cols = Math.max(...grid.map((s) => s.length))
    const idMask = new Map<string, number>()
    let mask0 = 0
    ;(data.bridges ?? []).forEach((b, i) => {
      this.bridgeBit.set(key(b.pos[0], b.pos[1]), i)
      idMask.set(b.id, (idMask.get(b.id) ?? 0) | (1 << i))
      this.bridgeList.push({ id: b.id, r: b.pos[0], c: b.pos[1], bit: i, open: !!b.open })
      if (b.open) mask0 |= 1 << i
    })
    const cfg = new Map((data.switches ?? []).map((s) => [key(s.pos[0], s.pos[1]), s] as const))
    let starts = 0
    let goals = 0
    for (let r = 0; r < this.rows; r++) {
      const line: string[] = []
      for (let c = 0; c < this.cols; c++) {
        let ch = grid[r][c] ?? '.'
        if (ch === 'S') { this.start = [r, c]; starts += 1; ch = '#' }
        else if (ch === 'G') { this.goal = [r, c]; goals += 1 }
        else if (ch === 'o' || ch === 'x' || ch === 'p') {
          const sw = cfg.get(key(r, c))
          if (!sw) throw new Error(`Thieu cau hinh cong tac tai (${r},${c})`)
          if (sw.mode && !['toggle', 'open', 'close'].includes(sw.mode)) throw new Error(`Kieu cong tac la: ${sw.mode}`)
          let mask = 0
          for (const t of sw.targets ?? []) {
            if (!idMask.has(t)) throw new Error(`Cau "${t}" chua khai bao tai (${r},${c})`)
            mask |= idMask.get(t)!
          }
          const splitTo = sw.split_to ?? []
          if (ch === 'p') {
            if (splitTo.length !== 2) throw new Error(`Cong tac tach (${r},${c}) can dung 2 vi tri split_to`)
            if (new Set(splitTo.map((p) => key(p[0], p[1]))).size !== 2) throw new Error(`Hai vi tri split_to tai (${r},${c}) phai khac nhau`)
            for (const [sr, sc] of splitTo) {
              if (sr < 0 || sc < 0 || sr >= this.rows || sc >= this.cols) throw new Error(`Vi tri split_to khong hop le tai (${r},${c})`)
            }
          }
          this.switches.set(key(r, c), {
            type: ch === 'o' ? 'soft' : ch === 'x' ? 'heavy' : 'split',
            mask, mode: sw.mode ?? 'toggle', splitTo, targets: sw.targets ?? [],
          })
          ch = '#'
        } else if (ch === 'B') {
          if (!this.bridgeBit.has(key(r, c))) throw new Error(`O cau (${r},${c}) chua khai bao`)
        } else if (!'.#F'.includes(ch)) throw new Error(`Ky hieu la '${ch}' tai (${r},${c})`)
        line.push(ch)
      }
      this.tiles.push(line)
    }
    if (starts !== 1 || goals !== 1) throw new Error("Man choi can co dung mot 'S' va mot 'G'")
    this.initial = { o: 'S', r: this.start[0], c: this.start[1], r2: 0, c2: 0, act: 0, mask: mask0 }
  }

  cells(st: State): Cell[] {
    return st.o === 'P' ? [[st.r, st.c], [st.r2, st.c2]] : footprint(st.o, st.r, st.c)
  }

  isWin(st: State) {
    return st.o === 'S' && st.r === this.goal[0] && st.c === this.goal[1]
  }

  private unsupported(cells: Cell[], o: Orient, mask: number): FailReason | null {
    for (const [r, c] of cells) {
      if (r < 0 || c < 0 || r >= this.rows || c >= this.cols) return 'void'
      const t = this.tiles[r][c]
      if (t === '.') return 'void'
      if (t === 'B') {
        if (!((mask >> this.bridgeBit.get(key(r, c))!) & 1)) return 'void'
      } else if (t === 'F' && o === 'S') return 'fragile'
    }
    return null
  }

  private applySwitch(sw: SwitchInfo, mask: number) {
    if (sw.mode === 'toggle') return mask ^ sw.mask
    if (sw.mode === 'open') return mask | sw.mask
    return mask & ~sw.mask
  }

  private fail(state: State, reason: FailReason, moved: Cell[]): StepResult {
    return { valid: false, state, cost: 0, reason, moved, triggered: [], split: false, merged: false }
  }

  step(st: State, a: Action): StepResult {
    if (this.isWin(st)) return this.fail(st, 'noop', [])
    if (a === 'X') {
      if (st.o !== 'P') return this.fail(st, 'noop', [])
      return { valid: true, state: { ...st, act: 1 - st.act }, cost: 1, moved: [], triggered: [], split: false, merged: false }
    }
    if (st.o === 'P') return this.stepSplit(st, a)
    const [no, nr, nc] = roll(st.o, st.r, st.c, a)
    const cells = footprint(no, nr, nc)
    const hypo: State = { o: no, r: nr, c: nc, r2: 0, c2: 0, act: 0, mask: st.mask }
    const why = this.unsupported(cells, no, st.mask)
    if (why) return this.fail(hypo, why, cells)
    const cost = 1 + (cells.some(([r, c]) => this.tiles[r][c] === 'F') ? FRAGILE_PENALTY : 0)
    return this.afterMove(hypo, cells, cost, false)
  }

  private stepSplit(st: State, a: Action): StepResult {
    const [dr, dc] = DIRS[a]
    const mover: Cell = st.act === 0 ? [st.r + dr, st.c + dc] : [st.r2 + dr, st.c2 + dc]
    const other: Cell = st.act === 0 ? [st.r2, st.c2] : [st.r, st.c]
    const hypo: State = st.act === 0
      ? { ...st, r: mover[0], c: mover[1] }
      : { ...st, r2: mover[0], c2: mover[1] }
    if (mover[0] === other[0] && mover[1] === other[1]) return this.fail(st, 'noop', [])
    const why = this.unsupported([mover], 'P', st.mask)
    if (why) return this.fail(hypo, why, [mover])
    let next: State
    let merged = false
    if (Math.abs(mover[0] - other[0]) + Math.abs(mover[1] - other[1]) === 1) {
      merged = true
      next = mover[0] === other[0]
        ? { o: 'H', r: mover[0], c: Math.min(mover[1], other[1]), r2: 0, c2: 0, act: 0, mask: st.mask }
        : { o: 'V', r: Math.min(mover[0], other[0]), c: mover[1], r2: 0, c2: 0, act: 0, mask: st.mask }
    } else next = hypo
    return this.afterMove(next, [mover], 1, merged)
  }

  private afterMove(st: State, moved: Cell[], cost: number, merged: boolean): StepResult {
    let { o, r, c, r2, c2, act, mask } = st
    const triggered: Trigger[] = []
    let split = false
    for (const [mr, mc] of moved) {
      const sw = this.switches.get(key(mr, mc))
      if (!sw) continue
      if ((sw.type === 'heavy' || sw.type === 'split') && o !== 'S') continue
      mask = this.applySwitch(sw, mask)
      triggered.push({ pos: [mr, mc], type: sw.type })
      if (sw.type === 'split') {
        const [a, b] = sw.splitTo[0]
        const [d, e] = sw.splitTo[1]
        if (Math.abs(a - d) + Math.abs(b - e) === 1) {
          if (a === d) { o = 'H'; r = a; c = Math.min(b, e) } else { o = 'V'; r = Math.min(a, d); c = b }
          r2 = 0; c2 = 0; act = 0; split = false; merged = true
        } else {
          o = 'P'; r = a; c = b; r2 = d; c2 = e; act = 0; split = true
        }
      }
    }
    const next: State = { o, r, c, r2, c2, act, mask }
    const why = this.unsupported(this.cells(next), o, mask)
    if (why) return this.fail(next, why, moved)
    return { valid: true, state: next, cost, moved, triggered, split, merged }
  }
}

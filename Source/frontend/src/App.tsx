import { useCallback, useEffect, useRef, useState } from 'react'
import { Engine } from './engine'
import { SceneManager } from './scene/SceneManager'
import { BarChart } from './components/Charts'
import { ALGOS, benchmark, ping, solve, type Algo, type SolveResult } from './api'
import { audio } from './audio'
import type { Action, LevelData, State } from './types'

const bundled = import.meta.glob<LevelData>('../../levels/*.json', { eager: true, import: 'default' })
const BUILTIN: LevelData[] = Object.keys(bundled).sort().map((k) => bundled[k])

const GROUPS: Record<string, string> = {
  simple: 'Cơ bản', fragile: 'Gạch dễ vỡ', switch: 'Công tắc và cầu', split: 'Công tắc tách', combined: 'Kết hợp', expert: 'Thử thách', custom: 'Tự nạp',
}
const ARROW: Record<string, string> = { U: '↑', D: '↓', L: '←', R: '→', X: '⇄' }
const KEYS: Record<string, Action> = {
  ArrowUp: 'U', w: 'U', W: 'U', ArrowDown: 'D', s: 'D', S: 'D', ArrowLeft: 'L', a: 'L', A: 'L', ArrowRight: 'R', d: 'R', D: 'R', ' ': 'X',
}
const COLORS: Record<Algo, string> = { bfs: '#4fe3ff', dfs: '#c084fc', ucs: '#ffb54a', astar: '#37ffa0' }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
type Status = 'playing' | 'won' | 'lost'

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<SceneManager | null>(null)
  const engineRef = useRef<Engine | null>(null)
  const stateRef = useRef<State | null>(null)
  const histRef = useRef<{ state: State; moves: number; cost: number }[]>([])
  const movesRef = useRef(0)
  const costRef = useRef(0)
  const busy = useRef(false)
  const stopRef = useRef(false)
  const replayingRef = useRef(false)
  const statusRef = useRef<Status>('playing')
  const lossRef = useRef<{ state: State; moves: number; cost: number } | null>(null)
  const solveToken = useRef(0)

  const [levels, setLevels] = useState<LevelData[]>(BUILTIN)
  const [level, setLevel] = useState<LevelData>(BUILTIN[0])
  const [status, setStatusState] = useState<Status>('playing')
  const [moves, setMoves] = useState(0)
  const [cost, setCost] = useState(0)
  const [splitMode, setSplitMode] = useState(false)
  const [results, setResults] = useState<Partial<Record<Algo, SolveResult>>>({})
  const [selected, setSelected] = useState<Algo | null>(null)
  const [solving, setSolving] = useState<Algo | null>(null)
  const [step, setStep] = useState(0)
  const [replaying, setReplaying] = useState(false)
  const [speed, setSpeed] = useState(260)
  const [online, setOnline] = useState<boolean | null>(null)
  const [tab, setTab] = useState<'solver' | 'bench'>('solver')
  const [bench, setBench] = useState<SolveResult[]>([])
  const [benchBusy, setBenchBusy] = useState(false)
  const [err, setErr] = useState('')
  const [showPanels, setShowPanels] = useState(true)
  const [aud, setAud] = useState({ music: audio.musicOn, sfx: audio.sfxOn, mv: audio.musicVol, sv: audio.sfxVol })

  const setStatus = (s: Status) => { statusRef.current = s; setStatusState(s) }

  // ---------------------------------------------------------------- vong doi man choi
  const startLevel = useCallback((data: LevelData) => {
    const sc = sceneRef.current
    if (!sc || replayingRef.current || (busy.current && statusRef.current === 'playing')) return
    stopRef.current = true
    solveToken.current += 1
    lossRef.current = null
    setSolving(null)
    const eng = new Engine(data)
    engineRef.current = eng
    stateRef.current = eng.initial
    histRef.current = []
    movesRef.current = 0
    costRef.current = 0
    setLevel(data)
    setMoves(0); setCost(0); setStep(0); setSplitMode(false); setErr('')
    setResults({}); setSelected(null)
    setStatus('playing')
    sc.loadLevel(eng)
    sc.resetState(eng.initial)
  }, [])

  const restart = useCallback(() => {
    const eng = engineRef.current
    const sc = sceneRef.current
    if (!eng || !sc || replayingRef.current || (busy.current && statusRef.current === 'playing')) return
    lossRef.current = null
    stateRef.current = eng.initial
    histRef.current = []
    movesRef.current = 0
    costRef.current = 0
    setMoves(0); setCost(0); setStep(0); setSplitMode(false)
    setStatus('playing')
    sc.resetState(eng.initial)
  }, [])

  useEffect(() => {
    const sc = new SceneManager(mountRef.current!)
    sceneRef.current = sc
    startLevel(BUILTIN[0])
    void ping().then(setOnline)
    const id = setInterval(() => void ping().then(setOnline), 8000)
    return () => { clearInterval(id); sc.dispose(); sceneRef.current = null }
  }, [startLevel])

  // ---------------------------------------------------------------- thuc hien mot nuoc di
  const applyAction = useCallback(async (a: Action, dur: number): Promise<'ok' | 'won' | 'lost' | 'noop'> => {
    const eng = engineRef.current, sc = sceneRef.current, prev = stateRef.current
    if (!eng || !sc || !prev) return 'noop'
    const res = eng.step(prev, a)
    if (!res.valid && res.reason === 'noop') return 'noop'
    busy.current = true
    try {
      if (res.valid) {
        histRef.current.push({ state: prev, moves: movesRef.current, cost: costRef.current })
        await sc.animateMove(prev, a, res, dur)
        if (a === 'X') audio.swap()
        else {
          audio.move(movesRef.current)
          if (res.cost > 1) audio.fragile()
          res.triggered.forEach((t) => audio.switchHit(t.type))
          if (res.split) audio.split()
          if (res.merged) audio.merge()
          if (res.state.mask !== prev.mask) audio.bridge(res.state.mask > prev.mask || (res.state.mask & ~prev.mask) !== 0)
        }
        stateRef.current = res.state
        movesRef.current += 1
        costRef.current += res.cost
        setMoves(movesRef.current); setCost(costRef.current); setSplitMode(res.state.o === 'P')
        if (eng.isWin(res.state)) {
          audio.win()
          await sc.playWin(res.state)
          setStatus('won')
          return 'won'
        }
        return 'ok'
      }
      setTimeout(() => audio.fall(), dur)
      if (res.reason === 'void' || res.reason === 'fragile') setTimeout(() => audio.shatter(), dur + 120)
      await sc.animateMove(prev, a, res, dur)
      lossRef.current = { state: prev, moves: movesRef.current, cost: costRef.current }
      setStatus('lost')
      return 'lost'
    } finally {
      busy.current = false
    }
  }, [])

  const manual = useCallback((a: Action) => {
    if (busy.current || replayingRef.current || statusRef.current !== 'playing') return
    void applyAction(a, 230)
  }, [applyAction])

  const undo = useCallback(() => {
    if (busy.current || replayingRef.current) return
    const sc = sceneRef.current
    if (!sc) return
    const lost = statusRef.current === 'lost' ? lossRef.current : null
    lossRef.current = null
    const h = lost ?? histRef.current.pop()
    if (!h) return
    stateRef.current = h.state
    movesRef.current = h.moves
    costRef.current = h.cost
    setMoves(h.moves); setCost(h.cost); setStep(0); setSplitMode(h.state.o === 'P')
    setStatus('playing')
    sc.restoreBoard()
    sc.setBlock(h.state)
    sc.setBridges(h.state.mask)
  }, [])

  useEffect(() => {
    const unlock = () => audio.unlock()
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)
    return () => { window.removeEventListener('pointerdown', unlock); window.removeEventListener('keydown', unlock) }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return
      if (e.key === 'm' || e.key === 'M') { const on = !audio.musicOn; audio.setMusic(on); setAud((p) => ({ ...p, music: on })); return }
      if (e.key === 'r' || e.key === 'R') { if (!replayingRef.current) restart(); return }
      if (e.key === 'z' || e.key === 'Z') { undo(); return }
      const a = KEYS[e.key]
      if (a) { e.preventDefault(); manual(a) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [manual, restart, undo])

  // roi xuong ho thi tu choi lai sau mot nhip
  useEffect(() => {
    if (status !== 'lost' || replaying) return
    const t = setTimeout(() => { if (statusRef.current === 'lost') restart() }, 1300)
    return () => clearTimeout(t)
  }, [status, replaying, restart])

  // ---------------------------------------------------------------- solver
  const runSolver = async (algo: Algo) => {
    const token = ++solveToken.current
    setSolving(algo); setErr('')
    try {
      const r = await solve(level, algo)
      if (token !== solveToken.current) return
      setResults((p) => ({ ...p, [algo]: r }))
      setSelected(algo)
    } catch (e) {
      if (token === solveToken.current) setErr(`Không gọi được backend: ${(e as Error).message}. Hãy chạy "python main.py" trong thư mục Source.`)
    } finally {
      if (token === solveToken.current) setSolving(null)
    }
  }

  const replay = async (moveStr: string) => {
    if (busy.current || replayingRef.current) return
    restart()
    replayingRef.current = true
    setReplaying(true)
    stopRef.current = false
    await sleep(1300)
    for (let i = 0; i < moveStr.length && !stopRef.current; i++) {
      setStep(i + 1)
      const out = await applyAction(moveStr[i] as Action, speed)
      if (out !== 'ok') break
      await sleep(70)
    }
    replayingRef.current = false
    setReplaying(false)
  }

  const runBench = async () => {
    setBenchBusy(true); setErr('')
    try {
      const out = await benchmark(BUILTIN.map((l) => l.id), ALGOS.map((a) => a.id))
      setBench(out.results)
    } catch (e) {
      setErr(`Không chạy được benchmark: ${(e as Error).message}`)
    } finally {
      setBenchBusy(false)
    }
  }

  const exportCsv = () => {
    const head = 'level,algorithm,found,length,cost,expanded,time_ms,memory_kb'
    const rows = bench.map((r) => [r.level_id, r.algorithm, r.found, r.length, r.cost, r.expanded, r.time_ms, r.memory_kb].join(','))
    const url = URL.createObjectURL(new Blob([[head, ...rows].join('\n')], { type: 'text/csv' }))
    const a = document.createElement('a')
    a.href = url; a.download = 'benchmark.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  const importLevel = async (file?: File) => {
    if (!file) return
    try {
      const data = JSON.parse(await file.text()) as LevelData
      data.id = data.id || `custom-${levels.length}`
      data.group = 'custom'
      data.name = data.name || file.name
      new Engine(data)
      setLevels((p) => [...p.filter((l) => l.id !== data.id), data])
      startLevel(data)
    } catch (e) {
      setErr(`File màn chơi không hợp lệ: ${(e as Error).message}`)
    }
  }

  const newGame = () => {
    const others = levels.filter((l) => l.id !== level.id)
    startLevel(others[Math.floor(Math.random() * others.length)] ?? level)
  }

  const sel = selected ? results[selected] : undefined
  const groups = [...new Set(levels.map((l) => l.group))]
  const series = ALGOS.map((a) => ({ id: a.id, label: a.label, color: COLORS[a.id] }))
  const benchIds = [...new Set(bench.map((r) => r.level_id))]
  const pick = (g: string, s: string, f: (r: SolveResult) => number) => {
    const r = bench.find((x) => x.level_id === g && x.algorithm === s)
    return r ? f(r) : null
  }

  return (
    <div className="app">
      <div className="stage" ref={mountRef} />

      <header className="hud">
        <div className="brand">Blox<span>orz</span> 3D</div>
        <div className="title"><h1>{level.id} · {level.name}</h1><span>{GROUPS[level.group] ?? level.group}</span></div>
        <div className="stats">
          <div className="stat"><small>Số nước</small><b>{moves}</b></div>
          <div className="stat"><small>Chi phí</small><b>{cost}</b></div>
          <div className={`badge ${online ? 'on' : 'off'}`}>{online === null ? 'Đang kiểm tra' : online ? 'Backend đã kết nối' : 'Backend chưa chạy'}</div>
          <button className="btn hudbtn" onClick={() => setShowPanels((v) => !v)}>{showPanels ? 'Ẩn bảng' : 'Hiện bảng'}</button>
        </div>
      </header>

      {showPanels && <aside className="panel left" aria-label="Màn chơi">
        <h2>Điều khiển</h2>
        <div className="row">
          <button className="btn primary" onClick={newGame} disabled={replaying}>New Game</button>
          <button className="btn" onClick={restart} disabled={replaying}>Restart</button>
          <button className="btn" onClick={undo} disabled={replaying}>Hoàn tác</button>
          <button className="btn" onClick={() => sceneRef.current?.resetView()}>Đặt lại góc nhìn</button>
        </div>
        {groups.map((g) => (
          <section key={g}>
            <h2>{GROUPS[g] ?? g}</h2>
            {levels.filter((l) => l.group === g).map((l) => (
              <button key={l.id} className={`lv ${l.id === level.id ? 'sel' : ''}`} onClick={() => startLevel(l)} disabled={replaying}>
                <b>{l.id} {l.name}</b>
              </button>
            ))}
          </section>
        ))}
        <h2>Âm thanh</h2>
        <label className="chk"><input type="checkbox" checked={aud.music} onChange={(e) => { audio.setMusic(e.target.checked); setAud({ ...aud, music: e.target.checked }) }} /> Nhạc nền</label>
        <input type="range" min={0} max={1} step={0.05} value={aud.mv} aria-label="Âm lượng nhạc nền" onChange={(e) => { audio.setMusicVol(Number(e.target.value)); setAud({ ...aud, mv: Number(e.target.value) }) }} />
        <label className="chk"><input type="checkbox" checked={aud.sfx} onChange={(e) => { audio.setSfx(e.target.checked); setAud({ ...aud, sfx: e.target.checked }) }} /> Hiệu ứng khi di chuyển</label>
        <input type="range" min={0} max={1} step={0.05} value={aud.sv} aria-label="Âm lượng hiệu ứng" onChange={(e) => { audio.setSfxVol(Number(e.target.value)); setAud({ ...aud, sv: Number(e.target.value) }) }} />
        <h2>Nạp màn từ file</h2>
        <input type="file" accept=".json" disabled={replaying} onChange={(e) => {
          const f = e.target.files?.[0]
          e.target.value = ''
          void importLevel(f)
        }} />
        {level.desc && <p className="desc">{level.desc}</p>}
        {splitMode && <p className="desc">Đang tách khối: phím cách để đổi khối, ghép lại bằng cách đưa hai khối sát nhau.</p>}
      </aside>}

      {showPanels && <aside className="panel right" aria-label="Bộ giải">
        <div className="tabs" role="tablist">
          <button role="tab" className={`tab ${tab === 'solver' ? 'sel' : ''}`} onClick={() => setTab('solver')}>Giải màn này</button>
          <button role="tab" className={`tab ${tab === 'bench' ? 'sel' : ''}`} onClick={() => setTab('bench')}>Thực nghiệm</button>
        </div>

        {tab === 'solver' && (
          <>
            <div className="row">
              {ALGOS.map((a) => (
                <button key={a.id} className="btn" disabled={!!solving || replaying} onClick={() => void runSolver(a.id)}>
                  {solving === a.id ? 'Đang giải…' : `Solve ${a.label}`}
                </button>
              ))}
            </div>
            {Object.keys(results).length > 0 && (
              <>
                <h2>Kết quả</h2>
                <table>
                  <thead><tr><th>Thuật toán</th><th>Nước</th><th>Chi phí</th><th>Nút mở</th><th>ms</th><th>KB</th></tr></thead>
                  <tbody>
                    {ALGOS.filter((a) => results[a.id]).map((a) => {
                      const r = results[a.id]!
                      return (
                        <tr key={a.id} className={selected === a.id ? 'sel' : ''} onClick={() => setSelected(a.id)} style={{ cursor: 'pointer' }}>
                          <td><span className="dot" style={{ background: COLORS[a.id] }} />{a.label}</td>
                          <td>{r.found ? r.length : '-'}</td><td>{r.found ? r.cost : '-'}</td>
                          <td>{r.expanded}</td><td>{r.time_ms.toFixed(1)}</td><td>{Math.round(r.memory_kb)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </>
            )}
            {sel && (
              <>
                <h2>Lời giải {ALGOS.find((a) => a.id === selected)?.label}</h2>
                {sel.found ? (
                  <>
                    <div className="moves" aria-label="Dãy nước đi">
                      {[...sel.moves].map((m, i) => (
                        <span key={i} className={`mv ${i + 1 === step ? 'now' : i < step ? 'done' : ''}`}>{ARROW[m]}</span>
                      ))}
                    </div>
                    <label className="sl" htmlFor="spd">Tốc độ phát: {speed} ms mỗi nước</label>
                    <input id="spd" type="range" min={90} max={600} step={10} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} style={{ direction: 'rtl' }} />
                    <div className="row" style={{ marginTop: 12 }}>
                      {!replaying
                        ? <button className="btn primary" onClick={() => void replay(sel.moves)}>Phát lời giải</button>
                        : <button className="btn" onClick={() => { stopRef.current = true }}>Dừng</button>}
                    </div>
                  </>
                ) : <p className="desc">Không tìm được lời giải ({sel.reason === 'limit' ? 'vượt giới hạn số nút' : 'màn không giải được'}).</p>}
              </>
            )}
          </>
        )}

        {tab === 'bench' && (
          <>
            <div className="row">
              <button className="btn primary" disabled={benchBusy} onClick={() => void runBench()}>{benchBusy ? 'Đang chạy…' : 'Chạy trên mọi màn'}</button>
              <button className="btn" disabled={!bench.length} onClick={exportCsv}>Tải CSV</button>
            </div>
            {bench.length > 0 && (
              <>
                <div className="legend">{series.map((s) => <span key={s.id}><span className="dot" style={{ background: s.color }} />{s.label}</span>)}</div>
                <BarChart title="Thời gian tìm kiếm" unit="ms" groups={benchIds} series={series} value={(g, s) => pick(g, s, (r) => r.time_ms)} />
                <BarChart title="Bộ nhớ đỉnh" unit="KB" groups={benchIds} series={series} value={(g, s) => pick(g, s, (r) => r.memory_kb)} />
                <BarChart title="Số nút mở rộng" unit="nút" groups={benchIds} series={series} value={(g, s) => pick(g, s, (r) => r.expanded)} />
                <BarChart title="Độ dài lời giải" unit="nước" groups={benchIds} series={series} value={(g, s) => pick(g, s, (r) => r.length)} />
              </>
            )}
          </>
        )}
        {err && <p className="err" role="alert">{err}</p>}
      </aside>}

      <footer className="hint">
        <span><kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> hoặc <kbd>WASD</kbd> lăn khối</span>
        <span><kbd>Space</kbd> đổi khối khi tách</span>
        <span><kbd>Z</kbd> hoàn tác</span>
        <span><kbd>R</kbd> chơi lại</span>
        <span><kbd>M</kbd> bật/tắt nhạc</span>
        <span>Kéo chuột để xoay, lăn chuột để zoom</span>
      </footer>

      {status === 'won' && (
        <div className="overlay win"><div>
          <h2>Hoàn thành</h2>
          <p>{moves} nước, chi phí {cost}</p>
          <div className="row">
            <button className="btn" onClick={restart}>Chơi lại</button>
            <button className="btn primary" onClick={newGame}>Màn khác</button>
          </div>
        </div></div>
      )}
      {status === 'lost' && (
        <div className="overlay lose"><div><h2>Rơi rồi</h2><p>Màn chơi sẽ tự bắt đầu lại</p></div></div>
      )}
    </div>
  )
}

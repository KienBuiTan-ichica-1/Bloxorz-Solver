export type Orient = 'S' | 'H' | 'V' | 'P'
export type Action = 'U' | 'D' | 'L' | 'R' | 'X'
export type Cell = [number, number]

// Trang thai trung voi backend: (o, r, c, r2, c2, act, mask)
export interface State { o: Orient; r: number; c: number; r2: number; c2: number; act: number; mask: number }

export interface BridgeCfg { id: string; pos: Cell; open?: boolean }
export interface SwitchCfg { pos: Cell; targets?: string[]; mode?: 'toggle' | 'open' | 'close'; split_to?: Cell[] }
export interface LevelData {
  id: string; name: string; group: string; desc?: string
  grid: string[]; bridges?: BridgeCfg[]; switches?: SwitchCfg[]
}

export type SwitchType = 'soft' | 'heavy' | 'split'
export interface SwitchInfo { type: SwitchType; mask: number; mode: 'toggle' | 'open' | 'close'; splitTo: Cell[]; targets: string[] }
export interface BridgeInfo { id: string; r: number; c: number; bit: number; open: boolean }
export interface Trigger { pos: Cell; type: SwitchType }

export type FailReason = 'void' | 'fragile' | 'noop'
export interface StepResult {
  valid: boolean; state: State; cost: number; reason?: FailReason
  moved: Cell[]; triggered: Trigger[]; split: boolean; merged: boolean
}

import type { LevelData } from './types'

export type Algo = 'bfs' | 'dfs' | 'ucs' | 'astar'
export const ALGOS: { id: Algo; label: string }[] = [
  { id: 'bfs', label: 'BFS' },
  { id: 'dfs', label: 'DFS' },
  { id: 'ucs', label: 'UCS' },
  { id: 'astar', label: 'A*' },
]

export interface SolveResult {
  algorithm: Algo; level_id: string; found: boolean; moves: string
  length: number; cost: number; expanded: number; time_ms: number; memory_kb: number
  reason?: string
}

const BASE = (import.meta.env.VITE_API as string | undefined) ?? ''

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(BASE + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  return res.json() as Promise<T>
}

export async function ping(): Promise<boolean> {
  try {
    return (await fetch(BASE + '/api/health')).ok
  } catch {
    return false
  }
}

export const solve = (level: LevelData, algorithm: Algo) =>
  post<SolveResult>('/api/solve', { algorithm, level })

export const benchmark = (levelIds: string[], algorithms: Algo[]) =>
  post<{ results: SolveResult[] }>('/api/benchmark', { level_ids: levelIds, algorithms })

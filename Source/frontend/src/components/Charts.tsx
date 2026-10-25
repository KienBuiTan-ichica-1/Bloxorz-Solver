export interface Series { id: string; label: string; color: string }

interface Props {
  title: string
  unit: string
  groups: string[]
  series: Series[]
  value: (group: string, series: string) => number | null
}

// Bieu do cot nhom ve bang SVG, khong can thu vien ngoai
export function BarChart({ title, unit, groups, series, value }: Props) {
  const W = 520, H = 230, L = 52, B = 30, T = 14, R = 8
  const vals = groups.flatMap((g) => series.map((s) => value(g, s.id) ?? 0))
  const max = Math.max(1e-9, ...vals)
  const nice = Math.pow(10, Math.floor(Math.log10(max)))
  const top = Math.ceil(max / nice) * nice
  const gw = (W - L - R) / Math.max(1, groups.length)
  const bw = Math.min(16, (gw - 6) / series.length)
  const fmt = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k` : v % 1 ? v.toFixed(1) : String(v))
  return (
    <figure className="chart">
      <figcaption>{title} <span className="muted">({unit})</span></figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title}>
        {[0, 0.5, 1].map((f) => {
          const y = T + (H - T - B) * (1 - f)
          return (
            <g key={f}>
              <line x1={L} x2={W - R} y1={y} y2={y} className="grid" />
              <text x={L - 6} y={y + 4} textAnchor="end" className="tick">{fmt(top * f)}</text>
            </g>
          )
        })}
        {groups.map((g, gi) => {
          const x0 = L + gi * gw + (gw - bw * series.length) / 2
          return (
            <g key={g}>
              {series.map((s, si) => {
                const v = value(g, s.id) ?? 0
                const h = (H - T - B) * (v / top)
                return (
                  <rect key={s.id} x={x0 + si * bw} y={H - B - h} width={bw - 2} height={Math.max(h, v > 0 ? 1 : 0)} rx={2} fill={s.color}>
                    <title>{`${g} - ${s.label}: ${v} ${unit}`}</title>
                  </rect>
                )
              })}
              <text x={L + gi * gw + gw / 2} y={H - 10} textAnchor="middle" className="tick">{g}</text>
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

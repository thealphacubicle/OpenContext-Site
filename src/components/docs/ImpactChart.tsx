import { useState } from 'react'

function normalCurvePath(
  mean: number,
  stdDev: number,
  xMin: number,
  xMax: number,
  chartX0: number,
  chartWidth: number,
  chartY0: number,
  chartHeight: number,
  samples: number = 120,
): string {
  const points: [number, number][] = []
  const peak = 1 / (stdDev * Math.sqrt(2 * Math.PI))

  for (let i = 0; i <= samples; i++) {
    const x = xMin + (i / samples) * (xMax - xMin)
    const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2))
    const svgX = chartX0 + ((x - xMin) / (xMax - xMin)) * chartWidth
    const svgY = chartY0 - (y / peak) * chartHeight
    points.push([svgX, svgY])
  }

  return points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(' ')
}

const optimistic = '#1871bd'
const charles = '#091F2F'

export function ImpactChart() {
  const [hovered, setHovered] = useState<'before' | 'after' | null>(null)

  const W = 800
  const H = 340
  const padL = 48
  const padR = 32
  const padT = 40
  const padB = 60
  const chartX0 = padL
  const chartY0 = H - padB
  const chartWidth = W - padL - padR
  const chartHeight = H - padT - padB

  const xMin = 0
  const xMax = 22

  const beforePath = normalCurvePath(14, 3.5, xMin, xMax, chartX0, chartWidth, chartY0, chartHeight)
  const afterPath = normalCurvePath(4, 0.9, xMin, xMax, chartX0, chartWidth, chartY0, chartHeight)

  const gridLines = [0, 4, 8, 12, 16, 20].map(
    (v) => chartX0 + ((v - xMin) / (xMax - xMin)) * chartWidth,
  )

  const beforePeakX = chartX0 + ((14 - xMin) / (xMax - xMin)) * chartWidth
  const afterPeakX = chartX0 + ((4 - xMin) / (xMax - xMin)) * chartWidth

  return (
    <section className="section-padding border-t border-line bg-surface-muted">
      <div className="section-inner">
        <h2 className="font-heading font-extrabold text-xl md:text-2xl text-boston-charles uppercase tracking-wider mb-2">
          Time-to-insight, before and after
        </h2>
        <p className="font-sans text-ink-body text-[15px] mb-8">
          Traditional integrations take weeks. OpenContext targets minutes for a first working path.
        </p>

        <div className="border border-line bg-surface p-4 md:p-6 rounded-card shadow-card">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            aria-label="Comparison chart: time to first insight before and after OpenContext"
            role="img"
          >
            {gridLines.map((x, i) => (
              <line
                key={i}
                x1={x}
                y1={padT}
                x2={x}
                y2={chartY0}
                stroke="rgba(9,31,47,0.06)"
                strokeWidth="1"
              />
            ))}

            <line
              x1={chartX0}
              y1={chartY0}
              x2={chartX0 + chartWidth}
              y2={chartY0}
              stroke="rgba(9,31,47,0.2)"
              strokeWidth="1"
            />

            <path
              d={`${beforePath} L${chartX0 + chartWidth},${chartY0} L${chartX0},${chartY0} Z`}
              fill={hovered === 'after' ? 'rgba(88,88,91,0.05)' : 'rgba(88,88,91,0.1)'}
              style={{ transition: 'fill 0.25s ease' }}
            />
            <path
              d={beforePath}
              fill="none"
              stroke={hovered === 'after' ? 'rgba(88,88,91,0.35)' : 'rgba(88,88,91,0.6)'}
              strokeWidth="2"
              style={{ transition: 'stroke 0.25s ease' }}
              onMouseEnter={() => setHovered('before')}
              onMouseLeave={() => setHovered(null)}
            />

            <path
              d={`${afterPath} L${chartX0 + chartWidth},${chartY0} L${chartX0},${chartY0} Z`}
              fill={hovered === 'before' ? 'rgba(24,113,189,0.1)' : 'rgba(24,113,189,0.2)'}
              style={{ transition: 'fill 0.25s ease' }}
            />
            <path
              d={afterPath}
              fill="none"
              stroke={hovered === 'before' ? 'rgba(24,113,189,0.45)' : optimistic}
              strokeWidth="2.5"
              style={{ transition: 'stroke 0.25s ease' }}
              onMouseEnter={() => setHovered('after')}
              onMouseLeave={() => setHovered(null)}
            />

            <line
              x1={afterPeakX}
              y1={padT + 4}
              x2={afterPeakX}
              y2={chartY0 - chartHeight - 4}
              stroke="rgba(24,113,189,0.45)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={afterPeakX + 6}
              y={padT + 18}
              fill={optimistic}
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              ~15 min
            </text>

            <line
              x1={beforePeakX}
              y1={padT + 4}
              x2={beforePeakX}
              y2={chartY0 - chartHeight - 4}
              stroke="rgba(88,88,91,0.3)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={beforePeakX + 6}
              y={padT + 18}
              fill="rgba(88,88,91,0.75)"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              ~14 days
            </text>

            <text
              x={chartX0 + chartWidth / 2}
              y={H - 10}
              textAnchor="middle"
              fill={charles}
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="1"
              opacity="0.55"
            >
              TIME TO FIRST INSIGHT
            </text>
          </svg>

          <div className="flex flex-wrap gap-6 mt-2 px-1">
            <button
              type="button"
              className="flex items-center gap-2 cursor-default"
              onMouseEnter={() => setHovered('before')}
              onMouseLeave={() => setHovered(null)}
              aria-label="Traditional integration curve"
            >
              <span className="inline-block w-8 h-0.5 bg-boston-grayBody/55" />
              <span className="font-mono text-xs text-ink-body uppercase tracking-wider">
                Traditional integration
              </span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 cursor-default"
              onMouseEnter={() => setHovered('after')}
              onMouseLeave={() => setHovered(null)}
              aria-label="With OpenContext curve"
            >
              <span className="inline-block w-8 h-0.5" style={{ background: optimistic }} />
              <span className="font-mono text-xs uppercase tracking-wider" style={{ color: optimistic }}>
                With OpenContext
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

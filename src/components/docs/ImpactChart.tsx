import { useState } from 'react'

/**
 * Computes SVG path points for a normal distribution bell curve.
 * Maps the distribution onto chart pixel coordinates.
 */
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
    // Invert Y: SVG y=0 is top; chart y0 is bottom baseline
    const svgY = chartY0 - (y / peak) * chartHeight
    points.push([svgX, svgY])
  }

  return points
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(' ')
}

export function ImpactChart() {
  const [hovered, setHovered] = useState<'before' | 'after' | null>(null)

  // Chart layout constants
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

  // Domain: 0 to 22 (representing a loose "time" axis; labels override the units)
  const xMin = 0
  const xMax = 22

  // "Before" curve: high mean, high std dev (wide, right-shifted)
  const beforePath = normalCurvePath(14, 3.5, xMin, xMax, chartX0, chartWidth, chartY0, chartHeight)

  // "After" curve: low mean, tight std dev (narrow, left-shifted)
  const afterPath = normalCurvePath(4, 0.9, xMin, xMax, chartX0, chartWidth, chartY0, chartHeight)

  // Grid line x positions (even spacing across domain)
  const gridLines = [0, 4, 8, 12, 16, 20].map(
    (v) => chartX0 + ((v - xMin) / (xMax - xMin)) * chartWidth,
  )

  // Peak label x positions
  const beforePeakX = chartX0 + ((14 - xMin) / (xMax - xMin)) * chartWidth
  const afterPeakX = chartX0 + ((4 - xMin) / (xMax - xMin)) * chartWidth

  return (
    <section className="section-padding border-t border-white/5 bg-[#0f0f0f]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-2">
          The speed difference is statistically obvious
        </h2>
        <p className="font-sans text-[#9ca3af] text-[15px] mb-8">
          Traditional data integrations take weeks. OpenContext compresses that to minutes.
        </p>

        <div
          className="border border-white/8 bg-[#0a0a0a] p-4 md:p-6"
          style={{ borderRadius: '2px' }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            aria-label="Normal distribution comparison chart: time to first insight before and after OpenContext"
            role="img"
          >
            {/* Subtle grid lines */}
            {gridLines.map((x, i) => (
              <line
                key={i}
                x1={x}
                y1={padT}
                x2={x}
                y2={chartY0}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}

            {/* Baseline x-axis */}
            <line
              x1={chartX0}
              y1={chartY0}
              x2={chartX0 + chartWidth}
              y2={chartY0}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />

            {/* "Before" curve — muted white/gray, filled */}
            <path
              d={`${beforePath} L${chartX0 + chartWidth},${chartY0} L${chartX0},${chartY0} Z`}
              fill={hovered === 'after' ? 'rgba(200,200,200,0.04)' : 'rgba(200,200,200,0.08)'}
              style={{ transition: 'fill 0.25s ease' }}
            />
            <path
              d={beforePath}
              fill="none"
              stroke={hovered === 'after' ? 'rgba(200,200,200,0.25)' : 'rgba(200,200,200,0.55)'}
              strokeWidth="2"
              style={{ transition: 'stroke 0.25s ease, stroke-opacity 0.25s ease' }}
              onMouseEnter={() => setHovered('before')}
              onMouseLeave={() => setHovered(null)}
            />

            {/* "After" curve — orange, filled */}
            <path
              d={`${afterPath} L${chartX0 + chartWidth},${chartY0} L${chartX0},${chartY0} Z`}
              fill={hovered === 'before' ? 'rgba(255,107,43,0.06)' : 'rgba(255,107,43,0.12)'}
              style={{ transition: 'fill 0.25s ease' }}
            />
            <path
              d={afterPath}
              fill="none"
              stroke={hovered === 'before' ? 'rgba(255,107,43,0.4)' : '#ff6b2b'}
              strokeWidth="2.5"
              style={{ transition: 'stroke 0.25s ease' }}
              onMouseEnter={() => setHovered('after')}
              onMouseLeave={() => setHovered(null)}
            />

            {/* Peak label: "After" — ~15 min */}
            <line
              x1={afterPeakX}
              y1={padT + 4}
              x2={afterPeakX}
              y2={chartY0 - chartHeight - 4}
              stroke="rgba(255,107,43,0.4)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={afterPeakX + 6}
              y={padT + 18}
              fill="#ff6b2b"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              ~15 min
            </text>

            {/* Peak label: "Before" — ~14 days */}
            <line
              x1={beforePeakX}
              y1={padT + 4}
              x2={beforePeakX}
              y2={chartY0 - chartHeight - 4}
              stroke="rgba(200,200,200,0.25)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={beforePeakX + 6}
              y={padT + 18}
              fill="rgba(200,200,200,0.6)"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="0.5"
            >
              ~14 days
            </text>

            {/* X-axis label */}
            <text
              x={chartX0 + chartWidth / 2}
              y={H - 10}
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="1"
            >
              TIME TO FIRST INSIGHT
            </text>
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mt-2 px-1">
            <button
              className="flex items-center gap-2 cursor-default"
              onMouseEnter={() => setHovered('before')}
              onMouseLeave={() => setHovered(null)}
              aria-label="Traditional Integration curve"
            >
              <span
                className="inline-block w-8 h-0.5"
                style={{ background: 'rgba(200,200,200,0.55)' }}
              />
              <span className="font-mono text-xs text-[#9ca3af] uppercase tracking-wider">
                Traditional Integration
              </span>
            </button>
            <button
              className="flex items-center gap-2 cursor-default"
              onMouseEnter={() => setHovered('after')}
              onMouseLeave={() => setHovered(null)}
              aria-label="With OpenContext curve"
            >
              <span
                className="inline-block w-8 h-0.5"
                style={{ background: '#ff6b2b' }}
              />
              <span className="font-mono text-xs text-[#ff6b2b] uppercase tracking-wider">
                With OpenContext
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

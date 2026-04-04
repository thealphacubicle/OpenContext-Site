export function CoreConstraint() {
  return (
    <section
      id="core-constraint"
      className="section-padding border-t border-white/5 bg-[#0f0f0f]"
    >
      <div className="section-inner">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left: text (60%) */}
          <div className="reveal flex-1 md:basis-[60%]">
            <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-6">
              Built for simplicity
            </h2>
            <p className="font-fraunces text-2xl md:text-3xl font-light text-white leading-tight mb-6">
              One data source. One deployment. Everything stays simple.
            </p>
            <p className="font-sans text-[#9ca3af] text-base leading-relaxed mb-6">
              Each OpenContext deployment connects to exactly one data source. You don&apos;t have to think about
              routing, plugin conflicts, or complex orchestration — it&apos;s handled for you by design.
            </p>
            <p className="font-sans text-[#9ca3af] text-base leading-relaxed">
              Need multiple sources? Create multiple forks — one per source, each with a clear name. They run
              independently, scale independently, and never interfere with each other.
            </p>
          </div>

          {/* Right: visual diagram (40%) */}
          <div className="reveal reveal-delay-2 shrink-0 md:basis-[38%] w-full">
            <div className="space-y-4">
              {/* Good pattern */}
              <div
                className="p-5 border"
                style={{
                  borderColor: 'rgba(34,197,94,0.2)',
                  backgroundColor: 'rgba(34,197,94,0.04)',
                  borderRadius: '2px',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <circle cx="7" cy="7" r="6.5" stroke="rgba(34,197,94,0.6)" strokeWidth="1" />
                    <path d="M4 7l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-xs text-green-400 uppercase tracking-widest">Correct</span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <div
                    className="font-mono text-xs px-3 py-2 text-white"
                    style={{
                      border: '1px solid rgba(255,255,255,0.15)',
                      backgroundColor: '#1a1a1a',
                      borderRadius: '2px',
                    }}
                  >
                    OpenContext
                  </div>
                  <span className="font-mono text-sm" style={{ color: '#ff6b2b' }}>→</span>
                  <div
                    className="font-mono text-xs px-3 py-2 text-white"
                    style={{
                      border: '1px solid rgba(255,255,255,0.15)',
                      backgroundColor: '#1a1a1a',
                      borderRadius: '2px',
                    }}
                  >
                    Your Data Portal
                  </div>
                </div>
                <p className="font-sans text-xs text-[#6b7280] mt-3">
                  1 deployment = 1 source. Clean, isolated, simple.
                </p>
              </div>

              {/* Bad pattern */}
              <div
                className="p-5 border"
                style={{
                  borderColor: 'rgba(239,68,68,0.15)',
                  backgroundColor: 'rgba(239,68,68,0.03)',
                  borderRadius: '2px',
                  opacity: 0.75,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <circle cx="7" cy="7" r="6.5" stroke="rgba(239,68,68,0.5)" strokeWidth="1" />
                    <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono text-xs text-red-400 uppercase tracking-widest">Avoid</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div
                    className="font-mono text-xs px-3 py-2 text-[#6b7280]"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      backgroundColor: '#111',
                      borderRadius: '2px',
                    }}
                  >
                    OpenContext
                  </div>
                  <span className="font-mono text-sm text-red-500/50">↔</span>
                  <div className="flex flex-col gap-1">
                    {['Portal A', 'Portal B', 'Portal C'].map((p) => (
                      <div
                        key={p}
                        className="font-mono text-xs px-2 py-1 text-[#6b7280]"
                        style={{
                          border: '1px solid rgba(255,255,255,0.06)',
                          backgroundColor: '#111',
                          borderRadius: '2px',
                        }}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-sans text-xs text-[#6b7280] mt-3">
                  Multiple sources = routing complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

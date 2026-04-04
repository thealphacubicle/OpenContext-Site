const steps = [
  {
    num: '01',
    title: 'Your city has data',
    desc: 'It lives in a portal your team already manages — CKAN, Socrata, or ArcGIS.',
  },
  {
    num: '02',
    title: 'OpenContext wraps it',
    desc: 'Fork the repo, edit one config file, and deploy to your cloud in minutes.',
  },
  {
    num: '03',
    title: 'AI can now read it',
    desc: 'Any AI assistant connected to OpenContext can query your data in plain English.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-12">
          How it works
        </h2>

        {/* Desktop: horizontal flow with arrows; Mobile: stacked */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex md:flex-1 flex-col md:flex-row items-stretch">
              {/* Card */}
              <div
                className={`reveal card-hover reveal-delay-${i + 1} relative flex-1 p-8 bg-[#0f0f0f] border border-white/8 transition-colors hover:border-[rgba(255,107,43,0.3)] group overflow-hidden`}
                style={{ borderRadius: '2px' }}
              >
                {/* Top accent line — scales from 0 to 100% on hover */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ background: '#ff6b2b' }}
                  aria-hidden
                />

                {/* Watermark step number */}
                <span
                  className="absolute top-2 right-3 font-mono font-bold leading-none text-white select-none pointer-events-none"
                  style={{ fontSize: '5rem', opacity: 0.07 }}
                  aria-hidden
                >
                  {step.num}
                </span>

                {/* Visible step number */}
                <span
                  className="block font-mono font-light leading-none text-[#ff6b2b] mb-4 opacity-40 group-hover:opacity-70 transition-all duration-500"
                  style={{ fontSize: '1.5rem' }}
                  aria-hidden
                >
                  {step.num}
                </span>

                <h3 className="font-fraunces font-semibold text-white text-lg mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="font-sans text-[#9ca3af] text-[15px] leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>

              {/* Arrow connector between cards (not after last) */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center md:w-10 py-4 md:py-0 shrink-0">
                  {/* Vertical arrow on mobile, horizontal on desktop */}
                  <span
                    className="font-mono font-light md:hidden"
                    style={{ color: '#ff6b2b', opacity: 0.5, fontSize: '1.2rem' }}
                    aria-hidden
                  >
                    ↓
                  </span>
                  <span
                    className="font-mono font-light hidden md:block"
                    style={{ color: '#ff6b2b', opacity: 0.5, fontSize: '1.4rem' }}
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

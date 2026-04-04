export function Analogy() {
  return (
    <section
      id="analogy"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Centered radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,107,43,0.05) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10">
        <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Decorative opening quote mark */}
          <span
            className="absolute font-fraunces leading-none text-[#ff6b2b] select-none pointer-events-none"
            style={{
              fontSize: 'clamp(6rem, 15vw, 10rem)',
              opacity: 0.08,
              top: '-1.5rem',
              left: '-1rem',
              lineHeight: 1,
            }}
            aria-hidden
          >
            &ldquo;
          </span>

          {/* Decorative closing quote mark */}
          <span
            className="absolute font-fraunces leading-none text-[#ff6b2b] select-none pointer-events-none"
            style={{
              fontSize: 'clamp(6rem, 15vw, 10rem)',
              opacity: 0.08,
              bottom: '-3rem',
              right: '-1rem',
              lineHeight: 1,
            }}
            aria-hidden
          >
            &rdquo;
          </span>

          <blockquote className="reveal font-fraunces text-2xl md:text-4xl font-light text-white leading-relaxed relative z-10 px-4">
            OpenContext is the universal adapter between your city&apos;s data and AI — deploy in
            minutes, query in plain English.
          </blockquote>

          <p className="reveal reveal-delay-1 font-mono text-xs uppercase tracking-widest mt-8 relative z-10" style={{ color: '#ff6b2b' }}>
            — The OpenContext Principle
          </p>
        </div>
      </div>
    </section>
  )
}

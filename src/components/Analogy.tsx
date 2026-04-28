export function Analogy() {
  return (
    <section
      id="analogy"
      className="py-20 md:py-28 relative overflow-hidden bg-surface-muted border-t border-line"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(24, 113, 189, 0.1) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="section-inner relative z-10">
        <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
          <span
            className="absolute font-sans italic leading-none text-boston-optimistic select-none pointer-events-none"
            style={{
              fontSize: 'clamp(6rem, 15vw, 10rem)',
              opacity: 0.12,
              top: '-1.5rem',
              left: '-1rem',
              lineHeight: 1,
            }}
            aria-hidden
          >
            &ldquo;
          </span>

          <span
            className="absolute font-sans italic leading-none text-boston-optimistic select-none pointer-events-none"
            style={{
              fontSize: 'clamp(6rem, 15vw, 10rem)',
              opacity: 0.12,
              bottom: '-3rem',
              right: '-1rem',
              lineHeight: 1,
            }}
            aria-hidden
          >
            &rdquo;
          </span>

          <blockquote className="reveal font-sans text-2xl md:text-3xl font-medium text-boston-charles leading-relaxed relative z-10 px-4 italic">
            OpenContext is the universal adapter between your city&apos;s data and AI — deploy in
            minutes, query in plain English.
          </blockquote>

          <p className="reveal reveal-delay-1 eyebrow mt-8 relative z-10">— The OpenContext principle</p>
        </div>
      </div>
    </section>
  )
}

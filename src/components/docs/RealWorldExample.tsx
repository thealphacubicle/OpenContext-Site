interface RealWorldExampleProps {
  githubUrl: string
}

export function RealWorldExample({ githubUrl }: RealWorldExampleProps) {
  const examplesUrl = `${githubUrl}/tree/main/examples`

  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-6">
          Real-world example
        </h2>
        <div className="max-w-2xl">
          <p className="font-sans text-muted text-base leading-relaxed mb-4">
            Boston&apos;s open data portal serves as the canonical working example. The configuration is
            straightforward: a city name, a base URL pointing to the CKAN portal, and minimal metadata. You
            can find it in the main OpenContext repository under the examples folder.
          </p>
          <p className="font-sans text-muted text-base leading-relaxed mb-6">
            It works verbatim — clone the pattern, substitute your city&apos;s CKAN URL, and deploy. No custom
            code required if you&apos;re using CKAN.
          </p>
          <a
            href={examplesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-navy text-cream text-sm font-mono font-medium uppercase tracking-wider no-underline transition-colors hover:bg-orange"
            style={{ borderRadius: '2px' }}
          >
            View examples in repo
          </a>
        </div>
      </div>
    </section>
  )
}

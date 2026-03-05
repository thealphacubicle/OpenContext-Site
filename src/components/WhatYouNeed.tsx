const items = [
  'An open data portal (CKAN, Socrata, or ArcGIS)',
  'A cloud account (AWS, GCP, or Azure)',
  'About 15 minutes',
]

export function WhatYouNeed() {
  return (
    <section id="what-you-need" className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-10">
          What you need
        </h2>
        <ul className="space-y-0 max-w-xl">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 py-5 border-b border-[var(--border)] last:border-0 font-sans text-navy text-lg md:text-xl leading-relaxed"
            >
              <span className="font-mono text-orange shrink-0 text-lg">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

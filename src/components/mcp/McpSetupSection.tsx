interface McpSetupSectionProps {
  id: string
  title: string
  timeEstimate: string
  steps: { title: string; content: React.ReactNode }[]
  troubleshooting?: { issue: string; solution: string }[]
}

export function McpSetupSection({
  id,
  title,
  timeEstimate,
  steps,
  troubleshooting,
}: McpSetupSectionProps) {
  return (
    <section id={id} className="section-padding border-t border-line bg-surface">
      <div className="section-inner">
        <h2 className="eyebrow text-xl md:text-2xl mb-2">{title}</h2>
        <p className="font-sans text-ink-body text-sm mb-10">{timeEstimate}</p>

        <div className="space-y-10 max-w-2xl">
          {steps.map((step, i) => (
            <div key={i}>
              <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 uppercase tracking-tight">
                Step {i + 1} — {step.title}
              </h3>
              <div className="font-sans text-ink-body text-base leading-relaxed">{step.content}</div>
            </div>
          ))}
        </div>

        {troubleshooting && troubleshooting.length > 0 && (
          <div className="mt-12 pt-8 border-t border-line">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-boston-optimistic mb-4">
              Something went wrong?
            </h3>
            <ul className="space-y-3">
              {troubleshooting.map((item, i) => (
                <li key={i} className="font-sans text-ink-body text-sm">
                  <span className="font-semibold text-boston-charles">{item.issue}:</span> {item.solution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

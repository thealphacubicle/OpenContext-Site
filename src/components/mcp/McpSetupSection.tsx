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
    <section id={id} className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-2">
          {title}
        </h2>
        <p className="font-sans text-muted text-sm mb-10">{timeEstimate}</p>

        <div className="space-y-10 max-w-2xl">
          {steps.map((step, i) => (
            <div key={i}>
              <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">
                Step {i + 1} — {step.title}
              </h3>
              <div className="font-sans text-muted text-base leading-relaxed">{step.content}</div>
            </div>
          ))}
        </div>

        {troubleshooting && troubleshooting.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <h3 className="font-mono text-sm font-medium uppercase tracking-wider text-orange mb-4">
              Something went wrong?
            </h3>
            <ul className="space-y-3">
              {troubleshooting.map((item, i) => (
                <li key={i} className="font-sans text-muted text-sm">
                  <span className="font-medium text-navy">{item.issue}:</span> {item.solution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

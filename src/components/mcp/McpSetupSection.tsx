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
    <section id={id} className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#E8841A] mb-2">
          {title}
        </h2>
        <p className="font-sans text-[#9ca3af] text-sm mb-10">{timeEstimate}</p>

        <div className="space-y-10 max-w-2xl">
          {steps.map((step, i) => (
            <div key={i}>
              <h3 className="font-fraunces font-semibold text-white text-lg mb-2">
                Step {i + 1} &mdash; {step.title}
              </h3>
              <div className="font-sans text-[#9ca3af] text-base leading-relaxed">{step.content}</div>
            </div>
          ))}
        </div>

        {troubleshooting && troubleshooting.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/5">
            <h3 className="font-mono text-sm font-medium uppercase tracking-wider text-[#E8841A] mb-4">
              Something went wrong?
            </h3>
            <ul className="space-y-3">
              {troubleshooting.map((item, i) => (
                <li key={i} className="font-sans text-[#9ca3af] text-sm">
                  <span className="font-medium text-white">{item.issue}:</span> {item.solution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

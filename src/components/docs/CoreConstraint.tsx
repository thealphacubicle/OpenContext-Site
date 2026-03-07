export function CoreConstraint() {
  return (
    <section
      id="core-constraint"
      className="section-padding border-t border-[var(--border)] bg-[#f0ebe3]"
    >
      <div className="section-inner">
        <div className="max-w-2xl">
          <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-6">
            The core constraint
          </h2>
          <p className="font-fraunces text-2xl md:text-3xl font-light text-navy leading-tight mb-6">
            One fork. One MCP server. One plugin.
          </p>
          <p className="font-sans text-muted text-base leading-relaxed mb-6">
            This is a deliberate design decision, not a limitation. OpenContext enforces a strict rule: each
            deployment exposes exactly one plugin. One fork equals one MCP server equals one data source. This
            keeps every deployment simple, independently scalable, and easy to maintain.
          </p>
          <p className="font-sans text-muted text-base leading-relaxed">
            A government that wants to expose three data sources creates three forks — for example,
            &quot;Boston-311-MCP&quot;, &quot;Boston-Transit-MCP&quot;, and &quot;Boston-OpenData-MCP&quot; — names them
            clearly, and deploys them independently. Each runs as its own service, scales independently, and can
            be updated without touching the others.
          </p>
        </div>
      </div>
    </section>
  )
}

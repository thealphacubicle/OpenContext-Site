interface DocumentationIndexProps {
  githubUrl: string
}

const docs = [
  {
    title: 'Quickstart guide',
    description: 'Get from zero to a working deployment in minutes.',
    file: 'QUICKSTART.md',
  },
  {
    title: 'Architecture',
    description: 'Understand how OpenContext fits between AI assistants and civic data systems.',
    file: 'ARCHITECTURE.md',
  },
  {
    title: 'Custom plugins guide',
    description: 'Write and register your own plugins for non-CKAN data sources.',
    file: 'CUSTOM_PLUGINS.md',
  },
  {
    title: 'Built-in plugins reference',
    description: 'Documentation for the CKAN plugin and other bundled plugins.',
    file: 'BUILT_IN_PLUGINS.md',
  },
  {
    title: 'Deployment guide',
    description: 'Deploy to your infrastructure and obtain your MCP endpoint URL.',
    file: 'DEPLOYMENT.md',
  },
  {
    title: 'Testing guide',
    description: 'Run locally and validate your plugin before deploying.',
    file: 'TESTING.md',
  },
  {
    title: 'FAQ',
    description: 'Common questions about OpenContext, MCP, and civic data integration.',
    file: 'FAQ.md',
  },
]

export function DocumentationIndex({ githubUrl }: DocumentationIndexProps) {
  const baseUrl = `${githubUrl}/blob/main/docs`
  const docLinks = docs.map((doc) => ({ ...doc, href: `${baseUrl}/${doc.file}` }))

  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-12">
          Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docLinks.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-[var(--border)] no-underline transition-colors hover:border-orange hover:bg-[#faf8f5]"
              style={{ borderRadius: '2px' }}
            >
              <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">{doc.title}</h3>
              <p className="font-sans text-muted text-[15px] leading-relaxed">{doc.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

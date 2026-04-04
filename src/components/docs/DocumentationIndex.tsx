import { Link } from 'react-router-dom'

interface DocumentationIndexProps {
  githubUrl: string
}

const docs = [
  {
    title: 'Connect to your MCP',
    description: 'Connect Claude, Cursor, Gemini CLI, or any HTTP client to your organization\'s MCP server.',
    href: '/connect',
    internal: true,
  },
  {
    title: 'Quickstart guide',
    description: 'Get from zero to a working deployment in minutes.',
    file: 'QUICKSTART.md',
    internal: false,
  },
  {
    title: 'Architecture',
    description: 'Understand how OpenContext fits between AI assistants and civic data systems.',
    file: 'ARCHITECTURE.md',
    internal: false,
  },
  {
    title: 'Custom plugins guide',
    description: 'Write and register your own plugins for non-CKAN data sources.',
    file: 'CUSTOM_PLUGINS.md',
    internal: false,
  },
  {
    title: 'Built-in plugins reference',
    description: 'Documentation for the CKAN plugin and other bundled plugins.',
    file: 'BUILT_IN_PLUGINS.md',
    internal: false,
  },
  {
    title: 'Deployment guide',
    description: 'Deploy to your infrastructure and obtain your MCP endpoint URL.',
    file: 'DEPLOYMENT.md',
    internal: false,
  },
  {
    title: 'FAQ',
    description: 'Common questions about OpenContext, MCP, and civic data integration.',
    file: 'FAQ.md',
    internal: false,
  },
]

export function DocumentationIndex({ githubUrl }: DocumentationIndexProps) {
  const baseUrl = `${githubUrl}/blob/main/docs`
  const docLinks = docs.map((doc) =>
    'file' in doc ? { ...doc, href: `${baseUrl}/${doc.file}`, internal: false } : doc
  )

  const cardInner = (doc: (typeof docLinks)[number]) => (
    <>
      {/* Top-right orange accent dot — visible on hover */}
      <span
        className="absolute top-3 right-3 w-1 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: '#ff6b2b', borderRadius: '1px' }}
        aria-hidden
      />

      <h3 className="font-fraunces font-semibold text-white text-lg mb-2 group-hover:text-[#ff6b2b] transition-colors pr-6">
        {doc.title}
      </h3>
      <p className="font-sans text-[#9ca3af] text-[15px] leading-relaxed">{doc.description}</p>

      {/* Right-arrow slides in on hover */}
      <span
        className="absolute right-5 top-1/2 -translate-y-1/2 font-mono text-[#ff6b2b] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        aria-hidden
      >
        →
      </span>
    </>
  )

  const cardClass =
    'reveal block relative min-h-[100px] p-6 border border-white/8 bg-[#0f0f0f] no-underline transition-all hover:border-[rgba(255,107,43,0.35)] hover:bg-[#111111] group'
  const cardStyle = { borderRadius: '2px' } as const

  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-inner">
        <h2 className="reveal font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-[#ff6b2b] mb-8">
          Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {docLinks.map((doc, i) => {
            const delayClass = `reveal-delay-${Math.min(i + 1, 3)}`
            return doc.internal ? (
              <Link
                key={doc.title}
                to={doc.href}
                className={`${cardClass} ${delayClass}`}
                style={cardStyle}
              >
                {cardInner(doc)}
              </Link>
            ) : (
              <a
                key={doc.title}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} ${delayClass}`}
                style={cardStyle}
              >
                {cardInner(doc)}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

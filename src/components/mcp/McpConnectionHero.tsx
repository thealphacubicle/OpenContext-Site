const quickRef = [
  { tool: 'Claude Desktop (Free)', account: 'Free', link: '#claude-desktop-free' },
  { tool: 'Claude Desktop', account: 'Pro', link: '#claude-pro-desktop' },
  { tool: 'Claude on the web', account: 'Pro', link: '#claude-pro-web' },
  { tool: 'Cursor IDE', account: 'Any', link: '#cursor-ide' },
  { tool: 'Gemini CLI', account: 'Google account', link: '#gemini-cli' },
  { tool: 'Standard HTTP', account: 'Any client', link: '#standard-http' },
]

const setupTimes = [
  { method: 'Claude Pro (Web)', time: '~2 minutes', note: 'No installation needed' },
  { method: 'Claude Pro (Desktop)', time: '~2 minutes', note: 'No installation needed' },
  { method: 'Cursor IDE', time: '~5 minutes', note: '' },
  { method: 'Mac / Linux / Windows (Claude Free)', time: '~10 minutes', note: '' },
  { method: 'Gemini CLI', time: '~5 minutes', note: '' },
]

export function McpConnectionHero() {
  return (
    <section className="section-padding border-b border-[var(--border)]">
      <div className="section-inner">
        <h1 className="font-fraunces text-3xl md:text-4xl font-light text-navy leading-tight mb-6">
          Connect to your MCP
        </h1>
        <p className="font-sans text-muted text-lg leading-relaxed mb-10 max-w-2xl">
          This guide walks you through connecting your AI tool to live civic data via your
          organization&apos;s MCP server. Get the MCP endpoint URL and any setup commands from your MCP
          administrator or organization. Once set up, you can ask questions and get real answers
          pulled directly from your data systems.
        </p>

        <div className="mb-10">
          <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-orange mb-4">
            Quick reference — pick your setup
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] border border-[var(--border)]">
              <thead>
                <tr className="bg-[#f0ebe3]">
                  <th className="text-left font-mono text-sm font-medium text-navy p-3 border-b border-[var(--border)]">
                    I use...
                  </th>
                  <th className="text-left font-mono text-sm font-medium text-navy p-3 border-b border-[var(--border)]">
                    I have...
                  </th>
                  <th className="text-left font-mono text-sm font-medium text-navy p-3 border-b border-[var(--border)]">
                    Go to...
                  </th>
                </tr>
              </thead>
              <tbody>
                {quickRef.map((row) => (
                  <tr key={row.tool} className="border-b border-[var(--border)] last:border-b-0">
                    <td className="p-3 font-sans text-muted text-sm">{row.tool}</td>
                    <td className="p-3 font-sans text-muted text-sm">{row.account}</td>
                    <td className="p-3">
                      <a
                        href={row.link}
                        className="font-mono text-sm text-orange hover:underline no-underline"
                      >
                        Setup section
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-orange mb-4">
            Setup time overview
          </h2>
          <ul className="space-y-2">
            {setupTimes.map((item) => (
              <li key={item.method} className="font-sans text-muted text-sm flex gap-2">
                <span className="text-navy font-medium">{item.method}</span>
                <span>— {item.time}</span>
                {item.note && <span className="text-[var(--chip-muted-text)]">({item.note})</span>}
              </li>
            ))}
          </ul>
        </div>

        <p className="font-sans text-muted text-sm mt-8">
          Not sure which Claude plan you have? Go to{' '}
          <a
            href="https://claude.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:underline"
          >
            claude.ai
          </a>{' '}
          and check the bottom left corner. If you see &quot;Upgrade to Pro&quot;, you&apos;re on the free plan. If
          you see &quot;Pro&quot;, you&apos;re on Pro.
        </p>
      </div>
    </section>
  )
}

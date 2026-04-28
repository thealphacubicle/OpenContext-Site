import { useState } from 'react'
import { CodeWindow } from './CodeWindow'

const inlineCode = (s: string) => (
  <code className="px-1.5 py-0.5 text-ink text-sm bg-boston-grayWash border border-line rounded-sm font-mono">
    {s}
  </code>
)

const initRequest = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-03-26",
    "capabilities": {},
    "clientInfo": { "name": "http-client", "version": "1.0.0" }
  }
}`

export function McpHttpSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="standard-http" className="py-14 md:py-16 border-t border-line bg-surface">
      <div className="section-inner">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors rounded-card border ${
            open ? 'bg-action-muted border-action/35' : 'bg-surface-muted border-line hover:border-boston-blueMuted'
          }`}
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1 text-left">
            <span className="font-heading font-bold text-xs text-boston-optimistic uppercase tracking-widest">
              For developers
            </span>
            <span className="font-heading font-extrabold text-boston-charles text-lg uppercase tracking-tight">
              Standard HTTP connection
            </span>
            <span className="font-sans text-xs text-ink-muted">
              Connecting to an existing OpenContext server via HTTP — protocol reference below.
            </span>
          </div>
          <span
            className="flex-shrink-0 ml-6 w-9 h-9 flex items-center justify-center font-mono text-lg text-action transition-transform border border-action/35 rounded-full bg-surface"
            style={{
              transform: open ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.25s ease',
            }}
            aria-hidden
          >
            +
          </span>
        </button>

        {open && (
          <div className="animate-fade-up mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 uppercase tracking-tight">
                    Overview
                  </h3>
                  <p className="font-sans text-ink-body text-sm leading-relaxed">
                    MCP servers use Streamable HTTP transport. Use JSON-RPC over HTTP POST from curl, Postman, or your
                    own service. Your administrator supplies the endpoint URL.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-3 uppercase tracking-tight">
                    Endpoint
                  </h3>
                  <CodeWindow title="URL" variant="editor">
                    https://your-org-mcp.example.com/mcp
                  </CodeWindow>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-3 uppercase tracking-tight">
                    Required headers
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Accept: application/json, text/event-stream',
                      'MCP-Protocol-Version: 2025-03-26',
                      'Content-Type: application/json',
                    ].map((h) => (
                      <li key={h} className="font-sans text-sm text-ink-body">
                        {inlineCode(h)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 uppercase tracking-tight">
                    Session management
                  </h3>
                  <p className="font-sans text-ink-body text-sm leading-relaxed">
                    If the server returns an {inlineCode('Mcp-Session-Id')} header, include it on subsequent requests.
                    After initialization, send an {inlineCode('initialized')} notification, then use{' '}
                    {inlineCode('tools/list')} and {inlineCode('tools/call')}.
                  </p>
                </div>
              </div>

               <div className="space-y-8">
                <div>
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 uppercase tracking-tight">
                    Initialize request
                  </h3>
                  <p className="font-sans text-ink-body text-sm mb-2">
                    Send a JSON-RPC {inlineCode('initialize')} request to start a session:
                  </p>
                  <CodeWindow title="request.json" variant="editor">
                    {initRequest}
                  </CodeWindow>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-boston-charles text-lg mb-2 uppercase tracking-tight">
                    curl example
                  </h3>
                  <p className="font-sans text-ink-body text-sm mb-2">
                    Replace {inlineCode('YOUR_MCP_ENDPOINT_URL')} with the URL from your administrator:
                  </p>
                  <CodeWindow title="Terminal" variant="terminal">
{`$ curl -X POST "YOUR_MCP_ENDPOINT_URL" \\
  -H "Accept: application/json, text/event-stream" \\
  -H "MCP-Protocol-Version: 2025-03-26" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"http-client","version":"1.0.0"}}}'`}
                  </CodeWindow>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

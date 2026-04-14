import { useState } from 'react'
import { CodeWindow } from './CodeWindow'

const inlineCode = (s: string) => (
  <code className="px-1.5 py-0.5 text-white" style={{ backgroundColor: '#1a1a1a', borderRadius: '2px' }}>
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
    <section id="standard-http" className="py-14 md:py-16 border-t border-white/5">
      <div className="section-inner">
        {/* Collapsible header */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.02] group"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '3px',
            background: open ? 'rgba(29,158,117,0.08)' : 'transparent',
          }}
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-sm text-[#E8841A] uppercase tracking-widest">
              For Developers
            </span>
            <span className="font-fraunces text-white text-lg font-light">
              Standard HTTP Connection
            </span>
            <span className="font-sans text-xs text-[#6b7280]">
              If you're connecting to an existing OpenContext server via HTTP — this section is for you.
            </span>
          </div>
          <span
            className="flex-shrink-0 ml-6 w-8 h-8 flex items-center justify-center font-mono text-xl text-[#1D9E75] transition-transform"
            style={{
              border: '1px solid rgba(29,158,117,0.35)',
              borderRadius: '50%',
              transform: open ? 'rotate(45deg)' : 'none',
              transition: 'transform 0.25s ease',
            }}
            aria-hidden
          >
            +
          </span>
        </button>

        {/* Collapsible body */}
        {open && (
          <div className="animate-fade-up mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left column — reference info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-2">Overview</h3>
                  <p className="font-sans text-[#9ca3af] text-sm leading-relaxed">
                    MCP servers use Streamable HTTP transport. Connect from any HTTP client — curl, Postman,
                    or your own app — using JSON-RPC over HTTP POST. Get the endpoint URL from your MCP administrator.
                  </p>
                </div>

                <div>
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-3">Endpoint</h3>
                  <CodeWindow title="URL" variant="editor">
                    https://your-org-mcp.example.com/mcp
                  </CodeWindow>
                </div>

                <div>
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-3">Required headers</h3>
                  <ul className="space-y-2">
                    {[
                      'Accept: application/json, text/event-stream',
                      'MCP-Protocol-Version: 2025-03-26',
                      'Content-Type: application/json',
                    ].map((h) => (
                      <li key={h} className="font-sans text-sm">
                        {inlineCode(h)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-2">Session management</h3>
                  <p className="font-sans text-[#9ca3af] text-sm leading-relaxed">
                    If the server returns an {inlineCode('Mcp-Session-Id')} header, include it on all subsequent
                    requests. After initialization, send an {inlineCode('initialized')} notification, then use{' '}
                    {inlineCode('tools/list')} and {inlineCode('tools/call')} to discover and invoke tools.
                  </p>
                </div>
              </div>

              {/* Right column — code examples */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-2">Initialize request</h3>
                  <p className="font-sans text-[#9ca3af] text-sm mb-2">
                    Send a JSON-RPC {inlineCode('initialize')} request to start a session:
                  </p>
                  <CodeWindow title="request.json" variant="editor">
                    {initRequest}
                  </CodeWindow>
                </div>

                <div>
                  <h3 className="font-fraunces font-semibold text-white text-lg mb-2">curl example</h3>
                  <p className="font-sans text-[#9ca3af] text-sm mb-2">
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

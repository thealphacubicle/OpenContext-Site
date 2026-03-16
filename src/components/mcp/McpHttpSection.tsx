import { CodeWindow } from './CodeWindow'

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
  return (
    <section id="standard-http" className="section-padding border-t border-[var(--border)]">
      <div className="section-inner">
        <h2 className="font-mono text-xl md:text-2xl font-medium uppercase tracking-wider text-orange mb-6">
          Standard HTTP
        </h2>
        <p className="font-sans text-muted text-base leading-relaxed mb-6 max-w-2xl">
          MCP servers use the Streamable HTTP transport. You can connect from any HTTP client
          — curl, Postman, or your own application — using JSON-RPC over HTTP POST. Get the
          MCP endpoint URL from your MCP administrator or organization.
        </p>

        <div className="space-y-6 max-w-2xl">
          <div>
            <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">Endpoint</h3>
            <p className="font-sans text-muted text-sm mb-2">
              Use the URL provided by your MCP administrator or organization. For example:
            </p>
            <CodeWindow title="URL" variant="editor">
              https://your-org-mcp.example.com/mcp
            </CodeWindow>
          </div>

          <div>
            <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">Required headers</h3>
            <ul className="font-sans text-muted text-sm space-y-1 list-disc list-inside">
              <li>
                <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">Accept: application/json, text/event-stream</code>
              </li>
              <li>
                <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">MCP-Protocol-Version: 2025-03-26</code>
              </li>
              <li>
                <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">Content-Type: application/json</code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">Initialize request</h3>
            <p className="font-sans text-muted text-sm mb-2">
              Send a JSON-RPC <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">initialize</code> request to start a session:
            </p>
            <CodeWindow title="request.json" variant="editor">
              {initRequest}
            </CodeWindow>
          </div>

          <div>
            <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">curl example</h3>
            <p className="font-sans text-muted text-sm mb-2">
              Replace <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">YOUR_MCP_ENDPOINT_URL</code> with the URL from your MCP administrator:
            </p>
            <CodeWindow title="Terminal" variant="terminal">
{`$ curl -X POST "YOUR_MCP_ENDPOINT_URL" \\
  -H "Accept: application/json, text/event-stream" \\
  -H "MCP-Protocol-Version: 2025-03-26" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"http-client","version":"1.0.0"}}}'`}
            </CodeWindow>
          </div>

          <div>
            <h3 className="font-fraunces font-semibold text-navy text-lg mb-2">Session management</h3>
            <p className="font-sans text-muted text-sm leading-relaxed">
              If the server returns an <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">Mcp-Session-Id</code> header in the
              response, include it on all subsequent requests. After initialization, send an{' '}
              <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">initialized</code> notification, then use{' '}
              <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">tools/list</code> and{' '}
              <code className="bg-[var(--chip-muted)] px-1 rounded text-navy">tools/call</code> to discover and invoke tools. The server may
              optionally use Server-Sent Events (SSE) for streaming responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

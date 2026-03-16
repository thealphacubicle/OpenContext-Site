import { McpConnectionHero } from '../components/mcp/McpConnectionHero'
import { McpSetupSection } from '../components/mcp/McpSetupSection'
import { McpHttpSection } from '../components/mcp/McpHttpSection'
import { CodeWindow } from '../components/mcp/CodeWindow'

export function McpConnectionPage() {
  return (
    <>
      <McpConnectionHero />

      <McpSetupSection
        id="claude-pro-web"
        title="Claude Pro (Web)"
        timeEstimate="About 2 minutes. No installation required."
        steps={[
          {
            title: 'Open Claude Settings',
            content: (
              <>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Go to claude.ai and sign in</li>
                  <li>Click your profile icon in the bottom left corner</li>
                  <li>Click Settings</li>
                </ol>
              </>
            ),
          },
          {
            title: 'Add the Remote Connector',
            content: (
              <>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>In the left sidebar, click Integrations</li>
                  <li>Click Add Integration</li>
                  <li>Fill in the fields: Name and URL — get these from your MCP administrator or organization</li>
                  <li>Click Add</li>
                </ol>
              </>
            ),
          },
          {
            title: 'Verify It\'s Working',
            content: (
              <>
                <p className="mb-2">Start a new chat and type: &quot;What MCPs do you have access to?&quot;</p>
                <p>You should see your MCP appear in Claude&apos;s response.</p>
              </>
            ),
          },
        ]}
        troubleshooting={[
          {
            issue: "Can't find the Integrations option in Settings",
            solution: 'This feature requires a Claude Pro account. If you\'re on the free tier, use the Desktop setup guide for your OS instead.',
          },
          {
            issue: "Claude says it doesn't have any MCPs",
            solution: 'Go back to Settings → Integrations and confirm the connector shows as Connected. If it shows an error, double-check the URL from your MCP administrator was pasted exactly.',
          },
        ]}
      />

      <McpSetupSection
        id="claude-pro-desktop"
        title="Claude Pro (Desktop)"
        timeEstimate="About 2 minutes. No terminal commands or installation required."
        steps={[
          {
            title: 'Open Claude Desktop Settings',
            content: (
              <>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Open Claude Desktop on your computer</li>
                  <li>Click your profile icon in the bottom left corner</li>
                  <li>Click Settings</li>
                </ol>
              </>
            ),
          },
          {
            title: 'Add the Remote Connector',
            content: (
              <>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>In the left sidebar, click Integrations</li>
                  <li>Click Add Integration</li>
                  <li>Fill in the fields: Name and URL — get these from your MCP administrator or organization</li>
                  <li>Click Add</li>
                </ol>
              </>
            ),
          },
          {
            title: 'Verify It\'s Working',
            content: (
              <>
                <p className="mb-2">Start a new chat and type: &quot;What MCPs do you have access to?&quot;</p>
                <p>You should see your MCP appear in Claude&apos;s response.</p>
              </>
            ),
          },
        ]}
        troubleshooting={[
          {
            issue: "Can't find the Integrations option in Settings",
            solution: 'This feature requires a Claude Pro account. If you\'re on the free tier, use the Desktop setup guide for your OS instead — Mac, Linux, or Windows.',
          },
          {
            issue: "Claude says it doesn't have any MCPs",
            solution: 'Go back to Settings → Integrations and confirm the connector shows as Connected. If it shows an error, double-check the URL from your MCP administrator was pasted exactly. Then fully quit Claude with Cmd + Q (Mac) or Alt + F4 (Windows), reopen it, and try again.',
          },
        ]}
      />

      <McpSetupSection
        id="claude-desktop-free"
        title="Claude Desktop (Free) — Mac, Linux, Windows"
        timeEstimate="About 10 minutes."
        steps={[
          {
            title: 'Install Node.js',
            content: (
              <>
                <p className="mb-2">Node.js is required for the connection. Go to nodejs.org and download the LTS version.</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Mac:</strong> Download .pkg, run installer, follow prompts</li>
                  <li><strong>Windows:</strong> Download .msi, run installer, then restart your computer</li>
                  <li><strong>Linux (Ubuntu/Debian):</strong> Run the commands below</li>
                </ul>
                <CodeWindow title="Terminal" variant="terminal">
{`$ curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
$ sudo apt-get install -y nodejs`}
                </CodeWindow>
              </>
            ),
          },
          {
            title: 'Install Claude Desktop',
            content: (
              <>
                <p className="mb-2">If you don&apos;t have it:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Go to claude.ai/download and download the version for your OS</li>
                  <li>Install and launch Claude Desktop</li>
                  <li>Sign in with your Anthropic account, or create a free one</li>
                </ol>
              </>
            ),
          },
          {
            title: 'Run the Setup Command',
            content: (
              <>
                <p className="mb-2">Open a terminal (Command Prompt on Windows) and run the setup command provided by your MCP administrator or organization. For example:</p>
                <CodeWindow title="Terminal" variant="terminal">
{`$ npx <your-org>-mcp-setup --claude`}
                </CodeWindow>
                <p className="mt-2 text-sm">Replace <code className="bg-[var(--chip-muted)] px-1 rounded">&lt;your-org&gt;</code> with the package name from your administrator. Wait for the success message. On Windows, you may be prompted to install the package — type y and press Enter.</p>
              </>
            ),
          },
          {
            title: 'Verify It\'s Working',
            content: (
              <>
                <p className="mb-2">Claude Desktop should relaunch automatically. Start a new chat and type: &quot;What MCPs do you have access to?&quot;</p>
                <p>You should see your MCP appear in Claude&apos;s response.</p>
              </>
            ),
          },
        ]}
        troubleshooting={[
          {
            issue: "Terminal says 'command not found' or 'npx' is not recognized",
            solution: 'Node.js didn\'t install correctly. Restart your computer and repeat Step 1. On Windows, a restart is required after installing Node.js.',
          },
          {
            issue: "Claude says it doesn't have any MCPs",
            solution: 'Fully quit Claude (Cmd + Q on Mac, right-click system tray icon → Quit on Windows), then reopen it and try the verification step again.',
          },
          {
            issue: 'Windows Defender or antivirus blocked the command',
            solution: 'Try temporarily disabling your antivirus, run the command, then re-enable it. On managed/work laptops, contact your IT team.',
          },
          {
            issue: 'The setup command printed an error',
            solution: 'Reach out to our MCP development team — we\'re happy to help get you unblocked.',
          },
        ]}
      />

      <McpSetupSection
        id="cursor-ide"
        title="Cursor IDE"
        timeEstimate="About 5 minutes."
        steps={[
          {
            title: 'Install Node.js (if needed)',
            content: (
              <>
                <p className="mb-2">As a Cursor user you likely already have it. If not:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Mac:</strong> Download LTS from nodejs.org, run .pkg</li>
                  <li><strong>Windows:</strong> Download LTS from nodejs.org, run .msi, then restart</li>
                  <li><strong>Linux:</strong> Run the commands below</li>
                </ul>
                <CodeWindow title="Terminal" variant="terminal">
{`$ curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
$ sudo apt-get install -y nodejs`}
                </CodeWindow>
              </>
            ),
          },
          {
            title: 'Run the Setup Command',
            content: (
              <>
                <p className="mb-2">Open a terminal (Command Prompt on Windows) and run the setup command provided by your MCP administrator or organization. For example:</p>
                <CodeWindow title="Terminal" variant="terminal">
{`$ npx <your-org>-mcp-setup --cursor`}
                </CodeWindow>
                <p className="mt-2 text-sm">Replace <code className="bg-[var(--chip-muted)] px-1 rounded">&lt;your-org&gt;</code> with the package name from your administrator. Wait for the success message.</p>
              </>
            ),
          },
          {
            title: 'Restart Cursor',
            content: (
              <>
                <p className="mb-2">Cursor won&apos;t pick up the new config until it&apos;s fully restarted.</p>
                <p className="mt-2">Fully quit Cursor — don&apos;t just close the window. Mac: Cmd + Q. Windows/Linux: Right-click the taskbar icon → Quit. Then reopen Cursor.</p>
              </>
            ),
          },
          {
            title: 'Verify It\'s Working',
            content: (
              <>
                <p className="mb-2">Open a new chat in Cursor&apos;s AI panel and type: &quot;What MCPs do you have access to?&quot;</p>
                <p>You should see your MCP appear in the response.</p>
              </>
            ),
          },
        ]}
        troubleshooting={[
          {
            issue: "Terminal says 'command not found' after running npx",
            solution: 'Node.js didn\'t install correctly. Restart your computer and repeat Step 1.',
          },
          {
            issue: "Cursor doesn't show your MCP",
            solution: 'Make sure you fully quit and restarted Cursor — closing the window is not the same as quitting. Try again after a full restart.',
          },
          {
            issue: 'The setup command printed an error',
            solution: 'Reach out to our MCP development team — we\'re happy to help get you unblocked.',
          },
        ]}
      />

      <McpSetupSection
        id="gemini-cli"
        title="Gemini CLI"
        timeEstimate="About 5 minutes."
        steps={[
          {
            title: 'Install Gemini CLI',
            content: (
              <>
                <p className="mb-2">If you don&apos;t have it:</p>
                <CodeWindow title="Terminal" variant="terminal">
{`$ npm install -g @google/gemini-cli
$ gemini`}
                </CodeWindow>
                <p className="mt-2 text-sm">Follow the prompts to sign in with your Google account.</p>
              </>
            ),
          },
          {
            title: 'Install Node.js (if needed)',
            content: (
              <>
                <p className="mb-2">If the command above worked, you already have Node.js. Otherwise:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Mac:</strong> Download LTS from nodejs.org, run .pkg</li>
                  <li><strong>Windows:</strong> Download LTS from nodejs.org, run .msi, then restart</li>
                  <li><strong>Linux:</strong> Run the commands below</li>
                </ul>
                <CodeWindow title="Terminal" variant="terminal">
{`$ curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
$ sudo apt-get install -y nodejs`}
                </CodeWindow>
              </>
            ),
          },
          {
            title: 'Run the Setup Command',
            content: (
              <>
                <p className="mb-2">Open a terminal and run the setup command provided by your MCP administrator or organization. For example:</p>
                <CodeWindow title="Terminal" variant="terminal">
{`$ npx <your-org>-mcp-setup --gemini`}
                </CodeWindow>
                <p className="mt-2 text-sm">Replace <code className="bg-[var(--chip-muted)] px-1 rounded">&lt;your-org&gt;</code> with the package name from your administrator. Wait for the success message.</p>
              </>
            ),
          },
          {
            title: 'Restart Gemini CLI',
            content: (
              <>
                <p className="mb-2">The config won&apos;t be picked up until Gemini CLI is fully restarted.</p>
                <p className="mt-2">If Gemini CLI is open, type /quit and press Enter to exit. Reopen it by typing <code className="bg-[var(--chip-muted)] px-1 rounded">gemini</code> in your terminal.</p>
              </>
            ),
          },
          {
            title: 'Verify It\'s Working',
            content: (
              <>
                <p className="mb-2">Inside Gemini CLI, type <code className="bg-[var(--chip-muted)] px-1 rounded">/mcp</code>. You should see your MCP listed as a connected server.</p>
                <p className="mt-2">Then try asking a question that uses your organization&apos;s data — if you get real data back, you&apos;re all set.</p>
              </>
            ),
          },
        ]}
        troubleshooting={[
          {
            issue: "Terminal says 'command not found' after running npx",
            solution: 'Node.js didn\'t install correctly. Restart your computer and repeat Step 2.',
          },
          {
            issue: '/mcp shows no servers or your MCP is missing',
            solution: 'Make sure you fully quit and restarted Gemini CLI after running the setup command. Then run /mcp again to check.',
          },
          {
            issue: 'The setup command printed an error',
            solution: 'Reach out to our MCP development team — we\'re happy to help get you unblocked.',
          },
          {
            issue: "Gemini CLI isn't authenticating",
            solution: 'Run gemini auth to reauthenticate with your Google account.',
          },
        ]}
      />

      <McpHttpSection />
    </>
  )
}

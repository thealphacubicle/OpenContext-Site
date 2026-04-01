import { McpConnectionHero } from '../components/mcp/McpConnectionHero'
import { CodeWindow } from '../components/mcp/CodeWindow'

const steps = [
  {
    label: 'Fork the repo',
    content: (
      <p className="font-sans text-muted text-sm leading-relaxed">
        Go to{' '}
        <a
          href="https://github.com/thealphacubicle/OpenContext"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange hover:underline"
        >
          github.com/thealphacubicle/OpenContext
        </a>{' '}
        and click <strong>Fork</strong>. One fork = one MCP server for your organization.
      </p>
    ),
  },
  {
    label: 'Clone & install',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
{`$ git clone https://github.com/<your-username>/OpenContext.git
$ cd OpenContext
$ pip install -e ".[cli]"`}
      </CodeWindow>
    ),
  },
  {
    label: 'Check prerequisites',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
{`$ opencontext authenticate`}
      </CodeWindow>
    ),
  },
  {
    label: 'Configure',
    content: (
      <>
        <CodeWindow title="Terminal" variant="terminal">
{`$ opencontext configure`}
        </CodeWindow>
        <p className="font-sans text-muted text-sm mt-3">
          Interactive wizard — sets up <code className="bg-[var(--chip-muted)] px-1 rounded">config.yaml</code> with
          your data portal type (CKAN, ArcGIS Hub, or Socrata), portal URL, and AWS region.
        </p>
      </>
    ),
  },
  {
    label: 'Validate & deploy',
    content: (
      <>
        <CodeWindow title="Terminal" variant="terminal">
{`$ opencontext validate --env staging
$ opencontext deploy --env staging`}
        </CodeWindow>
        <p className="font-sans text-muted text-sm mt-3">
          After deploy completes, the CLI prints your <strong>API Gateway URL</strong>. Save it.
          When ready for production, re-run with <code className="bg-[var(--chip-muted)] px-1 rounded">--env production</code>.
        </p>
      </>
    ),
  },
  {
    label: 'Monitor',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
{`$ opencontext status --env staging
$ opencontext logs --env staging --follow`}
      </CodeWindow>
    ),
  },
  {
    label: 'Connect to Claude',
    content: (
      <p className="font-sans text-muted text-sm leading-relaxed">
        In Claude Desktop or claude.ai, go to <strong>Settings → Integrations → Add Integration</strong>.
        Paste your API Gateway URL and save.
      </p>
    ),
  },
]

const faq = [
  {
    q: "opencontext command not found",
    a: 'Make sure pip install -e ".[cli]" completed without errors and your Python environment is active.',
  },
  {
    q: 'AWS credentials missing or invalid',
    a: 'Run aws configure and enter your Access Key ID, Secret Access Key, and region. You need permissions for Lambda, API Gateway, IAM roles, and CloudWatch.',
  },
  {
    q: 'Terraform not found',
    a: 'Install Terraform ≥ 1.0 from terraform.io/downloads.',
  },
  {
    q: 'Not sure which plugin to use',
    a: "Check your portal. CKAN portals often say \"CKAN\" in the URL or footer. ArcGIS Hub sites are usually at hub.arcgis.com or a city subdomain. Socrata portals say \"Powered by Socrata\" in the footer.",
  },
  {
    q: 'Deploy fails partway through',
    a: 'Run opencontext status --env staging to see what was created. You can safely re-run the deploy command — Terraform is idempotent.',
  },
  {
    q: 'Claude does not see any tools from your MCP',
    a: 'Confirm the API Gateway URL with opencontext status --env staging, then check it was pasted correctly in Claude settings.',
  },
  {
    q: 'Errors in logs after connecting',
    a: 'Run opencontext logs --env staging --follow while triggering a request in Claude. Common causes: portal URL wrong, API key invalid, or lambda_timeout too low for large datasets.',
  },
  {
    q: 'Tear down the deployment',
    a: 'Run opencontext destroy --env staging. You will be prompted to type the environment name to confirm.',
  },
]

export function McpConnectionPage() {
  return (
    <>
      <McpConnectionHero />

      {/* Steps */}
      <section className="py-14 md:py-20">
        <div className="section-inner max-w-2xl">
          <ol className="relative">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1
              return (
                <li key={i} className="flex gap-5">
                  {/* Number + connecting line */}
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-7 h-7 rounded-full border border-[var(--border)] bg-[#f0ebe3] flex items-center justify-center font-mono text-xs font-semibold text-navy">
                      {i + 1}
                    </span>
                    {!isLast && (
                      <div className="w-px flex-1 bg-[var(--border)] my-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 min-w-0 ${isLast ? '' : 'pb-8'}`}>
                    <h2 className="font-fraunces font-semibold text-navy text-base mb-2 mt-0.5">
                      {step.label}
                    </h2>
                    {step.content}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 border-t border-[var(--border)]">
        <div className="section-inner max-w-2xl">
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-orange mb-5">
            Troubleshooting & FAQ
          </h2>
          <div className="divide-y divide-[var(--border)] border border-[var(--border)] rounded">
            {faq.map((item, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none px-4 py-3.5 font-sans text-sm font-medium text-navy [&::-webkit-details-marker]:hidden hover:bg-[#f0ebe3] transition-colors duration-100 rounded-sm">
                  <span>{item.q}</span>
                  <span className="text-muted text-lg leading-none font-light shrink-0 group-open:rotate-45 transition-transform duration-150 inline-block">
                    +
                  </span>
                </summary>
                <p className="px-4 pt-0 pb-4 font-sans text-muted text-sm leading-relaxed border-t border-[var(--border)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

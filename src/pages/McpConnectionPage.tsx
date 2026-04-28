import { useState } from 'react'
import { McpConnectionHero } from '../components/mcp/McpConnectionHero'
import { CodeWindow } from '../components/mcp/CodeWindow'
import { McpHttpSection } from '../components/mcp/McpHttpSection'

const steps = [
  {
    number: 1,
    label: 'Get your own copy',
    short: 'Make a personal copy of OpenContext on GitHub — takes 10 seconds.',
    long: 'Fork on GitHub to get a repository you control. Configure and deploy from your account. No code is required for this step.',
    content: (
      <a
        href="https://github.com/thealphacubicle/OpenContext"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wide text-action hover:text-action-hover hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm"
      >
        Fork the repo on GitHub →
      </a>
    ),
  },
  {
    number: 2,
    label: 'Download & set up',
    short: 'Download your copy to your computer and install the required tools.',
    long: 'Clone your fork, enter the project directory, and install dependencies with pip. Expect about two minutes on a typical connection.',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
        {`$ git clone https://github.com/thealphacubicle/OpenContext.git\n$ cd OpenContext\n$ pip install -e ".[cli]"`}
      </CodeWindow>
    ),
  },
  {
    number: 3,
    label: 'Sign in',
    short: 'Connect OpenContext to your cloud account so it knows where to deploy.',
    long: 'OpenContext deploys on AWS. This step links credentials locally so the CLI can provision resources. Secrets stay on your machine.',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
        {'$ opencontext authenticate'}
      </CodeWindow>
    ),
  },
  {
    number: 4,
    label: 'Tell it about your data',
    short: 'Answer three quick questions about your data portal.',
    long:
      'The wizard captures portal type (CKAN, Socrata, or ArcGIS), base URL, and region. Use the OpenContext CLI to setup, authenticate, and manage your MCP deployment.',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
        {'$ opencontext configure'}
      </CodeWindow>
    ),
  },
  {
    number: 5,
    label: 'Go live',
    short: 'Test in a safe environment first, then launch to production.',
    long: 'Deploy to staging before production. OpenContext validates configuration before each deploy. When staging checks pass, promote with the same command and the production flag.',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
        {'$ opencontext validate --env staging\n$ opencontext deploy --env staging'}
      </CodeWindow>
    ),
  },
  {
    number: 6,
    label: 'Check it\'s healthy',
    short: 'Confirm your server is running and peek at its activity logs.',
    long: 'Use status for availability and logs for streaming output when you need to diagnose behavior.',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
        {'$ opencontext status --env staging\n$ opencontext logs --env staging --follow'}
      </CodeWindow>
    ),
  },
  {
    number: 7,
    label: 'Plug into Claude',
    short: 'Paste your server URL into Claude\'s settings — and you\'re done.',
    long: 'In Claude Desktop or claude.ai, open Settings → Integrations → Add Integration. Paste the deployment URL from step five.',
    content: (
      <p className="font-sans text-ink-body text-sm leading-relaxed">
        Navigate to <strong className="text-boston-charles">Settings → Integrations → Add Integration</strong> and paste
        your deployment URL. Claude can answer questions like “How many potholes were reported last month?” from live
        open data.
      </p>
    ),
  },
]

function StepAccordion({
  step,
  isOpen,
  onToggle,
}: {
  step: (typeof steps)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`rounded-card border transition-colors ${
        isOpen ? 'bg-action-muted border-action/35' : 'bg-surface border-line hover:border-boston-blueMuted'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-5 px-5 py-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 rounded-t-md"
        aria-expanded={isOpen}
      >
        <span
          className={`flex-shrink-0 flex items-center justify-center w-9 h-9 font-mono font-semibold text-sm rounded-full border transition-colors ${
            isOpen
              ? 'border-action text-action bg-surface'
              : 'border-boston-optimistic/45 text-boston-optimistic bg-surface-muted'
          }`}
        >
          {String(step.number).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          <p className="font-heading font-extrabold text-boston-charles text-base leading-snug mb-0.5 uppercase tracking-tight">
            {step.label}
          </p>
          <p className="font-sans text-ink-muted text-sm leading-snug truncate">{step.short}</p>
        </div>

        <span
          className="flex-shrink-0 flex items-center justify-center w-7 h-7 ml-2 text-action transition-transform"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-6 animate-fade-up border-t border-line">
          <div className="pl-0 md:pl-14">
            <p className="font-sans text-ink-body text-sm leading-relaxed mt-4 mb-5">{step.long}</p>
            <div className="min-w-0">{step.content}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export function McpConnectionPage() {
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set())

  function toggle(n: number) {
    setOpenSteps((prev) => {
      const next = new Set(prev)
      next.has(n) ? next.delete(n) : next.add(n)
      return next
    })
  }

  return (
    <>
      <McpConnectionHero />

      <section id="steps" className="py-14 md:py-20 border-t border-line bg-surface">
        <div className="section-inner">
          <div className="reveal text-center md:text-left mb-12">
            <p className="eyebrow mb-3">The guide</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-boston-charles leading-tight uppercase tracking-tight">
              Seven simple steps
            </h2>
            <p className="font-sans text-ink-body mt-4 max-w-md mx-auto md:mx-0">
              Open any step for commands and context. Plain language first, details on demand.
            </p>
          </div>

          <div className="space-y-3 max-w-2xl">
            {steps.map((step) => (
              <StepAccordion
                key={step.number}
                step={step}
                isOpen={openSteps.has(step.number)}
                onToggle={() => toggle(step.number)}
              />
            ))}
          </div>

          <div className="reveal mt-12 flex items-start gap-4 p-6 max-w-2xl bg-action-muted border border-action/35 rounded-card">
            <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-surface border border-action/35 text-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div>
              <p className="font-heading font-extrabold text-boston-charles text-lg mb-1 uppercase tracking-tight">
                You&apos;re connected
              </p>
              <p className="font-sans text-ink-body text-sm leading-relaxed">
                Claude can answer operational questions from real datasets — for example, 311 volume by neighborhood or
                pothole counts — without a separate analytics export.
              </p>
            </div>
          </div>
        </div>
      </section>

      <McpHttpSection />
    </>
  )
}

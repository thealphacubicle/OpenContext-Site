import { useState } from 'react'
import { McpConnectionHero } from '../components/mcp/McpConnectionHero'
import { CodeWindow } from '../components/mcp/CodeWindow'

/* ─── Steps data ────────────────────────────────────────────────────── */

const steps = [
  {
    number: 1,
    label: 'Get your own copy',
    short: 'Make a personal copy of OpenContext on GitHub — takes 10 seconds.',
    long: 'Think of this like copying a recipe card. Click "Fork" on GitHub to get your own version of the project that you can configure and deploy yourself. No coding needed for this part.',
    content: (
      <a
        href="https://github.com/thealphacubicle/OpenContext"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-sm text-[#ff6b2b] hover:underline"
      >
        Fork the repo on GitHub →
      </a>
    ),
  },
  {
    number: 2,
    label: 'Download & set up',
    short: 'Download your copy to your computer and install the required tools.',
    long: 'Once you have your fork, download it to your computer and run three commands to install everything OpenContext needs to run. This takes about two minutes on a normal internet connection.',
    content: (
      <CodeWindow title="Terminal" variant="terminal">
        {`$ git clone https://github.com/<your-username>/OpenContext.git\n$ cd OpenContext\n$ pip install -e ".[cli]"`}
      </CodeWindow>
    ),
  },
  {
    number: 3,
    label: 'Sign in',
    short: 'Connect OpenContext to your cloud account so it knows where to deploy.',
    long: 'OpenContext deploys to AWS (Amazon\'s cloud platform). This step links your AWS account so the tool knows where to send everything. Your credentials stay on your machine and are never stored anywhere else.',
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
    long: 'A short setup wizard asks you: what kind of data portal you have (CKAN, Socrata, or ArcGIS), where it lives online (the URL), and which cloud region to use. That\'s the entire configuration — no config files to hand-edit.',
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
    long: "Always deploy to a \"staging\" environment before going live — it's an identical copy of production that real users won't see. OpenContext validates your configuration before each deploy. When staging looks good, run the same command with \"--env production\" and you'll get a live URL to save.",
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
    long: "A quick sanity check after deploying. The status command tells you whether your server is up, and the logs command shows you a live feed of what it's doing — useful if anything ever looks off.",
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
    long: 'In Claude Desktop or claude.ai, go to Settings → Integrations → Add Integration. Paste the URL you received in Step 5. Claude will immediately be able to search and answer questions about your city\'s open data — no extra setup required.',
    content: (
      <p className="font-sans text-[#9ca3af] text-sm leading-relaxed">
        Navigate to <strong className="text-white">Settings → Integrations → Add Integration</strong> and
        paste your deployment URL. Claude can now answer questions like "How many potholes were reported
        last month?" straight from your city's live data.
      </p>
    ),
  },
]

/* ─── Accordion step ────────────────────────────────────────────────── */

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
      style={{
        background: isOpen ? 'rgba(255,107,43,0.03)' : '#0f0f0f',
        border: `1px solid ${isOpen ? 'rgba(255,107,43,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '4px',
        transition: 'border-color 0.2s ease, background 0.2s ease',
      }}
    >
      {/* Collapsed header — always visible */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-5 px-5 py-4 text-left group"
        aria-expanded={isOpen}
      >
        {/* Step number circle */}
        <span
          className="flex-shrink-0 flex items-center justify-center w-9 h-9 font-mono font-semibold text-sm"
          style={{
            border: `1.5px solid ${isOpen ? 'rgba(255,107,43,0.6)' : 'rgba(255,107,43,0.3)'}`,
            borderRadius: '50%',
            color: '#ff6b2b',
            background: isOpen ? 'rgba(255,107,43,0.1)' : 'transparent',
            transition: 'border-color 0.2s ease, background 0.2s ease',
            flexShrink: 0,
          }}
        >
          {String(step.number).padStart(2, '0')}
        </span>

        {/* Label + short description */}
        <div className="flex-1 min-w-0">
          <p className="font-fraunces text-white font-semibold text-base leading-snug mb-0.5">
            {step.label}
          </p>
          <p className="font-sans text-[#6b7280] text-sm leading-snug truncate">
            {step.short}
          </p>
        </div>

        {/* Chevron */}
        <span
          className="flex-shrink-0 flex items-center justify-center w-7 h-7 ml-2"
          style={{
            color: isOpen ? '#ff6b2b' : '#6b7280',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease, color 0.2s ease',
          }}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {/* Expanded body */}
      {isOpen && (
        <div
          className="px-5 pb-6 animate-fade-up"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="pl-14">
            <p className="font-sans text-[#9ca3af] text-sm leading-relaxed mt-4 mb-5">
              {step.long}
            </p>
            <div className="min-w-0">{step.content}</div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────── */

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

      {/* ── Accordion steps ──────────────────────────────────────── */}
      <section id="steps" className="py-14 md:py-20 border-t border-white/5">
        <div className="section-inner">
          {/* Section heading */}
          <div className="reveal text-center md:text-left mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[#ff6b2b] mb-3">
              The guide
            </p>
            <h2 className="font-fraunces text-4xl md:text-5xl font-light text-white leading-tight">
              Seven simple steps.
            </h2>
            <p className="font-sans text-[#9ca3af] mt-4 max-w-md mx-auto md:mx-0">
              No jargon. No surprises. Open any step for the full details and commands.
            </p>
          </div>

          {/* Accordion list */}
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

          {/* Completion callout */}
          <div
            className="reveal mt-12 flex items-start gap-4 p-6 max-w-2xl"
            style={{
              background: 'rgba(255,107,43,0.05)',
              border: '1px solid rgba(255,107,43,0.2)',
              borderRadius: '4px',
            }}
          >
            <span
              className="flex-shrink-0 flex items-center justify-center w-10 h-10"
              style={{
                background: 'rgba(255,107,43,0.1)',
                border: '1px solid rgba(255,107,43,0.3)',
                borderRadius: '50%',
                color: '#ff6b2b',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div>
              <p className="font-fraunces text-white font-semibold text-lg mb-1">
                You're connected.
              </p>
              <p className="font-sans text-[#9ca3af] text-sm leading-relaxed">
                From here, Claude can instantly answer questions like "How many potholes were reported
                last month?" or "Which neighborhoods filed the most 311 requests?" — straight from your
                city's real data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

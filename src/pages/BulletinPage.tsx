import { useEffect, useState, type FormEvent } from 'react'

type BulletinEntry = {
  id?: string
  commits: string[]
  pusher: string
  timestamp: string
  compare_url: string
}

function bulletinEntryFromRow(row: Record<string, unknown>): BulletinEntry | null {
  if (
    typeof row.pusher !== 'string' ||
    typeof row.timestamp !== 'string' ||
    typeof row.compare_url !== 'string'
  ) {
    return null
  }
  const rawCommits = row.commits
  if (!Array.isArray(rawCommits) || !rawCommits.every((c): c is string => typeof c === 'string')) {
    return null
  }
  return {
    id: typeof row.id === 'string' ? row.id : undefined,
    commits: rawCommits,
    pusher: row.pusher,
    timestamp: row.timestamp,
    compare_url: row.compare_url,
  }
}

async function fetchEntries(signal?: AbortSignal): Promise<BulletinEntry[]> {
  const res = await fetch('/api/bulletin/entries', { signal })
  if (!res.ok) {
    throw new Error('Failed to load updates')
  }
  const json: unknown = await res.json()
  if (!json || typeof json !== 'object') {
    return []
  }
  const entriesUnknown = (json as Record<string, unknown>).entries
  if (!Array.isArray(entriesUnknown)) {
    return []
  }
  const out: BulletinEntry[] = []
  for (const item of entriesUnknown) {
    if (!item || typeof item !== 'object') {
      continue
    }
    const parsed = bulletinEntryFromRow(item as Record<string, unknown>)
    if (parsed) {
      out.push(parsed)
    }
  }
  return out
}

function formatDate(isoTimestamp: string): string {
  const d = new Date(isoTimestamp)
  if (Number.isNaN(d.getTime())) {
    return isoTimestamp
  }
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function Spinner() {
  return (
    <div className="flex justify-center py-16" role="status" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <span className="h-10 w-10 rounded-full border-2 border-action/25 border-t-action animate-spin" />
    </div>
  )
}

export function BulletinPage() {
  const [entries, setEntries] = useState<BulletinEntry[] | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [webhookUrl, setWebhookUrl] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    const ac = new AbortController()
    setLoadError(null)
    setEntries(null)

    fetchEntries(ac.signal)
      .then((data) => {
        setEntries(data)
      })
      .catch((err: unknown) => {
        if ((err as { name?: string }).name === 'AbortError') {
          return
        }
        setLoadError(err instanceof Error ? err.message : 'Something went wrong while loading.')
        setEntries([])
      })

    return () => ac.abort()
  }, [])

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()
    setFormSuccess(null)
    setFormError(null)
    setSubmitting(true)

    try {
      const res = await fetch('/api/bulletin/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ webhook_url: webhookUrl, name }),
      })

      let body: unknown
      try {
        body = await res.json()
      } catch {
        body = {}
      }

      if (!res.ok) {
        const msg =
          body &&
          typeof body === 'object' &&
          typeof (body as Record<string, unknown>).error === 'string'
            ? ((body as Record<string, unknown>).error as string)
            : `Request failed (${res.status})`
        setFormError(msg)
        return
      }

      setFormSuccess(
        "You're subscribed — we'll ping this webhook when new commits hit main.",
      )
      setWebhookUrl('')
      setName('')
    } catch {
      setFormError('Network error — try again in a moment.')
    } finally {
      setSubmitting(false)
    }
  }

  const loading = entries === null && !loadError
  const totalCommits = entries?.reduce((sum, entry) => sum + entry.commits.length, 0) ?? 0

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="section-inner relative py-14 md:py-20">
          <div className="reveal max-w-3xl">
            <p className="eyebrow mb-3">Shipping log</p>
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-boston-charles leading-tight uppercase tracking-tight">
              Bulletin
            </h1>
            <p className="font-sans text-ink-body mt-5 max-w-2xl text-base md:text-lg leading-relaxed">
              Track recent merges to `main`, see what changed at a glance, and subscribe a webhook for instant Slack alerts when new commits land.
            </p>
          </div>

          <div className="reveal reveal-delay-1 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="rounded-card border border-line bg-surface px-4 py-4">
              <p className="font-sans text-xs uppercase tracking-wider text-ink-muted mb-1">Updates</p>
              <p className="font-heading font-extrabold text-2xl text-boston-charles">{entries?.length ?? '—'}</p>
            </div>
            <div className="rounded-card border border-line bg-surface px-4 py-4">
              <p className="font-sans text-xs uppercase tracking-wider text-ink-muted mb-1">Commit notes</p>
              <p className="font-heading font-extrabold text-2xl text-boston-charles">{entries ? totalCommits : '—'}</p>
            </div>
            <div className="rounded-card border border-line bg-surface px-4 py-4">
              <p className="font-sans text-xs uppercase tracking-wider text-ink-muted mb-1">Delivery</p>
              <p className="font-heading font-extrabold text-2xl text-action">Realtime</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line bg-surface-muted">
        <div className="section-inner">
          <div className="reveal mb-10">
            <p className="eyebrow mb-3">Changelog</p>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-boston-charles leading-tight uppercase tracking-tight mb-3">
              Feed
            </h2>
            <p className="font-sans text-ink-body max-w-2xl">
              Every entry is sourced from pushes to `main` and includes commit summaries plus a direct compare link.
            </p>
          </div>

          {loading && <Spinner />}

          {loadError && !loading && (
            <div className="rounded-card border border-boston-freedom/40 bg-surface px-6 py-5 max-w-2xl">
              <p className="font-heading font-bold text-boston-charles text-sm uppercase tracking-wide mb-1">
                Couldn&apos;t load the feed
              </p>
              <p className="font-sans text-ink-body text-sm leading-relaxed">{loadError}</p>
            </div>
          )}

          {!loading && !loadError && entries!.length === 0 && (
            <div className="rounded-card border border-line bg-surface px-6 py-10 text-center max-w-xl mx-auto">
              <p className="font-sans text-ink-body leading-relaxed">No updates yet — check back soon.</p>
            </div>
          )}

          {!loading && !loadError && entries!.length > 0 && (
            <div className="relative max-w-3xl">
              <div className="absolute left-[11px] top-2 bottom-2 w-px timeline-line" aria-hidden />
              <ul className="space-y-5">
                {entries!.map((entry, index) => (
                  <li key={entry.id ?? `${entry.timestamp}-${index}`} className="relative pl-10">
                    <span
                      className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-action bg-surface flex items-center justify-center shadow-sm"
                      aria-hidden
                    >
                      <span className="w-2 h-2 rounded-full bg-action" />
                    </span>
                    <div className="rounded-card border border-line bg-surface px-5 py-5 card-hover">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <p className="font-heading font-extrabold text-boston-charles text-base uppercase tracking-tight">
                          {entry.pusher}
                        </p>
                        <p className="font-sans text-ink-muted text-xs uppercase tracking-wider whitespace-nowrap">
                          {formatDate(entry.timestamp)}
                        </p>
                      </div>
                      {entry.commits.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1.5 font-sans text-ink-body text-sm leading-relaxed mb-4">
                          {entry.commits.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      )}
                      <a
                        href={entry.compare_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-heading font-bold text-sm uppercase tracking-wide text-action hover:text-action-hover hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-sm"
                      >
                        View changes
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 md:py-20 border-t border-line bg-surface">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 items-start">
            <div className="reveal">
              <p className="eyebrow mb-3">Alerts</p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-boston-charles leading-tight uppercase tracking-tight">
                Subscribe via webhook
              </h2>
              <p className="font-sans text-ink-body mt-3 max-w-xl leading-relaxed">
                Add a Slack incoming webhook URL and a name for your destination. We send concise notifications whenever new commits hit `main`.
              </p>
              <div className="mt-6 rounded-card border border-line bg-surface-muted px-4 py-4">
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-boston-charles mb-2">What you get</p>
                <ul className="font-sans text-sm text-ink-body space-y-1.5">
                  <li>- Commit summaries</li>
                  <li>- Who pushed and when</li>
                  <li>- Direct compare links</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="reveal reveal-delay-1 rounded-card border border-line bg-surface px-5 py-6 md:px-6 md:py-7 space-y-5 shadow-sm">
              <div>
                <label
                  htmlFor="bulletin-webhook"
                  className="block font-heading text-xs font-bold uppercase tracking-wider text-boston-charles mb-2"
                >
                  Webhook URL
                </label>
                <input
                  id="bulletin-webhook"
                  type="url"
                  name="webhook_url"
                  autoComplete="url"
                  placeholder="https://hooks.slack.com/..."
                  value={webhookUrl}
                  onChange={(ev) => setWebhookUrl(ev.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-card border border-line bg-surface font-sans text-sm text-ink placeholder:text-ink-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:border-action"
                />
              </div>
              <div>
                <label
                  htmlFor="bulletin-name"
                  className="block font-heading text-xs font-bold uppercase tracking-wider text-boston-charles mb-2"
                >
                  Name
                </label>
                <input
                  id="bulletin-name"
                  type="text"
                  name="name"
                  placeholder="My Slack workspace"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-card border border-line bg-surface font-sans text-sm text-ink placeholder:text-ink-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:border-action"
                />
              </div>

              {formSuccess && (
                <div className="rounded-card border border-action/35 bg-action-muted px-4 py-3">
                  <p className="font-sans text-ink-body text-sm leading-relaxed">{formSuccess}</p>
                </div>
              )}
              {formError && (
                <div className="rounded-card border border-boston-freedom/35 bg-surface-muted px-4 py-3">
                  <p className="font-sans text-ink-body text-sm leading-relaxed">{formError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex justify-center px-6 py-3 bg-action text-white text-sm font-heading font-bold uppercase tracking-wider rounded-cta transition-colors duration-200 hover:bg-action-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none"
              >
                {submitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

import { cn } from '@/lib/utils'

export function Section({
  id,
  className,
  children,
  band = false,
  muted = false,
  flush = false,
}: {
  id?: string
  className?: string
  children: React.ReactNode
  band?: boolean
  muted?: boolean
  /** Skip max-width container — use when nested inside an already-centered column */
  flush?: boolean
}) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding border-t border-border',
        band && 'bg-charles-band text-white border-white/10',
        muted && !band && 'bg-muted',
        !band && !muted && 'bg-background',
        className,
      )}
    >
      {flush ? children : <div className="section-inner">{children}</div>}
    </section>
  )
}

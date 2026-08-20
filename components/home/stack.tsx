'use client'

import { Cloud, Database } from 'lucide-react'
import { stack } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const dataPlatforms = stack.platforms.filter((p) => p.kind === 'data')
const cloudProviders = stack.platforms.filter((p) => p.kind === 'cloud')

function PlatformRow({
  name,
  status,
  description,
  icon: Icon,
}: {
  name: string
  status: 'Live' | 'Soon'
  description?: string
  icon: typeof Database
}) {
  const live = status === 'Live'

  return (
    <Card
      className={cn(
        'border-border bg-background shadow-sm',
        live ? 'border-primary/20' : 'opacity-90',
      )}
    >
      <CardContent className="flex items-start gap-3 p-4">
        <span
          className={cn(
            'mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border',
            live
              ? 'border-primary/30 bg-accent text-primary'
              : 'border-border bg-muted text-blue-muted',
          )}
        >
          <Icon className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              {name}
            </p>
            <Badge
              variant={live ? 'default' : 'outline'}
              className={cn(
                'font-mono text-[10px] uppercase',
                live && 'border-primary/30 bg-accent text-primary hover:bg-accent',
              )}
            >
              {status}
            </Badge>
          </div>
          {description ? (
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">{description}</p>
          ) : (
            <p className="font-sans text-sm text-blue-muted">On the roadmap.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function CategoryAccordion({
  value,
  title,
  summary,
  icon: Icon,
  platforms,
  defaultOpen,
}: {
  value: string
  title: string
  summary: string
  icon: typeof Database
  platforms: typeof dataPlatforms | typeof cloudProviders
  defaultOpen?: boolean
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? value : undefined}
      className="min-w-0 w-full"
    >
      <AccordionItem
        value={value}
        className="rounded-xl border border-border bg-muted/40 px-5 shadow-sm data-[state=open]:border-primary/35 data-[state=open]:bg-accent/30"
      >
        <AccordionTrigger className="gap-4 py-5 hover:no-underline">
          <div className="flex flex-1 items-center gap-3 text-left">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-background text-primary">
              <Icon className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="font-heading text-base font-extrabold tracking-tight text-foreground">
                {title}
              </p>
              <p className="font-sans text-sm text-blue-muted">{summary}</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="border-t border-border pb-5">
          <div className="grid grid-cols-1 gap-3 pt-4">
            {platforms.map((p) => (
              <PlatformRow
                key={p.name}
                name={p.name}
                status={p.status}
                description={p.description}
                icon={Icon}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function Stack() {
  return (
    <section className="section-padding border-t border-border bg-background">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow mb-3">{stack.eyebrow}</p>
          <h2 className="mb-3 max-w-xl font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {stack.headline}
          </h2>
          <p className="mb-10 max-w-lg font-sans text-sm text-muted-foreground">
            Expand a category to see what’s live and what’s coming next.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 md:items-start">
            <CategoryAccordion
              value="data"
              title="Data portals"
              summary="CKAN · Socrata · ArcGIS — all live"
              icon={Database}
              platforms={dataPlatforms}
              defaultOpen
            />
            <CategoryAccordion
              value="cloud"
              title="Cloud"
              summary="AWS live · GCP & Azure soon"
              icon={Cloud}
              platforms={cloudProviders}
              defaultOpen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

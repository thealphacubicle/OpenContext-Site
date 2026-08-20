'use client'

import { Check, ExternalLink } from 'lucide-react'
import { GITHUB_DOCS, GITHUB_URL, guide, guideSteps } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { CodeBlock } from '@/components/site/code-block'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function GuideSteps() {
  return (
    <section id="steps" className="section-padding border-t border-border bg-background">
      <div className="section-inner">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">{guide.eyebrow}</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {guide.headline}
            </h2>
            <p className="mt-4 font-sans text-muted-foreground">{guide.body}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Accordion type="multiple" defaultValue={['step-1']} className="w-full max-w-3xl space-y-3">
            {guideSteps.map((step) => (
              <AccordionItem
                key={step.number}
                value={`step-${step.number}`}
                className="rounded-xl border border-border bg-card px-5 shadow-sm data-[state=open]:border-primary/40 data-[state=open]:bg-accent/50"
              >
                <AccordionTrigger className="gap-4 py-4 hover:no-underline">
                  <div className="flex flex-1 items-center gap-4 text-left">
                    <Badge
                      variant="outline"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border-primary/45 bg-background p-0 font-mono text-sm font-semibold text-primary"
                    >
                      {String(step.number).padStart(2, '0')}
                    </Badge>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-base font-extrabold tracking-tight text-foreground">
                        {step.label}
                      </p>
                      <p className="truncate font-sans text-sm text-blue-muted">{step.short}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-t border-border pb-5">
                  <div className="space-y-4 pt-4 md:pl-14">
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step.long}</p>
                    {step.type === 'link' && (
                      <Button asChild variant="outline" size="sm" className="font-heading font-semibold">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                          {step.linkLabel}
                          <ExternalLink className="size-3.5" />
                        </a>
                      </Button>
                    )}
                    {step.type === 'terminal' && step.code && (
                      <CodeBlock title="Terminal" variant="terminal">
                        {step.code}
                      </CodeBlock>
                    )}
                    {step.type === 'note' && 'note' in step && step.note && (
                      <p className="rounded-lg border border-border bg-muted px-4 py-3 font-sans text-sm leading-relaxed text-muted-foreground">
                        {step.note}
                      </p>
                    )}
                    {'doc' in step && step.doc && (
                      <a
                        href={`${GITHUB_DOCS}/${step.doc.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-primary no-underline hover:underline"
                      >
                        More in {step.doc.label}
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.1}>
          <Alert className="mt-10 max-w-3xl border-primary/35 bg-accent">
            <Check className="size-4 text-primary" />
            <AlertTitle className="font-heading text-lg font-extrabold tracking-tight text-foreground">
              {guide.successTitle}
            </AlertTitle>
            <AlertDescription className="font-sans text-sm leading-relaxed text-muted-foreground">
              {guide.successBody}
            </AlertDescription>
          </Alert>
        </Reveal>
      </div>
    </section>
  )
}

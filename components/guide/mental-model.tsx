'use client'

import { ArrowRight } from 'lucide-react'
import { mentalModel } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function MentalModel() {
  return (
    <section className="section-padding border-t border-border bg-background">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">{mentalModel.eyebrow}</p>
            <h2 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              {mentalModel.headline}
            </h2>
            <p className="max-w-md font-sans text-base leading-relaxed text-muted-foreground">
              {mentalModel.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <p className="eyebrow mb-1">Rule of thumb</p>
                <CardTitle className="font-heading text-lg font-extrabold tracking-tight text-foreground">
                  Keep deployments simple
                </CardTitle>
                <CardDescription className="font-sans text-sm leading-relaxed">
                  {mentalModel.rule}
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-border bg-muted px-3 py-2.5 font-mono text-xs font-medium text-foreground">
                    OpenContext
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden />
                  <span className="rounded-md border border-primary/30 bg-accent px-3 py-2.5 font-mono text-xs font-medium text-foreground">
                    One data portal
                  </span>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

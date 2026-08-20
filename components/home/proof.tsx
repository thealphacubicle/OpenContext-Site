'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { proof } from '@/lib/content'
import { Reveal } from '@/components/site/reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, scale: 0.94 }}
      animate={reduce || inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
    >
      <Card className="h-full border-border bg-background text-center shadow-sm">
        <CardContent className="p-6">
          <p className="mb-2 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {value}
          </p>
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Proof() {
  return (
    <section id="partner" className="section-padding relative overflow-hidden border-t border-border bg-muted">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />
      <div className="section-inner relative z-10">
        <Reveal>
          <p className="eyebrow mb-3">{proof.eyebrow}</p>
          <h2 className="mb-4 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {proof.headline}
          </h2>
          <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground">
            {proof.body}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="mb-8 overflow-hidden border-border bg-background shadow-sm">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
              <div className="min-w-0 flex-1">
                <p className="eyebrow mb-4">{proof.attribution}</p>
                <blockquote className="max-w-2xl font-sans text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                  {proof.quote}
                </blockquote>
              </div>
              <Button asChild className="shrink-0 font-heading font-semibold">
                <a href={proof.articleUrl} target="_blank" rel="noopener noreferrer">
                  {proof.articleLabel}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {proof.stats.map((stat, i) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, Github } from 'lucide-react'
import { GITHUB_URL, guideHero } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function GuideHero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-border bg-grid bg-muted">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(24, 113, 189, 0.14) 0%, transparent 65%)',
        }}
        aria-hidden
      />
      <div className="section-inner relative z-10 py-20 md:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-6">{guideHero.eyebrow}</p>
        </motion.div>

        <motion.h1
          className="mb-5 max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {guideHero.headline}
        </motion.h1>

        <motion.p
          className="mb-8 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          {guideHero.body}
        </motion.p>

        <motion.div
          className="mb-10 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <Button asChild size="lg" className="font-heading font-semibold">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              {guideHero.primaryCta}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-heading font-semibold">
            <Link href="#steps">
              {guideHero.secondaryCta}
              <ArrowDown className="size-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-2"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          <span className="mr-1 font-heading text-xs font-bold uppercase tracking-wider text-blue-muted">
            {guideHero.needLabel}
          </span>
          {guideHero.requirements.map((req) => (
            <Badge
              key={req}
              variant="outline"
              className="rounded-md border-border bg-background px-3 py-1.5 font-mono text-xs font-normal text-muted-foreground"
            >
              {req}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

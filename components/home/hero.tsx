'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Github } from 'lucide-react'
import { BOSTON_ARTICLE_URL, GITHUB_URL, hero } from '@/lib/content'
import { Button } from '@/components/ui/button'

export function HomeHero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden border-b border-border bg-grid bg-muted">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(24, 113, 189, 0.16) 0%, transparent 60%)',
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 size-[28rem] rounded-full bg-primary/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-20 bottom-0 size-[22rem] rounded-full bg-foreground/5 blur-3xl"
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <div className="section-inner relative z-10 py-24 md:py-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-8">{hero.eyebrow}</p>
        </motion.div>

        <motion.h1
          className="mb-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
        >
          {hero.headlineBefore}{' '}
          <span className="text-gradient">{hero.headlineEmphasis}</span>
        </motion.h1>

        <motion.p
          className="mb-10 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
        >
          {hero.body}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: 'easeOut' }}
        >
          <Button asChild size="lg" className="font-heading font-semibold">
            <Link href="/how-it-works">
              {hero.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-heading font-semibold">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
              {hero.secondaryCta}
            </a>
          </Button>
        </motion.div>

        <motion.p
          className="mt-8 font-sans text-sm text-blue-muted"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.32 }}
        >
          <a
            href={BOSTON_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            {hero.partnership}
          </a>
        </motion.p>
      </div>
    </section>
  )
}

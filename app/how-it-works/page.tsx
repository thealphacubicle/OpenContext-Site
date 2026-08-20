import type { Metadata } from 'next'
import { GuideHero } from '@/components/guide/guide-hero'
import { MentalModel } from '@/components/guide/mental-model'
import { Pipeline } from '@/components/guide/pipeline'
import { GuideSteps } from '@/components/guide/guide-steps'
import { FurtherReading } from '@/components/guide/further-reading'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: `How it works — ${site.name}`,
  description:
    'Connect your city open data portal to Claude in about 15 minutes with OpenContext. Plain-language setup steps with links to full GitHub docs.',
}

export default function HowItWorksPage() {
  return (
    <>
      <GuideHero />
      <MentalModel />
      <Pipeline />
      <GuideSteps />
      <FurtherReading />
    </>
  )
}

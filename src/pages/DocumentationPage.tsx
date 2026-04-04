import { DocsHero } from '../components/docs/DocsHero'
import { ConnectionFlow } from '../components/docs/ConnectionFlow'
import { DocsHowItWorks } from '../components/docs/DocsHowItWorks'
import { Features } from '../components/docs/Features'

const GITHUB_URL = 'https://github.com/thealphacubicle/OpenContext'

export function DocumentationPage() {
  return (
    <>
      <DocsHero githubUrl={GITHUB_URL} />
      <ConnectionFlow />
      <DocsHowItWorks />
      <Features />
    </>
  )
}

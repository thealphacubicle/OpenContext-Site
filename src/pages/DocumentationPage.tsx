import { DocsHero } from '../components/docs/DocsHero'
import { CoreConstraint } from '../components/docs/CoreConstraint'
import { Features } from '../components/docs/Features'
import { DocsHowItWorks } from '../components/docs/DocsHowItWorks'
import { LocalTesting } from '../components/docs/LocalTesting'
import { BuiltInPlugins } from '../components/docs/BuiltInPlugins'
import { DocumentationIndex } from '../components/docs/DocumentationIndex'
import { RealWorldExample } from '../components/docs/RealWorldExample'

const GITHUB_URL = 'https://github.com/thealphacubicle/OpenContext'

export function DocumentationPage() {
  return (
    <>
      <DocsHero githubUrl={GITHUB_URL} />
      <CoreConstraint />
      <Features />
      <DocsHowItWorks />
      <LocalTesting />
      <BuiltInPlugins />
      <DocumentationIndex githubUrl={GITHUB_URL} />
      <RealWorldExample githubUrl={GITHUB_URL} />
    </>
  )
}

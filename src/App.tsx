import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Analogy } from './components/Analogy'
import { WhatYouNeed } from './components/WhatYouNeed'
import { WorksWith } from './components/WorksWith'
import { Vision } from './components/Vision'
import { Impact } from './components/Impact'
import { Footer } from './components/Footer'

const GITHUB_URL = 'https://github.com/thealphacubicle/OpenContext'

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav githubUrl={GITHUB_URL} />
      <Hero githubUrl={GITHUB_URL} />
      <HowItWorks />
      <Analogy />
      <WhatYouNeed />
      <WorksWith />
      <Vision />
      <Impact />
      <Footer githubUrl={GITHUB_URL} />
    </main>
  )
}

export default App

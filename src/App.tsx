import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Analogy } from './components/Analogy'
import { WhatYouNeed } from './components/WhatYouNeed'
import { WorksWith } from './components/WorksWith'
import { Vision } from './components/Vision'
import { Impact } from './components/Impact'
import { Footer } from './components/Footer'
import { DocumentationPage } from './pages/DocumentationPage'

const GITHUB_URL = 'https://github.com/thealphacubicle/OpenContext'

function MarketingPage() {
  return (
    <>
      <Hero githubUrl={GITHUB_URL} />
      <HowItWorks />
      <Analogy />
      <WhatYouNeed />
      <WorksWith />
      <Vision />
      <Impact />
    </>
  )
}

function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav githubUrl={GITHUB_URL} />
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
      </Routes>
      <Footer githubUrl={GITHUB_URL} />
    </main>
  )
}

export default App

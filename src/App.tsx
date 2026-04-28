import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { WorksWith } from './components/WorksWith'
import { Vision } from './components/Vision'
import { Impact } from './components/Impact'
import { Footer } from './components/Footer'
import { DocumentationPage } from './pages/DocumentationPage'
import { McpConnectionPage } from './pages/McpConnectionPage'

const GITHUB_URL = 'https://github.com/thealphacubicle/OpenContext'

function MarketingPage() {
  return (
    <>
      <Hero githubUrl={GITHUB_URL} />
      <Vision />
      <Impact />
      <WorksWith />
    </>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
      document.querySelectorAll('.reveal').forEach((el) => observer!.observe(el))
    })
    return () => {
      cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [location.pathname])

  return (
    <main className="min-h-screen flex flex-col bg-surface text-ink-body">
      <Nav githubUrl={GITHUB_URL} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<MarketingPage />} />
        <Route path="/how-it-works" element={<DocumentationPage />} />
        <Route path="/connect" element={<McpConnectionPage />} />
      </Routes>
      <Footer githubUrl={GITHUB_URL} />
    </main>
  )
}

export default App

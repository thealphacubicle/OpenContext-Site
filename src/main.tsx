import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// React Router basename: leading slash, no trailing slash.
// Detect at runtime in case deployment path differs from build-time base (e.g. app at /OpenContext-Site/).
function getBasename() {
  const buildBase = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/'
  const pathname = window.location.pathname
  if (pathname.startsWith('/OpenContext-Site')) {
    return '/OpenContext-Site'
  }
  return buildBase
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

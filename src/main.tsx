import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const WebNewApp = lazy(() => import('./web_new/WebNewApp.tsx'))

// Lightweight path-based routing: "/web_new" renders the award edition,
// everything else renders the classic portfolio.
const path = window.location.pathname.replace(/\/+$/, '')
const isWebNew = path === '/web_new'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isWebNew ? (
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0a0a0a' }} />}>
        <WebNewApp />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
)

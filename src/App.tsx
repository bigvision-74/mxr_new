import { useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { pages } from './page-manifest'

declare global {
  interface Window {
    _hsq?: unknown[][]
    HubSpotConversations?: { widget?: { load?: () => void } }
  }
}

export default function App() {
  const route = decodeURIComponent(window.location.pathname.split('/').filter(Boolean).pop() || 'index')
  const filename = route.endsWith('.html') ? route : `${route}.html`
  const page = pages[filename as keyof typeof pages]
  useEffect(() => {
    document.title = page?.title || 'Page not found | MXR.ai'
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.description || '')

    window._hsq = window._hsq || []
    window._hsq.push(['setPath', window.location.pathname])
    window._hsq.push(['trackPageView'])
  }, [page])
  if (!page) return <><NavBar /><main className="section"><h1>Page not found</h1><p><a href="/">Return to MXR home</a></p></main><Footer /></>
  const { Component } = page
  return <div className={`mxr-react-page ${page.bodyClass}`}>
    {filename !== 'index.html' && <NavBar />}
    <Component />
    <Footer />
  </div>
}

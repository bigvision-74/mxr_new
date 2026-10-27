import { useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { pages } from './page-manifest'
import BlogDetailPage from './pages/BlogDetailPage'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage'

declare global {
  interface Window {
    _hsq?: unknown[][]
    HubSpotConversations?: { widget?: { load?: () => void } }
  }
}

export default function App() {
  const pathname = decodeURIComponent(window.location.pathname)
  const segments = pathname.split('/').filter(Boolean)
  const isBlogDetail = segments[0] === 'blog' && segments.length >= 2
  const isCaseStudyDetail = segments[0] === 'case-studies' && segments.length >= 2
  const route = (isBlogDetail || isCaseStudyDetail) ? null : (segments[segments.length - 1] || 'index')
  const filename = route ? (route.endsWith('.html') ? route : `${route}.html`) : null
  const page = (isBlogDetail || isCaseStudyDetail || !filename) ? null : pages[filename as keyof typeof pages]

  useEffect(() => {
    if (isBlogDetail || isCaseStudyDetail) return
    document.title = page?.title ?? 'Page not found | MXR.ai'
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.description || '')
    window._hsq = window._hsq || []
    window._hsq.push(['setPath', window.location.pathname])
    window._hsq.push(['trackPageView'])
  }, [page, isBlogDetail])

  if (isBlogDetail) {
    return (
      <div className="mxr-react-page">
        <NavBar />
        <BlogDetailPage />
        <Footer />
        <ScrollToTop />
      </div>
    )
  }

  if (isCaseStudyDetail) {
    return (
      <div className="mxr-react-page">
        <NavBar />
        <CaseStudyDetailPage />
        <Footer />
        <ScrollToTop />
      </div>
    )
  }
  if (!page) return <><NavBar /><main className="section"><h1>Page not found</h1><p><a href="/">Return to MXR home</a></p></main><Footer /><ScrollToTop /></>
  const { Component } = page
  return <div className={`mxr-react-page ${page.bodyClass}`}>
    {filename !== 'index.html' && <NavBar />}
    <Component />
    <Footer />
    <ScrollToTop />
  </div>
}

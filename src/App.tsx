import { useEffect } from 'react'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { ScrollToTop } from './components/ScrollToTop'
import { pages, detailPages } from './page-manifest'
import { canonicalUrl } from './page-meta'
import BlogDetailPage from './pages/BlogDetailPage'
import CaseStudyDetailPage from './pages/CaseStudyDetailPage'

declare global {
  interface Window {
    _hsq?: unknown[][]
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
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
    const detail = (isBlogDetail || isCaseStudyDetail) ? detailPages[segments.slice(0, 2).join('/')] : undefined
    // Matches the tag written at build time; removed for unknown URLs, which are served the home page's HTML
    const canonicalRoute = detail ? segments.slice(0, 2).join('/') : page ? filename : null
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonicalRoute) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', canonicalUrl(canonicalRoute))
    } else {
      canonical?.remove()
    }
    if ((isBlogDetail || isCaseStudyDetail) && !detail) return
    const meta = detail ?? page
    document.title = meta?.title ?? 'Page not found | MXR'
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta?.description || '')
    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (meta?.keywords) {
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta')
        keywordsMeta.setAttribute('name', 'keywords')
        document.head.appendChild(keywordsMeta)
      }
      keywordsMeta.setAttribute('content', meta.keywords)
    } else {
      keywordsMeta?.remove()
    }
    window._hsq = window._hsq || []
    window._hsq.push(['setPath', window.location.pathname])
    window._hsq.push(['trackPageView'])
  }, [page, isBlogDetail, isCaseStudyDetail, pathname])

  if (isBlogDetail) {
    return (
      <div className="mxr-react-page">
        <NavBar />
        <BlogDetailPage />
        <Footer />
        <ScrollToTop /><CookieBanner />
      </div>
    )
  }

  if (isCaseStudyDetail) {
    return (
      <div className="mxr-react-page">
        <NavBar />
        <CaseStudyDetailPage />
        <Footer />
        <ScrollToTop /><CookieBanner />
      </div>
    )
  }
  if (!page) return <><NavBar /><main className="section"><h1>Page not found</h1><p><a href="/">Return to MXR home</a></p></main><Footer /><ScrollToTop /><CookieBanner /></>
  const { Component } = page
  return <div className={`mxr-react-page ${page.bodyClass}`}>
    {filename !== 'index.html' && <NavBar />}
    <Component />
    <Footer />
    <ScrollToTop /><CookieBanner />
  </div>
}

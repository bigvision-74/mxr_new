import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StyleSwitcher } from './components/StyleSwitcher'
import { pages } from './page-manifest'

export default function App() {
  const route = decodeURIComponent(window.location.pathname.split('/').filter(Boolean).pop() || 'index')
  const filename = route.endsWith('.html') ? route : `${route}.html`
  const page = pages[filename as keyof typeof pages]
  useEffect(() => {
    document.title = page?.title || 'Page not found | MXR.ai'
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.description || '')
  }, [page])
  if (!page) return <><Header /><main className="section"><h1>Page not found</h1><p><a href="/index.html">Return to MXR home</a></p></main><Footer /></>
  const { Component } = page
  return <div className={`mxr-react-page ${page.bodyClass}`}>
    {filename !== 'index.html' && <Header />}
    <Component />
    <Footer />
    <StyleSwitcher />
  </div>
}

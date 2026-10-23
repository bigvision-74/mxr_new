import { useEffect } from 'react'
import { Layout } from './Layout'
import { pages } from '../page-manifest'
export function App() {
  const route = decodeURIComponent(window.location.pathname.split('/').filter(Boolean).pop() || 'index')
  const filename = route.endsWith('.html') ? route : `${route}.html`
  const page = pages[filename as keyof typeof pages]
  useEffect(() => {
    document.title = page?.title || 'Page not found | MXR.ai'
    document.querySelector('meta[name="description"]')?.setAttribute('content', page?.description || '')
  }, [page])
  if (!page) return <Layout><main className="section"><h1>Page not found</h1><a href="/index.html">Return home</a></main></Layout>
  const { Component } = page
  return page.needsLayout ? <Layout><Component /></Layout> : <Component />
}

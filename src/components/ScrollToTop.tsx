import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

// Floating button on the left edge that appears once the page has been scrolled down.
export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button type="button" className={`scroll-top${visible ? ' is-visible' : ''}`} onClick={toTop} aria-label="Scroll to top" tabIndex={visible ? 0 : -1}>
      <ArrowUp aria-hidden="true" size={20} />
    </button>
  )
}

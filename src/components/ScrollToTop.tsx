import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

// Floating button on the left edge that appears once the page has been scrolled down.
export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Keep the floating buttons (this one and the HubSpot chat bubble) above the footer's bottom bar,
    // and lined up with the left and right ends of its border.
    const onScroll = () => {
      setVisible(window.scrollY > 400)
      const bar = document.querySelector('.footer-bottom')
      const overlap = bar ? Math.max(0, window.innerHeight - bar.getBoundingClientRect().top) : 0
      const root = document.documentElement
      root.style.setProperty('--footer-bottom-offset', `${Math.round(overlap)}px`)
      if (bar) {
        const { left, right } = bar.getBoundingClientRect()
        root.style.setProperty('--footer-inset-left', `${Math.round(left)}px`)
        root.style.setProperty('--footer-inset-right', `${Math.round(root.clientWidth - right)}px`)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
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

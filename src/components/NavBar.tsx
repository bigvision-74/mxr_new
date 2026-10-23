import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { services, products } from '../data/navigation'
import mxrLogo from '../assets/images/mxr-logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Resources', href: '/case-study-xr-readiness' },
]

interface NavBarProps {
  /** true  → transparent overlay (used inside ImmersiveHero on the homepage)
   *  false → sticky dark header (used on all other pages) */
  overlay?: boolean
}

export function NavBar({ overlay = false }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const wrapperClass = overlay
    ? 'relative z-10 flex flex-col px-[8vw]'
    : 'sticky top-0 z-50 w-full bg-[rgba(31,33,35,0.97)] border-b border-[#3C3F42] shadow-[0_5px_20px_rgba(0,0,0,0.12)]'

  const innerClass = overlay
    ? 'mxr-hero-nav flex h-24 items-center justify-between gap-6'
    : 'flex h-[82px] items-center justify-between gap-6 px-[8vw]'

  return (
    <div className={wrapperClass}>
      <nav className={innerClass} aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center" aria-label="MXR home">
          <img
            src={mxrLogo}
            alt="MXR — Where vision becomes reality"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        {/* Desktop pill nav */}
        <div className={`hidden items-center rounded-full p-1.5 lg:flex ${overlay ? 'border border-gray-700/80 bg-black/20 backdrop-blur-md' : 'border border-white/20 bg-white/10'}`}>
          {navLinks.map((link) => {
            if (link.label === 'Products') return (
              <div className="mxr-service-nav" key="Products">
                <button type="button" className="rounded-full border-0 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 cursor-pointer">
                  Products
                </button>
                <div className="mxr-service-dropdown">
                  {products.map(([label, slug]) => (
                    <a href={`/${slug}`} key={slug}>{label}</a>
                  ))}
                </div>
              </div>
            )
            if (link.label === 'Services') return (
              <div className="mxr-service-nav" key="Services">
                <button type="button" className="rounded-full border-0 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 cursor-pointer">
                  Services
                </button>
                <div className="mxr-service-dropdown">
                  {services.map(s => (
                    <a href={`/${s.slug}`} key={s.slug}>{s.title}</a>
                  ))}
                </div>
              </div>
            )
            return (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="mailto:hello@mxr.ai?subject=Talk%20to%20MXR"
            className="mxr-hero-contact group ml-1 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#10263D] transition-all duration-300 hover:bg-[#EEF5FB]"
          >
            Contact us
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10 lg:hidden ${overlay ? 'bg-black/20 backdrop-blur-md' : 'bg-white/10'}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute left-[8vw] right-[8vw] top-24 z-30 rounded-3xl border border-white/15 bg-black/90 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => {
              if (link.label === 'Products') return (
                <details className="mxr-mobile-services" key="Products">
                  <summary>Products</summary>
                  {products.map(([label, slug]) => (
                    <a href={`/${slug}`} key={slug}>{label}</a>
                  ))}
                </details>
              )
              if (link.label === 'Services') return (
                <details className="mxr-mobile-services" key="Services">
                  <summary>Services</summary>
                  {services.map(s => (
                    <a href={`/${s.slug}`} key={s.slug}>{s.title}</a>
                  ))}
                </details>
              )
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="mailto:hello@mxr.ai?subject=Talk%20to%20MXR"
              onClick={() => setMenuOpen(false)}
              className="mxr-hero-contact mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#10263D]"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

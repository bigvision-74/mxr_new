import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { services } from '../data/services'
import mxrLogo from '../assets/images/mxr-logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about.html' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Resources', href: '/case-study-xr-readiness.html' },
]

const products: [string, string][] = [
  ['MODAL3D', 'modal3d'],
  ['EPRium', 'eprium'],
  ['DriveXR', 'drivexr'],
  ['InsightXR — Existing', 'insightxr'],
  ['InsightXR — Platform version', 'insightxr-platform'],
]

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="mxr-site-nav"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'transparent',
        borderBottom: '1px solid rgba(255,255,255,.12)',
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      <div className="relative flex h-[96px] items-center justify-between gap-6 px-[8vw]">
        <a href="/" className="flex shrink-0 items-center" aria-label="MXR home">
          <img
            src={mxrLogo}
            alt="MXR — Where vision becomes reality"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        <div className="hidden items-center rounded-full border border-white/30 p-1.5 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Products' ? (
              <div className="mxr-service-nav" key="Products">
                <button
                  type="button"
                  className="rounded-full border-0 bg-transparent px-4 py-2 text-sm font-medium text-white/80 outline-none transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  Products
                </button>
                <div className="mxr-service-dropdown">
                  {products.map(([label, slug]) => (
                    <a href={`/${slug}.html`} key={slug}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ) : link.label === 'Services' ? (
              <div className="mxr-service-nav" key="Services">
                <button
                  type="button"
                  className="rounded-full border-0 bg-transparent px-4 py-2 text-sm font-medium text-white/80 outline-none transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  Services
                </button>
                <div className="mxr-service-dropdown">
                  {services.map((s) => (
                    <a href={`/${s.slug}.html`} key={s.slug}>
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="mailto:hello@mxr.ai"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Contact us
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white/10 lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute left-5 right-5 top-full z-30 rounded-3xl border border-white/15 bg-black/90 p-4 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {navLinks.map((link) =>
                link.label === 'Products' ? (
                  <details className="mxr-mobile-services" key="Products">
                    <summary>Products</summary>
                    {products.map(([label, slug]) => (
                      <a href={`/${slug}.html`} key={slug}>
                        {label}
                      </a>
                    ))}
                  </details>
                ) : link.label === 'Services' ? (
                  <details className="mxr-mobile-services" key="Services">
                    <summary>Services</summary>
                    {services.map((s) => (
                      <a href={`/${s.slug}.html`} key={s.slug}>
                        {s.title}
                      </a>
                    ))}
                  </details>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="mailto:hello@mxr.ai"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#10263D]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

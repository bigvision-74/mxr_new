import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { services, products, resources } from '../data/navigation'
import mxrLogo from '../assets/images/mxr-logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Resources', href: '#' },
]

const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'

function isLinkActive(href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

function isServicesActive(): boolean {
  return services.some(s => pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`))
}

function isProductsActive(): boolean {
  return products.some(([, slug]) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`))
}

function isResourcesActive(): boolean {
  return resources.some(r => pathname === `/${r.slug}` || pathname.startsWith(`/${r.slug}/`))
}

interface NavBarProps {
  /** true  → transparent overlay (used inside ImmersiveHero on the homepage)
   *  false → sticky dark header (used on all other pages) */
  overlay?: boolean
}

export function NavBar({ overlay = false }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const wrapperClass = overlay
    ? 'relative z-30 flex flex-col site-page-gutter'
    : 'absolute inset-x-0 top-0 z-50 flex w-full flex-col site-page-gutter bg-[linear-gradient(180deg,rgba(0,0,0,.62),transparent)]'

  const innerClass = 'mxr-hero-nav flex h-24 items-center justify-between gap-6'

  return (
    <div className={wrapperClass}>
      <nav className={`mxr-site-nav ${innerClass}`} aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center" aria-label="MXR home">
          <img
            src={mxrLogo}
            alt="MXR — Where vision becomes reality"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        {/* Desktop pill nav */}
        <div className={`hidden items-center rounded-full p-1.5 lg:flex border border-gray-700/80 bg-black/20 backdrop-blur-md`}>
          {navLinks.map((link) => {
            if (link.label === 'Products') {
              const active = isProductsActive()
              return (
                <div className="mxr-service-nav" key="Products">
                  <button type="button" className={`rounded-full border-0 px-4 py-2 text-base font-medium text-white hover:bg-white/10 cursor-pointer transition-all duration-300 ${active ? 'nav-active' : ''}`}>
                    Products
                  </button>
                  <div className="mxr-service-dropdown">
                    {products.map(([label, slug]) => (
                      <a href={`/${slug}`} key={slug} className={pathname === `/${slug}` || pathname.startsWith(`/${slug}/`) ? 'nav-item-active' : ''}>{label}</a>
                    ))}
                  </div>
                </div>
              )
            }
            if (link.label === 'Services') {
              const active = isServicesActive()
              return (
                <div className="mxr-service-nav" key="Services">
                  <button type="button" className={`rounded-full border-0 px-4 py-2 text-base font-medium text-white hover:bg-white/10 cursor-pointer transition-all duration-300 ${active ? 'nav-active' : ''}`}>
                    Services
                  </button>
                  <div className="mxr-service-dropdown">
                    {services.map(s => (
                      <a href={`/${s.slug}`} key={s.slug} className={pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`) ? 'nav-item-active' : ''}>{s.title}</a>
                    ))}
                  </div>
                </div>
              )
            }
            if (link.label === 'Resources') {
              const active = isResourcesActive()
              return (
                <div className="mxr-service-nav" key="Resources">
                  <button type="button" className={`rounded-full border-0 px-4 py-2 text-base font-medium text-white hover:bg-white/10 cursor-pointer transition-all duration-300 ${active ? 'nav-active' : ''}`}>
                    Resources
                  </button>
                  <div className="mxr-service-dropdown">
                    {resources.map(r => (
                      <a href={`/${r.slug}`} key={r.slug} className={pathname === `/${r.slug}` || pathname.startsWith(`/${r.slug}/`) ? 'nav-item-active' : ''}>{r.title}</a>
                    ))}
                  </div>
                </div>
              )
            }
            const active = isLinkActive(link.href)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-white/10 ${active ? 'bg-white/20' : ''}`}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="/contact"
            className="mxr-hero-contact group ml-1 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0d1826] transition-all duration-300 hover:bg-[#EEF5FB]"
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
      {!overlay && <div className="border-t border-white/15" />}

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
              if (link.label === 'Products') {
                const active = isProductsActive()
                return (
                  <details className="mxr-mobile-services" key="Products" open={active || undefined}>
                    <summary className={active ? 'nav-item-active' : ''}>Products</summary>
                    {products.map(([label, slug]) => (
                      <a href={`/${slug}`} key={slug} className={pathname === `/${slug}` || pathname.startsWith(`/${slug}/`) ? 'nav-item-active' : ''}>{label}</a>
                    ))}
                  </details>
                )
              }
              if (link.label === 'Services') {
                const active = isServicesActive()
                return (
                  <details className="mxr-mobile-services" key="Services" open={active || undefined}>
                    <summary className={active ? 'nav-item-active' : ''}>Services</summary>
                    {services.map(s => (
                      <a href={`/${s.slug}`} key={s.slug} className={pathname === `/${s.slug}` || pathname.startsWith(`/${s.slug}/`) ? 'nav-item-active' : ''}>{s.title}</a>
                    ))}
                  </details>
                )
              }
              if (link.label === 'Resources') {
                const active = isResourcesActive()
                return (
                  <details className="mxr-mobile-services" key="Resources" open={active || undefined}>
                    <summary className={active ? 'nav-item-active' : ''}>Resources</summary>
                    {resources.map(r => (
                      <a href={`/${r.slug}`} key={r.slug} className={pathname === `/${r.slug}` || pathname.startsWith(`/${r.slug}/`) ? 'nav-item-active' : ''}>{r.title}</a>
                    ))}
                  </details>
                )
              }
              const active = isLinkActive(link.href)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 ${active ? 'bg-white/10' : ''}`}
                >
                  {link.label}
                </a>
              )
            })}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mxr-hero-contact mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0d1826]"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

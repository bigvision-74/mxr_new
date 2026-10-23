import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { services } from '../data/navigation'

type ShinyTextProps = {
  children: string
  duration?: number
  spread?: number
}

function ShinyText({ children, duration = 3, spread = 100 }: ShinyTextProps) {
  return (
    <motion.span
      className="block bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(${spread}deg, #64CEFB 0%, #64CEFB 35%, #ffffff 50%, #64CEFB 65%, #64CEFB 100%)`,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      initial={{ backgroundPosition: '-100% 0%' }}
      animate={{ backgroundPosition: '200% 0%' }}
      transition={{ duration, ease: 'linear', repeat: Infinity }}
    >
      {children}
    </motion.span>
  )
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about.html' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Resources', href: '/case-study-xr-readiness.html' },
]

export function ImmersiveHero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="mxr-immersive-hero relative h-screen min-h-[700px] overflow-hidden bg-black text-white">
      <video
        className="mxr-immersive-hero__video absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="MXR immersive technology showcase"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.76)_0%,rgba(0,0,0,.22)_32%,rgba(0,0,0,.28)_60%,rgba(0,0,0,.92)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.44),transparent_55%,rgba(0,0,0,.18))]" />
      <div className="mxr-immersive-hero__grid absolute inset-0 opacity-40" />
      <div className="absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-[#0B66C3]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10 xl:px-0">
        <nav className="mxr-hero-nav flex h-24 items-center justify-between gap-6" aria-label="Main navigation">
          <a href="/" className="flex shrink-0 items-center" aria-label="MXR home">
            <img
              src="/assets/mxr-logo.png"
              alt="MXR — Where vision becomes reality"
              className="h-11 w-auto object-contain sm:h-12"
            />
          </a>

          <div className="hidden items-center rounded-full border border-gray-700/80 bg-black/20 p-1.5 backdrop-blur-md lg:flex">
            {navLinks.map((link) => (
              link.label === 'Products' ? <div className="mxr-service-nav" key={link.label}><button type="button" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">Products</button><div className="mxr-service-dropdown">{[['MODAL3D','modal3d'],['EPRium','eprium'],['DriveXR','drivexr'],['InsightXR — Existing','insightxr'],['InsightXR — Platform version','insightxr-platform']].map(([label, slug]) => <a href={`/${slug}.html`} key={slug}>{label}</a>)}</div></div> :
              link.label === 'Services' ? <div className="mxr-service-nav" key={link.label}><button type="button" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white">Services</button><div className="mxr-service-dropdown">{services.map(s => <a href={`/${s.slug}.html`} key={s.slug}>{s.title}</a>)}</div></div> :
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mxr-hero-contact group ml-1 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#10263D] transition-all duration-300 hover:bg-[#EEF5FB]"
            >
              Contact us
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white/10 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute left-5 right-5 top-24 z-30 rounded-3xl border border-white/15 bg-black/90 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {navLinks.map((link) => (
                link.label === 'Products' ? <details className="mxr-mobile-services" key={link.label}><summary>Products</summary>{[['MODAL3D','modal3d'],['EPRium','eprium'],['DriveXR','drivexr'],['InsightXR — Existing','insightxr'],['InsightXR — Platform version','insightxr-platform']].map(([label, slug]) => <a href={`/${slug}.html`} key={slug}>{label}</a>)}</details> :
                link.label === 'Services' ? <details className="mxr-mobile-services" key={link.label}><summary>Services</summary>{services.map(s => <a href={`/${s.slug}.html`} key={s.slug}>{s.title}</a>)}</details> :
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mxr-hero-contact mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#10263D]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-1 flex-col justify-start border-t border-white/15 pb-10 pt-[2.5vh] sm:pt-[3.5vh] lg:pt-[4.5vh]">
          <motion.h1
            className="max-w-6xl text-5xl font-medium leading-[.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            aria-label="Technology for a Safer, Smarter Tomorrow."
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white" aria-hidden="true">Technology for a&nbsp;</span>
            <span aria-hidden="true"><ShinyText>Safer, Smarter Tomorrow.</ShinyText></span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-sm leading-6 text-white/80 md:text-base md:leading-7"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
          >
            We create immersive simulation, XR and AI solutions that help people and
            organisations train, prepare and perform in the real world.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 md:mt-9"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.65 }}
          >
            <a
              href="#solutions"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition-all duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
            >
              Explore Our Solutions
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-white/60">
              People · Skills · Safety · Opportunity
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


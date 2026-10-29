import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NavBar } from './NavBar'
import driveLogo from '../assets/images/drivexr.svg'
import insightLogo from '../assets/images/insightxr.svg'
import modalLogo from '../assets/images/modal3d.svg'
// import bannerVideo from '../assets/videos/banner/HV9-MD_grok_take002.mp4'
// TODO: replace with ../assets/videos/banner/HV9_showcase_cut_v004_A_1920.mp4 once added
import bannerVideo from '../assets/videos/home_hero.mp4'

type ShinyTextProps = {
  children: ReactNode
  duration?: number
}

function ShinyText({ children, duration = 3 }: ShinyTextProps) {
  return (
    <motion.span
      className="block bg-clip-text pb-[0.14em] -mb-[0.14em] text-transparent"
      style={{
        backgroundImage: 'var(--hero-shine)',
        backgroundSize: '200% 100%',
        backgroundRepeat: 'repeat-x',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      initial={{ backgroundPosition: '0% 0%' }}
      animate={{ backgroundPosition: '200% 0%' }}
      transition={{ duration, ease: 'linear', repeat: Infinity }}
    >
      {children}
    </motion.span>
  )
}

// home_hero.mp4 (19.75s) already plays the products in this order: MODAL3D, DriveXR, InsightXR, then wipes back to MODAL3D and loops.
// `from` is where the product's scene begins (the start of its wipe or hard cut), used to pick the active tab and logo;
// `go` is where a tab jumps to, the same point, so the whole scene plays from its first frame.
const PRODUCTS = [
  { id: 'modal3d', logo: modalLogo, label: 'MODAL3D', from: 0, go: 0, light: false },
  { id: 'drivexr', logo: driveLogo, label: 'DriveXR', from: 4.4, go: 4.4, light: true },
  { id: 'insightxr', logo: insightLogo, label: 'InsightXR', from: 16.7, go: 16.7, light: false },
] as const

// The loop wipe starts at about 19.1s, when MODAL3D takes over again.
const LOOP_WIPE = 19.1

function activeAt(t: number) {
  if (t >= LOOP_WIPE) return 0
  let n = 0
  PRODUCTS.forEach((pr, i) => { if (t >= pr.from) n = i })
  return n
}

export function ImmersiveHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(0)

  // Follow the video: the active tab and logo change as soon as the video moves on to the next product.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let raf = 0, current = 0
    const tick = () => {
      const n = activeAt(video.currentTime)
      if (n !== current) { current = n; setActive(n) }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const jumpTo = (i: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = PRODUCTS[i].go
    setActive(i)
    video.play().catch(() => { /* autoplay blocked: the tab still shows the chosen product */ })
  }

  return (
    <section className="mxr-immersive-hero relative flex h-screen min-h-[700px] flex-col bg-[var(--color-dark)] text-white">
      {/* Background layers clipped independently so the nav dropdown can escape */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="mxr-immersive-hero__video absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="MXR immersive technology showcase"
        >
          <source
            src={bannerVideo}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.3)_0%,transparent_30%,transparent_65%,rgba(0,0,0,.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,18,.72)_0%,rgba(6,11,18,.55)_30%,rgba(6,11,18,.2)_55%,transparent_78%)]" />
        <div className="mxr-immersive-hero__grid absolute inset-0 opacity-20" />
        <div className="absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-[#0B66C3]/20 blur-[120px]" />
      </div>

      {/* Shared nav , overlay mode sits on top of the video */}
      <NavBar overlay />
      <div className="relative z-10 site-page-gutter"><div className="border-t border-white/15" /></div>

      {/* Hero copy */}
      <div className="relative z-10 flex flex-1 flex-col justify-center site-page-gutter pb-16">
        <div>
          <motion.h1
            className="banner-title max-w-6xl text-5xl font-medium leading-[.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            aria-label="Your Vision. Our Technology."
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white" aria-hidden="true">Your Vision.</span>
            <span aria-hidden="true"><ShinyText>Our Technology.</ShinyText></span>
          </motion.h1>

          <motion.p
            className="banner-lead mt-7 max-w-2xl text-sm leading-6 text-white/80 md:text-base md:leading-7"
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
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base"
            >
              Explore Our Solutions
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </motion.div>
        </div>
      </div>

      {/* Product tabs, bottom right: the chip names the product on screen; the tabs jump the video to a product. */}
      <div className="hv-tabs">
        <span className={`hv-chip ${PRODUCTS[active].light ? 'is-light' : 'is-dark'}`} aria-hidden="true">
          <img src={PRODUCTS[active].logo} alt="" />
        </span>
        <div className="hv-rail" role="tablist" aria-label="Products">
          {PRODUCTS.map((pr, i) => (
            <button key={pr.id} type="button" role="tab" aria-selected={i === active} className={i === active ? 'is-active' : ''} onClick={() => jumpTo(i)}>
              <span>{String(i + 1).padStart(2, '0')}</span>{pr.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

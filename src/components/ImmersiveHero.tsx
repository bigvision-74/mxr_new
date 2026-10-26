import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { NavBar } from './NavBar'
// import bannerVideo from '../assets/videos/banner/HV9-MD_grok_take002.mp4'
import bannerVideo from '../assets/videos/banner/HV9_showcase_cut_v004_A_1920.mp4'

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

export function ImmersiveHero() {
  return (
    <section className="mxr-immersive-hero relative h-screen min-h-[700px] bg-[var(--color-dark)] text-white">
      {/* Background layers clipped independently so the nav dropdown can escape */}
      <div className="absolute inset-0 overflow-hidden">
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
            src={bannerVideo}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,rgba(0,0,0,.08)_32%,rgba(0,0,0,.14)_60%,rgba(0,0,0,.8)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.3),transparent_55%,rgba(0,0,0,.08))]" />
        <div className="mxr-immersive-hero__grid absolute inset-0 opacity-40" />
        <div className="absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-[#0B66C3]/20 blur-[120px]" />
      </div>

      {/* Shared nav — overlay mode sits on top of the video */}
      <NavBar overlay />

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col site-page-gutter pb-10">
        <div className="border-t border-white/15 pt-[2.5vh] sm:pt-[3.5vh] lg:pt-[4.5vh]">
          <motion.h1
            className="banner-title max-w-6xl text-5xl font-medium leading-[.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            aria-label="Technology for a Safer, Smarter Tomorrow."
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white" aria-hidden="true">Technology for a&nbsp;</span>
            <span aria-hidden="true"><ShinyText>Safer, Smarter Tomorrow.</ShinyText></span>
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

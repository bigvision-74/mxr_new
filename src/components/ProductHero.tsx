import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

// Shared product banner (same markup and styling as the EPRium hero): dark shade, grid and glow over a picture or looping video.
export function ProductHero({ title, accent, lead, demoSubject, secondaryHref, secondaryLabel, video, image, visual }: {
  title: string
  accent: string
  lead: string
  demoSubject: string
  secondaryHref: string
  secondaryLabel: string
  video?: string
  image?: string
  visual?: ReactNode // sits on the right of the banner, above the shade
}) {
  return (
    <section className="ep2-hero">
      {video
        ? <video className="ep2-bg" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={video} type="video/mp4" /></video>
        : image ? <img className="ep2-bg" src={image} alt="" fetchPriority="high" /> : null}
      <div className="ep2-shade" aria-hidden="true" />
      <div className="ep2-grid" aria-hidden="true" />
      <div className="ep2-glow" aria-hidden="true" />
      {visual}
      <div className="ep2-hero-inner">
        <h1 className="banner-title banner-title--stacked">{title} <em>{accent}</em></h1>
        <p className="ep2-lead banner-lead">{lead}</p>
        <div className="ep2-actions">
          <a href={`mailto:hello@mxr.ai?subject=${encodeURIComponent(demoSubject)}`} className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base">Book a Demonstration <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
          <a href={secondaryHref} className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition-all duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base">{secondaryLabel} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  )
}

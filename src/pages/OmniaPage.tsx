import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { ProductHero } from '../components/ProductHero'
import defaultBanner from '../assets/videos/defaultbanner.mp4'

// Same banner as EPRium. Headline, lead and background image are placeholders until the Omnia copy and artwork arrive.
export default function OmniaPage() {
  return (
    <main className={"pp ep-page"} style={{ "--product-accent": "#0b66c3" } as CSSProperties}>
      <ProductHero title="Meet" accent="Omnia." lead="Omnia product description goes here." demoSubject="Omnia demonstration" secondaryHref="#omnia-overview-heading" secondaryLabel="Explore Omnia" video={defaultBanner} />

      {/* Coming-soon notice: replace the copy below with the Omnia content when it is ready. */}
      <section className={"epr-gap"} aria-labelledby={"omnia-overview-heading"}>
        <div className={"epr-gap-heading"}>
          <div>
            <p className={"eyebrow"}>{"OVERVIEW"}</p>
            <h2 id={"omnia-overview-heading"}>{"Coming soon"}</h2>
          </div>
          <p>{"We're putting the finishing touches on Omnia. Check back shortly for the full overview."}</p>
        </div>
      </section>

      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"GET IN TOUCH"}</p>
          <h2>{"Ready to see Omnia in action?"}</h2>
          <p>{"Talk to the MXR team about how Omnia can support your organisation."}</p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"/contact"}>{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

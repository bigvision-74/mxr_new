import { InsightOverview } from '../components/InsightOverview'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { ProductHero } from '../components/ProductHero'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import insightxrPlatform from '../assets/images/insightxr-platform.png'

export default function InsightxrPage() {
  return (
    <main className={"pp"} style={{ "--product-accent": "#0b66c3" } as CSSProperties}>
      <ProductHero title="Manage immersive learning." accent="Measure what matters." lead="Bring content, learners, devices and performance data together to deliver a connected XR learning programme." demoSubject="InsightXR demonstration" secondaryHref="#product-benefits" secondaryLabel="Explore InsightXR" video={defaultBanner} />
      <InsightOverview />
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"SEE INSIGHTXR IN ACTION"}</p>
          <h2>{"See how it fits your organisation."}</h2>
          <p>{"Explore the experience with our team, around your training goals."}</p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href="/contact">{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

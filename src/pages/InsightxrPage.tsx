import { InsightOverview } from '../components/InsightOverview'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'


export default function InsightxrPage() {
  return (
    <main className={"pp insight-product ixm-page"} style={{ "--product-accent": "#0b66c3" } as CSSProperties}>
      <section className="ixm-hero">
        <div className="ixm-hero-copy"><p className="eyebrow">INSIGHTXR / XR LEARNING & ANALYTICS</p><h1>Your XR training.<br/><em>Connected. Controlled.<br/>Understood.</em></h1><p>Manage devices. Deliver immersive content. Turn learner interactions into useful insight — all from one connected platform.</p><div className="button-row"><a className="btn btn-primary" href="/contact">Book a Demonstration <ArrowRight size={18}/></a><a className="ixm-text-link" href="#ix-platform">Explore the platform <ArrowRight size={16}/></a></div></div>
        <div className="ixm-hero-product"><span className="ixm-product-orbit" aria-hidden="true"/><video src="/assets/videos/insightxr-imac.webm" autoPlay muted loop playsInline preload="metadata" aria-label="InsightXR product demonstration on an iMac"/><div className="ixm-product-caption"><span>ONE PLATFORM</span><p>Devices · Content · Insights</p></div></div>
      </section>
      <InsightOverview />
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"SEE INSIGHTXR IN ACTION"}</p>
          <h2>{"See what connected XR can do for you."}</h2>
          <p>{"Book a demonstration shaped around your devices, your content and your training goals."}</p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href="/contact">{"Book a Demonstration"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

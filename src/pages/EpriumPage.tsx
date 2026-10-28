import type { CSSProperties } from 'react'
import { ArrowRight, Glasses, Brain, BarChart3, FileText } from 'lucide-react'
import { EpriumJourney } from '../components/EpriumJourney'
import { EpriumDebrief } from '../components/EpriumDebrief'
import { EpriumAudiences } from '../components/EpriumAudiences'
import { EpriumOutcomes } from '../components/EpriumOutcomes'
import { EpriumCapabilities } from "../components/EpriumCapabilities"
import { EpriumFaculty } from "../components/EpriumFaculty"
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import clinicalLearning from '../assets/images/eprium/challenge-workflow.webp'
import epriumScreen from '../assets/images/eprium/epriumss.png'
import clinicalPractice from '../assets/images/eprium/challenge-placement.webp'

export default function EpriumPage() {
  return (
    <main className={"pp ep-page"} style={{ "--product-accent": "#0b66c3" } as CSSProperties}>
      <section className="ep2-hero">
        <video className="ep2-bg" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={defaultBanner} type="video/mp4" /></video>
        <div className="ep2-shade" aria-hidden="true" />
        <div className="ep2-grid" aria-hidden="true" />
        <div className="ep2-glow" aria-hidden="true" />
        <div className="ep2-hero-inner">
          <h1 className="banner-title banner-title--stacked">From classroom to <em>clinical readiness.</em></h1>
          <p className="ep2-lead banner-lead">Clinical learning connected to the decisions, documentation and digital workflows of modern patient care.</p>
          <div className="ep2-actions">
            <a href="mailto:hello@mxr.ai?subject=EPRium%20demonstration" className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base">Book a Demonstration <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>

          </div>
        </div>
      </section>

      <section className={"epr-gap"} aria-labelledby={"epr-gap-heading"}>
        <div className={"epr-gap-heading"}>
          <div>
            <p className={"eyebrow"}>
              {"THE CHALLENGE"}
            </p>
            <h2 id={"epr-gap-heading"}>{"Train for the reality of digital care"}</h2>
          </div>
          <p>{"Learners can know the theory yet have little chance to rehearse complete digital workflows before practice. Paper notes separate documentation from the decisions, communication and patient response that created them."}</p>
        </div>
        <div className={"epr-gap-grid"}>
          <article className={"epr-gap-main"}>
            <img src={clinicalLearning} alt={"Nursing student documenting a simulated patient workflow beside a training mannequin"} loading={"lazy"} />
            <div className={"epr-gap-top"}>
              <span className={"epr-gap-number"}>
                {"01"}
              </span>

            </div>
            <div className={"epr-gap-main-copy"}>
              <h3>{"Practise the whole workflow"}</h3>
              <p>
                {"Work from patient context through assessment, documentation, investigations, medication, treatment and review."}
              </p>
            </div>
          </article>
          <article className={"epr-gap-small epr-gap-digital"}>
            <div className={"epr-gap-small-copy"}>
              <div className={"epr-gap-tag"}><span>{"02"}</span></div>
              <h3>{"Learn by making decisions"}</h3>
              <p>
                {"Use changing clinical information, results and patient responses to decide what happens next."}
              </p>
            </div>
            <div className={"epr-gap-record epr-gap-shot"} aria-hidden={"true"}>
              <img src={epriumScreen} alt={"EPRium dashboard showing a live patient session"} loading={"lazy"} />
            </div>
          </article>
          <article className={"epr-gap-small epr-gap-scenarios"}>
            <div className={"epr-gap-small-copy"}>
              <div className={"epr-gap-tag"}><span>{"03"}</span></div>
              <h3>{"Build readiness before placement"}</h3>
              <p>
                {"Repeat scenarios, apply feedback and get familiar with digital clinical practice before working with real patients."}
              </p>
            </div>
            <div className={"epr-gap-photo"}>
              <img src={clinicalPractice} alt={"Healthcare students rehearsing a patient handover with an educator"} loading={"lazy"} />
            </div>
          </article>
        </div>
      </section>
      <EpriumJourney />
      <EpriumDebrief />
      <EpriumAudiences />
      <EpriumOutcomes />
      <EpriumCapabilities />
      <EpriumFaculty />
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>
            {"START A CONVERSATION"}
          </p>
          <h2>
            {"Ready to Transform the Way You Train?"}
          </h2>
          <p>
            {"Discover how MXR can help your organisation create safer, smarter and more effective learning experiences."}
          </p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"/contact"}>
            {"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  )
}

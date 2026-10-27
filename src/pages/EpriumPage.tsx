import type { CSSProperties } from 'react'
import { ArrowRight, Glasses, Brain, BarChart3, FileText } from 'lucide-react'
import { EpriumJourney } from '../components/EpriumJourney'
import { EpriumDebrief } from '../components/EpriumDebrief'
import { EpriumAudiences } from '../components/EpriumAudiences'
import { EpriumOutcomes } from '../components/EpriumOutcomes'
import { EpriumCapabilities } from "../components/EpriumCapabilities"
import { EpriumFaculty } from "../components/EpriumFaculty"
import clinicalLearning from '../assets/images/eprium/clinical-learning.jpg'
import clinicalPractice from '../assets/images/eprium/clinical-practice.jpg'

export default function EpriumPage() {
  return (
    <main className={"pp ep-page"} style={{ "--product-accent": "#087f8c" } as CSSProperties}>
      <section className="ep2-hero">
        <img className="ep2-bg" src={clinicalPractice} alt="" fetchPriority="high" />
        <div className="ep2-shade" aria-hidden="true" />
        <div className="ep2-grid" aria-hidden="true" />
        <div className="ep2-glow" aria-hidden="true" />
        <div className="ep2-hero-inner">
          <h1 className="banner-title banner-title--stacked">From classroom to <em>clinical readiness.</em></h1>
          <p className="ep2-lead banner-lead">Clinical learning connected to the decisions, documentation and digital workflows of modern patient care.</p>
          <div className="ep2-actions">
            <a href="mailto:hello@mxr.ai?subject=EPRium%20demonstration" className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base">Book a Demonstration <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
            <a href="#epr-experience" className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition-all duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base">Follow a Patient Journey <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>

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
            <img src={clinicalLearning} alt={"EPRium on a laptop alongside patient record, observation and medication screens"} loading={"lazy"} />
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
            <div className={"epr-gap-record"} aria-hidden={"true"}>
              <div className={"epr-gap-record-top"}>
                <b>
                  {"EPRium"}
                </b>
                <span>
                  {"SIMULATION"}
                </span>
              </div>
              <div className={"epr-gap-patient"}>
                <span>
                  {"＋"}
                </span>
                <div>
                  <b>
                    {"Patient record"}
                  </b>
                  <small>
                    {"Clinical learning environment"}
                  </small>
                </div>
              </div>
              <div className={"epr-gap-record-row"}>
                <span>
                  {"Observations"}
                </span>
                <i>
                  {"✓"}
                </i>
              </div>
              <div className={"epr-gap-record-row"}>
                <span>
                  {"Assessment"}
                </span>
                <i>
                  {"✓"}
                </i>
              </div>
              <div className={"epr-gap-record-row"}>
                <span>
                  {"Care plan"}
                </span>
                <i>
                  {"✓"}
                </i>
              </div>
              <small className={"epr-gap-preview"}>
                {"ILLUSTRATIVE VIEW"}
              </small>
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
              <img src={clinicalPractice} alt={"Healthcare professional using a digital device"} loading={"lazy"} />
              <span>
                {"Learning"}
                <br />
                {"with purpose."}
              </span>
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
      <section className={"ep-audience ep-wrap"}>
        <p className={"eyebrow"}>
          {"DESIGNED FOR HEALTHCARE EDUCATION"}
        </p>
        <div>
          <span>
            {"Medicine"}
          </span>
          <span>
            {"Nursing"}
          </span>
          <span>
            {"Paramedicine"}
          </span>
          <span>
            {"Allied health"}
          </span>
        </div>
      </section>
      <section className={"ep-cta"}>
        <div className={"ep-wrap"}>
          <div>
            <p className={"eyebrow"}>
              {"SEE EPRIUM IN ACTION"}
            </p>
            <h2>
              {"More practice."}
              <br />
              <span>
                {"More confidence."}
              </span>
            </h2>
            <p>
              {"Explore how EPRium can fit your learners, teaching and clinical training goals."}
            </p>
            <a className={"ep-button"} href={"mailto:hello@mxr.ai?subject=EPRium%20demonstration"}>
              {"Book a demonstration "}
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 12h16m-6-6 6 6-6 6"}>

                </path>
              </svg>
            </a>
          </div>
          <div className={"ep-cta-visual"} aria-hidden={"true"}>
            <div>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <circle cx={"12"} cy={"8"} r={"4"}>

                </circle>
                <path d={"M4 21v-2a8 8 0 0 1 16 0v2"}>

                </path>
              </svg>
              <span>
                {"Patient encounter"}
              </span>
            </div>
            <i>

            </i>
            <div>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M20 5c-4-4-8 1-8 1S8 1 4 5c-5 6 8 15 8 15S25 11 20 5Z"}>

                </path>
                <path d={"M3 12h5l2-3 3 6 2-3h6"}>

                </path>
              </svg>
              <span>
                {"Clinical reasoning"}
              </span>
            </div>
            <i>

            </i>
            <div>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <rect x={"5"} y={"3"} width={"14"} height={"19"} rx={"2"}>

                </rect>
                <path d={"M9 3V1h6v2M9 9h6m-6 4h6m-6 4h4"}>

                </path>
              </svg>
              <span>
                {"Digital documentation"}
              </span>
            </div>
          </div>
        </div>
      </section>
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
          <a className={"btn btn-secondary"} href={"/#solutions"}>
            {"Explore Solutions"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  )
}

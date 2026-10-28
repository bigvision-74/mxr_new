import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import RelatedServices from '../components/RelatedServices'

export default function SimulatorDevelopmentPage() {
  return (
    <main className={"service-detail"}>
      <section className={"service-detail-hero"}>
        <div>

          <div className={"about-hero-title"}>
            <h1 className="banner-title">
              <span className={"about-title-dark"}>
                {"Prepare for the"}
              </span>
              <span className={"about-title-dark"}>
                {"real world. "}
                <em>
                  {"Before it"}
                </em>
              </span>
              <span>
                {"happens."}
              </span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Purpose-built simulators help teams practise complex tasks, build confidence and explore decisions in a safe, repeatable environment."}
          </p>
          <div className={"button-row"}>
            <a className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base" href={"mailto:hello@mxr.ai?subject=Simulator%20Development%20enquiry"}>
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
        <div className={"service-detail-image"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={defaultBanner} type={"video/mp4"} />
          </video>

        </div>
      </section>
      <section className={"section service-deliver"}>
        <div>
          <p className={"eyebrow"}>
            {"WHAT WE DELIVER"}
          </p>
          <h2>
            {"Built around your challenge."}
          </h2>
        </div>
        <div className={"service-feature-grid"}>
          <article>
            <span>
              {"01"}
            </span>
            <h3>
              {"Realistic interaction"}
            </h3>
            <p>
              {"Recreate equipment, controls and procedures around the tasks your people perform."}
            </p>
          </article>
          <article>
            <span>
              {"02"}
            </span>
            <h3>
              {"Scenario-based training"}
            </h3>
            <p>
              {"Build repeatable exercises with changing conditions, events and operational challenges."}
            </p>
          </article>
          <article>
            <span>
              {"03"}
            </span>
            <h3>
              {"Instructor control"}
            </h3>
            <p>
              {"Give trainers the tools to guide sessions, adjust difficulty and support structured debriefs."}
            </p>
          </article>
          <article>
            <span>
              {"04"}
            </span>
            <h3>
              {"Performance insight"}
            </h3>
            <p>
              {"Capture relevant actions and outcomes to support feedback and assessment."}
            </p>
          </article>
        </div>
      </section>
      <section className={"section service-outcome"}>
        <div>
          <p className={"eyebrow"}>
            {"THE APPROACH"}
          </p>
          <h2>
            {"Make practice practical."}
          </h2>
          <p>
            {"We align fidelity, hardware and interaction with your learning objectives. Desktop, immersive and integrated hardware approaches can be shaped around your environment and budget."}
          </p>
        </div>
        <div className={"service-use-cases"}>
          <small>
            {"WHERE IT FITS"}
          </small>
          <p>
            <span>
              {"↗"}
            </span>
            {"Vehicle and equipment training"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Emergency response exercises"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Defence readiness"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Procedural and safety training"}
          </p>
        </div>
      </section>
      <section className={"section service-steps"}>
        <p className={"eyebrow"}>
          {"WORKING WITH MXR"}
        </p>
        <h2>
          {"A clear route from idea to delivery."}
        </h2>
        <div>
          <article>
            <b>
              {"01"}
            </b>
            <h3>
              {"Discover"}
            </h3>
            <p>
              {"Understand your users, objectives and environment."}
            </p>
          </article>
          <article>
            <b>
              {"02"}
            </b>
            <h3>
              {"Design"}
            </h3>
            <p>
              {"Shape the experience and validate the approach."}
            </p>
          </article>
          <article>
            <b>
              {"03"}
            </b>
            <h3>
              {"Develop"}
            </h3>
            <p>
              {"Build iteratively with regular review and feedback."}
            </p>
          </article>
          <article>
            <b>
              {"04"}
            </b>
            <h3>
              {"Deploy & evolve"}
            </h3>
            <p>
              {"Support launch, adoption and continued improvement."}
            </p>
          </article>
        </div>
      </section>
      <RelatedServices />
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>
            {"LET’S BUILD WHAT’S NEXT"}
          </p>
          <h2>
            {"Have a project in mind?"}
          </h2>
          <p>
            {"Tell us what you want to achieve. We’ll help define a practical next step."}
          </p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Simulator%20Development%20enquiry"}>{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

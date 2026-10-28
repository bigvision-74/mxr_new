import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'

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
      <section className={"section service-related service-related--cards"}>
        <p className={"eyebrow"}>
          {"CONNECTED CAPABILITIES"}
        </p>
        <h2>
          {"Explore our other services."}
        </h2>
        <div className={"service-related-grid"}>
          <a href={"/xr-development"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="18" width="44" height="26" rx="8" stroke="#0B66C3" strokeWidth="1.8"/>
                <path d="M6 30h8M42 30h8" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="19" cy="30" r="5" stroke="#0B66C3" strokeWidth="1.8"/>
                <circle cx="37" cy="30" r="5" stroke="#0B66C3" strokeWidth="1.8"/>
                <path d="M24 30h8" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M28 12v6M22 13.5l2 5M34 13.5l-2 5" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </span>
            <strong>{"XR DEVELOPMENT"}</strong>
            <p>{"Design and build immersive XR experiences tailored to your training, simulation and engagement goals."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </a>
          <a href={"/immersive-rooms"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="14" width="48" height="28" rx="3" stroke="#0B66C3" strokeWidth="1.8"/>
                <path d="M4 36h48" stroke="#0B66C3" strokeWidth="1.8"/>
                <rect x="10" y="20" width="36" height="12" rx="2" stroke="#0B66C3" strokeWidth="1.5"/>
                <path d="M22 44h12M28 42v2" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="28" cy="26" r="3" stroke="#0B66C3" strokeWidth="1.5"/>
              </svg>
            </span>
            <strong>{"IMMERSIVE ROOMS"}</strong>
            <p>{"Purpose-designed spaces using large-format displays and projection to create shared immersive environments."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </a>
          <a href={"/ai-solutions"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="10" stroke="#0B66C3" strokeWidth="1.8"/>
                <path d="M28 8v6M28 42v6M8 28h6M42 28h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M14.1 14.1l4.2 4.2M37.7 37.7l4.2 4.2M41.9 14.1l-4.2 4.2M18.3 37.7l-4.2 4.2" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round"/>
                <circle cx="28" cy="28" r="4" stroke="#0B66C3" strokeWidth="1.5"/>
                <circle cx="28" cy="28" r="1.5" fill="#0B66C3"/>
              </svg>
            </span>
            <strong>{"AI SOLUTIONS"}</strong>
            <p>{"Integrate AI-driven tools to enhance learning, automate content generation and surface actionable insights."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </a>
          <a href={"/platform-development"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="40" height="32" rx="3" stroke="#0B66C3" strokeWidth="1.8"/>
                <path d="M8 20h40" stroke="#0B66C3" strokeWidth="1.8"/>
                <circle cx="14" cy="16" r="1.5" fill="#0B66C3"/>
                <circle cx="19" cy="16" r="1.5" fill="#0B66C3"/>
                <circle cx="24" cy="16" r="1.5" fill="#0B66C3"/>
                <path d="M21 30l-4 4 4 4M35 30l4 4-4 4M27 28l2 10" stroke="#0B66C3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <strong>{"PLATFORM DEVELOPMENT"}</strong>
            <p>{"Design and develop bespoke platforms for LMS, workforce development and data analytics with seamless integration."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </a>
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

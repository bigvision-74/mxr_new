import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'

export default function XrDevelopmentPage() {
  return (
    <main className={"service-detail"}>
      <section className={"service-detail-hero"}>
        <div>
          <div className={"about-hero-title"}>
            <h1 className="banner-title">
              <span className={"about-title-dark"}>
                {"Bring learning into"}
              </span>
              <span>
                {"a "}
                <em>
                  {"new dimension."}
                </em>
              </span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Virtual, augmented and mixed reality experiences that help people understand, rehearse and interact with the world in new ways."}
          </p>
          <div className={"button-row"}>
            <a className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base" href={"mailto:hello@mxr.ai?subject=XR%20Development%20enquiry"}>
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
              {"Virtual reality"}
            </h3>
            <p>
              {"Create focused environments for skills practice, walkthroughs and scenario-based learning."}
            </p>
          </article>
          <article>
            <span>
              {"02"}
            </span>
            <h3>
              {"Augmented reality"}
            </h3>
            <p>
              {"Place useful digital information and interactive 3D content into the real world."}
            </p>
          </article>
          <article>
            <span>
              {"03"}
            </span>
            <h3>
              {"Mixed reality"}
            </h3>
            <p>
              {"Connect physical spaces and digital experiences for contextual, hands-on interaction."}
            </p>
          </article>
          <article>
            <span>
              {"04"}
            </span>
            <h3>
              {"Connected experiences"}
            </h3>
            <p>
              {"Design shared sessions and supporting workflows around learners and facilitators."}
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
            {"Immersion with a purpose."}
          </h2>
          <p>
            {"We start with the task and the user, then select the interaction and device approach. Comfort, accessibility and deployment requirements inform the experience from the beginning."}
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
            {"Immersive education"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Equipment familiarisation"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Spatial visualisation"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Workplace training"}
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
      <section className={"section service-related"}>
        <p className={"eyebrow"}>
          {"CONNECTED CAPABILITIES"}
        </p>
        <h2>
          {"Explore our other services."}
        </h2>
        <div>
          <a href={"/simulator-development"}>
            {"Simulator Development"}
            <span>
              {"↗"}
            </span>
          </a>
          <a href={"/immersive-rooms"}>
            {"Immersive Rooms"}
            <span>
              {"↗"}
            </span>
          </a>
          <a href={"/ai-solutions"}>
            {"AI Solutions"}
            <span>
              {"↗"}
            </span>
          </a>
          <a href={"/platform-development"}>
            {"Platform Development"}
            <span>
              {"↗"}
            </span>
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
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=XR%20Development%20enquiry"}>{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

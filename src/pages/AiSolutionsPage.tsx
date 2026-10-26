import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'

export default function AiSolutionsPage() {
  return (
    <main className={"service-detail"}>
      <section className={"service-detail-hero"}>
        <div>
          <div className={"about-hero-title"}>
            <h1 className="banner-title">
              <span className={"about-title-dark"}>
                {"Intelligence that makes"}
              </span>
              <span>
                {"work "}
                <em>
                  {"more effective."}
                </em>
              </span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Practical AI solutions that support learning, simplify information workflows and help teams focus on higher-value tasks."}
          </p>
          <div className={"button-row"}>
            <a className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base" href={"mailto:hello@mxr.ai?subject=AI%20Solutions%20enquiry"}>
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition-all duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base" href={"/contact"}>
              {"Start a Conversation"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
              {"Knowledge assistants"}
            </h3>
            <p>
              {"Help users navigate approved information through natural-language interactions."}
            </p>
          </article>
          <article>
            <span>
              {"02"}
            </span>
            <h3>
              {"Content workflows"}
            </h3>
            <p>
              {"Support drafting and preparation of learning materials with human review."}
            </p>
          </article>
          <article>
            <span>
              {"03"}
            </span>
            <h3>
              {"Adaptive experiences"}
            </h3>
            <p>
              {"Use context and interaction to shape more responsive learning journeys."}
            </p>
          </article>
          <article>
            <span>
              {"04"}
            </span>
            <h3>
              {"Platform integration"}
            </h3>
            <p>
              {"Connect AI capabilities to existing applications and operational workflows."}
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
            {"Useful AI. Carefully integrated."}
          </h2>
          <p>
            {"We define a focused use case, evaluate available data and build a reviewable prototype. Data handling, evaluation and human oversight are considered alongside usability and performance."}
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
            {"Learning support"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Document and knowledge discovery"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Content preparation"}
          </p>
          <p>
            <span>
              {"↗"}
            </span>
            {"Workflow assistance"}
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
          <a href={"/xr-development"}>
            {"XR Development"}
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
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=AI%20Solutions%20enquiry"}>
            {"Talk to our team →"}
          </a>
          <a className={"btn btn-secondary"} href={"/contact"}>
            {"Start a Conversation"}
          </a>
        </div>
      </section>
    </main>
  )
}

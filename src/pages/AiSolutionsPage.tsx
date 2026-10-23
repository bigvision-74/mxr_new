import type { CSSProperties } from 'react'
import analyticsImg from '../assets/images/drivexr/analytics.webp'

export default function AiSolutionsPage() {
  return (
  <main className={"service-detail"}>
    <section className={"service-detail-hero"}>
      <div>
        <p className={"eyebrow"}>
          {"MXR SERVICES / AI SOLUTIONS"}
        </p>
        <h1>
          {"Intelligence that makes work more effective."}
        </h1>
        <p>
          {"Practical AI solutions that support learning, simplify information workflows and help teams focus on higher-value tasks."}
        </p>
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=AI%20Solutions%20enquiry"}>
          {"Discuss your project →"}
        </a>
        <a className={"service-back"} href={"/#services"}>
          {"All services"}
        </a>
      </div>
      <div className={"service-detail-image"}>
        <img src={analyticsImg} alt={"AI Solutions at MXR"} />
        <span>
          {"DESIGNED AROUND REAL OUTCOMES"}
        </span>
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
    <section className={"final-cta"}>
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
      <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=AI%20Solutions%20enquiry"}>
        {"Talk to our team →"}
      </a>
    </section>
  </main>
  )
}

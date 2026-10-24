import type { CSSProperties } from 'react'
import simulatorImg from '../assets/images/drivexr/simulator.webp'

export default function SimulatorDevelopmentPage() {
  return (
  <main className={"service-detail"}>
    <section className={"service-detail-hero"}>
      <div>
        <p className={"eyebrow"}>
          {"MXR SERVICES / SIMULATOR DEVELOPMENT"}
        </p>
        <h1 className="banner-title">
          {"Prepare for the real world. Before it happens."}
        </h1>
        <p className="banner-lead">
          {"Purpose-built simulators help teams practise complex tasks, build confidence and explore decisions in a safe, repeatable environment."}
        </p>
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Simulator%20Development%20enquiry"}>
          {"Discuss your project →"}
        </a>
        <a className={"service-back"} href={"/#services"}>
          {"All services"}
        </a>
      </div>
      <div className={"service-detail-image"}>
        <img src={simulatorImg} alt={"Simulator Development at MXR"} />
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
    <section className={"section service-related"}>
      <p className={"eyebrow"}>
        {"CONNECTED CAPABILITIES"}
      </p>
      <h2>
        {"Explore our other services."}
      </h2>
      <div>
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
      <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Simulator%20Development%20enquiry"}>
        {"Talk to our team →"}
      </a>
    </section>
  </main>
  )
}

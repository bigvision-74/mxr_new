import type { CSSProperties } from 'react'
import aboutValues from '../assets/images/about/about-values.webp'

export default function PlatformDevelopmentPage() {
  return (
  <main className={"service-detail"}>
    <section className={"service-detail-hero"}>
      <div>
        <p className={"eyebrow"}>
          {"MXR SERVICES / PLATFORM DEVELOPMENT"}
        </p>
        <h1>
          {"Software built around the way you work."}
        </h1>
        <p>
          {"Web, mobile and desktop platforms that connect users, content and workflows in a clear, dependable digital experience."}
        </p>
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Platform%20Development%20enquiry"}>
          {"Discuss your project →"}
        </a>
        <a className={"service-back"} href={"/#services"}>
          {"All services"}
        </a>
      </div>
      <div className={"service-detail-image"}>
        <img src={aboutValues} alt={"Platform Development at MXR"} />
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
            {"Application development"}
          </h3>
          <p>
            {"Build responsive web, mobile and desktop tools around defined user needs."}
          </p>
        </article>
        <article>
          <span>
            {"02"}
          </span>
          <h3>
            {"Administration and access"}
          </h3>
          <p>
            {"Design roles, content management and operational controls for your teams."}
          </p>
        </article>
        <article>
          <span>
            {"03"}
          </span>
          <h3>
            {"Systems integration"}
          </h3>
          <p>
            {"Connect services, APIs and data flows across your technology environment."}
          </p>
        </article>
        <article>
          <span>
            {"04"}
          </span>
          <h3>
            {"Reporting and evolution"}
          </h3>
          <p>
            {"Make information useful and establish a route for ongoing improvements."}
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
          {"From first concept to everyday use."}
        </h2>
        <p>
          {"We combine experience design and engineering with an iterative delivery process, shaping the architecture around your requirements for security, maintainability and future growth."}
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
          {"Learning platforms"}
        </p>
        <p>
          <span>
            {"↗"}
          </span>
          {"Simulation management"}
        </p>
        <p>
          <span>
            {"↗"}
          </span>
          {"Operational portals"}
        </p>
        <p>
          <span>
            {"↗"}
          </span>
          {"Product ecosystems"}
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
        <a href={"/ai-solutions"}>
          {"AI Solutions"}
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
      <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Platform%20Development%20enquiry"}>
        {"Talk to our team →"}
      </a>
    </section>
  </main>
  )
}

import type { CSSProperties } from 'react'
import useCasesImg from '../assets/images/drivexr/use-cases.webp'

export default function ImmersiveRoomsPage() {
  return (
  <main className={"service-detail"}>
    <section className={"service-detail-hero"}>
      <div>
        <p className={"eyebrow"}>
          {"MXR SERVICES / IMMERSIVE ROOMS"}
        </p>
        <h1 className="banner-title">
          {"Turn a shared space into a shared experience."}
        </h1>
        <p className="banner-lead">
          {"Projection-led environments bring teams together for immersive learning, collaborative exploration and facilitated simulation."}
        </p>
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Immersive%20Rooms%20enquiry"}>
          {"Discuss your project →"}
        </a>
        <a className={"service-back"} href={"/#services"}>
          {"All services"}
        </a>
      </div>
      <div className={"service-detail-image"}>
        <img src={useCasesImg} alt={"Immersive Rooms at MXR"} />
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
            {"Panoramic environments"}
          </h3>
          <p>
            {"Present 360° video and visual environments across a room-scale canvas."}
          </p>
        </article>
        <article>
          <span>
            {"02"}
          </span>
          <h3>
            {"Facilitated scenarios"}
          </h3>
          <p>
            {"Structure sessions around decisions, discussions and instructor-led learning."}
          </p>
        </article>
        <article>
          <span>
            {"03"}
          </span>
          <h3>
            {"Interactive content"}
          </h3>
          <p>
            {"Shape interaction around the room configuration, available devices and intended experience."}
          </p>
        </article>
        <article>
          <span>
            {"04"}
          </span>
          <h3>
            {"Content and integration"}
          </h3>
          <p>
            {"Plan media workflows and system integration to suit your installation."}
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
          {"A room designed around your people."}
        </h2>
        <p>
          {"We work with you to define the content, controls and software needed for your immersive environment, with an approach tailored to the room and its users."}
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
          {"Team-based learning"}
        </p>
        <p>
          <span>
            {"↗"}
          </span>
          {"Clinical and emergency scenarios"}
        </p>
        <p>
          <span>
            {"↗"}
          </span>
          {"Environmental familiarisation"}
        </p>
        <p>
          <span>
            {"↗"}
          </span>
          {"Collaborative presentations"}
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
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Immersive%20Rooms%20enquiry"}>
          {"Talk to our team →"}
        </a>
      </div>
    </section>
  </main>
  )
}

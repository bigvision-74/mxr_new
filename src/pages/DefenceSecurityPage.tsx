import type { CSSProperties } from 'react'

export default function DefenceSecurityPage() {
  return (
  <main>
    <section className={"detail-hero solution-hero"}>
      <div className={"detail-hero-copy reveal visible"}>
        <nav className={"breadcrumbs"} aria-label={"Breadcrumb"}>
          <a href={"/"}>
            {"Home"}
          </a>
          <span>
            {"/"}
          </span>
          <a href={"/#solutions"}>
            {"Solutions"}
          </a>
          <span>
            {"/"}
          </span>
          <b>
            {"Defence & Security"}
          </b>
        </nav>
        <p className={"eyebrow light"}>
          {"DEFENCE & SECURITY"}
        </p>
        <h1>
          {"Train with confidence."}
          <br />
          <span>
            {"Prepare for reality."}
          </span>
        </h1>
        <p>
          {"Immersive, scalable simulation solutions that help defence and security teams build knowledge, practise procedures and develop readiness in safe, controlled environments."}
        </p>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"#capabilities"}>
            {"Explore capabilities →"}
          </a>
          <a className={"btn btn-ghost"} href={"mailto:hello@mxr.ai"}>
            {"Discuss your requirement"}
          </a>
        </div>
      </div>
      <div className={"detail-hero-image reveal visible"}>
        <img src={"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85"} alt={"Specialist using advanced training technology"} />
        <div className={"detail-image-overlay"}>

        </div>
        <div className={"hero-metric"}>
          <small>
            {"DESIGNED AROUND"}
          </small>
          <strong>
            {"People · Skills · Safety"}
          </strong>
        </div>
      </div>
    </section>
    <section className={"detail-intro section"}>
      <div className={"detail-kicker reveal visible"}>
        <span>
          {"01"}
        </span>
        <p className={"eyebrow"}>
          {"THE CHALLENGE"}
        </p>
      </div>
      <div className={"detail-statement reveal visible"}>
        <h2>
          {"Complex environments demand better preparation."}
        </h2>
        <p>
          {"Traditional training can be restricted by time, location, equipment availability and risk. MXR brings practical learning closer to the point of need—helping teams explore complex subjects, repeat critical activities and build confidence before entering real environments."}
        </p>
      </div>
    </section>
    <section className={"capability-section"} id={"capabilities"}>
      <div className={"section-heading reveal visible"}>
        <div>
          <p className={"eyebrow light"}>
            {"CORE CAPABILITIES"}
          </p>
          <h2>
            {"One connected approach to readiness."}
          </h2>
        </div>
        <p>
          {"Flexible technologies that support individual knowledge, team rehearsal and instructor-led learning."}
        </p>
      </div>
      <div className={"capability-grid"}>
        <article className={"reveal visible"}>
          <span>
            {"01"}
          </span>
          <div className={"cap-icon"}>
            {"◎"}
          </div>
          <h3>
            {"Immersive Simulation"}
          </h3>
          <p>
            {"Realistic VR and MR environments for practising procedures, decisions and team coordination without operational risk."}
          </p>
        </article>
        <article className={"reveal visible"}>
          <span>
            {"02"}
          </span>
          <div className={"cap-icon"}>
            {"◇"}
          </div>
          <h3>
            {"Interactive 3D Knowledge"}
          </h3>
          <p>
            {"Detailed digital assets make complex equipment and ordnance easier to inspect, understand and recall."}
          </p>
        </article>
        <article className={"reveal visible"}>
          <span>
            {"03"}
          </span>
          <div className={"cap-icon"}>
            {"↗"}
          </div>
          <h3>
            {"Scenario-Based Training"}
          </h3>
          <p>
            {"Structured scenarios allow instructors to introduce changing conditions and assess performance consistently."}
          </p>
        </article>
        <article className={"reveal visible"}>
          <span>
            {"04"}
          </span>
          <div className={"cap-icon"}>
            {"▦"}
          </div>
          <h3>
            {"Training Intelligence"}
          </h3>
          <p>
            {"Session data and assessment insights help organisations identify gaps and improve learning over time."}
          </p>
        </article>
      </div>
    </section>
    <section className={"outcomes section"}>
      <div className={"outcome-visual reveal visible"}>
        <img src={"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85"} alt={"Team reviewing digital training information"} />
        <div className={"image-label"}>
          <small>
            {"MXR TRAINING ECOSYSTEM"}
          </small>
          <b>
            {"Learn anywhere. Rehearse safely. Improve continuously."}
          </b>
        </div>
      </div>
      <div className={"outcome-copy reveal visible"}>
        <p className={"eyebrow"}>
          {"BUILT AROUND OUTCOMES"}
        </p>
        <h2>
          {"From familiarisation to confident action."}
        </h2>
        <p>
          {"Our solutions support the complete learning journey, connecting clear visual instruction with practical rehearsal and measurable assessment."}
        </p>
        <ol>
          <li>
            <b>
              {"Learn"}
            </b>
            <span>
              {"Build accurate knowledge through interactive content."}
            </span>
          </li>
          <li>
            <b>
              {"Practise"}
            </b>
            <span>
              {"Repeat procedures in a controlled environment."}
            </span>
          </li>
          <li>
            <b>
              {"Assess"}
            </b>
            <span>
              {"Capture performance and identify development needs."}
            </span>
          </li>
          <li>
            <b>
              {"Improve"}
            </b>
            <span>
              {"Use insight to strengthen future training."}
            </span>
          </li>
        </ol>
      </div>
    </section>
    <section className={"related-product"}>
      <div className={"related-copy reveal visible"}>
        <p className={"eyebrow light"}>
          {"RELATED PRODUCT"}
        </p>
        <h2>
          {"Meet MODAL"}
          <span>
            {"3D"}
          </span>
        </h2>
        <p>
          {"A digital ammunition and ordnance library that turns detailed 3D visualisation into accessible, structured knowledge across web, mobile and AR."}
        </p>
        <a className={"btn btn-white"} href={"/modal3d"}>
          {"Explore MODAL3D →"}
        </a>
      </div>
      <div className={"related-specs reveal visible"}>
        <div>
          <small>
            {"ACCESS"}
          </small>
          <b>
            {"Web · Mobile · AR"}
          </b>
        </div>
        <div>
          <small>
            {"CONTENT"}
          </small>
          <b>
            {"Interactive 3D assets"}
          </b>
        </div>
        <div>
          <small>
            {"USE"}
          </small>
          <b>
            {"Learn · Retain · Assess"}
          </b>
        </div>
      </div>
    </section>
    <section className={"final-cta"}>
      <div>
        <p className={"eyebrow"}>
          {"START A CONVERSATION"}
        </p>
        <h2>
          {"Build the right training solution for your team."}
        </h2>
        <p>
          {"Tell us about your requirements, learners and operational environment."}
        </p>
      </div>
      <div className={"button-row"}>
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai"}>
          {"Talk to Our Team →"}
        </a>
      </div>
    </section>
  </main>
  )
}

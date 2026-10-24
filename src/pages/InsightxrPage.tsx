import type { CSSProperties } from 'react'
import insightxrDevices from '../assets/images/insightxr-devices.png'
import insightxrPlatform from '../assets/images/insightxr-platform.png'

export default function InsightxrPage() {
  return (
  <main className={"pp"} style={{"--product-accent": "#0b66c3"} as CSSProperties}>
    <section className={"pp-hero"}>
      <div className={"pp-copy"}>
        <a className={"pp-breadcrumb"} href={"/#products"}>
          {"Products / InsightXR"}
        </a>
        <p className={"eyebrow"}>
          {"XR LEARNING MANAGEMENT & ANALYTICS"}
        </p>
        <h1 className="banner-title">
          {"Manage immersive learning."}
          <br />
          {"Measure what matters."}
        </h1>
        <p className="pp-lead banner-lead">
          {"Bring content, learners, devices and performance data together to deliver a connected XR learning programme."}
        </p>
        <div className={"pp-actions"}>
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=InsightXR%20demo"}>
            {"Book a demo ↗"}
          </a>
          <a href={"#product-benefits"}>
            {"Explore InsightXR ↓"}
          </a>
        </div>
        <div className={"pp-tags"}>
          <span>
            {"Learning delivery"}
          </span>
          <span>
            {"Cohort management"}
          </span>
          <span>
            {"Training insight"}
          </span>
        </div>
      </div>
      <div className={"pp-stage"}>
        <div className={"pp-screen"}>
          <div className={"pp-screen-bar"}>
            {"InsightXR "}
            <span>
              {"LEARNING & ANALYTICS"}
            </span>
          </div>
          <img src={insightxrDevices} alt={"InsightXR platform interface"} />
        </div>
        <span className={"pp-stage-caption"}>
          {"INSIGHTXR / BY MXR"}
        </span>
      </div>
    </section>
    <section className={"pp-benefits"} id={"product-benefits"}>
      <div className={"pp-heading"}>
        <div>
          <p className={"eyebrow"}>
            {"DESIGNED AROUND OUTCOMES"}
          </p>
          <h2>
            {"More clarity."}
            <br />
            {"Greater confidence."}
          </h2>
        </div>
        <p>
          {"Purposeful tools that make every experience count."}
        </p>
      </div>
      <div className={"pp-benefit-grid"}>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M8 3H4v18h16V3h-4M8 2h8v4H8V2Zm0 9h8m-8 5h5"}>

              </path>
            </svg>
          </div>
          <small>
            {"01"}
          </small>
          <h3>
            {"Organise your programme"}
          </h3>
          <p>
            {"Bring immersive content, learners and cohorts into one structured workflow."}
          </p>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 7h16M4 17h16M8 4v6m8 4v6"}>

              </path>
            </svg>
          </div>
          <small>
            {"02"}
          </small>
          <h3>
            {"Deliver consistently"}
          </h3>
          <p>
            {"Coordinate training across supported devices, teams and locations."}
          </p>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 3v18h17M8 16v-4m5 4V8m5 8V5"}>

              </path>
            </svg>
          </div>
          <small>
            {"03"}
          </small>
          <h3>
            {"Understand progress"}
          </h3>
          <p>
            {"Use session and assessment data to support feedback and programme decisions."}
          </p>
        </article>
      </div>
    </section>
    <section className={"pp-experience"}>
      <div className={"pp-experience-visual"}>
        <img src={insightxrPlatform} alt={"InsightXR connects immersive experiences across devices"} loading={"lazy"} />
      </div>
      <div>
        <p className={"eyebrow"}>
          {"THE EXPERIENCE"}
        </p>
        <h2>
          {"A connected view of immersive learning."}
        </h2>
        <div className={"pp-steps"}>
          <article>
            <b>
              {"01"}
            </b>
            <div>
              <h3>
                {"Organise"}
              </h3>
              <p>
                {"Build your library and define learner groups."}
              </p>
            </div>
          </article>
          <article>
            <b>
              {"02"}
            </b>
            <div>
              <h3>
                {"Deliver"}
              </h3>
              <p>
                {"Assign content and monitor training activity."}
              </p>
            </div>
          </article>
          <article>
            <b>
              {"03"}
            </b>
            <div>
              <h3>
                {"Improve"}
              </h3>
              <p>
                {"Review progress and refine your programme."}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section className={"pp-features"} id={"product-features"}>
      <div className={"pp-heading"}>
        <div>
          <p className={"eyebrow"}>
            {"PRODUCT FEATURES"}
          </p>
          <h2>
            {"The tools behind"}
            <br />
            {"the experience."}
          </h2>
        </div>
        <p>
          {"Explore the capabilities that support your programme."}
        </p>
      </div>
      <div className={"pp-feature-grid"}>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3 3 8v9l9 5 9-5V8L12 3Zm0 0v10m-9-5 9 5 9-5m-9 5v9"}>

              </path>
            </svg>
          </div>
          <div>
            <h3>
              {"Content library"}
            </h3>
            <p>
              {"Organise XR and supporting resources."}
            </p>
          </div>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2"}>

              </path>
            </svg>
          </div>
          <div>
            <h3>
              {"Learner & cohort management"}
            </h3>
            <p>
              {"Manage users, groups and pathways."}
            </p>
          </div>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 7h16M4 17h16M8 4v6m8 4v6"}>

              </path>
            </svg>
          </div>
          <div>
            <h3>
              {"Multi-device delivery"}
            </h3>
            <p>
              {"Coordinate training across supported devices."}
            </p>
          </div>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 12h8m-4-4v8"}>

              </path>
            </svg>
          </div>
          <div>
            <h3>
              {"Session monitoring"}
            </h3>
            <p>
              {"Follow training activity and progress."}
            </p>
          </div>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 3v18h17M8 16v-4m5 4V8m5 8V5"}>

              </path>
            </svg>
          </div>
          <div>
            <h3>
              {"Performance analytics"}
            </h3>
            <p>
              {"Review scores, decisions and completion."}
            </p>
          </div>
        </article>
        <article>
          <div className={"pp-icon"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M8 3H4v18h16V3h-4M8 2h8v4H8V2Zm0 9h8m-8 5h5"}>

              </path>
            </svg>
          </div>
          <div>
            <h3>
              {"Assessment & reporting"}
            </h3>
            <p>
              {"Capture evidence to support feedback."}
            </p>
          </div>
        </article>
      </div>
    </section>
    <section className={"pp-audience"}>
      <p className={"eyebrow"}>
        {"BUILT FOR YOUR WORLD"}
      </p>
      <div>
        <span>
          {"Education"}
        </span>
        <span>
          {"Healthcare"}
        </span>
        <span>
          {"Enterprise training"}
        </span>
      </div>
    </section>
    <section className={"pp-cta"}>
      <div>
        <p className={"eyebrow"}>
          {"SEE INSIGHTXR IN ACTION"}
        </p>
        <h2>
          {"See how it fits your organisation."}
        </h2>
        <p>
          {"Explore the experience with our team, around your training goals."}
        </p>
      </div>
      <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=InsightXR%20demo"}>
        {"Book a demo ↗"}
      </a>
    </section>
  </main>
  )
}

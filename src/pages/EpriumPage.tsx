import type { CSSProperties } from 'react'
import clinicalLearning from '../assets/images/eprium/clinical-learning.jpg'
import clinicalPractice from '../assets/images/eprium/clinical-practice.jpg'

export default function EpriumPage() {
  return (
  <main className={"pp ep-page"} style={{"--product-accent": "#087f8c"} as CSSProperties}>
    <section className={"ep-hero"}>
      <div className={"ep-hero-inner"}>
        <div className={"ep-hero-copy"}>
          <a className={"ep-breadcrumb"} href={"/index.html"}>
            {"MXR / PRODUCTS / EPRIUM"}
          </a>
          <p className={"eyebrow"}>
            {"CLINICAL SIMULATION PLATFORM"}
          </p>
          <h1>
            {"Practise the patient."}
            <br />
            <span>
              {"Before you meet"}
              <br />
              {"the patient."}
            </span>
          </h1>
          <p>
            {"Connect patient encounters, clinical reasoning and digital records in one safe place to practise."}
          </p>
          <div className={"ep-hero-actions"}>
            <a className={"ep-button"} href={"mailto:hello@mxr.ai?subject=EPRium%20demonstration"}>
              {"Book a demonstration "}
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 12h16m-6-6 6 6-6 6"}>

                </path>
              </svg>
            </a>
            <a href={"#epr-experience"}>
              {"Explore the experience "}
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 12h16m-6-6 6 6-6 6"}>

                </path>
              </svg>
            </a>
          </div>
          <div className={"ep-hero-tags"}>
            <span>
              {"Virtual patients"}
            </span>
            <span>
              {"Simulated EPR"}
            </span>
            <span>
              {"Clinical confidence"}
            </span>
          </div>
        </div>
        <div className={"ep-hero-art"}>
          <div className={"ep-orbit"}>

          </div>
          <div className={"ep-workspace"}>
            <div className={"ep-workspace-bar"}>
              <b>
                {"EPRium"}
                <span>
                  {"SIMULATED EPR"}
                </span>
              </b>
              <small>
                {"LEARNING ENVIRONMENT"}
              </small>
            </div>
            <div className={"ep-workspace-body"}>
              <aside>
                <span className={"ep-nav-dot"}>
                  {"＋"}
                </span>
                <span>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"12"} cy={"8"} r={"4"}>

                    </circle>
                    <path d={"M4 21v-2a8 8 0 0 1 16 0v2"}>

                    </path>
                  </svg>
                </span>
                <span>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M20 5c-4-4-8 1-8 1S8 1 4 5c-5 6 8 15 8 15S25 11 20 5Z"}>

                    </path>
                    <path d={"M3 12h5l2-3 3 6 2-3h6"}>

                    </path>
                  </svg>
                </span>
                <span>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <rect x={"5"} y={"3"} width={"14"} height={"19"} rx={"2"}>

                    </rect>
                    <path d={"M9 3V1h6v2M9 9h6m-6 4h6m-6 4h4"}>

                    </path>
                  </svg>
                </span>
                <span>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <path d={"M3 3v18h18M6 15l5-6 4 3 5-7"}>

                    </path>
                  </svg>
                </span>
              </aside>
              <div className={"ep-workspace-content"}>
                <div className={"ep-patient"}>
                  <span>
                    {"JS"}
                  </span>
                  <div>
                    <small>
                      {"SIMULATED PATIENT"}
                    </small>
                    <strong>
                      {"Jamie Smith"}
                    </strong>
                    <p>
                      {"Patient overview"}
                    </p>
                  </div>
                  <b>
                    {"Training case"}
                  </b>
                </div>
                <div className={"ep-workspace-tabs"}>
                  <span>
                    {"Overview"}
                  </span>
                  <span>
                    {"Observations"}
                  </span>
                  <span>
                    {"Care record"}
                  </span>
                </div>
                <div className={"ep-workspace-metrics"}>
                  <div>
                    <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <path d={"M20 5c-4-4-8 1-8 1S8 1 4 5c-5 6 8 15 8 15S25 11 20 5Z"}>

                      </path>
                      <path d={"M3 12h5l2-3 3 6 2-3h6"}>

                      </path>
                    </svg>
                    <span>
                      {"Observations"}
                      <small>
                        {"Review the clinical picture"}
                      </small>
                    </span>
                  </div>
                  <div>
                    <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                      <rect x={"5"} y={"3"} width={"14"} height={"19"} rx={"2"}>

                      </rect>
                      <path d={"M9 3V1h6v2M9 9h6m-6 4h6m-6 4h4"}>

                      </path>
                    </svg>
                    <span>
                      {"Patient history"}
                      <small>
                        {"Understand the context"}
                      </small>
                    </span>
                  </div>
                </div>
                <div className={"ep-note"}>
                  <div>
                    <b>
                      {"Clinical assessment"}
                    </b>
                    <span>
                      {"SIMULATION"}
                    </span>
                  </div>
                  <p>
                    {"Presenting concern"}
                  </p>
                  <i>

                  </i>
                  <i>

                  </i>
                  <i>

                  </i>
                  <div className={"ep-note-footer"}>
                    {"Assessment → Care decisions → Documentation"}
                  </div>
                </div>
              </div>
            </div>
            <div className={"ep-workspace-foot"}>
              <span>
                {"Safe to explore. Ready to repeat."}
              </span>
              <small>
                {"ILLUSTRATIVE PRODUCT VIEW"}
              </small>
            </div>
          </div>
          <div className={"ep-art-chip"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M20 5c-4-4-8 1-8 1S8 1 4 5c-5 6 8 15 8 15S25 11 20 5Z"}>

              </path>
              <path d={"M3 12h5l2-3 3 6 2-3h6"}>

              </path>
            </svg>
            <span>
              {"Real learning."}
              <br />
              <b>
                {"Simulated patients."}
              </b>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className={"epr-gap"} aria-labelledby={"epr-gap-heading"}>
      <div className={"epr-gap-heading"}>
        <div>
          <p className={"eyebrow"}>
            {"THE PROBLEMS EPRIUM SOLVES"}
          </p>
          <h2 id={"epr-gap-heading"}>
            {"Close the gap."}
            <br />
            <span>
              {"Before clinical practice."}
            </span>
          </h2>
        </div>
        <p>
          {"More opportunities to practise."}
          <br />
          {"More confidence to care."}
        </p>
      </div>
      <div className={"epr-gap-grid"}>
        <article className={"epr-gap-main"}>
          <img src={clinicalLearning} alt={"Clinician using a laptop beside a stethoscope"} loading={"lazy"} />
          <div className={"epr-gap-top"}>
            <span className={"epr-gap-number"}>
              {"01"}
            </span>
            <span className={"epr-gap-pill"}>
              {"LIMITED PRACTICE OPPORTUNITIES"}
            </span>
          </div>
          <div className={"epr-gap-main-copy"}>
            <h3>
              {"Placements can't"}
              <br />
              {"cover every patient."}
            </h3>
            <p>
              {"Give every learner repeatable patient encounters in a safe simulation environment."}
            </p>
            <div className={"epr-gap-result"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} aria-hidden={"true"}>
                <path d={"M5 12h14m-5-5 5 5-5 5"}>

                </path>
              </svg>
              <span>
                {"More practice. Without patient risk."}
              </span>
            </div>
          </div>
        </article>
        <article className={"epr-gap-small epr-gap-digital"}>
          <div className={"epr-gap-small-copy"}>
            <div className={"epr-gap-tag"}>
              <span>
                {"02"}
              </span>
              {" DIGITAL READINESS"}
            </div>
            <h3>
              {"Clinical care is digital."}
              <br />
              {"Practice should be too."}
            </h3>
            <p>
              {"Build confidence recording assessments and care decisions in a simulated EPR."}
            </p>
            <div className={"epr-gap-result"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} aria-hidden={"true"}>
                <path d={"M5 12h14m-5-5 5 5-5 5"}>

                </path>
              </svg>
              <span>
                {"From encounter to clinical record."}
              </span>
            </div>
          </div>
          <div className={"epr-gap-record"} aria-hidden={"true"}>
            <div className={"epr-gap-record-top"}>
              <b>
                {"EPRium"}
              </b>
              <span>
                {"SIMULATION"}
              </span>
            </div>
            <div className={"epr-gap-patient"}>
              <span>
                {"＋"}
              </span>
              <div>
                <b>
                  {"Patient record"}
                </b>
                <small>
                  {"Clinical learning environment"}
                </small>
              </div>
            </div>
            <div className={"epr-gap-record-row"}>
              <span>
                {"Observations"}
              </span>
              <i>
                {"✓"}
              </i>
            </div>
            <div className={"epr-gap-record-row"}>
              <span>
                {"Assessment"}
              </span>
              <i>
                {"✓"}
              </i>
            </div>
            <div className={"epr-gap-record-row"}>
              <span>
                {"Care plan"}
              </span>
              <i>
                {"✓"}
              </i>
            </div>
            <small className={"epr-gap-preview"}>
              {"ILLUSTRATIVE VIEW"}
            </small>
          </div>
        </article>
        <article className={"epr-gap-small epr-gap-scenarios"}>
          <div className={"epr-gap-small-copy"}>
            <div className={"epr-gap-tag"}>
              <span>
                {"03"}
              </span>
              {" CONSISTENT EXPERIENCE"}
            </div>
            <h3>
              {"Different placements."}
              <br />
              {"Shared learning goals."}
            </h3>
            <p>
              {"Use structured scenarios to practise key clinical situations and support focused reflection."}
            </p>
            <div className={"epr-gap-result"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} aria-hidden={"true"}>
                <path d={"M5 12h14m-5-5 5 5-5 5"}>

                </path>
              </svg>
              <span>
                {"Practise. Reflect. Repeat."}
              </span>
            </div>
          </div>
          <div className={"epr-gap-photo"}>
            <img src={clinicalPractice} alt={"Healthcare professional using a digital device"} loading={"lazy"} />
            <span>
              {"Learning"}
              <br />
              {"with purpose."}
            </span>
          </div>
        </article>
      </div>
    </section>
    <section className={"ep-capabilities ep-wrap"} id={"product-features"}>
      <div className={"ep-section-heading"}>
        <div>
          <p className={"eyebrow"}>
            {"PURPOSEFUL TOOLS. CONNECTED LEARNING."}
          </p>
          <h2>
            {"From the first question"}
            <br />
            {"to the care record."}
          </h2>
        </div>
        <p>
          {"Everything works towards one goal:"}
          <br />
          {"better prepared healthcare learners."}
        </p>
      </div>
      <div className={"ep-feature-grid"}>
        <article>
          <div className={"ep-feature-top"}>
            <span>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <circle cx={"12"} cy={"8"} r={"4"}>

                </circle>
                <path d={"M4 21v-2a8 8 0 0 1 16 0v2"}>

                </path>
              </svg>
            </span>
            <small>
              {"01"}
            </small>
          </div>
          <h3>
            {"Meet the patient"}
          </h3>
          <p>
            {"Practise communication and history-taking with virtual patient encounters."}
          </p>
        </article>
        <article>
          <div className={"ep-feature-top"}>
            <span>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <rect x={"5"} y={"3"} width={"14"} height={"19"} rx={"2"}>

                </rect>
                <path d={"M9 3V1h6v2M9 9h6m-6 4h6m-6 4h4"}>

                </path>
              </svg>
            </span>
            <small>
              {"02"}
            </small>
          </div>
          <h3>
            {"Document the care"}
          </h3>
          <p>
            {"Record assessments and care decisions in a simulated digital workflow."}
          </p>
        </article>
        <article>
          <div className={"ep-feature-top"}>
            <span>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M3 3v18h18M6 15l5-6 4 3 5-7"}>

                </path>
              </svg>
            </span>
            <small>
              {"03"}
            </small>
          </div>
          <h3>
            {"Connect the picture"}
          </h3>
          <p>
            {"Review histories and observations to understand what matters."}
          </p>
        </article>
        <article>
          <div className={"ep-feature-top"}>
            <span>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M20 5c-4-4-8 1-8 1S8 1 4 5c-5 6 8 15 8 15S25 11 20 5Z"}>

                </path>
                <path d={"M3 12h5l2-3 3 6 2-3h6"}>

                </path>
              </svg>
            </span>
            <small>
              {"04"}
            </small>
          </div>
          <h3>
            {"Reason through decisions"}
          </h3>
          <p>
            {"Work through assessment and care choices before clinical practice."}
          </p>
        </article>
        <article>
          <div className={"ep-feature-top"}>
            <span>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5"}>

                </path>
              </svg>
            </span>
            <small>
              {"05"}
            </small>
          </div>
          <h3>
            {"Practise with purpose"}
          </h3>
          <p>
            {"Use structured scenarios aligned with your learning objectives."}
          </p>
        </article>
        <article>
          <div className={"ep-feature-top"}>
            <span>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M21 12a9 9 0 0 1-9 9 12 12 0 0 1-4-1l-6 2 2-6a12 12 0 0 1-1-4 9 9 0 0 1 18 0ZM7 9h10M7 13h7"}>

                </path>
              </svg>
            </span>
            <small>
              {"06"}
            </small>
          </div>
          <h3>
            {"Make reflection count"}
          </h3>
          <p>
            {"Review decisions with educators and peers, then practise again."}
          </p>
        </article>
      </div>
    </section>
    <section className={"ep-journey"} id={"epr-experience"}>
      <div className={"ep-wrap"}>
        <div className={"ep-section-heading"}>
          <div>
            <p className={"eyebrow"}>
              {"THE LEARNING EXPERIENCE"}
            </p>
            <h2>
              {"Build confidence."}
              <br />
              <span>
                {"One encounter at a time."}
              </span>
            </h2>
          </div>
          <p>
            {"A simple rhythm for purposeful practice,"}
            <br />
            {"facilitated reflection and repeat learning."}
          </p>
        </div>
        <div className={"ep-journey-grid"}>
          <figure>
            <img src={clinicalLearning} alt={"Clinical documentation on a laptop beside a stethoscope"} loading={"lazy"} />
            <figcaption>
              {"Digital confidence."}
              <br />
              {"Clinical readiness."}
            </figcaption>
            <span>
              {"LEARN / PRACTISE / REFLECT"}
            </span>
          </figure>
          <div className={"ep-journey-steps"}>
            <article>
              <span>
                {"01"}
              </span>
              <div>
                <small>
                  {"PREPARE"}
                </small>
                <h3>
                  {"Set the scenario."}
                </h3>
                <p>
                  {"Introduce the patient and agree the learning goals."}
                </p>
              </div>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 12h16m-6-6 6 6-6 6"}>

                </path>
              </svg>
            </article>
            <article>
              <span>
                {"02"}
              </span>
              <div>
                <small>
                  {"PRACTISE"}
                </small>
                <h3>
                  {"Connect the encounter."}
                </h3>
                <p>
                  {"Work through patient information, decisions and the clinical record."}
                </p>
              </div>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 12h16m-6-6 6 6-6 6"}>

                </path>
              </svg>
            </article>
            <article>
              <span>
                {"03"}
              </span>
              <div>
                <small>
                  {"REFLECT"}
                </small>
                <h3>
                  {"Turn insight into progress."}
                </h3>
                <p>
                  {"Discuss the approach, identify learning needs and repeat."}
                </p>
              </div>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 12h16m-6-6 6 6-6 6"}>

                </path>
              </svg>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section className={"ep-audience ep-wrap"}>
      <p className={"eyebrow"}>
        {"DESIGNED FOR HEALTHCARE EDUCATION"}
      </p>
      <div>
        <span>
          {"Medicine"}
        </span>
        <span>
          {"Nursing"}
        </span>
        <span>
          {"Paramedicine"}
        </span>
        <span>
          {"Allied health"}
        </span>
      </div>
    </section>
    <section className={"ep-cta"}>
      <div className={"ep-wrap"}>
        <div>
          <p className={"eyebrow"}>
            {"SEE EPRIUM IN ACTION"}
          </p>
          <h2>
            {"More practice."}
            <br />
            <span>
              {"More confidence."}
            </span>
          </h2>
          <p>
            {"Explore how EPRium can fit your learners, teaching and clinical training goals."}
          </p>
          <a className={"ep-button"} href={"mailto:hello@mxr.ai?subject=EPRium%20demonstration"}>
            {"Book a demonstration "}
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 12h16m-6-6 6 6-6 6"}>

              </path>
            </svg>
          </a>
        </div>
        <div className={"ep-cta-visual"} aria-hidden={"true"}>
          <div>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <circle cx={"12"} cy={"8"} r={"4"}>

              </circle>
              <path d={"M4 21v-2a8 8 0 0 1 16 0v2"}>

              </path>
            </svg>
            <span>
              {"Patient encounter"}
            </span>
          </div>
          <i>

          </i>
          <div>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M20 5c-4-4-8 1-8 1S8 1 4 5c-5 6 8 15 8 15S25 11 20 5Z"}>

              </path>
              <path d={"M3 12h5l2-3 3 6 2-3h6"}>

              </path>
            </svg>
            <span>
              {"Clinical reasoning"}
            </span>
          </div>
          <i>

          </i>
          <div>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <rect x={"5"} y={"3"} width={"14"} height={"19"} rx={"2"}>

              </rect>
              <path d={"M9 3V1h6v2M9 9h6m-6 4h6m-6 4h4"}>

              </path>
            </svg>
            <span>
              {"Digital documentation"}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

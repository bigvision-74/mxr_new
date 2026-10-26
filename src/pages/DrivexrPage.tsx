import type { CSSProperties } from 'react'
import brochureResponse from '../assets/images/drivexr/brochure-response.webp'
import brochureInstructors from '../assets/images/drivexr/brochure-instructors.webp'
import brochureTraining from '../assets/images/drivexr/brochure-training.webp'
import brochureSimulator from '../assets/images/drivexr/brochure-simulator.webp'

export default function DrivexrPage() {
  return (
    <main className={"dx-page"}>
      <section className={"dx-hero"}>
        <div className={"dx-hero-image"}>
          <img src={brochureResponse} alt={"Emergency ambulance response scene from the DriveXR brochure"} fetchPriority={"high"} />
        </div>
        <div className={"dx-hero-copy"}>
          <p className={"dx-kicker"}>
            {"EMERGENCY DRIVER SIMULATION"}
          </p>
          <div className={"dx-title"}>
            <h1 className="banner-title">
              <span>
                {"Ready for"}
              </span>
              <span>
                {"the moments"}
              </span>
              <em>
                {"that matter."}
              </em>
            </h1>
          </div>
          <p className="banner-lead">
            {"Build blue-light driving confidence in a controlled, immersive environment. Train for the unexpected. Measure every improvement."}
          </p>
          <a className={"dx-button"} href={"mailto:hello@mxr.ai?subject=DriveXR%20demonstration"}>
            {"Book a live demonstration "}
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M4 12h16m-6-6 6 6-6 6"}>

              </path>
            </svg>
          </a>
          <div className={"dx-hero-note"}>
            {"REAL SCENARIOS "}
            <span>
              {" / "}
            </span>
            {" CLEARER INSIGHT "}
            <span>
              {" / "}
            </span>
            {" STRONGER READINESS"}
          </div>
        </div>
        <div className={"dx-caption"}>
          {"DriveXR "}
          <span>
            {"Immersive by design. Data-driven by default."}
          </span>
        </div>
      </section>
      <section className={"dx-challenge dx-wrap"}>
        <div className={"dx-section-heading"}>
          <p className={"dx-kicker"}>
            {"THE PROBLEM WE SOLVE"}
          </p>
          <h2>
            {"Critical situations shouldn't"}
            <br />
            {"be a driver's first experience."}
          </h2>
          <p>
            {"Live-road training cannot safely repeat every challenge. DriveXR turns those gaps into focused, repeatable practice."}
          </p>
        </div>
        <div className={"dx-challenge-grid"}>
          <article>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7z"}>

              </path>
              <path d={"m8 12 3 3 5-6"}>

              </path>
            </svg>
            <h3>
              {"Live-road exposure"}
            </h3>
            <p>
              {"Collision risk, fuel use and vehicle wear add pressure to every training drive."}
            </p>
            <div>
              <span>
                {"WITH DRIVEXR"}
              </span>
              <strong>
                {"Practise challenging situations in a controlled simulation."}
              </strong>
            </div>
          </article>
          <article>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M6 3 3 21M18 3l3 18M12 3v4m0 4v3m0 4v3"}>

              </path>
            </svg>
            <h3>
              {"Unpredictable scenarios"}
            </h3>
            <p>
              {"Rare hazards and complex road behaviour are difficult to recreate on demand."}
            </p>
            <div>
              <span>
                {"WITH DRIVEXR"}
              </span>
              <strong>
                {"Repeat routes, conditions and instructor-driven hazards."}
              </strong>
            </div>
          </article>
          <article>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
              <path d={"M3 3v18h18M7 15l4-5 4 3 6-8"}>

              </path>
            </svg>
            <h3>
              {"Unclear competency"}
            </h3>
            <p>
              {"Inconsistent assessment can hide the skills that need more attention."}
            </p>
            <div>
              <span>
                {"WITH DRIVEXR"}
              </span>
              <strong>
                {"Use behavioural data and replay to guide every debrief."}
              </strong>
            </div>
          </article>
        </div>
      </section>
      <section className={"dx-capabilities"}>
        <div className={"dx-wrap"}>
          <div className={"dx-section-heading"}>
            <p className={"dx-kicker"}>
              {"BUILT FOR REAL-WORLD READINESS"}
            </p>
            <h2>
              {"More than a driving simulation."}
            </h2>
            <p>
              {"A connected environment for realistic practice, instructor control and meaningful feedback."}
            </p>
          </div>
          <div className={"dx-bento"}>
            <figure className={"dx-bento-photo"}>
              <img src={brochureInstructors} alt={"Driver and instructor using a multi-screen training environment"} loading={"lazy"} />
              <figcaption>
                {"Realistic environments."}
                <br />
                {"Purposeful practice."}
              </figcaption>
            </figure>
            <article>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 7h16M4 17h16M8 4v6m8 4v6"}>

                </path>
              </svg>
              <h3>
                {"Instructors in control"}
              </h3>
              <p>
                {"Configure routes, weather and learner profiles. Introduce hazards and monitor sessions live."}
              </p>
            </article>
            <article>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <rect x={"8"} y={"2"} width={"8"} height={"20"} rx={"3"}>

                </rect>
                <circle cx={"12"} cy={"7"} r={"1"}>

                </circle>
                <circle cx={"12"} cy={"12"} r={"1"}>

                </circle>
                <circle cx={"12"} cy={"17"} r={"1"}>

                </circle>
              </svg>
              <h3>
                {"Traffic that challenges"}
              </h3>
              <p>
                {"Dynamic AI road users and blue-light scenarios develop awareness and decisions under pressure."}
              </p>
            </article>
            <article>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M6 3 3 21M18 3l3 18M12 3v4m0 4v3m0 4v3"}>

                </path>
              </svg>
              <h3>
                {"Feel the difference"}
              </h3>
              <p>
                {"Realistic steering, braking and acceleration across UK urban, rural and motorway environments."}
              </p>
            </article>
            <article>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <rect x={"2"} y={"3"} width={"20"} height={"14"} rx={"2"}>

                </rect>
                <path d={"M8 22h8m-4-5v5"}>

                </path>
              </svg>
              <h3>
                {"Your way to train"}
              </h3>
              <p>
                {"Cab-based multi-screen or VR-compatible delivery, designed around your training environment."}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className={"dx-intelligence"}>
        <div className={"dx-wrap dx-intelligence-grid"}>
          <div>
            <p className={"dx-kicker"}>
              {"FROM EXPERIENCE TO EVIDENCE"}
            </p>
            <h2>
              {"See the decisions"}
              <br />
              {"behind the drive."}
            </h2>
            <p>
              {"Bring driving behaviour into focus. Review sessions, identify learning needs and make the next drive more purposeful."}
            </p>
            <div className={"dx-data-list"}>
              <span>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M3 3v18h18M7 15l4-5 4 3 6-8"}>

                  </path>
                </svg>
                {" Performance analytics"}
              </span>
              <span>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M3 11a9 9 0 1 1 2 7M3 4v7h7"}>

                  </path>
                  <path d={"m11 8 5 4-5 4z"}>

                  </path>
                </svg>
                {" Session replay & debrief"}
              </span>
              <span>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                  <path d={"M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7z"}>

                  </path>
                  <path d={"m8 12 3 3 5-6"}>

                  </path>
                </svg>
                {" Competency scoring"}
              </span>
            </div>
            <div className={"dx-metric-tags"}>
              <span>
                {"Speed compliance"}
              </span>
              <span>
                {"Reaction times"}
              </span>
              <span>
                {"Lane discipline"}
              </span>
              <span>
                {"Mirror checks"}
              </span>
              <span>
                {"Junction approach"}
              </span>
              <span>
                {"Blue-light compliance"}
              </span>
            </div>
          </div>
          <figure>
            <img src={brochureTraining} alt={"DriveXR immersive emergency driving training environment from the brochure"} loading={"lazy"} />
            <figcaption>
              <span>
                {"TRAIN → MEASURE → IMPROVE"}
              </span>
              <strong>
                {"Every session."}
                <br />
                {"A clearer picture."}
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className={"dx-delivery dx-wrap"}>
        <div className={"dx-delivery-image"}>
          <img src={brochureSimulator} alt={"DriveXR simulator with seat, controls and multi-screen displays"} loading={"lazy"} />
          <span>
            {"ONE CONNECTED TRAINING SYSTEM"}
          </span>
        </div>
        <div>
          <p className={"dx-kicker"}>
            {"FROM SETUP TO DEBRIEF"}
          </p>
          <h2>
            {"Simple to structure."}
            <br />
            {"Powerful in practice."}
          </h2>
          <ol>
            <li>
              <span>
                {"01"}
              </span>
              <div>
                <h3>
                  {"Configure"}
                </h3>
                <p>
                  {"Set your routes, conditions, hazards and learning objectives."}
                </p>
              </div>
            </li>
            <li>
              <span>
                {"02"}
              </span>
              <div>
                <h3>
                  {"Train"}
                </h3>
                <p>
                  {"Run immersive response scenarios with instructor oversight."}
                </p>
              </div>
            </li>
            <li>
              <span>
                {"03"}
              </span>
              <div>
                <h3>
                  {"Review"}
                </h3>
                <p>
                  {"Use analytics, replay and competency evidence to plan what comes next."}
                </p>
              </div>
            </li>
          </ol>
          <p className={"dx-included"}>
            {"Software, cab integration, instructor station, scenario library, analytics and reporting — with onboarding and technical support. Custom road environments available."}
          </p>
        </div>
      </section>
      <section className={"dx-audience dx-wrap"}>
        <p className={"dx-kicker"}>
          {"DESIGNED FOR YOUR WORLD"}
        </p>
        <div>
          <span>
            {"Ambulance services"}
          </span>
          <span>
            {"Universities"}
          </span>
          <span>
            {"Fire & rescue"}
          </span>
          <span>
            {"Police support"}
          </span>
          <span>
            {"Fleet training"}
          </span>
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
          {"SEE DRIVEXR 2 IN ACTION"}
        </p>
        <h2>
          <>{"Ready to see"}<br />{"what's next?"}</>
        </h2>
        <p>
          {"Explore a DriveXR 2 training setup built around your people and operational goals."}
        </p>
      </div>
      <div className={"button-row"}>
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=DriveXR%202%20demonstration"}>
          {"Book a demonstration →"}
        </a>
      </div>
    </section>
    </main>
  )
}

import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import simMain from '../assets/images/drivexr/brochure-simulator.webp'
import simRig from '../assets/images/drivexr/rig-side.webp'
import simInstructors from '../assets/images/drivexr/brochure-instructors.webp'
import simAnalytics from '../assets/images/drivexr/analytics-ambulance.webp'

export default function SimulatorDevelopmentPage() {
  return (
    <main className={"service-detail"}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className={"service-detail-hero"}>
        <div>
          <div className={"about-hero-title"}>
            <h1 className="banner-title">
              <span className={"about-title-dark"}>{"Prepare for the"}</span>
              <span className={"about-title-dark"}>{"real world. "}<em>{"Before it"}</em></span>
              <span>{"happens."}</span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Purpose-built simulators help teams practise complex tasks, build confidence and explore decisions in a safe, repeatable environment."}
          </p>
          <div className={"button-row"}>
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base"
              href={"mailto:hello@mxr.ai?subject=Simulator%20Development%20enquiry"}
            >
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              href={"#sim-deliver"}
            >
              {"See what we build"} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className={"service-detail-image"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={defaultBanner} type={"video/mp4"} />
          </video>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ──────────────────────────────────────────────── */}
      <section id="sim-deliver" className={"section service-deliver"}>
        <div>
          <p className={"eyebrow"}>{"WHAT WE DELIVER"}</p>
          <h2>{"Built around your challenge."}</h2>
        </div>
        <div className={"service-feature-grid"}>
          <article>
            <span>{"01"}</span>
            <h3>{"Realistic interaction"}</h3>
            <p>{"Recreate equipment, controls and procedures around the tasks your people perform."}</p>
          </article>
          <article>
            <span>{"02"}</span>
            <h3>{"Scenario-based training"}</h3>
            <p>{"Build repeatable exercises with changing conditions, events and operational challenges."}</p>
          </article>
          <article>
            <span>{"03"}</span>
            <h3>{"Instructor control"}</h3>
            <p>{"Give trainers the tools to guide sessions, adjust difficulty and support structured debriefs."}</p>
          </article>
          <article>
            <span>{"04"}</span>
            <h3>{"Performance insight"}</h3>
            <p>{"Capture relevant actions and outcomes to support feedback and assessment."}</p>
          </article>
        </div>
      </section>

      {/* ── IMPACT STATS — dark navy strip ──────────────────────────────── */}
      <div className="sim-impact">
        <div className="sim-impact-inner">
          <div className="sim-impact-item">
            <div className="sim-impact-num">40<em>%</em></div>
            <p className="sim-impact-label">{"reduction in on-the-job errors after simulator-based training"}</p>
          </div>
          <div className="sim-impact-item">
            <div className="sim-impact-num">3<em>×</em></div>
            <p className="sim-impact-label">{"more practice repetitions achievable compared to live equipment"}</p>
          </div>
          <div className="sim-impact-item">
            <div className="sim-impact-num">0</div>
            <p className="sim-impact-label">{"risk to people, equipment or environment during training"}</p>
          </div>
          <div className="sim-impact-item">
            <div className="sim-impact-num">60<em>%</em></div>
            <p className="sim-impact-label">{"lower training cost per trainee versus traditional live exercises"}</p>
          </div>
        </div>
      </div>

      {/* ── IMAGE SHOWCASE ───────────────────────────────────────────────── */}
      <section className="sim-showcase">
        <div className="sim-showcase-head">
          <p className={"eyebrow"}>{"BUILT TO LAST"}</p>
          <h2>{"High-fidelity. Every time."}</h2>
          <p>{"From purpose-built rigs with physical controls to fully immersive virtual environments, we build simulators that replicate the real thing closely enough to matter."}</p>
        </div>
        <div className="sim-showcase-grid">
          <div className="sim-showcase-main">
            <img src={simMain} alt="Ambulance driving simulator interior view" loading="lazy" />
            <span className="sim-showcase-label">{"Driving Simulator"}</span>
          </div>
          <div className="sim-showcase-sub">
            <img src={simRig} alt="Simulator hardware rig with physical controls" loading="lazy" />
            <span className="sim-showcase-label">{"Hardware Rig"}</span>
          </div>
          <div className="sim-showcase-sub">
            <img src={simInstructors} alt="Instructor station with monitoring dashboard" loading="lazy" />
            <span className="sim-showcase-label">{"Instructor Station"}</span>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH ─────────────────────────────────────────────────── */}
      <section className={"section service-outcome"}>
        <div className={"service-outcome-text"}>
          <p className={"eyebrow"}>{"THE APPROACH"}</p>
          <h2>{"Make practice practical."}</h2>
          <p>{"We align fidelity, hardware and interaction with your learning objectives — shaping each simulator around the tasks that matter most."}</p>
          <div className={"service-approach-modes"}>
            <span className={"service-approach-pill"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M5 11h4M7 10v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              {"Desktop"}
            </span>
            <span className={"service-approach-pill"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7a5 5 0 1 1 10 0A5 5 0 0 1 2 7Z" stroke="currentColor" strokeWidth="1.4" /><path d="M5 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" stroke="currentColor" strokeWidth="1.3" /><path d="M2 7H1M13 7h-1M7 2V1M7 13v-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              {"Immersive XR"}
            </span>
            <span className={"service-approach-pill"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="2" y="5" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M5 5V3.5a2 2 0 0 1 4 0V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="7" cy="8" r="1" fill="currentColor" /></svg>
              {"Integrated Hardware"}
            </span>
          </div>
        </div>
        <div className={"service-use-cases"}>
          <small>{"WHERE IT FITS"}</small>
          <ul className={"service-use-cases-list"}>
            <li>{"Vehicle and equipment training"}</li>
            <li>{"Emergency response exercises"}</li>
            <li>{"Defence readiness"}</li>
            <li>{"Procedural and safety training"}</li>
          </ul>
        </div>
      </section>

      {/* ── SIMULATOR TYPES — dark grid ──────────────────────────────────── */}
      <section className="sim-types">
        <div className="sim-types-head">
          <div>
            <p className={"eyebrow"}>{"SIMULATOR TYPES"}</p>
            <h2>{"The right platform for your task."}</h2>
          </div>
          <div className="sim-types-head-right">
            <p>{"We build across the full fidelity spectrum — from lightweight desktop simulators to full hardware-in-the-loop rigs — selecting the approach that best serves your training objectives and budget."}</p>
          </div>
        </div>
        <div className="sim-types-grid">
          <div className="sim-type-card">
            <div className="sim-type-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
            </div>
            <p className="sim-type-title">{"Desktop Simulator"}</p>
            <p className="sim-type-desc">{"Screen-based experiences ideal for procedural training, decision-making and broad deployment. Low hardware overhead, easy to update and scale."}</p>
            <div className="sim-type-tags">
              <span className="sim-type-tag">{"Low cost"}</span>
              <span className="sim-type-tag">{"Scalable"}</span>
              <span className="sim-type-tag">{"Easy update"}</span>
            </div>
          </div>
          <div className="sim-type-card">
            <div className="sim-type-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 9a10 10 0 1 0 20 0A10 10 0 0 0 2 9Z" /><path d="M6 9a4 4 0 0 1 4-4h.01M12 9a4 4 0 0 1 4 4" /><path d="M2 9H1M23 9h-1M12 2V1M12 23v-1" /></svg>
            </div>
            <p className="sim-type-title">{"Immersive XR Simulator"}</p>
            <p className="sim-type-desc">{"VR and mixed reality simulators for high-stakes, spatially complex scenarios. Deliver full situational awareness and physical presence without real-world risk."}</p>
            <div className="sim-type-tags">
              <span className="sim-type-tag">{"High fidelity"}</span>
              <span className="sim-type-tag">{"Spatial"}</span>
              <span className="sim-type-tag">{"Multi-user"}</span>
            </div>
          </div>
          <div className="sim-type-card">
            <div className="sim-type-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="10" rx="2" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /><circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" /></svg>
            </div>
            <p className="sim-type-title">{"Hardware-in-the-Loop"}</p>
            <p className="sim-type-desc">{"Physical controls, seats and interfaces integrated with a virtual environment. Ideal for vehicle, aviation and heavy equipment training where muscle memory matters."}</p>
            <div className="sim-type-tags">
              <span className="sim-type-tag">{"Physical controls"}</span>
              <span className="sim-type-tag">{"Bespoke rig"}</span>
              <span className="sim-type-tag">{"Max fidelity"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY BENEFITS ─────────────────────────────────────────────────── */}
      <section className="sim-benefits">
        <div className="sim-benefits-layout">
          <div className="sim-benefits-intro">
            <p className={"eyebrow"}>{"KEY BENEFITS"}</p>
            <h2>{"Why simulation changes the outcome."}</h2>
            <p>{"Simulation isn't a substitute for real experience — it's what makes real experience safer, faster and more effective."}</p>
          </div>
          <div className="sim-benefits-list">
            <div className="sim-benefit-item">
              <div className="sim-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </div>
              <div>
                <p className="sim-benefit-title">{"Zero real-world risk"}</p>
                <p className="sim-benefit-desc">{"Practise high-stakes procedures without risk to people, assets or environment. Mistakes become learning, not incidents."}</p>
              </div>
            </div>
            <div className="sim-benefit-item">
              <div className="sim-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.5" /></svg>
              </div>
              <div>
                <p className="sim-benefit-title">{"Unlimited repetition"}</p>
                <p className="sim-benefit-desc">{"Run the same scenario as many times as needed. Reset instantly, change conditions and build consistent performance across your team."}</p>
              </div>
            </div>
            <div className="sim-benefit-item">
              <div className="sim-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
              </div>
              <div>
                <p className="sim-benefit-title">{"Structured debrief"}</p>
                <p className="sim-benefit-desc">{"Instructor tools and session playback let trainers review performance objectively and give targeted feedback in a structured debrief."}</p>
              </div>
            </div>
            <div className="sim-benefit-item">
              <div className="sim-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              </div>
              <div>
                <p className="sim-benefit-title">{"Measurable performance"}</p>
                <p className="sim-benefit-desc">{"Every session generates data. Track progress over time, identify skill gaps and demonstrate training effectiveness with objective evidence."}</p>
              </div>
            </div>
            <div className="sim-benefit-item">
              <div className="sim-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
              </div>
              <div>
                <p className="sim-benefit-title">{"Higher engagement"}</p>
                <p className="sim-benefit-desc">{"Active, immersive practice is far more engaging than passive instruction — leading to better retention and stronger motivation to learn."}</p>
              </div>
            </div>
            <div className="sim-benefit-item">
              <div className="sim-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
              </div>
              <div>
                <p className="sim-benefit-title">{"Consistent delivery"}</p>
                <p className="sim-benefit-desc">{"Every trainee receives the same environment, the same scenarios and the same assessment criteria — regardless of when or where training takes place."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANALYTICS HIGHLIGHT ──────────────────────────────────────────── */}
      <section className={"section service-outcome"} style={{ background: '#fff' }}>
        <div className={"service-outcome-text"}>
          <p className={"eyebrow"}>{"PERFORMANCE DATA"}</p>
          <h2>{"See what your people can do."}</h2>
          <p>{"Every simulator session generates structured data. Our analytics layer turns trainee actions into actionable insight — so instructors can track progress, identify gaps and demonstrate training effectiveness over time."}</p>
          <div className={"service-approach-modes"}>
            <span className={"service-approach-pill"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 11l3-4 3 3 2-5 3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {"Session replay"}
            </span>
            <span className={"service-approach-pill"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M4 7h2M8 7h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              {"Progress tracking"}
            </span>
            <span className={"service-approach-pill"}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" /><path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              {"Assessment scoring"}
            </span>
          </div>
        </div>
        <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px rgba(11,66,130,.1)' }}>
          <img
            src={simAnalytics}
            alt="Simulator analytics dashboard showing trainee performance data"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* ── WORKING WITH MXR — dark wave ─────────────────────────────────── */}
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"WORKING WITH MXR"}</p>
          <h2>{"A clear route from idea to delivery."}</h2>
        </div>
        <div className={"service-steps-cards"}>
          <article>
            <b>{"01"}</b>
            <h3>{"Discover"}</h3>
            <p>{"Understand your users, objectives and environment."}</p>
          </article>
          <article>
            <b>{"02"}</b>
            <h3>{"Design"}</h3>
            <p>{"Shape the experience and validate the approach."}</p>
          </article>
          <article>
            <b>{"03"}</b>
            <h3>{"Develop"}</h3>
            <p>{"Build iteratively with regular review and feedback."}</p>
          </article>
          <article>
            <b>{"04"}</b>
            <h3>{"Deploy & evolve"}</h3>
            <p>{"Support launch, adoption and continued improvement."}</p>
          </article>
        </div>
      </section>

      {/* ── CONNECTED CAPABILITIES ───────────────────────────────────────── */}
      <section className={"section service-related service-related--cards"}>
        <p className={"eyebrow"}>{"CONNECTED CAPABILITIES"}</p>
        <h2>{"Explore our other services."}</h2>
        <div className={"service-related-grid"}>
          <a href={"/xr-development"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="18" width="44" height="26" rx="8" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M6 30h8M42 30h8" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="19" cy="30" r="5" stroke="#0B66C3" strokeWidth="1.8" />
                <circle cx="37" cy="30" r="5" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M24 30h8" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M28 12v6M22 13.5l2 5M34 13.5l-2 5" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <strong>{"XR DEVELOPMENT"}</strong>
            <p>{"Design and build immersive XR experiences tailored to your training, simulation and engagement goals."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href={"/immersive-rooms"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="14" width="48" height="28" rx="3" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M4 36h48" stroke="#0B66C3" strokeWidth="1.8" />
                <rect x="10" y="20" width="36" height="12" rx="2" stroke="#0B66C3" strokeWidth="1.5" />
                <path d="M22 44h12M28 42v2" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="28" cy="26" r="3" stroke="#0B66C3" strokeWidth="1.5" />
              </svg>
            </span>
            <strong>{"IMMERSIVE ROOMS"}</strong>
            <p>{"Purpose-designed spaces using large-format displays and projection to create shared immersive environments."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href={"/ai-solutions"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="10" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M28 8v6M28 42v6M8 28h6M42 28h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14.1 14.1l4.2 4.2M37.7 37.7l4.2 4.2M41.9 14.1l-4.2 4.2M18.3 37.7l-4.2 4.2" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="28" cy="28" r="4" stroke="#0B66C3" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="1.5" fill="#0B66C3" />
              </svg>
            </span>
            <strong>{"AI SOLUTIONS"}</strong>
            <p>{"Integrate AI-driven tools to enhance learning, automate content generation and surface actionable insights."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href={"/platform-development"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="40" height="32" rx="3" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M8 20h40" stroke="#0B66C3" strokeWidth="1.8" />
                <circle cx="14" cy="16" r="1.5" fill="#0B66C3" />
                <circle cx="19" cy="16" r="1.5" fill="#0B66C3" />
                <circle cx="24" cy="16" r="1.5" fill="#0B66C3" />
                <path d="M21 30l-4 4 4 4M35 30l4 4-4 4M27 28l2 10" stroke="#0B66C3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <strong>{"PLATFORM DEVELOPMENT"}</strong>
            <p>{"Design and develop bespoke platforms for LMS, workforce development and data analytics with seamless integration."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"LET'S BUILD WHAT'S NEXT"}</p>
          <h2>{"Have a project in mind?"}</h2>
          <p>{"Tell us what you want to achieve. We'll help define a practical next step."}</p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=Simulator%20Development%20enquiry"}>
            {"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

    </main>
  )
}

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import ai from "../../public/assets/images/services/ai.jpg"

type Solution = 'assistant' | 'content' | 'adaptive' | 'integration'

const SOLUTIONS: Record<Solution, {
  num: string
  title: string
  headline: string
  body: string
  features: string[]
}> = {
  assistant: {
    num: '01',
    title: 'Knowledge Assistants',
    headline: 'Instant answers from your own content.',
    body: 'Conversational AI that draws exclusively from your approved documentation and knowledge bases , giving teams accurate, citable answers without the noise of general-purpose models.',
    features: [
      'Retrieval-augmented generation (RAG)',
      'Source citation and traceability',
      'Role-based access and content scoping',
    ],
  },
  content: {
    num: '02',
    title: 'Content Workflows',
    headline: 'Draft faster. Review with confidence.',
    body: 'AI-assisted authoring that speeds up creation of learning content and documentation , with human review built into every step to maintain accuracy and compliance.',
    features: [
      'Content drafting from source material',
      'Assessment and quiz generation',
      'Integrated review and approval flows',
    ],
  },
  adaptive: {
    num: '03',
    title: 'Adaptive Experiences',
    headline: 'Learning that responds to the learner.',
    body: 'Use interaction data and performance signals to shape more relevant learning journeys , adjusting content, pace and challenge level to match each individual.',
    features: [
      'Dynamic content sequencing',
      'Performance-triggered interventions',
      'Personalised feedback loops',
    ],
  },
  integration: {
    num: '04',
    title: 'Platform Integration',
    headline: 'AI inside the tools your teams already use.',
    body: 'Connect AI capabilities to your existing LMS, workforce platforms and operational systems , extending what you already have rather than replacing it.',
    features: [
      'LMS and LRS integration (SCORM / xAPI)',
      'API-first architecture',
      'Audit logging and compliance reporting',
    ],
  },
}

const SOLUTION_KEYS = Object.keys(SOLUTIONS) as Solution[]

export default function AiSolutionsPage() {
  const [active, setActive] = useState<Solution>('assistant')
  const sol = SOLUTIONS[active]

  return (
    <main style={{ background: '#fff', color: '#10263d' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="service-detail-hero">
        <div>
          <div className="about-hero-title">
            <h1 className="banner-title">
              <span className="about-title-dark">{"Intelligence that makes"}</span>
              <span>{"work "}<em>{"more effective."}</em></span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Practical AI solutions that support learning, simplify information workflows and help teams focus on higher-value tasks."}
          </p>
          <div className="button-row">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base"
              href="/contact"
            >
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              href="#ai-solutions"
            >
              {"See what we offer"} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="service-detail-image">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={defaultBanner} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── SOLUTION ACCORDION ───────────────────────────────────────────── */}
      <section id="ai-solutions" className="ais-solutions">
        <div className="ais-solutions-inner">

          <div className="ais-solutions-left">
            <p className="eyebrow">{"WHAT WE OFFER"}</p>
            <h2>{"Four ways we apply AI."}</h2>

            <div className="ais-solution-list" role="list">
              {SOLUTION_KEYS.map(key => {
                const s = SOLUTIONS[key]
                const isOpen = active === key
                return (
                  <div key={key} className="ais-solution-item" role="listitem">
                    <button
                      className="ais-solution-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setActive(key)}
                    >
                      <span className="ais-solution-num">{s.num}</span>
                      <span className="ais-solution-title">{s.title}</span>
                      <span className="ais-solution-chevron" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <div className={`ais-solution-body${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
                      <div className="ais-solution-body-inner">
                        <p className="ais-solution-desc">{s.body}</p>
                        <ul className="ais-solution-features">
                          {s.features.map(f => <li key={f}>{f}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right , image panel */}
          <div className="ais-solutions-right">
            <div className="ais-panel-visual">
              <img src="/assets/images/services/futuristic.jpg" alt="" className="ais-panel-img" />
              <div className="ais-panel-overlay" aria-hidden="true" />
              <div className="ais-panel-visual-grid" aria-hidden="true" />
              <p className="ais-panel-num" aria-hidden="true">{sol.num}</p>
              <h3 className="ais-panel-headline">{sol.headline}</h3>
              <p className="ais-panel-body">{sol.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <div className="ais-stats">
        <div className="ais-stats-inner">
          <div className="ais-stat-item">
            <div className="ais-stat-num">40<em>%</em></div>
            <p className="ais-stat-label">{"reduction in content creation time with AI-assisted authoring"}</p>
          </div>
          <div className="ais-stat-item">
            <div className="ais-stat-num">3<em>×</em></div>
            <p className="ais-stat-label">{"faster knowledge retrieval compared to manual search and documentation"}</p>
          </div>
          <div className="ais-stat-item">
            <div className="ais-stat-num">100<em>%</em></div>
            <p className="ais-stat-label">{"human-reviewed outputs , every AI workflow keeps people in the loop"}</p>
          </div>
        </div>
      </div>



      {/* ── WHAT WE DELIVER ──────────────────────────────────────────────── */}
      <section className="section service-deliver" >
        <div>
          <p className="eyebrow">{"WHAT WE DELIVER"}</p>
          <h2>{"Built around your challenge."}</h2>
        </div>
        <div className="ais-deliver-grid">
          <div className="ais-deliver-cell">
            <span className="ais-deliver-num">{"01"}</span>
            <h3>{"Knowledge assistants"}</h3>
            <p>{"Help users navigate approved information through natural-language interactions grounded in your own content."}</p>
          </div>
          <div className="ais-deliver-cell">
            <span className="ais-deliver-num">{"02"}</span>
            <h3>{"Content workflows"}</h3>
            <p>{"Support drafting and preparation of learning materials with AI assistance and structured human review."}</p>
          </div>
          <div className="ais-deliver-cell">
            <span className="ais-deliver-num">{"03"}</span>
            <h3>{"Adaptive experiences"}</h3>
            <p>{"Use context and interaction data to shape more responsive, personalised learning journeys."}</p>
          </div>
          <div className="ais-deliver-cell">
            <span className="ais-deliver-num">{"04"}</span>
            <h3>{"Platform integration"}</h3>
            <p>{"Connect AI capabilities to existing applications, LMS platforms and operational workflows."}</p>
          </div>
        </div>
      </section>

      {/* ── SPLIT: IMAGE + APPROACH TEXT ─────────────────────────────────── */}
      <section className="ais-split" style={{ background: '#f4f8fc' }}>
        <div className="ais-split-inner">
          <figure className="ais-split-figure">
            <img src={ai} alt="AI solutions" loading="lazy" />
          </figure>
          <div className="ais-split-text">
            <p className="eyebrow">{"THE APPROACH"}</p>
            <h2>{"Useful AI. Carefully integrated."}</h2>
            <p>{"We define a focused use case, evaluate your data and build a reviewable prototype , with security, governance and human oversight shaped in from the start, not added afterwards."}</p>
            <div className="ais-split-points">
              <div className="ais-split-point">
                <div className="ais-split-point-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                  </svg>
                </div>
                <div>
                  <p className="ais-split-point-title">Grounded in your content</p>
                  <p className="ais-split-point-desc">RAG pipelines tie model responses to your documents , answers are always traceable.</p>
                </div>
              </div>
              <div className="ais-split-point">
                <div className="ais-split-point-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <p className="ais-split-point-title">Human in the loop</p>
                  <p className="ais-split-point-desc">Critical outputs are reviewed before they reach end users. AI assists; people decide.</p>
                </div>
              </div>
              <div className="ais-split-point">
                <div className="ais-split-point-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <div>
                  <p className="ais-split-point-title">Fits inside what you have</p>
                  <p className="ais-split-point-desc">API-first architecture connects to your existing LMS, intranet and operational tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── RESPONSIBLE AI ───────────────────────────────────────────────── */}
      <section className="ais-trust">
        <p className="eyebrow">{"RESPONSIBLE AI"}</p>
        <h2>{"Built to be trusted, not just used."}</h2>
        <p className="ais-trust-lead">{"Every solution we build puts human oversight, data accountability and explainability at its core , not as an afterthought."}</p>
        <div className="ais-trust-cols">
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Human in the loop</h3>
            <p>Critical outputs are reviewed by people before they reach end users. AI assists; humans decide.</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>
            </div>
            <h3>Grounded responses</h3>
            <p>RAG architecture ensures answers are always traceable to specific source documents you control.</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>Data sovereignty</h3>
            <p>Your content stays within your chosen infrastructure, with data residency configured to match compliance requirements.</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3>Audit logging</h3>
            <p>Every interaction is logged with user, context and output , supporting governance reviews and continuous improvement.</p>
          </div>
        </div>
      </section>

      {/* ── WORKING WITH MXR ─────────────────────────────────────────────── */}
      <section className="final-cta home-wave-section home-wave-cta">
        <div className="home-wave-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="eyebrow">{"WORKING WITH MXR"}</p>
          <h2>{"A clear route from idea to delivery."}</h2>
        </div>
        <div className="service-steps-cards">
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
      <section className="section service-related service-related--cards">
        <p className="eyebrow">{"CONNECTED CAPABILITIES"}</p>
        <h2>{"Explore our other services."}</h2>
        <div className="service-related-grid">
          <a href="/xr-development" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
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
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/simulator-development" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect x="4" y="14" width="48" height="28" rx="3" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M4 36h48" stroke="#0B66C3" strokeWidth="1.8" />
                <rect x="10" y="20" width="36" height="12" rx="2" stroke="#0B66C3" strokeWidth="1.5" />
                <path d="M22 44h12M28 42v2" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="28" cy="26" r="3" stroke="#0B66C3" strokeWidth="1.5" />
              </svg>
            </span>
            <strong>{"SIMULATOR DEVELOPMENT"}</strong>
            <p>{"Purpose-built simulators for high-fidelity training, scenario rehearsal and operational readiness."}</p>
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/immersive-rooms" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="10" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M28 8v6M28 42v6M8 28h6M42 28h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14.1 14.1l4.2 4.2M37.7 37.7l4.2 4.2M41.9 14.1l-4.2 4.2M18.3 37.7l-4.2 4.2" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="28" cy="28" r="4" stroke="#0B66C3" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="1.5" fill="#0B66C3" />
              </svg>
            </span>
            <strong>{"IMMERSIVE ROOMS"}</strong>
            <p>{"Purpose-designed spaces using large-format displays and projection to create shared immersive environments."}</p>
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/platform-development" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
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
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="final-cta home-wave-section home-wave-cta">
        <div className="home-wave-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="eyebrow">{"LET'S BUILD WHAT'S NEXT"}</p>
          <h2>{"Have a project in mind?"}</h2>
          <p>{"Tell us what you want to achieve. We'll help you define the right AI approach and a practical next step."}</p>
        </div>
        <div className="button-row">
          <a className="btn btn-primary" href="/contact">
            {"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

    </main>
  )
}

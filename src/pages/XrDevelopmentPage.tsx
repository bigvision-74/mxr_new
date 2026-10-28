import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import quest3 from '../assets/images/quest-3-poster.png'
import vr from "../../public/assets/images/services/1391.jpg"
import ar from "../../public/assets/images/services/6703.jpg"
import mr from "../../public/assets/images/services/29718.jpg"

/* ── XR mode data ────────────────────────────────────────────────────────── */
type Mode = 'vr' | 'ar' | 'mr'

const MODES: Record<Mode, {
  abbr: string
  label: string
  headline: string
  body: string
  platforms: string[]
  useCases: string[]
}> = {
  vr: {
    abbr: 'VR',
    label: 'Virtual Reality',
    headline: 'Fully immersive training environments.',
    body: 'Place learners inside high-fidelity 3D worlds where they can practise complex procedures, rehearse high-stakes scenarios and build real confidence — without real-world risk, resource cost or physical constraints.',
    platforms: ['Meta Quest', 'PCVR / SteamVR', 'Headset-agnostic'],
    useCases: [
      'Clinical and surgical simulation',
      'Defence and tactical rehearsal',
      'Industrial safety and COSHH training',
      'Emergency response exercises',
    ],
  },
  ar: {
    abbr: 'AR',
    label: 'Augmented Reality',
    headline: 'Guidance layered onto the real world.',
    body: 'Overlay step-by-step instructions, 3D schematics and live data directly onto physical equipment and environments — giving operators exactly the right information at exactly the right moment.',
    platforms: ['Mobile & tablet', 'Smart glasses', 'WebAR'],
    useCases: [
      'On-machine maintenance guides',
      'Field and service engineer support',
      'Assembly and quality inspection',
      'Product and spatial demonstration',
    ],
  },
  mr: {
    abbr: 'MR',
    label: 'Mixed Reality',
    headline: 'Physical and digital, blended seamlessly.',
    body: 'Combine real-world spatial awareness with persistent digital objects — allowing learners to interact with holograms anchored to their physical environment in collaborative, instructor-led sessions.',
    platforms: ['HoloLens 2', 'Magic Leap', 'Spatial computing'],
    useCases: [
      'Anatomy and medical visualisation',
      'Architectural and product walkthroughs',
      'Collaborative remote assistance',
      'Complex equipment operation',
    ],
  },
}

/* ── Page icons ──────────────────────────────────────────────────────────── */
const VrIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M2 9a7 7 0 1 1 14 0A7 7 0 0 1 2 9Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M2 9H1M17 9h-1M9 2V1M9 17v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const MobileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <rect x="4" y="1" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="14" r="1" fill="currentColor" />
  </svg>
)
const GlassesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M2 9a4 4 0 0 1 4-4h2a1 1 0 0 1 2 0h2a4 4 0 0 1 4 4 3 3 0 0 1-6 0H8a3 3 0 0 1-6 0Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)
const SpatialIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M9 2l7 4v6l-7 4-7-4V6l7-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 2v14M2 6l7 4 7-4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
)
const ImagePlaceholderIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="6" y="14" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="22" cy="28" r="5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M6 40l14-10 10 8 8-6 20 12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)

export default function XrDevelopmentPage() {
  const [activeMode, setActiveMode] = useState<Mode>('vr')
  const mode = MODES[activeMode]

  return (
    <main style={{ background: '#fff', color: '#10263d' }}>

      {/* ── HERO — dark, full-width video ─────────────────────────────────── */}
      <section className={"service-detail-hero"}>
        <div>
          <div className={"about-hero-title"}>
            <h1 className="banner-title">
              <span className={"about-title-dark"}>{"Bring learning into"}</span>
              <span>{"a "}<em>{"new dimension."}</em></span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Virtual, augmented and mixed reality experiences that help people understand, practise and perform at their best — built by a team that has been doing this since the technology was new."}
          </p>
          <div className={"button-row"}>
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base"
              href="/contact"
            >
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
              href={"#xr-modes"}
            >
              {"Explore the technology"} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className={"service-detail-image"}>
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={defaultBanner} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── XR MODE SWITCHER — interactive, white ─────────────────────────── */}
      <section
        id="xr-modes"
        style={{
          background: '#fff',
          padding: 'clamp(3rem, 6vw, 5.5rem) var(--page-gutter)',
        }}
      >
        <p className="eyebrow">{"VR · AR · MR"}</p>
        <h2 style={{ marginBottom: '.75rem' }}>{"Three technologies, one team."}</h2>
        <p style={{ color: '#536b80', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, marginBottom: '3rem' }}>
          {"We work across the full extended reality spectrum — selecting and combining technologies to match your users, their context and the task at hand."}
        </p>

        {/* Tab selector */}
        <div className="xrd-tabs-wrap" role="tablist" aria-label="XR technology">
          {(Object.keys(MODES) as Mode[]).map(m => (
            <button
              key={m}
              role="tab"
              aria-selected={activeMode === m}
              aria-controls={`xrd-panel-${m}`}
              className={`xrd-tab${activeMode === m ? ' is-active' : ''}`}
              onClick={() => setActiveMode(m)}
            >
              <span className="xrd-tab-abbr">{MODES[m].abbr}</span>
              <span className="xrd-tab-full">{MODES[m].label}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          key={activeMode}
          id={`xrd-panel-${activeMode}`}
          role="tabpanel"
          className="xrd-panel"
        >
          {/* Text side */}
          <div>
            <h3 className="xrd-panel-headline">{mode.headline}</h3>
            <p className="xrd-panel-body">{mode.body}</p>

            <div className="xrd-platforms">
              {mode.platforms.map(p => (
                <span key={p} className="xrd-platform-tag">{p}</span>
              ))}
            </div>

            <ul className="xrd-use-cases" aria-label={`${mode.label} use cases`}>
              {mode.useCases.map(uc => (
                <li key={uc}>{uc}</li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <figure className="xrd-panel-figure" aria-label={`${mode.label} image`}>
            {activeMode === 'vr' ? (
              <img
                src={vr}
                alt="Meta Quest 3 headset for VR training experiences"
                loading="lazy"
              />
            ) : activeMode === 'ar' ? (
              /* Placeholder — replace src with the relevant image */
              <img
                src={ar}
                alt="Meta Quest 3 headset for VR training experiences"
                loading="lazy"
              />
            ) : (
              /* Placeholder — replace src with the relevant image */
              <img
                src={mr}
                alt="Meta Quest 3 headset for VR training experiences"
                loading="lazy"
              />
            )}
            <span className="xrd-panel-badge">{mode.abbr}</span>
          </figure>
        </div>
      </section>

      {/* ── IMPACT STATS — dark navy strip ──────────────────────────────── */}
      <div className="xrd-impact">
        <div className="xrd-impact-inner">
          <div className="xrd-impact-item">
            <div className="xrd-impact-num">5<em>×</em></div>
            <p className="xrd-impact-label">{"faster skill acquisition compared to traditional classroom training"}</p>
          </div>
          <div className="xrd-impact-item">
            <div className="xrd-impact-num">76<em>%</em></div>
            <p className="xrd-impact-label">{"improvement in long-term knowledge retention through active practice"}</p>
          </div>
          <div className="xrd-impact-item">
            <div className="xrd-impact-num">0</div>
            <p className="xrd-impact-label">{"real-world risk while trainees rehearse high-stakes procedures"}</p>
          </div>
          <div className="xrd-impact-item">
            <div className="xrd-impact-num">3<em>+</em></div>
            <p className="xrd-impact-label">{"delivery platforms — headset, tablet, smart glasses or browser"}</p>
          </div>
        </div>
      </div>

      {/* ── KEY BENEFITS ─────────────────────────────────────────────────── */}
      <section className="xrd-benefits">
        <div className="xrd-benefits-layout">
          <div className="xrd-benefits-intro">
            <p className="eyebrow">{"KEY BENEFITS"}</p>
            <h2>{"Why XR changes the outcome."}</h2>
            <p>{"Immersive technology goes beyond engagement — it changes how people learn, retain and perform."}</p>
          </div>
          <div className="xrd-benefits-list">
            <div className="xrd-benefit-item">
              <div className="xrd-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              </div>
              <div className="xrd-benefit-text">
                <p className="xrd-benefit-title">Hazard Simulation</p>
                <p className="xrd-benefit-desc">Simulate hazardous environments or complex procedures without real-world risk</p>
              </div>
            </div>
            <div className="xrd-benefit-item">
              <div className="xrd-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.5" /></svg>
              </div>
              <div className="xrd-benefit-text">
                <p className="xrd-benefit-title">Repeatability</p>
                <p className="xrd-benefit-desc">Safe, repeatable and controlled environments that scale across your organisation</p>
              </div>
            </div>
            <div className="xrd-benefit-item">
              <div className="xrd-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
              </div>
              <div className="xrd-benefit-text">
                <p className="xrd-benefit-title">3D Interaction</p>
                <p className="xrd-benefit-desc">Learn by doing in room-scale environments isolated from distractions</p>
              </div>
            </div>
            <div className="xrd-benefit-item">
              <div className="xrd-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
              </div>
              <div className="xrd-benefit-text">
                <p className="xrd-benefit-title">Highly Engaging</p>
                <p className="xrd-benefit-desc">Immersive experiences that increase enjoyment and long-term knowledge retention</p>
              </div>
            </div>
            <div className="xrd-benefit-item">
              <div className="xrd-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <div className="xrd-benefit-text">
                <p className="xrd-benefit-title">Visual</p>
                <p className="xrd-benefit-desc">Highly visual, spatial content that is easy to interpret and understand</p>
              </div>
            </div>
            <div className="xrd-benefit-item">
              <div className="xrd-benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              </div>
              <div className="xrd-benefit-text">
                <p className="xrd-benefit-title">Realtime Analytics</p>
                <p className="xrd-benefit-desc">Live user monitoring and analysis providing quantifiable performance metrics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP CAPABILITIES — dark, 2-col icon-left cards ───────────────── */}
      <section className="xrd-capabilities">
        <div className="xrd-capabilities-head">
          <div className="xrd-capabilities-head-left">
            <p className="eyebrow">{"APP CAPABILITIES"}</p>
            <h2>{"Built to understand your world."}</h2>
          </div>
          <div className="xrd-capabilities-head-right">
            <p>{"Our AR applications combine advanced computer vision and sensor fusion to deliver experiences that are aware, adaptive and precise."}</p>
          </div>
        </div>
        <div className="xrd-capabilities-grid">
          <div className="xrd-cap-card">
            <div className="xrd-cap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title">Scene Detection</p>
              <p className="xrd-cap-desc">{"Our AR apps scan real-life surroundings with the camera lens, perceive gathered data as a coordinate plane, and translate it into a depth map for realistic 3D model placement."}</p>
            </div>
          </div>
          <div className="xrd-cap-card">
            <div className="xrd-cap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title">Image & Object Recognition</p>
              <p className="xrd-cap-desc">{"Our AR apps can be trained to recognise specific 2D images and 3D real-life objects and augment them with the relevant text or model data on the device screen."}</p>
            </div>
          </div>
          <div className="xrd-cap-card">
            <div className="xrd-cap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /><path d="M5.2 5.2A9.96 9.96 0 0 0 2 12" /></svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title">Motion Tracking</p>
              <p className="xrd-cap-desc">{"GPS, gyroscope and accelerometer data allow our AR apps to dynamically resize and calibrate augmentations on screen as the user and device move around."}</p>
            </div>
          </div>
          <div className="xrd-cap-card">
            <div className="xrd-cap-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title">Light Estimation</p>
              <p className="xrd-cap-desc">{"Smart light estimation algorithms allow our AR apps to automatically adjust the lighting of 3D models to naturally match the real-world scene in the camera lens."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH — light grey with device grid + image ───────────── */}
      <section className="xrd-approach" aria-labelledby="xrd-approach-heading">
        <div className="xrd-approach-inner">
          <div className="xrd-approach-text">
            <p className="eyebrow">{"THE APPROACH"}</p>
            <h2 id="xrd-approach-heading">{"Start with the task, not the technology."}</h2>
            <p>{"Every XR project begins with a clear question: what does this person need to be able to do? We select the right platform, fidelity level and interaction model once we understand the user, their environment and the constraints of their organisation."}</p>

            <div className="xrd-approach-devices">
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon"><VrIcon /></div>
                <div>
                  <p className="xrd-device-row-title">VR Headsets</p>
                  <p className="xrd-device-row-desc">{"Full immersion for complex scenario training. Best when physical isolation aids focus."}</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon"><GlassesIcon /></div>
                <div>
                  <p className="xrd-device-row-title">Smart Glasses</p>
                  <p className="xrd-device-row-desc">{"Hands-free AR in the workplace. Ideal for industrial and field-service contexts."}</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon"><MobileIcon /></div>
                <div>
                  <p className="xrd-device-row-title">Mobile AR</p>
                  <p className="xrd-device-row-desc">{"Accessible AR on devices teams already carry. Low friction, wide deployment."}</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon"><SpatialIcon /></div>
                <div>
                  <p className="xrd-device-row-title">Spatial / MR</p>
                  <p className="xrd-device-row-desc">{"Holographic content anchored to the real world — for collaborative and high-precision tasks."}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Approach visual */}
          <div className="xrd-approach-visual">
            <img src={"/assets/images/services/66137.jpg"} alt="XR development approach" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── WORKING WITH MXR — matches SimulatorDevelopmentPage layout ─────── */}
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

      {/* ── CONNECTED CAPABILITIES — white, card grid ────────────────────── */}
      <section className={"section service-related service-related--cards"}>
        <p className={"eyebrow"}>{"CONNECTED CAPABILITIES"}</p>
        <h2>{"Explore our other services."}</h2>
        <div className={"service-related-grid"}>
          <a href={"/simulator-development"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect x="6" y="18" width="44" height="26" rx="8" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M6 30h8M42 30h8" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="19" cy="30" r="5" stroke="#0B66C3" strokeWidth="1.8" />
                <circle cx="37" cy="30" r="5" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M24 30h8" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M28 12v6M22 13.5l2 5M34 13.5l-2 5" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <strong>{"SIMULATOR DEVELOPMENT"}</strong>
            <p>{"Purpose-built simulators for high-fidelity training, scenario rehearsal and operational readiness."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href={"/immersive-rooms"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect x="4" y="14" width="48" height="28" rx="3" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M4 36h48" stroke="#0B66C3" strokeWidth="1.8" />
                <rect x="10" y="20" width="36" height="12" rx="2" stroke="#0B66C3" strokeWidth="1.5" />
                <path d="M22 44h12M28 42v2" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="28" cy="26" r="3" stroke="#0B66C3" strokeWidth="1.5" />
              </svg>
            </span>
            <strong>{"IMMERSIVE ROOMS"}</strong>
            <p>{"Shared large-format projection environments for facilitated team learning and scenario-based training."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href={"/ai-solutions"} className={"service-card"}>
            <span className={"service-card-icon"}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="10" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M28 8v6M28 42v6M8 28h6M42 28h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14.1 14.1l4.2 4.2M37.7 37.7l4.2 4.2M41.9 14.1l-4.2 4.2M18.3 37.7l-4.2 4.2" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="28" cy="28" r="4" stroke="#0B66C3" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="1.5" fill="#0B66C3" />
              </svg>
            </span>
            <strong>{"AI SOLUTIONS"}</strong>
            <p>{"AI-driven tools that enhance learning, automate content and surface performance insights."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href={"/platform-development"} className={"service-card"}>
            <span className={"service-card-icon"}>
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
            <p>{"Bespoke LMS, analytics and workforce development platforms built around your workflows."}</p>
            <span className={"service-card-link"}>{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
        </div>
      </section>

      {/* ── FINAL CTA — dark wave video ───────────────────────────────────── */}
      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type="video/mp4" />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"LET'S BUILD WHAT'S NEXT"}</p>
          <h2>{"Have a project in mind?"}</h2>
          <p>{"Tell us what you want to achieve. We'll help you define the right XR approach and a practical next step."}</p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href="/contact">
            {"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

    </main>
  )
}

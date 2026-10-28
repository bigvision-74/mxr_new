import { ArrowRight } from 'lucide-react'
import room from '../assets/images/omnia/healthcare-room-three-walls.webp'

/* ── Floor-plan SVGs (bird's-eye view) ──────────────────────────────────── */
const FloorSingle = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 160 }}>
    <rect x="4" y="4" width="152" height="92" rx="3" stroke="#CBD8E8" strokeWidth="1.2" fill="#F0F6FC" />
    <rect x="4" y="4" width="152" height="10" rx="1.5" fill="#0B66C3" opacity=".8" />
    <path d="M80 80 L32 14 M80 80 L128 14" stroke="#1684E8" strokeWidth=".9" strokeDasharray="4 2.5" opacity=".55" />
    <rect x="70" y="72" width="20" height="12" rx="2" fill="#0D2338" stroke="#1684E8" strokeWidth="1" />
    <circle cx="80" cy="78" r="3.5" fill="#1684E8" opacity=".7" />
    <circle cx="56" cy="56" r="4" fill="#CBD8E8" />
    <circle cx="80" cy="62" r="4" fill="#CBD8E8" />
    <circle cx="104" cy="56" r="4" fill="#CBD8E8" />
    <circle cx="44" cy="44" r="4" fill="#CBD8E8" />
    <circle cx="116" cy="44" r="4" fill="#CBD8E8" />
  </svg>
)

const FloorDual = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 160 }}>
    <rect x="4" y="4" width="152" height="92" rx="3" stroke="#CBD8E8" strokeWidth="1.2" fill="#F0F6FC" />
    <rect x="4" y="4" width="152" height="10" rx="1.5" fill="#0B66C3" opacity=".8" />
    <rect x="146" y="4" width="10" height="92" rx="1.5" fill="#0B66C3" opacity=".8" />
    <path d="M70 76 L28 14 M70 76 L128 14" stroke="#1684E8" strokeWidth=".9" strokeDasharray="4 2.5" opacity=".45" />
    <path d="M128 62 L146 22 M128 62 L146 88" stroke="#1684E8" strokeWidth=".9" strokeDasharray="4 2.5" opacity=".45" />
    <rect x="60" y="69" width="19" height="11" rx="2" fill="#0D2338" stroke="#1684E8" strokeWidth="1" />
    <rect x="121" y="53" width="11" height="17" rx="2" fill="#0D2338" stroke="#1684E8" strokeWidth="1" />
    <circle cx="50" cy="55" r="4" fill="#CBD8E8" />
    <circle cx="78" cy="62" r="4" fill="#CBD8E8" />
    <circle cx="106" cy="57" r="4" fill="#CBD8E8" />
    <circle cx="38" cy="44" r="4" fill="#CBD8E8" />
    <circle cx="94" cy="44" r="4" fill="#CBD8E8" />
  </svg>
)

const FloorPanoramic = () => (
  <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 160 }}>
    <rect x="4" y="4" width="152" height="92" rx="3" stroke="#CBD8E8" strokeWidth="1.2" fill="#F0F6FC" />
    <rect x="4" y="4" width="152" height="10" rx="1.5" fill="#0B66C3" opacity=".8" />
    <rect x="4" y="4" width="10" height="92" rx="1.5" fill="#0B66C3" opacity=".8" />
    <rect x="146" y="4" width="10" height="92" rx="1.5" fill="#0B66C3" opacity=".8" />
    <path d="M80 74 L28 14 M80 74 L132 14" stroke="#1684E8" strokeWidth=".9" strokeDasharray="4 2.5" opacity=".4" />
    <path d="M42 60 L14 22 M42 60 L14 88" stroke="#1684E8" strokeWidth=".9" strokeDasharray="4 2.5" opacity=".4" />
    <path d="M118 60 L146 22 M118 60 L146 88" stroke="#1684E8" strokeWidth=".9" strokeDasharray="4 2.5" opacity=".4" />
    <rect x="70" y="66" width="20" height="11" rx="2" fill="#0D2338" stroke="#1684E8" strokeWidth="1" />
    <rect x="33" y="50" width="11" height="17" rx="2" fill="#0D2338" stroke="#1684E8" strokeWidth="1" />
    <rect x="116" y="50" width="11" height="17" rx="2" fill="#0D2338" stroke="#1684E8" strokeWidth="1" />
    <circle cx="64" cy="48" r="4" fill="#CBD8E8" />
    <circle cx="80" cy="56" r="4" fill="#CBD8E8" />
    <circle cx="96" cy="48" r="4" fill="#CBD8E8" />
    <circle cx="58" cy="36" r="4" fill="#CBD8E8" />
    <circle cx="102" cy="36" r="4" fill="#CBD8E8" />
    <circle cx="80" cy="38" r="4" fill="#CBD8E8" />
  </svg>
)

export default function ImmersiveRoomsPage() {
  return (
    <main className="service-detail">

      {/* ── HERO — full-bleed room photo with gradient overlay ─────────────── */}
      <section className="service-detail-hero">
        <div style={{ maxWidth: '46vw' }}>
          <div className="about-hero-title">
            <h1 className="banner-title">
              <span>{"Turn any room"}</span>
              <span>{"into "}<em>{"a shared world."}</em></span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Large-format projection environments that place a group inside a scene — no headsets, no barriers, just a room that becomes anywhere you need it to be."}
          </p>
          <div className="button-row">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base"
              href="/contact"
            >
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="service-detail-image">
          <img src={room} alt="Three-wall panoramic immersive healthcare training room" fetchPriority="high" />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(105deg, rgba(13,24,38,.72) 0%, rgba(13,24,38,.45) 45%, transparent 75%)',
          }} />
        </div>
      </section>

      {/* ── WHAT WE DELIVER ────────────────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="eyebrow" style={{ color: '#0b66c3' }}>{"WHAT WE DELIVER"}</p>
          <h2>{"Every surface working for you."}</h2>
        </div>
        <div className="xrd-capabilities-grid" style={{ borderTop: '1px solid rgba(0,0,0,.08)', borderLeft: '1px solid rgba(0,0,0,.08)' }}>
          <div className="xrd-cap-card" style={{ borderRight: '1px solid rgba(0,0,0,.08)', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
            <div className="xrd-cap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title" style={{ color: 'var(--color-dark)' }}>{"Room-scale projection"}</p>
              <p className="xrd-cap-desc" style={{ color: 'rgba(13,24,38,.55)' }}>{"360° footage and real-time 3D environments across single, dual or panoramic wall configurations."}</p>
            </div>
          </div>
          <div className="xrd-cap-card" style={{ borderRight: '1px solid rgba(0,0,0,.08)', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
            <div className="xrd-cap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="6" width="14" height="10" rx="2"/><path d="M18 9l4-2v10l-4-2M7 9v6"/>
              </svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title" style={{ color: 'var(--color-dark)' }}>{"Facilitator control"}</p>
              <p className="xrd-cap-desc" style={{ color: 'rgba(13,24,38,.55)' }}>{"Live instructor tools for scene selection, event triggers, branching and group-wide pause and replay."}</p>
            </div>
          </div>
          <div className="xrd-cap-card" style={{ borderRight: '1px solid rgba(0,0,0,.08)', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
            <div className="xrd-cap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>
              </svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title" style={{ color: 'var(--color-dark)' }}>{"Scenario authoring"}</p>
              <p className="xrd-cap-desc" style={{ color: 'rgba(13,24,38,.55)' }}>{"Build and manage libraries of branched scenarios with decision points and custom content."}</p>
            </div>
          </div>
          <div className="xrd-cap-card" style={{ borderRight: '1px solid rgba(0,0,0,.08)', borderBottom: '1px solid rgba(0,0,0,.08)' }}>
            <div className="xrd-cap-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="xrd-cap-body">
              <p className="xrd-cap-title" style={{ color: 'var(--color-dark)' }}>{"Hardware & installation"}</p>
              <p className="xrd-cap-desc" style={{ color: 'rgba(13,24,38,.55)' }}>{"Projection hardware specified, supplied and installed for your space — calibrated and ready to use."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT TYPES ──────────────────────────────────────────────────── */}
      <section className="xrd-approach" style={{ background: '#f5f8fb' }}>
        <div className="xrd-approach-inner">
          <div className="xrd-approach-text">
            <p className="eyebrow" style={{ color: '#0b66c3' }}>{"CONTENT & EXPERIENCES"}</p>
            <h2>{"What runs in the room."}</h2>
            <p>{"The room is a delivery surface. Content is built to your scenario and objectives — from on-site footage to fully interactive 3D environments."}</p>
            <div className="xrd-approach-devices">
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">{"360° video"}</p>
                  <p className="xrd-device-row-desc">{"Immersive footage captured on location — wards, sites, vehicles, environments — played back at room scale."}</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">{"Real-time 3D"}</p>
                  <p className="xrd-device-row-desc">{"Interactive environments built in game engines, with live branching, dynamic events and responsive objects."}</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">{"Photogrammetry capture"}</p>
                  <p className="xrd-device-row-desc">{"High-fidelity scans of physical spaces, equipment and assets — brought into the room as accurate 3D models."}</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">{"Data & overlay layers"}</p>
                  <p className="xrd-device-row-desc">{"Live feeds, sensor data and contextual overlays displayed alongside environments — ideal for ops and planning."}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="xrd-approach-visual">
            <img
              src={room}
              alt="Panoramic immersive room with three projection walls"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
            />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ────────────────────────────────────────────────────── */}
      <div className="ais-stats">
        <div className="ais-stats-inner">
          <div className="ais-stat-item">
            <div className="ais-stat-num">30<em>+</em></div>
            <p className="ais-stat-label">{"participants in a single session — no headsets, no individual setup"}</p>
          </div>
          <div className="ais-stat-item">
            <div className="ais-stat-num">3</div>
            <p className="ais-stat-label">{"wall configurations — single, dual and full panoramic (360°)"}</p>
          </div>
          <div className="ais-stat-item">
            <div className="ais-stat-num">1<em>×</em></div>
            <p className="ais-stat-label">{"facilitator controlling the entire room, live, from a single interface"}</p>
          </div>
        </div>
      </div>

      {/* ── ROOM CONFIGURATIONS ────────────────────────────────────────────── */}
      <section className="drive-problem section">
        <div style={{ marginBottom: '2rem' }}>
          <p className="eyebrow" style={{ color: '#0b66c3' }}>{"ROOM CONFIGURATIONS"}</p>
          <h2>{"Built for your space."}</h2>
        </div>
        <div className="drive-problem-grid">

          <article>
            <div style={{ background: '#eef5fb', borderRadius: 10, padding: '1.25rem', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <FloorSingle />
            </div>
            <small>{"SINGLE WALL"}</small>
            <h3>{"Focused immersion for instructed groups."}</h3>
            <div>
              <b>{"BEST FOR"}</b>
              <span>{"Briefings, pre-deployment preparation, environmental familiarisation, collaborative review."}</span>
            </div>
          </article>

          <article>
            <div style={{ background: '#eef5fb', borderRadius: 10, padding: '1.25rem', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <FloorDual />
            </div>
            <small>{"DUAL WALL"}</small>
            <h3>{"Peripheral awareness and spatial depth."}</h3>
            <div>
              <b>{"BEST FOR"}</b>
              <span>{"Tactical rehearsal, site walkthroughs, emergency response exercises, product demonstrations."}</span>
            </div>
          </article>

          <article>
            <div style={{ background: '#eef5fb', borderRadius: 10, padding: '1.25rem', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <FloorPanoramic />
            </div>
            <small>{"PANORAMIC (360°)"}</small>
            <h3>{"Full surround — total shared presence."}</h3>
            <div>
              <b>{"BEST FOR"}</b>
              <span>{"Clinical simulation, fire and hazmat response, defence rehearsal, large-scale multi-team exercises."}</span>
            </div>
          </article>

        </div>
      </section>

      {/* ── SECTORS ────────────────────────────────────────────────────────── */}
      <section className="ais-trust">
        <p className="eyebrow" style={{ color: '#0b66c3' }}>{"WHO USES IMMERSIVE ROOMS"}</p>
        <h2>{"Built for high-stakes training."}</h2>
        <p className="ais-trust-lead">{"Immersive rooms are deployed where the cost of under-preparation is highest — and where shared, group-based rehearsal makes the difference."}</p>
        <div className="ais-trust-cols">
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>{"Healthcare & clinical"}</h3>
            <p>{"Team-based clinical simulation, ward familiarisation, emergency scenarios and patient safety training."}</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>{"Defence & security"}</h3>
            <p>{"Operational rehearsal, pre-deployment preparation, collective mission planning and terrain familiarisation."}</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1.5 8.5A14.4 14.4 0 0 1 12 4c4.1 0 7.8 1.7 10.5 4.5M5 12a10 10 0 0 1 14 0M8.5 15.5A5 5 0 0 1 12 14c1.4 0 2.6.5 3.5 1.5M12 19h.01"/>
              </svg>
            </div>
            <h3>{"Fire & emergency"}</h3>
            <p>{"Multi-crew response exercises, hazmat scenarios, incident command training and building evacuation drills."}</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v5M9.5 14.5h5"/>
              </svg>
            </div>
            <h3>{"Industrial & safety"}</h3>
            <p>{"Site induction, confined space and working-at-height training, permit-to-work procedures and equipment walkthroughs."}</p>
          </div>
        </div>
      </section>

      {/* ── THE APPROACH ───────────────────────────────────────────────────── */}
      <section className="section service-outcome">
        <div className="service-outcome-text">
          <p className="eyebrow" style={{ color: '#0b66c3' }}>{"THE APPROACH"}</p>
          <h2>{"Design the room around what happens in it."}</h2>
          <p>{"We work from your learning objectives and physical space outward — selecting projection format, content platform and facilitator tooling once we understand exactly what your people need to be able to do."}</p>
          <div className="service-approach-modes">
            <span className="service-approach-pill">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><rect x="1" y="1" width="12" height="3.5" rx="1" fill="currentColor" opacity=".4" /></svg>
              {"Single Wall"}
            </span>
            <span className="service-approach-pill">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><rect x="1" y="1" width="12" height="3.5" rx="1" fill="currentColor" opacity=".4" /><rect x="10.5" y="1" width="2.5" height="12" rx="1" fill="currentColor" opacity=".4" /></svg>
              {"Dual Wall"}
            </span>
            <span className="service-approach-pill">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><rect x="1" y="1" width="12" height="3.5" rx="1" fill="currentColor" opacity=".4" /><rect x="1" y="1" width="2.5" height="12" rx="1" fill="currentColor" opacity=".4" /><rect x="10.5" y="1" width="2.5" height="12" rx="1" fill="currentColor" opacity=".4" /></svg>
              {"Panoramic (360°)"}
            </span>
          </div>
        </div>
        <div className="service-use-cases">
          <small>{"WHERE IT FITS"}</small>
          <ul className="service-use-cases-list">
            <li>{"Healthcare & clinical simulation"}</li>
            <li>{"Defence and operational rehearsal"}</li>
            <li>{"Fire, rescue and emergency response"}</li>
            <li>{"Industrial safety and site induction"}</li>
            <li>{"Team-based decision-making exercises"}</li>
          </ul>
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
            {"WORKING WITH MXR"}
          </p>
          <h2>
            {"A clear route from idea to delivery."}
          </h2>
        </div>
        <div className={"service-steps-cards"}>
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

      {/* ── CONNECTED CAPABILITIES ─────────────────────────────────────────── */}
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
            <p>{"VR, AR and MR experiences for individual learners — a natural complement to group room-based training."}</p>
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/simulator-development" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <rect x="8" y="16" width="40" height="26" rx="4" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M16 29h8M32 29h8M20 25v8M36 25v8" stroke="#0B66C3" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M28 10v6" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <strong>{"SIMULATOR DEVELOPMENT"}</strong>
            <p>{"Purpose-built simulators for high-fidelity training, scenario rehearsal and operational readiness."}</p>
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/ai-solutions" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="10" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M28 8v6M28 42v6M8 28h6M42 28h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M14.1 14.1l4.2 4.2M37.7 37.7l4.2 4.2M41.9 14.1l-4.2 4.2M18.3 37.7l-4.2 4.2" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="28" cy="28" r="4" stroke="#0B66C3" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="1.5" fill="#0B66C3" />
              </svg>
            </span>
            <strong>{"AI SOLUTIONS"}</strong>
            <p>{"AI-driven tools that enhance learning outcomes, automate content creation and surface performance insights."}</p>
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
            <p>{"Bespoke LMS and analytics platforms that connect room session data to your wider training ecosystem."}</p>
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section className="final-cta home-wave-section home-wave-cta">
        <div className="home-wave-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="eyebrow">{"LET'S BUILD WHAT'S NEXT"}</p>
          <h2>{"Have a room in mind?"}</h2>
          <p>{"Tell us what you want to achieve. We'll help you define the right configuration and a practical next step."}</p>
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

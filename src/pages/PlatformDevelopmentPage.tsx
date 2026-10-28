import { ArrowRight } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import epriumScreen from '../assets/images/eprium/epriumss.png'
import insightxrDevices from '../assets/images/insightxr-devices.png'
import insightxrPlatform from '../assets/images/insightxr-platform.png'
import productLaptop from '../assets/images/eprium/product-laptop.webp'


import scale from "../../public/assets/images/services/images.jpeg"
import native from "../../public/assets/images/services/images (1).jpeg"
import tools from "../../public/assets/images/services/Best.webp"
import software from "../../public/assets/images/services/images (2).jpeg"

export default function PlatformDevelopmentPage() {
  return (
    <main className="service-detail">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="service-detail-hero">
        <div>
          <div className="about-hero-title">
            <h1 className="banner-title">
              <span className="about-title-dark">{"Software built"}</span>
              <span>{"around the "}<em>{"way you work."}</em></span>
            </h1>
          </div>
          <p className="banner-lead">
            {"Web, mobile and desktop platforms that connect users, content and workflows — engineered for performance, accessibility and long-term use."}
          </p>
          <div className="button-row">
            <a
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base"
              href="mailto:hello@mxr.ai?subject=Platform%20Development%20enquiry"
            >
              {"Discuss your project"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div className="service-detail-image">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={defaultBanner} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── WHAT WE DELIVER ────────────────────────────────────────────────── */}
      <section className="section service-deliver">
        <div>
          <p className="eyebrow">{"WHAT WE DELIVER"}</p>
          <h2>{"Built around your challenge."}</h2>
        </div>
        <div className="service-feature-grid">
          <article>
            <span>{"01"}</span>
            <h3>{"Application development"}</h3>
            <p>{"Responsive web, mobile and desktop tools built around your users' real workflows — tested across devices and designed to last."}</p>
          </article>
          <article>
            <span>{"02"}</span>
            <h3>{"UI & UX design"}</h3>
            <p>{"Interfaces shaped around how real people work — from information hierarchy to micro-interactions and WCAG accessibility compliance."}</p>
          </article>
          <article>
            <span>{"03"}</span>
            <h3>{"API & integration"}</h3>
            <p>{"Connect your tools, data flows and third-party services into a coherent, reliable technology ecosystem with clear contracts."}</p>
          </article>
          <article>
            <span>{"04"}</span>
            <h3>{"Deployment & support"}</h3>
            <p>{"CI/CD pipelines, hosting strategy and a clear plan for long-term maintenance, iteration and platform evolution."}</p>
          </article>
        </div>
      </section>

      {/* ── DARK STATEMENT ─────────────────────────────────────────────────── */}
      <div style={{
        background: 'var(--color-dark)',
        padding: 'clamp(3.5rem, 7vw, 6rem) var(--page-gutter)',
        textAlign: 'center',
      }}>
        <p style={{ color: 'rgba(255,255,255,.42)', fontSize: '.76rem', fontWeight: 800, letterSpacing: '.18em', margin: '0 0 1.25rem', textTransform: 'uppercase' }}>
          {"WHY CUSTOM PLATFORMS"}
        </p>
        <h2 style={{ color: '#fff', maxWidth: '820px', margin: '0 auto 1.25rem' }}>
          {"Off-the-shelf tools adapt you to them. "}
          <span style={{ color: 'var(--hero-accent)' }}>{"We adapt the platform to you."}</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,.45)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto' }}>
          {"Purpose-built software eliminates the compromises, integrations and workarounds that constrain what your teams can achieve."}
        </p>
      </div>

      {/* ── PLATFORM TYPES ─────────────────────────────────────────────────── */}
      <section className="drive-problem section">
        <div style={{ marginBottom: '2rem' }}>
          <p className="eyebrow">{"PLATFORM TYPES"}</p>
          <h2>{"One team. Every platform."}</h2>
        </div>
        <div className="drive-problem-grid">

          <article>
            <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: '1.25rem', aspectRatio: '16/9', background: '#e8f0f8' }}>
              <img src={scale} alt="Web platform dashboard screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} loading="lazy" />
            </div>
            <small>{"WEB APPLICATION"}</small>
            <h3>{"Scalable, responsive web platforms."}</h3>
            <p>{"Portals, dashboards and SaaS tools built with modern frameworks — optimised for performance and designed around your users' real workflows."}</p>
          </article>

          <article>
            <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: '1.25rem', aspectRatio: '16/9', background: '#e8f0f8' }}>
              <img src={native} alt="Mobile app screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} loading="lazy" />
            </div>
            <small>{"MOBILE APPLICATION"}</small>
            <h3>{"Native feel, cross-platform reach."}</h3>
            <p>{"iOS and Android apps from a single shared codebase — offline-capable, push-ready and built for the devices your teams already carry in the field."}</p>
          </article>

          <article>
            <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: '1.25rem', aspectRatio: '16/9', background: '#e8f0f8' }}>
              <img src={tools} alt="Desktop platform on multiple devices" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} loading="lazy" />
            </div>
            <small>{"DESKTOP APPLICATION"}</small>
            <h3>{"Powerful tools for specialist workflows."}</h3>
            <p>{"Purpose-built software for complex data, simulation control and enterprise environments where a browser alone won't do."}</p>
          </article>

        </div>
      </section>

      {/* ── CORE CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="ais-trust">
        <p className="eyebrow">{"CORE CAPABILITIES"}</p>
        <h2>{"Everything your platform needs."}</h2>
        <p className="ais-trust-lead">{"We cover the full scope of platform engineering — from first architecture decisions to ongoing deployment and care."}</p>
        <div className="ais-trust-cols">
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="7" rx="2" /><rect x="2" y="14" width="9" height="7" rx="2" /><rect x="15" y="14" width="7" height="7" rx="2" />
              </svg>
            </div>
            <h3>{"ARCHITECTURE & SCALABILITY"}</h3>
            <p>{"Scalable, secure structures planned from the first sprint — built to grow alongside your requirements, user base and data volumes without costly rewrites."}</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>{"PERFORMANCE & SECURITY"}</h3>
            <p>{"Authentication, role-based access, encryption and hosting strategy considered throughout — not as an afterthought when go-live approaches."}</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>{"CONTENT & ADMIN TOOLS"}</h3>
            <p>{"Role-based CMS, user management and operational controls that put your team in charge of their own platform from day one — no dev required."}</p>
          </div>
          <div className="ais-trust-col">
            <div className="ais-trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <h3>{"ANALYTICS & REPORTING"}</h3>
            <p>{"Data captured where it matters, surfaced in ways that make decisions clearer — from xAPI activity streams to custom operational dashboards."}</p>
          </div>
        </div>
      </section>

      {/* ── PLATFORM SHOWCASE ──────────────────────────────────────────────── */}
      <div style={{ background: '#f5f8fb', padding: '80px 8vw', borderTop: '1px solid #e1eaf2' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5vw', alignItems: 'center' }}>
          <figure style={{ margin: 0, borderRadius: 14, overflow: 'hidden', boxShadow: '0 12px 48px rgba(11,22,38,.13)', border: '1px solid #dce8f0' }}>
            <img src={software} alt="InsightXR analytics and reporting platform" style={{ width: '100%', display: 'block' }} loading="lazy" />
          </figure>
          <div>
            <p className="eyebrow">{"PLATFORMS WE'VE BUILT"}</p>
            <h2>{"Software already in use."}</h2>
            <p style={{ fontSize: '1rem', color: '#4e6278', lineHeight: 1.75, margin: '1.25rem 0 2rem' }}>
              {"From clinical LMS platforms to XR analytics dashboards — platforms trusted by teams across healthcare, defence and enterprise training. Purpose-built, not templated."}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" />
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">EPRium</p>
                  <p className="xrd-device-row-desc">Clinical placement & simulation management platform</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">InsightXR</p>
                  <p className="xrd-device-row-desc">XR analytics, reporting and learner progress tracking</p>
                </div>
              </div>
              <div className="xrd-device-row">
                <div className="xrd-device-row-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  </svg>
                </div>
                <div>
                  <p className="xrd-device-row-title">DriveXR Portal</p>
                  <p className="xrd-device-row-desc">Operational management and data platform for the DriveXR simulator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PLATFORM SCREENSHOT STRIP ───────────────────────────────────────── */}
      <div style={{ background: 'var(--color-dark)', padding: '60px 8vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <figure style={{ margin: 0, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }}>
            <img src={productLaptop} alt="Platform on laptop" style={{ width: '100%', display: 'block' }} loading="lazy" />
          </figure>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28, padding: '0 2vw' }}>
            <p style={{ color: 'rgba(255,255,255,.42)', fontSize: '.76rem', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', margin: 0 }}>{"DESIGNED TO LAST"}</p>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 2.8vw, 3rem)', lineHeight: 1.1, letterSpacing: '-.035em', margin: 0 }}>
              {"Every component built for the long term."}
            </h2>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: '1rem', lineHeight: 1.75, margin: 0 }}>
              {"We build with documented component libraries, consistent design tokens and clean API boundaries — so every future feature costs less and every future dev can hit the ground running."}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { num: '3×', label: 'deployment targets from one codebase' },
                { num: '100%', label: 'custom — no templates or licensing' },
                { num: 'Day 1', label: 'SCORM & xAPI compliance built in' },
                { num: 'Full', label: 'WCAG accessibility from wireframe' },
              ].map(stat => (
                <div key={stat.num} style={{ padding: '16px 18px', background: 'rgba(255,255,255,.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)' }}>
                  <div style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 800, color: 'var(--hero-accent)', letterSpacing: '-.03em', lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.5, marginTop: 6 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── THE APPROACH ───────────────────────────────────────────────────── */}
      <section className="section service-outcome">
        <div className="service-outcome-text">
          <p className="eyebrow">{"THE APPROACH"}</p>
          <h2>{"From first requirement to everyday use."}</h2>
          <p>{"We combine experience design and engineering with an iterative delivery process — making sure you see working software early and often, not in one big reveal."}</p>
          <div className="service-approach-modes">
            <span className="service-approach-pill">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="2" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M4 10h6M7 9v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
              {"Web App"}
            </span>
            <span className="service-approach-pill">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="4" y="1" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="7" cy="11" r=".6" fill="currentColor" /></svg>
              {"Mobile App"}
            </span>
            <span className="service-approach-pill">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="2" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><rect x="1" y="2" width="3" height="10" rx="1" fill="currentColor" opacity=".35" /></svg>
              {"Desktop App"}
            </span>
          </div>
        </div>
        <div className="service-use-cases">
          <small>{"WHERE WE DEPLOY"}</small>
          <ul className="service-use-cases-list">
            <li>{"Learning platforms & LMS"}</li>
            <li>{"Operational dashboards"}</li>
            <li>{"Simulation management tools"}</li>
            <li>{"Field service & inspection apps"}</li>
            <li>{"Content management portals"}</li>
            <li>{"Data analytics workstations"}</li>
          </ul>
        </div>
      </section>

      {/* ── THE MXR ADVANTAGE ──────────────────────────────────────────────── */}
      <section className="drive-problem section">
        <div style={{ marginBottom: '2rem' }}>
          <p className="eyebrow">{"THE MXR ADVANTAGE"}</p>
          <h2>{"Built for your business. Designed for your users."}</h2>
        </div>
        <div className="drive-problem-grid">

          <article>
            <div style={{ background: '#eef5fb', borderRadius: 10, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '.8rem', color: '#0B66C3', letterSpacing: '.06em' }}>{"FULL STACK"}</span>
            </div>
            <small>{"ONE TEAM"}</small>
            <h3>{"Designers, developers and architects together."}</h3>
            <p>{"No handoffs between separate agencies. Design, front-end, back-end and infrastructure working from a shared brief — so nothing gets lost between disciplines."}</p>
            <div>
              <b>{"WHAT THIS MEANS"}</b>
              <span>{"Faster decisions, fewer integration issues, consistent output from first wireframe to final deployment."}</span>
            </div>
          </article>

          <article>
            <div style={{ background: '#eef5fb', borderRadius: 10, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '.8rem', color: '#0B66C3', letterSpacing: '.06em' }}>{"LMS READY"}</span>
            </div>
            <small>{"STANDARDS COMPLIANCE"}</small>
            <h3>{"SCORM and xAPI compliance from day one."}</h3>
            <p>{"Learning standards built in from the start — not bolted on at the end. Your platform connects cleanly to your LMS, feeds activity data to your analytics and stays auditable."}</p>
            <div>
              <b>{"WHAT THIS MEANS"}</b>
              <span>{"No costly re-engineering later. Compliant from first delivery and compatible with your existing ecosystem."}</span>
            </div>
          </article>

          <article>
            <div style={{ background: '#eef5fb', borderRadius: 10, padding: '1.25rem', display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.25rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: '.8rem', color: '#0B66C3', letterSpacing: '.06em' }}>{"BUILT TO LAST"}</span>
            </div>
            <small>{"LONG-TERM DELIVERY"}</small>
            <h3>{"A clear roadmap and support model from launch."}</h3>
            <p>{"Reusable components and documented patterns keep quality consistent and future development costs predictable. We plan for your platform to evolve — not just ship and move on."}</p>
            <div>
              <b>{"WHAT THIS MEANS"}</b>
              <span>{"Predictable enhancement costs, lower maintenance overhead and a codebase that stays maintainable as your team grows."}</span>
            </div>
          </article>

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
            <p>{"Understand your users, objectives and technical environment."}</p>
          </article>
          <article>
            <b>{"02"}</b>
            <h3>{"Design"}</h3>
            <p>{"Shape the experience and validate the architecture."}</p>
          </article>
          <article>
            <b>{"03"}</b>
            <h3>{"Develop"}</h3>
            <p>{"Build iteratively with regular reviews and feedback cycles."}</p>
          </article>
          <article>
            <b>{"04"}</b>
            <h3>{"Deploy & evolve"}</h3>
            <p>{"Support launch, adoption and continued platform growth."}</p>
          </article>
        </div>
      </section>

      {/* ── CONNECTED CAPABILITIES ────────────────────────────────────────── */}
      <section className="section service-related service-related--cards">
        <p className="eyebrow">{"CONNECTED CAPABILITIES"}</p>
        <h2>{"Explore our other services."}</h2>
        <div className="service-related-grid">
          <a href="/xr-development" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 28a5 5 0 0 1 10 0 5 5 0 0 1-10 0Z" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M44 28a5 5 0 0 1 10 0 5 5 0 0 1-10 0Z" stroke="#0B66C3" strokeWidth="1.8" />
                <path d="M6 18h6a16 16 0 0 1 32 0h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M6 38h6a16 16 0 0 0 32 0h6" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M26 28h4" stroke="#0B66C3" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <strong>{"XR DEVELOPMENT"}</strong>
            <p>{"Design and build immersive XR experiences tailored to your training, simulation and engagement goals."}</p>
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/simulator-development" className="service-card">
            <span className="service-card-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/ai-solutions" className="service-card">
            <span className="service-card-icon">
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
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
          <a href="/immersive-rooms" className="service-card">
            <span className="service-card-icon">
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
            <span className="service-card-link">{"Explore"} <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="#0B66C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="final-cta home-wave-section home-wave-cta">
        <div className="home-wave-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="eyebrow">{"LET'S BUILD WHAT'S NEXT"}</p>
          <h2>{"Have a project in mind?"}</h2>
          <p>{"Tell us what you want to achieve. We'll help define the right platform approach and a practical next step."}</p>
        </div>
        <div className="button-row">
          <a className="btn btn-primary" href="mailto:hello@mxr.ai?subject=Platform%20Development%20enquiry">
            {"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

    </main>
  )
}

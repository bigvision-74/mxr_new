import brochureResponse from '../assets/images/drivexr/brochure-response.webp'
import brochureInstructors from '../assets/images/drivexr/brochure-instructors.webp'
import brochureTraining from '../assets/images/drivexr/brochure-training.webp'
import brochureSimulator from '../assets/images/drivexr/brochure-simulator.webp'
import dxSimulator from '../assets/images/drivexr/ambulance-tunnel.webp'
import dxAmbulanceData from '../assets/images/drivexr/holo-training.webp'
import crewPanorama from '../assets/images/drivexr/crew-panorama.webp'

export default function DriveXR2Page() {
  return (
    <main className="dx-page dx2">
      <section className="dx-hero">
        <div className="dx-hero-image">
          <img src={brochureResponse} alt="DriveXR 2 — next-generation emergency driver simulation" fetchPriority="high" />
        </div>
        <div className="dx-hero-copy">
          <p className="dx-kicker">EMERGENCY VEHICLE DRIVER TRAINING SIMULATOR</p>
          <div className="dx-title">
            <h1>
              <span>Precision under</span>
              <span>pressure.</span>
              <em>Performance when it matters.</em>
            </h1>
          </div>
          <p>Develop, assess and improve real-world blue-light driving competency in a safe, measurable and fully immersive environment.</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
            <a className="dx-button" href="mailto:hello@mxr.ai?subject=DriveXR%202%20demonstration">
              Book a live demonstration{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a className="dx-button" href="#capabilities" style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff' }}>
              Explore the simulator{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="dx-hero-note">
            REAL-WORLD SCENARIOS <span> / </span> MEASURABLE PERFORMANCE <span> / </span> BUILD CONFIDENCE, REDUCE RISK <span> / </span> BETTER DRIVERS, SAFER COMMUNITIES
          </div>
        </div>
        <div className="dx-caption">
          DriveXR 2{' '}
          <span>Emergency driver training, reimagined.</span>
        </div>
      </section>

      {/* ── Intro: Immersive by design ── */}
      <section className="dx-intro">
        <div className="dx-intro-copy">
          <h2>
            Immersive by design.{' '}
            <em>Data-driven by default.</em>
          </h2>
          <p>
            DriveXR is MXR's advanced emergency vehicle driver training simulator, built for ambulance services, emergency response organisations and blue-light training providers.
          </p>
        </div>
        <figure className="dx-intro-figure">
          <img src={dxSimulator} alt="Ambulance inside a DriveXR multi-screen immersive simulator" loading="lazy" />
          <figcaption>FROM CLASSROOM TO BLUE-LIGHT READINESS</figcaption>
        </figure>
      </section>

      {/* ── Industry Challenge ── */}
      <section className="dx-industry">
        <div className="dx-industry-grid">
          <div className="dx-industry-imgwrap">
            <img src={dxAmbulanceData} alt="Holographic ambulance wireframe beside a trainee in a VR simulator" loading="lazy" />
            <div className="dx-industry-warn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <strong>Poor training creates avoidable risk.</strong>
            </div>
          </div>
          <div className="dx-industry-content">
            <p className="dx-industry-kicker">INDUSTRY CHALLENGE</p>
            <h2>Training drivers for high-risk response environments</h2>
            <p>Split-second decisions on blue-light calls affect public safety, patient outcomes and operational risk. Traditional training is costly, hard to repeat and inconsistently measured.</p>
            <div className="dx-pills">
              <span className="dx-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7z" /></svg>
                Collision risk in live training
              </span>
              <span className="dx-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>
                Little exposure to high-risk scenarios
              </span>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span className="dx-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  Inconsistent assessment
                </span>
                <span className="dx-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
                  Poor visibility of competency
                </span>
              </div>
              <span className="dx-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2M12 12v4" /></svg>
                High fuel and vehicle wear costs
              </span>
              <span className="dx-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
                Under-prepared for complex responses
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MXR Solution: Train. Measure. Improve. ── */}
      <section className="dx-solution">

        {/* Panoramic image with overlaid content */}
        <div className="dx-solution-hero">
          <img src={crewPanorama} alt="Ambulance crew members driving the DriveXR simulator with an instructor at the control station" loading="lazy" />
          <div className="dx-solution-gradient" aria-hidden="true" />
          <div className="dx-solution-overlay-content">

            {/* Kicker + heading — full-width row */}
            <div className="dx-solution-header">
              <p className="dx-solution-kicker">
                <span className="dx-solution-dot" aria-hidden="true" />
                THE MXR SOLUTION
              </p>
              <h2>Train. Measure. Improve.</h2>
            </div>

            {/* Description + cards — side by side below heading */}
            <div className="dx-solution-bottom">
              <p>Advanced simulation, AI traffic and instructor-led scenario control let trainees build critical operational driving skills without real-world risk. DriveXR bridges the gap between classroom theory and operational readiness.</p>
              {/* 2×3 feature cards */}
              <div className="dx-solution-cards">
                {[
                  { label: 'Full vehicle simulation', icon: <path d="M12 2a5 5 0 0 1 5 5v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v1h6V7a3 3 0 0 0-3-3z" /> },
                  { label: 'Real-world response scenarios', icon: <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></> },
                  { label: 'Instructor-driven interventions', icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></> },
                  { label: 'Dynamic hazards', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></> },
                  { label: 'Behavioural analytics', icon: <path d="M3 3v18h18M7 15l4-5 4 3 6-8" /> },
                  { label: 'Competency scoring', icon: <><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></> },
                ].map(f => (
                  <div className="dx-solution-card" key={f.label}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{f.icon}</svg>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>{/* end dx-solution-cards */}
            </div>{/* end dx-solution-bottom */}

          </div>{/* end dx-solution-overlay-content */}
        </div>{/* end dx-solution-hero */}

        {/* Steps row */}
        <div className="dx-solution-steps">
          {[
            { n: '01', title: 'Train', body: 'Rehearse emergency driving in realistic UK road environments, as often as needed.' },
            { n: '02', title: 'Measure', body: 'Every session produces objective data on speed, lanes, reactions and compliance.', accent: true },
            { n: '03', title: 'Improve', body: 'Replay, debrief and track competency over time.' },
          ].map(s => (
            <div className={`dx-solution-step${s.accent ? ' dx-solution-step--accent' : ''}`} key={s.n}>
              <span className="dx-solution-step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="dx-challenge dx-wrap">
        <div className="dx-section-heading">
          <p className="dx-kicker">WHAT'S NEW IN VERSION 2</p>
          <h2>Everything you valued,<br />taken further.</h2>
          <p>DriveXR 2 builds on a proven foundation — with expanded environments, enhanced instructor tools and richer performance intelligence.</p>
        </div>
        <div className="dx-challenge-grid">
          <article>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7z" />
              <path d="m8 12 3 3 5-6" />
            </svg>
            <h3>Expanded scenario library</h3>
            <p>New route types, weather conditions and multi-vehicle incidents extend what instructors can configure and repeat.</p>
            <div>
              <span>WITH DRIVEXR 2</span>
              <strong>More scenarios. More depth. Same control.</strong>
            </div>
          </article>
          <article>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 3v18h18M7 15l4-5 4 3 6-8" />
            </svg>
            <h3>Richer performance data</h3>
            <p>Session analytics now include gaze tracking, reaction variance and multi-session trend reporting per driver.</p>
            <div>
              <span>WITH DRIVEXR 2</span>
              <strong>Evidence that builds a complete competency picture.</strong>
            </div>
          </article>
          <article>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 22h8m-4-5v5" />
            </svg>
            <h3>Connected instructor station</h3>
            <p>A redesigned instructor dashboard brings live session control, hazard injection and debrief replay into one screen.</p>
            <div>
              <span>WITH DRIVEXR 2</span>
              <strong>Less setup. More focus on the trainee.</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="dx-capabilities">
        <div className="dx-wrap">
          <div className="dx-section-heading">
            <p className="dx-kicker">BUILT FOR REAL-WORLD READINESS</p>
            <h2>A more connected training system.</h2>
            <p>DriveXR 2 integrates simulation, instructor control and performance intelligence in a single, coherent environment.</p>
          </div>
          <div className="dx-bento">
            <figure className="dx-bento-photo">
              <img src={brochureInstructors} alt="Instructor using the DriveXR 2 connected dashboard" loading="lazy" />
              <figcaption>
                Smarter tools.<br />Sharper outcomes.
              </figcaption>
            </figure>
            <article>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h16M4 17h16M8 4v6m8 4v6" />
              </svg>
              <h3>Live hazard injection</h3>
              <p>Instructors introduce incidents in real time — pedestrians, junction conflicts, signal failures — without stopping the session.</p>
            </article>
            <article>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 11a9 9 0 1 1 2 7M3 4v7h7" />
                <path d="m11 8 5 4-5 4z" />
              </svg>
              <h3>Multi-session replay</h3>
              <p>Compare a driver's behaviour across sessions side by side — spot improvement, flag risk and plan targeted practice.</p>
            </article>
            <article>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3 3 21M18 3l3 18M12 3v4m0 4v3m0 4v3" />
              </svg>
              <h3>Extended UK environments</h3>
              <p>New motorway, rural A-road and urban night-driving environments with dynamic weather and traffic density control.</p>
            </article>
            <article>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 22h8m-4-5v5" />
              </svg>
              <h3>VR & cab compatible</h3>
              <p>Dual delivery — immersive VR headset or multi-screen cab — selectable per session with no hardware swap needed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="dx-intelligence">
        <div className="dx-wrap dx-intelligence-grid">
          <div>
            <p className="dx-kicker">FROM EXPERIENCE TO EVIDENCE</p>
            <h2>
              Understand every<br />decision on the road.
            </h2>
            <p>DriveXR 2 captures more — and makes it easier to act on. Instructors and training managers get a clearer view of where each driver stands and what comes next.</p>
            <div className="dx-data-list">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3v18h18M7 15l4-5 4 3 6-8" />
                </svg>
                Multi-session trend analytics
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 11a9 9 0 1 1 2 7M3 4v7h7" />
                  <path d="m11 8 5 4-5 4z" />
                </svg>
                Side-by-side session replay
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7z" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
                Competency scoring & export
              </span>
            </div>
            <div className="dx-metric-tags">
              <span>Speed compliance</span>
              <span>Reaction times</span>
              <span>Gaze tracking</span>
              <span>Lane discipline</span>
              <span>Mirror checks</span>
              <span>Junction approach</span>
              <span>Blue-light compliance</span>
              <span>Trend variance</span>
            </div>
          </div>
          <figure>
            <img src={brochureTraining} alt="DriveXR 2 performance analytics and debrief view" loading="lazy" />
            <figcaption>
              <span>TRAIN → MEASURE → IMPROVE</span>
              <strong>Every session.<br />A sharper picture.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="dx-delivery dx-wrap">
        <div className="dx-delivery-image">
          <img src={brochureSimulator} alt="DriveXR 2 simulator cab with connected multi-screen displays" loading="lazy" />
          <span>ONE CONNECTED TRAINING SYSTEM</span>
        </div>
        <div>
          <p className="dx-kicker">FROM SETUP TO DEBRIEF</p>
          <h2>Simple to run.<br />Powerful in practice.</h2>
          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Configure</h3>
                <p>Set routes, conditions, hazards and objectives — then save as a reusable session template.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Train</h3>
                <p>Deliver immersive response scenarios with live instructor oversight and real-time hazard control.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Review</h3>
                <p>Use trend analytics, replay and competency scoring to guide the next session with confidence.</p>
              </div>
            </li>
          </ol>
          <p className="dx-included">Software, cab integration, instructor station, expanded scenario library, multi-session analytics and reporting — with onboarding and ongoing technical support. Custom road environments available.</p>
        </div>
      </section>

      <section className="dx-audience dx-wrap">
        <p className="dx-kicker">DESIGNED FOR YOUR WORLD</p>
        <div>
          <span>Ambulance services</span>
          <span>Universities</span>
          <span>Fire & rescue</span>
          <span>Police support</span>
          <span>Fleet training</span>
          <span>Defence & military</span>
        </div>
      </section>

      <section className="dx-cta">
        <div className="dx-wrap">
          <div>
            <p className="dx-kicker">SEE DRIVEXR 2 IN ACTION</p>
            <h2>Ready to see<br />what's next?</h2>
            <p>Explore a DriveXR 2 training setup built around your people and operational goals.</p>
          </div>
          <a className="dx-button" href="mailto:hello@mxr.ai?subject=DriveXR%202%20demonstration">
            Book a demonstration{' '}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12h16m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}

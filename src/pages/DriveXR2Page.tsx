import { DriveRotatingRing } from '../components/DriveRotatingRing'
import { useEffect, useRef, useState, type ReactElement } from 'react'
import brochureResponse from '../assets/images/drivexr/brochure-response.webp'
import brochureInstructors from '../assets/images/drivexr/brochure-instructors.webp'
import brochureTraining from '../assets/images/drivexr/brochure-training.webp'
import brochureSimulator from '../assets/images/drivexr/brochure-simulator.webp'
import dxSimulator from '../assets/images/drivexr/ambulance-tunnel.webp'
import dxAmbulanceData from '../assets/images/drivexr/holo-training.webp'
import crewPanorama from '../assets/images/drivexr/crew-panorama.webp'
import simulatorRig from '../assets/images/drivexr/rig-side.webp'
import ambulanceData from '../assets/images/drivexr/analytics-ambulance.webp'
import stageSetup from '../assets/images/drivexr/stage-setup.webp'
import stageDrive from '../assets/images/drivexr/stage-drive.webp'
import stageReview from '../assets/images/drivexr/stage-review.webp'

const ALL_TAGS = ['Instructor', 'Blue-Light', 'High-Fidelity', 'UK', 'Dynamic', 'Scenario', 'Performance', 'Multi-Screen']

const SPOTS = [
  {
    id: 1, x: 72, y: 60,
    title: 'Instructor Control Station',
    desc: 'Control scenarios, inject hazards and monitor performance live.',
    benefit: 'Structured training and assessment.',
    activeTag: 'Instructor',
    tags: ALL_TAGS,
  },
  {
    id: 2, x: 38, y: 31,
    title: 'Blue-Light Priority Simulation',
    desc: 'Train legal and safe emergency response under lights and sirens.',
    benefit: 'Improves decision making under pressure.',
    activeTag: 'Blue-Light',
    tags: ALL_TAGS,
  },
  {
    id: 3, x: 57.5, y: 72,
    title: 'High-Fidelity Vehicle Dynamics',
    desc: 'Realistic steering, braking, acceleration and road handling.',
    benefit: 'Builds muscle memory and realistic vehicle control.',
    activeTag: 'High-Fidelity',
    tags: ALL_TAGS,
  },
  {
    id: 4, x: 30, y: 17,
    title: 'UK Emergency Road Environments',
    desc: 'Urban, rural, motorway and dual carriageway training environments.',
    benefit: 'Familiar operational training conditions.',
    activeTag: 'UK',
    tags: ALL_TAGS,
  },
  {
    id: 5, x: 60, y: 14,
    title: 'Dynamic AI Traffic System',
    desc: 'Live traffic behaviours, hazards and unpredictable road users.',
    benefit: 'Develops situational awareness.',
    activeTag: 'Dynamic',
    tags: ALL_TAGS,
  },
  {
    id: 6, x: 66.5, y: 29,
    title: 'Scenario Playback & Debrief',
    desc: 'Replay sessions for performance review.',
    benefit: 'Stronger reflection and learning retention.',
    activeTag: 'Scenario',
    tags: ALL_TAGS,
  },
  {
    id: 7, x: 86.5, y: 45,
    title: 'Performance Analytics Dashboard',
    desc: 'Track behaviour, reactions and compliance metrics.',
    benefit: 'Objective, measurable improvement.',
    activeTag: 'Performance',
    tags: ALL_TAGS,
  },
  {
    id: 8, x: 18.5, y: 23,
    title: 'Multi-Screen / VR Compatible',
    desc: 'Cab-based or fully immersive VR deployment.',
    benefit: 'Flexible training delivery.',
    activeTag: 'Multi-Screen',
    tags: ALL_TAGS,
  },
]

type LogItem = { t: string; msg: string; status: string; cls: 's-info' | 's-ok' | 's-warn' }

const ROUTE = 'M25 205C60 195 85 150 115 140C150 140 160 60 200 55S270 80 305 175'
const ROUTE_KM = 18.7
const ROUTE_SECS = 24 * 60 + 35
const HAZARDS: [string, 'brake' | 'steer'][] = [
  ['Pedestrian steps out between parked cars', 'brake'],
  ['Vehicle fails to yield at junction', 'brake'],
  ['Cyclist swerves into lane', 'steer'],
  ['Oncoming car blocks narrow street', 'brake'],
  ['Red light: cross-traffic not clearing', 'brake'],
]
const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

type St = { p: number; speed: number; blue: boolean; react: number; lane: number; comp: number; hazard: number }

function InstructorConsole() {
  const st = useRef<St>({ p: 0.18, speed: 28, blue: false, react: 0.84, lane: 98, comp: 92, hazard: 0 })
  const hazardIdx = useRef(0)
  const routeRef = useRef<SVGPathElement>(null)
  const [, force] = useState(0)
  const [blue, setBlue] = useState(false)
  const [beacon, setBeacon] = useState(false)
  const [car, setCar] = useState({ x: 115, y: 140 })
  const [hazardPt, setHazardPt] = useState<{ x: number; y: number } | null>(null)
  const [log, setLog] = useState<LogItem[]>([
    { t: fmt(0.18 * ROUTE_SECS), msg: 'Junction approach · mirror check', status: 'OK', cls: 's-ok' },
    { t: fmt(0.18 * ROUTE_SECS), msg: 'Session started · Learner profile loaded', status: 'READY', cls: 's-info' },
  ])

  const addLog = (msg: string, status: string, cls: LogItem['cls']) =>
    setLog(l => [{ t: fmt(st.current.p * ROUTE_SECS), msg, status, cls }, ...l].slice(0, 5))

  const pointAt = (p: number) => {
    const el = routeRef.current
    if (!el) return { x: 115, y: 140 }
    const pt = el.getPointAtLength(clamp(p, 0, 1) * el.getTotalLength())
    return { x: pt.x, y: pt.y }
  }

  const render = () => {
    setCar(pointAt(st.current.p))
    force(n => n + 1)
  }

  useEffect(() => {
    render()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      const s = st.current
      const target = s.hazard > 0 ? 8 : (s.blue ? 46 : 30) + Math.sin(Date.now() / 1400) * 4
      s.speed += (target - s.speed) * 0.12
      s.p += s.speed * 0.000045
      if (s.hazard > 0) s.hazard--
      if (s.p >= 1) {
        addLog('Arrived on scene · Session complete', 'DONE', 's-ok')
        s.p = 0
        s.comp = 92
        s.lane = 98
        addLog('New session · Route regenerated', 'READY', 's-info')
      }
      render()
    }, 120)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (!blue) { setBeacon(false); return }
    const id = window.setInterval(() => setBeacon(b => !b), 260)
    return () => window.clearInterval(id)
  }, [blue])

  const toggleBlue = () => {
    const on = !st.current.blue
    st.current.blue = on
    setBlue(on)
    addLog(on ? 'Blue-light response activated' : 'Blue lights off · normal road speed', on ? 'ACTIVE' : 'OFF', 's-info')
  }

  const injectHazard = () => {
    const [text, kind] = HAZARDS[hazardIdx.current++ % HAZARDS.length]
    setHazardPt(pointAt(st.current.p + 0.03))
    window.setTimeout(() => setHazardPt(null), 2200)
    st.current.hazard = 14
    addLog('Hazard injected · ' + text, 'LIVE', 's-warn')
    const r = 0.62 + Math.random() * 0.55
    window.setTimeout(() => {
      const s = st.current
      const good = r < 1.0
      s.react = r
      s.lane = clamp(s.lane + (good ? 0.6 : -3), 88, 100)
      s.comp = clamp(s.comp + (good ? 0.8 : -2.5), 70, 98)
      addLog((kind === 'brake' ? 'Emergency braking' : 'Evasive steering') + ' · reaction ' + r.toFixed(2) + 's', good ? 'PASS' : 'REVIEW', good ? 's-ok' : 's-warn')
      render()
    }, 700)
  }

  const s = st.current
  const lane = Math.round(s.lane)
  const L = 100

  return (
    <div className={`dx-console${blue ? ' is-lights' : ''}`}>
      <div className="dx-console-bar">
        <span className="dx-console-dots">
          <i className={blue && beacon ? 'on' : ''} /><i className={blue && beacon ? 'on' : ''} />
          <i className={blue && !beacon ? 'on' : ''} /><i className={blue && !beacon ? 'on' : ''} />
        </span>
        <span className="dx-console-session">SESSION 0412 · URBAN · NIGHT · RAIN</span>
        <span className="dx-console-live">LIVE</span>
      </div>
      <div className="dx-console-main">
        <div className="dx-console-map">
          <svg viewBox="0 0 340 240" preserveAspectRatio="none" aria-hidden="true">
            <path d="M40 0v240M200 0v240M0 60h340M0 140h340" />
            <path ref={routeRef} className="dx-route-planned" d={ROUTE} />
            <path className="dx-route-done" d={ROUTE} pathLength={L} strokeDasharray={`${s.p * L} ${L}`} />
            <circle cx="25" cy="205" r="5" className="dx-pt-start" />
            <circle cx="305" cy="175" r="6" className="dx-pt-end" />
            {hazardPt && <circle cx={hazardPt.x} cy={hazardPt.y} r="9" className="dx-pt-hazard" />}
            <circle cx={car.x} cy={car.y} r="6" className="dx-pt-now" />
          </svg>
          <span>INCIDENT · CAT 1 RESPONSE</span>
        </div>
        <div className="dx-console-stats">
          <div><small>SPEED</small><strong>{Math.round(s.speed)}<em>mph</em></strong></div>
          <div><small>REACTION</small><strong>{s.react.toFixed(2)}<em>s</em></strong></div>
          <div><small>DISTANCE</small><strong>{(s.p * ROUTE_KM).toFixed(1)}<em>km</em></strong></div>
          <div><small>TIME</small><strong>{fmt(s.p * ROUTE_SECS)}</strong></div>
          <div><small>LANE DISCIPLINE</small><strong className={lane >= 95 ? 'ok' : 'warn'}>{lane}<em>%</em></strong></div>
          <div><small>COMPETENCY</small><strong>{Math.round(s.comp)}<em>%</em></strong></div>
        </div>
      </div>
      <ul className="dx-console-log">
        {log.map((l, i) => (
          <li key={`${l.t}-${l.msg}-${i}`}><span>{l.t}</span><b>{l.msg}</b><em className={l.cls}>{l.status}</em></li>
        ))}
      </ul>
      <div className="dx-console-actions">
        <button type="button" className={blue ? 'on' : ''} aria-pressed={blue} onClick={toggleBlue}>Lights &amp; Sirens</button>
        <button type="button" className="hazard" onClick={injectHazard}>Inject Hazard</button>
        <small>Example session</small>
      </div>
    </div>
  )
}

const METRICS: [string, string, string, string, number][] = [
  ['Speed compliance', '94%', 'of segments within limit', 'Exemptions under blue lights logged separately.', 94],
  ['Lane discipline', '97%', 'time in lane', 'Drift events flagged with replay timestamp.', 97],
  ['Collision events', '0', 'contacts', 'Near-misses recorded with time-to-collision.', 100],
  ['Indicator use', '91%', 'manoeuvres signalled', 'Late signals counted against the manoeuvre.', 91],
  ['Red light behaviour', '3 / 3', 'compliant crossings', 'Crossing speed and scan pattern captured.', 100],
  ['Solid line crossings', '1', 'crossing', 'Context recorded for instructor review.', 78],
  ['Reaction times', '0.84s', 'average', 'Measured from hazard onset to first input.', 86],
  ['Emergency braking', '4', 'events', 'Peak deceleration and stopping distance per event.', 88],
  ['Mirror checks', '88%', 'before manoeuvre', 'Checks matched to each lane change and turn.', 88],
  ['Distance management', '2.1s', 'average gap', 'Following-gap breaches highlighted on the route.', 84],
  ['Route', '18.7km', 'Cat 1 route', 'Planned versus driven route, with deviations.', 92],
  ['Session logs', '24:35', 'session time', 'Full input and event log for audit.', 100],
  ['Gear usage', '96%', 'appropriate selection', 'Over-revving and labouring flagged.', 96],
  ['Junction approach behaviour', '82%', 'compliant approaches', 'Approach speed, position and observation.', 82],
  ['Blue-light compliance', '93%', 'policy adherence', 'Exemption use checked against service policy.', 93],
  ['Instructor observations', '6', 'notes', 'Timestamped notes added live from the console.', 90],
]

const REPLAY_EVENTS: [number, string][] = [[26, '#3ecf8e'], [62, '#4e8dff'], [88, '#f5a623'], [124, '#4e8dff'], [158, '#e5484d'], [190, '#3ecf8e'], [214, '#f5a623']]

const OUTPUTS: { title: string; tag: string; art: ReactElement }[] = [
  {
    title: 'Heatmaps', tag: 'route',
    art: (
      <svg viewBox="0 0 240 130" role="img" aria-label="Route heatmap">
        <defs>
          <linearGradient id="hm" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#3ecf8e" /><stop offset=".45" stopColor="#f5c518" /><stop offset="1" stopColor="#e5484d" /></linearGradient>
          <filter id="hmb"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <rect width="240" height="130" fill="#1a2b3d" />
        <path d="M0 40h240M0 90h240M60 0v130M150 0v130M200 0v130" stroke="#2a3f55" strokeWidth="6" />
        <path d="M0 20h240M0 65h240M100 0v130" stroke="#223549" strokeWidth="2" />
        <path d="M40 112 L105 40 L150 36 L162 108" fill="none" stroke="url(#hm)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" filter="url(#hmb)" />
        <path d="M40 112 L105 40 L150 36 L162 108" fill="none" stroke="url(#hm)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Replay timelines', tag: 'debrief',
    art: (
      <svg viewBox="0 0 240 130" role="img" aria-label="Replay timeline with events">
        <rect width="240" height="130" fill="#14233a" />
        <text x="12" y="22" fill="#a9bccd" fontSize="9">Replay Timeline</text>
        <text x="228" y="22" fill="#a9bccd" fontSize="9" textAnchor="end">Session: 0min</text>
        <path d="M14 78h212" stroke="#3a4f68" strokeWidth="2" />
        {REPLAY_EVENTS.map(([x, c]) => (
          <g key={x}>
            <circle cx={x} cy="52" r="7" fill="none" stroke={c} strokeWidth="2" />
            <path d={`M${x} 59V78`} stroke={c} strokeWidth="1.5" />
            <rect x={x - 9} y="82" width="18" height="12" rx="2" fill={c} opacity=".85" />
          </g>
        ))}
        <path d="M14 108h212" stroke="#2a3f55" strokeWidth="1" />
        <text x="14" y="122" fill="#7f95a9" fontSize="8">0</text>
        <text x="120" y="122" fill="#7f95a9" fontSize="8" textAnchor="middle">9000</text>
        <text x="226" y="122" fill="#7f95a9" fontSize="8" textAnchor="end">2560</text>
      </svg>
    ),
  },
  {
    title: 'Competency scoring', tag: 'pass / fail',
    art: (
      <svg viewBox="0 0 240 130" role="img" aria-label="Competency scoring gauge at 76 percent">
        <defs>
          <linearGradient id="gg" x1="0" x2="1"><stop offset="0" stopColor="#3b82f6" /><stop offset=".5" stopColor="#3ecf8e" /><stop offset=".75" stopColor="#f5c518" /><stop offset="1" stopColor="#e5484d" /></linearGradient>
        </defs>
        <rect width="240" height="130" fill="#14233a" />
        <text x="12" y="20" fill="#cfd9e3" fontSize="10">Competency Scoring</text>
        <path d="M58 112a62 62 0 0 1 124 0" fill="none" stroke="url(#gg)" strokeWidth="14" />
        <path d="M120 112 L138 56" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="120" cy="112" r="5" fill="#fff" />
        <text x="120" y="102" fill="#fff" fontSize="20" fontWeight="700" textAnchor="middle">76%</text>
        <text x="186" y="40" fill="#f5c518" fontSize="8">Pass/Fail Thresholds</text>
        <text x="190" y="62" fill="#e5484d" fontSize="8">Pass Fail</text>
      </svg>
    ),
  },
  {
    title: 'Policy compliance', tag: 'review',
    art: (
      <svg viewBox="0 0 240 130" role="img" aria-label="Policy compliance review table">
        <rect width="240" height="130" fill="#14233a" />
        <text x="12" y="20" fill="#cfd9e3" fontSize="10">Policy Compliance Review</text>
        <rect x="12" y="34" width="40" height="86" rx="3" fill="#1a2b3f" />
        {[0, 1, 2, 3].map(i => <rect key={i} x="18" y={44 + i * 16} width="26" height="4" rx="2" fill="#4a6179" />)}
        {[0, 1, 2, 3].map(r => [0, 1, 2].map(c => (
          <g key={`${r}${c}`}>
            <rect x={64 + c * 56} y={34 + r * 22} width="52" height="18" rx="3" fill="#1d3049" />
            <circle cx={72 + c * 56} cy={43 + r * 22} r="3.5" fill={(r + c) % 4 === 3 ? '#f5a623' : '#3ecf8e'} />
            <rect x={80 + c * 56} y={41 + r * 22} width="26" height="4" rx="2" fill="#4a6179" />
          </g>
        )))}
      </svg>
    ),
  },
]

function AnalyticsSection() {
  const [metric, setMetric] = useState(1)
  const [open, setOpen] = useState<number | null>(null)
  const [name, val, unit, note, score] = METRICS[metric]

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <section className="dx-data">
      <div className="dx-wrap">
        <div className="dx-data-head">
          <div>
            <p className="dx-kicker">DATA &amp; ANALYTICS</p>
            <h2>Training intelligence, built in</h2>
            <p>DriveXR is built around measurable training outcomes. Sixteen behaviours are tracked in every session and turned into reports instructors can act on.</p>
          </div>
          <img src={ambulanceData} alt="Ambulance surrounded by data streams feeding route, signal and hazard sensors" loading="lazy" />
        </div>

        <div className="dx-data-body">
          <div>
            <div className="dx-data-label"><span>TRACKED IN EVERY SESSION</span><span>16</span></div>
            <div className="dx-metrics">
              {METRICS.map((m, i) => (
                <button type="button" key={m[0]} className={i === metric ? 'active' : ''} aria-pressed={i === metric} onClick={() => setMetric(i)}>
                  <em>{String(i + 1).padStart(2, '0')}</em><span>{m[0]}</span>
                </button>
              ))}
            </div>
            <div className="dx-metric-card">
              <div>
                <h3>{name}</h3>
                <p>{note}</p>
              </div>
              <div className="dx-metric-val"><strong>{val}</strong><small>{unit}</small></div>
              <div className="dx-metric-bar"><i style={{ width: `${score}%`, background: score >= 90 ? '#2fb67c' : score >= 80 ? '#0b66c3' : '#e8a13a' }} /></div>
              <small className="dx-metric-sample">SAMPLE SESSION VALUES</small>
            </div>
          </div>

          <div>
            <div className="dx-data-label"><span>ADVANCED OUTPUTS · SELECT TO ENLARGE</span></div>
            <div className="dx-outputs">
              {OUTPUTS.map((o, i) => (
                <button type="button" key={o.title} className="dx-output" onClick={() => setOpen(i)}>
                  <div className="dx-output-art">{o.art}</div>
                  <div className="dx-output-foot"><b>{o.title}</b><span>{o.tag}</span></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {open !== null && (
        <div className="dx-lightbox" role="dialog" aria-modal="true" aria-label={OUTPUTS[open].title} onClick={() => setOpen(null)}>
          <div className="dx-lightbox-card" onClick={e => e.stopPropagation()}>
            <div className="dx-lightbox-bar"><b>{OUTPUTS[open].title}</b><button type="button" onClick={() => setOpen(null)} aria-label="Close">Close</button></div>
            {OUTPUTS[open].art}
          </div>
        </div>
      )}
    </section>
  )
}

export default function DriveXR2Page() {
  const [activeSpot, setActiveSpot] = useState(1)

  const spot = SPOTS.find(s => s.id === activeSpot) ?? SPOTS[0]
  const total = SPOTS.length
  const goPrev = () => setActiveSpot(s => s > 1 ? s - 1 : total)
  const goNext = () => setActiveSpot(s => s < total ? s + 1 : 1)

  return (
    <main className="dx-page dx2">
      <section className="dx-hero">
        <DriveRotatingRing />
        <div className="dx-hero-copy">

          <div className="dx-title">
            <h1 className="banner-title banner-title--stacked">Precision under pressure. <em>Performance when it matters.</em></h1>
          </div>
          <p className="banner-lead">Develop, assess and improve real-world blue-light driving competency in a safe, measurable and fully immersive environment.</p>
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
          <ul className="dx-hero-note" aria-label="Key benefits">
            <li>Real-world scenarios</li>
            <li>Measurable performance</li>
            <li>Build confidence, reduce risk</li>
            <li>Better drivers, safer communities</li>
          </ul>
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

            <div className="dx-solution-bottom">
              <div className="dx-solution-copy">
                <p className="dx-solution-kicker">
                  THE MXR SOLUTION
                </p>
                <h2>Train. Measure. Improve.</h2>
                <p>Advanced simulation, AI traffic and instructor-led scenario control let trainees build critical operational driving skills without real-world risk. DriveXR bridges the gap between classroom theory and operational readiness.</p>
              </div>
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

      {/* ── Simulator Spotlight: interactive hotspot ── */}
      <section className="dx-spotlight" id="capabilities">
        <div className="dx-spotlight-head dx-wrap">
          <div>
            <p className="dx-kicker">
              {' '}KEY FEATURES
            </p>
            <h2>Built for real-world readiness.</h2>
          </div>
          <p>Tap the numbered points on the simulator to explore each capability.</p>
        </div>
        <div className="dx-spotlight-layout dx-wrap">
          {/* Image with hotspot pins */}
          <div className="dx-spotlight-imgwrap">
            <img src={simulatorRig} alt="DriveXR 2 simulator cab with numbered capability hotspots" loading="lazy" />
            {SPOTS.map(s => (
              <button
                key={s.id}
                className={`dx-spot-pin${activeSpot === s.id ? ' active' : ''}`}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                onClick={() => setActiveSpot(s.id)}
                aria-label={`Feature ${s.id}: ${s.title}`}
                aria-pressed={activeSpot === s.id}
              >
                {s.id}
              </button>
            ))}
          </div>
          {/* Detail panel */}
          <div className="dx-spotlight-panel">
            <div className="dx-spot-header">
              <span className="dx-spot-counter">
                {String(activeSpot).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <div className="dx-spot-nav">
                <button onClick={goPrev} aria-label="Previous feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={goNext} aria-label="Next feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className="dx-spot-title">{spot.title}</h3>
            <p className="dx-spot-desc">{spot.desc}</p>
            <div className="dx-spot-benefit">
              <span>BENEFIT</span>
              <strong>{spot.benefit}</strong>
            </div>
            {spot.tags.length > 0 && (
              <div className="dx-spot-tags">
                {spot.tags.map(t => (
                  <span key={t} className={t === spot.activeTag ? 'active' : ''}>{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="dx-instructor">
        <div className="dx-instructor-grid dx-wrap">
          <div className="dx-instructor-copy">
            <p className="dx-kicker">INSTRUCTOR CONTROL STATION</p>
            <h2>Run the scenario.<br />Watch every decision.</h2>
            <p>Instructors control the scenario, inject hazards and monitor performance live. Try it: switch on lights and sirens, then inject a hazard.</p>
            <img src={stageSetup} alt="Instructor monitoring a live DriveXR session" loading="lazy" />
          </div>

          <InstructorConsole />
        </div>
      </section>

      <section className="dx-how">
        <div className="dx-wrap">
          <p className="dx-kicker">HOW IT WORKS</p>
          <h2>Simple. Scalable. Effective.</h2>
          <div className="dx-how-grid">
            {[
              { n: 1, img: stageSetup, tag: 'SETUP', title: 'Configure the scenario', desc: 'Set scenarios, routes, weather, hazards and learner profiles.', alt: 'Instructor configuring a scenario at the control station' },
              { n: 2, img: stageDrive, tag: 'TRAINING & SIMULATION', title: 'Drive the response', desc: 'Learners operate through live, immersive emergency response scenarios.', alt: 'Crew driving a live emergency response scenario in the simulator' },
              { n: 3, img: stageReview, tag: 'REVIEW & ANALYTICS', title: 'Assess and debrief', desc: 'Instructors assess performance through detailed analytics and replay tools.', alt: 'Instructor reviewing a learner session on multiple screens' },
            ].map(c => (
              <article className="dx-how-card" key={c.n}>
                <div className="dx-how-img">
                  <img src={c.img} alt={c.alt} loading="lazy" />
                  <span>{c.n}</span>
                </div>
                <div className="dx-how-body">
                  <small>{c.tag}</small>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AnalyticsSection />

      <section className="dx-capabilities">
        <div className="dx-wrap">
          <div className="dx-section-heading">
            <p className="dx-kicker">BUILT FOR REAL-WORLD READINESS</p>
            <h2>A more connected training system.</h2>
            <p>DriveXR 2 integrates simulation, instructor control and performance intelligence in a single, coherent environment.</p>
          </div>
          <div className="dx-bento">
            <figure className="dx-bento-photo">
              <img src={stageSetup} alt="Instructor using the DriveXR 2 connected dashboard" loading="lazy" />
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

      <section className="final-cta home-wave-section home-wave-cta">
        <div className="home-wave-media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="eyebrow">LET'S BUILD WHAT'S NEXT</p>
          <h2>Have a challenge worth solving?</h2>
          <p>Talk to MXR about a practical route from idea to high-impact technology.</p>
        </div>
        <div className="button-row">
          <a className="btn btn-primary" href="mailto:hello@mxr.ai?subject=New%20MXR%20Project">Talk to Our Team →</a>
          <a className="btn btn-secondary" href="/#services">Explore Services</a>
        </div>
      </section>
    </main>
  )
}

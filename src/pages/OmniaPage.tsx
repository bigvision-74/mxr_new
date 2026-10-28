import { useState, type CSSProperties } from 'react'
import {
  ArrowRight, ArrowUpRight, Box, Boxes, BrainCircuit, Clapperboard,
  Compass, Film, GraduationCap, Headset, HeartPulse, Layers3,
  Link2, MessageCircle, Monitor, Move3D,
  ScanLine, ShieldCheck, Video
} from 'lucide-react'
import { ProductHero } from '../components/ProductHero'
import room from '../assets/images/omnia/healthcare-room-three-walls.webp'
import '../assets/css/omnia-hero.css'
import '../assets/css/omnia-product.css'

const media = '/assets/images/omnia/product/'

const workflow = [
  { number: '01', title: 'Choose your environment', body: 'Start with an existing room template, from clinical settings to field and operational environments.', Icon: Compass },
  { number: '02', title: 'Build the experience', body: 'Place objects, adjust the layout and connect spaces using intuitive 2D and 3D editing tools.', Icon: Boxes },
  { number: '03', title: 'Make it interactive', body: 'Introduce AI characters, guided objectives, quizzes and annotated 360° media.', Icon: MessageCircle },
  { number: '04', title: 'Save, run and share', body: 'Return to saved rooms, refine scenarios and prepare authored content for VR delivery.', Icon: Headset },
]

const featureTabs = [
  {
    label: 'Scenario Studio', kicker: 'CREATE & CUSTOMISE',
    title: 'A space shaped around your scenario.',
    description: 'Design environments in 2D or 3D, select equipment and furniture, and position objects with precise editing controls. Save your room and continue refining it later.',
    points: ['2D floor plan and 3D room views', 'Equipment, furniture and object libraries', 'Move, rotate, resize, snap and undo'],
    image: 'room-editor.webp', alt: 'Omnia scenario editor in a clinical room with equipment panel and an avatar', Icon: Move3D,
  },
  {
    label: 'AI Characters', kicker: 'HUMAN INTERACTION',
    title: 'Put people into the experience.',
    description: 'Introduce configurable characters with roles, appearance and uniforms. Voice and AI chat interactions give participants another dimension of practice.',
    points: ['Configurable avatar appearance and roles', 'Text and voice conversation interfaces', 'Animated speaking responses'],
    image: 'vehicle-avatar.webp', alt: 'Omnia scenario showing soldiers in a vehicle with a chat interaction hotspot', Icon: BrainCircuit,
  },
  {
    label: '360° Media', kicker: 'IMMERSIVE STORYTELLING',
    title: 'Make 360° content part of the scenario.',
    description: 'Bring existing 360° footage into a training experience. Add information, voices, characters and equipment overlays, then manage or prepare content for VR.',
    points: ['Upload and organise 360° videos', 'Contextual annotations and overlays', 'VR publishing workflow'],
    image: 'video-studio.webp', alt: 'Omnia 360 video editor interface displaying content tools and video categories', Icon: Video,
  },
  {
    label: 'Guided Scenarios', kicker: 'STRUCTURED LEARNING',
    title: 'Training with a clear sense of direction.',
    description: 'Build on scenario-based experiences with objectives, narrated cues, interactive characters and learning checks — from emergency response to clinical procedures.',
    points: ['Objective prompts and scene guidance', 'Quizzes and learning interactions', 'Scenario-specific tools and indicators'],
    image: 'field-hospital.webp', alt: 'Omnia field hospital scenario with triage team, radiation indicator and zone map', Icon: GraduationCap,
  },
]

const capabilityCards = [
  { Icon: Layers3, title: 'Room & template library', body: 'Begin with starter spaces and adapt them to your training objectives.' },
  { Icon: Box, title: 'Equipment placement', body: 'Position, scale and organise scene objects through an editable asset library.' },
  { Icon: BrainCircuit, title: 'AI-powered interaction', body: 'Add role-based avatars with voice and chat experiences.' },
  { Icon: GraduationCap, title: 'Quizzes & learning checks', body: 'Author and play quizzes, including AI-assisted content creation.' },
  { Icon: Film, title: '360° video experiences', body: 'Add interactive information and characters to panoramic footage.' },
  { Icon: Link2, title: 'Connected rooms & VR', body: 'Link training environments and prepare content for VR headsets.' },
]

const scenarios = [
  { tag: 'HEALTHCARE', title: 'Clinical environments', body: 'Create ward, outpatient and field-hospital training spaces.', image: 'room-editor.webp', alt: 'Omnia outpatient clinical simulation room', Icon: HeartPulse },
  { tag: 'AVIATION', title: 'In-flight emergencies', body: 'Guide participants through a cabin-based medical response.', image: 'aircraft-emergency.webp', alt: 'Omnia aircraft medical emergency scene', Icon: Clapperboard },
  { tag: 'DEFENCE & RESPONSE', title: 'Incident readiness', body: 'Explore hangar and CBRN exercises with objectives and zone indicators.', image: 'field-hospital.webp', alt: 'Omnia incident-response field-hospital scene', Icon: ShieldCheck },
  { tag: 'OPERATIONAL', title: 'Field environments', body: 'Work with trench and vehicle-based scenarios with interactive characters.', image: 'battlefield.webp', alt: 'Omnia battlefield trench environment', Icon: ScanLine },
]

export default function OmniaPage() {
  const [activeTab, setActiveTab] = useState(0)
  const active = featureTabs[activeTab]
  return (
    <main className="pp ep-page omnia-page om-page" style={{ '--product-accent': '#0b66c3' } as CSSProperties}>
      <ProductHero
        title="Create the space."
        accent="Bring training to life."
        lead="Design, personalise and deliver immersive learning experiences with interactive environments, AI characters, guided scenarios and 360° media."
        demoSubject="Omnia demonstration"
        visual={<div className="omnia-room-visual"><img src={room} alt="Three-wall immersive projection room with left, centre and right walls and ceiling projectors" fetchPriority="high" /></div>}
      />
      <section className="om-workflow" id="omnia-workflow" aria-labelledby="om-workflow-title">
        <div className="om-container">
          <div className="om-section-heading">
            <div><p className="eyebrow om-eyebrow">FROM IDEA TO IMMERSION</p><h2 id="om-workflow-title">Build an experience in four steps.</h2></div>
            <p>From your first room to a complete learning journey, every step is designed to keep creativity moving.</p>
          </div>
          <div className="om-workflow-grid">
            {workflow.map(({ number, title, body, Icon }) => <article key={number} className="om-workflow-card">
              <div className="om-workflow-card-top"><span>{number}</span><Icon size={28} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="om-showcase home-wave-section" id="omnia-features" aria-labelledby="om-showcase-title"><div className="home-wave-media" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" /></video></div>
        <div className="om-container">
          <div className="om-section-heading">
            <div><p className="eyebrow om-eyebrow">INSIDE THE PLATFORM</p><h2 id="om-showcase-title">Everything you need to shape the scenario.</h2></div>
            <p>Explore the tools that bring rooms, characters and learning content together.</p>
          </div>
          <div className="om-tabs" role="tablist" aria-label="Explore Omnia features">
            {featureTabs.map(({ label, Icon }, i) => <button type="button" role="tab" id={`om-tab-${i}`} aria-selected={activeTab === i} aria-controls="om-feature-panel" className={activeTab === i ? 'om-tab is-active' : 'om-tab'} key={label} onClick={() => setActiveTab(i)}><Icon size={17} aria-hidden="true" />{label}</button>)}
          </div>
          <div className="om-feature-panel" id="om-feature-panel" role="tabpanel" aria-labelledby={`om-tab-${activeTab}`} key={activeTab}>
            <div className="om-feature-copy">
              <p className="om-feature-kicker">{active.kicker}</p>
              <h3>{active.title}</h3><p>{active.description}</p>
              <ul>{active.points.map(point => <li key={point}><span aria-hidden="true" />{point}</li>)}</ul>
            </div>
            <div className="om-feature-media"><img src={`${media}${active.image}`} alt={active.alt} loading="lazy" /><span className="om-image-caption"><ScanLine size={15} aria-hidden="true" /> Actual Omnia application screen</span></div>
          </div>
        </div>
      </section>

      <section className="om-capabilities" aria-labelledby="om-capabilities-title">
        <div className="om-container">
          <div className="om-section-heading">
            <div><p className="eyebrow om-eyebrow">CORE CAPABILITIES</p><h2 id="om-capabilities-title">One platform. More ways to learn.</h2></div>
            <p>Flexible tools for building repeatable experiences around the needs of each training programme.</p>
          </div>
          <div className="om-capabilities-grid">
            {capabilityCards.map(({ Icon, title, body }) => <article key={title} className="om-capability-card"><div className="om-capability-icon"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></div><h3>{title}</h3><p>{body}</p><ArrowUpRight size={17} className="om-capability-arrow" aria-hidden="true" /></article>)}
          </div>
        </div>
      </section>

      <section className="om-scenarios" aria-labelledby="om-scenarios-title">
        <div className="om-container">
          <div className="om-section-heading">
            <div><p className="eyebrow om-eyebrow">PRACTICAL APPLICATIONS</p><h2 id="om-scenarios-title">Different worlds. One creative platform.</h2></div>
            <p>Explore the breadth of environments represented in the current Omnia project.</p>
          </div>
          <div className="om-scenarios-grid">{scenarios.map(({ tag, title, body, image, alt, Icon }) => <article key={title} className="om-scenario-card"><div className="om-scenario-img"><img src={`${media}${image}`} alt={alt} loading="lazy" /><span><Icon size={15} aria-hidden="true" />{tag}</span></div><div className="om-scenario-copy"><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </section>

      <section className="om-delivery home-wave-section" aria-labelledby="om-delivery-title"><div className="home-wave-media" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" /></video></div>
        <div className="om-container om-delivery-content">
          <div><p className="eyebrow om-eyebrow">BUILT AROUND YOUR DELIVERY</p><h2 id="om-delivery-title">Author on desktop. Experience it in immersive spaces.</h2><p>Start in a visual editor, work with saved environments and prepare scenarios for immersive-room or VR-led training programmes.</p></div>
          <div className="om-delivery-cards"><div><Monitor size={27} aria-hidden="true" /><strong>Desktop authoring</strong><span>Create, revise and manage rooms and media.</span></div><div><Layers3 size={27} aria-hidden="true" /><strong>Immersive-room experiences</strong><span>Bring digital scenarios into shared spatial learning.</span></div><div><Headset size={27} aria-hidden="true" /><strong>VR publishing</strong><span>Prepare selected authored experiences for headset use.</span></div></div>
        </div>
      </section>

      <section className="final-cta home-wave-section home-wave-cta" aria-labelledby="om-final-title"><div className="home-wave-media" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" type="video/mp4" /></video></div><div><p className="eyebrow">START A CONVERSATION</p><h2 id="om-final-title">Ready to Transform the Way You Train?</h2><p>Discover how Omnia can help your organisation create immersive, engaging and effective learning experiences.</p></div><div className="button-row"><a className="btn btn-primary" href="/contact">Talk to Our Team <ArrowRight size={18} aria-hidden="true" /></a></div></section>
    </main>
  )
}

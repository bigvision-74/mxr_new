import { ArrowDown, ArrowRight, Box, ClipboardCheck, Code2, Factory, HardHat, Headset, HeartPulse, Layers3, Mail, MessageSquare, Radar, Rocket, Shield, Target, Workflow, Wrench } from 'lucide-react'
import hero from '../assets/images/sectors/custom-hero.webp'
import defence from '../assets/images/defence/tactical-vive-training.webp'
import healthcare from '../assets/images/sectors/healthcare-hero.webp'
import industry from '../assets/images/sectors/enterprise-hero.webp'
import construction from '../assets/images/sectors/scaffolding-training.webp'
import '../assets/css/sector-solutions.css'
import '../assets/css/custom-solutions.css'

const capabilities = [
  { Icon: Shield, title: 'Safety rehearsal', copy: 'Practise decisions in rare or high-risk situations.' },
  { Icon: Wrench, title: 'Equipment familiarisation', copy: 'Explore machinery and rehearse procedures.' },
  { Icon: Headset, title: 'Bespoke XR', copy: 'Build VR, AR or mixed reality around the task.' },
  { Icon: Layers3, title: 'Immersive environments', copy: 'Bring teams together in a shared simulation.' },
  { Icon: Box, title: 'Interactive 3D', copy: 'Make complex equipment and spaces easier to understand.' },
  { Icon: Workflow, title: 'Workflow software', copy: 'Connect the tools, data and approvals your team uses.' },
]

const sectors = [
  { Icon: Shield, title: 'Defence & security', image: defence, copy: 'Rehearse team decisions and build equipment familiarity.' },
  { Icon: HeartPulse, title: 'Healthcare education', image: healthcare, copy: 'Practise clinical scenarios and handovers in context.' },
  { Icon: Factory, title: 'Industrial operations', image: industry, copy: 'Build confidence with machinery and site procedures.' },
  { Icon: HardHat, title: 'Construction & energy', image: construction, copy: 'Explore site hazards and technical systems before fieldwork.' },
]

const steps = [
  { Icon: Target, title: 'Agree the outcome', copy: 'Define the goal, users and measures of success.' },
  { Icon: Radar, title: 'Map the experience', copy: 'Review tasks, settings and constraints with your team.' },
  { Icon: Box, title: 'Prototype the core task', copy: 'Try the key interaction before committing to a full build.' },
  { Icon: Code2, title: 'Build in stages', copy: 'Develop the experience, assets and integrations.' },
  { Icon: ClipboardCheck, title: 'Validate with users', copy: 'Check usability and performance against the brief.' },
  { Icon: Rocket, title: 'Launch and support', copy: 'Plan rollout, handover and ongoing support.' },
]

export default function CustomSolutionPage() {
  return <main className="ss-page bespoke-page">
    <section className="ss-hero bespoke-hero">
      <img src={hero} alt="A design team reviewing a digital prototype in the studio" fetchPriority="high"/>
      <div className="ss-hero-shade"/>
      <div className="ss-hero-copy">
        <h1>Your goals.<br/><em>Built into the solution.</em></h1>
        <p>Tell us what you want to improve. We design and build immersive training, simulations and software around your people, your processes and the results you need.</p>
        <a className="btn btn-primary" href="#start-a-project">Start a conversation <ArrowDown size={18} aria-hidden="true"/></a>
      </div>
    </section>
    <section className="bespoke-capabilities bespoke-band" aria-labelledby="bespoke-goals">
      <div className="bespoke-band-inner">
        <header><p className="eyebrow">WHAT MXR CAN BUILD</p><h2 id="bespoke-goals">Start with the task your team needs to do better.</h2><p>Whether you need to teach a procedure, make complex equipment easier to understand or improve a workflow, we shape the experience around how your team works.</p><a className="bespoke-outline" href="#start-a-project">Discuss your brief <ArrowRight size={16} aria-hidden="true"/></a></header>
        <div className="bespoke-capability-grid">{capabilities.map(({Icon,title,copy})=><article key={title}><Icon size={30} strokeWidth={1.55} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
    <section className="bespoke-sectors bespoke-band" aria-labelledby="bespoke-sectors">
      <div className="bespoke-band-inner">
        <header><p className="eyebrow">WHERE IT CAN HELP</p><h2 id="bespoke-sectors">Grounded in your working environment.</h2><p>We work with your subject experts to reflect the equipment, procedures and decisions your people encounter.</p></header>
        <div className="bespoke-sector-grid">{sectors.map(({Icon,title,image,copy})=><article key={title}><img src={image} alt="" loading="lazy"/><div className="bespoke-sector-copy"><Icon size={23} strokeWidth={1.55} aria-hidden="true"/><div><h3>{title}</h3><p>{copy}</p></div></div></article>)}</div>
      </div>
    </section>
    <section className="bespoke-process bespoke-band" aria-labelledby="bespoke-process">
      <div className="bespoke-band-inner">
        <header><p className="eyebrow">HOW WE WORK WITH YOU</p><h2 id="bespoke-process">From the first brief to rollout.</h2><p>You’ll review the work as it develops, with clear points to test it and steer what happens next.</p></header>
        <ol>{steps.map(({Icon,title,copy},i)=><li key={title}><span className="bespoke-step-no" aria-hidden="true">0{i+1}</span><Icon size={29} strokeWidth={1.55} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></li>)}</ol>
      </div>
    </section>
    <section className="bespoke-contact home-wave-section home-wave-cta" id="start-a-project" aria-labelledby="bespoke-contact">
      <div className="home-wave-media" aria-hidden="true"><video src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4" autoPlay muted loop playsInline preload="metadata"/></div>
      <div><p className="eyebrow">START A PROJECT</p><h2 id="bespoke-contact">Tell us what you want to achieve.</h2><p>A few sentences are enough to get started. Tell us what you want to change, who the solution is for and any constraints you already know about. We can help you shape the brief from there.</p></div>
      <div className="bespoke-contact-options">
        <a href="/contact"><MessageSquare size={22} aria-hidden="true"/><span><strong>Send a project enquiry</strong><small>Share your goals with the MXR team.</small></span><ArrowRight size={18} aria-hidden="true"/></a>
        <a href="mailto:team@mxr.ai"><Mail size={22} aria-hidden="true"/><span><strong>Email our team</strong><small>team@mxr.ai</small></span><ArrowRight size={18} aria-hidden="true"/></a>
      </div>
    </section>
  </main>
}

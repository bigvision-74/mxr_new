import { useState } from 'react'
import { Layers3, Route, ChartNoAxesCombined, Radio, Users, ShieldCheck, HeartPulse, GraduationCap, BriefcaseBusiness, HardHat, ArrowRight } from 'lucide-react'
import platform from '../assets/images/insightxr-platform.png'
import healthcare from '../assets/images/eprium/clinical-learning.jpg'
import education from '../assets/images/eprium/educational-outcomes.webp'
import enterprise from '../assets/images/solutions/enterprise-training.jpg'
const field = '/assets/images/blog/arConstruction.jpg'
import '../assets/css/insight-overview.css'
const overview=[
 {Icon:Layers3,title:'Manage XR content',copy:'Keep immersive simulations, 360° videos and supporting resources in an organised library.'},
 {Icon:Route,title:'Deliver learning journeys',copy:'Combine XR experiences with assessments and traditional learning in structured pathways.'},
 {Icon:ChartNoAxesCombined,title:'Measure performance',copy:'Review completion, assessment results and supported interaction data in one place.'},
 {Icon:Radio,title:'Support instructors',copy:'Give facilitators better visibility of training activity and opportunities to provide feedback.'},
]
const features=[
 {Icon:Layers3,title:'XR content management',copy:'Upload, organise and distribute immersive experiences and supporting learning materials.',tags:['Content library','Resource management']},
 {Icon:Route,title:'Immersive learning journeys',copy:'Build sequenced pathways with VR modules, knowledge checks and learning resources.',tags:['Learning paths','Assessment']},
 {Icon:Radio,title:'Instructor-led sessions',copy:'Support live training with facilitator visibility, guidance and timely learner feedback.',tags:['Session insight','Instructor tools']},
 {Icon:ChartNoAxesCombined,title:'Analytics & reporting',copy:'Review progress, completion, performance and available interaction insights.',tags:['Performance','Reporting']},
 {Icon:Users,title:'Collaboration & engagement',copy:'Support group learning with interactive questions, feedback and shared activities.',tags:['Quizzes','Collaboration']},
 {Icon:ShieldCheck,title:'Enterprise-ready controls',copy:'Organise users and permissions, with security-conscious access and integration options.',tags:['Access control','Integration']},
]
const applications=[
 {Icon:HeartPulse,name:'Healthcare',label:'Clinical readiness',copy:'Practise clinical workflows, decision-making and patient-facing situations in immersive environments.',image:healthcare,alt:'Clinical learner practising digital patient workflows'},
 {Icon:GraduationCap,name:'Education',label:'Applied learning',copy:'Help students learn through active exploration, practical scenarios and feedback.',image:education,alt:'Healthcare students in a university learning environment'},
 {Icon:BriefcaseBusiness,name:'Enterprise',label:'Workforce development',copy:'Bring scalable, repeatable learning experiences to distributed teams and organisations.',image:enterprise,alt:'Professional immersive workplace training'},
 {Icon:HardHat,name:'Construction & Trades',label:'Safety & skills',copy:'Rehearse procedures, equipment familiarisation and safety-critical tasks before entering site.',image:field,alt:'Augmented reality applied to construction training'},
]
export function InsightOverview(){
 const [step,setStep]=useState(0),[sector,setSector]=useState(0)
 const selected=overview[step],app=applications[sector]
 return <>
 <section className="ix-section" aria-labelledby="ix-overview"><div className="ix-heading"><div><p className="eyebrow">WHAT IS INSIGHTXR?</p><h2 id="ix-overview">Make immersive learning <span>easier to manage.</span></h2></div><div><p>XR training works best when content, delivery and performance are connected. InsightXR brings them together — giving organisations a clearer way to manage programmes from start to finish.</p><a href="#ix-platform">See how it works <ArrowRight size={17}/></a></div></div>
 <div className="ix-tabs" role="tablist" aria-label="InsightXR overview">{overview.map(({Icon,title},i)=><button key={title} role="tab" aria-selected={step===i} id={`ix-tab-${i}`} aria-controls="ix-panel" onClick={()=>setStep(i)}><Icon size={23}/><small>0{i+1}</small><strong>{title}</strong></button>)}</div>
 <div className="ix-panel" role="tabpanel" id="ix-panel" aria-labelledby={`ix-tab-${step}`}><div><p className="eyebrow">CONNECTED LEARNING / 0{step+1}</p><h3>{selected.title}</h3><p>{selected.copy}</p><span className="ix-note">Content. Delivery. Performance. One connected programme.</span></div><img src={platform} alt="InsightXR platform connecting immersive learning experiences" loading="lazy"/></div></section>
 <section className="ix-section ix-platform" id="ix-platform" aria-labelledby="ix-platform-heading"><div className="ix-heading"><div><p className="eyebrow">PLATFORM CAPABILITIES</p><h2 id="ix-platform-heading">Everything connected.<br/><span>Nothing complicated.</span></h2></div><p>Practical tools for administrators, instructors and learners — designed to support delivery at every stage. Expand a capability to explore.</p></div><div className="ix-feature-grid">{features.map(({Icon,title,copy,tags},i)=><details key={title} open={i===0}><summary><span><small>0{i+1} / PLATFORM</small><strong>{title}</strong></span><Icon size={23}/></summary><p>{copy}</p><div className="ix-tags">{tags.map(t=><span key={t}>{t}</span>)}</div></details>)}</div></section>
 <section className="ix-section" aria-labelledby="ix-applications"><div className="ix-heading"><div><p className="eyebrow">SOLUTIONS OVERVIEW</p><h2 id="ix-applications">Built for learning <span>in the real world.</span></h2></div><p>InsightXR supports structured immersive learning across sectors where confidence, consistency and performance matter.</p></div><div className="ix-sector-tabs" role="tablist" aria-label="Industry applications">{applications.map(({Icon,name},i)=><button key={name} role="tab" id={`ix-sector-${i}`} aria-controls="ix-sector-panel" aria-selected={sector===i} onClick={()=>setSector(i)}><Icon size={20}/>{name}</button>)}</div><article className="ix-sector" id="ix-sector-panel" role="tabpanel" aria-labelledby={`ix-sector-${sector}`}><img src={app.image} alt={app.alt} loading="lazy"/><div><p className="eyebrow">{app.label}</p><h3>{app.name}</h3><p>{app.copy}</p><a className="btn btn-primary" href="/contact">Discuss your programme <ArrowRight size={17}/></a></div></article></section>
 </>
}

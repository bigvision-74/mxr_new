import { useRef, useState, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight, House, MapPin, Users, Ambulance, Hospital, HeartPulse, DoorOpen, Layers3, ClipboardList } from 'lucide-react'
import firstContact from '../assets/images/healthcare-journey/first-contact.webp'
import response from '../assets/images/healthcare-journey/response.webp'
import handover from '../assets/images/healthcare-journey/handover.webp'
import care from '../assets/images/healthcare-journey/ongoing-care.webp'
import discharge from '../assets/images/healthcare-journey/discharge.webp'
import omniaLogo from '../assets/images/omnia.svg'
import driveLogo from '../assets/images/drivexr.svg'
import epriumLogo from '../assets/images/eprium.svg'
import '../assets/css/healthcare-journey.css'

const products = {
 omnia: {logo:omniaLogo,name:'OMNIA', detail:'Immersive environments', href:'/omnia', Icon:Layers3},
 drivexr: {logo:driveLogo,name:'DriveXR', detail:'Driving simulation', href:'/drivexr', Icon:Ambulance},
 eprium: {logo:epriumLogo,name:'EPRium', detail:'Simulated patient records', href:'/eprium', Icon:ClipboardList},
 anatomy: {logo:null,name:'AR / MR Anatomy', detail:'Spatial understanding', href:'/contact', Icon:HeartPulse},
}
type ProductKey = keyof typeof products
const stages: {label:string;setting:string;Icon:typeof House;title:string;story:string;learning:string;image:string;alt:string;tools:ProductKey[];role:string}[] = [
 {label:'First contact',setting:'HOME · ROADSIDE · COMMUNITY',Icon:MapPin,title:'Care can begin anywhere.',story:'A person needs help at home, at an incident scene or in the community. The setting changes; the need to observe, communicate and understand the situation remains.',learning:'Use OMNIA to bring a home, street or community scenario into a shared learning space.',image:firstContact,alt:'Illustrative home-visit simulation with a care learner, patient actor and observing instructor',tools:['omnia'],role:'Recognise the context'},
 {label:'Response & transport',setting:'FROM THE SCENE TO HOSPITAL',Icon:Ambulance,title:'Prepare for the journey between.',story:'The patient’s story continues during the response and transfer. Driving skills and team communication each have a part to play.',learning:'DriveXR supports response-driver practice. OMNIA provides contextual scenarios for team communication around the transfer.',image:response,alt:'A paramedic learner at an ambulance-driving simulator with an instructor',tools:['drivexr','omnia'],role:'Practise the transition'},
 {label:'Hospital handover',setting:'ARRIVAL · ASSESSMENT · ADMISSION',Icon:Hospital,title:'Pass on the story. Build the next picture.',story:'At hospital, the receiving team gathers information, understands the context and begins the next stage of care.',learning:'Rehearse the hospital setting in OMNIA, then use EPRium to practise reviewing and documenting a simulated patient’s admission.',image:handover,alt:'Paramedic and nursing learners rehearsing handover beside a manikin in a simulated hospital admission bay',tools:['omnia','eprium'],role:'Connect people and information'},
 {label:'Care & review',setting:'WARD · DOCUMENTATION · REFLECTION',Icon:HeartPulse,title:'Follow the patient beyond admission.',story:'Learners revisit the patient’s information, document observations and discuss how the care story develops over time.',learning:'EPRium supports simulated records and review. AR/MR anatomy builds spatial understanding, while OMNIA places team practice in the clinical environment.',image:care,alt:'Nursing students using a simulated patient record beside a manikin during ward-based learning',tools:['eprium','anatomy','omnia'],role:'Understand the evolving picture'},
 {label:'Discharge & beyond',setting:'DISCHARGE · HOME · CONTINUING CARE',Icon:DoorOpen,title:'Complete the episode. Keep the learning.',story:'Discharge connects hospital care with the person’s next setting. Learners practise clear documentation, explanations and conversations with patients and families.',learning:'Use EPRium for simulated discharge documentation and OMNIA for discharge conversations or a return-to-home scenario. Finish with a faculty-led debrief.',image:discharge,alt:'A nurse learner discussing a fictional discharge plan with a patient actor and family member',tools:['eprium','omnia'],role:'Bring the journey together'},
]
export function HealthcareJourney(){
 const [active,setActive]=useState(0)
 const tabs=useRef<(HTMLButtonElement|null)[]>([])
 const stage=stages[active]
 const select=(index:number,focus=false)=>{setActive(index);if(focus)tabs.current[index]?.focus()}
 return <section className="hcj" id="patient-journey" aria-labelledby="hcj-title">
  <header className="hcj-heading"><div><p className="eyebrow">THE PATIENT JOURNEY / THE LEARNING OPPORTUNITY</p><h2 id="hcj-title">One patient.<br/><em>A whole journey of learning.</em></h2></div><div><p>From the first call for help to the return home, see how MXR’s complementary tools can support a complete teaching scenario.</p><span>Select a stage to follow the story <ArrowRight size={16}/></span></div></header>
  <div className="hcj-origins"><span>Different starting points</span><div><span><House size={16}/>At home</span><span><MapPin size={16}/>At an incident</span><span><Users size={16}/>In the community</span></div><span className="hcj-origin-tail" aria-hidden="true"/></div>
  <div className="hcj-route" style={{'--hcj-progress':`${active*20}%`} as CSSProperties} role="tablist" aria-label="Patient journey stages">{stages.map(({label,Icon},i)=><button key={label} ref={el=>{tabs.current[i]=el}} type="button" role="tab" id={`hcj-tab-${i}`} aria-selected={active===i} aria-controls="hcj-panel" tabIndex={active===i?0:-1} className={i<active?'hcj-passed':''} onClick={()=>select(i)} onKeyDown={e=>{let next=active;if(e.key==='ArrowRight')next=(active+1)%stages.length;else if(e.key==='ArrowLeft')next=(active+stages.length-1)%stages.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=stages.length-1;else return;e.preventDefault();select(next,true)}}><span className="hcj-stop"><Icon size={24} strokeWidth={1.5}/><small>0{i+1}</small></span><span className="hcj-stop-label">{label}</span></button>)}</div>
  <div className="hcj-panel" id="hcj-panel" role="tabpanel" aria-labelledby={`hcj-tab-${active}`} tabIndex={0}>
   <figure className="hcj-scene"><img key={stage.image} src={stage.image} alt={stage.alt} loading="lazy" width={1600} height={900}/></figure>
   <div className="hcj-detail" key={active}><p className="hcj-setting">{stage.setting}</p><h3>{stage.title}</h3><p className="hcj-story">{stage.story}</p><div className="hcj-learning"><span>THE TRAINING CONNECTION</span><p>{stage.learning}</p></div><nav className="hcj-tools" aria-label="Products supporting this stage">
    {stage.tools.map(key=>{
     const {name,detail,href,Icon,logo}=products[key]
     return <a key={key} href={href} className="hcj-product-link">
      <span className="hcj-product-brand" aria-hidden="true">{logo?<img src={logo} alt=""/>:<Icon size={28}/>}</span>
      <span className="hcj-product-info"><strong>{name}</strong><small>{detail}</small></span>
      <span className="hcj-product-action">{logo?'Explore product':'Discuss anatomy learning'} <ArrowRight size={16} aria-hidden="true"/></span>
     </a>
    })}
   </nav></div>
  </div>
  <div className="hcj-controls"><p><strong>0{active+1}</strong><span>/ 05</span><span>{stage.label}</span></p><div><button type="button" aria-label="Previous patient journey stage" disabled={active===0} onClick={()=>select(active-1)}><ArrowLeft size={19}/></button><button type="button" disabled={active===stages.length-1} onClick={()=>select(active+1)}>Next stage <ArrowRight size={18}/></button></div></div>
 </section>
}

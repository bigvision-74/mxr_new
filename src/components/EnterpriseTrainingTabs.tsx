import { enterpriseImageProps } from '../data/enterprise-images'
import { useRef, useState } from 'react'
import { ArrowRight, Check, Container, Forklift, HardHat, Layers3 } from 'lucide-react'
import forklift from '../assets/images/sectors/forklift-enterprise.webp'
import confined from '../assets/images/sectors/confined-space-vr.webp'
import height from '../assets/images/sectors/working-at-height-vr.webp'
import scaffold from '../assets/images/sectors/scaffolding-training.webp'
import '../assets/css/enterprise-training-tabs.css'

const topics = [
 {label:'Forklift',Icon:Forklift,image:forklift,alt:'A learner using a forklift VR training station with an instructor',title:'Build awareness before entering the warehouse.',copy:'Bring your warehouse layout into the learning experience. MXR can build forklift scenarios around pedestrian interactions, manoeuvring and load-handling decisions, with instructor-led review to connect each session to your site procedures.',points:['Pedestrian and obstacle awareness','Load-handling and manoeuvring scenarios','Site-specific practice and guided review']},
 {label:'Confined Spaces',Icon:Container,image:confined,alt:'A VR learner and instructor in a classroom with a virtual tank interior on screen',title:'Understand the setting before stepping inside.',copy:'Let teams explore a virtual restricted environment before discussing the real task. MXR shapes the setting, cues and learning objectives with your specialists, making space for observation, communication and reflection.',points:['Spatial and environmental familiarisation','Contextual hazard recognition','Team communication and reflection']},
 {label:'Working at Height',Icon:HardHat,image:height,alt:'A learner safely using VR at ground level while a screen displays a virtual elevated work environment',title:'Explore elevated environments from ground level.',copy:'Give learners a view from a virtual elevated workplace while they remain at ground level. MXR can recreate relevant platforms and surroundings so instructors can guide conversations about planning, awareness and decisions.',points:['Virtual elevated-work environments','Scenario-based awareness and discussion','Repeatable practice with instructor feedback']},
 {label:'Scaffolding',Icon:Layers3,image:scaffold,alt:'A trainee and instructor using VR in a construction training centre near scaffolding',title:'See the structure. Understand the context.',copy:'Make scaffold structures easier to examine from different viewpoints. MXR develops spatial learning experiences around your teaching objectives, connecting structure familiarisation with workplace context and guided discussion.',points:['Scaffold structure familiarisation','Workplace context and hazard awareness','Learning shaped by subject experts']},
]

export function EnterpriseTrainingTabs(){
 const [active,setActive]=useState(0)
 const refs=useRef<(HTMLButtonElement|null)[]>([])
 const selected=topics[active]
 return <section className="ett-section" aria-labelledby="ett-heading">
  <header className="ett-heading"><div><p className="eyebrow">PRACTICE BUILT AROUND THE WORKPLACE</p><h2 id="ett-heading">Real tasks.<br/><em>Room to practise.</em></h2></div><p>Explore how MXR can shape immersive scenarios around your people, equipment and working environments.</p></header>
  <div className="ett-tabs" role="tablist" aria-label="Workplace training topics">{topics.map(({label,Icon},i)=><button key={label} type="button" ref={el=>{refs.current[i]=el}} role="tab" id={`ett-tab-${i}`} aria-selected={active===i} aria-controls="ett-panel" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>{let next=i;if(e.key==='ArrowRight')next=(i+1)%topics.length;else if(e.key==='ArrowLeft')next=(i+topics.length-1)%topics.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=topics.length-1;else return;e.preventDefault();setActive(next);refs.current[next]?.focus()}}><span className="ett-tab-icon"><Icon size={26} strokeWidth={1.6} aria-hidden="true"/></span><span className="ett-tab-label">{label}</span><span className="ett-tab-number" aria-hidden="true">0{i+1}</span></button>)}</div>
  <div className="ett-panel" role="tabpanel" id="ett-panel" aria-labelledby={`ett-tab-${active}`} tabIndex={0}>
   <figure><img key={selected.image} src={selected.image} {...enterpriseImageProps(selected.image)} alt={selected.alt} loading="lazy"/><figcaption>0{active+1} / {selected.label.toUpperCase()}<span>Illustrative training visual</span></figcaption></figure>
   <div className="ett-copy"><p className="eyebrow">MXR / BESPOKE WORKPLACE TRAINING</p><h3>{selected.title}</h3><p>{selected.copy}</p><ul>{selected.points.map(point=><li key={point}><Check size={17} aria-hidden="true"/>{point}</li>)}</ul><a className="btn btn-primary" href="/contact">Discuss {selected.label.toLowerCase()} training <ArrowRight size={17} aria-hidden="true"/></a></div>
  </div>
  <p className="ett-note">Designed to complement your practical training and site procedures.</p>
 </section>
}

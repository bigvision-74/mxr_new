import driveImage from '../assets/images/drivexr/rig-side.webp'
import drive2Image from '../assets/images/drivexr/brochure-simulator.webp'
import insightImage from '../assets/images/insightxr-platform.png'
import omniaImage from '../assets/images/services/immersive-room.png'
import '../assets/css/featured-expansion.css'

export const extraProducts = [
  { name:'DriveXR', href:'/drivexr', heading:'Readiness starts before the road.', copy:'Build emergency driving confidence through realistic scenarios, instructor control and evidence-led feedback.', image:driveImage, alt:'DriveXR simulator cab and multi-screen installation', kind:'rig', features:[['SIM','Scenario-based training','Rehearse emergency driving situations in a controlled environment.'],['LIVE','Instructor control','Guide sessions and adapt the training experience.'],['DATA','Evidence-led feedback','Review performance to support focused improvement.']] },
  { name:'DriveXR 2', href:'/drivexr-2', heading:'A more connected driving experience.', copy:'Explore the next generation of emergency driver simulation, with richer environments, deeper data and connected training.', image:drive2Image, alt:'DriveXR immersive driver training simulator', kind:'photo', features:[['XR','Immersive simulation','Bring complex driving environments into the training room.'],['TEAM','Connected training','Support instructors and crews throughout the session.'],['REVIEW','Performance insight','Turn session data into meaningful feedback and debrief.']] },
  { name:'InsightXR', href:'/insightxr', heading:'Manage learning. Measure what matters.', copy:'Bring content, learners, devices and performance data together to deliver a connected XR learning programme.', image:insightImage, alt:'InsightXR learning management platform interface', kind:'screen', features:[['HUB','Programme management','Organise immersive learning content and delivery.'],['XR','Connected devices','Bring headsets and learning experiences into one programme.'],['DATA','Learning insights','Use performance information to support better outcomes.']] },
  { name:'Omnia', href:'/omnia', heading:'Meet the next addition to MXR.', copy:'Discover Omnia. The full product overview is coming soon; speak to our team for an introduction.', image:omniaImage, alt:'Immersive training environment used as Omnia preview imagery', kind:'photo', features:[['NEXT','Product preview','An introduction to Omnia by MXR.'],['SOON','Full details coming soon','The complete product overview is being prepared.'],['TALK','Start a conversation','Contact our team to discuss your requirements.']] },
]

export function AdditionalFeaturedProducts({active}:{active:number}){
  return <>{extraProducts.map((p,i)=><article hidden={active!==i+2} className={`product-slide modal-showcase extra-product-slide${active===i+2?' active':''}`} data-product-slide={i+2} key={p.name}>
    <div className="modal-copy"><p className="eyebrow light">{p.name==='Omnia'?'PRODUCT PREVIEW':'FEATURED PRODUCT'}</p><h2>{p.name}</h2><h3>{p.heading}</h3><p>{p.copy}</p><a className="btn btn-white" href={p.href}>Explore {p.name} →</a></div>
    <div className={`extra-product-art extra-product-art-${p.kind}`}><img src={p.image} alt={p.alt} loading="lazy"/>{p.name==='Omnia'&&<span className="extra-product-preview">PREVIEW / FULL DETAILS COMING SOON</span>}</div>
    <div className="px-feat-list">{p.features.map(([badge,title,copy])=><div className="px-feat-row" key={title}><div className="px-badge">{badge}</div><div className="px-feat-body"><div className="px-feat-meta"><h4>{title}</h4></div><p>{copy}</p></div></div>)}</div>
  </article>)}</>
}

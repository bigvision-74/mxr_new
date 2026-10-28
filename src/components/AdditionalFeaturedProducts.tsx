import { ArrowRight, Route, SlidersHorizontal, ChartNoAxesCombined, LayoutDashboard, Headset, Boxes, BrainCircuit, Video } from 'lucide-react'
import driveImage from '../assets/images/drivexr/brochure-simulator.webp'
import insightImage from '../assets/images/insightxr-platform.png'
import omniaImage from '../assets/images/omnia/featured-immersive-room.webp'

import '../assets/css/featured-expansion.css'

export const extraProducts = [
  { name: 'DriveXR', href: '/drivexr', heading: 'Readiness starts before the road.', copy: 'Build emergency driving confidence through realistic scenarios, instructor control and evidence-led feedback.', image: driveImage, alt: 'DriveXR immersive driver training simulator', kind: 'simulator', features: [[Route, 'Scenario-based training', 'Rehearse emergency driving situations in a controlled environment.'], [SlidersHorizontal, 'Instructor control', 'Guide sessions and adapt the training experience.'], [ChartNoAxesCombined, 'Evidence-led feedback', 'Review performance to support focused improvement.']] as const },
  { name: 'InsightXR', href: '/insightxr', heading: 'Manage learning. Measure what matters.', copy: 'Bring content, learners, devices and performance data together to deliver a connected XR learning programme.', image: insightImage, alt: 'InsightXR learning management platform interface', kind: 'screen', features: [[LayoutDashboard, 'Programme management', 'Organise immersive learning content and delivery.'], [Headset, 'Connected devices', 'Bring headsets and learning experiences into one programme.'], [ChartNoAxesCombined, 'Learning insights', 'Use performance information to support better outcomes.']] as const },
  { name: 'Omnia', href: '/omnia', heading: 'Create the space. Bring training to life.', copy: 'Design, personalise and deliver immersive learning experiences with interactive environments, AI characters, guided scenarios and 360° media.', image: omniaImage, alt: 'Omnia immersive room displaying an aircraft emergency response scenario', kind: 'omnia', features: [[Boxes, 'Scenario Studio', 'Build in 2D or 3D with room templates, equipment and precise object controls.'], [BrainCircuit, 'Interactive AI characters', 'Introduce configurable avatars with text and voice conversations.'], [Video, '360° media & guided learning', 'Combine panoramic content, annotations, objectives and learning checks.']] as const },
]

export function AdditionalFeaturedProducts({ active }: { active: number }) {
  return <>{extraProducts.map((p, i) => <article hidden={active !== i + 2} className={`product-slide modal-showcase extra-product-slide${active === i + 2 ? ' active' : ''}`} data-product-slide={i + 2} key={p.name}>
    <div className="modal-copy"><p className="eyebrow light">FEATURED PRODUCT</p><h2>{p.name}</h2><h3>{p.heading}</h3><p>{p.copy}</p><a className="btn btn-primary" href={p.href}>Explore {p.name} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a></div>
    <div className={`extra-product-art extra-product-art-${p.kind}`}>{p.name === 'InsightXR' ? <video className="insight-feature-video" src="/assets/videos/insightxr-imac.webm" autoPlay muted loop playsInline preload="metadata" aria-label="InsightXR platform demonstration on an iMac" /> : <img src={p.image} alt={p.alt} loading="lazy" />}</div>

    <div className="px-feat-list">{p.features.map(([Icon, title, copy]) => <div className="px-feat-row" key={title}><div className="px-badge"><Icon aria-hidden="true" strokeWidth={1.6} /></div><div className="px-feat-body"><div className="px-feat-meta"><h4>{title}</h4></div><p>{copy}</p></div></div>)}</div>
  </article>)}</>
}

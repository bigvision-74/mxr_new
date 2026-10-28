import { ArrowRight, Route, SlidersHorizontal, ChartNoAxesCombined, LayoutDashboard, Headset, Sparkles, Clock3, MessageCircle } from 'lucide-react'
import driveImage from '../assets/images/drivexr/brochure-simulator.webp'
import insightImage from '../assets/images/insightxr-platform.png'
import omniaImage from '../assets/images/solutions/enterprise-training.jpg'
import '../assets/css/featured-expansion.css'

export const extraProducts = [
  { name: 'DriveXR', href: '/drivexr', heading: 'Readiness starts before the road.', copy: 'Build emergency driving confidence through realistic scenarios, instructor control and evidence-led feedback.', image: driveImage, alt: 'DriveXR immersive driver training simulator', kind: 'simulator', features: [[Route, 'Scenario-based training', 'Rehearse emergency driving situations in a controlled environment.'], [SlidersHorizontal, 'Instructor control', 'Guide sessions and adapt the training experience.'], [ChartNoAxesCombined, 'Evidence-led feedback', 'Review performance to support focused improvement.']] as const },
  { name: 'InsightXR', href: '/insightxr', heading: 'Manage learning. Measure what matters.', copy: 'Bring content, learners, devices and performance data together to deliver a connected XR learning programme.', image: insightImage, alt: 'InsightXR learning management platform interface', kind: 'screen', features: [[LayoutDashboard, 'Programme management', 'Organise immersive learning content and delivery.'], [Headset, 'Connected devices', 'Bring headsets and learning experiences into one programme.'], [ChartNoAxesCombined, 'Learning insights', 'Use performance information to support better outcomes.']] as const },
  { name: 'Omnia', href: '/omnia', heading: 'Meet the next addition to MXR.', copy: 'Discover Omnia. The full product overview is coming soon; speak to our team for an introduction.', image: omniaImage, alt: 'Immersive training environment used as Omnia preview imagery', kind: 'photo', features: [[Sparkles, 'Product preview', 'An introduction to Omnia by MXR.'], [Clock3, 'Full details coming soon', 'The complete product overview is being prepared.'], [MessageCircle, 'Start a conversation', 'Contact our team to discuss your requirements.']] as const },
]

export function AdditionalFeaturedProducts({ active }: { active: number }) {
  return <>{extraProducts.map((p, i) => <article hidden={active !== i + 2} className={`product-slide modal-showcase extra-product-slide${active === i + 2 ? ' active' : ''}`} data-product-slide={i + 2} key={p.name}>
    <div className="modal-copy"><p className="eyebrow light">{p.name === 'Omnia' ? 'FEATURED PRODUCTS' : 'FEATURED PRODUCTS'}</p><h2>{p.name}</h2><h3>{p.heading}</h3><p>{p.copy}</p><a className="btn btn-primary" href={p.href}>Explore {p.name} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a></div>
    <div className={`extra-product-art extra-product-art-${p.kind}`}><img src={p.image} alt={p.alt} loading="lazy" />{p.name === 'Omnia' && <span className="extra-product-preview">PREVIEW / FULL DETAILS COMING SOON</span>}</div>
    <div className="px-feat-list">{p.features.map(([Icon, title, copy]) => <div className="px-feat-row" key={title}><div className="px-badge"><Icon aria-hidden="true" strokeWidth={1.6} /></div><div className="px-feat-body"><div className="px-feat-meta"><h4>{title}</h4></div><p>{copy}</p></div></div>)}</div>
  </article>)}</>
}

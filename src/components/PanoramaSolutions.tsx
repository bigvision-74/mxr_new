import { ArrowUpRight, GraduationCap, HeartPulse, Layers3, ShieldCheck } from 'lucide-react'
import defenceImage from '../assets/images/solutions/defence-security.png'
import healthcareImage from '../assets/images/H4_clinical-simulation.webp'
import enterpriseImage from '../assets/images/solutions/enterprise-training.jpg'
import customImage from '../assets/images/solutions/custom-solutions.jpg'
import '../assets/css/panorama-solutions.css'

const solutions = [
  { title: 'Defence & Security', label: 'Readiness', description: 'Rehearse complex scenarios. Prepare people for the moments that matter.', image: defenceImage, position: '44% center', href: '/defence-security', Icon: ShieldCheck },
  { title: 'Healthcare Simulation', label: 'Clinical practice', description: 'Create space to practise safely and build confidence before patient care.', image: healthcareImage, position: '50% center', href: '/eprium', Icon: HeartPulse },
  { title: 'Enterprise Training', label: 'Workplace skills', description: 'Turn everyday challenges into practical learning and stronger performance.', image: enterpriseImage, position: '43% center', href: '/xr-development', Icon: GraduationCap },
  { title: 'Custom Solutions', label: 'Bespoke technology', description: 'Connect your vision with immersive technology, AI and platforms built around you.', image: customImage, position: '59% center', href: '/contact', Icon: Layers3 },
]

export function PanoramaSolutions() {
  return (
    <section className="solutions-panorama" aria-labelledby="panorama-heading">
      <div className="panorama-heading">
        <div>
          <p className="eyebrow">SOLUTIONS IN FOCUS</p>
          <h2 id="panorama-heading">A wider world of possibilities.</h2>
        </div>
        <p>Explore the environments we help people prepare for, and the technology that takes them further.</p>
      </div>
      <div className="panorama-rail">
        {solutions.map(({ title, label, description, image, position, href, Icon }, index) => (
          <a className="panorama-panel" href={href} key={title} aria-label={`Explore ${title}`} aria-describedby={`panorama-description-${index}`}>
            <img className="panorama-image" src={image} alt="" loading="lazy" style={{ objectPosition: position }} />
            <div className="panorama-shade" aria-hidden="true" />
            <div className="panorama-panel-top" aria-hidden="true"><span>0{index + 1}</span><span>{label}</span></div>
            <div className="panorama-panel-copy">
              <span className="panorama-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></span>
              <h3>{title}</h3>
              <div className="panorama-reveal">
                <p id={`panorama-description-${index}`}>{description}</p>
                <span className="panorama-explore">Explore solution <ArrowUpRight aria-hidden="true" /></span>
              </div>
            </div>
            <span className="panorama-corner-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </a>
        ))}
      </div>
      <p className="panorama-caption"><span>IMMERSIVE TECHNOLOGY. REAL-WORLD RELEVANCE.</span><span className="panorama-hint">Hover or focus to explore</span></p>
    </section>
  )
}

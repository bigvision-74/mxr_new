import { GraduationCap, HeartPulse, Layers3, ShieldCheck } from 'lucide-react'
import healthcareImage from '../assets/images/eprium/healthcare-vr.webp'
import enterpriseImage from '../assets/images/solutions/enterprise-factory-vr.webp'
import defenceImage from '../assets/images/solutions/defence-security.png'
import customImage from '../assets/images/solutions/custom-solutions.jpg'
import '../assets/css/panorama-solutions.css'

const solutions = [
  { title: 'Defence & Security', label: 'Readiness', description: 'Rehearse complex scenarios. Prepare people for the moments that matter.', image: defenceImage, position: '44% center', Icon: ShieldCheck },
  { title: 'Healthcare', label: 'Clinical practice', description: 'Rehearse procedures and protocols in controlled environments, with opportunities for team practice.', image: healthcareImage, position: '50% center', Icon: HeartPulse },
  { title: 'Enterprise Training', label: 'Workplace skills', description: 'Turn everyday challenges into practical learning and stronger performance.', image: enterpriseImage, position: '48% center', Icon: GraduationCap },
  { title: 'Custom Solutions', label: 'Bespoke technology', description: 'Connect your vision with immersive technology, AI and platforms built around you.', image: customImage, position: '59% center', Icon: Layers3 },
]

export function PanoramaSolutions() {
  return (
    <section className="solutions-panorama" id="solutions" aria-label="Solutions in focus">
      <div className="panorama-heading">
        <div><p className={"eyebrow"}>{"SOLUTIONS IN FOCUS"}</p>
        <h2>{"A wider world of possibilities."}</h2></div>
        <p>{"Explore the environments we help people prepare for, and the technology that takes them further."}</p>
      </div>
      <div className="panorama-rail">
        {solutions.map(({ title, label, description, image, position, Icon }, index) => (
          <div className="panorama-panel" key={title} aria-describedby={`panorama-description-${index}`}>
            <img className="panorama-image" src={image} alt="" loading="lazy" style={{ objectPosition: position }} />
            <div className="panorama-shade" aria-hidden="true" />
            <div className="panorama-panel-top" aria-hidden="true"><span>0{index + 1}</span><span>{label}</span></div>
            <div className="panorama-panel-copy">
              <span className="panorama-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></span>
              <h3>{title}</h3>
              <div className="panorama-reveal">
                <p id={`panorama-description-${index}`}>{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

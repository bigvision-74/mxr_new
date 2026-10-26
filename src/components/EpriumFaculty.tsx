import { Rocket, SlidersHorizontal, Mic } from 'lucide-react'
import facultyImage from '../assets/images/eprium/g3.webp'

const items = [
  { icon: Rocket, title: 'Proven immersive training innovation',
    text: 'Create or adapt simulated patients and clinical information, with AI-assisted generation where appropriate.' },
  { icon: SlidersHorizontal, title: 'Live simulation control',
    text: 'Monitor activity, control progression, release results and introduce clinical events at the right moment.' },
  { icon: Mic, title: 'AI patient interaction',
    text: 'Support context-aware patient conversations for richer communication practice.' },
]

export function EpriumFaculty() {
  return (
    <section className="epf" aria-labelledby="epf-heading">
      <figure className="epf-figure">
        <img src={facultyImage} alt="Faculty and learners reviewing a simulation dashboard beside a patient bed" loading="lazy" />
      </figure>
      <div className="epf-copy">
        <p className="epf-eyebrow">FOR FACULTY</p>
        <h2 id="epf-heading">Make every simulation smarter</h2>
        <p className="epf-lead">EPRium is designed around simulation. Faculty get the tools to build, control and review the learning experience, not just a documentation screen.</p>
        <ul>
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span className="epf-icon"><Icon aria-hidden="true" size={20} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

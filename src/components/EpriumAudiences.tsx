import { useState } from 'react'
import g1 from '../assets/images/eprium/g1.webp'
import g2 from '../assets/images/eprium/g2.webp'
import g3 from '../assets/images/eprium/g3.webp'
import g5 from '../assets/images/eprium/g5.webp'
import g8 from '../assets/images/eprium/g8.webp'
import prepare from '../assets/images/eprium/prepare.webp'

const audiences = [
  {
    tab: 'For learners', title: 'Confidence before real patient care',
    text: 'Build confidence with documentation, prioritisation, communication and clinical decision-making before real patient care.',
    image: g2,
  },
  {
    tab: 'For educators', title: 'Feedback grounded in the record',
    text: 'Create repeatable scenarios, observe learner activity and use the digital record to strengthen feedback and debrief.',
    image: prepare,
  },
  {
    tab: 'For simulation centres', title: 'Every modality, one record',
    text: 'Connect EPR practice to mannequin, device, VR/MR and immersive-room simulation.',
    image: g8,
  },
  {
    tab: 'For programme leads', title: 'Consistent across every cohort',
    text: 'Embed digital practice across curricula and deliver more consistent experiences across cohorts.',
    image: g1,
  },
  {
    tab: 'For healthcare organisations', title: 'Onboarding and digital readiness',
    text: 'Support onboarding, digital readiness and continuing professional development using safe simulated workflows.',
    image: g5,
  },
  {
    tab: 'For institutions', title: 'Scale across programmes and sites',
    text: 'Scale delivery across programmes and sites while reducing dependence on paper-based simulation processes.',
    image: g3,
  },
]

export function EpriumAudiences() {
  const [active, setActive] = useState(audiences.length - 1)
  const a = audiences[active]

  return (
    <section className="epa" aria-labelledby="epa-heading">
      <p className="epa-eyebrow">BENEFITS ACROSS EDUCATION</p>
      <h2 id="epa-heading">Built for everyone who shapes clinical learning</h2>

      <div className="epa-tabs" role="tablist" aria-label="Audiences">
        {audiences.map(({ tab }, i) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? 'is-active' : ''}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <article className="epa-card" role="tabpanel">
        <img src={a.image} alt={a.title} loading="lazy" />
        <div className="epa-copy">
          <p className="epa-kicker">{a.tab.toUpperCase()}</p>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </div>
      </article>
    </section>
  )
}

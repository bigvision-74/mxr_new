import { useState, type CSSProperties } from 'react'
import { ClipboardPlus, Stethoscope, FlaskConical, Activity, LineChart, Presentation } from 'lucide-react'
import admissionImage from '../assets/images/eprium/journey-admission.webp'
import assessmentImage from '../assets/images/eprium/journey-assessment.webp'
import decisionsImage from '../assets/images/eprium/journey-decisions.webp'
import treatmentImage from '../assets/images/eprium/journey-treatment.webp'
import monitoringImage from '../assets/images/eprium/journey-monitoring.webp'
import debriefImage from '../assets/images/eprium/journey-debrief.webp'

const stages = [
  {
    icon: ClipboardPlus, name: 'Admission', title: 'Understand the patient and context.',
    text: 'Learners open the record, review the presenting situation and history, and build a picture of the patient before acting.',
    tags: ['Patient context', 'History', 'Handover'], image: admissionImage,
  },
  {
    icon: Stethoscope, name: 'Assessment', title: 'Record observations and findings.',
    text: 'Observations and examination findings go straight into a realistic digital record, just as they would on the ward.',
    tags: ['Observations', 'Examination', 'Documentation'], image: assessmentImage,
  },
  {
    icon: FlaskConical, name: 'Decisions', title: 'Request tests, imaging, medication or input.',
    text: 'Learners prioritise and act: requesting investigations, prescribing and escalating as the clinical picture develops.',
    tags: ['Investigations', 'Imaging', 'Medication', 'Escalation'], image: decisionsImage,
  },
  {
    icon: Activity, name: 'Treatment', title: 'Document interventions and respond.',
    text: 'Interventions are recorded as they happen, and the simulated patient responds to what the learner did.',
    tags: ['Interventions', 'Patient response', 'Communication'], image: treatmentImage,
  },
  {
    icon: LineChart, name: 'Monitoring', title: 'Review trends, results and response.',
    text: 'Results are released and trends update, so learners must reassess and adjust care in context.',
    tags: ['Trends', 'Results release', 'Reassessment'], image: monitoringImage,
  },
  {
    icon: Presentation, name: 'Debrief', title: 'Reflect on decisions, documentation and outcomes.',
    text: 'Educators replay the complete journey, using the recorded trail for specific feedback and reflection.',
    tags: ['Timeline replay', 'Feedback', 'Reflection'], image: debriefImage,
  },
]

export function EpriumJourney() {
  const [active, setActive] = useState(0)
  const stage = stages[active]

  return (
    <section className="epj" aria-labelledby="epj-heading">
      <div className="epj-head">
        <p className="epj-eyebrow">PATIENT JOURNEY</p>
        <h2 id="epj-heading" className="epj-title">One patient. One journey. Every decision connected.</h2>
        <p>The simulated record is part of the scenario from the first clinical context to the final debrief. Select a stage to follow the patient.</p>
      </div>

      <ol className="epj-stages" role="tablist" aria-label="Patient journey stages" style={{ '--progress': `${(active / (stages.length - 1)) * 100}%` } as CSSProperties}>
        {stages.map(({ icon: Icon, name }, i) => (
          <li key={name}>
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`epj-stage${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="epj-stage-icon"><Icon aria-hidden="true" size={26} /></span>
              <small>STAGE {i + 1}</small>
              <b>{name}</b>
            </button>
          </li>
        ))}
      </ol>

      <article className="epj-card" role="tabpanel">
        <div className="epj-card-copy">
          <p className="epj-card-kicker">STAGE {active + 1} OF {stages.length} · {stage.name.toUpperCase()}</p>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
          <ul className="epj-tags">
            {stage.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <span className="epj-num" aria-hidden="true">{String(active + 1).padStart(2, '0')}</span>
        </div>
        <img src={stage.image} alt={`${stage.name} stage of the EPRium patient journey`} loading="lazy" />
      </article>

      <div className="epj-foot">
        <h4>Follow the patient, not a collection of disconnected tasks.</h4>
        <p>Learners work through a changing clinical picture while educators keep the complete journey for reflection and feedback.</p>
      </div>
    </section>
  )
}

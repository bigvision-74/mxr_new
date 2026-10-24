import outcomesImage from '../assets/images/eprium/g3.webp'

const outcomes = [
  ['Practice readiness', 'Rehearse digital workflows before placement or clinical deployment.'],
  ['Clinical reasoning', 'Interpret information, prioritise and make decisions in context.'],
  ['Documentation confidence', 'Record observations, interventions and care in a realistic digital record.'],
  ['Safer rehearsal', 'Explore high-stakes decisions without risk to a real patient.'],
  ['Better debrief', 'Review recorded actions and documentation rather than relying on memory alone.'],
  ['Consistent learning', 'Give cohorts structured, repeatable scenarios with controlled information release.'],
  ['Faculty efficiency', 'Reuse scenarios and manage learner activity from one simulation environment.'],
  ['Scalable delivery', 'Support individual, team, classroom, simulation-centre and immersive delivery.'],
]

export function EpriumOutcomes() {
  return (
    <section className="epo" id="product-features" aria-labelledby="epo-heading">
      <div className="epo-top">
        <div className="epo-head">
          <p className="epo-eyebrow">EDUCATIONAL OUTCOMES</p>
          <h2 id="epo-heading">From clinical reasoning to confident practice</h2>
          <p>Research on simulated EPR education reports benefits including digital literacy, documentation accuracy, clinical reasoning, confidence and transition-to-practice readiness. EPRium is designed around those priorities.</p>
        </div>
        <figure className="epo-figure">
          <img src={outcomesImage} alt="Educator and students reviewing a patient record on a large screen beside a simulation mannequin" loading="lazy" />
          <figcaption>The benefit is not simply learning to use an EPR. It is learning to think, act and document through one connected patient journey.</figcaption>
        </figure>
      </div>
      <ol className="epo-grid">
        {outcomes.map(([title, text], i) => (
          <li key={title}>
            <small>{String(i + 1).padStart(2, '0')}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

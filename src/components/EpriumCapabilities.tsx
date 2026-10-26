import { ClipboardList, Mic, LineChart, SlidersHorizontal, MessageCircle, Glasses, Check } from 'lucide-react'
import laptop from '../assets/images/eprium/product-laptop.webp'

const cards = [
  { icon: ClipboardList, title: 'Scenarios', sub: 'Build once, reuse often',
    points: ['Real-time performance analytics', 'Intelligent scenario progression', 'Reusable templates'] },
  { icon: Mic, title: 'AI patient interaction with mannequins', sub: 'From silent mannequins to intelligent patients',
    points: ['Real-time conversations', 'Context-aware responses', 'Emotional realism'] },
  { icon: LineChart, title: 'Performance & analytics', sub: 'Measure what matters',
    points: ['Track decisions, timing and errors', 'Analyse workflows', 'Capture performance data'] },
  { icon: SlidersHorizontal, title: 'Simulation control', sub: 'Run the scenario live',
    points: ['Monitor trainee actions', 'Control scenario flow and release results', 'Assess decisions'] },
  { icon: MessageCircle, title: 'Structured debriefing', sub: 'Feedback grounded in evidence',
    points: ['Evidence-based feedback', 'Identify strengths and gaps', 'Standardise training'] },
  { icon: Glasses, title: 'Immersive clinical environments', sub: 'One record across every setting',
    points: ['Mannequin simulation', 'VR patient environments', 'Integrated patient journeys'] },
]

export function EpriumCapabilities() {
  return (
    <section className="epc" aria-labelledby="epc-heading">
      <div className="epc-top">
        <div className="epc-head">
          <p className="epc-eyebrow">INTELLIGENT CAPABILITIES</p>
          <h2 id="epc-heading">Everything faculty need to build, run and review simulation</h2>
          <p>From silent mannequins to intelligent patients, and from activity logs to evidence that shows what matters.</p>
        </div>
        <img className="epc-laptop" src={laptop} alt="EPRium faculty dashboard shown across laptop and tablet screens" loading="lazy" />
      </div>
      <div className="epc-grid">
        {cards.map(({ icon: Icon, title, sub, points }) => (
          <article key={title}>
            <span className="epc-icon"><Icon aria-hidden="true" size={20} /></span>
            <h3>{title}</h3>
            <p className="epc-sub">{sub}</p>
            <ul>
              {points.map((p) => (
                <li key={p}><Check aria-hidden="true" size={14} />{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

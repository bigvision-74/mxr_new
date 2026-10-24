import { LineChart, MessageCircle, Layers } from 'lucide-react'
import devices from '../assets/images/eprium/eprium-devices.png'

const items = [
  { icon: LineChart, title: 'Performance & analytics', text: 'Track decisions, timing, errors and workflow activity.' },
  { icon: MessageCircle, title: 'Structured debrief', text: 'Turn recorded actions into specific feedback, reflection and learning priorities.' },
  { icon: Layers, title: 'Immersive integration', text: 'Connect the patient record with mannequin, device and VR simulation.' },
]

export function EpriumDebrief() {
  return (
    <section className="epd" aria-labelledby="epd-heading">
      <div className="epd-inner">
        <div className="epd-visual">
          <img src={devices} alt="EPRium dashboard on a tablet and phone beside an EPRium device" loading="lazy" />
        </div>
        <div className="epd-copy">
          <p className="epd-eyebrow">ASSESSMENT &amp; DEBRIEF</p>
          <h2 id="epd-heading">See the evidence around the decision</h2>
          <p className="epd-lead">Capture the information available, the actions taken, their timing and the documentation created. Educators get a richer basis for assessment, feedback and structured debrief.</p>
          <ul className="epd-list">
            {items.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="epd-icon"><Icon aria-hidden="true" size={20} /></span>
                <div><b>{title}</b><p>{text}</p></div>
              </li>
            ))}
          </ul>
          <a className="epd-cta" href="mailto:hello@mxr.ai?subject=EPRium%20demonstration">Turn simulation activity into evidence for meaningful debrief</a>
        </div>
      </div>
    </section>
  )
}

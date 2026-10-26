import { PolicyDoc } from '../components/PolicyDoc'
import { whistleblowingSections } from '../data/whistleblowing'

export default function WhistleblowingPage() {
  return <PolicyDoc
    title={<>Whistleblowing <em>Policy</em></>}
    lead="How workers can raise concerns about malpractice or wrongdoing in the workplace, confidentially and without fear of reprisals."
    sections={whistleblowingSections}
    contactLabel="Need to raise a concern?" />
}

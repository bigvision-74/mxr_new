import { PolicyDoc } from '../components/PolicyDoc'
import { disciplinarySections } from '../data/disciplinary'

export default function DisciplinaryPage() {
  return <PolicyDoc
    title={<>Disciplinary <em>Policy</em></>}
    lead="Our disciplinary procedure setting out the standards of conduct expected of staff and the process for addressing misconduct."
    sections={disciplinarySections}
    contactLabel="Questions about this policy?" />
}

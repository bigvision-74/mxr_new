import { PolicyDoc } from '../components/PolicyDoc'
import { healthSafetySections } from '../data/health-safety'

export default function HealthSafetyPage() {
  return <PolicyDoc
    title={<>Health and Safety <em>Policy</em></>}
    lead="Our health and safety policy statement, including display screen equipment (DSE) safety, first aid, fire, and accident procedures."
    sections={healthSafetySections}
    contactLabel="Questions about health and safety?" />
}

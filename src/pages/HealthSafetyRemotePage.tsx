import { PolicyDoc } from '../components/PolicyDoc'
import { healthSafetyRemoteSections } from '../data/health-safety-remote'

export default function HealthSafetyRemotePage() {
  return <PolicyDoc
    longTitle
    title={<>Health and Safety Policy Summary <em>(Remote &amp; Hybrid Tech Workers)</em></>}
    lead="Our health and safety obligations and guidelines for remote and hybrid technology workers."
    sections={healthSafetyRemoteSections}
    contactLabel="Questions about health and safety?" />
}

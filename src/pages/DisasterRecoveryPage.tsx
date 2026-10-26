import { PolicyDoc } from '../components/PolicyDoc'
import { disasterRecoverySections } from '../data/disaster-recovery'

export default function DisasterRecoveryPage() {
  return <PolicyDoc
    longTitle
    title={<>Disaster Recovery <em>Plan</em></>}
    lead="Our business continuity and disaster recovery procedures to ensure minimum disruption following any unforeseen disaster."
    sections={disasterRecoverySections}
    contactLabel="Questions about business continuity?" />
}

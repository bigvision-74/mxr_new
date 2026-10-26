import { PolicyDoc } from '../components/PolicyDoc'
import { itSecuritySections } from '../data/it-security'

export default function ItSecurityPage() {
  return <PolicyDoc
    title={<>IT Security <em>Policy</em></>}
    lead="How MXR protects its assets, data, and intellectual property from security threats."
    sections={itSecuritySections}
    contactLabel="Questions about IT security?" />
}

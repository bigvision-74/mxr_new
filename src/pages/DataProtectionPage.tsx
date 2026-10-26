import { PolicyDoc } from '../components/PolicyDoc'
import { dpSections } from '../data/data-protection'

export default function DataProtectionPage() {
  return <PolicyDoc
    title={<>Data Protection <em>Policy</em></>}
    lead="How MXR handles, safeguards, and governs personal data as a controller and processor under UK GDPR / DPA 2018."
    sections={dpSections}
    contactLabel="Questions about data protection?" />
}

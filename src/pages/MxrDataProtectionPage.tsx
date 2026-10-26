import { PolicyDoc } from '../components/PolicyDoc'
import { mxrDpSections } from '../data/mxr-data-protection'

export default function MxrDataProtectionPage() {
  return <PolicyDoc
    title={<>MXR Data Protection <em>Policy</em></>}
    lead="How MXR protects, processes, and governs personal data across its products and services."
    sections={mxrDpSections}
    contactLabel="Questions about data protection?" />
}

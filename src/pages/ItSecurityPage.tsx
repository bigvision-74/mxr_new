import { PolicyDoc } from '../components/PolicyDoc'
import { itSecuritySections } from '../data/it-security'

export default function ItSecurityPage() {
  return <PolicyDoc
    title={<>Information Security <em>Policy</em></>}
    lead="Our ISO/IEC 27001:2022-aligned commitment to protecting the confidentiality, integrity, and availability of corporate information, source code, and client data."
    sections={itSecuritySections}
    contactLabel="Questions about information security?" />
}

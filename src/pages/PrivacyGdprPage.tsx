import { PolicyDoc } from '../components/PolicyDoc'
import { privacyGdprSections } from '../data/privacy-gdpr'

export default function PrivacyGdprPage() {
  return <PolicyDoc
    longTitle
    title={<>Privacy Policy <em>(MXR-GDPR-001)</em></>}
    lead="Detailed GDPR privacy policy covering personal data collection, AI/XR services, data sharing, retention, and your rights."
    sections={privacyGdprSections}
    contactLabel="Questions about your privacy?" />
}

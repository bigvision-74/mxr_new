import { PolicyDoc } from '../components/PolicyDoc'
import { privacyGdprSections } from '../data/privacy-gdpr'

export default function PrivacyGdprPage() {
  return <PolicyDoc
    longTitle
    title={<>Website & Platform <em>Privacy Policy</em></>}
    lead="How MXR collects, uses, and protects personal data across our website, software platforms, AI, and XR services, aligned with UK GDPR and ISO/IEC 27001:2022."
    sections={privacyGdprSections}
    contactLabel="Questions about your privacy?" />
}

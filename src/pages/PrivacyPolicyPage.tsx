import { PolicyDoc } from '../components/PolicyDoc'
import { privacySections } from '../data/privacy'

export default function PrivacyPolicyPage() {
  return <PolicyDoc
    title={<>Privacy <em>Policy</em></>}
    lead="How we collect, use, and protect your personal data in line with our legal obligations."
    sections={privacySections}
    contactLabel="Questions about your privacy?" />
}

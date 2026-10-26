import { PolicyDoc } from '../components/PolicyDoc'
import { securityPolicySections } from '../data/security-policy'

export default function SecurityPolicyPage() {
  return <PolicyDoc
    title={<>Security <em>Policy</em></>}
    lead="Security requirements for the proper and secure use of Information Technology services, covering IT assets, access control, passwords, email, internet, remote access, and outsourcing."
    sections={securityPolicySections}
    contactLabel="Questions about security?" />
}

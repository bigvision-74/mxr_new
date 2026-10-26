import { PolicyDoc } from '../components/PolicyDoc'
import { itPolicySections } from '../data/it-policy'

export default function ItPolicyPage() {
  return <PolicyDoc
    title={<>IT <em>Policy</em></>}
    lead="Acceptable use of technology and IT resources within MXR."
    sections={itPolicySections}
    contactLabel="Questions about IT use?" />
}

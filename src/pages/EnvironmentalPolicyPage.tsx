import { PolicyDoc } from '../components/PolicyDoc'
import { environmentalSections } from '../data/environmental'

export default function EnvironmentalPolicyPage() {
  return <PolicyDoc
    title={<>Environmental <em>Policy</em></>}
    lead="Our approach to minimising environmental impact across our offices, supply chain, and operations."
    sections={environmentalSections}
    contactLabel="Questions about our environmental policy?" />
}

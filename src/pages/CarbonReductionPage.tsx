import { PolicyDoc } from '../components/PolicyDoc'
import { carbonReductionSections } from '../data/carbon-reduction'

export default function CarbonReductionPage() {
  return <PolicyDoc
    title={<>Carbon Reduction <em>Plan</em></>}
    lead="Our PPN 006/21-aligned Carbon Reduction Plan and NHS Supply Chain Evergreen Sustainable Supplier Assessment (Level 1) statement, with our emissions baseline and commitment to Net Zero by 2050."
    sections={carbonReductionSections}
    contactLabel="Questions about our sustainability commitments?" />
}

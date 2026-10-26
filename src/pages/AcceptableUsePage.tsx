import { PolicyDoc } from '../components/PolicyDoc'
import { aupSections } from '../data/acceptable-use'

export default function AcceptableUsePage() {
  return <PolicyDoc
    title={<>Acceptable Use <em>Policy</em></>}
    lead="The permitted and prohibited uses of our virtual spaces, software, developer tools, and generative AI engines."
    sections={aupSections}
    contactLabel="Questions about acceptable use?" />
}

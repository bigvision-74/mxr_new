import { PolicyDoc } from '../components/PolicyDoc'
import { lifecycleSections } from '../data/software-lifecycle'

export default function SoftwareLifecyclePage() {
  return <PolicyDoc
    longTitle
    title={<>Software Lifecycle &amp; Deprecation <em>Policy</em></>}
    lead="Our software lifecycle phases, support timelines, and deprecation process for XR applications, enterprise builds, and training simulations."
    sections={lifecycleSections}
    contactLabel="Questions about software support?" />
}

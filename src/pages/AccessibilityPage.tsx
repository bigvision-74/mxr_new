import { PolicyDoc } from '../components/PolicyDoc'
import { accessibilitySections } from '../data/accessibility'

export default function AccessibilityPage() {
  return <PolicyDoc
    longTitle
    title={<>Website Accessibility <em>Statement</em></>}
    lead="Our commitment to digital accessibility, WCAG 2.2 AA targets, platform limitations, and how to give accessibility feedback."
    sections={accessibilitySections}
    contactLabel="Found an accessibility barrier?" />
}

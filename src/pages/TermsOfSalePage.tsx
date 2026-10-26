import { PolicyDoc } from '../components/PolicyDoc'
import { termsOfSaleSections } from '../data/terms-of-sale'

export default function TermsOfSalePage() {
  return <PolicyDoc
    longTitle
    title={<>Terms of Sale &amp; Licensing <em>Agreement</em></>}
    lead="Terms governing the purchase, licensing, billing, and deployment of our software, XR platforms, and AI services."
    sections={termsOfSaleSections}
    contactLabel="Questions about your order or licence?" />
}

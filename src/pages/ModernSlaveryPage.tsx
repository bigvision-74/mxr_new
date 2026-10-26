import { PolicyDoc } from '../components/PolicyDoc'
import { modernSlaverySections } from '../data/modern-slavery'

export default function ModernSlaveryPage() {
  return <PolicyDoc
    longTitle
    title={<>Modern Slavery and Human Trafficking <em>Statement</em></>}
    lead="Our commitment to combating modern slavery and human trafficking in our business and supply chains."
    sections={modernSlaverySections}
    contactLabel="Want to raise a concern?" />
}

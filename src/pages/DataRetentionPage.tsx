import { PolicyDoc } from '../components/PolicyDoc'
import { retentionSections } from '../data/data-retention'

export default function DataRetentionPage() {
  return <PolicyDoc
    longTitle
    title={<>Data Retention &amp; Deletion <em>Policy</em></>}
    lead="How MXR manages the retention, archiving, deletion, and anonymisation of personal data."
    sections={retentionSections}
    contactLabel="Questions about data retention?" />
}

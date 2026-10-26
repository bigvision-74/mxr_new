import { PolicyDoc } from '../components/PolicyDoc'
import { equalOpportunitiesSections } from '../data/equal-opportunities'

export default function EqualOpportunitiesPage() {
  return <PolicyDoc
    longTitle
    title={<>Equal Opportunities and Discrimination <em>Policy</em></>}
    lead="Our commitment to treating all employees, workers, and job applicants equally."
    sections={equalOpportunitiesSections}
    contactLabel="Questions about equal opportunities?" />
}

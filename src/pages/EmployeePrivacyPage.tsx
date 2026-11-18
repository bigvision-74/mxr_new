import { PolicyDoc } from '../components/PolicyDoc'
import { employeePrivacySections } from '../data/employee-privacy'

export default function EmployeePrivacyPage() {
  return <PolicyDoc
    title={<>Employee Privacy <em>Notice</em></>}
    lead="How MXR collects, uses, and protects the personal data of employees, workers, and contractors in the UK and India."
    sections={employeePrivacySections}
    contactLabel="Questions about your employee data?" />
}

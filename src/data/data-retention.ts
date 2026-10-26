import type { DpSection } from './data-protection'

export const retentionSections: DpSection[] = [
  {
    title: 'Purpose',
    blocks: [
      'This policy sets out how MXR manages the retention, archiving, deletion and anonymisation of personal data. It ensures compliance with the UK GDPR storage limitation principle (Article 5(1)(e)), the Data Protection Act 2018, and applicable financial, tax, employment and safety laws. It applies to all personal data processed in MXR systems and by MXR employees, contractors and sub-processors.',
    ],
  },
  {
    title: 'Principles',
    blocks: [
      { terms: [
        ['Necessity', 'keep data only as long as needed for lawful purposes.'],
        ['Legal compliance', 'honour minimum statutory retention (e.g. finance, HR).'],
        ['Anonymisation / pseudonymisation', 'where possible, replace personal data with non-identifiable data for longer-term analysis.'],
        ['Deletion / disposal', 'ensure secure, irreversible deletion from live systems, archives and physical copies.'],
        ['Consistency', 'apply retention rules consistently across business units.'],
        ['Legal holds', 'suspend deletion if data is needed for actual or potential litigation, audit or regulatory investigation.'],
      ] },
    ],
  },
  {
    title: 'Retention Schedule',
    blocks: [
      'The following baseline applies unless a customer contract specifies different retention (when MXR acts as a processor). Customers may direct MXR to use stricter or longer schedules; MXR will comply and provide deletion certificates where requested.',
      { table: { head: ['Data Category', 'Examples', 'Baseline Retention', 'Legal / Business Basis', 'Disposal Method'], rows: [
        ['Customer Contracts & Account Data', 'MSAs, SOWs, customer contacts', '6 years after contract end', 'Limitation Act 1980 (contractual claims)', 'Secure deletion of digital copies; shred paper'],
        ['Invoices & Finance Records', 'Billing, VAT, payments', '6 years from end of FY', 'HMRC / company law', 'Secure deletion; retain in finance system only'],
        ['Support Tickets & Comms', 'Email, chat, service logs', '3 years from closure', 'Business need / dispute defence', 'Purge from helpdesk system; anonymise if retained'],
        ['System & Security Logs', 'Access logs, auth events', '12–18 months', 'Security forensics', 'Auto-purge from SIEM; overwrite backups'],
        ['Product Telemetry / Usage Metrics', 'Non-essential analytics', '12 months (aggregate thereafter)', 'Minimisation principle', 'Aggregate/anonymise beyond 12m'],
        ['Training Performance Records', 'Scores, attempts, instructor notes', '4 years (unless client specifies)', 'Safety / compliance needs', 'Delete user identifiers; retain anonymised for benchmarking'],
        ['Marketing Contacts (opt-in)', 'Email, preferences', 'Until withdrawal or 2 yrs inactivity', 'PECR consent / soft opt-in', 'Opt-out handling; delete from CRM'],
        ['Job Applicant Data', 'CVs, notes', '6–12 months from completion', 'Employment law / equality claims defence', 'Secure deletion from HR system'],
        ['Employee HR Files', 'Contracts, payroll, leave', '6 years post-employment', 'Employment law', 'Secure delete; shred paper'],
        ['Health & Safety Records', 'Accident reports, training', '3 years from incident', 'H&S legislation', 'Secure deletion'],
      ] } },
    ],
  },
  {
    title: 'Deletion & Anonymisation Methods',
    blocks: [
      { terms: [
        ['Digital data', 'soft-delete followed by hard-delete after a grace period (e.g. 30 days); database purges with audit logs; secure erase tools meeting NIST 800-88 or equivalent; provider-level deletion confirmation for cloud services.'],
        ['Backups', 'immutable backups on rolling cycles; data marked for deletion remains in backup until the cycle expires; no restore solely for deletion purposes.'],
        ['Paper records', 'locked bins until cross-cut shredding; certified destruction providers for bulk disposal.'],
        ['Anonymisation', 'strip identifiers (names, IDs, IPs) while retaining trends; aggregate data to a level that prevents re-identification.'],
      ] },
    ],
  },
  {
    title: 'Legal Holds',
    blocks: [
      'When litigation, investigation or audit is reasonably anticipated, the Privacy Lead (or Legal) issues a Legal Hold Notice. Affected records must be preserved regardless of normal retention rules, the hold ends only when confirmed in writing, and employees must not delete, alter or conceal held records.',
    ],
  },
  {
    title: 'Roles & Responsibilities',
    blocks: [
      { terms: [
        ['Privacy Lead / DPO', 'maintains the master retention schedule; conducts annual review.'],
        ['Data Owners', 'ensure implementation in their systems.'],
        ['IT', 'configure automated deletion jobs and maintain deletion logs.'],
        ['Legal / Compliance', 'issue and manage legal holds.'],
        ['Employees', 'follow deletion procedures and escalate uncertainties.'],
      ] },
    ],
  },
  {
    title: 'Monitoring & Review',
    blocks: [
      { list: [
        'Annual audit of system retention settings',
        'Spot-checks of deletion logs.',
        'Review schedule in line with law/regulation changes.',
        'Report findings to Board/Executive Sponsor.',
      ] },
    ],
  },
  {
    title: 'Policy Compliance',
    blocks: [
      { list: [
        'Violations by employees may result in disciplinary action.',
        'Sub-processors and vendors must meet or exceed MXR retention/deletion obligations (via DPA clauses).',
      ] },
    ],
  },
]

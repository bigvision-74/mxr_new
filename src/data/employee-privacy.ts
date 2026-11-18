import type { DpSection } from './data-protection'

export const employeePrivacySections: DpSection[] = [
  {
    title: 'Document Information',
    blocks: [
      { terms: [
        ['Document Version', '1.0'],
        ['Effective Date', '1 January 2026'],
        ['Applies to', 'All employees, workers, and contractors of Meta Extended Reality Ltd (UK) and MXR India Development Centre.'],
      ] },
    ],
  },
  {
    title: 'Who Is Responsible for Your Information',
    blocks: [
      { terms: [
        ['UK Employees', 'Meta Extended Reality Ltd (MXR), registered at 267 Argyll Avenue, Slough, England, SL1 4HE (Company Number: 13863637), acts as the Data Controller under the UK GDPR and the Data Protection Act 2018.'],
        ['India Employees', 'Bigvision Software Services Pvt Ltd, E-302 Vista Towers, Phase 8A, Mohali, Punjab, acts as the Data Fiduciary under the Digital Personal Data Protection Act, 2023 (DPDP Act), with Meta Extended Reality Ltd acting as joint or group controller for global HR and IT administration.'],
        ['Privacy Contact', 'For any data protection questions, rights requests, or grievances, contact our Information Security & Privacy Lead at team@mxr.ai.'],
      ] },
    ],
  },
  {
    title: 'What We Collect and Where It Comes From',
    blocks: [
      'We collect and process personal data necessary to manage your employment, deliver our services, and maintain information security. This includes:',
      { terms: [
        ['Identity & Contact Details', 'Full name, date of birth, home address, personal email, phone number, nationality, right-to-work documentation, and emergency contact details.'],
        ['Employment, Pay & Tax Records', 'Employment contracts, job title, department, salary, bank account details, National Insurance / PAN / tax identifiers, pension or provident fund details, and statutory deductions.'],
        ['Attendance, Leave & Performance', 'Working hours, annual leave, sickness absence records, appraisal notes, training completions (including mandatory ISO 27001 security awareness training), and disciplinary or grievance records.'],
        ['IT, System & Security Logs', 'Work email accounts, device identifiers, system access logs, IP addresses, authentication events, and software repository activity.'],
      ] },
      'Most of this information comes directly from you during onboarding and employment. We also generate records internally through HR, line managers, and IT systems, or receive relevant updates from payroll providers, benefit administrators, referees, and statutory tax authorities.',
    ],
  },
  {
    title: 'Why We Use Your Information and Our Lawful Bases',
    blocks: [
      'We only process your personal data when permitted by law:',
      { terms: [
        ['Performance of your contract', 'To administer your employment, pay your salary, provide contractual benefits, and allocate work equipment and system access.'],
        ['Legal obligations', 'To comply with UK and Indian employment, tax, social security, health and safety, and immigration laws.'],
        ['Legitimate interests', 'To manage daily business operations, maintain quality management standards, protect our intellectual property and client data, investigate security incidents, and defend legal claims.'],
      ] },
    ],
  },
  {
    title: 'Special Category and Sensitive Personal Data',
    blocks: [
      'Where required by law or necessary for workplace support, we process sensitive information under strict access controls:',
      { terms: [
        ['Health and medical data', 'Used to administer statutory sick pay, assess fitness for work, or implement reasonable workplace adjustments under employment law.'],
        ['Criminal record checks', 'Where required for specific client security clearances, vetting is conducted solely in accordance with applicable statutory rules and retained only for verification purposes.'],
      ] },
    ],
  },
  {
    title: 'Information Security, System Monitoring & Workplace CCTV (ISO 27001)',
    blocks: [
      'To protect MXR personnel, physical premises, confidential client data, and our Information Security Management System (ISMS), we operate the following security controls:',
      { terms: [
        ['IT & Network Monitoring', 'All company-issued devices, corporate networks, cloud environments, email systems, and source code repositories are subject to automated security logging and monitoring. Logs are used to detect unauthorised access, prevent data loss, investigate security incidents, and maintain audit trails in line with ISO 27001.'],
        ['Acceptable Use & Confidentiality', 'Employees must handle all personal and client data in accordance with MXR’s Information Security Policies. Access to HR, payroll, and production systems is strictly restricted by role-based access control (RBAC) and multi-factor authentication (MFA).'],
        ['Physical Access & CCTV (India Office)', 'Our India Development Centre operates electronic door access controls and CCTV cameras in common entryways, corridors, and server/secure areas to protect staff and physical assets. Access logs and CCTV footage are restricted to authorised security and management personnel and are reviewed only for physical security management or incident investigation.'],
      ] },
    ],
  },
  {
    title: 'Who Receives Your Information',
    blocks: [
      { terms: [
        ['Internal Recipients', 'Access is strictly limited on a need-to-know basis to authorised personnel in HR, Finance/Payroll, Senior Management, Line Management, and IT/Information Security.'],
        ['External Recipients', 'We share necessary records with vetted third-party processors including payroll bureaus, pension/benefits providers, cloud hosting and productivity platforms, professional legal/audit advisers, and statutory government authorities (such as HMRC or Indian tax/labour authorities). All third-party processors are bound by written data processing and confidentiality agreements.'],
      ] },
    ],
  },
  {
    title: 'International Access and Data Transfers',
    blocks: ['Because MXR operates across the UK and India, authorised HR, management no personal data is transferred.'],
  },
  {
    title: 'How Long We Keep Your Information',
    blocks: [
      'We retain employee records only for as long as necessary to fulfil the purposes above and meet statutory retention laws:',
      {
        table: {
          head: ['Record Type', 'Retention Period'],
          rows: [
            ['Core Personnel & Contract Records', 'Retained during employment and for 6 years after employment ends (to cover statutory limitation periods for legal claims).'],
            ['Payroll, Tax & Financial Records', 'Retained for 6 years following the end of the relevant financial/tax year in the UK (and 8 years where required under Indian statutory accounting/tax rules).'],
            ['Recruitment Records (Unsuccessful Candidates)', 'Retained for 6 months unless you consent to longer retention.'],
            ['IT Security Logs & CCTV Footage', 'System security logs are retained in accordance with our ISMS Log Retention Schedule (typically 12 months), and office CCTV footage is overwritten on a rolling 30-to-90-day cycle unless preserved for an active security investigation.'],
          ],
        },
      },
    ],
  },
  {
    title: 'Automated Decision-Making',
    blocks: ['MXR does not make hiring, disciplinary, compensation, or termination decisions based solely on automated processing or profiling without human involvement.'],
  },
  {
    title: 'Your Rights and Complaints',
    blocks: [
      'Depending on your location, you have legal rights over your personal information:',
      { terms: [
        ['UK Employees (UK GDPR)', 'You have the right to request access to your data, correct inaccuracies, request erasure or restriction in certain circumstances, object to processing based on legitimate interests, and withdraw consent where consent was given. You may also lodge a complaint with the Information Commissioner’s Office (ICO) at ico.org.uk.'],
        ['India Employees (DPDP Act 2023)', 'You have the right to access a summary of your personal data, request correction or erasure of outdated/inaccurate data, nominate an individual to exercise your rights in the event of incapacity, and seek grievance redressal through team@mxr.ai before escalating to the Data Protection Board of India.'],
      ] },
    ],
  },
  {
    title: 'Changes to This Notice',
    blocks: ['We review this notice annually as part of our ISO 27001 management review. Any material updates will be communicated to all staff via internal channels and updated in our ISMS documentation repository.'],
  },
]

export type DpBlock =
  | string
  | { h: string }
  | { list: string[] }
  | { ordered: string[] }
  | { terms: [string, string][] }
  | { table: { head: string[]; rows: string[][] } }

export type DpSection = { title: string; blocks: DpBlock[] }

export const dpSections: DpSection[] = [
  {
    title: 'Purpose & Scope',
    blocks: [
      'This policy establishes how Meta Extended Reality Ltd (“MXR”) handles, safeguards, and governs personal data relating to customers, prospects, end-users (and others) in all jurisdictions in which it operates, and ensures compliance with the UK GDPR / Data Protection Act 2018.',
      'It applies whenever MXR acts in either of the following capacities:',
      {
        terms: [
          ['Controller', 'deciding purposes and means of processing (e.g. marketing, customer onboarding, billing, user accounts).'],
          ['Processor', 'processing data on behalf of a customer (controller) under contract/instructions (e.g. in delivering the XR platform, analytics, support).'],
        ]
      },
      'This policy applies to all MXR employees, contractors, third parties acting under MXR’s control, and sub-processors engaged by MXR.',
    ],
  },
  {
    title: 'Definitions',
    blocks: [
      {
        table: {
          head: ['Term', 'Meaning'], rows: [
            ['Personal Data', 'Any information relating to an identified or identifiable living individual'],
            ['Special Category Data', 'Includes e.g. health, biometric, racial/ethnic, genetic, etc.'],
            ['Processing', 'Any operation on personal data: collection, use, storage, erasure, transfer, etc.'],
            ['Controller', 'Entity that determines the purposes and means of processing personal data'],
            ['Processor', 'Entity that processes personal data on behalf of a controller'],
            ['Sub-processor', 'A processor engaged by MXR (or another processor) to help perform processing under contract'],
            ['Data Subject', 'The individual whose personal data is processed'],
            ['Data Protection Impact Assessment (DPIA)', 'A process to evaluate risks to individuals’ rights and consider mitigations'],
            ['Transfer', 'Disclosure, access, transmission, or movement of data across geographic boundaries'],
            ['ROPA', 'Records of Processing Activities under Article 30'],
          ]
        }
      },
    ],
  },
  {
    title: 'Roles & Responsibilities',
    blocks: [
      {
        terms: [
          ['Board / Executive Sponsor', 'Overall accountability. Ensures adequate resources, oversight, and that privacy is integrated into strategy.'],
          ['Privacy Lead / DPO', 'Advises on GDPR/DP law, oversees compliance, monitors DPIAs/ROPA, acts as point of contact, arranges audits, reports to senior management.'],
          ['Data Owners / System Owners', 'For each system, application, or business domain, named persons ensure that data processed conforms to policy, approve retention, review access, ensure mapping to ROPA.'],
          ['IT / Engineering / Security Team', 'Implement security controls (encryption, access controls, secure design), assist with audits, logging, incident management.'],
          ['Legal / Contracts / Commercial', 'Ensure DP clauses in contracts, DP due diligence on customers/sub-processors, liability allocations, review DPAs.'],
          ['All Employees & Contractors', 'Adhere to this policy, complete training, follow data handling rules, report incidents or concerns.'],
        ]
      },
    ],
  },
  {
    title: 'Fundamental Principles',
    blocks: [
      'MXR commits to the following principles (as per UK GDPR / DPA 2018):',
      {
        terms: [
          ['Lawfulness, fairness & transparency', 'Process only where there is a valid lawful basis (contract, legitimate interests, consent, legal obligation). Be transparent to data subjects via notices.'],
          ['Purpose limitation', 'Only use data for specified purposes; not repurpose without new legal basis.'],
          ['Data minimisation', 'Only collect and retain what is necessary for the purpose.'],
          ['Accuracy', 'Keep data up to date; correct or delete inaccurate data without undue delay.'],
          ['Storage limitation', 'Retain only as long as needed, then delete or anonymise (subject to legal holds).'],
          ['Integrity & confidentiality (security)', 'Protect data against unauthorized or unlawful processing, accidental loss, damage, destruction.'],
          ['Accountability', 'Be able to demonstrate compliance (via logs, ROPA, audits, reviews).'],
        ]
      },
    ],
  },
  {
    title: 'Legal Bases for Processing (Controller Role)',
    blocks: [
      'Here is a matrix of typical processing purposes and their lawful bases:',
      {
        table: {
          head: ['Purpose', 'Data Types', 'Lawful Basis (UK GDPR)', 'Comments / Mitigations'], rows: [
            ['Sales & prospecting', 'Name, contact, role, org', 'Legitimate Interests / Pre-contract', 'You must document LIA (balancing test)'],
            ['Customer onboarding & contract fulfilment', 'Identity, billing, contacts', 'Contract', ','],
            ['Platform usage / user accounts', 'Login data, usage logs', 'Contract / Legitimate Interests', 'For diagnostics/security, LIA; for essential features, contract'],
            ['Product analytics / improvements', 'Aggregated usage metrics', 'Legitimate Interests', 'Allow opt-out or anonymisation where appropriate'],
            ['Marketing communication', 'Email, preferences', 'Consent or Soft Opt-in', 'Respect PECR rules for electronic marketing'],
            ['Finance, billing, tax', 'Payment data, invoices', 'Legal Obligation / Contract', 'Must comply with HMRC, audit, accounting laws'],
            ['Support services', 'Interactions, logs, email', 'Contract / Legitimate Interests', 'Data minimisation and retention controls'],
            ['Security / fraud prevention', 'Access logs, IP, anomalies', 'Legitimate Interests', 'Implement strong safeguards'],
          ]
        }
      },
      'If MXR ever processes special category data, that must be under a further valid condition (e.g. explicit consent, necessary for health & safety) and only with additional safeguards such as encryption, strict access, DPIA, separate logging.',
    ],
  },
  {
    title: 'Transparency & Notice',
    blocks: [
      'MXR shall provide clear, layered privacy notices in all user touchpoints (website, apps, platform, training portals). Notices will include:',
      {
        list: [
          'Identity and contact details of the controller',
          'Purposes and lawful bases',
          'Recipients / categories of recipients (including sub-processors)',
          'International transfer information and safeguards',
          'Retention periods',
          'Rights of data subjects (access, erasure, portability, objection, withdrawal)',
          'Complaint route (via ICO)',
          'Whether provision of data is statutory/contractual and consequences of non-providing',
        ]
      },
      'Where MXR acts as processor under contract, MXR ensures customer’s notice includes appropriate mention of MXR’s processing role.',
    ],
  },
  {
    title: 'Data Subject Rights',
    blocks: [
      'MXR supports the following rights:',
      {
        list: [
          'Right of access',
          'Right of rectification',
          'Right of erasure (right to be forgotten)',
          'Right to restriction of processing',
          'Right to data portability',
          'Right to object (including profiling)',
          'Right to withdraw consent',
        ]
      },
      { h: 'Procedures' },
      {
        ordered: [
          'Receive request (usually via p.khaira@mxr.ai a designated contact or portal).',
          'Verify identity of the requester (avoid disclosing to wrong person).',
          'Determine scope and liaise with relevant systems/data owners.',
          'Respond within statutory deadlines (usually 1 calendar month, unless extended).',
          'Document all steps, communications, and decisions.',
        ]
      },
      'If the request is manifestly unfounded or excessive, MXR may refuse or charge a reasonable fee, documenting the justification.',
    ],
  },
  {
    title: 'Security Measures & Technical & Organisational Controls',
    blocks: [
      'MXR implements and maintains appropriate security measures, such as:',
      {
        terms: [
          ['Access control & segregation', 'role-based access, principle of least privilege'],
          ['Authentication & multi-factor (MFA)', 'for admin or sensitive access'],
          ['Encryption', 'in transit (TLS) and at rest (AES or equivalent)'],
          ['Network security & isolation', 'segmented zones, firewalls, DMZs'],
          ['Secure Development Lifecycle (SDLC)', 'code review, static/dynamic testing, vulnerability scanning'],
          ['Logging & monitoring', 'audit logs, alerting on anomalous activity'],
          ['Backup & disaster recovery', 'regular backup, offsite, tested restores'],
          ['Penetration testing & vulnerability management', 'periodic tests, patching'],
          ['Vendor / Sub-processor risk management', 'due diligence, audits, contract controls'],
          ['Data minimisation & pseudonymisation', 'where possible, to reduce exposure'],
          ['Physical security', 'for any on-prem hardware, access controls, lockable racks'],
          ['Security awareness & training', 'periodic training for all staff'],
          ['Incident response & forensics capability', 'playbooks, roles, evidence collection'],
        ]
      },
      'These controls will be documented in a “Controls Inventory / Controls Map” and reviewed at least yearly or whenever technology changes.',
    ],
  },
  {
    title: 'International Data Transfers',
    blocks: [
      'When personal data is transferred outside the UK (or outside the European Economic Area if applicable), MXR will:',
      {
        list: [
          'Conduct a Transfer Risk Assessment (TRA) to evaluate the destination country’s legal environment and risks to data subjects.',
          'Use approved safeguards such as: UK International Data Transfer Agreement (IDTA); UK Addendum to EU Standard Contractual Clauses; UK-US Data Bridge (for certified US recipients); Binding corporate rules (if applicable).',
          'Document the assessments and controls, and include appropriate clauses in contracts.',
          'Monitor changes (e.g., legal decisions, governmental access in destination) and reassess periodically.',
        ]
      },
    ],
  },
  {
    title: 'Sub-processors',
    blocks: [
      'MXR may engage sub-processors to assist in delivering services (hosting, analytics, support, etc.). The approach:',
      {
        list: [
          'MXR maintains a sub-processor register (published or available on request)',
          'Where possible, customers/controllers are given prior general authorisation to use sub-processors or are asked for specific approval',
          'At least 14 days’ notice (or reasonable period) of any intended new sub-processor, with right to object on reasonable grounds',
          'Contracts with sub-processors must impose equivalent data protection obligations (mirroring Article 28 obligations)',
          'MXR remains fully liable to the controller for sub-processors’ compliance (i.e., you cannot contract away responsibility)',
        ]
      },
    ],
  },
  {
    title: 'Data Breach & Incident Management',
    blocks: [
      'MXR maintains an incident response process:',
      {
        terms: [
          ['Detection & Logging', 'systems alert, or staff report suspected breaches'],
          ['Classification & Triage', 'assess whether it’s a personal data breach, scope, potential harm'],
          ['Containment & Remediation', 'stop further loss, collect evidence'],
          ['Risk Assessment', 'likelihood and severity of harm to individuals'],
          ['Notification to ICO / Supervisory Authority', 'if MXR is controller: notify ICO within 72 hours of becoming aware, unless low risk; if MXR is processor: notify controller without undue delay with full incident details'],
          ['Notification to Affected Individuals', 'if likely high risk, in clear language, specify what happened, mitigation, contact'],
          ['Root cause & post-mortem', 'lessons learned, corrective action, policy updates'],
          ['Record keeping', 'log all breaches, decisions, evidence, remediation'],
        ]
      },
    ],
  },
  {
    title: 'Data Retention, Deletion & Legal Holds',
    blocks: [
      'Refer to MXR’s Data Retention & Deletion Policy for retention periods by data category. High-level rules:',
      {
        list: [
          'Use retention schedules by category',
          'Automated deletion or anonymisation when retention expires',
          'Soft-delete mechanisms with grace periods and audit logs',
          'Backups: retention cycles and secure overwrite, not accessible for normal restores for deletion',
          'For any legal, audit, or regulatory hold, suspend deletion for relevant records until hold is lifted',
        ]
      },
    ],
  },
  {
    title: 'Children & Sensitive Data',
    blocks: [
      'MXR does not knowingly target or provide services directly to children under 16 (unless through customers). Any project involving children requires extra scrutiny, parental consent, and DPIA.',
      'No routine processing of special category or criminal data. If such processing is required in a customer project, MXR will only proceed under explicit consent or another valid Article 9 condition, with heightened safeguards, encryption, limited access, separate logs, and oversight by Privacy Lead.',
    ],
  },
  {
    title: 'Joint Controllers & Data Sharing',
    blocks: [
      'In cases where MXR partners with another entity and jointly determines the purpose and means of processing, MXR will:',
      {
        list: [
          'Define a Joint Controller Agreement clearly allocating responsibilities (transparency, rights handling, security, breach reporting) as per ICO guidance',
          'Ensure that data subjects are informed (in notices) of the joint arrangement and contact points',
          'Coordinate so that data subject rights requests are handled seamlessly',
        ]
      },
    ],
  },
  {
    title: 'Monitoring, Audit & Review',
    blocks: [
      {
        list: [
          'Annual policy review (or upon regulation changes, business changes, major product features)',
          'Quarterly control-check reviews (patching, access logs, vendor reviews)',
          'Independent audits / third-party reviews periodically',
          'Breach drills / tabletop exercises at least annually',
          'Metrics / KPIs: number of DSARs, SLA compliance, training completion rate, number of security findings, number of vendor reviews',
        ]
      },
    ],
  },
  {
    title: 'Disciplinary & Contractual Compliance',
    blocks: [
      'Breaches of this policy by employees or contractors may lead to disciplinary actions, up to termination. For third parties/sub-processors, non-compliance is grounds for contract termination and liability claims.',
    ],
  },
]

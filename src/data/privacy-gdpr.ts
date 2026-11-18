import type { DpSection } from './data-protection'

export const privacyGdprSections: DpSection[] = [
  {
    title: 'Document Information',
    blocks: [
      { terms: [
        ['Document ID & Version', 'ISMS-POL-008 | Version 1.0'],
        ['Effective Date & Review Cycle', '01/01/2026 | Reviewed Annually'],
        ['Data Controller', 'Meta Extended Reality Ltd (UK Company No. 13863637)'],
        ['Privacy & Security Contact', 'navjotkhaira@mxr.ai / privacy@mxr.ai'],
      ] },
    ],
  },
  {
    title: 'Introduction',
    blocks: ['Meta Extended Reality Ltd (‘MXR’, ‘we’, ‘our’ or ‘us’) respects your privacy and is committed to protecting personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and our ISO/IEC 27001:2022 Information Security Management System (ISMS). This Privacy Policy explains how we collect, use, disclose, store, and safeguard personal information when you visit our website (mxr.ai), interact with us, or use our software platforms, AI solutions, augmented, virtual, and mixed reality (AR/VR/MR) applications, immersive room and simulation software, and e-learning platforms.'],
  },
  {
    title: 'Company Information & Locations',
    blocks: [
      'Meta Extended Reality Ltd is the Data Controller responsible for personal data collected through our website, marketing, sales enquiries, recruitment, and corporate operations. Our registered office and operational locations are:',
      { terms: [
        ['UK Head Office & Registered Address', '267 Argyll Avenue, Slough, England, SL1 4HE, United Kingdom (UK Company Number: 13863637)'],
        ['India Development Centre', 'E-302 Vista Towers, Phase 8A, Mohali, Punjab, India (Software Engineering, XR & Simulation Development, QA, and Technical Support)'],
        ['Privacy Contact Email', 'navjotkhaira@mxr.ai (or privacy@mxr.ai)'],
      ] },
      'As an organisation whose core activities do not involve large-scale systematic monitoring of individuals or large-scale processing of special category data, MXR is not required to appoint a statutory Data Protection Officer (DPO) under UK GDPR Article 37. Responsibility for data protection governance and ISO/IEC 27001:2022 privacy compliance sits with the Director (ISMS Lead).',
    ],
  },
  {
    title: 'Scope & Controller vs. Processor Roles',
    blocks: [
      'This policy applies to our website (mxr.ai), customer portals, SaaS platforms, AI-enabled simulation software, AR/VR/MR applications, mobile and web apps, e-learning platforms, customer support services, marketing activities, and business relationships.',
      { terms: [
        ['When MXR acts as a Data Controller', 'MXR acts as a Data Controller when determining how and why personal data is processed for website visitors, B2B sales enquiries, marketing subscribers, suppliers, and job applicants.'],
        ['When MXR acts as a Data Processor', 'When enterprise clients deploy MXR’s e-learning, simulation, or immersive room platforms for their own employees or trainees, MXR acts as a Data Processor on behalf of the client. In those cases, personal data is processed strictly in accordance with our written Data Processing Agreement (DPA) and the client’s documented instructions.'],
      ] },
    ],
  },
  {
    title: 'Personal Data We Collect',
    blocks: [
      'Depending on how you interact with MXR, we may collect and process the following categories of personal data (detailed further in Appendix A):',
      { terms: [
        ['Identity & Account Data', 'Full name, job title, organisation name, user ID, and encrypted authentication credentials.'],
        ['Contact & Billing Data', 'Business email address, telephone number, business postal address, and billing contact details.'],
        ['Technical & Telemetry Data', 'IP address, browser type and version, operating system, device identifiers, session diagnostics, and application crash/error logs.'],
        ['Support & Enquiry Data', 'Enquiries submitted via website forms, demo requests, helpdesk tickets, email correspondence, and product feedback.'],
        ['XR & AI Simulation Interaction Data', 'User-submitted prompts, session interactions, and local spatial tracking parameters required to operate interactive XR and AI simulation features.'],
        ['Marketing & Event Data', 'Newsletter subscriptions, event registration details, and communication preferences.'],
      ] },
      'Payment card details are processed directly by authorised, PCI-DSS compliant payment service providers and are never stored on MXR systems.',
    ],
  },
  {
    title: 'How We Collect Information',
    blocks: [
      { terms: [
        ['Directly from you', 'When you complete a form on mxr.ai, request a product demonstration, create a platform account, enter into a contract with us, or contact our support team.'],
        ['Automatically', 'Through server logs, application telemetry, and strictly necessary or consented cookies when you browse our website or use our software platforms.'],
        ['From third parties', 'From your employer or organisation (where an enterprise client provisions an account for you), authorised business partners, or publicly available B2B sources such as LinkedIn or Companies House.'],
      ] },
    ],
  },
  {
    title: 'How We Use Your Information & Lawful Bases',
    blocks: [
      'Under UK GDPR Article 6, we only process personal data where a valid lawful basis applies:',
      { terms: [
        ['Performance of a Contract', 'To register user accounts, deliver contracted software and simulation platforms, provide customer support, and process invoicing.'],
        ['Legitimate Interests', 'To respond to B2B enquiries and demo requests, maintain network and application security, prevent fraud, improve software stability, and administer business operations (balanced against your privacy rights).'],
        ['Legal Obligation', 'To comply with statutory tax, accounting, corporate, and regulatory obligations.'],
        ['Consent', 'To place non-essential analytics cookies on your device or send marketing communications where explicit consent is required.'],
      ] },
    ],
  },
  {
    title: 'AI, Simulation, and XR Software Services',
    blocks: [
      'Certain MXR applications incorporate artificial intelligence, natural language processing, computer vision, or extended reality (AR/VR/MR) technologies to deliver interactive training and simulation experiences:',
      { terms: [
        ['On-Device Spatial Processing', 'Real-time environmental depth mapping, room boundary layouts, and hand/head tracking coordinates used for XR rendering are processed locally on the user’s device in real time and are not retained or stored on MXR cloud servers.'],
        ['AI Simulation Inputs', 'Where an application sends user inputs (such as text or voice prompts) to cloud AI models to generate simulation responses, data is transmitted over encrypted channels, processed solely to deliver the requested feature, and is never used to train public third-party AI models without explicit contractual agreement.'],
      ] },
    ],
  },
  {
    title: 'Cookies and Analytics',
    blocks: ['Our website uses strictly necessary cookies required for core site functionality and security. Analytics or performance cookies are only activated after you provide consent via our website cookie banner. You can manage or withdraw your cookie preferences at any time through your browser settings or our cookie control tool.'],
  },
  {
    title: 'Sharing Personal Data',
    blocks: [
      'We do not sell, rent, or trade personal data. We share personal information only where necessary with:',
      { terms: [
        ['MXR Group Personnel', 'Authorised employees and contractors across MXR’s UK Head Office and India Development Centre who require access to perform their engineering, support, or administrative duties under strict confidentiality obligations.'],
        ['Trusted Sub-Processors & Service Providers', 'Vetted cloud hosting providers, CRM and email platforms, helpdesk systems, and payment processors acting under written Data Processing Agreements.'],
        ['Legal & Regulatory Authorities', 'Law enforcement, regulators (such as the UK ICO), or tax authorities where required by applicable law.'],
      ] },
    ],
  },
  {
    title: 'International Data Transfers',
    blocks: [
      'Because MXR operates from both our UK Head Office in Slough and our India Development Centre, authorised personnel in India may access personal data (such as support tickets, system logs, or project administration records) to deliver software development and technical support services. Additionally, some of our cloud infrastructure providers operate data centres outside the United Kingdom.',
      'Whenever personal data is transferred outside the UK, MXR ensures an equivalent level of data protection by implementing approved legal safeguards, including the UK International Data Transfer Agreement (IDTA), the UK Addendum to the EU Standard Contractual Clauses (SCCs), or transfers to countries covered by UK adequacy regulations, reinforced by strong encryption and role-based access controls.',
    ],
  },
  {
    title: 'Information Security (ISO/IEC 27001:2022)',
    blocks: [
      'MXR maintains an Information Security Management System (ISMS) aligned with ISO/IEC 27001:2022. We protect personal data using layered technical and organisational controls, including:',
      { list: [
        'Encryption of data in transit (TLS 1.2+) and at rest (AES-256).',
        'Mandatory Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC) enforcing least privilege.',
        'Segregation of development, testing, and production environments.',
        'Centralised security logging, vulnerability management, and automated encrypted backups.',
        'Mandatory annual security and data protection training for all UK and India personnel.',
      ] },
    ],
  },
  {
    title: 'Data Retention',
    blocks: ['We retain personal data only for as long as necessary to fulfil the purposes set out in this policy and to meet legal, accounting, or reporting obligations. Specific retention periods are defined in Appendix A and our internal ISMS Retention Schedule. Once retention periods expire, personal data is securely deleted or irreversibly anonymised.'],
  },
  {
    title: 'Your Privacy Rights',
    blocks: [
      'Under UK GDPR, you have the right to:',
      { list: [
        'Request a copy of the personal data we hold about you (Right of Access).',
        'Request correction of inaccurate or incomplete data (Right to Rectification).',
        'Request deletion of your personal data where there is no lawful reason for us to continue holding it (Right to Erasure).',
        'Request restriction of processing or object to processing based on legitimate interests (Right to Restrict / Object).',
        'Request transfer of your data in a structured, machine-readable format (Right to Data Portability).',
        'Withdraw consent at any time where processing is based on consent.',
      ] },
      'To exercise any of these rights, please email navjotkhaira@mxr.ai. We may request proof of identity before fulfilling your request and will respond within one calendar month.',
    ],
  },
  {
    title: 'Children’s Privacy',
    blocks: ['MXR’s website, software platforms, and XR/simulation solutions are designed for business and adult users and are not intended for children under the age of 16. We do not knowingly collect personal data from children. If we become aware that personal data from a child has been collected without appropriate authorisation, we will delete it immediately.'],
  },
  {
    title: 'Third-Party Links & Policy Updates',
    blocks: ['Our website may contain links to third-party websites whose privacy practices are governed by their own policies. We review this Privacy Policy annually as part of our ISO/IEC 27001:2022 management review and publish any updates on mxr.ai with a revised effective date.'],
  },
  {
    title: 'Complaints',
    blocks: ['If you have any concerns about how MXR handles your personal data, please contact us first at navjotkhaira@mxr.ai so we can resolve your query. You also have the right to lodge a complaint with the UK supervisory authority, the Information Commissioner’s Office (ICO), at www.ico.org.uk or by telephone on 0303 123 1113.'],
  },
  {
    title: 'Appendix A – Categories of Personal Data, Lawful Bases & Retention',
    blocks: [
      'The table below summarises the categories of personal data processed by MXR as a Data Controller, the purpose and UK GDPR lawful basis for each category, and our standard retention periods:',
      { table: { head: ['Data Category', 'Examples of Personal Data', 'Purpose & Lawful Basis', 'Retention Period'], rows: [
        ['Identity & Account Data', 'Full name, work email, job title, organisation name, user ID, encrypted login credentials.', 'Purpose: Account creation, authentication, and platform access.\nLawful Basis: Performance of a contract; Legitimate interests.', 'Duration of active account/contract, plus 30 days following a deletion request.'],
        ['Contact & Billing Data', 'Business address, telephone number, billing contact details, invoice records.', 'Purpose: Contract administration, invoicing, and service notices.\nLawful Basis: Performance of a contract; Legal obligation.', '6 years following the end of the relevant financial year (UK statutory tax requirement).'],
        ['Technical & Telemetry Data', 'IP address, browser type, OS version, device identifiers, session diagnostics, application error logs.', 'Purpose: System performance optimisation, security monitoring, and troubleshooting.\nLawful Basis: Legitimate interests (maintaining system security).', 'Standard telemetry deleted or anonymised after 180 days; security audit logs retained for 12 months.'],
        ['Support & Enquiry Data', 'Website contact forms, demo requests, helpdesk tickets, support correspondence.', 'Purpose: Responding to sales enquiries and resolving technical support requests.\nLawful Basis: Legitimate interests; Performance of a contract.', '3 years from closure of the support ticket or last business interaction.'],
        ['XR & AI Simulation Interaction Data', 'Transient device spatial coordinates, user text or voice prompts submitted within AI simulation modules.', 'Purpose: Delivering requested interactive XR and AI simulation features.\nLawful Basis: Performance of a contract; Consent.', 'Spatial tracking data is processed locally on-device and never stored by MXR. Cloud AI prompts are deleted or anonymised within 30 days.'],
        ['Marketing & Event Data', 'Name, work email, company name, opt-in preferences, event registrations, newsletter engagement.', 'Purpose: Sending product updates, newsletters, and event invitations.\nLawful Basis: Consent (or UK PECR B2B soft opt-in where applicable).', 'Retained until consent is withdrawn or the user unsubscribes (immediate suppression).'],
        ['Recruitment Data', 'CV/resume, cover letter, interview notes, right-to-work verification, referee details.', 'Purpose: Assessing candidate suitability and managing recruitment.\nLawful Basis: Steps prior to entering a contract; Legitimate interests; Legal obligation.', '6 months after recruitment decision for unsuccessful candidates (unless consent is given for longer retention).'],
      ] } },
    ],
  },
]

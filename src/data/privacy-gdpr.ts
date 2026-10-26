import type { DpSection } from './data-protection'

export const privacyGdprSections: DpSection[] = [
  {
    title: 'Introduction',
    blocks: ['Meta Extended Reality Ltd (‘Meta XR’, ‘we’, ‘our’ or ‘us’) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, store and protect personal information when you visit our website, use our software, AI platforms, XR applications, mobile applications or interact with us.'],
  },
  {
    title: 'Company Information',
    blocks: [
      { terms: [
        ['Company', 'Meta Extended Reality Ltd'],
        ['Registered Address', '267 Argyll Avenue, Slough, England, SL1 4HE'],
        ['Company Number', '13863637'],
        ['Country', 'United Kingdom'],
        ['Privacy Email', 'navjotkhaira@mxr.ai'],
      ] },
      'Data Compliance: As a small organisation whose core activities do not involve large-scale systematic tracking or large-scale special category data storage, we do not require a formally designated Data Protection Officer (DPO) under UK GDPR Article 37. Our internal Data Privacy Team directly manages all data compliance workflows and rights requests.',
    ],
  },
  {
    title: 'Scope',
    blocks: ['This policy applies to our website, customer portals, SaaS platforms, AI services, AR/VR/MR applications, mobile apps, software products, support services, marketing activities, recruitment and business relationships.'],
  },
  {
    title: 'Personal Data We Collect',
    blocks: ['We may collect: names, contact details, organisation details, login credentials, billing details, device information, IP address, browser information, cookies, support requests, product usage information, event registrations and any information you voluntarily provide. Payment card details are processed by authorised payment providers and are not stored by us.'],
  },
  {
    title: 'How We Collect Information',
    blocks: ['We collect information directly from you, automatically through your use of our services, from cookies and analytics technologies, and from trusted business partners or publicly available sources where permitted by law.'],
  },
  {
    title: 'How We Use Your Information',
    blocks: ['We use personal data to provide and improve our services, create and manage accounts, deliver customer support, process payments, communicate with you, maintain security, comply with legal obligations, develop new products, conduct analytics and administer our business.'],
  },
  {
    title: 'Lawful Basis',
    blocks: ['We process personal data under UK GDPR using one or more lawful bases including: performance of a contract, legitimate interests, legal obligation, consent and, where applicable, vital interests.'],
  },
  {
    title: 'AI and XR Services',
    blocks: ['Some MXR products use artificial intelligence, speech recognition, computer vision or extended reality technologies. Where these features process personal data, they are used only for providing requested functionality, improving user experience or delivering contracted services. We use open-source data in avatars and localised trained models with customer-related agreed data.'],
  },
  {
    title: 'Cookies and Analytics',
    blocks: ['Our website uses essential cookies to operate correctly and may use analytics cookies to understand website performance. Non-essential cookies will only be used where required consent has been obtained. Please refer to our Cookie Policy for further details.'],
  },
  {
    title: 'Sharing Personal Data',
    blocks: ['We may share personal information with carefully selected service providers such as cloud hosting providers, payment processors, email providers, CRM platforms and IT support providers. We require these providers to protect personal data and only process it on our instructions where applicable. We do not sell personal data.'],
  },
  {
    title: 'International Transfers',
    blocks: ['If personal data is transferred outside the United Kingdom, appropriate safeguards such as the UK International Data Transfer Agreement, adequacy regulations or other lawful transfer mechanisms will be implemented.'],
  },
  {
    title: 'Data Security',
    blocks: ['We implement technical and organisational measures including encryption where appropriate, secure authentication, role-based access controls, backups, monitoring, vulnerability management and staff awareness training to protect personal information.'],
  },
  {
    title: 'Data Retention',
    blocks: ['We retain personal data only for as long as necessary to fulfil the purposes described in this policy, satisfy contractual obligations and comply with legal or regulatory requirements. Internal retention schedules define specific retention periods for different categories of information.'],
  },
  {
    title: 'Your Rights',
    blocks: ['You have the right to request access, rectification, erasure, restriction, portability, objection to processing and withdrawal of consent where applicable. Requests should be sent to navjotkhaira@mxr.ai. We will ask you to verify your identity before responding.'],
  },
  {
    title: 'Children’s Privacy',
    blocks: ['Our core services, software platforms, and XR software packages are directed at corporate entities and adults. They are not intended for use by children. We do not knowingly collect data from children under the age of 13. If we discover that any personal data from an individual under 13 has been collected without verifiable parental authorization, it will be deleted immediately from our infrastructure.'],
  },
  {
    title: 'Third-Party Websites',
    blocks: ['Our website or applications may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.'],
  },
  {
    title: 'Changes to This Policy',
    blocks: ['We may update this Privacy Policy from time to time. The latest version will always be published on our website with the updated revision date.'],
  },
  {
    title: 'Contact and Complaints',
    blocks: [
      'For privacy enquiries contact:',
      { list: ['Privacy Team', 'Meta Extended Reality Ltd', '267 Argyll Avenue, Slough, England, SL1 4HE', 'navjotkhaira@mxr.ai'] },
      'If you are dissatisfied with how we handle your personal data, you have the right to lodge a complaint with the UK Information Commissioner’s Office (ICO).',
    ],
  },
  {
    title: 'Appendix A – Typical Categories of Personal Data',
    blocks: [
      { table: { head: ['Category', 'Example', 'Purpose', 'Retention'], rows: [
        ['Identity', 'Full name, user ID, profile picture, Meta account credentials.', 'Account creation, identity verification, cross-platform profiles, and user authentication.', 'For the duration of the active account lifecycle, plus 30 days following a deletion request.'],
        ['Contact', 'Email address, mobile phone number, billing address.', 'Transaction receipts, service alerts, policy updates, and identity recovery.', 'For the duration of the active account lifecycle, plus 30 days following a deletion request.'],
        ['Technical & Telemetry', 'IP address, device serial number, OS version, Wi-Fi signal strength, error logs.', 'System performance optimization, security monitoring, crash reporting, and regional access control.', 'Standard system logs are automatically deleted or fully anonymized after 180 days.'],
        ['Support', 'Customer helpdesk tickets, chat logs, diagnostic files, hardware RMA records.', 'Troubleshooting technical issues, resolving billing disputes, and product safety reviews.', '3 years from the closure of the support ticket, unless required longer for legal claims.'],
        ['Marketing', 'Opt-in preferences, ad engagement logs, promotional email clicks.', 'Delivery of personalized newsletters, localized event invitations, and tailored app recommendations.', 'Retained until consent is withdrawn (immediate suppression upon user opt-out).'],
        ['Spatial & Environmental Data (AI-Generated)', 'Raw camera feeds, point clouds, 3D room layouts, physical boundary dimensions.', 'On-Device AI: Obstacle avoidance, inside-out tracking, and environmental depth mapping.', 'Raw video/imagery is deleted instantly. Calculated spatial point clouds remain local to the device.'],
        ['Biometric Inputs & Models (AI-Generated)', 'Numerical tracking models of hand gestures, body posture, and eye movement.', 'On-Device AI: Real-time avatar animation, hands-free UI navigation, and gaze-directed rendering.', 'Raw infrared and camera data is deleted instantly on-device. Abstract mathematical tracking models are wiped upon powering down the headset.'],
        ['Multimodal Vision Data (AI-Generated)', 'Cloud-transmitted camera frames of real-world objects or text.', 'Cloud AI: Visual search processing, real-time translations, and AI-driven object description.', 'Automatically anonymized and decoupled from user IDs immediately after processing. Deleted within 30 days.'],
        ['Voice & Audio Logs (AI-Generated)', 'Voice command audio recordings, transcription text, ambient noise maps.', 'Cloud AI: Processing natural language commands (e.g., "Hey Meta") and training speech recognition.', 'Text transcripts are saved to the account profile. Audio voice recordings are automatically deleted within 30 days by default.'],
      ] } },
    ],
  },
]

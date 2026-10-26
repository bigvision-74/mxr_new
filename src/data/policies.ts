export type Policy = { slug: string; title: string; summary: string; category: string }

export const policies: Policy[] = [
  { slug: 'acceptable-use-policy', category: 'Legal & Compliance', title: 'Acceptable Use Policy', summary: 'The permitted and prohibited uses of our virtual spaces, software, developer tools, and generative AI engines.' },
  { slug: 'carbon-reduction-plan', category: 'Sustainability', title: 'Carbon Reduction Plan & Evergreen Sustainable Supplier Assessment (Level 1)', summary: 'Our PPN 006/21-aligned Carbon Reduction Plan, emissions baseline, and commitment to Net Zero by 2050.' },
  { slug: 'cookie-policy', category: 'Privacy & Data', title: 'Cookie Policy', summary: 'How MXR.AI uses cookies and similar tracking technologies on our website and online portals.' },
  { slug: 'data-protection-policy', category: 'Privacy & Data', title: 'Data Protection Policy (Controller & Processor)', summary: 'How MXR handles, safeguards, and governs personal data as a controller and processor under UK GDPR / DPA 2018.' },
  { slug: 'data-retention-and-deletion-policy', category: 'Privacy & Data', title: 'Data Retention & Deletion Policy', summary: 'How MXR manages the retention, archiving, deletion, and anonymisation of personal data.' },
  { slug: 'disaster-recovery-plan', category: 'Security & IT', title: 'Disaster Recovery Plan', summary: 'Our business continuity and disaster recovery procedures to ensure minimum disruption following any unforeseen disaster.' },
  { slug: 'disciplinary-policy', category: 'People & Workplace', title: 'Disciplinary Policy', summary: 'Our disciplinary procedure setting out the standards of conduct expected of staff and the process for addressing misconduct.' },
  { slug: 'environmental-policy', category: 'Sustainability', title: 'Environmental Policy', summary: 'Our approach to minimising environmental impact across our offices, supply chain, and operations.' },
  { slug: 'equal-opportunities-and-discrimination-policy', category: 'People & Workplace', title: 'Equal Opportunities and Discrimination Policy', summary: 'Our commitment to treating all employees, workers, and job applicants equally.' },
  { slug: 'health-and-safety-policy', category: 'People & Workplace', title: 'Health and Safety Policy', summary: 'Our health and safety policy statement, including display screen equipment (DSE) safety, first aid, fire, and accident procedures.' },
  { slug: 'health-and-safety-policy-remote-hybrid', category: 'People & Workplace', title: 'Health and Safety Policy Summary (Remote & Hybrid Tech Workers)', summary: 'Our health and safety obligations and guidelines for remote and hybrid technology workers.' },
  { slug: 'it-policy', category: 'Security & IT', title: 'IT Policy', summary: 'Acceptable use of technology and IT resources within MXR.' },
  { slug: 'it-security-policy', category: 'Security & IT', title: 'IT Security Policy', summary: 'How MXR protects its assets, data, and intellectual property from security threats.' },
  { slug: 'modern-slavery-statement', category: 'Legal & Compliance', title: 'Modern Slavery and Human Trafficking Statement', summary: 'Our commitment to combating modern slavery and human trafficking in our business and supply chains.' },
  { slug: 'mxr-data-protection-policy', category: 'Privacy & Data', title: 'MXR Data Protection Policy', summary: 'How MXR protects, processes, and governs personal data across its products and services.' },
  { slug: 'privacy-policy', category: 'Privacy & Data', title: 'Privacy Policy', summary: 'How we collect, use, and protect your personal data in line with our legal obligations.' },
  { slug: 'privacy-policy-gdpr', category: 'Privacy & Data', title: 'Privacy Policy (MXR-GDPR-001)', summary: 'Detailed GDPR privacy policy covering personal data collection, AI/XR services, data sharing, retention, and your rights.' },
  { slug: 'security-policy', category: 'Security & IT', title: 'Security Policy', summary: 'Security requirements for the proper and secure use of Information Technology services, covering IT assets, access control, passwords, email, internet, remote access, and outsourcing.' },
  { slug: 'software-lifecycle-and-deprecation-policy', category: 'Legal & Compliance', title: 'Software Lifecycle & Deprecation Policy', summary: 'Our software lifecycle phases, support timelines, and deprecation process for XR applications, enterprise builds, and training simulations.' },
  { slug: 'terms-of-sale-and-licensing', category: 'Legal & Compliance', title: 'Terms of Sale & Licensing Agreement', summary: 'Terms governing the purchase, licensing, billing, and deployment of our software, XR platforms, and AI services.' },
  { slug: 'accessibility-statement', category: 'Legal & Compliance', title: 'Website Accessibility Statement', summary: 'Our commitment to digital accessibility, WCAG 2.2 AA targets, platform limitations, and how to give accessibility feedback.' },
  { slug: 'whistleblowing-policy', category: 'People & Workplace', title: 'Whistleblowing Policy', summary: 'How workers can raise concerns about malpractice or wrongdoing in the workplace, confidentially and without fear of reprisals.' },
]

export const policyCategories = ['Privacy & Data', 'Legal & Compliance', 'Security & IT', 'People & Workplace', 'Sustainability']

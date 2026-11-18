import type { DpSection } from './data-protection'

const accessControls: [string, string] = ['Access controls', 'Access to sensitive data and IT systems must be limited to authorised personnel through the use of passwords, multi-factor authentication, and role-based access controls. All users must have unique login credentials, and the use of generic accounts must be prohibited. Passwords must be complex, and employees must be trained to avoid using easily guessable passwords. Multi-factor authentication must be used for all access to sensitive data and IT systems.']
const accessControlsPc: [string, string] = ['Access controls', accessControls[1].replace('Multi-factor authentication must be used', 'Multifactor authentication must be used')]
const encryption: [string, string] = ['Encryption', 'Sensitive data must be encrypted both in transit and at rest to prevent unauthorised access. Data must be encrypted using industry-standard encryption protocols, such as AES or RSA. Encryption keys must be stored securely and accessed only by authorised personnel.']
const updates = (what: string): [string, string] => ['Regular software updates', `All software must be updated regularly to patch vulnerabilities and reduce the risk of exploitation. This includes ${what}, as well as any applications or software that is installed on the ${what.includes('firewall') ? 'device' : 'server'}.`]

export const itSecuritySections: DpSection[] = [
  {
    title: 'Document Information',
    blocks: [
      { terms: [
        ['Document ID', 'ISMS-POL-001'],
        ['Version', '1.0'],
        ['Effective Date', '01/01/2026'],
        ['Next Review Date', '31/12/2026'],
        ['Policy Owner', 'Director (ISMS Lead)'],
        ['Approval Authority', 'Director / Senior Management'],
        ['Standard Alignment', 'ISO/IEC 27001:2022'],
        ['Classification', 'Internal — Mandatory'],
      ] },
    ],
  },
  {
    title: 'Policy Statement & Commitment',
    blocks: [
      'Meta Extended Reality Ltd (MXR) is committed to safeguarding the confidentiality, integrity, and availability of all corporate information, intellectual property, source code, and client data entrusted to our care. Information security is integral to our design, development, integration, testing, deployment, and support of augmented, virtual, and mixed reality applications, immersive room and simulation software, and web, mobile, and e-learning platforms.',
      'In accordance with ISO/IEC 27001:2022, MXR formally commits to:',
      { terms: [
        ['Legal & Regulatory Compliance', 'Satisfying all applicable legal, statutory, regulatory, and contractual requirements relating to information security and data protection (including UK GDPR, the Data Protection Act 2018, and India’s Digital Personal Data Protection Act 2023).'],
        ['Security Objectives', 'Establishing, monitoring, and reviewing measurable Information Security Objectives at least annually.'],
        ['Continual Improvement', 'Continually improving the Information Security Management System (ISMS) to adapt to emerging cyber threats, technological changes, and business growth.'],
      ] },
    ],
  },
  {
    title: 'Purpose',
    blocks: ['This policy establishes the mandatory governance framework, security rules, and operational controls required to protect MXR, its personnel, its physical offices, and its clients against internal and external information security risks.'],
  },
  {
    title: 'Scope',
    blocks: [
      'This policy applies without exception to all MXR personnel—including Directors, permanent employees, contractors, temporary workers, interns, and third-party partners granted access to MXR information systems—operating from MXR’s designated office premises:',
      { terms: [
        ['UK Head Office', '267 Argyll Avenue, Slough, England, SL1 4HE'],
        ['India Development Centre', 'E-302 Vista Towers, Phase 8A, Mohali, Punjab'],
      ] },
      { h: 'Office-Based Operational Requirement' },
      'Remote or home working is not permitted under standard operational arrangements. All day-to-day operational and development activities are conducted on-site from MXR’s designated offices. Any exceptional, temporary off-site access requires prior written authorisation from the Director.',
    ],
  },
  {
    title: 'Components and Security Controls',
    blocks: [
      'The following components and security controls must be implemented to protect Meta Extended Reality’s assets:',
      { h: 'Windows Server' },
      'The Windows server is the central hub for Meta Extended Reality’s IT systems. As such, it is critical that it is properly secured to prevent unauthorised access and maintain the integrity of data.',
      { terms: [
        accessControls,
        encryption,
        ['Regular software updates', 'All software must be updated regularly to patch vulnerabilities and reduce the risk of exploitation. This includes the Windows operating system, as well as any applications or software that is installed on the server.'],
      ] },
      { h: 'PCs and Laptops' },
      'All PCs and laptops used by Meta Extended Reality employees must be properly secured to prevent unauthorised access and maintain the integrity of data.',
      { terms: [
        accessControlsPc,
        encryption,
        ['Bitdefender antivirus software', 'All devices used by Meta Extended Reality employees must have Bitdefender antivirus software installed to protect against malware. Antivirus software must be updated regularly to ensure that it is effective in detecting and preventing malware infections.'],
      ] },
      { h: 'SONICWALL Firewall' },
      'The SonicWall firewall is critical to protecting Meta Extended Reality\'s network from external threats',
      { terms: [
        ['Firewall', 'A SonicWall firewall must be in place to protect the network from external threats. The firewall must be configured to block all incoming traffic except for traffic that is explicitly allowed. This includes traffic from known IP addresses and ports that are used for legitimate business purposes.'],
        updates('the SonicWall firewall'),
      ] },
      { h: 'Windows SharePoint for Cloud Storage' },
      'Meta Extended Reality uses Windows SharePoint for cloud storage. All data stored in the cloud must be properly secured and access must be restricted to authorised users.',
      { terms: [
        accessControls,
        encryption,
        updates('the Windows SharePoint software'),
      ] },
      { h: 'Network Connections' },
      'All network connections used by Meta Extended Reality must be properly secured to prevent unauthorised access and maintain the integrity of data.',
      { terms: [
        ['Encrypted data in transit', 'All data must be encrypted during transit to prevent unauthorised access. This includes data that is transmitted over the internet, as well as data that is transmitted over private networks.'],
        accessControls,
      ] },
    ],
  },
  {
    title: 'Employee Security Training',
    blocks: [
      'All employees of Meta Extended Reality must receive regular security training to prevent social engineering attacks and maintain security awareness.',
      { terms: [
        ['Regular security training', 'All employees must receive regular security training to prevent social engineering attacks and maintain security awareness. This includes training on how to create secure passwords, how to identify phishing emails, and how to recognise other types of social engineering attacks.'],
        ['Social engineering prevention', 'Employees must be aware of the risks of social engineering attacks and be trained on how to prevent them. This includes training on how to verify the identity of a caller or email sender before providing sensitive information, and how to recognise suspicious behaviour.'],
      ] },
    ],
  },
  {
    title: 'Incident Response Plan',
    blocks: [
      'An incident response plan must be in place to contain and minimize the impact of security incidents.',
      { terms: [
        ['Procedures for containing incidents', 'In the event of a security incident, procedures must be in place to contain the incident and minimize the impact. This includes isolating affected systems, shutting down affected servers, and notifying relevant personnel.'],
        ['Restoring systems and data', 'Procedures must be in place to restore systems and data in the event of a security incident. This includes restoring from backups and reinstalling software as necessary.'],
        ['Notifying relevant parties', 'Procedures must be in place to notify relevant parties of a security incident, such as law enforcement or customers. This includes notifying affected customers of any data breaches or security incidents that may impact them.'],
      ] },
    ],
  },
  {
    title: 'Compliance',
    blocks: [
      'Meta Extended Reality must comply with all legal and regulatory requirements that apply to the organisation.',
      { terms: [
        ['Aligned with legal and regulatory requirements', 'This IT security policy must be aligned with any legal or regulatory requirements that apply to the organisation, such as the GDPR or the California Consumer Privacy Act. This includes requirements around data privacy, data protection, and cybersecurity.'],
      ] },
    ],
  },
  {
    title: 'Monitoring and Testing',
    blocks: [
      'Regular monitoring and testing of IT systems and security controls must be conducted to identify potential vulnerabilities or weaknesses. This includes penetration testing and vulnerability scanning, as well as regular audits of access logs to ensure that only authorised personnel are accessing sensitive data',
      { terms: [
        ['Penetration testing', 'Regular penetration testing must be conducted to identify potential vulnerabilities in Meta Extended Reality\'s IT systems. This includes both internal and external penetration testing to identify potential attack vectors.'],
        ['Vulnerability scanning', 'Regular vulnerability scanning must be conducted to identify potential vulnerabilities in Meta Extended Reality\'s IT systems. This includes scanning for known vulnerabilities in software and hardware used by the organisation.'],
        ['Access log audits', 'Regular audits of access logs must be conducted to ensure that only authorised personnel are accessing sensitive data. This includes reviewing login records, file access logs, and other access records to identify potential unauthorised access.'],
      ] },
    ],
  },
  {
    title: 'Review and Update',
    blocks: [
      'This IT security policy must be reviewed and updated on an annual basis or as necessary to reflect changes in the IT environment or threat landscape. This ensures that Meta Extended Reality\'s IT security measures remain up-to-date and effective in protecting against potential security threats.',
      { terms: [
        ['Annual review', 'This IT security policy must be reviewed on an annual basis to ensure that it remains up-to-date and effective in protecting against potential security threats. Any necessary updates must be made as part of the review process.'],
        ['Ad hoc updates', 'This IT security policy must be updated as necessary to reflect changes in the IT environment or threat landscape. This includes updating the policy to reflect changes in software or hardware used by the organisation, as well as changes in legal or regulatory requirements.'],
      ] },
    ],
  },
  {
    title: 'Conclusion',
    blocks: ['Meta Extended Reality’s IT security policy is critical to protecting the organisation’s assets, data, and intellectual property from potential security threats. By following the guidelines set forth in this policy, employees and contractors can help maintain a secure IT environment that protects against unauthorised access, maintains the integrity of data, and ensures the availability of IT systems. Regular monitoring, testing, and updating of the policy are necessary to ensure that Meta Extended Reality’s IT security measures remain up-to-date and effective in protecting against potential security threats.'],
  },
]

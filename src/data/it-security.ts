import type { DpSection } from './data-protection'

const accessControls: [string, string] = ['Access controls', 'Access to sensitive data and IT systems must be limited to authorized personnel through the use of passwords, multi-factor authentication, and role-based access controls. All users must have unique login credentials, and the use of generic accounts must be prohibited. Passwords must be complex, and employees must be trained to avoid using easily guessable passwords. Multi-factor authentication must be used for all access to sensitive data and IT systems.']
const accessControlsPc: [string, string] = ['Access controls', accessControls[1].replace('Multi-factor authentication must be used', 'Multifactor authentication must be used')]
const encryption: [string, string] = ['Encryption', 'Sensitive data must be encrypted both in transit and at rest to prevent unauthorized access. Data must be encrypted using industry-standard encryption protocols, such as AES or RSA. Encryption keys must be stored securely and accessed only by authorized personnel.']
const updates = (what: string): [string, string] => ['Regular software updates', `All software must be updated regularly to patch vulnerabilities and reduce the risk of exploitation. This includes ${what}, as well as any applications or software that is installed on the ${what.includes('firewall') ? 'device' : 'server'}.`]

export const itSecuritySections: DpSection[] = [
  {
    title: 'Purpose',
    blocks: ['The purpose of this IT security policy is to ensure the protection of Meta Extended Reality’s assets, data, and intellectual property from potential security threats. This policy aims to provide a comprehensive set of guidelines that all employees and contractors must follow to maintain a secure IT environment. By doing so, Meta Extended Reality can protect against unauthorized access, maintain the integrity of data, and ensure the availability of IT systems.'],
  },
  {
    title: 'Scope',
    blocks: ['This IT security policy applies to all employees, contractors, and vendors of Meta Extended Reality who have access to the organization’s IT systems, data, and intellectual property. It covers all IT assets, including hardware, software, and data, regardless of where they are stored or how they are accessed.'],
  },
  {
    title: 'Components and Security Controls',
    blocks: [
      'The following components and security controls must be implemented to protect Meta Extended Reality’s assets:',
      { h: 'Windows Server' },
      'The Windows server is the central hub for Meta Extended Reality’s IT systems. As such, it is critical that it is properly secured to prevent unauthorized access and maintain the integrity of data.',
      { terms: [
        accessControls,
        encryption,
        ['Regular software updates', 'All software must be updated regularly to patch vulnerabilities and reduce the risk of exploitation. This includes the Windows operating system, as well as any applications or software that is installed on the server.'],
      ] },
      { h: 'PCs and Laptops' },
      'All PCs and laptops used by Meta Extended Reality employees must be properly secured to prevent unauthorized access and maintain the integrity of data.',
      { terms: [
        accessControlsPc,
        encryption,
        ['Norton antivirus software', 'All devices used by Meta Extended Reality employees must have Norton antivirus software installed to protect against malware. Antivirus software must be updated regularly to ensure that it is effective in detecting and preventing malware infections.'],
      ] },
      { h: 'SONICWALL Firewall' },
      'The SonicWall firewall is critical to protecting Meta Extended Reality\'s network from external threats',
      { terms: [
        ['Firewall', 'A SonicWall firewall must be in place to protect the network from external threats. The firewall must be configured to block all incoming traffic except for traffic that is explicitly allowed. This includes traffic from known IP addresses and ports that are used for legitimate business purposes.'],
        updates('the SonicWall firewall'),
      ] },
      { h: 'Windows SharePoint for Cloud Storage' },
      'Meta Extended Reality uses Windows SharePoint for cloud storage. All data stored in the cloud must be properly secured and access must be restricted to authorized users.',
      { terms: [
        accessControls,
        encryption,
        updates('the Windows SharePoint software'),
      ] },
      { h: 'Network Connections' },
      'All network connections used by Meta Extended Reality must be properly secured to prevent unauthorized access and maintain the integrity of data.',
      { terms: [
        ['Encrypted data in transit', 'All data must be encrypted during transit to prevent unauthorized access. This includes data that is transmitted over the internet, as well as data that is transmitted over private networks.'],
        accessControls,
      ] },
    ],
  },
  {
    title: 'Employee Security Training',
    blocks: [
      'All employees of Meta Extended Reality must receive regular security training to prevent social engineering attacks and maintain security awareness.',
      { terms: [
        ['Regular security training', 'All employees must receive regular security training to prevent social engineering attacks and maintain security awareness. This includes training on how to create secure passwords, how to identify phishing emails, and how to recognize other types of social engineering attacks.'],
        ['Social engineering prevention', 'Employees must be aware of the risks of social engineering attacks and be trained on how to prevent them. This includes training on how to verify the identity of a caller or email sender before providing sensitive information, and how to recognize suspicious behavior.'],
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
      'Meta Extended Reality must comply with all legal and regulatory requirements that apply to the organization.',
      { terms: [
        ['Aligned with legal and regulatory requirements', 'This IT security policy must be aligned with any legal or regulatory requirements that apply to the organization, such as the GDPR or the California Consumer Privacy Act. This includes requirements around data privacy, data protection, and cybersecurity.'],
      ] },
    ],
  },
  {
    title: 'Monitoring and Testing',
    blocks: [
      'Regular monitoring and testing of IT systems and security controls must be conducted to identify potential vulnerabilities or weaknesses. This includes penetration testing and vulnerability scanning, as well as regular audits of access logs to ensure that only authorized personnel are accessing sensitive data',
      { terms: [
        ['Penetration testing', 'Regular penetration testing must be conducted to identify potential vulnerabilities in Meta Extended Reality\'s IT systems. This includes both internal and external penetration testing to identify potential attack vectors.'],
        ['Vulnerability scanning', 'Regular vulnerability scanning must be conducted to identify potential vulnerabilities in Meta Extended Reality\'s IT systems. This includes scanning for known vulnerabilities in software and hardware used by the organization.'],
        ['Access log audits', 'Regular audits of access logs must be conducted to ensure that only authorized personnel are accessing sensitive data. This includes reviewing login records, file access logs, and other access records to identify potential unauthorized access.'],
      ] },
    ],
  },
  {
    title: 'Review and Update',
    blocks: [
      'This IT security policy must be reviewed and updated on an annual basis or as necessary to reflect changes in the IT environment or threat landscape. This ensures that Meta Extended Reality\'s IT security measures remain up-to-date and effective in protecting against potential security threats.',
      { terms: [
        ['Annual review', 'This IT security policy must be reviewed on an annual basis to ensure that it remains up-to-date and effective in protecting against potential security threats. Any necessary updates must be made as part of the review process.'],
        ['Ad hoc updates', 'This IT security policy must be updated as necessary to reflect changes in the IT environment or threat landscape. This includes updating the policy to reflect changes in software or hardware used by the organization, as well as changes in legal or regulatory requirements.'],
      ] },
    ],
  },
  {
    title: 'Conclusion',
    blocks: ['Meta Extended Reality’s IT security policy is critical to protecting the organization’s assets, data, and intellectual property from potential security threats. By following the guidelines set forth in this policy, employees and contractors can help maintain a secure IT environment that protects against unauthorized access, maintains the integrity of data, and ensures the availability of IT systems. Regular monitoring, testing, and updating of the policy are necessary to ensure that Meta Extended Reality’s IT security measures remain up-to-date and effective in protecting against potential security threats.'],
  },
]

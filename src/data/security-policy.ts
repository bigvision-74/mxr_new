import type { DpSection } from './data-protection'

const allUsers = 'This policy applies to all the users in the Organization, including temporary users, visitors with temporary access to services and partners with limited or unlimited access time to services.'

// Each technical policy section shares the same shape: intro, Purpose / Scope, then the policy definitions.
const policySection = (title: string, intro: string, purpose: string, scope: string, definitions: string[]): DpSection => ({
  title,
  blocks: [
    intro,
    { terms: [['Purpose', purpose], ['Scope', scope]] },
    { h: 'Policy Definitions' },
    { list: definitions },
  ],
})

export const securityPolicySections: DpSection[] = [
  {
    title: 'Introduction',
    blocks: [
      'The Information Security Policy states the types and levels of security over the information technology resources and capabilities that must be established and operated in order for those items to be considered secure. The information can be gathered in one or more documents.',
      'Policies are structured in sections identified as valid in the organization. Sections have been selected according to best practices and experience. More sections may be included as more technologies in the company are detected to be addressed with specific policies. Sections have been written all together in one document, and may as well be separated into independent policy documents for easier managing, e.g. one for Email policies, other for Internet policies and so on.',
    ],
  },
  {
    title: 'Purpose',
    blocks: ['This Security Policy document is aimed to define the security requirements for the proper and secure use of the Information Technology services in the Organization. Its goal is to protect the Organization and users to the maximum extent possible against security threats that could jeopardize their integrity, privacy, reputation and business outcomes.'],
  },
  {
    title: 'Scope',
    blocks: ['This document applies to all the users in the Organization, including temporary users, visitors with temporary access to services and partners with limited or unlimited access time to services. Compliance with policies in this document is mandatory for this constituency.'],
  },
  {
    title: 'History',
    blocks: [
      'This section of the Security Policy is aimed to check the life time of a specific version of the whole document. In case of separation into several policy documents, there is a version history for each one of them. Policies must be reviewed and eventually updated periodically to keep up with changes in risks, technologies and regulations.',
      { table: { head: ['Version', 'Description', 'From', 'To'], rows: [['1.0', 'Initial version', '1/1/2026', '31/12/2026']] } },
    ],
  },
  {
    title: 'Responsibilities',
    blocks: [
      'All the roles involved and their responsibilities in the enforcement of the policies in this document:',
      {
        table: {
          head: ['Roles', 'Responsibilities'], rows: [
            ['Chief Information Officer', 'Accountable for all aspects of the Organization’s information security.'],
            ['Information Security Officer', [
              'Responsible for the security of the IT infrastructure.',
              'Plan against security threats, vulnerabilities, and risks.',
              'Implement and maintain Security Policy documents.',
              'Ensure security training programs.',
              'Ensure IT infrastructure supports Security Policies.',
              'Respond to information security incidents.',
              'Help in disaster recovery plans.',
            ].join('\n')],
            ['Information Owners', [
              'Help with the security requirements for their specific area.',
              'Determine the privileges and access rights to the resources within their areas.',
            ].join('\n')],
            ['IT Security Team', [
              'Implements and operates IT security.',
              'Implements the privileges and access rights to the resources.',
              'Supports Security Policies.',
            ].join('\n')],
            ['Users', ['Meet Security Policies.', 'Report any attempted security breaches.'].join('\n')],
          ]
        }
      },
    ],
  },
  {
    title: 'General Policy Definitions',
    blocks: [{
      list: [
        'Exceptions to the policies defined in any part of this document may only be authorized by the Information Security Officer. In those cases, specific procedures may be put in place to handle request and authorization for exceptions.',
        'Every time a policy exception is invoked, an entry must be entered into a security log specifying the date and time, description, reason for the exception and how the risk was managed.',
        'All the IT services should be used in compliance with the technical and security requirements defined in the design of the services.',
        'Infractions of the policies in this document may lead to disciplinary actions. In some serious cases they could even lead to prosecution.',
      ]
    }],
  },
  policySection(
    'IT Assets Policy',
    'This section of the Security Policy lists policies for the secure handling of the IT assets.',
    'The IT Assets Policy section defines the requirements for the proper and secure handling of all the IT assets in the Organization.',
    'The policy applies to desktops, laptops, printers and other equipment, to applications and software, to anyone using those assets including internal users, temporary workers and visitors, and in general to any resource and capabilities involved in the provision of the IT services.',
    [
      'IT assets must only be used in connection with the business activities they are assigned and / or authorized.',
      'All the IT assets must be classified into one of the categories in the Organization’s security categories; according to the current business function they are assigned to.',
      'Every user is responsible for the preservation and correct use of the IT assets they have been assigned.',
      'All the IT assets must be in locations with security access restrictions, environmental conditions and layout according to the security classification and technical specifications of the aforementioned assets.',
      'Active desktop and laptops must be secured if left unattended. Whenever possible, this policy should be automatically enforced.',
      'Access to assets is forbidden for non-authorized personnel. Granting access to the assets involved in the provision of a service must be done through the approved Service Request Management and Access Management processes.',
      'All personnel interacting with the IT assets must have the proper training.',
      'Users shall maintain the assets assigned to them clean and free of accidents or improper use. They shall not drink or eat near the equipment.',
      'Access to assets in the Organization location must be restricted and properly authorized, including those accessing remotely. Company’s laptops, PDAs and other equipment used at external location must be periodically checked and maintained.',
      'The IT Technical Teams are the sole responsible for maintaining and upgrading configurations. None other users are authorized to change or upgrade the configuration of the IT assets. That includes modifying hardware or installing software.',
      'Special care must be taken for protecting laptops, PDAs and other portable assets from being stolen. Be aware of extreme temperatures, magnetic fields and falls.',
      'When travelling by plane, portable equipment like laptops and PDAs must remain in possession of the user as hand luggage.',
      'Whenever possible, encryption and erasing technologies should be implemented in portable assets in case they were stolen.',
      'Losses, theft, damages, tampering or other incident related to assets that compromises security must be reported as soon as possible to the Information Security Officer.',
      'Disposal of the assets must be done according to the specific procedures for the protection of the information. Assets storing confidential information must be physically destroyed in the presence of an Information Security Team member. Assets storing sensitive information must be completely erased in the presence of an Information Security Team member before disposing.',
    ],
  ),
  policySection(
    'Access Control Policy',
    'This section of the Security Policy lists policies for securing access control.',
    'The Access Control Policy section defines the requirements for the proper and secure control of access to IT services and infrastructure in the Organization.',
    allUsers,
    [
      'Any system that handles valuable information must be protected with a password-based access control system.',
      'Any system that handles confidential information must be protected by a two factor-based access control system.',
      'Discretionary access control list must be in place to control the access to resources for different groups of users.',
      'Mandatory access controls should be in place to regulate access by process operating on behalf of users.',
      'Access to resources should be granted on a per-group basis rather than on a per-user basis.',
      'Access shall be granted under the principle of “less privilege”, i.e., each identity should receive the minimum rights and access to resources needed for them to be able to perform successfully their business functions.',
      'Whenever possible, access should be granted to centrally defined and centrally managed identities.',
      'Users should refrain from trying to tamper or evade the access control in order to gain greater access than they are assigned.',
      'Automatic controls, scan technologies and periodic revision procedures must be in place to detect any attempt made to circumvent controls.',
    ],
  ),
  policySection(
    'Password Control Policy',
    'This section of the Security Policy lists policies for securing password control.',
    'The Password Control Policy section defines the requirements for the proper and secure handling of passwords in the Organization.',
    allUsers,
    [
      'Any system that handles valuable information must be protected with a password-based access control system.',
      'Every user must have a separate, private identity for accessing IT network services.',
      'Identities should be centrally created and managed. Single sign-on for accessing multiple services is encouraged.',
      'Each identity must have a strong, private, alphanumeric password to be able to access any service. They should be at least 8 characters long.',
      'Each regular user may use the same password for no more than 90 days and no less than 3 days. The same password may not be used again for at least one year.',
      'Password for some special identities will not expire. In those cases, password must be at least 15 characters long.',
      'Use of administrative credentials for non-administrative work is discouraged. IT administrators must have two set of credentials: one for administrative work and the other for common work.',
      'Sharing of passwords is forbidden. They should not be revealed or exposed to public sight.',
      'Whenever a password is deemed compromised, it must be changed immediately.',
      'For critical applications, digital certificates and multiple factor authentication using smart cards should be used whenever possible.',
      'Identities must be locked if password guessing is suspected on the account.',
    ],
  ),
  policySection(
    'Email Policy',
    'This section of the Security Policy lists policies for the secure handling of electronic mail.',
    'The Email Policy section defines the requirements for the proper and secure use of electronic mail in the Organization.',
    allUsers,
    [
      'All the assigned email addresses, mailbox storage and transfer links must be used only for business purposes in the interest of the Organization. Occasional use of personal email address on the Internet for personal purpose may be permitted if in doing so there is no perceptible consumption in the Organization system resources and the productivity of the work is not affected.',
      'Use of the Organization resources for non-authorized advertising, external business, spam, political campaigns, and other uses unrelated to the Organization business is strictly forbidden.',
      'In no way may the email resources be used to reveal confidential or sensitive information from the Organization outside the authorized recipients for this information.',
      'Using the email resources of the Organization for disseminating messages regarded as offensive, racist, obscene or in any way contrary to the law and ethics is absolutely discouraged.',
      'Use of the Organization email resources is maintained only to the extent and for the time is needed for performing the duties. When a user ceases his/her relationship with the company, the associated account must be deactivated according to established procedures for the lifecycle of the accounts.',
      'Users must have private identities to access their emails and individual storage resources, except specific cases in which common usage may be deemed appropriated.',
      'Privacy is not guaranteed. When strongest requirements for confidentiality, authenticity and integrity appear, the use of electronically signed messages is encouraged. However, only the Information Security Officer may approve the interception and disclosure of messages.',
      'Identities for accessing corporate email must be protected by strong passwords. The complexity and lifecycle of passwords are managed by the company’s procedures for managing identities. Sharing of passwords is discouraged. Users should not impersonate another user.',
      'Outbound messages from corporate users should have approved signatures at the foot of the message.',
      'Attachments must be limited in size according to the specific procedures of the Organization. Whenever possible, restrictions should be automatically enforced.',
      'Whenever possible, the use of Digital Rights technologies is encouraged for the protection of contents.',
      'Scanning technologies for virus and malware must be in place in client PCs and servers to ensure the maximum protection in the ingoing and outgoing email.',
      'Security incidents must be reported and handled as soon as possible according to the Incident Management and Information Security processes. Users should not try to respond by themselves to security attacks.',
      'Corporate mailboxes content should be centrally stored in locations where the information can be backed up and managed according to company procedures. Purge, backup and restore must be managed according to the procedures set for the IT Continuity Management.',
    ],
  ),
  policySection(
    'Internet Policy',
    'This section of the Security Policy lists policies for the secure access to Internet.',
    'The Internet Policy section defines the requirements for the proper and secure access to Internet.',
    allUsers,
    [
      'Limited access to Internet is permitted for all users.',
      'The use of Messenger service is permitted for business purposes.',
      'Access to pornographic sites, hacking sites, and other risky sites is strongly discouraged.',
      'Downloading is a privilege assigned to some users. It can be requested as a service.',
      'Internet access is mainly for business purpose , some limited personal navigation is permitted if in doing so there is no perceptible consumption of the Organization system resources and the productivity of the work is not affected. Personal navigation is discouraged during working hours.',
      'Inbound and outbound traffic must be regulated using firewalls in the perimeter. Back to back configuration is strongly recommended for firewalls.',
      'In accessing Internet, users must behave in a way compatible with the prestige of the Organization. Attacks like denial of service, spam, fishing, fraud, hacking, distribution of questionable material, infraction of copyrights and others are strictly forbidden.',
      'Internet traffic should be monitored at firewalls. Any attack or abuse should be promptly reported to the Information Security Officer.',
      'Reasonable measures must be in place at servers, workstations and equipment for detection and prevention of attacks and abuse. They include firewalls, intrusion detection and others.',
    ],
  ),
  policySection(
    'Antivirus Policy',
    'This section of the Security Policy lists policies for the implementation of anti-virus and other forms of protection.',
    'The Antivirus Policy section defines the requirements for the proper implementation of antivirus and other forms of protection in the Organization.',
    'This policy applies to servers, workstations and equipment in the Organization, including portable devices like laptops and PDA that may travel outside of the Organization facilities. Some policies apply to external computers and devices accessing the resources of the Organization.',
    [
      'Information owners must ensure the security of their information and the systems that support it.',
      'Information Security Management is responsible for ensuring the confidentiality, integrity and availability of the Organization’s assets, information, data and IT services.',
      'Any breach must be reported immediately to the Information Security Officer. If needed, the appropriate countermeasures must be activated to assess and control damages.',
      'Information in the Organization is classified according to its security impact. The current categories are: confidential, sensitive, shareable, public and private.',
      'Information defined as confidential has the highest level of security. Only a limited number of persons must have access to it. Management, access and responsibilities for confidential information must be handled with special procedures defined by Information Security Management.',
      'Information defined as sensitive must be handled by a greater number of persons. It is needed for the daily performing of jobs duties, but should not be shared outside of the scope needed for the performing of the related function.',
      'Information defined as shareable can be shared outside of the limits of the Organization, for those clients, organizations, regulators, etc. who acquire or should get access to it.',
      'Information defined as public can be shared as public records, e.g. content published in the company’s public Web Site.',
      'Information deemed as private belongs to individuals who are responsible for the maintenance and backup.',
      'Information is classified jointly by the Information Security Officer and the Information Owner.',
    ],
  ),
  policySection(
    'Remote Access Policy',
    'This section of the Security Policy lists policies for the secure remote access to the organization’s internal resources.',
    'The Remote Access Policy section defines the requirements for the secure remote access to the Organization’s internal resources.',
    'This policy applies to the users and devices that need access the Organization’s internal resources from remote locations.',
    [
      'To gaining access to the internal resources from remote locations, users must have the required authorization. Remote access for an employee, external user or partner can be requested only by the Manager responsible for the information and granted by Access Management.',
      'Only secure channels with mutual authentication between server and clients must be available for remote access. Both server and clients must receive mutually trusted certificates.',
      'Remote access to confidential information should not be allowed. Exception to this rule may only be authorized in cases where is strictly needed.',
      'Users must not connect from public computers unless the access is for viewing public content.',
    ],
  ),
  policySection(
    'Outsourcing Policy',
    'This section of the Security Policy lists policies for the outsourcing of IT services, functions and processes.',
    'The Outsourcing Policy section defines the requirements needed to minimize the risks associated with the outsourcing of IT services, functions and processes.',
    'This policy applies to the Organization; the services providers to whom IT services, functions or processes are been outsourced, and the outsourcing process itself.',
    [
      'Before outsourcing any service, function or process, a careful strategy must be followed to evaluate the risk and financial implications.',
      'Whenever possible, a bidding process should be followed to select between several service providers.',
      'In any case, the service provider should be selected after evaluating their reputation, experience in the type of service to be provided, offers and warranties.',
      'Audits should be planned in advance to evaluate the performance of the service provider before and during the provision of the outsourced service, function or process. If the Organization has not enough knowledge and resources, a specialized company should be hired to do the auditing.',
      'A service contract and defined service levels must be agreed between the Organization and the service provider.',
      'The service provider must get authorization from the Organization if it intends to hire a third party to support the outsourced service, function or process.',
    ],
  ),
  {
    title: 'Annex , Glossary',
    blocks: [
      'This section of the Security Policy provides the definitions of terms, acronyms, and abbreviations required to understand this document.',
      {
        table: {
          head: ['Term', 'Definition'], rows: [
            ['Access Management', 'The process responsible for allowing users to make use of IT services, data or other assets.'],
            ['Asset', 'Any resource or capability. The assets of a service provider include anything that could contribute to the delivery of a service.'],
            ['Audit', 'Formal inspection and verification to check whether a standard or set of guidelines is being followed, that records are accurate, or that efficiency and effectiveness targets are being met.'],
            ['Confidentiality', 'A security principle that requires that data should only be accessed by authorized people.'],
            ['External Service Provider', 'An IT service provider that is part of a different organization from its customer.'],
            ['Identity', 'A unique name that is used to identify a user, person or role.'],
            ['Information Security Policy', 'The policy that governs the organization’s approach to information security management.'],
            ['Outsourcing', 'Using an external service provider to manage IT services.'],
            ['Policy', 'Formally documented management expectations and intentions. Policies are used to direct decisions, and to ensure consistent and appropriate development and implementation of processes, standards, roles, activities, IT infrastructure etc.'],
            ['Risk', 'A possible event that could cause harm or loss, or affect the ability to achieve objectives.'],
            ['Service Level', 'Measured and reported achievement against one or more service level targets.'],
            ['Warranty', 'Assurance that a product or service will meet agreed requirements.'],
          ]
        }
      },
    ],
  },
]

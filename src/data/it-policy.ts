import type { DpSection } from './data-protection'

export const itPolicySections: DpSection[] = [
  {
    title: 'Introduction',
    blocks: ['Meta Extended Reality (MXR) is committed to providing its employees with access to technology and IT resources that promote productivity and efficiency. To ensure that our IT resources are used in a responsible and ethical manner, this IT Policy has been developed to outline the acceptable use of IT resources within our organization.'],
  },
  {
    title: 'Scope',
    blocks: ['This policy applies to all employees who have access to MXR\'s IT resources, including hardware, software, and network systems.'],
  },
  {
    title: 'Acceptable Use',
    blocks: [
      'All IT resources provided by MXR must be used in a responsible and ethical manner. This includes, but is not limited to, the following:',
      { list: [
        'Use of IT resources for work-related purposes only.',
        'Compliance with all applicable laws, regulations and MXR policies.',
        'Protection of confidential information and sensitive data.',
        'Respectful communication and behaviour when using IT resources.',
        'Proper use of software licences and other intellectual property.',
        'Reporting of any security incidents, data breaches or other IT-related concerns.',
      ] },
    ],
  },
  {
    title: 'Data Protection and Security',
    blocks: [
      'All employees are responsible for protecting the confidentiality, integrity, and availability of MXR data. This includes, but is not limited to, the following:',
      { list: [
        'Use of strong passwords and secure login procedures.',
        'Protection of sensitive data through encryption or other security measures.',
        'Regular data backups to ensure data availability.',
        'Adherence to MXR data retention and deletion policies.',
        'Reporting of any suspected security incidents or data breaches.',
      ] },
    ],
  },
  {
    title: 'Equipment Use and Maintenance',
    blocks: [
      'All IT equipment provided by MXR must be used in a responsible and appropriate manner. This includes, but is not limited to, the following:',
      { list: [
        'Proper use and handling of hardware and peripherals.',
        'Compliance with software licensing agreements and vendor policies.',
        'Maintenance of equipment and software to ensure functionality and security.',
        'Reporting of any IT-related issues or concerns to the appropriate personnel.',
      ] },
    ],
  },
  {
    title: 'Prohibition on Storing Customer Project Data on USB Drives or Removing it from the Office',
    blocks: ['MXR prohibits the use of USB drives or other external storage devices for storing customer project data. Employees may not remove customer project data from the office or access it from personal devices or public networks. Customer project data must be stored on MXR\'s secure network drives or cloud-based storage solutions.'],
  },
  {
    title: 'Monitoring and Enforcement',
    blocks: [
      'MXR reserves the right to monitor and audit all IT resources and activities. This includes, but is not limited to, the following:',
      { list: [
        'Monitoring of network traffic and system logs for security and compliance purposes',
        'Regular auditing of user activity and IT resource usage',
        'Compliance with software licensing agreements and vendor policies.',
        'Enforcement of MXR policies and procedures through disciplinary action, up to and including termination of employment or access to IT resources',
      ] },
    ],
  },
  {
    title: 'Acknowledgement and Agreement',
    blocks: ['All employees must sign and acknowledge this IT Policy before accessing MXR\'s IT resources. By signing this policy, employees agree to comply with all policies and procedures outlined in this document.'],
  },
  {
    title: 'Conclusion',
    blocks: ['This IT Policy outlines the acceptable use of technology and IT resources within MXR. All employees are responsible for complying with these policies and procedures, protecting the integrity of data, and ensuring the security and confidentiality of information. MXR prohibits the use of USB drives or other external storage devices for storing customer project data and employees may not remove customer project data from the office or access it from personal devices or public networks. By signing this policy, employees acknowledge their agreement to abide by these policies and procedures.'],
  },
]

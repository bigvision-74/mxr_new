import type { DpSection } from './data-protection'

export const lifecycleSections: DpSection[] = [
  {
    title: 'Policy Summary',
    blocks: [
      { terms: [
        ['Scope', 'All software applications, enterprise builds, modules, and XR training simulations developed, owned, and licensed by MXR Meta Extended Reality Ltd. Software lifecycle, support, and deprecation are governed by MXR’s Software Lifecycle & Deprecation Policy, which may be updated from time to time.'],
        ['Effective Date', 'January 2026'],
      ] },
    ],
  },
  {
    title: 'Purpose & Scope',
    blocks: ['This policy defines the structured lifecycle, deprecation framework, and terminal phase management for all extended reality (XR) software products produced by MXR Meta Extended Reality Ltd (hereafter referred to as “MXR”). This ensures our enterprise training partners experience minimal operational disruption while maintaining strict system security, legal clarity, and code stability.'],
  },
  {
    title: 'Product Lifecycle Definitions',
    blocks: [
      'MXR software versions cycle through three distinct operational phases:',
      { terms: [
        ['Active Support (Included with Valid License/Subscription)', 'The current production build. As long as the partner maintains an active, fully paid software license or subscription, the software receives new feature enhancements, performance optimisations, and routine bug fixes at no additional cost.'],
        ['End of Sale (EOS)', 'The date after which a specific software version, license tier, or module can no longer be purchased or renewed for new deployments.'],
        ['End of Life (EOL)', 'The final phase where a specific software version or build branch reaches its terminal state. Complimentary technical support, code troubleshooting, and platform optimisations for that specific version are permanently discontinued.'],
      ] },
    ],
  },
  {
    title: 'Post-Handover Licensing & Support Mandate',
    blocks: [
      'To ensure clarity following project delivery, MXR enforces strict licensing boundaries:',
      { terms: [
        ['Paid License Requirement', 'Upon formal technical delivery and handover of any custom software, module, or XR training simulation to the partner, all technical support, bug fixing, and software maintenance are strictly conditional upon the partner maintaining an active, paid MXR software license or subscription agreement.'],
        ['Exclusion of Free Support', 'Project handover does not include, imply, or confer any complimentary or lifelong technical support. If a partner lets their software license or subscription lapse, MXR’s obligation to provide troubleshooting, platform compatibility updates, or customer service immediately terminates, regardless of when the software was delivered.'],
      ] },
    ],
  },
  {
    title: 'Notification & Transition Timelines',
    blocks: [
      'To protect the continuous delivery of training environments, MXR enforces strict notification timelines:',
      { terms: [
        ['3-Month Advance Notice', 'MXR commits to providing a minimum of 3 months (90 days) advance written notice to partners prior to the formal End of Sale (EOS) or deprecation of any core software application or major version branch.'],
        ['Migration Windows', 'The 3-month notice period serves as the primary transition window. Upon issuing an EOS notice, MXR will provide technical migration paths to transition the partner’s environment to the succeeding or updated MXR software version. Any custom asset modification, environment re-authoring, or bespoke integration work required for this transition is excluded from complimentary support and will be billed under a separate Statement of Work (SOW).'],
      ] },
    ],
  },
  {
    title: 'Third-Party Infrastructure & Platform Dependencies',
    blocks: [
      'Because MXR software relies on evolving external ecosystems, the following platform protections apply:',
      { terms: [
        ['Hardware Dependency & Lifecycles', 'MXR is not liable for software malfunctions, system crashes, or incompatibility caused by third-party hardware firmware updates, operating system overhauls, or hardware manufacturing discontinuation (e.g., Meta Quest, HTC Vive). If a third-party vendor deprecates a headset or OS, MXR reserves the right to immediately move the corresponding software version to EOL status.'],
        ['Engine & SDK Dependencies', 'MXR’s software lifecycle timelines are subject to the support lifecycles of core development environments (e.g., Unity LTS versions, Unreal Engine builds, and platform-specific SDKs). If an underlying engine or SDK stops supporting a legacy feature, MXR’s obligation to maintain that feature under Active Support immediately terminates.'],
      ] },
    ],
  },
  {
    title: 'Software Ecosystem Mitigation & Liability Protection',
    blocks: [
      'To ensure stability while safely sunsetting legacy products, MXR enforces the following engineering protocols:',
      { terms: [
        ['Feature Freeze', 'Immediately upon EOS announcement, the affected software version enters a strict feature freeze. No new capabilities, non-critical optimisations, or cosmetic bug fixes will be developed.'],
        ['Legacy API Phase-Out', 'Deprecated internal software features or APIs are maintained strictly to prevent immediate system crashes during the 3-month transition period, after which they are permanently deactivated.'],
        ['Complimentary Security & Blocking Updates', 'MXR will provide fixes only for critical security vulnerabilities and catastrophic blocking bugs for a maximum of 3 months (90 days) post-EOS at no additional charge, provided the client’s base license remains active. Following this 3-month window, complimentary software updates cease completely.'],
        ['Critical Vulnerability Definition', 'For the purpose of this policy, a “critical security vulnerability” is strictly defined as a flaw that allows remote code execution, unauthorised data exfiltration, or complete system compromise, scoring 9.0 or higher on the Common Vulnerability Scoring System (CVSS). Final determination of vulnerability severity remains at the sole discretion of MXR’s engineering team.'],
      ] },
    ],
  },
  {
    title: 'Post-EOL Data & Telemetry Retention',
    blocks: ['Upon reaching the official End of Life (EOL) date, MXR will retain partner training telemetry, analytics, and user performance data for a maximum of 30 days. Partners must export all necessary historical compliance and training reports within this window. After 30 days, MXR reserves the right to permanently purge all data associated with the EOL software version to maintain server security and comply with data minimisation principles.'],
  },
  {
    title: 'Paid After-Sales Support & Extended Maintenance',
    blocks: [
      'Following the conclusion of the complimentary 3-month post-EOS window, the software version officially reaches End of Life (EOL). Technical support is handled as follows:',
      { terms: [
        ['Paid Extended Support Option', 'Partners requiring continued operational maintenance, security monitoring, or technical troubleshooting for an EOL software version may request a paid Extended Support Agreement (ESA).'],
        ['Commercial Fees', 'Paid Extended Support is outside the scope of standard licensing and is subject to a separate premium service fee, billed at MXR’s prevailing technical consulting or dedicated engineering rates.'],
        ['Technical Limitations', 'MXR reserves the right to deny Extended Support requests if the underlying operating environment, third-party SDKs, or hardware infrastructure undergoes changes that make legacy code maintenance technically unfeasible.'],
      ] },
    ],
  },
  {
    title: 'Document Governance & Approvals',
    blocks: ['This document is governed by the executive management team of MXR Meta Extended Reality Ltd and is subject to annual review.'],
  },
]

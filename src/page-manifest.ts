import BlogPage from './pages/BlogPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DefenceSecurityPage from './pages/DefenceSecurityPage'
import CaseStudyXrReadinessPage from './pages/CaseStudyXrReadinessPage'
import Modal3DPage from './pages/Modal3DPage'
import EpriumPage from './pages/EpriumPage'
import EpriumOldPage from './pages/EpriumOldPage'
import DrivexrPage from './pages/DriveXR2Page'
import InsightxrPage from './pages/InsightxrPage'
import OmniaPage from './pages/OmniaPage'
import SimulatorDevelopmentPage from './pages/SimulatorDevelopmentPage'
import XrDevelopmentPage from './pages/XrDevelopmentPage'
import ImmersiveRoomsPage from './pages/ImmersiveRoomsPage'
import AiSolutionsPage from './pages/AiSolutionsPage'
import ContactPage from './pages/ContactPage'
import PlatformDevelopmentPage from './pages/PlatformDevelopmentPage'
import PoliciesPage from './pages/PoliciesPage'
import TermsPage from './pages/TermsPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import DataProtectionPage from './pages/DataProtectionPage'
import DataRetentionPage from './pages/DataRetentionPage'
import MxrDataProtectionPage from './pages/MxrDataProtectionPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import PrivacyGdprPage from './pages/PrivacyGdprPage'
import AcceptableUsePage from './pages/AcceptableUsePage'
import ModernSlaveryPage from './pages/ModernSlaveryPage'
import SoftwareLifecyclePage from './pages/SoftwareLifecyclePage'
import TermsOfSalePage from './pages/TermsOfSalePage'
import AccessibilityPage from './pages/AccessibilityPage'
import DisasterRecoveryPage from './pages/DisasterRecoveryPage'
import ItPolicyPage from './pages/ItPolicyPage'
import ItSecurityPage from './pages/ItSecurityPage'
import SecurityPolicyPage from './pages/SecurityPolicyPage'
import DisciplinaryPage from './pages/DisciplinaryPage'
import EqualOpportunitiesPage from './pages/EqualOpportunitiesPage'
import HealthSafetyPage from './pages/HealthSafetyPage'
import HealthSafetyRemotePage from './pages/HealthSafetyRemotePage'
import WhistleblowingPage from './pages/WhistleblowingPage'
import CarbonReductionPage from './pages/CarbonReductionPage'
import EnvironmentalPolicyPage from './pages/EnvironmentalPolicyPage'

export const pages: Record<string, { Component: () => any; title: string; description: string; bodyClass: string }> = {
    "index.html": { Component: HomePage, title: "MXR.ai \u2014 Your Vision. Our Technology.", description: "MXR creates immersive simulation, XR and AI solutions for defence, healthcare and enterprise training.", bodyClass: "" },
    "about.html": { Component: AboutPage, title: "About MXR \u2014 Technology for Real-World Impact", description: "Meet MXR, a technology partner creating immersive simulation, AI and software solutions for education, training and enterprise.", bodyClass: "" },
    "defence-security.html": { Component: DefenceSecurityPage, title: "Defence & Security Solutions \u2014 MXR.ai", description: "MXR defence and security simulation solutions help teams build knowledge, rehearse safely and improve operational readiness.", bodyClass: "" },
    "case-study.html": { Component: CaseStudyXrReadinessPage, title: "Enhancing Readiness Through XR Training \u2014 MXR Case Study", description: "Discover how MXR used extended reality to support safer, repeatable and measurable operational training.", bodyClass: "" },
    "modal3d.html": { Component: Modal3DPage, title: "MODAL3D | MXR.ai", description: "Explore ordnance in interactive 3D. Connect component views, technical information and AR in one organised library.", bodyClass: "" },
    "eprium.html": { Component: EpriumPage, title: "EPRium | MXR.ai", description: "Give healthcare learners a safe place to practise patient encounters, clinical reasoning and digital documentation.", bodyClass: "" },
    "eprium-old.html": { Component: EpriumOldPage, title: "EPRium_old | MXR.ai", description: "Give healthcare learners a safe place to practise patient encounters, clinical reasoning and digital documentation.", bodyClass: "" },
    "drivexr.html": { Component: DrivexrPage, title: "DriveXR | MXR.ai", description: "Next-generation emergency driver simulation — richer environments, deeper data and a more connected training experience.", bodyClass: "drivexr2-page" },
    "insightxr.html": { Component: InsightxrPage, title: "InsightXR | MXR.ai", description: "Bring content, learners, devices and performance data together to deliver a connected XR learning programme.", bodyClass: "" },
    "omnia.html": { Component: OmniaPage, title: "Omnia | MXR.ai", description: "Omnia by MXR.ai.", bodyClass: "" },
    "simulator-development.html": { Component: SimulatorDevelopmentPage, title: "Simulator Development | MXR.ai", description: "Purpose-built simulators help teams practise complex tasks, build confidence and explore decisions in a safe, repeatable environment.", bodyClass: "" },
    "xr-development.html": { Component: XrDevelopmentPage, title: "XR Development | MXR.ai", description: "Virtual, augmented and mixed reality experiences that help people understand, rehearse and interact with the world in new ways.", bodyClass: "" },
    "immersive-rooms.html": { Component: ImmersiveRoomsPage, title: "Immersive Rooms | MXR.ai", description: "Projection-led environments bring teams together for immersive learning, collaborative exploration and facilitated simulation.", bodyClass: "" },
    "ai-solutions.html": { Component: AiSolutionsPage, title: "AI Solutions | MXR.ai", description: "Practical AI solutions that support learning, simplify information workflows and help teams focus on higher-value tasks.", bodyClass: "" },
    "platform-development.html": { Component: PlatformDevelopmentPage, title: "Platform Development | MXR.ai", description: "Web, mobile and desktop platforms that connect users, content and workflows in a clear, dependable digital experience.", bodyClass: "" },
    "contact.html": { Component: ContactPage, title: "Contact MXR | MXR.ai", description: "Get in touch with the MXR team — call +44 7393 173361 or email team@mxr.ai.", bodyClass: "" },
    "blog.html": { Component: BlogPage, title: "Blog | MXR.ai", description: "Insights, research and perspectives on XR, AI, simulation and immersive training.", bodyClass: "" },
    "case-studies.html": { Component: CaseStudiesPage, title: "Case Studies | MXR.ai", description: "Real-world results from MXR's XR and AI projects across healthcare, education and enterprise.", bodyClass: "" },
    "events.html": { Component: EventsPage, title: "Events | MXR.ai", description: "Meet MXR at conferences, webinars and industry events. Stay ahead with the latest in XR, AI and immersive simulation.", bodyClass: "" }
}

pages['policies.html'] = { Component: PoliciesPage, title: 'Policies | MXR.ai', description: 'Review the policies that govern MXR operations: privacy, data protection, security, accessibility, sustainability and more.', bodyClass: '' }
pages['terms-and-conditions.html'] = { Component: TermsPage, title: 'Terms and Conditions | MXR.ai', description: 'The terms and conditions that apply to your use of the mxr.ai websites, software applications and services.', bodyClass: '' }
pages['cookie-policy.html'] = { Component: CookiePolicyPage, title: 'Cookie Policy | MXR.ai', description: 'How MXR.AI uses cookies and similar tracking technologies on our website and online portals.', bodyClass: '' }
pages['data-protection-policy.html'] = { Component: DataProtectionPage, title: 'Data Protection Policy | MXR.ai', description: 'How MXR handles, safeguards, and governs personal data as a controller and processor under UK GDPR / DPA 2018.', bodyClass: '' }
pages['data-retention-and-deletion-policy.html'] = { Component: DataRetentionPage, title: 'Data Retention & Deletion Policy | MXR.ai', description: 'How MXR manages the retention, archiving, deletion, and anonymisation of personal data.', bodyClass: '' }
pages['mxr-data-protection-policy.html'] = { Component: MxrDataProtectionPage, title: 'MXR Data Protection Policy | MXR.ai', description: 'How MXR protects, processes, and governs personal data across its products and services.', bodyClass: '' }
pages['privacy-policy.html'] = { Component: PrivacyPolicyPage, title: 'Privacy Policy | MXR.ai', description: 'How we collect, use, and protect your personal data in line with our legal obligations.', bodyClass: '' }
pages['privacy-policy-gdpr.html'] = { Component: PrivacyGdprPage, title: 'Privacy Policy (MXR-GDPR-001) | MXR.ai', description: 'Detailed GDPR privacy policy covering personal data collection, AI/XR services, data sharing, retention, and your rights.', bodyClass: '' }
pages['acceptable-use-policy.html'] = { Component: AcceptableUsePage, title: 'Acceptable Use Policy | MXR.ai', description: 'The permitted and prohibited uses of our virtual spaces, software, developer tools, and generative AI engines.', bodyClass: '' }
pages['modern-slavery-statement.html'] = { Component: ModernSlaveryPage, title: 'Modern Slavery and Human Trafficking Statement | MXR.ai', description: 'Our commitment to combating modern slavery and human trafficking in our business and supply chains.', bodyClass: '' }
pages['software-lifecycle-and-deprecation-policy.html'] = { Component: SoftwareLifecyclePage, title: 'Software Lifecycle & Deprecation Policy | MXR.ai', description: 'Our software lifecycle phases, support timelines, and deprecation process for XR applications, enterprise builds, and training simulations.', bodyClass: '' }
pages['terms-of-sale-and-licensing.html'] = { Component: TermsOfSalePage, title: 'Terms of Sale & Licensing Agreement | MXR.ai', description: 'Terms governing the purchase, licensing, billing, and deployment of our software, XR platforms, and AI services.', bodyClass: '' }
pages['accessibility-statement.html'] = { Component: AccessibilityPage, title: 'Website Accessibility Statement | MXR.ai', description: 'Our commitment to digital accessibility, WCAG 2.2 AA targets, platform limitations, and how to give accessibility feedback.', bodyClass: '' }
pages['disaster-recovery-plan.html'] = { Component: DisasterRecoveryPage, title: 'Disaster Recovery Plan | MXR.ai', description: 'Our business continuity and disaster recovery procedures to ensure minimum disruption following any unforeseen disaster.', bodyClass: '' }
pages['it-policy.html'] = { Component: ItPolicyPage, title: 'IT Policy | MXR.ai', description: 'Acceptable use of technology and IT resources within MXR.', bodyClass: '' }
pages['it-security-policy.html'] = { Component: ItSecurityPage, title: 'IT Security Policy | MXR.ai', description: 'How MXR protects its assets, data, and intellectual property from security threats.', bodyClass: '' }
pages['security-policy.html'] = { Component: SecurityPolicyPage, title: 'Security Policy | MXR.ai', description: 'Security requirements for the proper and secure use of Information Technology services, covering IT assets, access control, passwords, email, internet, remote access, and outsourcing.', bodyClass: '' }
pages['disciplinary-policy.html'] = { Component: DisciplinaryPage, title: 'Disciplinary Policy | MXR.ai', description: 'Our disciplinary procedure setting out the standards of conduct expected of staff and the process for addressing misconduct.', bodyClass: '' }
pages['equal-opportunities-and-discrimination-policy.html'] = { Component: EqualOpportunitiesPage, title: 'Equal Opportunities and Discrimination Policy | MXR.ai', description: 'Our commitment to treating all employees, workers, and job applicants equally.', bodyClass: '' }
pages['health-and-safety-policy.html'] = { Component: HealthSafetyPage, title: 'Health and Safety Policy | MXR.ai', description: 'Our health and safety policy statement, including display screen equipment (DSE) safety, first aid, fire, and accident procedures.', bodyClass: '' }
pages['health-and-safety-policy-remote-hybrid.html'] = { Component: HealthSafetyRemotePage, title: 'Health and Safety Policy Summary (Remote & Hybrid Tech Workers) | MXR.ai', description: 'Our health and safety obligations and guidelines for remote and hybrid technology workers.', bodyClass: '' }
pages['carbon-reduction-plan.html'] = { Component: CarbonReductionPage, title: 'Carbon Reduction Plan & Evergreen Level 1 | MXR.ai', description: 'Our PPN 006/21-aligned Carbon Reduction Plan, emissions baseline, and commitment to Net Zero by 2050.', bodyClass: '' }
pages['environmental-policy.html'] = { Component: EnvironmentalPolicyPage, title: 'Environmental Policy | MXR.ai', description: 'Our approach to minimising environmental impact across our offices, supply chain, and operations.', bodyClass: '' }
pages['whistleblowing-policy.html'] = { Component: WhistleblowingPage, title: 'Whistleblowing Policy | MXR.ai', description: 'How workers can raise concerns about malpractice or wrongdoing in the workplace, confidentially and without fear of reprisals.', bodyClass: '' }

import { pageMeta } from './page-meta'
import BlogPage from './pages/BlogPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DefenceSecurityPage from './pages/DefenceSecurityPage'
import { EnterpriseSolutionPage, HealthcareSolutionPage } from './pages/SectorSolutions'
import CustomSolutionPage from './pages/CustomSolutionPage'
//import CaseStudyXrReadinessPage from './pages/CaseStudyXrReadinessPage'
import Modal3DPage from './pages/Modal3DPage'
import EpriumPage from './pages/EpriumPage'
import DrivexrPage from './pages/DriveXR2Page'
import InsightxrPage from './pages/InsightxrPage'
import OmniaPage from './pages/OmniaPage'
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
import EmployeePrivacyPage from './pages/EmployeePrivacyPage'

export { detailPages } from './page-meta'

export const pages: Record<string, { Component: () => any; title: string; description: string; keywords?: string; bodyClass: string }> = {
    "index.html": { Component: HomePage, ...pageMeta["index.html"], bodyClass: "" },
    "about.html": { Component: AboutPage, ...pageMeta["about.html"], bodyClass: "" },
    "defence-security.html": { Component: DefenceSecurityPage, ...pageMeta["defence-security.html"], bodyClass: "" },
    "healthcare-simulation.html": { Component: HealthcareSolutionPage, ...pageMeta["healthcare-simulation.html"], bodyClass: "" },
    "enterprise-training.html": { Component: EnterpriseSolutionPage, ...pageMeta["enterprise-training.html"], bodyClass: "" },
    "custom-solutions.html": { Component: CustomSolutionPage, ...pageMeta["custom-solutions.html"], bodyClass: "" },
//"case-study.html": { Component: CaseStudyXrReadinessPage, title: "Enhancing Readiness Through XR Training \u2014 MXR Case Study", description: "Discover how MXR used extended reality to support safer, repeatable and measurable operational training.", bodyClass: "" },
    "modal3d.html": { Component: Modal3DPage, ...pageMeta["modal3d.html"], bodyClass: "" },
    "eprium.html": { Component: EpriumPage, ...pageMeta["eprium.html"], bodyClass: "" },
    "drivexr.html": { Component: DrivexrPage, ...pageMeta["drivexr.html"], bodyClass: "drivexr2-page" },
    "insightxr.html": { Component: InsightxrPage, ...pageMeta["insightxr.html"], bodyClass: "" },
    "omnia.html": { Component: OmniaPage, ...pageMeta["omnia.html"], bodyClass: "" },
    "platform-development.html": { Component: PlatformDevelopmentPage, ...pageMeta["platform-development.html"], bodyClass: "" },
    "contact.html": { Component: ContactPage, ...pageMeta["contact.html"], bodyClass: "" },
    "blog.html": { Component: BlogPage, ...pageMeta["blog.html"], bodyClass: "" },
    "case-studies.html": { Component: CaseStudiesPage, ...pageMeta["case-studies.html"], bodyClass: "" },
    "events.html": { Component: EventsPage, ...pageMeta["events.html"], bodyClass: "" }
}

pages['policies.html'] = { Component: PoliciesPage, ...pageMeta['policies.html'], bodyClass: '' }
pages['terms-and-conditions.html'] = { Component: TermsPage, ...pageMeta['terms-and-conditions.html'], bodyClass: '' }
pages['cookie-policy.html'] = { Component: CookiePolicyPage, ...pageMeta['cookie-policy.html'], bodyClass: '' }
pages['data-protection-policy.html'] = { Component: DataProtectionPage, ...pageMeta['data-protection-policy.html'], bodyClass: '' }
pages['data-retention-and-deletion-policy.html'] = { Component: DataRetentionPage, ...pageMeta['data-retention-and-deletion-policy.html'], bodyClass: '' }
pages['mxr-data-protection-policy.html'] = { Component: MxrDataProtectionPage, ...pageMeta['mxr-data-protection-policy.html'], bodyClass: '' }
pages['privacy-policy.html'] = { Component: PrivacyPolicyPage, ...pageMeta['privacy-policy.html'], bodyClass: '' }
pages['privacy-policy-gdpr.html'] = { Component: PrivacyGdprPage, ...pageMeta['privacy-policy-gdpr.html'], bodyClass: '' }
pages['acceptable-use-policy.html'] = { Component: AcceptableUsePage, ...pageMeta['acceptable-use-policy.html'], bodyClass: '' }
pages['modern-slavery-statement.html'] = { Component: ModernSlaveryPage, ...pageMeta['modern-slavery-statement.html'], bodyClass: '' }
pages['software-lifecycle-and-deprecation-policy.html'] = { Component: SoftwareLifecyclePage, ...pageMeta['software-lifecycle-and-deprecation-policy.html'], bodyClass: '' }
pages['terms-of-sale-and-licensing.html'] = { Component: TermsOfSalePage, ...pageMeta['terms-of-sale-and-licensing.html'], bodyClass: '' }
pages['accessibility-statement.html'] = { Component: AccessibilityPage, ...pageMeta['accessibility-statement.html'], bodyClass: '' }
pages['disaster-recovery-plan.html'] = { Component: DisasterRecoveryPage, ...pageMeta['disaster-recovery-plan.html'], bodyClass: '' }
pages['it-policy.html'] = { Component: ItPolicyPage, ...pageMeta['it-policy.html'], bodyClass: '' }
pages['it-security-policy.html'] = { Component: ItSecurityPage, ...pageMeta['it-security-policy.html'], bodyClass: '' }
pages['security-policy.html'] = { Component: SecurityPolicyPage, ...pageMeta['security-policy.html'], bodyClass: '' }
pages['disciplinary-policy.html'] = { Component: DisciplinaryPage, ...pageMeta['disciplinary-policy.html'], bodyClass: '' }
pages['equal-opportunities-and-discrimination-policy.html'] = { Component: EqualOpportunitiesPage, ...pageMeta['equal-opportunities-and-discrimination-policy.html'], bodyClass: '' }
pages['health-and-safety-policy.html'] = { Component: HealthSafetyPage, ...pageMeta['health-and-safety-policy.html'], bodyClass: '' }
pages['health-and-safety-policy-remote-hybrid.html'] = { Component: HealthSafetyRemotePage, ...pageMeta['health-and-safety-policy-remote-hybrid.html'], bodyClass: '' }
pages['carbon-reduction-plan.html'] = { Component: CarbonReductionPage, ...pageMeta['carbon-reduction-plan.html'], bodyClass: '' }
pages['environmental-policy.html'] = { Component: EnvironmentalPolicyPage, ...pageMeta['environmental-policy.html'], bodyClass: '' }
pages['whistleblowing-policy.html'] = { Component: WhistleblowingPage, ...pageMeta['whistleblowing-policy.html'], bodyClass: '' }
pages['employee-privacy-notice.html'] = { Component: EmployeePrivacyPage, ...pageMeta['employee-privacy-notice.html'], bodyClass: '' }

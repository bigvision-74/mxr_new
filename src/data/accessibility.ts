import type { DpSection } from './data-protection'

export const accessibilitySections: DpSection[] = [
  {
    title: 'Our Commitment',
    blocks: ['Meta Extended Reality Ltd is committed to ensuring digital accessibility for all visitors, including individuals with visual, motor, auditory, or cognitive impairments. We are continuously upgrading our website (https://mxr.ai) and online developer portals to align with the statutory requirements of the UK Equality Act 2010.'],
  },
  {
    title: 'Our Accessibility Targets',
    blocks: [
      'We aim to ensure that our digital assets conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards. Our ongoing optimization roadmap includes:',
      { terms: [
        ['Full Keyboard Navigability', 'Structuring our customer portals and billing interfaces so they can be navigated completely without a mouse, using standard tab sequences and keyboard commands.'],
        ['Screen Reader Compatibility', 'Adding comprehensive ARIA landmarks, page structural hierarchies, and explicit image alternative text (Alt Text) to allow text-to-speech software to translate our documentation clearly.'],
        ['Visual Adaptability', 'Maintaining high colour contrast ratios between text layouts and backdrops, while ensuring our website content can be scaled up to 200% magnification without breaking page readability or alignment.'],
        ['Cognitive Clarity', 'Presenting our software installation guidelines, financial processing tracking details, and compliance terms in clear, plain language accessible to global users.'],
      ] },
    ],
  },
  {
    title: 'Platform Specific Limitations',
    blocks: ['While we strive for absolute web accessibility, certain advanced core features of our Extended Reality (XR) software bundles and 3D spatial asset generation interfaces require high-performance spatial awareness and motor coordination. We are actively investigating alternative workflow mechanisms to maximize accessibility across our technical software packages.'],
  },
  {
    title: 'Feedback and Contact Information',
    blocks: [
      'We welcome your input regarding the accessibility of our digital platforms. If you encounter any technical visibility or structural barriers while navigating MXR.AI, please contact our internal team directly:',
      { terms: [
        ['Email', 'navjotkhaira@mxr.ai (Attn: Digital Accessibility Desk)'],
        ['Postal Address', 'Meta Extended Reality Ltd, 267 Argyll Avenue, Slough, England, SL1 4HE'],
      ] },
      'We review all accessibility inquiries and aim to provide an alternative format or technical solution within 10 business days.',
    ],
  },
]

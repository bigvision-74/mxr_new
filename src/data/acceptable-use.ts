import type { DpSection } from './data-protection'

export const aupSections: DpSection[] = [
  {
    title: 'Overview',
    blocks: ['This Acceptable Use Policy (“AUP”) defines the permitted and prohibited uses of the virtual spaces, software applications, developer tools, and generative artificial intelligence engines available via the MXR.AI platform (collectively, the “Services”). This policy applies to all visitors, registered users, enterprise accounts, and creators utilizing our platform.'],
  },
  {
    title: 'Prohibited Use of Generative AI Platforms',
    blocks: [
      'You may not use our generative text-to-image, text-to-3D, or natural language processing tools to create, upload, download, or share any digital assets, textures, code, or environments that:',
      { terms: [
        ['Generate Harmful Content', 'Promote hate speech, violence, self-harm, harassment, or real-world physical or financial damage.'],
        ['Produce Sexually Explicit Material', 'Generate or distribute pornographic, highly suggestive, or sexually explicit XR textures, avatars, or virtual models.'],
        ['Create Unregulated Weaponry/Hazards', 'Generate blueprints, 3D printing code, or operational step-by-step schematics for firearms, biological weapons, or illegal hazardous materials.'],
        ['Deceive or Manipulate (Deepfakes)', 'Intentionally generate deceptive, realistic spatial clones, voice synthetics, or deepfakes of real individuals without their explicit written consent.'],
      ] },
    ],
  },
  {
    title: 'System Manipulation and Reverse Engineering',
    blocks: [
      'You strictly agree not to abuse or exploit our underlying AI models and software infrastructure. Prohibited activities include:',
      { terms: [
        ['Prompt Injection & Jailbreaking', 'Employing systematic patterns of prompting designed to bypass the safety controls, content filters, or ethical guardrails embedded within our Large Language Models or Visual-Language Models.'],
        ['Scraping for Competitive Training', 'Employing scrapers, bots, or programmatic extractors to systematically harvest output data, weights, or asset structures from our platform to train or fine-tune competing machine learning or computer vision models.'],
        ['Reverse Engineering', 'Attempting to decompile, unpack, or discover the underlying proprietary source code or model weights of our on-device edge AI algorithms or cloud architectures.'],
      ] },
    ],
  },
  {
    title: 'Enforcement and Account Termination',
    blocks: [
      'We use automated safety filters and internal auditing tools to spot violations of this policy. If a breach is detected, we hold the absolute right to:',
      { list: [
        'Block or delete the offending generated asset or prompt input instantly.',
        'Suspend or permanently terminate your MXR platform access and licensing, with zero right to a financial refund on outstanding invoices.',
        'Report criminal actions directly to UK law enforcement authorities.',
      ] },
    ],
  },
]

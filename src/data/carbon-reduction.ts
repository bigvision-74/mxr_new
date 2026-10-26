import type { DpSection } from './data-protection'

export const carbonReductionSections: DpSection[] = [
  {
    title: 'Evergreen Level 1 Statement',
    blocks: [
      'MXR confirms that it meets the NHS Supply Chain Evergreen Sustainable Supplier Assessment Level 1 requirements. We have published a Carbon Reduction Plan aligned to PPN 006/21, covering Scope 1, Scope 2 and relevant Scope 3 emissions, with a commitment to Net Zero by 2050 and annual review of progress.',
    ],
  },
  {
    title: 'Statement of Intent',
    blocks: [
      'Although MXR operates as a micro-entity and falls below the statutory threshold for mandatory Procurement Policy Note (PPN) 006/21 carbon reporting, we are fully committed to reducing our environmental impact. As an organisation specialised in information technology, data operations, and immersive virtual environments, we recognise that our primary carbon footprint stems from digital infrastructure, data storage, hardware lifecycles, and travel.',
      'Our objective is to minimise our greenhouse gas (GHG) emissions and align our operations with the UK’s national target of achieving Net Zero carbon emissions by 2050.',
    ],
  },
  {
    title: 'Commitment to Achieving Net Zero',
    blocks: [
      'MXR is committed to achieving Net Zero greenhouse gas emissions by 2050 or earlier, in line with UK Government policy and NHS Net Zero ambitions.',
    ],
  },
  {
    title: 'Organisational Profile',
    blocks: [
      'MXR is a UK SME. Operations include a 1,700 sq ft office in Slough with hybrid working arrangements, deployment of approximately 30 VR systems per annum, and light cloud storage / SaaS usage.',
    ],
  },
  {
    title: 'Baseline Emissions Footprint (2026)',
    blocks: [
      {
        table: {
          head: ['Source', 'tCO2e'],
          rows: [
            ['Scope 1', '0.0'],
            ['Scope 2', '2.0'],
            ['Scope 3', '15.7'],
            ['Total', '17.7'],
          ],
        },
      },
    ],
  },
  {
    title: 'Current Emissions Reporting Estimate (2026/27)',
    blocks: [
      {
        table: {
          head: ['Source', 'tCO2e'],
          rows: [
            ['Scope 1', '0.0'],
            ['Scope 2', '1.8'],
            ['Scope 3', '14.9'],
            ['Total', '16.7'],
          ],
        },
      },
    ],
  },
  {
    title: 'Target Core Areas and Action Plan',
    blocks: [
      { h: 'A. Low-Carbon Digital Infrastructure and Cloud Architecture' },
      {
        terms: [
          ['Green Cloud Hosting', 'We contractually prioritise cloud service providers (such as AWS, Google Cloud, or Microsoft Azure) that utilise 100% renewable energy zones to host our data operations, software builds, and extended reality (XR) platforms.'],
          ['Data Efficiency', 'Our Data Operations Manager routinely audits our databases to delete redundant data, optimise code efficiency, and compress assets, directly reducing the processing power and server cooling energy required by our digital systems.'],
          ['Remote Software Deployment', 'Our software deployment and support capability is delivered remotely, removing the need for on-site engineering visits for routine updates and support.'],
        ],
      },
      { h: 'B. Sustainable Hardware and E-Waste Management' },
      {
        terms: [
          ['Lifecycle Extensions', 'We actively combat e-waste by maintaining a strict procurement policy that favours high-performance, easily repairable development machines and VR headsets, extending their operational lifespan to a minimum of 4–5 years.'],
          ['Circular Economy Donations', 'In line with our social value model, 100% of decommissioned but functional IT equipment and test VR headsets are refurbished and donated to local underfunded alternative education schools and community hubs, bypassing the landfill lifecycle.'],
          ['Certified Recycling', 'Any hardware that reaches a total end-of-life state is contractually recycled via licensed Waste Electrical and Electronic Equipment (WEEE) certified facilities to ensure raw materials are recovered sustainably.'],
          ['Consolidated Logistics', 'VR hardware deployments are consolidated and route-planned to minimise the number of separate shipments and journeys required.'],
        ],
      },
      { h: 'C. Minimising Operational Energy and Travel' },
      {
        terms: [
          ['Digital-First & Hybrid Working', 'We operate a highly flexible, remote-first workplace model. By utilising video conferencing and collaborative cloud environments for internal milestones, director reviews, and developer syncs, we eliminate daily commuting emissions.'],
          ['Virtual Client Deliverables', 'Leveraging our core product line, we actively encourage clients to conduct design consultations, product testing, and framework training within virtual immersive spaces, significantly reducing carbon-heavy business travel and physical shipping requirements.'],
          ['Public Transit Priority', 'Where physical site visits or client deployments are unavoidable, MXR policy dictates that staff must utilise public rail networks rather than private cars wherever logistically viable.'],
        ],
      },
    ],
  },
  {
    title: 'Future Carbon Reduction Initiatives',
    blocks: [
      {
        list: [
          'Explore on-site power generation at our facility, augmented by solar power.',
          'Transition company vehicles to electric vehicles (EVs) to further reduce our footprint.',
        ],
      },
    ],
  },
  {
    title: 'Monitoring, Governance, and Accountability',
    blocks: [
      {
        terms: [
          ['Annual Review', 'This policy and plan are reviewed annually by the Board of Directors to ensure our operational footprint scales cleanly alongside our commercial pipeline.'],
          ['Employee Awareness', 'All current staff and incoming apprentices are fully inducted into our digital energy conservation practices, such as power-down protocols for testing equipment and eco-routing for server architectures.'],
        ],
      },
    ],
  },
  {
    title: 'Declaration and Sign Off',
    blocks: [
      'This Carbon Reduction Plan and Evergreen Level 1 Statement have been completed in accordance with PPN 006/21 and associated UK Government guidance, and reflect MXR’s approach as submitted to the NHS Supply Chain Medical Simulation and Technologies 2027 framework.',
      'PPN 006/21 compliant. Updated 1 January 2026.',
    ],
  },
]

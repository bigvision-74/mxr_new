import type { DpSection } from './data-protection'

export const carbonReductionSections: DpSection[] = [

  {
    title: 'Commitment to Achieving Net Zero',
    blocks: [
      'MXR Ltd is committed to achieving Net Zero greenhouse gas emissions across its UK operations by 2050 or earlier. This Carbon Reduction Plan applies to MXR Ltd as the bidding supplier.',
    ],
  },
  {
    title: 'Organisational boundary and calculation approach',
    blocks: [
      'MXR is a UK SME developing and supplying immersive simulation, XR training systems and software. It operates an approximately 1,700 sq ft electrically heated office in Slough with hybrid working. MXR does not own a routine company vehicle fleet; staff use private cars for reimbursed business journeys and vehicles may be hired when necessary. Reimbursed journeys are treated as Scope 3 business travel, not Scope 1. The footprint should use the operational-control boundary, the GHG Protocol Corporate Standard and relevant UK Government greenhouse gas conversion factors. Figures below are drawn from the previously published MXR policy and earlier indicative working estimates. They require source-data verification and consistent period definitions before the declaration of full conformity can be signed.',
    ],
  },
  {
    title: 'Baseline Emissions Footprint (2026)',
    blocks: [
      'Proposed baseline year: 2026. NOTE: 2026 is not yet complete. The following published figures are estimates rather than verified full-year actuals. MXR must confirm whether to retain 2026 as a forecast baseline or adopt its latest completed 12-month reporting period before final publication.',
      {
        table: {
          head: ['Source', 'tCO2e'],
          rows: [
            ['Scope 1', '0.0'],
            ['Scope 2', '2.0'],
            ['Scope 3 — five mandatory categories', '15.7'],
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
    title: 'Emissions reduction targets',
    blocks: [
      'MXR will target a 25% reduction in absolute annual emissions by 2031 against its verified 2026 baseline, alongside its commitment to Net Zero by 2050. If the published 17.70 tCO₂e baseline is verified and is calculated on a like-for-like boundary, the indicative 2031 target is 13.28 tCO₂e (a reduction of 4.42 tCO₂e).',
'This is a proposed management target, not an established historic commitment. The Board must approve the percentage and baseline before publication. Annual progress will be assessed using consistent organisational boundaries and categories; changes in business scale and data quality will be explained. A 2026-to-2031 reduction trajectory may be refined as source data improves.'

    ],
  },
  {
    title: 'Carbon reduction initiatives and environmental management measures',
    blocks: [
      'Measures currently described in MXR’s published policy, to be confirmed as operational and applied when performing NHS contracts:',
      {
        list: [
          'Hybrid working, digital meetings and remote software deployment/support to reduce avoidable travel.',
          'Energy-efficient office operation, equipment power-down practices and efficient cloud/data management.',
'Extending the useful life of VR and IT hardware through maintenance, repair and reuse.',
'Responsible WEEE recycling of end-of-life electronic equipment; refurbishment or donation where practicable.',
'Consolidating deliveries and planning customer site visits to minimise transport activity.',
'Considering public transport for suitable journeys and energy efficiency in procurement.'
        ],
      },
      'Planned initiatives: assess renewable electricity and potential on-site generation where feasible; review opportunities for lower-emission hired vehicles; improve supplier data, travel mileage logs, waste records and electricity metering; assess embodied and use-phase impacts of XR systems.',
'Completed emissions reductions since baseline: [NOT YET QUANTIFIED]. MXR should not claim a quantified reduction until comparable measured or appropriately estimated periods are available.'
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
      'Following verification of the emissions schedule and conversion factors, the Board confirms that this Carbon Reduction Plan has been completed in accordance with PPN 006 and its associated reporting standard; that the applicable emissions are recorded in accordance with the GHG Protocol Corporate Standard and the Corporate Value Chain (Scope 3) Standard; and that appropriate UK Government emissions conversion factors have been used. Scope 1 and 2 are reported in line with relevant SECR requirements where applicable',
      'This Carbon Reduction Plan has been reviewed and approved by the Board of Directors of MXR Ltd.',
      'Name of director: Pouname Khaira',
      'Position: Managing Director',
      'Board approval date: 29 October 2026',
      'Signed on behalf of MXR Ltd: Pouname Khaira',
      'Date signed: 29 October 2026'
    ],
  },
]

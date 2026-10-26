import type { DpSection } from './data-protection'

export const termsOfSaleSections: DpSection[] = [
  {
    title: 'Overview',
    blocks: [
      'This Terms of Sale and Software Licensing Agreement (the “Agreement”) governs the purchase, licensing, billing, and deployment of all software applications, extended reality (XR) platforms, and integrated Artificial Intelligence (AI) services provided by Meta Extended Reality Ltd (“Meta XR”, “we”, “us”, or “our”) to your business entity (“Client”, “you”, or “your”).',
      'By signing an Order Form, accepting an invoice, or deploying our software, you agree to be bound by these terms.',
    ],
  },
  {
    title: 'Commercial Invoicing and Payment Terms',
    blocks: [
      { terms: [
        ['Invoice Issuance', 'Meta XR will issue electronic invoices for software licenses, setup fees, or subscription renewals as specified in your Order Form.'],
        ['Payment Due Date', 'All corporate bank invoices must be settled in full within 30 days from the date of the invoice (Net 30) via BACS, CHAPS, or authorized bank wire transfer, unless a different payment term is explicitly stated on the face of the invoice. All payments must be made in British Pounds (GBP) unless otherwise specified.'],
        ['Late Payments', 'If an invoice remains unpaid after its due date, we reserve the right to charge interest on the overdue amount at a rate of 4% per annum above the Bank of England base rate, calculated daily from the final due date until payment is settled in full. You will also be responsible for all reasonable legal and debt collection costs incurred by us.'],
      ] },
    ],
  },
  {
    title: 'Restriction and Suspension of Services for Non-Payment',
    blocks: [
      { terms: [
        ['Suspension Notice', 'If any bank invoice remains unpaid for more than 14 days past its due date, Meta XR will issue a formal electronic suspension alert to your account administrator.'],
        ['Access Restriction', 'If the outstanding balance is not settled within 7 calendar days from the date of the suspension notice, we reserve the right to automatically restrict, lock, or fully deactivate your corporate access to our SaaS portals, cloud AI processing systems, and XR headsets.'],
        ['Liability Waiver', 'Meta XR accepts zero liability for any operational downtime, lost business data, or enterprise disruption suffered by your organization resulting from a software lock triggered by non-payment. Services will only be re-activated once all outstanding balances, late interest fees, and re-activation costs are paid in full.'],
      ] },
    ],
  },
  {
    title: 'Intellectual Property (IP) Protection and Ownership',
    blocks: [
      { terms: [
        ['Reservation of Rights', 'Meta XR retains full, exclusive, and absolute ownership of all intellectual property rights embedded within our services. This includes, but is not limited to, proprietary software code, custom on-device edge AI algorithms, trained machine learning model weights, spatial user interface designs, and text-to-3D asset generation systems.'],
        ['License Grant', 'Subject to your timely payment of all issued invoices, Meta XR grants you a non-exclusive, non-transferable, revocable, time-limited business license to install and run our XR applications solely for your internal business operations.'],
        ['Explicit Restrictions', 'You must not copy, modify, distribute, create derivative works of, sell, lease, or sub-license our software. Reverse engineering or attempting to extract our raw model weights, source code, or proprietary spatial tracking architecture is strictly prohibited and constitutes a material breach of contract.'],
      ] },
    ],
  },
]

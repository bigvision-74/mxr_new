export type CookieBlock =
  | string
  | { h: string }
  | { facts: [string, string][] }
  | { list: string[] }
  | { links: [string, string][] }
  | { terms: [string, string][] }

export type CookieSection = { title: string; blocks: CookieBlock[] }

export const cookieIntro = [
  'This Cookie Policy explains how Meta Extended Reality Ltd (“we”, “us”, “our”, or “MXR.AI”) uses cookies and similar tracking technologies when you visit our website https://mxr.ai and use our online customer and billing portals.',
  'This policy should be read alongside our Privacy Policy, which details how we process your broader personal data.',
]

export const cookieSections: CookieSection[] = [
  {
    title: 'What Are Cookies?',
    blocks: [
      'Cookies are small text files placed on your computer, smartphone, or tablet when you browse a website. They are widely used to make websites work efficiently, remember your preferences, secure your account sessions, and provide analytics data to site owners.',
      'We also use similar technologies, such as web beacons, tracking pixels, and local storage, which we collectively refer to as “cookies” throughout this policy.',
    ],
  },
  {
    title: 'How We Use Cookies',
    blocks: [
      'We use cookies to improve your digital experience on our platform. Some cookies are strictly necessary to allow you to navigate the website and use its core features (such as secure login fields or processing invoices). Other cookies help us analyse website traffic, remember your regional settings, and deliver tailored promotional material.',
    ],
  },
  {
    title: 'Categories of Cookies We Deploy',
    blocks: [
      'We categorise our cookies into four distinct functional types:',
      { h: 'Strictly Necessary Cookies (Always Active)' },
      'These cookies are essential for our website to function properly. Without them, core requested services cannot be provided. You cannot disable these via our cookie banner.',
      { facts: [
        ['Purpose', 'Managing secure user authentication, maintaining active platform login sessions, storing interface preferences, preventing fraudulent activity, and facilitating secure digital invoice processing.'],
        ['Legal Basis', 'Performance of a contract / Legitimate Interests.'],
      ] },
      { h: 'Performance & Analytics Cookies (Consent Required)' },
      'These cookies collect anonymous information about how visitors interact with our website.',
      { facts: [
        ['Purpose', 'Counting page visits, identifying traffic sources, tracking which documentation pages are most popular, and identifying website system errors or crash zones.'],
        ['Data Captured', 'Anonymised IP addresses, browser versions, and user navigation paths.'],
        ['Legal Basis', 'Consent.'],
      ] },
      { h: 'Functionality Cookies (Consent Required)' },
      'These cookies allow our website to remember choices you make to provide an enhanced, more personalised user experience.',
      { facts: [
        ['Purpose', 'Remembering your language preferences, regional configurations, or persistent custom portal dashboard layouts.'],
        ['Legal Basis', 'Consent.'],
      ] },
      { h: 'Targeting & Advertising Cookies (Consent Required)' },
      'These cookies may be set through our site by authorised advertising partners to build a profile of your interests and show you relevant adverts on outside platforms.',
      { facts: [
        ['Purpose', 'Measuring the financial performance of our online marketing campaigns and preventing you from seeing the same advertisement repeatedly.'],
        ['Legal Basis', 'Consent.'],
      ] },
    ],
  },
  {
    title: 'Third-Party Cookies and Operations',
    blocks: [
      'Because we utilise specialised cloud infrastructures to support our commercial workflows, the following third-party applications place cookies on your device when you interact with our website:',
      { terms: [
        ['Authorised Financial Processors (Strictly Necessary)', 'Essential, non-consensual cookies are deployed to securely authenticate your identity during commercial billing operations, verify digital invoices, prevent transaction fraud, and execute encrypted account payouts.'],
        ['Cloud Hosting & Performance (Strictly Necessary)', 'Infrastructure cookies are used to route web traffic dynamically, protect our servers from cybersecurity threats (such as DDoS attacks), and ensure our web elements load at high speeds.'],
        ['Web Analytics (Optional)', 'If you grant active consent via our banner, analytics engines deploy persistent tracking tags to evaluate visitor interactions across the domain.'],
      ] },
    ],
  },
  {
    title: 'Managing Your Cookie Preferences',
    blocks: [
      'You have full statutory control over how cookies are stored on your devices. We enforce a Privacy-by-Design standard, meaning all non-essential cookies are blocked by default until you grant affirmative permission.',
      { h: 'Our Website Consent Banner' },
      'When you first visit MXR.AI, a cookie settings choice window will appear. You can click “Accept All”, “Reject All”, or select “Manage Settings” to fine-tune your specific tracking choices. You can change your mind and adjust these configurations at any time by clicking the static “Cookie Preferences” link in our website footer.',
      { h: 'Modifying Your Web Browser Settings' },
      'Most internet browsers allow you to modify your configurations to block all cookies, accept third-party cookies only, or clear your history upon closing. The settings links for the most common web applications include:',
      { links: [
        ['Google Chrome Cookie Controls', 'https://support.google.com/chrome/answer/95647'],
        ['Microsoft Edge Cookie Controls', 'https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'],
        ['Apple Safari Cookie Controls', 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac'],
        ['Mozilla Firefox Cookie Controls', 'https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop'],
      ] },
      'Please note that if you completely block all cookies via your browser settings, critical parts of our website and invoicing system may fail to work properly.',
    ],
  },
  {
    title: 'Cookie Expiration & Retention',
    blocks: [
      'Cookies operate under two primary lifecycles:',
      { terms: [
        ['Session Cookies', 'Temporary files that expire and self-delete the moment you close your web browser or log out of your MXR portal.'],
        ['Persistent Cookies', 'Files that remain on your local drive for a predetermined timeline (varying from 30 days up to 12 months) unless manually cleared. These recognise your device upon return visits.'],
      ] },
    ],
  },
  {
    title: 'Changes to this Cookie Policy',
    blocks: [
      'We will update this Cookie Policy from time to time to reflect operational updates or changes to relevant data tracking laws. Any modifications will be posted publicly with an updated revision date at the top of this page.',
    ],
  },
  {
    title: 'Contact Us',
    blocks: [
      'If you have any questions regarding how we deploy tracking technologies on our website, please get in touch with our internal data operations desk.',
    ],
  },
]

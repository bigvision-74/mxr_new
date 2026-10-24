import type { FormEvent } from 'react'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'

const channels = [
  { icon: Phone, label: 'Call Us', value: '+44 7393 173361', href: 'tel:+447393173361', note: 'Speak directly with our team.' },
  { icon: Mail, label: 'Email Address', value: 'team@mxr.ai', href: 'mailto:team@mxr.ai', note: 'Send us your questions or project brief.' },
]

const sectors = ['Defence & Security', 'Healthcare', 'Education', 'Emergency Services', 'Enterprise', 'Government', 'Other']

function sendEnquiry(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const d = new FormData(e.currentTarget)
  const v = (k: string) => String(d.get(k) || '').trim()
  const body = [
    `Name: ${v('first')} ${v('last')}`,
    `Company: ${v('company')}`,
    `Sector: ${v('sector')}`,
    `Website: ${v('website')}`,
    `Phone: ${v('phone')}`,
    `Email: ${v('email')}`,
    '',
    v('message'),
  ].join('\n')
  window.location.href = `mailto:team@mxr.ai?subject=${encodeURIComponent('Website enquiry from ' + (v('company') || v('first')))}&body=${encodeURIComponent(body)}`
}

export default function ContactPage() {
  return (
  <main className="contact-page">
    <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-copy">
        <p className="eyebrow">CONTACT MXR</p>
        <h1>Let’s start a conversation.</h1>
        <p>Tell us about your training, simulation or AI challenge. We’ll help you explore what is possible and the best way to get there.</p>
      </div>
    </section>
    <section className="contact-main">
      <aside className="contact-info">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Talk to our team.</h2>
        <p className="contact-info-lead">Prefer to speak directly? Call or email us and we’ll reply within one working day.</p>
        <div className="contact-cards">
          {channels.map(({ icon: Icon, label, value, href, note }) => (
            <a key={label} className="contact-card" href={href}>
              <span className="contact-card-icon"><Icon aria-hidden="true" size={24} /></span>
              <span className="contact-card-body">
                <small>{label}</small>
                <strong>{value}</strong>
                <em>{note}</em>
              </span>
              <ArrowRight aria-hidden="true" className="contact-card-arrow" size={20} />
            </a>
          ))}
        </div>
      </aside>
      <form className="contact-form" onSubmit={sendEnquiry}>
        <h3>Send us a message</h3>
        <p className="contact-form-note">Fields marked * are required.</p>
        <label>First Name<input name="first" autoComplete="given-name" /></label>
        <label>Last Name<input name="last" autoComplete="family-name" /></label>
        <label>Company Name<input name="company" autoComplete="organization" /></label>
        <label>Company Sector
          <select name="sector" defaultValue="">
            <option value="" disabled>Select a sector</option>
            {sectors.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label>Company Website<input name="website" type="url" placeholder="https://" autoComplete="url" /></label>
        <label>Phone Number<input name="phone" type="tel" autoComplete="tel" /></label>
        <label className="full">Email*<input name="email" type="email" required autoComplete="email" /></label>
        <label className="full">Message<textarea name="message" rows={6} /></label>
        <button className="btn btn-primary full" type="submit">Send message →</button>
      </form>
    </section>
  </main>
  )
}

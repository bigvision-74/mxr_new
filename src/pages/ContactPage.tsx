import type { FormEvent, ReactNode } from 'react'
import { Phone, Mail, MapPin, ArrowRight, User, Building2, Briefcase, Globe, MessageSquare, Send } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'

const channels = [
  { icon: Phone, label: 'Call Us', value: '+44 7393 173361', href: 'tel:+447393173361', note: 'Speak directly with our team.' },
  { icon: Mail, label: 'Email Our Team', value: 'team@mxr.ai', href: 'mailto:team@mxr.ai', note: 'Send us your questions or project brief.' },
  { icon: MapPin, label: 'Our Location', value: 'United Kingdom', href: '', note: 'Global support for your training and simulation needs.' },
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

function Field({ icon: Icon, label, children, full }: { icon: typeof User; label: string; children: ReactNode; full?: boolean }) {
  return (
    <label className={full ? 'full' : undefined}>
      <span>{label}</span>
      <span className="cf-input"><Icon aria-hidden="true" size={17} />{children}</span>
    </label>
  )
}

export default function ContactPage() {
  return (
  <main className="contact-page">
    <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-copy">
        <p className="eyebrow">CONTACT MXR</p>
        <h1 className="banner-title banner-title--stacked">Let’s build something <em>extraordinary.</em></h1>
        <p className="banner-lead">Tell us about your next training, simulation or immersive technology project. We’re here to help you bring your ideas to life.</p>
        <div className="contact-pills"><span>AR / VR</span><span>Simulation</span><span>AI Solutions</span></div>
      </div>
    </section>
    <section className="contact-main">
      <aside className="contact-info">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>We’d love to hear from you.</h2>
        <p className="contact-info-lead">Whether you have a question, a project in mind, or just want to learn more about what we do — our team is ready to help.</p>
        <div className="contact-cards">
          {channels.map(({ icon: Icon, label, value, href, note }) => {
            const inner = (<>
              <span className="contact-card-icon"><Icon aria-hidden="true" size={24} /></span>
              <span className="contact-card-body"><small>{label}</small><strong>{value}</strong><em>{note}</em></span>
              {href && <ArrowRight aria-hidden="true" className="contact-card-arrow" size={18} />}
            </>)
            return href
              ? <a key={label} className="contact-card" href={href}>{inner}</a>
              : <div key={label} className="contact-card">{inner}</div>
          })}
        </div>
      </aside>
      <form className="contact-form" onSubmit={sendEnquiry}>
        <div className="cf-head">
          <span className="cf-head-icon"><Send aria-hidden="true" size={22} /></span>
          <div><h3>Send us a message</h3><p>Fields marked * are required.</p></div>
        </div>
        <Field icon={User} label="First Name *"><input name="first" required placeholder="Enter your first name" autoComplete="given-name" /></Field>
        <Field icon={User} label="Last Name *"><input name="last" required placeholder="Enter your last name" autoComplete="family-name" /></Field>
        <Field icon={Mail} label="Work Email *"><input name="email" type="email" required placeholder="you@company.com" autoComplete="email" /></Field>
        <Field icon={Building2} label="Company Name"><input name="company" placeholder="Your company name" autoComplete="organization" /></Field>
        <Field icon={Briefcase} label="Company Sector">
          <select name="sector" defaultValue="">
            <option value="" disabled>Select a sector</option>
            {sectors.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field icon={Phone} label="Phone Number"><input name="phone" type="tel" placeholder="+44 123 456 7890" autoComplete="tel" /></Field>
        <Field icon={Globe} label="Company Website" full><input name="website" type="url" placeholder="https://" autoComplete="url" /></Field>
        <Field icon={MessageSquare} label="Message *" full><textarea name="message" required rows={4} placeholder="Tell us about your project, requirements or any questions you have..." /></Field>
        <button className="btn btn-primary full" type="submit"><Send aria-hidden="true" size={16} /> Send message →</button>
      </form>
    </section>
  </main>
  )
}

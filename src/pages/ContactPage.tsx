import { useEffect } from 'react'
import { Phone, Mail, MapPin, ArrowRight, Send } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import bannerImg from '../assets/images/about/about-hero.webp'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: { region: string; portalId: string; formId: string; target: string; onFormReady?: () => void }) => void
      }
    }
  }
}

const channels = [
  { icon: Mail, label: 'Email Our Team', value: 'team@mxr.ai', href: 'mailto:team@mxr.ai', note: 'Send us your questions or project brief.' },
  { icon: MapPin, label: 'Our Location', value: 'United Kingdom', href: '', note: 'Global support for your training and simulation needs.' },
]

function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    document.body.appendChild(script)

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '143987629',
          formId: 'd03567c0-89e4-4528-80ac-39e94d53dc76',
          target: '#hubspotForm',
          onFormReady: () => {
            const container = document.querySelector('#hubspotForm')
            if (!container) return
            container.querySelectorAll<HTMLElement>(
              '.hs-recaptcha, .grecaptcha-policy, [class*="recaptcha"]'
            ).forEach(el => {
              el.style.fontSize = '0.58rem'
              el.style.color = '#c4d2dc'
              el.style.textAlign = 'right'
              el.style.marginTop = '4px'
              el.style.lineHeight = '1.4'
              el.querySelectorAll<HTMLElement>('*').forEach(child => {
                child.style.fontSize = '0.58rem'
                child.style.color = '#c4d2dc'
              })
            })
          },
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <div id="hubspotForm" />
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <video className="contact-banner-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={defaultBanner} type="video/mp4" /></video>
        <div className="contact-banner-overlay" />
        <div className="contact-banner-copy">
          <h1 className="banner-title banner-title--stacked">Let's build something <em>extraordinary.</em></h1>
          <p className="banner-lead">Tell us about your next training, simulation or immersive technology project. We're here to help you bring your ideas to life.</p>

        </div>
      </section>
      <section className="contact-main">
        <aside className="contact-info">
          <p className="eyebrow">GET IN TOUCH</p>
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
        <div className="contact-form">
          <div className="cf-head">
            <span className="cf-head-icon"><Send aria-hidden="true" size={22} /></span>
            <div><h3>Send us a message</h3><p>Our team will get back to you within 24 hours.</p></div>
          </div>
          <HubSpotForm />
        </div>
      </section>
    </main>
  )
}

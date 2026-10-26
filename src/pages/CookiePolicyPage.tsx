import { ArrowLeft, ExternalLink, Mail } from 'lucide-react'
import { Linkify } from '../components/Linkify'
import bannerImg from '../assets/images/about/about-hero.webp'
import { cookieIntro, cookieSections } from '../data/cookies'

export default function CookiePolicyPage() {
  return (
  <main className="policy-page">
    <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-copy policy-banner-wide">
        <h1 className="banner-title">Cookie <em>Policy</em></h1>
        <p className="banner-lead">How MXR.AI uses cookies and similar tracking technologies on our website and online portals.</p>
      </div>
    </section>
    <section className="terms-doc">
      <a className="policy-back-btn" href="/policies"><ArrowLeft aria-hidden="true" size={16} /> Back to Policies</a>
      <nav className="terms-toc" aria-label="Cookie policy sections">
        <h3>Contents</h3>
        {cookieSections.map((s, i) => <a key={s.title} href={`#section-${i + 1}`}><b>{i + 1}.</b> {s.title}</a>)}
      </nav>
      <article className="terms-article">
        {cookieIntro.map((t) => <p key={t}>{t}</p>)}
        {cookieSections.map((s, i) => (
          <section key={s.title} id={`section-${i + 1}`}>
            <h2><span>{i + 1}.</span> {s.title}</h2>
            {s.blocks.map((b, j) => {
              if (typeof b === 'string') return <p key={j}><Linkify text={b} /></p>
              if ('h' in b) return <h3 key={j} className="cookie-h">{b.h}</h3>
              if ('facts' in b) return <dl key={j} className="cookie-facts">{b.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              if ('list' in b) return <ul key={j}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
              if ('links' in b) return <ul key={j} className="cookie-links">{b.links.map(([label, href]) => <li key={label}><a href={href} target="_blank" rel="noopener noreferrer">{label} <ExternalLink aria-hidden="true" size={14} /></a></li>)}</ul>
              return <ul key={j}>{b.terms.map(([k, v]) => <li key={k}><strong>{k}:</strong> {v}</li>)}</ul>
            })}
          </section>
        ))}
        <div className="terms-contact">
          <p>Questions about cookies?</p>
          <a className="btn btn-primary" href="mailto:team@mxr.ai"><Mail aria-hidden="true" size={16} /> team@mxr.ai</a>
        </div>
      </article>
    </section>
  </main>
  )
}

import { Mail } from 'lucide-react'
import { Linkify } from '../components/Linkify'
import bannerImg from '../assets/images/about/about-hero.webp'
import { termsSections } from '../data/terms'

export default function TermsPage() {
  return (
  <main className="policy-page">
    <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-copy policy-banner-wide">
        <h1 className="banner-title">Terms &amp; <em>Conditions</em></h1>
        <p className="banner-lead">The terms that apply when you use the mxr.ai websites, software applications and services.</p>
      </div>
    </section>
    <section className="terms-doc">
      <nav className="terms-toc" aria-label="Terms sections">
        <h3>Contents</h3>
        {termsSections.map((s, i) => <a key={s.title} href={`#section-${i + 1}`}><b>{i + 1}.</b> {s.title}</a>)}
      </nav>
      <article className="terms-article">
        {termsSections.map((s, i) => (
          <section key={s.title} id={`section-${i + 1}`}>
            <h2><span>{i + 1}.</span> {s.title}</h2>
            {s.blocks.map((b, j) => {
              if (typeof b === 'string') return <p key={j}><Linkify text={b} /></p>
              if ('list' in b) return <ul key={j}>{b.list.map((li) => <li key={li}><Linkify text={li} /></li>)}</ul>
              return <div key={j} className="terms-sub">{b.sub.map((li) => <p key={li}>{li}</p>)}</div>
            })}
          </section>
        ))}
        <div className="terms-contact">
          <p>Questions about these Terms?</p>
          <a className="btn btn-primary" href="mailto:info@mxr.ai"><Mail aria-hidden="true" size={16} /> info@mxr.ai</a>
        </div>
      </article>
    </section>
  </main>
  )
}

import type { ReactNode } from 'react'
import { ArrowLeft, Mail } from 'lucide-react'
import { Linkify } from './Linkify'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import bannerImg from '../assets/images/about/about-hero.webp'
import type { DpSection } from '../data/data-protection'

type Props = { title: ReactNode; lead: string; sections: DpSection[]; contactLabel: string; longTitle?: boolean }

// Shared layout for policy documents: banner, back button, contents list and article body.
export function PolicyDoc({ title, lead, sections, contactLabel, longTitle }: Props) {
  return (
    <main className="policy-page">
      <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <video className="contact-banner-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={defaultBanner} type="video/mp4" /></video>
        <div className="contact-banner-overlay" />
        <div className="contact-banner-copy policy-banner-wide">
          <h1 className={`banner-title${longTitle ? ' banner-title--long' : ''}`}>{title}</h1>
          <p className="banner-lead">{lead}</p>
        </div>
      </section>
      <section className="terms-doc">
        <a className="btn btn-primary policy-back-btn" href="/policies"><ArrowLeft aria-hidden="true" size={16} /> Back to Policies</a>
        <nav className="terms-toc" aria-label="Policy sections">
          <h3>Contents</h3>
          {sections.map((s, i) => <a key={s.title} href={`#section-${i + 1}`}><b>{i + 1}.</b> {s.title}</a>)}
        </nav>
        <article className="terms-article">
          {sections.map((s, i) => (
            <section key={s.title} id={`section-${i + 1}`}>
              <h2><span>{i + 1}.</span> {s.title}</h2>
              {s.blocks.map((b, j) => {
                if (typeof b === 'string') return <p key={j}><Linkify text={b} /></p>
                if ('h' in b) return <h3 key={j} className="cookie-h">{b.h}</h3>
                if ('list' in b) return <ul key={j}>{b.list.map((li) => <li key={li}><Linkify text={li} /></li>)}</ul>
                if ('ordered' in b) return <ol key={j}>{b.ordered.map((li) => <li key={li}><Linkify text={li} /></li>)}</ol>
                if ('terms' in b) return <ul key={j}>{b.terms.map(([k, v]) => <li key={k}><strong>{k}</strong> , <Linkify text={v} /></li>)}</ul>
                return (
                  <div key={j} className="dp-table-wrap">
                    <table className="dp-table">
                      <thead><tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                      <tbody>{b.table.rows.map((r) => <tr key={r[0]}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )
              })}
            </section>
          ))}
          <div className="terms-contact">
            <p>{contactLabel}</p>
            <a className="btn btn-primary" href="mailto:team@mxr.ai"><Mail aria-hidden="true" size={16} /> team@mxr.ai</a>
          </div>
        </article>
      </section>
    </main>
  )
}

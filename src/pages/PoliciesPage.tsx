import { ArrowRight, FileText } from 'lucide-react'
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import bannerImg from '../assets/images/about/about-hero.webp'
import { policies, policyCategories } from '../data/policies'

const livePages = new Set(['cookie-policy', 'data-protection-policy', 'data-retention-and-deletion-policy', 'mxr-data-protection-policy', 'privacy-policy', 'privacy-policy-gdpr', 'acceptable-use-policy', 'modern-slavery-statement', 'software-lifecycle-and-deprecation-policy', 'terms-of-sale-and-licensing', 'accessibility-statement', 'disaster-recovery-plan', 'it-policy', 'it-security-policy', 'security-policy', 'disciplinary-policy', 'equal-opportunities-and-discrimination-policy', 'health-and-safety-policy', 'health-and-safety-policy-remote-hybrid', 'whistleblowing-policy', 'carbon-reduction-plan', 'environmental-policy'])

export default function PoliciesPage() {
  return (
  <main className="policy-page">
    <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <video className="contact-banner-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={defaultBanner} type="video/mp4" /></video>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-copy">
        <h1 className="banner-title">Our <em>Policies</em></h1>
        <p className="banner-lead">At MXR, we are committed to transparency, responsibility, and ethical business practices. Please review the following policies that govern our operations.</p>
      </div>
    </section>
    <section className="policy-main">
      {policyCategories.map((cat) => (
        <div key={cat} className="policy-group">
          <h2>{cat}</h2>
          <div className="policy-grid">
            {policies.filter((p) => p.category === cat).map((p) => {
              const href = livePages.has(p.slug) ? `/${p.slug}` : undefined
              const Card = href ? 'a' : 'div'
              return (
              <Card key={p.slug} className={`policy-card${href ? ' policy-card--link' : ''}`} href={href}>
                <span className="policy-card-icon"><FileText aria-hidden="true" size={22} /></span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                {href && <span className="policy-card-link">Read more <ArrowRight aria-hidden="true" size={16} /></span>}
              </Card>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  </main>
  )
}

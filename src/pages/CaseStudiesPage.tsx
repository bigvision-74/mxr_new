import { ArrowRight, Briefcase } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'
import caseStudiesData from '../../casestudiesdata.json'

export default function CaseStudiesPage() {
    return (
        <main className="case-studies-page">
            <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="contact-banner-overlay" />
                <div className="contact-banner-copy">
                    <p className="eyebrow">MXR CASE STUDIES</p>
                    <h1 className="banner-title banner-title--stacked">
                        Real impact, <em>real results</em>
                    </h1>
                    <p className="banner-lead">
                        Explore how MXR has helped organisations across healthcare, education and enterprise deliver transformative experiences through XR and AI.
                    </p>
                    <div className="blog-banner-pills">
                        <span>AI Solutions</span>
                        <span>VR &amp; XR</span>
                        <span>Healthcare</span>
                        <span>Education</span>
                    </div>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="blog-grid-header">
                    <h2>All Case Studies</h2>
                    <span className="blog-count">{caseStudiesData.length} case studies</span>
                </div>
                <div className="blog-grid">
                    {caseStudiesData.map((cs) => (
                        <article className="blog-card" key={cs.slug}>
                            <a href={`/case-studies/${cs.slug}`} className="blog-card-img" tabIndex={-1} aria-hidden="true">
                                <img
                                    src={`/${cs.image}`}
                                    alt={cs.shorttitle}
                                    loading="lazy"
                                />
                            </a>
                            <div className="blog-card-body">
                                <div className="blog-card-date">
                                    <Briefcase size={12} />
                                    {cs.industry}
                                </div>
                                <h3 className="blog-card-title">{cs.shorttitle}</h3>
                                <p className="blog-card-desc">{cs.shortdesc}</p>
                                <a href={`/case-studies/${cs.slug}`} className="btn btn-primary btn-small">
                                    Read more <ArrowRight size={14} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

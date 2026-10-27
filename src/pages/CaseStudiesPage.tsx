import { ArrowRight, Briefcase } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'
import caseStudiesData from '../../casestudiesdata.json'

export default function CaseStudiesPage() {
    return (
        <main className="case-studies-page">
            <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="contact-banner-overlay" />
                <div className="contact-banner-copy">

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

            <section className={"final-cta home-wave-section home-wave-cta"} id={"contact"}>
                <div className={"home-wave-media"} aria-hidden={"true"}>
                    <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
                        <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
                    </video>
                </div>
                <div>
                    <p className={"eyebrow"}>
                        {"START A CONVERSATION"}
                    </p>
                    <h2>
                        {"Ready to Transform the Way You Train?"}
                    </h2>
                    <p>
                        {"Discover how MXR can help your organisation create safer, smarter and more effective learning experiences."}
                    </p>
                </div>
                <div className={"button-row"}>
                    <a className={"btn btn-primary"} href={"/contact"}>
                        {"Talk to Our Team →"}
                    </a>
                    <a className={"btn btn-secondary"} href={"/#solutions"}>
                        {"Explore Solutions"}
                    </a>
                </div>
            </section>
        </main>
    )
}

import { ArrowLeft, Briefcase, Clock, Cpu, User, FolderKanban, Sparkles } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'
import caseStudiesData from '../../casestudiesdata.json'

type BaseBlock =
    | { type: 'title'; content: string }
    | { type: 'para'; content: string[] }
    | { type: 'list'; content: string[] }
    | { type: 'quote'; content: string; attribution?: string }

type SideBySideBlock = {
    type: 'sidebyside'
    left: BodyBlock[]
    right: BodyBlock[]
}

type KeyFeaturesBlock = {
    type: 'keyfeatures'
    features: Array<{
        icon?: string
        title: string
        description: string
    }>
}

type BodyBlock = BaseBlock | SideBySideBlock | KeyFeaturesBlock

function renderBlock(block: BodyBlock, index: number) {
    if (!block) return null

    // 1. Titles / Headings
    if (block.type === 'title') {
        return (
            <h2 key={index} className="cs-section-title">
                {block.content}
            </h2>
        )
    }

    // 2. Bullet Lists (supporting HTML formatting)
    if (block.type === 'list') {
        const items = Array.isArray(block.content) ? block.content : []
        return (
            <ul key={index} className="cs-list">
                {items.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </ul>
        )
    }

    // 3. Blockquotes
    if (block.type === 'quote') {
        return (
            <blockquote key={index} className="cs-blockquote">
                <p>{block.content}</p>
                {block.attribution && <cite>{block.attribution}</cite>}
            </blockquote>
        )
    }

    // 4. Side-by-Side (2 Columns)
    if (block.type === 'sidebyside') {
        return (
            <div key={index} className="cs-sidebyside">
                <div className="cs-sidebyside-col">
                    {block.left.map((subBlock, i) => renderBlock(subBlock, i))}
                </div>
                <div className="cs-sidebyside-col">
                    {block.right.map((subBlock, i) => renderBlock(subBlock, i))}
                </div>
            </div>
        )
    }

    // 5. Key Features Grid
    if (block.type === 'keyfeatures') {
        return (
            <div key={index} className="cs-features-wrap">
                <div className="cs-features-grid">
                    {block.features.map((feature, i) => (
                        <div key={i} className="cs-feature-card">
                            <div className="cs-feature-icon-wrap">
                                <Sparkles size={20} className="cs-feature-icon" />
                            </div>
                            <h4 className="cs-feature-title">{feature.title}</h4>
                            <p className="cs-feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 6. Paragraphs (Array of strings or single string)
    if (block.type === 'para') {
        const paragraphs = Array.isArray(block.content)
            ? block.content
            : typeof block.content === 'string'
                ? [block.content]
                : []

        return (
            <div key={index} className="cs-para-group">
                {paragraphs.map((text, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </div>
        )
    }

    return null
}

export default function CaseStudyDetailPage() {
    const segments = window.location.pathname.split('/').filter(Boolean)
    const slug = segments[segments.length - 1]
    const cs = caseStudiesData.find(c => c.slug === slug)

    if (!cs) {
        return (
            <main className="blog-detail-page">
                <div className="blog-not-found">
                    <h2>Case study not found</h2>
                    <p>We couldn't find the case study you're looking for.</p>
                    <a href="/case-studies" className="btn btn-primary">
                        <ArrowLeft size={16} /> Back to case studies
                    </a>
                </div>
            </main>
        )
    }

    const imageSrc = cs.cardImg?.startsWith('/') ? cs.cardImg : `/${cs.cardImg || cs.image}`

    return (
        <main className="blog-detail-page">
            {/* Banner */}
            <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="contact-banner-overlay" />
                <div className="contact-banner-copy">
                    <p className="eyebrow">MXR CASE STUDIES</p>
                    <h1 className="blog-detail-banner-title">{cs.bannerHeading}</h1>
                    {cs.subHeading && <p className="banner-lead">{cs.subHeading}</p>}
                </div>
            </section>

            <div className="blog-detail-body-wrap">
                <div className="blog-detail-inner">
                    <a href="/case-studies" className="blog-detail-back">
                        <ArrowLeft size={14} /> All case studies
                    </a>

                    {/* Meta info card */}
                    <div className="cs-meta-card">
                        <div className="cs-meta-grid">
                            <div className="cs-meta-item">
                                <User size={15} />
                                <div>
                                    <span className="cs-meta-label">Client</span>
                                    <span className="cs-meta-value">{cs.client}</span>
                                </div>
                            </div>
                            <div className="cs-meta-item">
                                <Briefcase size={15} />
                                <div>
                                    <span className="cs-meta-label">Industry</span>
                                    <span className="cs-meta-value">{cs.industry}</span>
                                </div>
                            </div>
                            <div className="cs-meta-item">
                                <Clock size={15} />
                                <div>
                                    <span className="cs-meta-label">Duration</span>
                                    <span className="cs-meta-value">{cs.duration}</span>
                                </div>
                            </div>
                            {cs.project && (
                                <div className="cs-meta-item cs-meta-item--wide">
                                    <FolderKanban size={15} />
                                    <div>
                                        <span className="cs-meta-label">Project</span>
                                        <span className="cs-meta-value">{cs.project}</span>
                                    </div>
                                </div>
                            )}
                            <div className="cs-meta-item cs-meta-item--wide">
                                <Cpu size={15} />
                                <div>
                                    <span className="cs-meta-label">Technology</span>
                                    <span className="cs-meta-value">{cs.technology}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero image */}
                    {imageSrc && (
                        <div className="cs-hero-image">
                            <img src={imageSrc} alt={cs.shorttitle} />
                        </div>
                    )}

                    {/* Dynamic Case Study Body */}
                    <div className="blog-detail-content">
                        {Array.isArray(cs.body) &&
                            (cs.body as BodyBlock[]).map((block, i) => renderBlock(block, i))}
                    </div>
                </div>
            </div>
        </main>
    )
}
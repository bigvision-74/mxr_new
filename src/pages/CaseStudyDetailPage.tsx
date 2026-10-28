import { ArrowLeft, Briefcase, Clock, Cpu, User, FolderKanban } from 'lucide-react'
import {
    FaBrain, FaBook, FaPencilAlt, FaBuilding, FaCheck,
    FaUserMd, FaStethoscope, FaUserNurse, FaToolbox, FaLightbulb, FaLaptopCode,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'

const featureIconMap: Record<string, IconType> = {
    'natural language processing': FaBrain,
    'nlp': FaBrain,
    'syllabus': FaBook,
    'mock exam': FaPencilAlt,
    'white-labelled': FaBuilding,
    'white labelled': FaBuilding,
}

const roleIconMap: Record<string, IconType> = {
    FaUserMd, FaStethoscope, FaUserNurse, FaToolbox, FaLightbulb, FaLaptopCode,
}
import defaultBanner from '../assets/videos/defaultbanner.mp4'
import AccentTitle from '../components/AccentTitle'
import bannerImg from '../assets/images/about/about-hero.webp'
import caseStudiesData from '../../casestudiesdata.json'

type BaseBlock =
    | { type: 'title'; content: string }
    | { type: 'para'; content: string[] }
    | { type: 'list'; content: string[] }
    | { type: 'quote'; content: string; attribution?: string }
    | { type: 'video'; src: string }

type SideBySideBlock = {
    type: 'sidebyside'
    left: BodyBlock[]
    right: BodyBlock[]
}

type KeyFeaturesBlock = {
    type: 'keyfeatures'
    features: Array<{ icon?: string; title: string; description: string }>
}

type RoleGridBlock = {
    type: 'rolegrid'
    roles: Array<{ label: string; icon: string }>
}

type BodyBlock = BaseBlock | SideBySideBlock | KeyFeaturesBlock | RoleGridBlock

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
                    {block.features.map((feature, i) => {
                        const key = Object.keys(featureIconMap).find(k =>
                            feature.title.toLowerCase().includes(k)
                        )
                        const Icon: IconType = key ? featureIconMap[key] : FaCheck
                        return (
                            <div key={i} className="cs-feature-card">
                                <div className="cs-feature-icon-wrap">
                                    <Icon size={42} color="#147ee1" />
                                </div>
                                <h4 className="cs-feature-title">{feature.title}</h4>
                                <p className="cs-feature-desc">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    // 6. Role Grid (NHS-style icon cards)
    if (block.type === 'rolegrid') {
        return (
            <div key={index} className="cs-role-grid">
                {block.roles.map((role, i) => {
                    const Icon: IconType = roleIconMap[role.icon] ?? FaCheck
                    return (
                        <div key={i} className="cs-role-card">
                            <Icon size={48} color="#147ee1" />
                            <span>{role.label}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    // 7. Video
    if (block.type === 'video') {
        if (!block.src) return (
            <div key={index} className="cs-video-placeholder">
                <span>Video coming soon</span>
            </div>
        )
        return (
            <div key={index} className="cs-video-wrap">
                <video controls playsInline preload="metadata">
                    <source src={block.src} type="video/mp4" />
                </video>
            </div>
        )
    }

    // 8. Paragraphs (Array of strings or single string)
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

    // Group the body into full-width bands: a new band starts at every heading (or side-by-side block)
    const bands: BodyBlock[][] = []
        ; (Array.isArray(cs.body) ? (cs.body as BodyBlock[]) : []).forEach(block => {
            if (!block) return
            if (block.type === 'title' || block.type === 'sidebyside' || bands.length === 0) bands.push([])
            bands[bands.length - 1].push(block)
        })

    const imageSrc = cs.cardImg?.startsWith('/') ? cs.cardImg : `/${cs.cardImg || cs.image}`

    return (
        <main className="blog-detail-page cs-page">
            {/* Banner */}
            <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
                <video className="contact-banner-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={defaultBanner} type="video/mp4" /></video>
                <div className="contact-banner-overlay" />
                <div className="contact-banner-copy policy-banner-wide">
                    <h1 className="banner-title banner-title--long"><AccentTitle text={cs.bannerHeading} /></h1>
                    {cs.subHeading && <p className="banner-lead">{cs.subHeading}</p>}
                </div>
            </section>

            <div className="blog-detail-body-wrap">
                <div className="blog-detail-inner">
                    <a href="/case-studies" className="btn btn-primary blog-detail-back">
                        <ArrowLeft size={14} /> All case studies
                    </a>

                    {/* Meta card + image side by side */}
                    <div className="cs-hero-row">
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

                        {imageSrc && (
                            <div className="cs-hero-image">
                                <img src={imageSrc} alt={cs.shorttitle} />
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Dynamic Case Study Body: full-width bands alternating white / light, with Results on the dark theme colour */}
            {bands.map((band, i) => {
                const first = band[0]
                const dark = first.type === 'title' && first.content.trim().toLowerCase() === 'results'
                // Tone alternates light / white over the non-dark bands, so a dark band never touches a same-tone neighbour
                const lightBefore = bands.slice(0, i).filter(b => !(b[0].type === 'title' && b[0].content.trim().toLowerCase() === 'results')).length
                const tone = dark ? 'dark' : lightBefore % 2 === 0 ? 'light' : 'white'
                return (
                    <section key={i} className={`cs-band cs-band--${tone}`}>
                        <div className="cs-band-inner blog-detail-content">
                            {band.map((block, j) => renderBlock(block, j))}
                        </div>
                    </section>
                )
            })}
        </main>
    )
}
import { ArrowRight, Calendar } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'
import blogsData from '../../blogsdata.json'

export default function BlogPage() {
  return (
    <main className="blog-page">
      <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="contact-banner-overlay" />
        <div className="contact-banner-copy">
          <p className="eyebrow">MXR INSIGHTS</p>
          <h1 className="banner-title banner-title--stacked">
            Ideas, research &amp; <em>perspectives</em>
          </h1>
          <p className="banner-lead">
            Explore our latest thinking on XR, AI, simulation, and the future of immersive training and education.
          </p>
          <div className="blog-banner-pills">
            <span>XR &amp; VR</span>
            <span>AI Solutions</span>
            <span>Simulation</span>
            <span>Education</span>
          </div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="blog-grid-header">
          <h2>All Articles</h2>
          <span className="blog-count">{blogsData.length} articles</span>
        </div>
        <div className="blog-grid">
          {blogsData.map((blog) => (
            <article className="blog-card" key={blog.slug}>
              <a href={`/blog/${blog.slug}`} className="blog-card-img" tabIndex={-1} aria-hidden="true">
                <img
                  src={`/${blog.image}`}
                  alt={blog.shorttitle.trim()}
                  loading="lazy"
                />
              </a>
              <div className="blog-card-body">
                <div className="blog-card-date">
                  <Calendar size={12} />
                  {blog.date}
                </div>
                <h3 className="blog-card-title">{blog.shorttitle.trim()}</h3>
                <p className="blog-card-desc">{blog.shortdesc.trim()}</p>
                <a href={`/blog/${blog.slug}`} className="btn btn-primary btn-small">
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

import { ArrowLeft } from 'lucide-react'
import bannerImg from '../assets/images/about/about-hero.webp'
import blogsData from '../../blogsdata.json'

type BodyBlock =
  | { type: 'para'; content: string[]; paraImg?: string }
  | { type: 'title'; content: string; paraImg?: string }
  | { type: 'list'; content: string[] }

function renderBlock(block: BodyBlock, index: number) {
  if (block.type === 'title') {
    return (
      <div key={index}>
        {block.paraImg && (
          <img src={`/assets/images/blog/${block.paraImg}`} alt="" className="para-img" />
        )}
        <h2>{block.content}</h2>
      </div>
    )
  }
  if (block.type === 'list') {
    return (
      <ul key={index}>
        {block.content.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    )
  }
  return (
    <div key={index}>
      {block.paraImg && (
        <img src={`/assets/images/blog/${block.paraImg}`} alt="" className="para-img" />
      )}
      {(block.content as string[]).map((text, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
    </div>
  )
}

export default function BlogDetailPage() {
  const segments = window.location.pathname.split('/').filter(Boolean)
  const slug = segments[segments.length - 1]
  const blog = blogsData.find(b => b.slug === slug)

  if (!blog) {
    return (
      <main className="blog-detail-page">
        <div className="blog-not-found">
          <h2>Article not found</h2>
          <p>We couldn't find the article you're looking for.</p>
          <a href="/blog" className="btn btn-primary">
            <ArrowLeft size={16} /> Back to blog
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="blog-detail-page">
      <section className="contact-banner" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="contact-banner-overlay" />
        <div className="contact-banner-copy">
          <h1 className="blog-detail-banner-title">{blog.bannerHeading}</h1>
          {blog.subHeading && (
            <p className="banner-lead">{blog.subHeading}</p>
          )}
        </div>
      </section>

      <div className="blog-detail-body-wrap">
        <div className="blog-detail-inner">
          <a href="/blog" className="blog-detail-back">
            <ArrowLeft size={14} /> All articles
          </a>
          <div className="blog-detail-content">
            {(blog.body as BodyBlock[]).map((block, i) => renderBlock(block, i))}
          </div>
        </div>
      </div>
    </main>
  )
}

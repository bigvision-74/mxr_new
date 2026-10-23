import { Layout } from '../components/Layout'
import { TechnologyBloom } from '../components/TechnologyBloom'
import aboutHero from '../assets/about/about-hero.webp'

export function About() {

  return (
    <Layout>
      <main>
        <section className="detail-hero">
          <div className="detail-hero-copy">
            <p className="eyebrow">ABOUT MXR</p>
            <h1>Technology built for the <span>real world.</span></h1>
            <p>We create immersive simulation, XR and AI solutions for defence, healthcare and professional training — shaped around the people who use them and the outcomes that matter.</p>
            <div className="button-row">
              <a href="mailto:hello@mxr.ai" className="btn btn-primary">Talk to our team →</a>
              <a href="/#services" className="btn btn-ghost">Our services</a>
            </div>
          </div>
          <div className="detail-hero-image">
            <img src={aboutHero} alt="MXR team working on immersive technology" />
            <div className="detail-image-overlay"></div>
            <div className="hero-metric">
              <small>OUR FOCUS</small>
              <strong>Defence · Healthcare · Training</strong>
            </div>
          </div>
        </section>

        <div className="about-hero"><TechnologyBloom /></div>

        <section className="section detail-intro">
          <div className="detail-kicker">
            <span>01</span>
            <span>Why MXR exists</span>
          </div>
          <div className="detail-statement">
            <h2>We build immersive technology that helps people learn, prepare and perform.</h2>
            <p>MXR is a specialist technology partner working in defence, healthcare and professional training. We create simulation, XR and AI solutions that are shaped around the people who use them and the outcomes that matter.</p>
            <p>The best technology makes hard things possible. We focus on building tools that work in the real world — under pressure, at scale, and in the hands of people with serious responsibilities.</p>
          </div>
        </section>

        <section className="capability-section section">
          <div className="section-heading">
            <h2>How we work</h2>
            <p>Every engagement starts with the problem, not the technology. We define the right approach, then build it with rigour and care.</p>
          </div>
          <div className="capability-grid">
            <article>
              <span>01</span>
              <div className="cap-icon">◎</div>
              <h3>Discovery first</h3>
              <p>We take the time to understand your users, your objectives and the environment in which your people work.</p>
            </article>
            <article>
              <span>02</span>
              <div className="cap-icon">⬡</div>
              <h3>Purposeful design</h3>
              <p>Experience, interaction and content are designed around your outcomes — not adapted from something generic.</p>
            </article>
            <article>
              <span>03</span>
              <div className="cap-icon">⊕</div>
              <h3>Iterative delivery</h3>
              <p>We build incrementally, with regular review and feedback loops, so you can see and shape progress throughout.</p>
            </article>
            <article>
              <span>04</span>
              <div className="cap-icon">◈</div>
              <h3>Long-term partnership</h3>
              <p>We support deployment, adoption and evolution — because technology that doesn't get used doesn't deliver value.</p>
            </article>
          </div>
        </section>

        <section className="section why">
          <div className="why-heading">
            <h2>Why organisations choose MXR</h2>
            <p>We combine technical depth with sector experience to deliver solutions that work.</p>
          </div>
          <div className="pillars">
            <article>
              <b>01</b><span>⬡</span>
              <h3>Sector focus</h3>
              <p>Our work is concentrated in defence, healthcare and professional training — sectors where the stakes are real and requirements are demanding.</p>
            </article>
            <article>
              <b>02</b><span>◎</span>
              <h3>Technical rigour</h3>
              <p>We bring engineering discipline to immersive technology — from custom simulation systems to AI-powered learning tools.</p>
            </article>
            <article>
              <b>03</b><span>◈</span>
              <h3>Outcome focus</h3>
              <p>We measure success by what people can do after training, not by the impressiveness of the technology that delivered it.</p>
            </article>
            <article>
              <b>04</b><span>⊕</span>
              <h3>Trusted delivery</h3>
              <p>We build relationships with the organisations we work with, and take responsibility for outcomes, not just deliverables.</p>
            </article>
          </div>
        </section>

        <section className="section final-cta" id="contact">
          <div>
            <p className="eyebrow">WORK WITH MXR</p>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you want to achieve. We'll help you define a practical next step.</p>
          </div>
          <div className="button-row">
            <a href="mailto:hello@mxr.ai" className="btn btn-primary">Talk to our team →</a>
          </div>
        </section>
      </main>


    </Layout>
  )
}

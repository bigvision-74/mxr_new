import { Layout } from '../components/Layout'
import drivexrSimulator from '../assets/drivexr/simulator.webp'
import drivexrUseCases from '../assets/drivexr/use-cases.webp'

export function DefenceSecurity() {
  return (
    <Layout>
      <main>
        <section className="detail-hero">
          <div className="detail-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <b>Defence &amp; Security</b>
            </nav>
            <p className="eyebrow">DEFENCE &amp; SECURITY</p>
            <h1>Simulation for those who <span>protect.</span></h1>
            <p>Mission-ready training solutions for military, emergency services and security organisations. Built around the tasks that matter — before they're needed in the field.</p>
            <div className="button-row">
              <a href="mailto:hello@mxr.ai?subject=Defence%20enquiry" className="btn btn-primary">Discuss your requirement →</a>
              <a href="/modal3d.html" className="btn btn-ghost">Explore Modal3D</a>
            </div>
          </div>
          <div className="detail-hero-image">
            <img src={drivexrSimulator} alt="Defence simulation training environment" />
            <div className="detail-image-overlay"></div>
            <div className="hero-metric">
              <small>CAPABILITY FOCUS</small>
              <strong>Simulation · XR · Knowledge management</strong>
            </div>
          </div>
        </section>

        <section className="section detail-intro">
          <div className="detail-kicker">
            <span>01</span>
            <span>The challenge</span>
          </div>
          <div className="detail-statement">
            <h2>Training for high-stakes environments demands more than traditional methods.</h2>
            <p>Defence and security teams operate under pressure, in complex and rapidly changing situations. Effective preparation requires repeated practice, controlled scenario progression and evidence-based assessment — at scale, and without putting people at risk.</p>
            <p>We build simulation and XR training tools that meet those requirements: technically credible, operationally relevant and designed to be used by real instructors with real learners.</p>
          </div>
        </section>

        <section className="capability-section section">
          <div className="section-heading">
            <h2>Capabilities for defence and security</h2>
            <p>Technology solutions shaped around operational training requirements.</p>
          </div>
          <div className="capability-grid">
            <article>
              <span>01</span><div className="cap-icon">◎</div>
              <h3>Vehicle &amp; equipment simulation</h3>
              <p>High-fidelity simulators for vehicle operation, weapons systems and specialist equipment — built around your platforms and procedures.</p>
            </article>
            <article>
              <span>02</span><div className="cap-icon">⬡</div>
              <h3>Knowledge management</h3>
              <p>Interactive 3D libraries for ordnance, equipment and technical reference — combining visual exploration with structured specification content.</p>
            </article>
            <article>
              <span>03</span><div className="cap-icon">⊕</div>
              <h3>Scenario-based XR training</h3>
              <p>Virtual and mixed reality experiences for procedural training, equipment familiarisation and scenario rehearsal.</p>
            </article>
            <article>
              <span>04</span><div className="cap-icon">◈</div>
              <h3>Instructor tools &amp; analytics</h3>
              <p>Give trainers control: configure scenarios, monitor performance and use evidence to guide structured debrief and progression.</p>
            </article>
          </div>
        </section>

        <section className="section outcomes">
          <div className="outcome-visual">
            <img src={drivexrUseCases} alt="MXR defence training simulation in use" />
            <div className="image-label">
              <small>IN DEPLOYMENT</small>
              <b>DriveXR Emergency Response Simulator</b>
            </div>
          </div>
          <div className="outcome-copy">
            <p className="eyebrow">PRODUCTS FOR DEFENCE</p>
            <h2>Platforms built for the mission.</h2>
            <p>Our defence-focused products bring together simulation, 3D knowledge management and immersive training in purpose-built platforms.</p>
            <ol>
              <li>
                <b><a href="/modal3d.html">Modal3D →</a></b>
                <span>Interactive 3D ordnance and equipment library with mobile AR and technical reference.</span>
              </li>
              <li>
                <b><a href="/drivexr.html">DriveXR →</a></b>
                <span>Emergency vehicle simulation for blue-light driver training and response rehearsal.</span>
              </li>
              <li>
                <b><a href="/insightxr.html">InsightXR →</a></b>
                <span>XR learning management, content delivery and training analytics across devices.</span>
              </li>
            </ol>
          </div>
        </section>

        <section className="related-product">
          <div className="related-copy">
            <p className="eyebrow">FEATURED PRODUCT</p>
            <h2>Modal<span>3D</span></h2>
            <p>The defence knowledge platform that connects interactive 3D, mobile AR and technical specifications in one organised library. Built for teams who need to understand complex assets before they encounter them in the field.</p>
            <div className="button-row">
              <a href="/modal3d.html" className="btn btn-primary">Explore Modal3D →</a>
              <a href="mailto:hello@mxr.ai?subject=Modal3D%20demo" className="btn btn-ghost">Book a demo</a>
            </div>
          </div>
          <div className="related-specs">
            <div><small>INTERACTION</small><b>Interactive 3D models</b></div>
            <div><small>AR CAPABILITY</small><b>Mobile augmented reality</b></div>
            <div><small>CONTENT</small><b>Technical specifications</b></div>
            <div><small>ACCESS</small><b>Web &amp; mobile</b></div>
          </div>
        </section>

        <section className="final-cta section" id="contact">
          <div>
            <p className="eyebrow">WORK WITH MXR</p>
            <h2>Have a defence training requirement?</h2>
            <p>Tell us about your training challenge. We'll help you define an approach that fits your environment and budget.</p>
          </div>
          <a href="mailto:hello@mxr.ai?subject=Defence%20enquiry" className="btn btn-primary">Get in touch →</a>
        </section>
      </main>
    </Layout>
  )
}

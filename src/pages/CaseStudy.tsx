import { Layout } from '../components/Layout'
import analyticsImg from '../assets/drivexr/analytics.webp'

export function CaseStudy() {
  return (
    <Layout>
      <main>
        <section className="case-hero">
          <div className="case-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <b>XR Readiness</b>
            </nav>
            <p className="eyebrow">CASE STUDY · 2025</p>
            <h1>Making the case for immersive technology.</h1>
            <p>How organisations across defence, healthcare and enterprise are building the evidence base for XR investment — and what it takes to get a programme off the ground.</p>
            <div className="button-row">
              <a href="mailto:hello@mxr.ai?subject=XR%20Readiness%20enquiry" className="btn btn-primary">Talk to our team →</a>
            </div>
          </div>
          <div className="case-hero-image">
            <img src={analyticsImg} alt="XR training analytics and readiness assessment" />
            <div className="case-image-overlay"></div>
            <div className="case-image-label">
              <small>RESOURCE TYPE</small>
              <strong>Strategic guide to XR programme readiness</strong>
            </div>
          </div>
        </section>

        <div className="case-facts">
          <div><small>FOCUS</small><strong>XR programme strategy</strong></div>
          <div><small>SECTORS</small><strong>Defence · Healthcare · Enterprise</strong></div>
          <div><small>APPROACH</small><strong>Evidence-led investment</strong></div>
          <div><small>PUBLISHED</small><strong>2025</strong></div>
        </div>

        <section className="section case-summary">
          <div className="case-section-label"><span>01</span><span>The context</span></div>
          <div className="case-lead">
            <h2>Most organisations know immersive technology could help. Few know how to start.</h2>
            <p>The conversation around XR in training has shifted from "is this possible?" to "how do we justify it?" Procurement teams, learning managers and senior stakeholders are asking the same questions: What's the evidence? What does it cost? How do we know it works?</p>
            <p>This resource brings together practical guidance on how to build the case, structure a pilot programme and evaluate readiness — based on what we've seen work across defence, healthcare and enterprise organisations.</p>
          </div>
        </section>

        <section className="case-challenge section">
          <div className="section-heading">
            <h2>The common barriers</h2>
            <p>The challenges we hear most often from organisations beginning their XR journey.</p>
          </div>
          <div className="case-challenge-grid">
            <article>
              <span>01</span>
              <h3>Unclear business case</h3>
              <p>Without clear metrics and expected outcomes, it's difficult to secure budget and stakeholder buy-in for immersive technology investment.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Technology uncertainty</h3>
              <p>The XR landscape is fast-moving. Choosing the right devices, platforms and delivery model requires clarity on use cases before evaluating options.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Integration complexity</h3>
              <p>How does XR fit alongside existing training programmes, LMS systems and infrastructure? Integration is often underestimated at the outset.</p>
            </article>
          </div>
        </section>

        <section className="section case-solution">
          <div className="case-section-label"><span>02</span><span>The approach</span></div>
          <div className="case-solution-content">
            <h2>Building your XR readiness in stages.</h2>
            <p>Organisations that succeed with XR don't start with technology — they start with a clear training problem and work outwards from there.</p>
            <div className="case-solution-grid">
              <article><b>STAGE 1</b><h3>Define the training gap</h3><p>Identify where existing methods fall short: fidelity, scalability, access, cost or safety constraints that XR could address.</p></article>
              <article><b>STAGE 2</b><h3>Select the right use case</h3><p>Focus investment on a specific, bounded use case that is measurable and where the technology offers a clear advantage.</p></article>
              <article><b>STAGE 3</b><h3>Establish success metrics</h3><p>Define what good looks like before you build — completion rates, competency scores, time-to-proficiency or cost-per-learner.</p></article>
              <article><b>STAGE 4</b><h3>Run a structured pilot</h3><p>Deploy with a defined learner group, collect evidence, and use the data to inform the case for wider rollout.</p></article>
            </div>
          </div>
        </section>

        <section className="case-delivery section">
          <div className="case-delivery-copy">
            <p className="eyebrow">HOW MXR SUPPORTS XR READINESS</p>
            <h2>From concept to evidence.</h2>
            <p>We support organisations at every stage of XR readiness — from initial scoping to pilot delivery and evaluation.</p>
          </div>
          <ul className="case-delivery-steps">
            <li><span>DISCOVER</span><div><b>Training needs analysis</b><p>We help map the training challenge, identify the right technology approach and scope a realistic programme.</p></div></li>
            <li><span>PILOT</span><div><b>Rapid prototype and test</b><p>Build a focused pilot experience that demonstrates the value of XR to your stakeholders with real learners.</p></div></li>
            <li><span>EVALUATE</span><div><b>Evidence and reporting</b><p>Collect the data and shape a report that supports investment decisions and programme expansion.</p></div></li>
            <li><span>SCALE</span><div><b>Programme deployment</b><p>Move from pilot to programme — with infrastructure, content and support in place for sustained delivery.</p></div></li>
          </ul>
        </section>

        <section className="section case-outcomes">
          <div className="case-section-label"><span>03</span><span>What good looks like</span></div>
          <div>
            <h2>Outcomes from organisations who got it right.</h2>
            <div className="outcome-list">
              <article><span>↗</span><div><h3>Reduced training costs</h3><p>Immersive simulation can replace high-cost live exercises and reduce logistical overhead while maintaining training quality.</p></div></article>
              <article><span>↗</span><div><h3>Faster time to competency</h3><p>Repeated practice in simulated environments builds procedural confidence more efficiently than traditional classroom delivery.</p></div></article>
              <article><span>↗</span><div><h3>Scalable delivery</h3><p>XR platforms can extend training reach without proportional increases in instructor time or resource demand.</p></div></article>
              <article><span>↗</span><div><h3>Evidence of learning</h3><p>Analytics and performance data from XR training provide objective evidence of competency development over time.</p></div></article>
            </div>
          </div>
        </section>

        <div className="case-note">
          <p className="eyebrow">ABOUT THIS RESOURCE</p>
          <p>This guide draws on MXR's experience delivering simulation, XR and AI training solutions across defence, healthcare and enterprise organisations. If you're beginning your XR readiness journey and would like to discuss your specific context, we're happy to help.</p>
        </div>

        <section className="final-cta section" id="contact">
          <div>
            <p className="eyebrow">START YOUR XR JOURNEY</p>
            <h2>Ready to explore what XR could do for your organisation?</h2>
            <p>Let's start with a conversation about your training challenge. We'll help you define a practical next step.</p>
          </div>
          <a href="mailto:hello@mxr.ai?subject=XR%20Readiness%20enquiry" className="btn btn-primary">Talk to our team →</a>
        </section>
      </main>
    </Layout>
  )
}

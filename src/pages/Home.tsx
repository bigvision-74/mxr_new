import { Layout } from '../components/Layout'
import { ImmersiveHero } from '../components/ImmersiveHero'
import { services } from '../data/services'
import { WaveBackground } from '../components/WaveBackground'
import { useState } from 'react'

export function Home() {
  const [industry, setIndustry] = useState('defence')

  return (
    <Layout noHeader>
      <ImmersiveHero />

      <section className="section intro" id="solutions">
        <div className="section-heading">
          <h2>Technology that trains. Systems that scale.</h2>
          <p>From bespoke simulators to enterprise learning platforms, we build solutions that equip people for the challenges that matter most.</p>
        </div>
        <div className="card-grid">
          <article className="image-card reveal visible">
            <div className="card-image defence"></div>
            <div className="card-content">
              <div className="card-meta"><span className="line-icon">◇</span></div>
              <h3>Defence &amp; Security</h3>
              <p>Simulation and XR training solutions for military, emergency services and security teams.</p>
              <a href="/defence-security.html">Explore →</a>
            </div>
          </article>
          <article className="image-card reveal visible">
            <div className="card-image healthcare"></div>
            <div className="card-content">
              <div className="card-meta"><span className="line-icon">◇</span></div>
              <h3>Healthcare Simulation</h3>
              <p>Clinical simulation platforms that prepare healthcare professionals for patient care.</p>
              <a href="/eprium.html">Explore →</a>
            </div>
          </article>
          <article className="image-card reveal visible">
            <div className="card-image enterprise"></div>
            <div className="card-content">
              <div className="card-meta"><span className="line-icon">◇</span></div>
              <h3>Enterprise Training</h3>
              <p>Immersive learning experiences and AI tools that develop skills at scale.</p>
              <a href="/insightxr.html">Explore →</a>
            </div>
          </article>
          <article className="image-card reveal visible">
            <div className="card-image custom"></div>
            <div className="card-content">
              <div className="card-meta"><span className="line-icon">◇</span></div>
              <h3>Custom Solutions</h3>
              <p>Bespoke platforms, systems integration and software built around your requirements.</p>
              <a href="#contact">Talk to us →</a>
            </div>
          </article>
        </div>
      </section>

      <section className="impact">
        <div className="impact-intro">
          <h2>Built for organisations where <span className="light">performance matters.</span></h2>
          <p>We work with defence agencies, NHS trusts, emergency services and enterprise training teams to create technology that makes a real difference.</p>
          <p>Every project starts with the people who will use it — and ends with evidence that it works.</p>
        </div>
        <div className="stats">
          <div><strong>5<span>+</span></strong><p>Years delivering immersive training solutions</p></div>
          <div><strong>10<span>+</span></strong><p>Products and platforms in active deployment</p></div>
          <div><strong>3</strong><p>Core sectors — defence, health, enterprise</p></div>
          <div><strong>100<span>%</span></strong><p>UK-based design and engineering team</p></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="services-heading">
          <h2>Services shaped around your challenge.</h2>
          <p>From simulation and XR to AI and platform development, we build the technology your teams need to learn, rehearse and perform.</p>
        </div>
        <div className="service-grid">
          <article className="service-card reveal visible">
            <div className="service-top"><div className="service-icon">SIM</div><small>01</small></div>
            <h3>Simulator Development</h3>
            <p>Purpose-built simulators that let teams practise complex tasks in a safe, repeatable environment.</p>
            <a href="/simulator-development.html">Explore service →</a>
          </article>
          <article className="service-card reveal visible">
            <div className="service-top"><div className="service-icon">XR</div><small>02</small></div>
            <h3>XR Development</h3>
            <p>Virtual, augmented and mixed reality experiences that help people understand, rehearse and interact with the world in new ways.</p>
            <a href="/xr-development.html">Explore service →</a>
          </article>
          <article className="service-card reveal visible">
            <div className="service-top"><div className="service-icon">IMR</div><small>03</small></div>
            <h3>Immersive Rooms</h3>
            <p>Projection-led environments that bring teams together for immersive learning and facilitated simulation.</p>
            <a href="/immersive-rooms.html">Explore service →</a>
          </article>
          <article className="service-card reveal visible">
            <div className="service-top"><div className="service-icon">AI</div><small>04</small></div>
            <h3>AI Solutions</h3>
            <p>Practical AI that supports learning, simplifies information workflows and helps teams focus on higher-value tasks.</p>
            <a href="/ai-solutions.html">Explore service →</a>
          </article>
        </div>
      </section>

      <section className="featured-products home-wave-section" id="products" aria-label="Featured products">
        <WaveBackground />
        <div className="section-heading section">
          <h2>Products that power immersive learning.</h2>
          <p>Purpose-built platforms and tools developed by MXR for defence, healthcare and enterprise training.</p>
        </div>
        <div className="product-grid section">
          <article className="product-card featured-card reveal visible" data-product-slide="0">
            <div>
              <p className="product-number">01</p>
              <p className="tag">DEFENCE KNOWLEDGE PLATFORM</p>
              <h3>MODAL<span>3D</span></h3>
              <p>Interactive 3D models, mobile AR and technical reference — in one organised library.</p>
              <ul className="feature-list">
                <li>Interactive 3D inspection</li>
                <li>Mobile augmented reality</li>
                <li>Technical specifications</li>
                <li>Assessment and retention</li>
                <li>Web and mobile access</li>
              </ul>
            </div>
            <a href="/modal3d.html">Explore Modal3D →</a>
          </article>
          <article className="product-card reveal visible" data-product-slide="1">
            <div>
              <p className="product-number">02</p>
              <p className="tag">CLINICAL SIMULATION PLATFORM</p>
              <h3>EP<span>Rium</span></h3>
              <p>A safe place to practise patient encounters, clinical reasoning and digital documentation.</p>
              <ul className="feature-list">
                <li>Virtual patient encounters</li>
                <li>Simulated EPR workflow</li>
                <li>Clinical reasoning practice</li>
              </ul>
            </div>
            <a href="/eprium.html">Explore EPRium →</a>
          </article>
          <article className="product-card reveal visible" data-product-slide="2">
            <div>
              <p className="product-number">03</p>
              <p className="tag">EMERGENCY DRIVER SIMULATION</p>
              <h3>Drive<span>XR</span></h3>
              <p>Emergency driving readiness through realistic scenarios, instructor control and evidence-led feedback.</p>
              <ul className="feature-list">
                <li>Vehicle dynamics simulation</li>
                <li>Instructor oversight</li>
                <li>Performance analytics</li>
              </ul>
            </div>
            <a href="/drivexr.html">Explore DriveXR →</a>
          </article>
          <article className="product-card reveal visible" data-product-slide="3">
            <div>
              <p className="product-number">04</p>
              <p className="tag">XR LEARNING MANAGEMENT</p>
              <h3>Insight<span>XR</span></h3>
              <p>Content, learners, devices and performance data — brought together in one connected platform.</p>
              <ul className="feature-list">
                <li>Content and cohort management</li>
                <li>Multi-device delivery</li>
                <li>Training insight and analytics</li>
              </ul>
            </div>
            <a href="/insightxr.html">Explore InsightXR →</a>
          </article>
        </div>
      </section>

      <section className="section process home-wave-section" id="process">
        <WaveBackground />
        <div className="process-heading">
          <h2>A clear route from idea to delivery.</h2>
          <p>We work in stages — each one building on the last — so you always know where you are and what comes next.</p>
        </div>
        <div className="process-track">
          {[
            ['01', 'Discover', 'Understand your users, objectives and the environment your people work in.'],
            ['02', 'Define', 'Establish the scope, approach and success criteria for what we\'re building together.'],
            ['03', 'Design', 'Shape the experience, test the approach and validate before development begins.'],
            ['04', 'Develop', 'Build iteratively with regular review and feedback so you see progress throughout.'],
            ['05', 'Deploy', 'Support launch, onboarding and integration into your learning environment.'],
            ['06', 'Evolve', 'Continuously improve based on real usage data and changing requirements.'],
          ].map(([num, title, text]) => (
            <div key={num} className="process-step reveal visible">
              <div className="process-node"><span>{num}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="industries" id="about">
        <div className="section-heading">
          <h2>Built for the sectors that matter.</h2>
          <p>Our expertise spans the industries where performance, safety and skill have real-world consequences.</p>
        </div>
        <div className="industry-strip">
          <button className={industry === "defence" ? "industry active" : "industry"} onClick={() => setIndustry("defence")} data-industry="defence"><span>Defence &amp; Security</span><b>Mission-ready simulation</b></button>
          <button className={industry === "healthcare" ? "industry active" : "industry"} onClick={() => setIndustry("healthcare")} data-industry="healthcare"><span>Healthcare</span><b>Clinical skill development</b></button>
          <button className={industry === "emergency" ? "industry active" : "industry"} onClick={() => setIndustry("emergency")} data-industry="emergency"><span>Emergency Services</span><b>Response training at scale</b></button>
          <button className={industry === "enterprise" ? "industry active" : "industry"} onClick={() => setIndustry("enterprise")} data-industry="enterprise"><span>Enterprise</span><b>Scalable immersive learning</b></button>
          <button className={industry === "education" ? "industry active" : "industry"} onClick={() => setIndustry("education")} data-industry="education"><span>Education</span><b>Next-generation learning</b></button>
        </div>
      </section>

      <section className="section insights">
        <div className="section-heading">
          <h2>Resources &amp; insights</h2>
          <a href="/case-study-xr-readiness.html" className="text-link">View all resources →</a>
        </div>
        <div className="insight-grid">
          <article className="reveal visible">
            <div className="insight-art art1"><span>CASE STUDY</span></div>
            <time>2025</time>
            <h3>XR Readiness: Making the case for immersive technology</h3>
            <a href="/case-study-xr-readiness.html" className="text-link">Read case study →</a>
          </article>
          <article className="reveal visible">
            <div className="insight-art art2"><span>GUIDE</span></div>
            <time>2025</time>
            <h3>From simulation to competence: how to measure immersive learning</h3>
            <a href="#contact" className="text-link">Get in touch →</a>
          </article>
          <article className="reveal visible">
            <div className="insight-art art3"><span>INSIGHT</span></div>
            <time>2025</time>
            <h3>AI in training: practical applications for defence and healthcare</h3>
            <a href="#contact" className="text-link">Get in touch →</a>
          </article>
        </div>
      </section>

      <section className="final-cta home-wave-section home-wave-cta" id="contact">
        <WaveBackground />
        <div>
          <p className="eyebrow">LET'S BUILD WHAT'S NEXT</p>
          <h2>Have a project in mind?</h2>
          <p>Tell us what you want to achieve. We'll help define a practical next step — no obligation, no jargon.</p>
        </div>
        <div className="button-row">
          <a href="mailto:hello@mxr.ai" className="btn btn-primary">Talk to our team →</a>
          <a href="/about.html" className="btn btn-secondary">Learn about MXR</a>
        </div>
      </section>


    </Layout>
  )
}

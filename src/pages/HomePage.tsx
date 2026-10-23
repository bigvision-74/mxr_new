import type { CSSProperties } from 'react'
import { useState } from 'react'
import { ImmersiveHero } from '../components/ImmersiveHero'

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0)
  return (
  <main>
    <ImmersiveHero />
    <section className={"section intro"} id={"solutions"}>
      <div className={"section-heading reveal visible"}>
        <div>
          <p className={"eyebrow"}>
            {"SOLUTIONS FOR A COMPLEX WORLD"}
          </p>
          <h2>
            {"Built for Real-World Impact."}
          </h2>
        </div>
        <p>
          {"MXR develops simulation technologies that turn complex knowledge into confident action—across high-consequence industries where better preparation matters."}
        </p>
      </div>
      <div className={"card-grid solutions-grid"}>
        <article className={"image-card reveal visible"}>
          <div className={"card-image defence"}>

          </div>
          <div className={"card-content"}>
            <span className={"line-icon"}>
              {"◇"}
            </span>
            <h3>
              {"Defence & Security"}
            </h3>
            <p>
              {"Mission-ready training for a safer world."}
            </p>
            <a href={"/defence-security"}>
              {"Explore solution "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
        <article className={"image-card reveal visible"}>
          <div className={"card-image healthcare"}>

          </div>
          <div className={"card-content"}>
            <span className={"line-icon"}>
              {"◇"}
            </span>
            <h3>
              {"Healthcare Simulation"}
            </h3>
            <p>
              {"Better practice. Brighter outcomes."}
            </p>
            <a href={"/eprium"}>
              {"Explore solution "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
        <article className={"image-card reveal visible"}>
          <div className={"card-image enterprise"}>

          </div>
          <div className={"card-content"}>
            <span className={"line-icon"}>
              {"◇"}
            </span>
            <h3>
              {"Enterprise Training"}
            </h3>
            <p>
              {"Real skills for real performance."}
            </p>
            <a href={"#products"}>
              {"Explore solution "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
        <article className={"image-card reveal visible"}>
          <div className={"card-image custom"}>

          </div>
          <div className={"card-content"}>
            <span className={"line-icon"}>
              {"◇"}
            </span>
            <h3>
              {"Custom Solutions"}
            </h3>
            <p>
              {"Built around your needs."}
            </p>
            <a href={"#contact"}>
              {"Explore solution "}
              <span>
                {"↗"}
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
    <section className={"section services"} id={"services"}>
      <div className={"services-heading reveal visible"}>
        <div>
          <p className={"eyebrow"}>
            {"OUR SERVICES"}
          </p>
          <h2>
            {"From Vision to Working Technology."}
          </h2>
        </div>
        <p>
          {"We combine simulation, immersive technology, artificial intelligence and robust platform engineering to deliver complete solutions—from early concept through to deployment and support."}
        </p>
      </div>
      <div className={"service-mosaic"}>
        <article className={"service-feature reveal visible"}>
          <div>
            <p className={"service-label"}>
              {"FEATURED CAPABILITY · 01"}
            </p>
            <span className={"service-feature-icon"}>
              {"SIM"}
            </span>
            <h3>
              {"Simulator Development"}
            </h3>
            <p>
              {"Purpose-built training simulators that recreate complex environments, equipment and procedures safely. We combine realistic interaction, scenario logic, instructor controls and measurable performance data."}
            </p>
            <div className={"service-tags"}>
              <span>
                {"Desktop"}
              </span>
              <span>
                {"VR / MR"}
              </span>
              <span>
                {"Multi-user"}
              </span>
              <span>
                {"Instructor-led"}
              </span>
            </div>
          </div>
          <a href={"/simulator-development"}>
            {"Explore Simulator Development →"}
          </a>
        </article>
        <div className={"service-secondary"}>
          <article className={"service-card service-compact reveal visible"}>
            <div className={"service-top"}>
              <span className={"service-icon"}>
                {"XR"}
              </span>
              <small>
                {"02"}
              </small>
            </div>
            <h3>
              {"XR Development"}
            </h3>
            <p>
              {"Bespoke AR, VR and mixed reality experiences for training, visualisation and operational support."}
            </p>
            <a href={"/xr-development"}>
              {"Explore service →"}
            </a>
          </article>
          <article className={"service-card service-compact reveal visible"}>
            <div className={"service-top"}>
              <span className={"service-icon"}>
                {"360°"}
              </span>
              <small>
                {"03"}
              </small>
            </div>
            <h3>
              {"Immersive Rooms"}
            </h3>
            <p>
              {"Shared projection-led environments for collaborative simulation, learning and decision-making."}
            </p>
            <a href={"/immersive-rooms"}>
              {"Explore service →"}
            </a>
          </article>
          <article className={"service-card service-compact reveal visible"}>
            <div className={"service-top"}>
              <span className={"service-icon"}>
                {"AI"}
              </span>
              <small>
                {"04"}
              </small>
            </div>
            <h3>
              {"AI Solutions"}
            </h3>
            <p>
              {"Practical AI for intelligent assistants, adaptive simulations and content workflows."}
            </p>
            <a href={"/ai-solutions"}>
              {"Explore service →"}
            </a>
          </article>
          <article className={"service-card service-compact reveal visible"}>
            <div className={"service-top"}>
              <span className={"service-icon"}>
                {"</>"}
              </span>
              <small>
                {"05"}
              </small>
            </div>
            <h3>
              {"Platform Development"}
            </h3>
            <p>
              {"Secure web, mobile and desktop platforms designed around real operational workflows."}
            </p>
            <a href={"/platform-development"}>
              {"Explore service →"}
            </a>
          </article>
        </div>
      </div>
    </section>
    <section className={"section process home-wave-section"} id={"process"}>
      <div className={"home-wave-media"} aria-hidden={"true"}>
        <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
          <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
        </video>
      </div>
      <div className={"process-heading reveal visible"}>
        <div>
          <p className={"eyebrow light"}>
            {"OUR DEVELOPMENT PROCESS"}
          </p>
          <h2>
            {"From Idea to Impact."}
          </h2>
        </div>
        <p>
          {"A structured, collaborative process keeps every project aligned with your objectives while giving teams the flexibility to learn, test and improve throughout delivery."}
        </p>
      </div>
      <div className={"process-track"}>
        <article className={"process-step reveal visible"}>
          <div className={"process-node"}>
            <span>
              {"01"}
            </span>
          </div>
          <h3>
            {"Discover"}
          </h3>
          <p>
            {"We understand your users, challenges, environment and measures of success."}
          </p>
        </article>
        <article className={"process-step reveal visible"}>
          <div className={"process-node"}>
            <span>
              {"02"}
            </span>
          </div>
          <h3>
            {"Define"}
          </h3>
          <p>
            {"Requirements, priorities and a practical delivery roadmap are agreed together."}
          </p>
        </article>
        <article className={"process-step reveal visible"}>
          <div className={"process-node"}>
            <span>
              {"03"}
            </span>
          </div>
          <h3>
            {"Design"}
          </h3>
          <p>
            {"We shape the experience, technical architecture and interactive prototype."}
          </p>
        </article>
        <article className={"process-step reveal visible"}>
          <div className={"process-node"}>
            <span>
              {"04"}
            </span>
          </div>
          <h3>
            {"Develop"}
          </h3>
          <p>
            {"Our team builds iteratively, sharing progress and integrating feedback early."}
          </p>
        </article>
        <article className={"process-step reveal visible"}>
          <div className={"process-node"}>
            <span>
              {"05"}
            </span>
          </div>
          <h3>
            {"Validate"}
          </h3>
          <p>
            {"Quality, usability, performance and security are tested before release."}
          </p>
        </article>
        <article className={"process-step reveal visible"}>
          <div className={"process-node"}>
            <span>
              {"06"}
            </span>
          </div>
          <h3>
            {"Deploy & Evolve"}
          </h3>
          <p>
            {"We launch, support adoption and continue improving as your needs develop."}
          </p>
        </article>
      </div>
    </section>
    <section className={"section partnership"} id={"partnership"}>
      <div className={"partnership-heading reveal visible"}>
        <div>
          <p className={"eyebrow"}>
            {"WHY PARTNER WITH MXR"}
          </p>
          <h2>
            {"Benefits of Partnership."}
          </h2>
        </div>
        <p>
          {"A practical technology partner with the expertise, capacity and sector knowledge to move complex projects forward."}
        </p>
      </div>
      <div className={"partnership-grid"}>
        <article className={"partnership-card reveal visible"}>
          <div className={"partnership-icon"} aria-hidden={"true"}>
            <svg viewBox={"0 0 48 48"}>
              <circle cx={"24"} cy={"24"} r={"16"}>

              </circle>
              <path d={"M28 17h-6.5a4 4 0 0 0 0 8h5a4 4 0 0 1 0 8H19M24 13v22"}>

              </path>
              <path d={"m34 10 4 4 7-7"}>

              </path>
            </svg>
          </div>
          <span>
            {"01"}
          </span>
          <h3>
            {"Cost-effective solutions"}
          </h3>
          <p>
            {"Focused delivery and scalable technology shaped around your objectives and budget."}
          </p>
        </article>
        <article className={"partnership-card reveal visible"}>
          <div className={"partnership-icon"} aria-hidden={"true"}>
            <svg viewBox={"0 0 48 48"}>
              <path d={"M8 11h25v19H18l-8 7v-7H8z"}>

              </path>
              <path d={"M17 18h8M17 23h11"}>

              </path>
              <path d={"M34 19h6v18H24v-4"}>

              </path>
            </svg>
          </div>
          <span>
            {"02"}
          </span>
          <h3>
            {"Comprehensive consulting"}
          </h3>
          <p>
            {"Support from early discovery and strategy through design, development and deployment."}
          </p>
        </article>
        <article className={"partnership-card reveal visible"}>
          <div className={"partnership-icon"} aria-hidden={"true"}>
            <svg viewBox={"0 0 48 48"}>
              <circle cx={"24"} cy={"24"} r={"17"}>

              </circle>
              <path d={"M24 14v11l8 5"}>

              </path>
              <path d={"M8 8h9M31 8h9"}>

              </path>
              <path d={"m37 17 5 1-3 4"}>

              </path>
            </svg>
          </div>
          <span>
            {"03"}
          </span>
          <h3>
            {"Rapid turnaround"}
          </h3>
          <p>
            {"A multidisciplinary team of 30 software developers gives projects the capacity to progress quickly."}
          </p>
        </article>
        <article className={"partnership-card reveal visible"}>
          <div className={"partnership-icon"} aria-hidden={"true"}>
            <svg viewBox={"0 0 48 48"}>
              <circle cx={"18"} cy={"17"} r={"6"}>

              </circle>
              <circle cx={"34"} cy={"19"} r={"5"}>

              </circle>
              <path d={"M7 38c0-8 4-12 11-12s11 4 11 12M28 29c2-2 4-3 7-3 5 0 8 4 8 11"}>

              </path>
              <path d={"m31 10 3-4 3 4"}>

              </path>
            </svg>
          </div>
          <span>
            {"04"}
          </span>
          <h3>
            {"Experienced consultants"}
          </h3>
          <p>
            {"Established expertise across education, professional learning and commercial training."}
          </p>
        </article>
      </div>
    </section>
    <section className={"featured-products home-wave-section"} id={"products"} aria-label={"Featured products"}>
      <div className={"home-wave-media"} aria-hidden={"true"}>
        <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
          <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
        </video>
      </div>
      <article hidden={activeProduct !== 0} className={"product-slide modal-showcase" + (activeProduct === 0 ? " active" : "")} data-product-slide={"0"}>
        <div className={"modal-copy reveal visible"}>
          <p className={"eyebrow light"}>
            {"FEATURED PRODUCT"}
          </p>
          <h2>
            {"MODAL"}
            <span>
              {"3D"}
            </span>
          </h2>
          <h3>
            {"The digital ammunition and ordnance library."}
          </h3>
          <p>
            {"Explore highly accurate 3D models with AR access, detailed specifications and training resources."}
          </p>
          <a className={"btn btn-white"} href={"/modal3d"}>
            {"Explore MODAL3D →"}
          </a>
        </div>
        <div className={"modal-visual reveal visible"}>
          <div className={"technical-object"}>
            <div className={"obj-part p1"}>

            </div>
            <div className={"obj-part p2"}>

            </div>
            <div className={"obj-part p3"}>

            </div>
            <div className={"obj-part p4"}>

            </div>
            <div className={"scan-line"}>

            </div>
          </div>
          <div className={"annotation a1"}>
            <b>
              {"01"}
            </b>
            {" Component inspection"}
          </div>
          <div className={"annotation a2"}>
            <b>
              {"02"}
            </b>
            {" Exploded visualisation"}
          </div>
        </div>
        <ul className={"feature-list reveal visible"}>
          <li>
            {"Interactive 3D Models"}
          </li>
          <li>
            {"AR Access"}
          </li>
          <li>
            {"Detailed Specifications"}
          </li>
          <li>
            {"Training & Assessment"}
          </li>
          <li>
            {"Web & Mobile Access"}
          </li>
        </ul>
      </article>
      <article hidden={activeProduct !== 1} className={"product-slide modal-showcase eprium-showcase" + (activeProduct === 1 ? " active" : "")} data-product-slide={"1"}>
        <div className={"modal-copy"}>
          <p className={"eyebrow light"}>
            {"FEATURED PRODUCT"}
          </p>
          <h2>
            {"EPR"}
            <span>
              {"ium"}
            </span>
          </h2>
          <h3>
            {"Clinical practice before clinical placement."}
          </h3>
          <p>
            {"Give healthcare learners a safe, realistic way to practise patient encounters, clinical reasoning and electronic patient records."}
          </p>
          <a className={"btn btn-white"} href={"/eprium"}>
            {"Explore EPRium →"}
          </a>
        </div>
        <div className={"eprium-product-visual"}>
          <div className={"eprium-screen"}>
            <div className={"eprium-screen-bar"}>
              <b>
                {"EPRium"}
              </b>
              <span>
                {"SIMULATION MODE"}
              </span>
            </div>
            <div className={"eprium-screen-body"}>
              <aside>
                <i>

                </i>
                <i>

                </i>
                <i>

                </i>
                <i>

                </i>
              </aside>
              <div>
                <small>
                  {"SIMULATED PATIENT RECORD"}
                </small>
                <h4>
                  {"Clinical encounter"}
                </h4>
                <p>
                  {"Review. Assess. Document."}
                </p>
                <div className={"record-lines"}>
                  <i>

                  </i>
                  <i>

                  </i>
                  <i>

                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className={"annotation e1"}>
            <b>
              {"01"}
            </b>
            {" Patient encounters"}
          </div>
          <div className={"annotation e2"}>
            <b>
              {"02"}
            </b>
            {" Clinical documentation"}
          </div>
        </div>
        <ul className={"feature-list"}>
          <li>
            {"Virtual Patients"}
          </li>
          <li>
            {"Simulated EPR"}
          </li>
          <li>
            {"Clinical Reasoning"}
          </li>
          <li>
            {"Educator Feedback"}
          </li>
          <li>
            {"Multi-device Access"}
          </li>
        </ul>
      </article>
      <div className={"product-slider-controls"}>
        <button onClick={() => setActiveProduct(p => (p + 1) % 2)} className={"product-arrow product-prev"} aria-label={"Previous featured product"}>
          {"←"}
        </button>
        <div className={"product-dots"} role={"tablist"} aria-label={"Choose featured product"}>
          <button onClick={() => setActiveProduct(0)} aria-selected={activeProduct === 0} className={activeProduct === 0 ? "active" : ""} role={"tab"} aria-label={"Show MODAL3D"} data-product-go={"0"}>

          </button>
          <button onClick={() => setActiveProduct(1)} aria-selected={activeProduct === 1} className={activeProduct === 1 ? "active" : ""} role={"tab"} aria-label={"Show EPRium"} data-product-go={"1"}>

          </button>
        </div>
        <button onClick={() => setActiveProduct(p => (p + 1) % 2)} className={"product-arrow product-next"} aria-label={"Next featured product"}>
          {"→"}
        </button>
      </div>
    </section>
    <section className={"section why"} id={"about"}>
      <div className={"why-heading reveal visible"}>
        <p className={"eyebrow"}>
          {"THE MXR APPROACH"}
        </p>
        <h2>
          {"More Than Simulation."}
        </h2>
        <p>
          {"We combine immersive design, intelligence and measurable outcomes to create technology that performs beyond the demo."}
        </p>
      </div>
      <div className={"pillars"}>
        <article className={"reveal visible"}>
          <span>
            {"◉"}
          </span>
          <b>
            {"01"}
          </b>
          <h3>
            {"Immersive"}
          </h3>
          <p>
            {"Experiences designed to replicate real-world environments."}
          </p>
        </article>
        <article className={"reveal visible"}>
          <span>
            {"✦"}
          </span>
          <b>
            {"02"}
          </b>
          <h3>
            {"Intelligent"}
          </h3>
          <p>
            {"Data and AI help improve learning and decision-making."}
          </p>
        </article>
        <article className={"reveal visible"}>
          <span>
            {"↗"}
          </span>
          <b>
            {"03"}
          </b>
          <h3>
            {"Measurable"}
          </h3>
          <p>
            {"Training outcomes can be assessed and improved."}
          </p>
        </article>
        <article className={"reveal visible"}>
          <span>
            {"⊞"}
          </span>
          <b>
            {"04"}
          </b>
          <h3>
            {"Scalable"}
          </h3>
          <p>
            {"Solutions designed for individuals, teams and organisations."}
          </p>
        </article>
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
        <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai"}>
          {"Talk to Our Team →"}
        </a>
        <a className={"btn btn-secondary"} href={"#solutions"}>
          {"Explore Solutions"}
        </a>
      </div>
    </section>
  </main>
  )
}

import type { CSSProperties } from 'react'
import { ArrowRight, Printer, ScanLine, Glasses, ClipboardList, Users, ShieldCheck, ChartNoAxesCombined } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { ImmersiveHero } from '../components/ImmersiveHero'
import { AdditionalFeaturedProducts, extraProducts } from '../components/AdditionalFeaturedProducts'
import { PanoramaSolutions } from '../components/PanoramaSolutions'
import '@google/model-viewer'

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [modelLoaded, setModelLoaded] = useState(false)
  const [isExploded, setIsExploded] = useState(false)
  const modelViewerRef = useRef<HTMLElement>(null)
  const [activePlatform, setActivePlatform] = useState(0)
  const newModelRef = useRef<HTMLElement>(null)
  const [isExploded2, setIsExploded2] = useState(false)
  const [newModelLoaded, setNewModelLoaded] = useState(false)

  const handleExplode2 = () => {
    const mv = newModelRef.current as any
    if (!mv) return
    if (mv.availableAnimations?.length > 0) {
      if (!isExploded2) {
        mv.animationName = mv.availableAnimations[0]
        mv.play({ repetitions: 1 })
        setIsExploded2(true)
      } else {
        mv.pause()
        mv.currentTime = 0
        setIsExploded2(false)
      }
      return
    }
    if (!isExploded2) {
      setIsExploded2(true)
      mv.setAttribute('camera-orbit', '45deg 45deg 300%')
      mv.setAttribute('field-of-view', '35deg')
      setTimeout(() => {
        mv.setAttribute('camera-orbit', '0deg 75deg auto')
        mv.setAttribute('field-of-view', '11deg')
        setIsExploded2(false)
      }, 1400)
    }
  }
  const [modelInView, setModelInView] = useState(false)
  const platformSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = modelViewerRef.current
    if (!el) return
    const onLoad = () => setModelLoaded(true)
    el.addEventListener('load', onLoad)
    return () => el.removeEventListener('load', onLoad)
  }, [])

  useEffect(() => {
    const section = platformSectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setModelInView(true); observer.disconnect() } },
      { rootMargin: '300px' }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleExplode = () => {
    const mv = modelViewerRef.current as any
    if (!mv) return

    if (mv.availableAnimations?.length > 0) {
      if (!isExploded) {
        mv.animationName = mv.availableAnimations[0]
        mv.play({ repetitions: 1 })
        setIsExploded(true)
      } else {
        mv.pause()
        mv.currentTime = 0
        setIsExploded(false)
      }
      return
    }

    // Fallback: burst camera effect
    if (!isExploded) {
      setIsExploded(true)
      mv.setAttribute('camera-orbit', '45deg 45deg 300%')
      mv.setAttribute('field-of-view', '35deg')
      setTimeout(() => {
        mv.setAttribute('camera-orbit', '0deg 70deg auto')
        mv.setAttribute('field-of-view', '11deg')
        setIsExploded(false)
      }, 1400)
    }
  }
  return (
    <main>
      <ImmersiveHero />
      <PanoramaSolutions />
      <section className={"section services"} id={"services"}>
        <div className={"services-heading reveal visible"}>
          <div>
            <p className={"eyebrow"}>
              {"OUR SERVICES"}
            </p>
            <h2>
              {"From Vision to "}
              <span style={{ color: "var(--blue)" }}>{"Working Technology."}</span>
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
                <path d={"M24 4L8 10v12c0 10.5 7 17.5 16 20.5 9-3 16-10 16-20.5V10z"}>
                </path>
                <path d={"m17 23 5 5 9-10"}>
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
                <circle cx={"14"} cy={"14"} r={"5"}>
                </circle>
                <circle cx={"34"} cy={"34"} r={"5"}>
                </circle>
                <path d={"M19 14h5a9 9 0 0 1 9 9v2a9 9 0 0 0 6 8.5"}>
                </path>
                <path d={"M14 19v5a9 9 0 0 0 9 9h2"}>
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
                <polygon points={"26,4 8,26 22,26 22,44 40,22 26,22"}>
                </polygon>
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
                <circle cx={"24"} cy={"18"} r={"13"}>
                </circle>
                <path d={"M17 30L12 42l12-4 12 4-5-12"}>
                </path>
                <path d={"m19 18 3 3 7-8"}>
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
      <section className={"featured-products home-wave-section"} id={"products"} aria-label={"Featured products"} style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0d1f35 50%, #0a1628 100%)" }}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <article hidden={activeProduct !== 0} className={"product-slide modal-showcase" + (activeProduct === 0 ? " active" : "")} data-product-slide={"0"}>
          <div className={"modal-copy reveal visible"}>
            <p className={"eyebrow light"}>{"FEATURED PRODUCT"}</p>
            <h2>{"MODAL"}<span>{"3D"}</span></h2>
            <h3>{"The digital ammunition and ordnance library."}</h3>
            <p>{"Explore highly accurate 3D models with AR access, detailed specifications and training resources."}</p>
            <a className={"btn btn-primary"} href={"/modal3d"}>{"Explore MODAL3D"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
          </div>
          <div className={"modal-visual reveal visible"} style={{ background: "transparent", backdropFilter: "none", boxShadow: "none", border: "none", overflow: "visible", height: "520px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={"/assets/images/Home/drone.png"}
              alt={"MODAL 3D – drone"}
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
          <div className="px-feat-list">
            <div className="px-feat-row">
              <div className="px-badge"><Printer aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>3D Printable Asset Library</h4>
                </div>
                <p>Access detailed, training-ready assets prepared for authorised 3D printing. Build repeatable physical training sets locally.</p>
              </div>
            </div>
            <div className="px-feat-row">
              <div className="px-badge px-badge--ar"><ScanLine aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>Augmented Reality App</h4>
                </div>
                <p>Place and inspect digital assets in the real world. Supports guided familiarisation, visual recognition and self-paced learning.</p>
              </div>
            </div>
            <div className="px-feat-row">
              <div className="px-badge px-badge--mr"><Glasses aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>Mixed Reality Environment</h4>
                </div>
                <p>Access the ammunition library via mixed reality headsets for immersive, hands-on inspection in a connected training environment.</p>
              </div>
            </div>
          </div>
        </article>
        <article hidden={activeProduct !== 1} className={"product-slide modal-showcase eprium-showcase" + (activeProduct === 1 ? " active" : "")} data-product-slide={"1"}>
          <div className={"modal-copy"}>
            <p className={"eyebrow light"}>{"FEATURED PRODUCT"}</p>
            <h2>{"EPR"}<span style={{ color: "#147ee1" }}>{"ium"}</span></h2>
            <h3>{"Clinical practice before clinical placement."}</h3>
            <p>{"Give healthcare learners a safe, realistic way to practise patient encounters, clinical reasoning and electronic patient records."}</p>
            <a className={"btn btn-primary"} href={"/eprium"}>{"Explore EPRium"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
          </div>
          <div className={"eprium-product-visual"} style={{ background: "transparent", backgroundImage: "none", backgroundColor: "transparent", backdropFilter: "none", boxShadow: "none", border: "none" }}>
            <img
              src={"/assets/images/Home/Dashboard EPRium.png"}
              alt={"EPRium dashboard screenshot"}
              loading="lazy"
              style={{ width: "120%", height: "580px", objectFit: "contain", borderRadius: "10px", display: "block", boxShadow: "none", transform: "perspective(900px) rotateY(6deg)", margin: "auto" }}
            />
          </div>
          <div className="px-feat-list">
            <div className="px-feat-row">
              <div className="px-badge"><ClipboardList aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>High-Fidelity EHR Mirror</h4>
                </div>
                <p>A simulated Electronic Health Record system that looks and feels like the real thing.</p>
              </div>
            </div>
            <div className="px-feat-row">
              <div className="px-badge px-badge--collab"><Users aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>Multi-User Sessions</h4>
                </div>
                <p>Collaborate with peers or mentors in real-time within the same simulation.</p>
              </div>
            </div>
            <div className="px-feat-row">
              <div className="px-badge px-badge--risk"><ShieldCheck aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>Risk-Free Critical Care</h4>
                </div>
                <p>Practice high-stakes emergency decisions without risking patient safety.</p>
              </div>
            </div>
            <div className="px-feat-row">
              <div className="px-badge px-badge--data"><ChartNoAxesCombined aria-hidden="true" strokeWidth={1.6} /></div>
              <div className="px-feat-body">
                <div className="px-feat-meta">
                  <h4>Data-Driven Feedback</h4>
                </div>
                <p>Instant performance analytics and auditing for students and educators.</p>
              </div>
            </div>
          </div>
        </article>
        <AdditionalFeaturedProducts active={activeProduct} />
        <div className={"product-slider-controls"}>
          <button onClick={() => setActiveProduct(p => (p - 1 + 5) % 5)} className={"product-arrow product-prev"} aria-label={"Previous featured product"}>{"←"}</button>
          <div className="product-dots" role="tablist" aria-label="Choose featured product">
            {['MODAL3D','EPRium',...extraProducts.map(p=>p.name)].map((name,index)=><button key={name} onClick={()=>setActiveProduct(index)} aria-selected={activeProduct===index} className={`product-name-tab${activeProduct===index?' active':''}`} role="tab" aria-label={`Show ${name}`} data-product-go={index}>{name}</button>)}
          </div>
          <button onClick={() => setActiveProduct(p => (p + 1) % 5)} className={"product-arrow product-next"} aria-label={"Next featured product"}>{"→"}</button>
        </div>
      </section>

      {false && (<section className="px-section" id="platform-features" aria-label="Platform features" ref={platformSectionRef as any}>
        <div className="px-head">
          <p className="eyebrow">FEATURED PRODUCTS</p>
          <h2>Everything Your Team Needs.</h2>
        </div>

        <div className="px-tabs">
          <button className={"px-tab" + (activePlatform === 0 ? " active" : "")} onClick={() => setActivePlatform(0)}>
            <span className="px-tab-sector">DEFENCE &amp; SECURITY</span>
            <span className="px-tab-name">MODAL 3D</span>
          </button>
          <button className={"px-tab" + (activePlatform === 1 ? " active" : "")} onClick={() => setActivePlatform(1)}>
            <span className="px-tab-sector px-tab-sector--health">HEALTHCARE</span>
            <span className="px-tab-name">EPRium</span>
          </button>
        </div>

        <div className="px-body">
          <div className="px-content">
            {activePlatform === 0 ? (
              <div className="px-product" key="modal">
                <p className="px-sector">DEFENCE &amp; SECURITY</p>
                <h3>MODAL<span>3D</span></h3>
                <p className="px-desc">The digital ammunition and ordnance library — highly accurate 3D models with AR access, detailed specifications and training resources.</p>
                <a href="/modal3d" className="px-cta">Explore MODAL3D →</a>
              </div>
            ) : (
              <div className="px-product" key="eprium">
                <p className="px-sector px-sector--health">HEALTHCARE</p>
                <h3>EPR<span>ium</span></h3>
                <p className="px-desc">Clinical practice before clinical placement — a safe, realistic way to practise patient encounters, clinical reasoning and electronic patient records.</p>
                <a href="/eprium" className="px-cta">Explore EPRium →</a>
              </div>
            )}
          </div>
        </div>
      </section>)}
      <section className={"section why"} id={"about"}>
        <div className={"why-heading reveal visible"}>
          <p className={"eyebrow"}>
            {"THE MXR APPROACH"}
          </p>
          <h2>
            {"More Than "}
            <em>{"Simulation."}</em>
          </h2>
          <p>
            {"We combine immersive design, intelligence and measurable outcomes to create technology that performs beyond the demo."}
          </p>
        </div>
        <div className={"pillars"}>
          <article className={"reveal visible"}>
            <span aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><circle cx="9" cy="9" r="2.5" fill="currentColor"/></svg>
            </span>
            <b aria-hidden="true">{"01"}</b>
            <h3>{"Immersive"}</h3>
            <p>{"Experiences designed to replicate real-world environments with precision."}</p>
          </article>
          <article className={"reveal visible"}>
            <span aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2L11.5 7H16L12.5 10.5L14 16L9 13L4 16L5.5 10.5L2 7H6.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </span>
            <b aria-hidden="true">{"02"}</b>
            <h3>{"Intelligent"}</h3>
            <p>{"Data and AI continuously improve learning outcomes and decision-making."}</p>
          </article>
          <article className={"reveal visible"}>
            <span aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="3,13 7,8 11,10 15,4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="15" cy="4" r="1.5" fill="currentColor"/></svg>
            </span>
            <b aria-hidden="true">{"03"}</b>
            <h3>{"Measurable"}</h3>
            <p>{"Training outcomes are tracked, assessed and continuously improved."}</p>
          </article>
          <article className={"reveal visible"}>
            <span aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
            </span>
            <b aria-hidden="true">{"04"}</b>
            <h3>{"Scalable"}</h3>
            <p>{"Solutions built for individuals, teams and entire organisations."}</p>
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
          <a className={"btn btn-primary"} href={"/contact"}>{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

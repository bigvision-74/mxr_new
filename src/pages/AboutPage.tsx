import type { CSSProperties, MouseEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import ourvision from '../assets/images/about/our-vision.webp'
import ourmission from '../assets/images/about/our-mission.webp'
import aboutValues from '../assets/images/about/about-values.webp'
import aboutHero from '../assets/images/about/about-hero.webp'
import { AboutHeroSequence } from '../components/AboutHeroSequence'

// Wireframe video is revealed through a circular lens that follows the pointer.
const moveLens = (e: MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function AboutPage() {
  return (
    <main className={"about-page"}>
      <section className={"about-hero about-hero--lens"} onMouseMove={moveLens}>
        <AboutHeroSequence />
        <span className="about-hero-lens" aria-hidden="true" />
        <div className={"about-hero-overlay"}>

        </div>
        <div className={"about-hero-copy reveal visible"}>

          <div className={"about-hero-title"}>
            <h1 className="banner-title">
              <span className={"about-title-dark"}>
                {"Your technology"}
              </span>
              <span className={"about-title-dark"}>
                {"partner for "}
                <em>
                  {"innovation"}
                </em>
              </span>
              <span>
                {"and excellence."}
              </span>
            </h1>
          </div>
          <p className="banner-lead">
            {"We create purposeful XR, simulation, AI and software solutions that help organisations train better, work smarter and prepare people for the real world."}
          </p>
          <div className={"button-row"}>
            <a className="group inline-flex items-center gap-3 rounded-full bg-[#0B66C3] px-6 py-3 text-sm font-semibold text-white ring-1 ring-[#1684E8]/60 transition-all duration-300 hover:bg-[#1684E8] md:px-8 md:py-4 md:text-base" href={"#our-story"}>
              {"Discover MXR"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      <section className={"section about-story"} id={"our-story"}>
        <div className={"about-story-lead reveal visible"}>
          <p className={"eyebrow"}>
            {"WHO WE ARE"}
          </p>
          <h2>
            {"Innovation with a clear purpose."}
          </h2>
        </div>
        <div className={"about-story-copy reveal visible"}>
          <p className={"about-large"}>
            {"MXR was founded with a belief that technology should make complex learning, training and operations more effective,not more complicated."}
          </p>
          <div className={"about-copy-columns"}>
            <p>
              {"We partner with organisations across education, healthcare, defence, enterprise and high-risk industries to design solutions that fit real users, real environments and real objectives."}
            </p>
            <p>
              {"Our multidisciplinary team combines immersive development, artificial intelligence, platform engineering, design and consultancy to take ideas from early strategy through delivery and long-term support."}
            </p>
          </div>
        </div>
      </section>

      <section className={"purpose-alternative"} aria-labelledby={"purpose-alt-heading"}>
        <div className={"purpose-alt-heading"}>
          <p className={"eyebrow"}>
            {"OUR DIRECTION"}
          </p>
          <h2 id={"purpose-alt-heading"}>
            {"One direction."}
            <span>
              {"Two commitments."}
            </span>
          </h2>
          <p>
            {"Our vision sets the ambition."}

            {"Our mission turns it into action."}
          </p>
        </div>
        <div className={"purpose-alt-grid"}>
          <article className={"purpose-alt-card"}>
            <div className={"purpose-alt-image"}>
              {/* <img src={ourvision} alt={"Immersive technology opening new possibilities for learning"} loading={"lazy"} /> */}
              <img src={aboutValues} alt={"Immersive technology opening new possibilities for learning"} loading={"lazy"} />
              <span>
                {"01 / THE FUTURE WE SEE"}
              </span>
            </div>
            <div className={"purpose-alt-copy"}>
              <div className={"purpose-alt-label"}>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} aria-hidden={"true"}>
                  <path d={"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"}>

                  </path>
                  <circle cx={"12"} cy={"12"} r={"3"}>

                  </circle>
                </svg>
                <p className={"eyebrow"}>
                  {"OUR VISION"}
                </p>
              </div>
              <h3>
                {"Extend human potential."}
              </h3>
              <p>
                {"Our vision is to be your leading technology partner, empowering your organisation through innovative solutions that transform learning, training, and operations. We aim to create experiences that drive success in today’s fast-evolving digital landscape."}
              </p>
              <div className={"purpose-alt-footer"}>
                {"Better learning "}
                <span>
                  {"·"}
                </span>
                {" Stronger performance "}
                <span>
                  {"·"}
                </span>
                {" Lasting impact"}
              </div>
            </div>
          </article>
          <article className={"purpose-alt-card"}>
            <div className={"purpose-alt-image"}>
              <img src={aboutHero} alt={"Technology specialists collaborating to deliver practical solutions"} loading={"lazy"} />
              <span>
                {"02 / THE WORK WE DO"}
              </span>
            </div>
            <div className={"purpose-alt-copy"}>
              <div className={"purpose-alt-label"}>
                <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} aria-hidden={"true"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>

                  </circle>
                  <circle cx={"12"} cy={"12"} r={"5"}>

                  </circle>
                  <path d={"m12 12 9-9m-5 0h5v5"}>

                  </path>
                </svg>
                <p className={"eyebrow"}>
                  {"OUR MISSION"}
                </p>
              </div>
              <h3>
                {"Make innovation matter."}
              </h3>
              <p>
                {"Our mission is simple: to help you succeed. We work with you to design and implement solutions in AR, VR, Mixed Reality, and AI that ensure you and your organisation reach your goals. By partnering with you, we create technology that transforms education, training, and business processes, delivering solutions that maximise value and achieve outstanding results for your team."}
              </p>
              <div className={"purpose-alt-footer"}>
                {"Understand "}
                <span>
                  {"·"}
                </span>
                {" Design "}
                <span>
                  {"·"}
                </span>
                {" Deliver"}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={"about-values"}>
        <div className={"about-values-image reveal visible"}>
          <img src={ourvision} alt={"Professionals using mixed reality technology in a simulation and training environment"} />
          <div className={"about-values-image-label"}>
            <small>
              {"DESIGNED AROUND PEOPLE"}
            </small>
            <strong>
              {"Technology is valuable when it improves human capability."}
            </strong>
          </div>
        </div>
        <div className={"about-values-content"}>
          <div className={"about-values-title reveal visible"}>
            <p className={"eyebrow"}>
              {"OUR VALUES"}
            </p>
            <h2>
              {"The principles behind every partnership."}
            </h2>
          </div>
          <div className={"about-values-grid"}>
            <article className={"reveal visible"}>
              <b>
                {"01"}
              </b>
              <h3>
                {"Innovation"}
              </h3>
              <p>
                {"We explore what is possible, then focus it on a useful outcome."}
              </p>
            </article>
            <article className={"reveal visible"}>
              <b>
                {"02"}
              </b>
              <h3>
                {"Collaboration"}
              </h3>
              <p>
                {"We build with our clients, not around them."}
              </p>
            </article>
            <article className={"reveal visible"}>
              <b>
                {"03"}
              </b>
              <h3>
                {"Excellence"}
              </h3>
              <p>
                {"We hold every detail to a professional standard."}
              </p>
            </article>
            <article className={"reveal visible"}>
              <b>
                {"04"}
              </b>
              <h3>
                {"Empowerment"}
              </h3>
              <p>
                {"We create tools that strengthen confidence and capability."}
              </p>
            </article>
            <article className={"reveal visible"}>
              <b>
                {"05"}
              </b>
              <h3>
                {"Integrity"}
              </h3>
              <p>
                {"We communicate clearly and act responsibly."}
              </p>
            </article>
            <article className={"reveal visible"}>
              <b>
                {"06"}
              </b>
              <h3>
                {"Sustainability"}
              </h3>
              <p>
                {"We design solutions for long-term value and responsible growth."}
              </p>
            </article>
            <article className={"reveal visible"}>
              <b>
                {"07"}
              </b>
              <h3>
                {"Equality & Inclusion"}
              </h3>
              <p>
                {"We value different perspectives in our teams and solutions."}
              </p>
            </article>
          </div>
        </div>
      </section>


      <section className={"section about-why"}>
        <div className={"section-heading reveal visible"}>
          <div>
            <p className={"eyebrow"}>
              {"WHY MXR"}
            </p>
            <h2>
              {"A partner for the complete journey."}
            </h2>
          </div>
          <p>
            {"We combine deep technology capability with an understanding of how organisations teach, train and operate."}
          </p>
        </div>
        <div className={"about-why-grid"}>
          <article className={"service-compact reveal visible"}>
            <b aria-hidden="true">{"01"}</b>
            <h3>{"Outcome-led"}</h3>
            <p>{"We begin with the problem, users and evidence of success, not a predetermined technology."}</p>
          </article>
          <article className={"service-compact reveal visible"}>
            <b aria-hidden="true">{"02"}</b>
            <h3>{"Multidisciplinary"}</h3>
            <p>{"Strategy, design, development, immersive content and data expertise work as one team."}</p>
          </article>
          <article className={"service-compact reveal visible"}>
            <b aria-hidden="true">{"03"}</b>
            <h3>{"Built to scale"}</h3>
            <p>{"Solutions are designed for long-term use, adoption and expansion across your organisation."}</p>
          </article>
        </div>
      </section>

      <section className={"final-cta about-final home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>
            {"LET'S BUILD WHAT'S NEXT"}
          </p>
          <h2>
            {"Have a challenge worth solving?"}
          </h2>
          <p>
            {"Talk to MXR about a practical route from idea to high-impact technology."}
          </p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=New%20MXR%20Project"}>{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

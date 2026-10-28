import environment from '../assets/images/modal3d/banner/training-field.webp'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { ProductHero } from '../components/ProductHero'
import { ModalAssetBanner } from '../components/ModalAssetBanner'
import { DroneExperience } from '../components/DroneExperience'

export default function Modal3DPage() {
  return (
    <main className={"pp modal3d-page"} style={{ "--product-accent": "#0b66c3" } as CSSProperties}>
      <ProductHero title="Complex assets." accent="Clear understanding." lead="Explore ordnance in interactive 3D. Connect component views, technical information and AR in one organised library." demoSubject="MODAL3D demonstration" secondaryHref="#product-benefits" secondaryLabel="Explore MODAL3D" image={environment} visual={<ModalAssetBanner />} />
      <section className={"pp-benefits"} id={"product-benefits"}>
        <div className={"pp-heading"}>
          <div>
            <p className={"eyebrow"}>
              {"DESIGNED AROUND OUTCOMES"}
            </p>
            <h2>
              {"More clarity."}
              <br />
              {"Greater confidence."}
            </h2>
          </div>
          <p>
            {"Purposeful tools that make every experience count."}
          </p>
        </div>
        <div className={"pp-benefit-grid"}>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3 3 8v9l9 5 9-5V8L12 3Zm0 0v10m-9-5 9 5 9-5m-9 5v9"}>

                </path>
              </svg>
            </div>
            <small>
              {"01"}
            </small>
            <h3>
              {"Explore every angle"}
            </h3>
            <p>
              {"Inspect models, components and internal relationships through detailed visual exploration."}
            </p>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 12h8m-4-4v8"}>

                </path>
              </svg>
            </div>
            <small>
              {"02"}
            </small>
            <h3>
              {"Put knowledge in context"}
            </h3>
            <p>
              {"Bring digital assets into real spaces with mobile augmented reality."}
            </p>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 3v18h17M8 16v-4m5 4V8m5 8V5"}>

                </path>
              </svg>
            </div>
            <small>
              {"03"}
            </small>
            <h3>
              {"Build lasting understanding"}
            </h3>
            <p>
              {"Pair visual reference with structured specifications and learning resources."}
            </p>
          </article>
        </div>
      </section>
      <section className={"pp-experience"}>
        <div className={"pp-experience-visual"}>
          <DroneExperience />
        </div>
        <div>
          <p className={"eyebrow"}>
            {"THE EXPERIENCE"}
          </p>
          <h2>
            {"One library. Multiple perspectives."}
          </h2>
          <div className={"pp-steps"}>
            <article>
              <b>
                {"01"}
              </b>
              <div>
                <h3>
                  {"Explore"}
                </h3>
                <p>
                  {"Browse the library and choose an asset."}
                </p>
              </div>
            </article>
            <article>
              <b>
                {"02"}
              </b>
              <div>
                <h3>
                  {"Inspect"}
                </h3>
                <p>
                  {"Examine models, components and specifications."}
                </p>
              </div>
            </article>
            <article>
              <b>
                {"03"}
              </b>
              <div>
                <h3>
                  {"Reinforce"}
                </h3>
                <p>
                  {"Revisit content and support knowledge assessment."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className={"pp-features"} id={"product-features"}>
        <div className={"pp-heading"}>
          <div>
            <p className={"eyebrow"}>
              {"PRODUCT FEATURES"}
            </p>
            <h2>
              {"The tools behind"}
              <br />
              {"the experience."}
            </h2>
          </div>
          <p>
            {"Explore the capabilities that support your programme."}
          </p>
        </div>
        <div className={"pp-feature-grid"}>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M12 3 3 8v9l9 5 9-5V8L12 3Zm0 0v10m-9-5 9 5 9-5m-9 5v9"}>

                </path>
              </svg>
            </div>
            <div>
              <h3>
                {"Interactive 3D models"}
              </h3>
              <p>
                {"Rotate, zoom and inspect assets."}
              </p>
            </div>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 12h8m-4-4v8"}>

                </path>
              </svg>
            </div>
            <div>
              <h3>
                {"Exploded & section views"}
              </h3>
              <p>
                {"Explore internal component relationships."}
              </p>
            </div>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 12h8m-4-4v8"}>

                </path>
              </svg>
            </div>
            <div>
              <h3>
                {"Mobile augmented reality"}
              </h3>
              <p>
                {"View digital assets in real spaces."}
              </p>
            </div>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M8 3H4v18h16V3h-4M8 2h8v4H8V2Zm0 9h8m-8 5h5"}>

                </path>
              </svg>
            </div>
            <div>
              <h3>
                {"Technical specifications"}
              </h3>
              <p>
                {"Access structured reference information."}
              </p>
            </div>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 3v18h17M8 16v-4m5 4V8m5 8V5"}>

                </path>
              </svg>
            </div>
            <div>
              <h3>
                {"Learning & assessment"}
              </h3>
              <p>
                {"Reinforce understanding and retention."}
              </p>
            </div>
          </article>
          <article>
            <div className={"pp-icon"}>
              <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.5"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                <path d={"M4 7h16M4 17h16M8 4v6m8 4v6"}>

                </path>
              </svg>
            </div>
            <div>
              <h3>
                {"Web & mobile access"}
              </h3>
              <p>
                {"Use the library across learning settings."}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={"final-cta home-wave-section home-wave-cta"}>
        <div className={"home-wave-media"} aria-hidden={"true"}>
          <video autoPlay={true} muted={true} loop={true} playsInline={true} preload={"metadata"}>
            <source src={"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_165449ef-7d2e-4e81-850f-1939c5cb442d.mp4"} type={"video/mp4"} />
          </video>
        </div>
        <div>
          <p className={"eyebrow"}>{"SEE MODAL3D IN ACTION"}</p>
          <h2>{"See how it fits your organisation."}</h2>
          <p>{"Explore the experience with our team, around your training goals."}</p>
        </div>
        <div className={"button-row"}>
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=MODAL3D%20demo"}>{"Talk to Our Team"} <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
        </div>
      </section>
    </main>
  )
}

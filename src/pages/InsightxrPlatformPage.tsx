import type { CSSProperties } from 'react'
import insightxrDevices from '../assets/images/insightxr-devices.png'
import insightxrPlatform from '../assets/images/insightxr-platform.png'
import insightxrLearning from '../assets/images/insightxr-learning.png'

export default function InsightxrPlatformPage() {
  return (
  <main className={"ix-sales"}>
    <section className={"ix-sales-hero"}>
      <div className={"ix-sales-copy"}>
        <p className={"eyebrow"}>
          <span className={"ix-brand-signal"}>

          </span>
          {" INSIGHTXR · XR MANAGEMENT PLATFORM"}
        </p>
        <h1 className="banner-title">
          {"Less managing."}
          <br />
          <span>
            {"More immersing."}
          </span>
        </h1>
        <p className="banner-lead">
          {"One place to deploy content, control XR devices and understand every training experience."}
        </p>
        <div className={"ix-hero-actions"}>
          <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=InsightXR%20demo"}>
            {"Book a demo ↗"}
          </a>
          <a href={"#ix-capabilities"}>
            {"Explore the platform "}
            <span>
              {"↓"}
            </span>
          </a>
        </div>
        <div className={"ix-sales-tags"}>
          <span>
            {"AR & VR devices"}
          </span>
          <span>
            {"Multi-site delivery"}
          </span>
          <span>
            {"Remote control"}
          </span>
        </div>
      </div>
      <div className={"ix-sales-art"}>
        <div className={"ix-product-window"}>
          <div className={"ix-window-bar"}>
            <span>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
            </span>
            <small>
              {"InsightXR / Device workspace"}
            </small>
            <b>
              {"↗"}
            </b>
          </div>
          <img src={insightxrDevices} alt={"InsightXR device management interface showing device controls, storage and status"} />
        </div>
        <div className={"ix-floating-detail"}>
          <span>
            {"◎"}
          </span>
          <div>
            <b>
              {"Your XR estate, connected."}
            </b>
            <small>
              {"Devices · Content · Insight"}
            </small>
          </div>
        </div>
        <div className={"ix-sales-chip"}>
          {"PURPOSE-BUILT FOR IMMERSIVE DELIVERY"}
        </div>
      </div>
    </section>
    <section className={"ix-sales-benefits"}>
      <div>
        <b>
          {"01"}
        </b>
        <span>
          {"Deploy with confidence"}
        </span>
      </div>
      <div>
        <b>
          {"02"}
        </b>
        <span>
          {"Stay in control"}
        </span>
      </div>
      <div>
        <b>
          {"03"}
        </b>
        <span>
          {"Turn activity into insight"}
        </span>
      </div>
    </section>
    <section className={"ix-sales-capabilities"} id={"ix-capabilities"}>
      <div className={"ix-sales-heading"}>
        <div>
          <p className={"eyebrow"}>
            {"FROM COMPLEXITY TO CLARITY"}
          </p>
          <h2>
            {"Your XR programme."}
            <br />
            {"Working as one."}
          </h2>
        </div>
        <p>
          {"From the first device to your next location. Keep the experience connected."}
        </p>
      </div>
      <div className={"ix-sales-grid"}>
        <article>
          <div className={"ix-sales-card-image"}>
            <img src={insightxrPlatform} alt={"InsightXR connects content and experiences across a network of devices"} loading={"lazy"} />
            <span>
              {"01 / DEPLOY"}
            </span>
          </div>
          <div className={"ix-sales-card-copy"}>
            <h3>
              {"The right experience."}
              <br />
              {"On the right device."}
            </h3>
            <p>
              {"Distribute content, tailor home screens and manage devices across locations."}
            </p>
            <div>
              <span>
                {"Content delivery"}
              </span>
              <span>
                {"Device management"}
              </span>
            </div>
          </div>
        </article>
        <article>
          <div className={"ix-sales-card-image"}>
            <img src={insightxrLearning} alt={"Device status, battery and connection information in InsightXR"} loading={"lazy"} />
            <span>
              {"02 / CONTROL"}
            </span>
          </div>
          <div className={"ix-sales-card-copy"}>
            <h3>
              {"Support every session."}
              <br />
              {"From your desk."}
            </h3>
            <p>
              {"Send commands, troubleshoot remotely and cast multiple XR devices to a shared screen."}
            </p>
            <div>
              <span>
                {"Remote commands"}
              </span>
              <span>
                {"Multi-device casting"}
              </span>
            </div>
          </div>
        </article>
        <article>
          <div className={"ix-sales-card-image ix-sales-data"}>
            <div className={"ix-sales-data-head"}>
              <span>
                {"SESSION INSIGHT"}
              </span>
              <i>
                {"●"}
              </i>
            </div>
            <div className={"ix-sales-wave"}>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
              <i>

              </i>
            </div>
            <div className={"ix-sales-data-foot"}>
              <span>
                {"Interactions"}
              </span>
              <span>
                {"Assessment"}
              </span>
              <span>
                {"Debrief"}
              </span>
            </div>
            <small>
              {"ILLUSTRATIVE VIEW"}
            </small>
          </div>
          <div className={"ix-sales-card-copy"}>
            <h3>
              {"See the experience."}
              <br />
              {"Strengthen the learning."}
            </h3>
            <p>
              {"Review recorded interactions and performance data to support feedback and debriefing."}
            </p>
            <div>
              <span>
                {"Interaction recording"}
              </span>
              <span>
                {"Performance insight"}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section className={"ix-sales-fit"}>
      <div>
        <p className={"eyebrow"}>
          {"BUILT FOR REAL-WORLD LEARNING"}
        </p>
        <h2>
          {"One platform."}
          <br />
          {"Many possibilities."}
        </h2>
      </div>
      <div className={"ix-sales-sectors"}>
        <article>
          <span>
            {"✚"}
          </span>
          <h3>
            {"Healthcare"}
          </h3>
          <p>
            {"Safe practice and collaborative clinical training."}
          </p>
        </article>
        <article>
          <span>
            {"◇"}
          </span>
          <h3>
            {"Education"}
          </h3>
          <p>
            {"Immersive content shaped around your learners."}
          </p>
        </article>
        <article>
          <span>
            {"◎"}
          </span>
          <h3>
            {"Professional training"}
          </h3>
          <p>
            {"Repeatable preparation for demanding roles."}
          </p>
        </article>
      </div>
    </section>
    <section className={"ix-sales-cta"}>
      <div>
        <p className={"eyebrow"}>
          {"SEE INSIGHTXR IN ACTION"}
        </p>
        <h2>
          {"Make your XR investment"}
          <br />
          {"work harder."}
        </h2>
        <p>
          {"Let’s explore how InsightXR fits your devices, content and training goals."}
        </p>
      </div>
      <a className={"btn btn-primary"} href={"mailto:hello@mxr.ai?subject=InsightXR%20demo"}>
        {"Book a demo ↗"}
      </a>
    </section>
  </main>
  )
}

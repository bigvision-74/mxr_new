import type { CSSProperties } from 'react'

export function Footer() { return (
  <footer>
    <div className={"footer-top"}>
      <div className={"footer-brand"}>
        <a className={"brand brand-light brand-logo"} href={"index.html"}>
          <img src={"assets/mxr-logo.png"} alt={"MXR — Where vision becomes reality"} />
        </a>
        <p>
          {"Simulation. Extended reality. Artificial intelligence. Designed around people."}
        </p>
      </div>
      <div className={"footer-links"}>
        <div>
          <h3>
            {"Solutions"}
          </h3>
          <a href={"defence-security.html"}>
            {"Defence"}
          </a>
          <a href={"eprium.html"}>
            {"Healthcare"}
          </a>
          <a href={"index.html#solutions"}>
            {"Enterprise"}
          </a>
        </div>
        <div>
          <h3>
            {"Products"}
          </h3>
          <a href={"modal3d.html"}>
            {"MODAL3D"}
          </a>
          <a href={"eprium.html"}>
            {"EPRium"}
          </a>
          <a href={"drivexr.html"}>
            {"DriveXR"}
          </a>
          <a href={"insightxr.html"}>
            {"InsightXR"}
          </a>
          <a href={"/insightxr-platform.html"}>
            {"InsightXR — Platform version"}
          </a>
        </div>
        <div>
          <h3>
            {"Company"}
          </h3>
          <a href={"about.html"}>
            {"About"}
          </a>
          <a href={"mailto:hello@mxr.ai"}>
            {"Contact"}
          </a>
        </div>
        <div>
          <h3>
            {"Resources"}
          </h3>
          <a href={"case-study-xr-readiness.html"}>
            {"Case Studies"}
          </a>
          <a href={"mailto:hello@mxr.ai"}>
            {"Support"}
          </a>
        </div>
      </div>
    </div>
    <div className={"footer-bottom"}>
      <span>
        {"© MXR / Meta Extended Reality. All rights reserved."}
      </span>
      <div>
        <a href={"#"}>
          {"Privacy"}
        </a>
        <a href={"#"}>
          {"Terms"}
        </a>
        <a href={"#"}>
          {"Cookies"}
        </a>
      </div>
    </div>
  </footer>
) }

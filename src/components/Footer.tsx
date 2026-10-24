import type { CSSProperties } from 'react'
import mxrLogo from '../assets/images/mxr-logo.png'

export function Footer() { return (
  <footer>
    <div className={"footer-top"}>
      <div className={"footer-brand"}>
        <a className={"brand brand-light brand-logo"} href={"/"}>
          <img src={mxrLogo} alt={"MXR — Where vision becomes reality"} />
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
          <a href={"/defence-security"}>
            {"Defence"}
          </a>
          <a href={"/eprium"}>
            {"Healthcare"}
          </a>
          <a href={"/#solutions"}>
            {"Enterprise"}
          </a>
        </div>
        <div>
          <h3>
            {"Products"}
          </h3>
          <a href={"/modal3d"}>
            {"MODAL3D"}
          </a>
          <a href={"/eprium"}>
            {"EPRium"}
          </a>
          <a href={"/drivexr"}>
            {"DriveXR"}
          </a>
          <a href={"/insightxr"}>
            {"InsightXR"}
          </a>
          <a href={"/insightxr-platform"}>
            {"InsightXR — Platform version"}
          </a>
        </div>
        <div>
          <h3>
            {"Company"}
          </h3>
          <a href={"/about"}>
            {"About"}
          </a>
          <a href={"/contact"}>
            {"Contact"}
          </a>
        </div>
        <div>
          <h3>
            {"Resources"}
          </h3>
          <a href={"/case-study-xr-readiness"}>
            {"Case Studies"}
          </a>
          <a href={"/contact"}>
            {"Support"}
          </a>
        </div>
      </div>
    </div>
    <div className={"footer-bottom"}>
      <span>
        {`© ${new Date().getFullYear()} MXR / Meta Extended Reality. All rights reserved.`}
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

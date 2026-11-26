import { solutions, products, resources } from '../data/navigation'
import mxrLogo from '../assets/images/mxr-logo.png'

export function Footer() {
  return (
    <footer>
      <div className={"footer-top"}>
        <div className={"footer-brand"}>
          <a className={"brand brand-light brand-logo"} href={"/"}>
            <img src={mxrLogo} alt={"MXR , Where vision becomes reality"} />
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
            {solutions.map(s => (
              <a href={`/${s.slug}`} key={s.slug}>{s.title}</a>
            ))}
          </div>
          <div>
            <h3>
              {"Products"}
            </h3>
            {products.map(([label, slug]) => (
              <a href={`/${slug}`} key={slug}>{label}</a>
            ))}
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
            {resources.map(r => (
              <a href={`/${r.slug}`} key={r.slug}>{r.title}</a>
            ))}
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
          <a href={"/policies"}>
            {"Policies"}
          </a>
          <a href={"/terms-and-conditions"}>
            {"Terms"}
          </a>
          <a href={"/cookie-policy"}>
            {"Cookies"}
          </a>
          <a href={"#cookie-settings"} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('mxr-open-cookie-settings')) }}>
            {"Cookie Preferences"}
          </a>
        </div>
      </div>
    </footer>
  )
}

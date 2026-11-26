import { useEffect, useState } from 'react'

export const OPEN_COOKIE_SETTINGS = 'mxr-open-cookie-settings'

const KEY = 'mxr-cookie-consent'
const GA_ID = 'G-CQNK4HY6ZF'
const HS_SRC = '//js-eu1.hs-scripts.com/143987629.js'

function loadAnalytics() {
  if (document.getElementById('hs-script-loader')) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer!.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  const ga = document.createElement('script')
  ga.async = true
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(ga)
  const hs = document.createElement('script')
  hs.id = 'hs-script-loader'
  hs.async = true
  hs.defer = true
  hs.src = HS_SRC
  document.body.appendChild(hs)
}

function loadedAlready() { return !!document.getElementById('hs-script-loader') }

function stored(): boolean | null {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'accepted') return true
    if (v === 'rejected') return false
    return null
  } catch { return null }
}

function clearAnalyticsCookies() {
  const host = window.location.hostname.split('.')
  const domains = [window.location.hostname, ...host.map((_, i) => '.' + host.slice(i).join('.'))]
  document.cookie.split(';').map(c => c.split('=')[0].trim())
    .filter(n => /^(_ga|_gid|_gat|__hs|hubspotutk|__hstc|__hssc|__hssrc)/.test(n))
    .forEach(n => domains.forEach(d => { document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}` ; document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` }))
}

export function CookieBanner() {
  const [analytics, setAnalytics] = useState<boolean | null>(stored)
  const [open, setOpen] = useState(stored() === null)
  const [draft, setDraft] = useState(stored() === true)
  const [details, setDetails] = useState(false)

  useEffect(() => { if (analytics) loadAnalytics() }, [analytics])

  useEffect(() => {
    const show = () => { setDraft(stored() === true); setDetails(true); setOpen(true) }
    window.addEventListener(OPEN_COOKIE_SETTINGS, show)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, show)
  }, [])

  // Lets the stylesheet hide the chat widget while the banner is showing, so it cannot cover the choices
  useEffect(() => {
    document.documentElement.classList.toggle('cookie-banner-open', open)
    return () => document.documentElement.classList.remove('cookie-banner-open')
  }, [open])

  if (!open) return null

  const save = (value: boolean) => {
    try { localStorage.setItem(KEY, value ? 'accepted' : 'rejected') } catch { /* ignore */ }
    const wasLoaded = loadedAlready()
    setAnalytics(value)
    setDraft(value)
    setOpen(false)
    if (!value && wasLoaded) { clearAnalyticsCookies(); window.location.reload() }
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie preferences">
      <p className="cookie-banner__text">
        Meta Extended Reality Ltd uses essential cookies to manage secure account logins, authenticate corporate portals, and process digital invoices.
        With your permission, we also use optional performance and analytics tools to understand how you interact with our website and documentation to help us build better software.
        You can change your preferences at any time via the “Cookie Preferences” link in our website footer.
        Review our full <a href="/cookie-policy">Cookie Policy</a> and <a href="/privacy-policy-gdpr">Privacy Policy</a> for details.
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="cookie-banner__btn cookie-banner__btn--ghost" aria-expanded={details} aria-controls="cookie-prefs" onClick={() => setDetails(d => !d)}>{details ? 'Hide options' : 'Customise'}</button>
        <button type="button" className="cookie-banner__btn cookie-banner__btn--ghost" onClick={() => save(false)}>Reject non-essential</button>
        {details && <button type="button" className="cookie-banner__btn cookie-banner__btn--ghost" onClick={() => save(draft)}>Save preferences</button>}
        <button type="button" className="cookie-banner__btn" onClick={() => save(true)}>Accept all</button>
      </div>
      {details && (
        <div className="cookie-banner__prefs" id="cookie-prefs">
          <div className="cookie-banner__pref">
            <div className="cookie-banner__pref-info">
              <span className="cookie-banner__pref-title">Essential cookies <em>Always on</em></span>
              <span className="cookie-banner__pref-desc">Manage secure account logins, authenticate corporate portals and process digital invoices. These cannot be switched off.</span>
            </div>
            <span className="cookie-switch cookie-switch--locked">
              <input type="checkbox" checked disabled aria-label="Essential cookies (always on)" />
              <span className="cookie-switch__track" />
            </span>
          </div>
          <label className="cookie-banner__pref">
            <div className="cookie-banner__pref-info">
              <span className="cookie-banner__pref-title">Analytics &amp; performance cookies</span>
              <span className="cookie-banner__pref-desc">Google Analytics and HubSpot help us understand how you use our website and documentation, so that we can improve our software. Off unless you opt in.</span>
            </div>
            <span className="cookie-switch">
              <input type="checkbox" checked={draft} onChange={e => setDraft(e.target.checked)} aria-label="Analytics and performance cookies" />
              <span className="cookie-switch__track" />
            </span>
          </label>
        </div>
      )}
    </div>
  )
}

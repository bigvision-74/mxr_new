import { useEffect, useState } from 'react'
const themes = [
  ['navy', 'Deep Navy', 'Original enterprise', 'navy'],
  ['charcoal', 'Dark Grey', 'Neutral corporate', 'grey'],
  ['bae-red', 'BAE Red', 'Defence corporate', 'red'],
  ['teal', 'Clinical Teal', 'Healthcare & XR', 'teal'],
  ['indigo', 'Digital Indigo', 'Technology & AI', 'indigo'],
  ['evergreen', 'Evergreen', 'Training & growth', 'evergreen'],
] as const
const fonts = [['segoe','Segoe UI'],['inter','Inter'],['lato','Lato'],['roboto','Roboto'],['open-sans','Open Sans'],['rubik','Rubik'],['poppins','Poppins'],['arial','Arial'],['trebuchet','Trebuchet MS']] as const
function saved(key: string, fallback: string) { try { return localStorage.getItem(key) || fallback } catch { return fallback } }
export function StyleSwitcher() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => saved('mxr-theme', 'charcoal'))
  const [font, setFont] = useState(() => saved('mxr-font', 'segoe'))
  useEffect(() => {
    const validTheme = themes.some(t => t[0] === theme) ? theme : 'charcoal'
    const validFont = fonts.some(f => f[0] === font) ? font : 'segoe'
    const themeClasses = themes.map(t => `theme-${t[0]}`), fontClasses = fonts.map(f => `font-${f[0]}`)
    document.body.classList.remove(...themeClasses, ...fontClasses)
    if (validTheme !== 'charcoal') document.body.classList.add(`theme-${validTheme}`)
    if (validFont !== 'segoe') document.body.classList.add(`font-${validFont}`)
    try { localStorage.setItem('mxr-theme', validTheme); localStorage.setItem('mxr-font', validFont) } catch { /* Device storage is optional. */ }
  }, [theme, font])
  return <aside className="style-switcher" aria-label="Design comparison controls" onKeyDown={e => { if (e.key === 'Escape') setOpen(false) }}>
    <button className="style-switcher-toggle" aria-expanded={open} aria-controls="style-panel" onClick={() => setOpen(v => !v)}><span>◐</span> Compare styles</button>
    <div className="style-panel" id="style-panel" hidden={!open}>
      <div className="style-panel-head"><div><small>DESIGN LAB</small><strong>Compare the look</strong></div><button className="style-close" aria-label="Close comparison panel" onClick={() => setOpen(false)}>×</button></div>
      <fieldset><legend>Colour variation</legend><div className="theme-options">{themes.map(([value, label, description, swatch]) => <button key={value} className={`theme-option${theme === value ? ' active' : ''}`} data-theme={value} aria-pressed={theme === value} onClick={() => setTheme(value)}><i className={`swatch ${swatch}-swatch`} /><span><b>{label}</b><small>{description}</small></span></button>)}</div></fieldset>
      <label className="font-label" htmlFor="font-variation">Typography</label><select id="font-variation" value={font} onChange={e => setFont(e.target.value)}>{fonts.map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select>
      <p className="style-note">Changes apply instantly and are remembered on this device.</p>
    </div>
  </aside>
}

import { useState } from 'react'
import { products, services } from '../data/navigation'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const groups = [
    { name: 'Services', links: services.map(s => [s.title, `/${s.slug}.html`]) },
    { name: 'Products', links: products.map(([title, slug]) => [title, `/${slug}.html`]) },
    { name: 'Resources', links: [['Case Studies', '/case-study-xr-readiness.html'], ['Support', 'mailto:hello@mxr.ai']] },
  ]
  return <header className="site-header" id="top" onKeyDown={e => { if (e.key === 'Escape') { setDropdown(null); setMenuOpen(false) } }}>
    <a className="brand brand-logo" href="/index.html" aria-label="MXR home"><img src="/assets/mxr-logo.png" alt="MXR — Where vision becomes reality" /></a>
    <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(v => !v)}><span /><span /><span /><span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span></button>
    <nav id="main-nav" className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
      <a href="/index.html">Home</a><a href="/about.html" aria-current={window.location.pathname.includes('about') ? 'page' : undefined}>About</a>
      {groups.map(group => <div key={group.name} className={`nav-item${dropdown === group.name ? ' is-open' : ''}`} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDropdown(null) }}>
        <button type="button" className="nav-trigger" aria-expanded={dropdown === group.name} aria-controls={`nav-${group.name}`} onClick={() => setDropdown(v => v === group.name ? null : group.name)}>{group.name}</button>
        <div className="dropdown" id={`nav-${group.name}`}>{group.links.map(([title, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{title}</a>)}</div>
      </div>)}
    </nav>
    <div className="header-actions"><a className="btn btn-primary btn-small" href="mailto:hello@mxr.ai?subject=Talk%20to%20MXR">Get in Touch</a></div>
  </header>
}

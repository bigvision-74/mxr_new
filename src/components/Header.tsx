import mxrLogo from '../assets/images/mxr-logo.png'

type Props = { currentPage?: string }

export function Header({ currentPage }: Props) {
  return (
    <header className="site-header">
      <a href="/" className="brand brand-logo" aria-label="MXR home">
        <img src={mxrLogo} alt="MXR — Where vision becomes reality" />
      </a>
      <nav className="main-nav" id="main-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <div className="nav-item">
          <button>Products <span>↓</span></button>
          <div className="dropdown">
            <a href="/modal3d.html">Modal3D</a>
            <a href="/drivexr.html">DriveXR</a>
            <a href="/eprium.html">Eprium</a>
            <a href="/insightxr.html">XR Training</a>
          </div>
        </div>
        <a href="/about.html" className={currentPage === 'about' ? 'current' : undefined}>About</a>
        <a href="/case-study-xr-readiness.html" className={currentPage === 'resources' ? 'current' : undefined}>Resources</a>
      </nav>
      <div className="header-actions">
        <a href="mailto:hello@mxr.ai" className="btn btn-primary btn-small">Contact us</a>
      </div>
      <button className="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav">
        <span className="sr-only">Menu</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </header>
  )
}

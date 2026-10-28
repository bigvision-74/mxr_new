import './assets/css/tokens.css'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/css/base.css'
import './assets/css/hero.css'
import './assets/css/drivexr.css'
import './assets/css/eprium-problem.css'
import './assets/css/eprium-page.css'
import './assets/css/interactions.css'
import './assets/css/contact.css'
import './assets/css/policies.css'
import './assets/css/journey.css'
import './assets/css/banner.css'
import './assets/css/layout.css'
import './assets/css/buttons.css'
import './assets/css/blog.css'
import './assets/css/events.css'
import './assets/css/case-studies.css'
import './assets/css/cards.css'
import './assets/css/xr-development.css'
import './assets/css/platform-development.css'
import './assets/css/ai-solutions.css'
import './assets/css/simulator-development.css'

// HubSpot chat widget. Loaded here, not in index.html, so it appears on every page whichever HTML file serves it.
if (!document.getElementById('hs-script-loader')) {
  const hs = document.createElement('script')
  hs.id = 'hs-script-loader'
  hs.async = true
  hs.defer = true
  hs.src = '//js-eu1.hs-scripts.com/143987629.js'
  document.body.appendChild(hs)
}

createRoot(document.getElementById('root')!).render(<App />)

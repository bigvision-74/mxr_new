import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import '../assets/css/drone-experience.css'

export function DroneExperience(){
  const [paused,setPaused]=useState(false)
  return <div className={`drone-experience${paused?' is-paused':''}`}>
    <img src="/assets/images/Home/drone.png" alt="Detailed three-quarter view of the MODAL3D drone reference asset" loading="lazy"/>
    <div className="drone-experience-footer"><span>UNCREWED SYSTEMS / VISUAL REFERENCE</span><button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?'Resume drone animation':'Pause drone animation'}>{paused?<Play aria-hidden="true"/>:<Pause aria-hidden="true"/>}<span>{paused?'Resume motion':'Pause motion'}</span></button></div>
  </div>
}

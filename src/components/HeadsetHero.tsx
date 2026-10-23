import { createElement, useEffect } from 'react'
import { Glasses } from 'lucide-react'

export function HeadsetHero() {
  useEffect(() => { void import('@google/model-viewer') }, [])
  return (
    <div className="technology-bloom about-video-stage" aria-label="Rotating Meta Quest 3 VR headset">
      <div className="quest-model-stage is-active">
        {createElement('model-viewer', {
          src: '/assets/quest-3.glb', poster: '/assets/quest-3-poster.png',
          alt: 'Meta Quest 3 headset and controllers', 'auto-rotate': '',
          'rotation-per-second': '20deg', 'auto-rotate-delay': '0',
          'camera-orbit': '25deg 75deg auto', 'field-of-view': '30deg',
          'shadow-intensity': '0.6', exposure: '1', 'environment-image': 'neutral',
          'interaction-prompt': 'none', loading: 'eager',
        })}
      </div>
      <div className="about-video-blend" />
      <div className="about-video-label"><Glasses aria-hidden="true" /><div><small>EXPLORE OUR CAPABILITIES</small><strong>XR Development</strong></div></div>
    </div>
  )
}

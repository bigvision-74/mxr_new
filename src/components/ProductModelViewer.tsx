import { createElement, useEffect } from 'react'

// Interactive 3D model (drag to turn, scroll or pinch to zoom). The viewer library and the model are only downloaded
// when this component is on the page, and the model itself waits until it is about to scroll into view.
export function ProductModelViewer({ src, alt, label }: { src: string; alt: string; label?: string }) {
  useEffect(() => { void import('@google/model-viewer') }, [])
  return (
    <div className="pm-viewer">
      {createElement('model-viewer', {
        src, alt,
        class: 'pm-viewer-el',
        'camera-controls': '', 'touch-action': 'pan-y',
        'auto-rotate': '', 'rotation-per-second': '18deg', 'auto-rotate-delay': '1500',
        'camera-orbit': '30deg 80deg auto', 'field-of-view': '30deg',
        'shadow-intensity': '0.7', exposure: '1.05', 'environment-image': 'neutral',
        'interaction-prompt': 'none', loading: 'lazy', reveal: 'auto',
      })}
      {label && <span className="pm-viewer-label">{label}</span>}
    </div>
  )
}

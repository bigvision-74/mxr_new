import { useEffect, useRef } from 'react'

// One video with two views stacked on top of each other (top: outside of the product, bottom: the same moment as a cutaway).
// The outside view always shows; the cutaway is drawn on a second canvas that is only revealed inside a circular lens that
// follows the pointer. Both halves come from the same frame, so they can never drift out of sync.
// Source is 1600 x 1800: two 1600 x 900 halves. The half is scaled to cover the whole banner, shifted so the main vehicle sits
// towards the right (POD_X of the banner width), leaving more breathing room on the left; the bare theme background shows to its left, where the video fades out.
const SRC_W = 1600
const HALF_H = 900
const POD_X = 0.8
const ZOOM = 0.85 // below 1 makes the product a little smaller; it never drops below the banner height

export function HoverCutawayVideo({ src, label }: { src: string; label?: string }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const outerRef = useRef<HTMLCanvasElement>(null)
  const innerRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const host = hostRef.current, video = videoRef.current, outer = outerRef.current, inner = innerRef.current
    const octx = outer?.getContext('2d'), ictx = inner?.getContext('2d')
    if (!host || !video || !outer || !inner || !octx || !ictx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0, visible = true, cancelled = false

    const draw = () => {
      if (video.readyState < 2) return
      const w = outer.width, h = outer.height
      const k = Math.max(Math.max(w / SRC_W, h / HALF_H) * ZOOM, h / HALF_H)
      const dw = SRC_W * k, dh = HALF_H * k
      const dx = w * POD_X - dw / 2, dy = (h - dh) / 2
      octx.clearRect(0, 0, w, h)
      ictx.clearRect(0, 0, w, h)
      octx.drawImage(video, 0, 0, SRC_W, HALF_H, dx, dy, dw, dh)
      ictx.drawImage(video, 0, HALF_H, SRC_W, HALF_H, dx, dy, dw, dh)
    }

    // Canvases are sized to what is shown (not the 1600px source) so the video is scaled once, with high-quality filtering.
    const fit = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const scale = Math.min(1, 1920 / Math.max(1, host.clientWidth * dpr)) * dpr
      const w = Math.max(320, Math.round(host.clientWidth * scale))
      const h = Math.max(240, Math.round(host.clientHeight * scale))
      for (const c of [outer, inner]) {
        if (c.width !== w || c.height !== h) { c.width = w; c.height = h }
      }
      for (const x of [octx, ictx]) { x.imageSmoothingEnabled = true; x.imageSmoothingQuality = 'high' }
      draw()
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (cancelled || reduceMotion || !visible) return
      video.play().catch(() => { /* autoplay blocked: the first frame stays on screen */ })
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(loop)
    }
    const stop = () => { cancelAnimationFrame(raf); video.pause() }

    const onData = () => { fit(); if (reduceMotion) video.currentTime = 0.01; else start() }
    video.addEventListener('loadeddata', onData)
    video.addEventListener('seeked', draw)
    if (video.readyState >= 2) onData()

    // The lens follows the pointer anywhere over the banner; the banner is the section this component sits in.
    const banner = host.parentElement ?? host
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      host.style.setProperty('--mx', `${e.clientX - r.left}px`)
      host.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    banner.addEventListener('pointermove', move)

    const ro = new ResizeObserver(fit)
    ro.observe(host)
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop() })
    io.observe(host)

    return () => {
      cancelled = true
      stop()
      ro.disconnect()
      io.disconnect()
      banner.removeEventListener('pointermove', move)
      video.removeEventListener('loadeddata', onData)
      video.removeEventListener('seeked', draw)
    }
  }, [])

  return (
    <div className="hcv" ref={hostRef} role="img" aria-label={label ?? 'Product shown from the outside, with its inner parts revealed on hover'}>
      <video ref={videoRef} className="hcv-source" src={src} muted loop playsInline preload="auto" aria-hidden="true" />
      <canvas ref={outerRef} className="hcv-outer" aria-hidden="true" />
      <canvas ref={innerRef} className="hcv-inner" aria-hidden="true" />
      <span className="hcv-lens" aria-hidden="true" />
      <span className="hcv-hint" aria-hidden="true">Hover to see inside</span>
    </div>
  )
}

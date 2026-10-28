import { useEffect, useRef } from 'react'
import '../assets/css/drone-loop.css'

// 96 pre-rendered frames (WebP with alpha) of the drone, converted from the PNG renders in assets/images/home/drone.
const COUNT = 96
const FPS = 24
const W = 1152
const H = 768
// Bundled by Vite (hashed, cached) from src/assets/images/home/drone-frames; keys sort as f0000 ... f0095.
const frameFiles = import.meta.glob('../assets/images/home/drone-frames/f*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const frameUrls = Object.keys(frameFiles).sort().map((k) => frameFiles[k])
const frameUrl = (i: number) => frameUrls[i]

function load(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

export function DroneLoop({ alt, paused = false }: { alt: string, paused?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    ctx.imageSmoothingQuality = 'high'

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frames: HTMLImageElement[] = []
    let raf = 0, running = false, visible = true, cancelled = false, last = 0, pos = 0

    // Cross-blends neighbouring frames so playback stays fluid at any display refresh rate. The index wraps, so the last
    // frame blends back into the first and the loop point has no jump.
    const paint = (pos: number) => {
      const i = Math.floor(pos) % COUNT
      const mix = pos - Math.floor(pos)
      ctx.clearRect(0, 0, W, H)
      ctx.globalAlpha = 1
      ctx.drawImage(frames[i], 0, 0, W, H)
      if (mix > 0.01) {
        ctx.globalAlpha = mix
        ctx.drawImage(frames[(i + 1) % COUNT], 0, 0, W, H)
        ctx.globalAlpha = 1
      }
    }
    // Advances by elapsed time (not wall-clock) so pausing holds the current frame and resuming continues from it.
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      if (!pausedRef.current) {
        pos = (pos + ((now - last) / 1000) * FPS) % COUNT
        paint(pos)
      }
      last = now
    }
    const start = () => { if (!running && frames.length === COUNT && visible && !reduceMotion) { running = true; last = performance.now(); raf = requestAnimationFrame(tick) } }
    const stop = () => { running = false; cancelAnimationFrame(raf) }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start(); else stop()
    })
    io.observe(canvas)

    // First frame paints immediately as a poster; the rest stream in and playback starts once all are decoded.
    load(frameUrl(0)).then((first) => {
      if (cancelled) return
      ctx.drawImage(first, 0, 0, W, H)
      return Promise.all(Array.from({ length: COUNT }, (_, i) => load(frameUrl(i))))
    }).then((all) => {
      if (cancelled || !all) return
      frames = all
      if (reduceMotion) paint(0); else start()
    }).catch(() => { /* Leaves the poster frame in place if any frame fails to load. */ })

    return () => {
      cancelled = true
      stop()
      io.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="drone-loop" width={W} height={H} role="img" aria-label={alt} />
}

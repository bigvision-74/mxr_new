import { useEffect, useRef } from 'react'

// Frame sequences exported from the hero animation: r### = original footage, t### = wireframe render of the same shot.
// Frame N of both sets shows the same moment, so the wireframe lens always lines up with the picture underneath.
const byName = (a: [string, string], b: [string, string]) => a[0].localeCompare(b[0])
const urls = (glob: Record<string, string>) => Object.entries(glob).sort(byName).map(([, url]) => url)
const realFrames = urls(import.meta.glob('../assets/images/about/about-baner/r*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>)
const wireFrames = urls(import.meta.glob('../assets/images/about/about-baner/t*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>)

const FPS = 24
const W = 1280
const H = 720
// The wireframe canvas keeps being drawn for a moment after the pointer leaves, so the lens can shrink away smoothly.
const WIRE_LINGER_MS = 700

function load(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

// Draws the moment at fractional frame `pos`, cross-blending neighbouring frames so motion stays fluid above 24fps.
function paint(ctx: CanvasRenderingContext2D, frames: HTMLImageElement[], pos: number) {
  const i = Math.min(frames.length - 1, Math.floor(pos))
  const next = Math.min(frames.length - 1, i + 1)
  const mix = pos - i
  ctx.globalAlpha = 1
  ctx.drawImage(frames[i], 0, 0, W, H)
  if (mix > 0.01 && next !== i) {
    ctx.globalAlpha = mix
    ctx.drawImage(frames[next], 0, 0, W, H)
    ctx.globalAlpha = 1
  }
}

export function AboutHeroSequence() {
  const baseRef = useRef<HTMLCanvasElement>(null)
  const wireRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const baseCanvas = baseRef.current, wireCanvas = wireRef.current
    const host = baseCanvas?.parentElement
    if (!baseCanvas || !wireCanvas || !host) return
    const baseCtx = baseCanvas.getContext('2d'), wireCtx = wireCanvas.getContext('2d')
    if (!baseCtx || !wireCtx) return
    baseCtx.imageSmoothingQuality = 'high'
    wireCtx.imageSmoothingQuality = 'high'

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let base: HTMLImageElement[] = [], wire: HTMLImageElement[] = []
    let raf = 0, running = false, visible = true, lastHover = -Infinity
    let t0 = 0
    let cancelled = false

    // One full there-and-back cycle. Easing the turnaround with a cosine means the motion slows to a stop at each
    // end and reverses gently, so there is no jump or snap at the loop point.
    const frameAt = (ms: number) => {
      const last = base.length - 1
      const cycleMs = (2 * last / FPS) * 1000
      const phase = ((ms - t0) % cycleMs) / cycleMs
      return last * (0.5 - 0.5 * Math.cos(phase * 2 * Math.PI))
    }

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const pos = frameAt(now)
      paint(baseCtx, base, pos)
      // Ask the browser whether the pointer is over the banner instead of relying on mouseenter: after navigating here
      // from another page the pointer is already resting on the banner, no mouseenter ever fires, and the lens would
      // show a frozen wireframe frame while the picture underneath keeps moving.
      if (host.matches(':hover')) lastHover = now
      if (wire.length && now - lastHover < WIRE_LINGER_MS) paint(wireCtx, wire, Math.min(pos, wire.length - 1))
    }
    const start = () => { if (!running && base.length > 1 && visible && !reduceMotion) { running = true; t0 = performance.now(); raf = requestAnimationFrame(tick) } }
    const stop = () => { running = false; cancelAnimationFrame(raf) }


    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start(); else stop()
    })
    io.observe(host)

    // Original frames first so the banner animates quickly; the wireframe set loads right after, in the background.
    load(realFrames[0]).then((first) => {
      if (cancelled) return
      baseCtx.drawImage(first, 0, 0, W, H)
      return Promise.all(realFrames.map(load))
    }).then((frames) => {
      if (cancelled || !frames) return
      base = frames
      baseCanvas.classList.add('is-ready')
      if (reduceMotion) paint(baseCtx, base, 0); else start()
      return Promise.all(wireFrames.map(load))
    }).then((frames) => {
      if (cancelled || !frames) return
      wire = frames
      paint(wireCtx, wire, 0)
    }).catch(() => { /* Falls back to the still poster image if any frame fails to load. */ })

    return () => {
      cancelled = true
      stop()
      io.disconnect()
    }
  }, [])

  return (
    <>
      <canvas ref={baseRef} className="about-hero-video about-hero-seq" width={W} height={H} aria-hidden="true" />
      <canvas ref={wireRef} className="about-hero-video about-hero-video--wire about-hero-seq" width={W} height={H} aria-hidden="true" />
    </>
  )
}

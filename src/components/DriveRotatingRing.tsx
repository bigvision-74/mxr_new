import { useEffect, useRef } from 'react'

// 150-frame turntable of the DriveXR simulator (p000 and p149 are the same pose, so one pass is a seamless loop).
//
// Playing the frames as they are looks choppy (the printed text moves ~15px between frames), and simply cross-fading
// neighbours shows every letter twice. So in-between frames are built properly: once the frames have loaded, the sideways
// movement of each narrow vertical strip between two neighbouring frames is measured (block matching), and a
// moment between two frames is drawn by sliding every strip part of the way along its own movement and blending the two
// shifted copies. The turn is then continuous at any speed, with sharp text.
// Even frames load first so it starts quickly, then the odd frames fill in behind it.
const all = import.meta.glob('../assets/images/drivexr/drivexr-banner/p*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const urls = Object.entries(all).sort((a, b) => a[0].localeCompare(b[0])).map(([, url]) => url)
const N = urls.length

const W = 1280 // source frame size
const H = 800
const AUTO_FPS = 12 // source frames per second while turning on its own: 150 frames = about a 12 second full turn
const FOLLOW = 0.08 // how quickly the rotation eases toward the pointer while hovering

// Motion measurement runs on a 320 x 200 greyscale copy of each frame, in 4px wide strips (16px in the full frame).
const GW = 320
const GH = 200
const STRIP = 4
const STRIPS = GW / STRIP
const RANGE = 12 // search +-12px (= +-48px in the full frame)
const WIN_PAD = 6 // matching window is wider than the strip so it has detail to lock onto
const SCALE = W / GW

function load(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = url
  })
}

// Sideways movement (in full-frame pixels) of each strip from frame `a` to frame `b`.
function measureFlow(a: Uint8Array, b: Uint8Array): Float32Array {
  const flow = new Float32Array(STRIPS)
  const valid = new Uint8Array(STRIPS)
  const sad = new Float32Array(2 * RANGE + 1)
  for (let s = 0; s < STRIPS; s++) {
    const x0 = Math.max(0, s * STRIP - WIN_PAD)
    const x1 = Math.min(GW, (s + 1) * STRIP + WIN_PAD)
    let best = 0, bestV = Infinity, worst = 0
    for (let d = -RANGE; d <= RANGE; d++) {
      let sum = 0
      const lo = Math.max(x0, -d), hi = Math.min(x1, GW - d)
      for (let y = 0; y < GH; y += 2) {
        const row = y * GW
        for (let x = lo; x < hi; x++) sum += Math.abs(a[row + x] - b[row + x + d])
      }
      sum /= Math.max(1, hi - lo)
      sad[d + RANGE] = sum
      if (sum < bestV) { bestV = sum; best = d }
      if (sum > worst) worst = sum
    }
    // Flat, featureless areas (the dark backdrop) cannot be measured; they are filled in from their neighbours below.
    if (worst - bestV < 1.5) continue
    let d = best
    if (best > -RANGE && best < RANGE) {
      const l = sad[best + RANGE - 1], c = sad[best + RANGE], r = sad[best + RANGE + 1]
      const den = l - 2 * c + r
      if (den > 1e-6) d += 0.5 * (l - r) / den
    }
    flow[s] = d * SCALE
    valid[s] = 1
  }
  // Fill unmeasured strips from the nearest measured ones, then smooth so neighbouring strips never tear apart.
  for (let s = 0; s < STRIPS; s++) {
    if (valid[s]) continue
    let l = s - 1, r = s + 1
    while (l >= 0 && !valid[l]) l--
    while (r < STRIPS && !valid[r]) r++
    flow[s] = l >= 0 && r < STRIPS ? (flow[l] * (r - s) + flow[r] * (s - l)) / (r - l) : l >= 0 ? flow[l] : r < STRIPS ? flow[r] : 0
  }
  const out = new Float32Array(STRIPS)
  for (let s = 0; s < STRIPS; s++) {
    const w = [flow[Math.max(0, s - 2)], flow[Math.max(0, s - 1)], flow[s], flow[Math.min(STRIPS - 1, s + 1)], flow[Math.min(STRIPS - 1, s + 2)]].sort((p, q) => p - q)
    out[s] = (flow[Math.max(0, s - 1)] + 2 * w[2] + flow[Math.min(STRIPS - 1, s + 1)]) / 4
  }
  return out
}

// Rotating simulator on the right of the DriveXR 2 banner, blended into the background. It turns slowly on its own;
// while the pointer is over it the rotation follows the pointer instead.
export function DriveRotatingRing() {
  const ringRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ring = ringRef.current, canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ring || !canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const imgs: (HTMLImageElement | undefined)[] = new Array(N).fill(undefined)
    const flows: (Float32Array | undefined)[] = new Array(N).fill(undefined)
    let pos = 0, target = 0, hovering = false, visible = true, running = false, raf = 0, last = 0
    let cancelled = false
    let k = 1 // canvas pixels per source pixel
    let dirty = true

    // The canvas is sized to what is actually shown (not the 1280px source), so frames are scaled once with high-quality
    // filtering instead of being shrunk again by the browser, which made the picture shimmer while it turned.
    const fit = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const shown = Math.max(280, Math.round(ring.clientWidth * 1.1 * dpr))
      const w = Math.min(W, shown), h = Math.round(w * H / W)
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h }
      k = w / W
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      dirty = true
    }
    fit()
    // Resizing clears a canvas, so whatever is showing is redrawn straight away (the loop may not be running yet).
    const ro = new ResizeObserver(() => { fit(); paint(pos) })
    ro.observe(ring)

    const frameAt = (i: number): HTMLImageElement | undefined => {
      for (let n = 0; n < N; n++) { const img = imgs[(i - n + N) % N]; if (img) return img }
      return undefined
    }

    const paint = (p: number) => {
      const i = Math.floor(p) % N
      const t = p - Math.floor(p)
      const a = frameAt(i)
      if (!a) return
      const flow = flows[i]
      const b = imgs[(i + 1) % N]
      ctx.globalAlpha = 1
      if (!flow || !b || t < 0.004) {
        ctx.drawImage(a, 0, 0, canvas.width, canvas.height)
        return
      }
      const sw = STRIP * SCALE
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let s = 0; s < STRIPS; s++) {
        const x = s * sw
        const d = flow[s]
        // Frame A's content moves forward by t * d, frame B's content is pulled back by (1 - t) * d; the two meet in the middle.
        ctx.globalAlpha = 1
        ctx.drawImage(a, x - t * d, 0, sw, H, x * k, 0, sw * k + 0.6, canvas.height)
        ctx.globalAlpha = t
        ctx.drawImage(b, x + (1 - t) * d, 0, sw, H, x * k, 0, sw * k + 0.6, canvas.height)
      }
      ctx.globalAlpha = 1
    }

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick)
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const before = pos
      if (hovering) {
        // Take the shortest way round to the pointer's angle so the turn never spins the long way.
        let diff = target - pos
        diff -= Math.round(diff / N) * N
        pos = (pos + diff * FOLLOW + N) % N
      } else {
        pos = (pos + dt * AUTO_FPS) % N
      }
      if (pos !== before || dirty) { dirty = false; paint(pos) }
    }
    const start = () => { if (!running && visible && !reduceMotion) { running = true; last = performance.now(); raf = requestAnimationFrame(tick) } }
    const stop = () => { running = false; cancelAnimationFrame(raf) }

    const move = (e: PointerEvent) => {
      const r = ring.getBoundingClientRect()
      target = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * N
      hovering = true
    }
    const leave = () => { hovering = false }
    ring.addEventListener('pointermove', move)
    ring.addEventListener('pointerleave', leave)

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop() })
    io.observe(ring)

    // Measures how every strip moves between each pair of neighbouring frames, a little at a time so the page stays responsive.
    const analyse = () => {
      const g = document.createElement('canvas')
      g.width = GW; g.height = GH
      const gctx = g.getContext('2d', { willReadFrequently: true })
      if (!gctx) return
      const grey: (Uint8Array | undefined)[] = new Array(N).fill(undefined)
      const toGrey = (i: number) => {
        const cached = grey[i]
        if (cached) return cached
        gctx.drawImage(imgs[i]!, 0, 0, GW, GH)
        const px = gctx.getImageData(0, 0, GW, GH).data
        const out = new Uint8Array(GW * GH)
        for (let n = 0, j = 0; n < out.length; n++, j += 4) out[n] = (px[j] * 77 + px[j + 1] * 150 + px[j + 2] * 29) >> 8
        grey[i] = out
        return out
      }
      let cursor = 0
      const work = () => {
        if (cancelled) return
        const started = performance.now()
        while (cursor < N && performance.now() - started < 8) {
          const a = cursor, b = (cursor + 1) % N
          if (imgs[a] && imgs[b]) flows[a] = measureFlow(toGrey(a), toGrey(b))
          cursor++
        }
        if (cursor < N) setTimeout(work, 12)
      }
      work()
    }

    const fill = (list: number[]) =>
      Promise.all(list.map((i) => load(urls[i]).then((img) => { imgs[i] = img }).catch(() => { /* a missing frame is skipped */ })))
    const idx = urls.map((_, i) => i)

    load(urls[0]).then((first) => {
      if (cancelled) return
      imgs[0] = first
      ctx.drawImage(first, 0, 0, canvas.width, canvas.height)
      return fill(idx.filter((i) => i > 0 && i % 2 === 0))
    }).then(() => {
      if (cancelled) return
      ring.classList.add('is-ready')
      dirty = true
      if (reduceMotion) paint(0); else start()
      return fill(idx.filter((i) => i % 2 === 1))
    }).then(() => {
      if (!cancelled) analyse()
    }).catch(() => { /* The first frame stays on screen if loading fails. */ })

    return () => {
      cancelled = true
      stop()
      io.disconnect()
      ro.disconnect()
      ring.removeEventListener('pointermove', move)
      ring.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <div className="dx-ring" ref={ringRef} aria-hidden="true">
      <span className="dx-ring-floor" />
      <div className="dx-ring-disc">
        <canvas ref={canvasRef} width={W} height={H} />
      </div>
      <span className="dx-ring-hint">Hover to rotate</span>
    </div>
  )
}

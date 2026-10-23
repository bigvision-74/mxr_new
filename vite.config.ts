import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

const pages = [
  'index.html',
  'about.html',
  'simulator-development.html',
  'xr-development.html',
  'immersive-rooms.html',
  'ai-solutions.html',
  'platform-development.html',
  'modal3d.html',
  'eprium.html',
  'drivexr.html',
  'insightxr.html',
  'insightxr-platform.html',
  'defence-security.html',
  'case-study-xr-readiness.html',
]

export default defineConfig({
  server: { allowedHosts: ['terminal.local'] },
  plugins: [react(), tailwindcss()],
  publicDir: 'src/assets',
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace('.html', ''), resolve(process.cwd(), page)]),
      ),
    },
  },
})

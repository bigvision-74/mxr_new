import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

function cleanUrlsPlugin() {
  const redirect = (req: any, res: any, next: any) => {
    if (!req.url) return next()
    // Redirect any /*.html URL to its clean equivalent
    if (req.url.endsWith('.html')) {
      const clean = req.url === '/index.html' ? '/' : req.url.replace(/\.html$/, '')
      res.writeHead(301, { Location: clean })
      res.end()
      return
    }
    next()
  }
  return {
    name: 'clean-urls',
    configureServer: (s: any) => s.middlewares.use(redirect),
    configurePreviewServer: (s: any) => s.middlewares.use(redirect),
  }
}

export default defineConfig({
  server: {
    allowedHosts: ['terminal.local'],
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
  plugins: [react(), tailwindcss(), cleanUrlsPlugin()],
  publicDir: 'public',
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), 'index.html'),
    },
  },
})

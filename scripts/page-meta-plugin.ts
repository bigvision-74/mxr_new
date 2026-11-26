// Writes each page's title, description, keywords and canonical URL (src/page-meta.ts) into its HTML,
// so they are correct before any JavaScript runs.
import type { Plugin } from 'vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pageMeta, detailPages, canonicalUrl, type PageMeta } from '../src/page-meta'

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function applyMeta(html: string, meta: PageMeta, route: string) {
  const tags = [`<meta name="description" content="${escapeHtml(meta.description)}">`]
  if (meta.keywords) tags.push(`<meta name="keywords" content="${escapeHtml(meta.keywords)}">`)
  tags.push(`<link rel="canonical" href="${escapeHtml(canonicalUrl(route))}">`)
  const title = `<title>${escapeHtml(meta.title)}</title>`
  // Replacer functions stop "$" in the text being treated as a replacement pattern
  return html
    .replace(/[ \t]*<meta\s+name="(?:description|keywords)"[^>]*>\r?\n?/g, '')
    .replace(/[ \t]*<link\s+rel="canonical"[^>]*>\r?\n?/g, '')
    .replace(/<title>[\s\S]*?<\/title>/, () => [title, ...tags].join('\n  '))
}

// "/about", "/about/" and "/about.html" all mean about.html
function pageForUrl(url: string): { route: string; meta: PageMeta } | undefined {
  const path = decodeURIComponent(url.split(/[?#]/)[0]).replace(/^\/+|\/+$/g, '').replace(/\.html$/, '')
  const route = detailPages[path] ? path : `${path || 'index'}.html`
  const meta = detailPages[path] ?? pageMeta[route]
  return meta && { route, meta }
}

export function pageMetaPlugin(): Plugin {
  let outDir = ''
  return {
    name: 'page-meta',
    configResolved: (config) => { outDir = resolve(config.root, config.build.outDir) },
    // Dev: serve every known route from index.html, not the older per-page HTML files
    configureServer: (server) => {
      server.middlewares.use((req, _res, next) => {
        if (req.headers.accept?.includes('text/html') && pageForUrl(req.url ?? '/')) req.url = '/index.html'
        next()
      })
    },
    transformIndexHtml: {
      order: 'pre',
      handler: (html, ctx) => {
        // During a build there is no URL: the template gets the home page tags
        const page = pageForUrl(ctx.originalUrl ?? '/')
        return page ? applyMeta(html, page.meta, page.route) : html
      },
    },
    // Build: copy the finished index.html once per route with that route's tags
    writeBundle: () => {
      const template = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      const routes: [string, PageMeta][] = [
        ...Object.entries(pageMeta),
        ...Object.entries(detailPages).map(([path, meta]): [string, PageMeta] => [`${path}.html`, meta]),
      ]
      for (const [file, meta] of routes) {
        const target = resolve(outDir, file)
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, applyMeta(template, meta, file))
      }
    },
  }
}

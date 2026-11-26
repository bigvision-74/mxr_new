# MXR.ai , React + Vite + TypeScript

The MXR corporate website uses native React components and strict TypeScript, built with Vite. Page content lives in `src/pages/*.tsx`; it does not load HTML templates or inject page markup.

## Run locally

Use Node.js 22.12+ (or a newer supported LTS release).

```bash
npm ci
npm run dev
```

## Validate and build

```bash
npm run typecheck
npm run build
npm run preview
```

Upload the contents of `build/` to your web host. The build writes an HTML file for every page, blog article and case study, each with its own title, description and keywords. Serve it with Nginx using `deploy/nginx.conf`, so that clean URLs such as `/about` return `about.html`.

## Project structure

- `src/App.tsx`: page selection, shared layout and metadata.
- `src/pages/`: editable React pages for Home, About, products, services, defence and the case study.
- `src/components/`: shared navigation, footer, typography/theme controls, immersive hero and headset viewer.
- `src/data/navigation.ts`: service and product navigation data.
- `src/page-manifest.ts`: page components.
- `src/page-meta.ts`: page titles, descriptions and keywords.
- `src/styles/` and page CSS files: shared and page-specific styles.
- `public/assets/`: images, video and other public media.
- `vite.config.ts`: Vite configuration and static page entry points.

React state controls the mobile menu, dropdown navigation, featured-product carousel, colour variations and font selector. Style preferences are saved in browser storage when available.

The optional Quest 3 GLB is intentionally excluded from GitHub. To enable the rotating 3D headset on your own host, add the model at `public/assets/quest-3.glb` before building. Its poster image is included.

# Cookie Pinuki

Static React storefront for Cookie Pinuki, a handmade boutique bakery. Hebrew is the default language at `/`; English lives at `/en`. Orders go to Instagram Direct.

Live site: [https://maor-ar.github.io/cookie-pinuki/](https://maor-ar.github.io/cookie-pinuki/)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

The site is a static Next.js export. Pushing to `main` builds and deploys through GitHub Actions.

Project Pages is served from a subpath, so production builds set `basePath` to `/cookie-pinuki` and write a `.nojekyll` file so GitHub does not ignore the `_next` folder.

## Production URL

Canonical links, Open Graph, sitemap, and JSON-LD use `NEXT_PUBLIC_SITE_URL`. The GitHub Actions workflow sets this automatically. For a custom domain, set it in the workflow or in `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Build

```bash
npm run build
```

The static site is written to `out/`.

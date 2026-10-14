# e-riveras.github.io

Personal site of Eduardo Rivera Silva, built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Develop

```sh
npm install
npx playwright install chromium --only-shell   # once, for the CV PDF
npm run dev                                     # http://localhost:4321
npm run build                                   # site and dist/cv.pdf
```

## Where content lives

| What | Where |
|---|---|
| CV, bio, contact links | `src/data/cv.ts` (feeds the home page, `/cv/` and `cv.pdf`) |
| Projects | `src/content/projects/*.md` |
| Blog posts | `src/content/posts/*.md` |
| Images | `src/assets/` |

Project front matter: `kind` is `code` or `work`, `featured: true` puts a code project on the home page, and `order` sets the sort. Posts with `draft: true` show only in `npm run dev`.

The CV PDF is rendered from the built `/cv/` page by `scripts/cv-pdf.mjs`, so editing `cv.ts` updates both.

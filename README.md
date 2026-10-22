# Dental Clinic Manager — public website

A standalone, Arabic-first product website. Built directly in this repository with Astro, static HTML/CSS, and a small navigation script. No backend, database, login, analytics, or desktop OAuth credentials. The desktop application's files were not accessed.

## Run locally

Use Node **24.15+** (or a supported Node version >=22.12) and npm. In this folder:

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:4321**. On Windows PowerShell, use `npm.cmd` / `npx.cmd` if script execution policy blocks `npm` / `npx`. Do not change your execution policy for this project.

```sh
npm run build
npm run preview
```

`dist/` is the complete deployable static site. Do not open source `.astro` files or the build with `file://`; use the local server so root-relative links work. If a restricted environment blocks Astro's optional telemetry settings, set `$env:ASTRO_TELEMETRY_DISABLED='1'` in PowerShell (or `export ASTRO_TELEMETRY_DISABLED=1` on POSIX) before running commands. Render already sets this flag.

## Routes

| Page | Arabic (default) | English |
| --- | --- | --- |
| Home | `/` | `/en` |
| Privacy | `/privacy` | `/en/privacy` |
| Terms | `/terms` | `/en/terms` |

Every route is pre-rendered and works on direct navigation and refresh. `/404.html` provides bilingual recovery links. Language switching stays on the same page; a saved English preference redirects the bare `/` entry to `/en`. Explicit legal-page language URLs take priority. The only browser storage is the language preference (`dcm-language`).

## Owner configuration

Edit **[site.config.mjs](site.config.mjs)**. All publisher, email, optional phone/social, final origin, and policy date settings are there. Empty values are intentional. No dummy mailbox, fake domain, download button, or inquiry form is used. Contact links become real `mailto:` / `tel:` links only when supplied.

Until the owner has completed **[OWNER-REVIEW.md](docs/OWNER-REVIEW.md)**, legal pages display a draft notice, pages use `noindex, nofollow`, robots disallows crawling, and the sitemap contains no URLs. Supplying a real `publicUrl` creates canonical and language-alternate metadata. Setting `ownerReviewComplete: true` after technical/legal approval enables indexing and the six-page sitemap. Rebuild after any configuration change. `noindex` does not make a deployed site private.

```sh
npm run check:release
```

This intentionally fails until required owner information and approval are provided; it does not prevent local build or preview. It checks configuration only, not legal compliance or live domain ownership.

## Checks

```sh
npx playwright install chromium
npm run build
npm test
```

Tests cover configuration validation, six direct/refresh routes on desktop and mobile Chromium, Arabic RTL and English LTR, WCAG A/AA automated accessibility scans, internal links/anchors, mobile navigation and Escape, keyboard FAQs, language preference and blocked storage, no-JavaScript legal content, no external network requests, crawl safeguards, and 404 recovery. Screenshots are generated in ignored `test-results/` folders for visual inspection. Browser checks use the **production build**, so rebuild after edits. Automated checks do not replace human accessibility or legal review.

## Source map

- `src/pages/` — static route generation, 404, robots, sitemap
- `src/layouts/Layout.astro` — metadata, shared header/footer, language/menu behavior
- `src/components/` — homepage, legal page, contact, brand, icons, original workspace illustration
- `src/content/ui.ts` — Arabic/English UI and marketing copy
- `src/content/legal.ts` — bilingual privacy and terms drafts
- `src/styles/global.css` — responsive design, RTL, focus and reduced-motion styles
- `public/` — original favicon and social preview assets; never put confidential files here
- `tests/`, `playwright.config.ts` — configuration and browser checks
- `docs/` — deployment, OAuth readiness, owner review, design rationale, verification results
- `render.yaml` — static Render configuration: root `.`, build `npm ci && npm run build`, publish `dist`

## Deployment and OAuth

Follow **[RENDER-DEPLOYMENT.md](docs/RENDER-DEPLOYMENT.md)** and **[GOOGLE-OAUTH-CHECKLIST.md](docs/GOOGLE-OAUTH-CHECKLIST.md)**. This repository is initialized independently on branch `main`, with no commit, remote, push, or deployment performed. You control those steps.

## Content and assets

Product capabilities are taken solely from the supplied product description, not verified against private application source. Artwork is original SVG/CSS and contains no patient information. It is visibly labeled as illustrative. Cairo and Inter are self-hosted using Fontsource packages; upstream font license notices are included in `public/licenses/`. Product and legal copy require the owner review described above. No third-party endorsement is implied.

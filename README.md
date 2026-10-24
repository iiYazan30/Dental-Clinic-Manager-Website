# Dental Clinic Manager — public website

A standalone, Arabic-first product website at **https://dentalclinicmanager.page**. Built directly in this repository with Astro, static HTML/CSS, and a small navigation script. No backend, database, login, analytics, or desktop OAuth credentials. The desktop application's files were not accessed.

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

Edit **[site.config.mjs](site.config.mjs)**. All publisher, email, optional phone/social, official origin, and policy date settings are there. The existing owner-supplied name, email, phone, and official domain are preserved. Optional social links remain empty. No dummy mailbox, fake domain, download button, or inquiry form is used. Contact links render as `mailto:` / `tel:` links.

The owner explicitly approved both languages' Privacy Policy and Terms on **24 October 2026**. `ownerReviewComplete: true` and `policyDate: '2026-10-24'` enable final effective-date labels, indexing for the six public pages, allowing robots, and the complete sitemap. Canonical/hreflang/Open Graph URLs use the official domain. The 404 page intentionally remains noindex. See the [approval record](docs/OWNER-REVIEW.md). Rebuild after configuration changes.

```sh
npm run check
```

`check` reuses the release configuration validation and configuration tests. It does not claim TypeScript type checking, legal certification, Google approval, or live domain ownership verification. `check:release` remains available separately.

## Checks

```sh
npx playwright install chromium
npm run check
npm run build
npm test
```

Tests cover configuration validation, six direct/refresh routes on desktop and mobile Chromium, Arabic RTL and English LTR, WCAG A/AA automated accessibility scans, internal links/anchors, mobile navigation and Escape, keyboard FAQs, language preference and blocked storage, no-JavaScript legal content, no external network requests, crawl safeguards, and 404 recovery. Screenshots are generated in ignored `test-results/` folders for visual inspection. Browser checks use the **production build**, so rebuild after edits. Automated checks do not replace human accessibility or legal review.

## Source map

- `src/pages/` — static route generation, 404, robots, sitemap
- `src/layouts/Layout.astro` — metadata, shared header/footer, language/menu behavior
- `src/components/` — homepage, legal page, contact, brand, icons, original workspace illustration
- `src/content/ui.ts` — Arabic/English UI and marketing copy
- `src/content/legal.ts` — owner-approved bilingual privacy and terms
- `src/styles/global.css` — responsive design, RTL, focus and reduced-motion styles
- `public/` — original favicon and social preview assets; never put confidential files here
- `tests/`, `playwright.config.ts` — configuration and browser checks
- `docs/` — deployment, OAuth readiness, owner review, design rationale, verification results
- `render.yaml` — static Render configuration: root `.`, build `npm ci && npm run build`, publish `dist`

## Deployment and OAuth

The owner reports deployment on Render, successful Search Console domain verification, and production OAuth configuration. See the current **[production branding review](docs/OAUTH-PRODUCTION-REVIEW.md)** and **[OAuth checklist](docs/GOOGLE-OAUTH-CHECKLIST.md)** before submission. The [deployment guide](docs/RENDER-DEPLOYMENT.md) remains available as a reference. The 23 October review performs no commit, push, deployment, or Google Cloud change; the owner controls publication.

## Content and assets

General product capabilities use the supplied product description. Technical privacy disclosures use the owner's supplied verified desktop source-audit and revocation-update findings; this website task did not access desktop/private source or data. The owner approved the bilingual legal text and reports successful manual revocation/reconnect testing against Development. This does not establish Production testing or Google approval. The software remains in development. Artwork is original SVG/CSS and contains no patient information. It is visibly labeled as illustrative. Cairo and Inter are self-hosted using Fontsource packages; upstream font license notices are included in `public/licenses/`. No third-party endorsement is implied.

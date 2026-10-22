# Deploy the standalone site on Render

Prepared 22 October 2026. No deployment has been performed. Configuration reflects [Render's Astro static-site guide](https://render.com/docs/deploy-astro) and [Blueprint reference](https://render.com/docs/blueprint-spec); confirm current dashboard labels when deploying.

## 1. Review locally

1. Install Node 24.15+ and run `npm ci` in the project root.
2. Run `npm run dev` and inspect Arabic and English on desktop/mobile.
3. Complete `docs/OWNER-REVIEW.md`. Edit `site.config.mjs` for publisher identity, real monitored email, optional phone/social links, final public origin, and approved effective date.
4. For an initial Render preview, you may leave `publicUrl` empty and `ownerReviewComplete` false. Pages remain publicly accessible drafts with indexing disabled. Never upload private data even to a preview.
5. Run `npm run build`, install the test browser with `npx playwright install chromium`, and run `npm test`.

On restricted Windows PowerShell, use `npm.cmd` / `npx.cmd`. `$env:ASTRO_TELEMETRY_DISABLED='1'` disables optional build telemetry if filesystem policy prevents Astro from writing its settings.

## 2. Publish only this repository yourself

This folder already contains its own empty `.git` repository, on `main`. There is no nested `website/` folder and no dependency on the desktop repository.

1. Review `git status --short` and the source files. Keep `.gitignore` in place.
2. Do not add secrets, `.env` files, real screenshots, tokens, Recovery Keys, clinical records, attachments, databases, or backup files. `.gitignore` is a convenience, not a guarantee against accidental inclusion.
3. Create a dedicated website repository in your own GitHub account. Choose its visibility deliberately. Do not connect the private Windows application repository.
4. Stage and commit only the reviewed website source, lockfile, public original assets, docs, and tests. Do not stage `node_modules`, `dist`, `.astro`, `.npm-cache`, or test reports.
5. Add your repository's remote and push `main` yourself. No commands that commit or push have been executed by the agent.

## 3. Create the Static Site

In Render: **New → Static Site**, connect the dedicated website repository, and use:

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Root Directory | `.` (or leave blank, which means repository root) |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `dist` |
| Environment | `NODE_VERSION=24.15.0`, `ASTRO_TELEMETRY_DISABLED=1` |
| Automatic deploys | Off, unless you later choose to enable them |

Choose the static hosting option. No paid web service, database, worker, or server start command is needed. `render.yaml` is an optional ready-to-use Blueprint with those settings and automatic deployments disabled. Creating a Blueprint would still publish a site; do that only when you decide to deploy. Check current plan usage allowances in your own Render account.

**Do not add a catch-all `/* → /index.html` SPA rewrite.** These are separate generated HTML pages; such a rewrite can hide route errors or serve the wrong language. Render can serve the generated directory index files as clean URLs. The generated root `404.html` is the error page.

Only `dist/` is published. Do not publish the repository root or `src/`. Do not add desktop OAuth environment variables. The site has no OAuth flow.

## 4. Verify the Render preview

After you choose to deploy, open Render's assigned `https://…onrender.com` URL in a private browser window:

- Check `/`, `/privacy`, `/terms`, `/en`, `/en/privacy`, `/en/terms` directly, then refresh each.
- Check the mobile menu, FAQ, language switch, footer links, and actual contact links.
- Check a nonexistent route returns the 404 page with an HTTP 404 status.
- Check HTTPS and absence of mixed-content or console errors.
- Check `/robots.txt` and `/sitemap.xml`. Draft builds should not advertise placeholder URLs.

A shared `onrender.com` preview is not a publisher-owned custom domain or proof that you control the registrable domain for Google brand verification. Do not invent canonical URLs for it.

## 5. Add your purchased custom domain

1. Purchase a domain you control. Choose one canonical origin (root or `www`).
2. In the Static Site's **Settings → Custom Domains → Add Custom Domain**, enter it.
3. At your DNS provider, add **exactly the record names and values shown by Render**. A subdomain commonly uses CNAME; apex configuration depends on the provider. Do not copy an old IP from a tutorial.
4. Preserve email and other unrelated DNS records. Follow Render's instructions for conflicting records, including IPv6 records, for the hostname being connected.
5. Return to Render, verify the domain, and wait for DNS and certificate provisioning.
6. Confirm the preferred origin loads over HTTPS, and other forms redirect to it. Render documents automatic TLS issuance and renewal in its [custom-domain guide](https://render.com/docs/custom-domains).
7. Set `publicUrl` in `site.config.mjs` to that exact HTTPS origin, without a subpath. Confirm owner review and date, then rebuild, rerun tests and `npm run check:release`, and deploy your reviewed revision yourself.
8. Inspect canonical/alternate tags in page source. Confirm robots allows crawling and the sitemap contains six correct URLs only after owner approval.

## 6. Search Console and Google Auth Platform

1. Add a **Domain property** in Google Search Console for the domain you own.
2. Publish the DNS TXT record Google supplies at your registrar/DNS host, then verify ownership. Preserve the verification record. Google's [ownership guide](https://support.google.com/webmasters/answer/9008080) describes the process.
3. Follow `docs/GOOGLE-OAUTH-CHECKLIST.md` to configure the separate production Google Cloud project.
4. Use final HTTPS homepage, privacy, and terms URLs from your domain. Keep the policy URL in the homepage and Google branding configuration identical.
5. Recheck the live site without login, complete the technical/legal approval items, and submit to Google yourself when ready.

The agent has not purchased a domain, changed DNS, created a Cloud project, submitted verification, or published the site.

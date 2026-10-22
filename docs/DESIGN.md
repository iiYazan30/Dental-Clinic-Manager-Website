# Frontend design contract

## Purpose and journey

New, independent marketing site for Arabic-speaking clinic owners and dentists evaluating Dental Clinic Manager. Core objects are patient records, appointments, tooth records, treatment sessions, accounts, suppliers, attachments, and backups. The visitor's first decision is whether the Windows workflow fits the clinic. Success is understanding the product, its data handling, and the official contact channel. Entry is homepage/search/direct legal link; recovery is shared navigation and bilingual 404 links. Mobile prioritizes the product explanation and contact action.

## Design choice

Astro with custom semantic HTML/CSS is the smallest static-first foundation for six localized routes. Plain HTML could also work but would duplicate layouts; a React SPA would add a runtime and routing work unnecessary here. No component or data engine is required. References are GOV.UK's readable legal hierarchy, Carbon's restrained product information, and the clarity of Fluent's Windows vocabulary, without copying their assets.

Chosen direction: a warm editorial product site, with deep forest green, muted sage, cream, subtle gold, Cairo Arabic, and Inter English. A conservative enterprise direction would be less expressive; a bright clinical template would obscure the desktop product identity. The original data-free workspace and connected-tooth illustrations make the software concrete without fabricated clinical records. Feature cards are limited to the requested catalogue; the rest of the page uses distinct editorial, diagram, process, FAQ, and contact layouts.

## Maintain

- Shared shell, icons, contact rendering, translations, and CSS variables. No extra component framework for isolated controls.
- Default Arabic RTL; English LTR; logical spacing and explicit isolation for URLs/brand names. Native semantics, visible keyboard focus, reduced motion, and readable legal line lengths.
- Honest status and contact states. No fake reviews, statistics, certifications, prices, demo records, or download buttons. Backend/framework details belong in docs unless relevant to privacy decisions.
- Contact email becomes actionable only when real settings exist. Navigation and FAQs remain useful without forms or network services. Legal pages remain readable without JavaScript.
- Keep gold primarily on dark green. Do not use pale gold or illustration annotations as essential low-contrast body text.

## Verification

Build the production output; check direct and refreshed routes, mobile navigation and Escape, language preference and blocked storage, keyboard FAQ behavior, anchors, external network absence, automated WCAG A/AA, and 1440px/390px screenshots. Recheck 320px and tablet overflow after substantial layout changes. Human visual and assistive-technology review remain separate from automated results. See `VERIFICATION.md` for this handoff's results.

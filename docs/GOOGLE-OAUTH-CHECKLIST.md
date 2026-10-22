# Google OAuth production branding readiness

Reviewed against official documentation on **22 October 2026**. This checklist is preparation, not confirmation of Google's approval or legal compliance. The website never signs users in or receives OAuth credentials. The existing Windows application's OAuth flow remains separate.

## Prepared in this repository

- [x] Static public homepage accurately describes Dental Clinic Manager as an Arabic-first Windows desktop application in development.
- [x] Arabic and English privacy and terms routes exist without login.
- [x] Privacy is linked in the main navigation and footer; terms are linked in the footer.
- [x] Privacy draft describes local records, optional Drive backup, Google data access/use/storage/sharing, retention caveats, revocation, and Limited Use.
- [x] Scope named exactly: `https://www.googleapis.com/auth/drive.file`.
- [x] Website contains no desktop OAuth login, token storage, client credentials, or patient data.
- [x] A single public configuration file controls identity, contact, domain, and review state.

## Owner actions before production submission

1. **Confirm product behavior and approve legal copy.** Complete `OWNER-REVIEW.md`, especially tokens, actual connected account fields, backup retention/deletion, and restore limitations. Replace the review-draft passages in both languages with confirmed wording before approval.
2. **Supply identity and contact.** Configure the publisher name and a monitored support email that you can use in Google Auth Platform. Keep product name exactly **Dental Clinic Manager** in the site, application, and consent branding.
3. **Deploy the public site on HTTPS.** Follow `RENDER-DEPLOYMENT.md`. Verify all six pages and the contact address publicly, without login or an expiring sharing link.
4. **Own a custom domain.** Add and verify it in Render. An `onrender.com` preview does not establish ownership of the shared hosting domain.
5. **Verify ownership in Search Console.** Add a Domain property, publish Google's DNS TXT record, and verify using the Google account responsible for the project, or ensure the responsible account has the required verified ownership. See [Google's ownership instructions](https://support.google.com/webmasters/answer/9008080).
6. **Use a separate production Google Cloud project.** Select or create it yourself in Google Cloud; do not reconfigure the desktop development project as part of this website task. Set valid project contact information.
7. **Google Auth Platform → Branding.** Set app name **Dental Clinic Manager**, support email, and developer contact. Enter your final HTTPS origin as the homepage and the same origin plus `/privacy` and `/terms` for the policy URLs. These are the Arabic-default pages with visible English equivalents. The homepage privacy link must match the configured privacy URL.
8. **Authorized domains.** Add the owned registrable domain under Branding's authorized domains. Complete any ownership prompts. Do not enter a URL path or try to authorize the shared registrable `onrender.com` domain as your own.
9. **Audience and Data Access.** Choose the intended audience and production publishing status for the actual application's users. Declare `https://www.googleapis.com/auth/drive.file`; do not add broad Drive scopes or unrelated profile scopes merely for future use. Confirm the real Windows client requests only its documented scopes.
10. **Check client configuration separately.** Configure the Windows application's appropriate OAuth client and permitted flow in its own project/process. Do not paste client secrets, tokens, redirect-handling logic, or desktop credential files into this repository or Render.
11. **Recheck Google's current requirements and status.** Inspect Google Auth Platform's verification center and current official policy at submission time. `drive.file` is currently documented as a recommended **non-sensitive** per-file scope; that does not establish brand-verification completion or exempt the whole app from every policy requirement. Brand and data-access requirements are separate. Follow the exact requirements Google shows for your project.
12. **Submit yourself if required.** Provide any requested brand information, scope justification, and demonstration using sanitized test data. No submission, project modification, DNS change, or publication was performed in this task.

## Final live checks

- [ ] `/` accurately explains the application; no fake download or release claim.
- [ ] `/privacy` and `/terms` return successful public responses on the same owned HTTPS origin.
- [ ] Publisher identity, support email, approved effective date, and legal text are finalized in both languages.
- [ ] Privacy's Google data disclosures match the release and its in-app notices.
- [ ] Domain ownership is verified and Authorized domains is configured.
- [ ] Branding URLs match the live links exactly.
- [ ] `npm run check:release`, production build, and local tests pass after final settings.
- [ ] Google verification center status and current policy requirements have been reviewed; no approval is assumed.

## Official sources

- [Brand verification requirements](https://support.google.com/cloud/answer/13464321) — owned verified domain, meaningful homepage, accessible matching privacy policy, and data disclosures.
- [Authentication policy compliance](https://developers.google.com/identity/verification/authentication-policy-compliance) — identity, consent branding, production configuration.
- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) — transparency, purpose limits, minimum permissions, and Limited Use where applicable.
- [Google Drive scopes](https://developers.google.com/workspace/drive/api/guides/api-specific-auth) — `drive.file` per-file access and current non-sensitive classification.
- [Search Console ownership](https://support.google.com/webmasters/answer/9008080) — DNS verification for Domain properties.

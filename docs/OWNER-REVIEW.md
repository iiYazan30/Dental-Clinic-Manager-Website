# Owner approval and publication record ? 24 October 2026

**The owner explicitly approved the current Arabic and English Privacy Policy and Terms of Service on 24 October 2026 and authorized final publication preparation.** The effective date is **2026-10-24**, and ownerReviewComplete is now **true**. Draft-only wording was removed without adding commercial, jurisdictional, certification, or data-handling promises.

The owner also reports successful manual Google OAuth revocation and reconnect testing against the existing **Development** project. This is recorded as Development evidence only; no Production-project test result or Google approval is inferred. The website task did not access desktop code, clinic data, credentials, or Google settings.

## Approved public settings

| Setting | Final value |
| --- | --- |
| Product | Dental Clinic Manager |
| Publisher | Yazan Mallah |
| Support email | dentalclinicmanager7@gmail.com |
| Optional telephone | +970598967653 |
| Official origin | https://dentalclinicmanager.page |
| Effective date | 24 October 2026 in both languages |
| Owner review | Complete, explicitly authorized |

Contact values and the existing brand/design were preserved. This task checks rendered mailto/tel links but does not send mail or place calls. Routine mailbox monitoring remains the publisher's responsibility.

## Finalization scope

- Remove obsolete legal-draft banners, body passages awaiting approval, and outdated claims that live revocation testing is entirely pending.
- Preserve technical disclosures below and the application's in-development status.
- Retain the approved informational terms framework: no prices, final software-license duration, warranties, refund policy, liability cap, or jurisdiction are invented by this website. Applicable commercial agreements remain separate.
- Enable indexing for the six public routes, official-domain canonical/hreflang/Open Graph metadata, allowing robots, and a six-route sitemap. Keep 404 noindex intentionally.
- No website publication blocker remains on the supplied facts once final automated checks pass. Owner approval is not independent legal certification or Google verification.

## A. Technical facts supplied as verified — reflected in both languages

The following previous technical gaps are closed at the source-audit level. Do not request token values, keys, private files, or a repeat desktop inspection to substantiate them here.

| Topic | Supplied verified fact | Public disclosure |
| --- | --- | --- |
| Scope and account data | Only `drive.file`; stable Drive account identifier, email when supplied, available quota; no Gmail/Contacts/Calendar/full Drive/photos/passwords requested | Privacy §§2, 4 |
| OAuth and tokens | System browser, loopback, PKCE S256, state; access tokens temporarily in Rust memory, refresh tokens encrypted with current-user DPAPI, protected local state; direct Google communication | Privacy §5; token storage is no longer described as unknown |
| Backup encryption | Locally created .dcb files; clinical database/attachment content encrypted/authenticated with XChaCha20-Poly1305 and derived keys; clinic-owned Drive folder | Privacy §§3–4 |
| Readable backup metadata | Filenames, times, sizes, app/file identifiers, hashes and certain headers readable; no patient names/plaintext clinical records in upload metadata | Privacy §3; no all-bytes/all-metadata encryption claim |
| Automatic creation | Off by default; open app only, eligible daily launch or clinic-local time; catch-up creates current copy, not missed history; offline local creation, bounded upload retries/manual retry | Privacy §4, terms §5, homepage |
| Managed retention | Default target 7; choices 1/3/7/14/30; not a hard maximum; pending/failed copies may remain; changing setting need not immediately clean up; manual exports excluded | Privacy §8, terms §5, homepage FAQ |
| Permanent cloud deletion | After verified successful upload, older eligible clinic backups can be permanently deleted with Drive delete API, bypassing Trash | Privacy §8 and terms §5 prominently distinguish permanent deletion |
| Revocation update | Attempt remote HTTPS revocation; remove local credentials after success; recognized invalid-token outcome does not prove all grants revoked; retain on failure/timeout with Retry/Cancel/confirmed local-only fallback | Privacy §8, terms §6 |
| Disconnect limits | Local-only does not revoke Google; remote revocation may affect same-account/project installations; no deletion of records/local/cloud backups; enabled local daily schedule preserved | Privacy §8, terms §6 |
| Restore/key limits | Another device/profile normally needs compatible .dcb + applicable offline Recovery Key; Google grant is insufficient; replaces current data; loss of both key sources can prevent recovery; no publisher escrow identified | Privacy §9, terms §5, homepage |
| External communication | Direct Google OAuth/Drive; no publisher patient-data backend/token relay/backup server, ad SDK, tracking, auto crash uploader, or routine plaintext record upload identified | Privacy §§5, 7; observations are limited to the audited source |
| Local file limits | SQLCipher, encrypted attachment containers, readable technical metadata; temporary decrypted previews may leave remnants after interrupted/failed cleanup; original source files outside vault remain user responsibility | Privacy §3; homepage security/FAQ and terms §5 |
| Development/Production projects | App-specific authorization/private metadata may prevent Production discovering Development backups; project changes do not delete files or invalidate encryption | Privacy §4, terms §6; no seamless migration promise |

## Publication steps for the owner

1. Review the final local changes and verification results in VERIFICATION.md.
2. Run npm run check, npm run build, and npm test against the reviewed revision.
3. Commit and push the website source using your own workflow, then deploy that exact revision on Render. The agent performs none of these actions.
4. Check all six public URLs, effective dates, real contact links, official-domain canonical/hreflang/Open Graph metadata, robots.txt, sitemap.xml, and the absence of draft text on the deployed site.
5. Check the existing Google Branding, Authorized domains, audience/publishing state, and verification-center requests before submission. No settings are changed by this task.

## Limits retained in the handoff

- Manual revocation/reconnect success is owner-reported for Development only. Production behavior, cross-installation effects, and every error path were not independently tested here; no contrary public claim is made.
- Existing Search Console/Cloud configuration and earlier live-site observations are owner-reported or historical. No new live-site audit, mailbox-delivery test, or Google-console inspection is part of this release preparation.
- Confirm that the desktop version distributed to users matches the approved technical disclosures. This is an operational release responsibility, not a new legal-page approval gate.
- No commits, pushes, deployments, installers, desktop modifications, or private-file access were performed.

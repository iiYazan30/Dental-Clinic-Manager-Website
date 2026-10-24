# Final owner-approved publication preparation ? 24 October 2026

**Status: ready locally for the owner to review, commit/push, and publish after the final checks.** Effective date: **2026-10-24**. ownerReviewComplete is **true**, expressly authorized by the owner. This is owner approval of the current bilingual legal texts, not a claim of independent counsel review, Google verification, or commercial software release.

The approved legal meaning and technical disclosures are preserved. Draft banners, obsolete approval-dependent prose and outdated claims that all live revocation testing is pending are removed. Prices, license duration, refunds, warranties, liability caps, and jurisdiction remain outside this informational website's terms or in the applicable commercial agreement; no missing facts were invented.

The owner reports successful Google revocation and reconnect testing against the existing **Development** project. This does not prove Production-project behavior, cross-installation effects, every failure path, or Google policy approval. The public pages retain accurate revocation failure/local-only limits without making testing or approval claims.

Official domain, name, support email, telephone, brand/design, and in-development product status are preserved. All six public pages are indexable, the sitemap has six correct URLs, and the intentional 404 noindex remains. See VERIFICATION.md for final build/test/output results.

## Evidence and scope

This repository uses the owner's supplied verified desktop source-audit and revocation-update facts. This website preparation accesses no desktop source, clinic data, private credentials, environment files, keys, or Google settings. The earlier public inspection on 23 October is historical only; the live site was not re-audited or changed during final local preparation. No commits, pushes, deployments, installers, or Computer Use were performed.

## A. Technical disclosures now present in Arabic and English

| Topic | Correct public disclosure |
| --- | --- |
| Optional connection | Clinic-owned Google account, initiated in the desktop app; this website is not an OAuth endpoint or patient portal |
| Permission and fields | Only drive.file; stable Drive account identifier, email when supplied, available quota; no Gmail, Contacts, Calendar, unrestricted Drive, profile photos, or passwords |
| OAuth handling | Windows system browser, local loopback callback, PKCE S256 and state verification; direct Google OAuth/Drive communication |
| Token storage | Access tokens temporarily in Rust memory; refresh tokens encrypted with Windows current-user DPAPI; protected local connection state; no publisher relay or backup server identified |
| Local storage limits | SQLCipher database and encrypted stored attachment containers, readable technical metadata, protected temporary decrypted previews with possible cleanup remnants, and original source documents outside the vault remaining the user's responsibility |
| Backup content | Created locally; clinical database/attachment content encrypted/authenticated before upload using XChaCha20-Poly1305 and derived keys; .dcb files in Dental Clinic Manager Backups on the clinic's Drive |
| Readable metadata | Filenames, times, sizes, app/file identifiers, hashes and some technical headers remain readable; no patient names or plaintext clinical records in upload metadata; no all-bytes encryption promise |
| Automatic backup | Disabled by default; open app only, eligible daily launch or clinic-local configured time; missed run creates current copy, not reconstructed historical copies; offline local creation and bounded upload retries/manual retry |
| Retention | Default managed target 7; choices 1/3/7/14/30; not a hard maximum; pending/failed copies can remain; no guaranteed immediate cleanup; manual exports excluded |
| Permanent Drive deletion | Cleanup follows a verified successful upload, for eligible backups of the relevant clinic, and may permanently delete older copies through Drive delete API without Trash |
| Remote disconnect | HTTPS revocation attempt; local credentials/upload capabilities removed after success; recognized invalid-token response may remove unusable credentials without establishing all grants revoked |
| Failure and local-only fallback | Timeout/failure preserves credentials for retry; Retry/Cancel/explicitly confirmed local-only fallback; local-only does not revoke Google's permissions; remote revocation may affect same-account/project installations |
| Disconnect preservation | Does not delete clinical records/local/cloud copies; enabled daily local scheduling remains |
| Recovery | Google authorization cannot decrypt clinical content; another device/profile normally needs compatible .dcb and its applicable offline Recovery Key; restoration replaces current data; losing both key sources can prevent recovery; no publisher escrow identified |
| Project transition | Production may not discover Development backups automatically because authorization/private metadata are app-specific; project changes do not delete files or invalidate encryption; no seamless migration promise |
| Actual network observations | No publisher patient-data backend, ad SDK, tracking, automatic crash uploader, or routine plaintext record upload identified in audited desktop source; observations are bounded, not absolute guarantees about OS/browser/third-party behavior |
| Website/support | Render hosting and request processing, self-hosted assets, no source-installed advertising/analytics; email providers process support correspondence; no confidential records/keys should be emailed |
| Google commitments | User-facing backup/connection/quota/recovery purposes and Limited Use commitments retained for owner adoption; organizational/support practices still need approval |

Both Privacy Policy versions now provide these facts rather than saying token storage or retention is unknown. Terms §§5–6 and homepage security/backup/FAQ copy were corrected for consistency. Obsolete approval/draft wording was finalized following explicit owner approval on 24 October 2026.

## Owner publication sequence

1. Review the final local source and verification results.
2. Run npm run check, npm run build, and npm test. No further owner legal-approval question is required for these approved texts.
3. Commit and push through your own workflow and publish the reviewed revision on Render.
4. Recheck all six live pages, contact links, effective dates, official-domain canonical/hreflang/Open Graph metadata, robots/sitemap, and no draft text. The 404 remains intentionally noindex.
5. Recheck existing Google Branding/Authorized domains/audience settings and the verification-center requests, then submit the approved public version yourself.

## Remaining limits, not website blockers

- Production OAuth operation, mailbox delivery, screen readers/real devices, Google-console state, and the newly deployed public revision are not independently tested here.
- Manual Development revocation/reconnect success is owner-reported; never describe it as Production validation or Google approval.
- The publisher remains responsible for operating its contact channels and distributing an application version consistent with its approved disclosures.

## Policy references

- [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy)
- [Google OAuth 2.0 Policies](https://developers.google.com/identity/protocols/oauth2/policies)

No genuine blocker to website publication remains on the supplied approved facts, subject to passing the final checks. Deployment and Google submission remain owner-controlled actions.

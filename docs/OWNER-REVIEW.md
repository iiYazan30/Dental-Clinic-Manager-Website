# Outstanding owner information and review

This site was built solely from the supplied product description. **No desktop source, configuration, database, credentials, backups, or private assets were accessed.** Features in that description are represented as described, not independently audited. This report belongs to the project handoff and is not included in the published static output.

## Information only the owner can supply

| Item | Where it goes | Required for release |
| --- | --- | --- |
| Public publisher / business name | `site.config.mjs` → `publisherName` | Yes |
| Monitored public support and privacy email | `supportEmail` | Yes |
| Purchased domain and final HTTPS origin | `publicUrl` | Yes for final branding |
| Approved policy effective date | `policyDate` | Yes |
| Optional public telephone | `phone` | No |
| Optional official social links | `socialLinks` (`{ label, url }`) | No |

These are empty rather than fictional. A missing email displays a clear contact-information state, not a dummy clickable address. Set all mandatory values and finish the review below before setting `ownerReviewComplete: true`. Approval is an owner declaration, not an automated certification.

## Technical facts requiring confirmation by the product owner

Use documentation or a separate authorized review of the installed/released application. Do not copy private data into this website repository.

| Topic | Current wording / treatment | Required decision |
| --- | --- | --- |
| Product availability | “In development”; no download, pricing, sales, or release claim | Confirm before changing availability wording |
| Feature list | All nine groups supplied in the brief | Confirm these exist in the version being presented; remove anything unimplemented |
| Local storage | SQLCipher database and encrypted attachments, per brief | Confirm exact coverage and any unencrypted metadata/export exceptions |
| Google scope | `drive.file` per brief | Confirm actual requested scopes; disclose any others before adding them |
| Google account details | Connection display data and backup metadata, without invented profile fields | Confirm exact account fields accessed, whether retained locally, and their purpose |
| Token storage | Policy §5 deliberately does not claim DPAPI, a vault, or a particular protection mechanism | Confirm storage location, protection, refresh/revocation lifecycle, cleanup, and any nonlocal processing; replace that caveat with accurate specifics |
| Backup operations | Create/upload/list/find/download/manage app backups, per brief | Confirm deletion controls, app-created file selection, metadata, and any folder access |
| Backup retention | Privacy §8 avoids an invented default/count/schedule | Supply actual configurable defaults/ranges and automatic cleanup conditions; document local vs cloud behavior separately |
| Disconnect and deletion | Explicitly does not promise automatic deletion of old backups | Confirm disconnect cleanup of credentials and uploaded files, revocation behavior, trash behavior, and available manual deletion steps |
| Automatic backups | Daily while application is running, per brief | Confirm scheduling, network prerequisites, failure feedback, and retention interactions |
| Recovery Key | Only supported scenarios, no guaranteed rescue of lost keys | Confirm requirements, device-migration scenarios, compatibility, overwrite behavior, and limitations |
| Developer access / transfers | No routine publisher access or developer record backend is claimed | Confirm any crash reports, telemetry, support uploads, network services, or human access; disclose if actually present |
| Website hosting | Intended Render static hosting; locally served fonts and assets | Confirm final hosting and email providers; revise policy if services change |

## Legal and commercial decisions

- Confirm the publisher's legal identity and the roles of publisher and clinic in the relevant jurisdictions. This draft makes no unverified statutory compliance or certification claim.
- Review privacy and terms in both languages for equivalent meaning, lawful patient-data processing, actual rights/contact procedures, and notices/consent required within the application.
- Approve the Google data purposes and Limited Use commitment in privacy §6. Check the implementation and any human-access or transfer exceptions against Google's current policy. The public draft is not proof of compliance.
- Replace “draft” / “not confirmed” passages in privacy §§1, 5, 8 and 12 and terms §§1, 3, 10–12 with approved accurate final provisions. Switching the flag hides the general draft banner; **it does not rewrite the legal prose**.
- Finalize license scope/duration, prices, device limits, renewal, refund arrangements, warranty/support terms, liability allocation, and any governing law/dispute procedure in the appropriate final agreement. None are invented here. Do not imply that the generic draft terms establish those commercial details.
- Confirm an effective date and an appropriate policy/terms update notification process. Update both translations together.
- Have qualified counsel review the final legal text where appropriate. No legal review or Google approval is claimed by this build.

## Finish

1. Update the relevant bilingual copy in `src/content/ui.ts` and `src/content/legal.ts` with confirmed information.
2. Complete `site.config.mjs` and set `ownerReviewComplete` only after approval.
3. Run `npm run check:release`, `npm run build`, and `npm test`.
4. Review desktop/mobile and Arabic/English again. Confirm real contact links.
5. Publish and complete the separate live-domain/OAuth steps yourself.

No owner decision is needed to run the local draft preview.

import { site } from '../site.config.mjs';
const missing = ['publisherName', 'supportEmail', 'publicUrl'].filter(key => !site[key]);
if (!site.ownerReviewComplete) missing.push('ownerReviewComplete (technical and legal review)');
if (missing.length) {
  console.error(`Not ready for public release:\n${missing.map(key => `- ${key}`).join('\n')}\nSee docs/OWNER-REVIEW.md. Local preview and build remain available.`);
  process.exitCode = 1;
} else console.log('Owner settings complete. Rebuild, test, and complete the live-domain OAuth checklist before submission.');

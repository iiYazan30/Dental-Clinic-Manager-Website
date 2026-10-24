import assert from 'node:assert/strict';
import { test } from 'node:test';
import { site, validateSite } from '../site.config.mjs';

test('the official production origin is configured', () => {
  assert.equal(site.publicUrl, 'https://dentalclinicmanager.page');
});

test('empty owner settings support a non-indexed preview', () => {
  assert.equal(validateSite({ ...site, publicUrl: '', publisherName: '', supportEmail: '', ownerReviewComplete: false }).publicUrl, '');
});
test('reject unsafe origins, placeholders, and malformed contact details', () => {
  for (const publicUrl of ['http://clinic.test', 'https://example.com', 'https://clinic.test/path', 'https://user:pass@clinic.test', 'https://clinic.test?x=y', 'https://localhost', 'https://draft.invalid']) {
    assert.throws(() => validateSite({ ...site, publicUrl }));
  }
  assert.throws(() => validateSite({ ...site, supportEmail: 'not-an-email' }));
  assert.throws(() => validateSite({ ...site, phone: 'javascript:alert(1)' }));
  assert.throws(() => validateSite({ ...site, socialLinks: [{ label: 'Link', url: 'javascript:alert(1)' }] }));
  assert.throws(() => validateSite({ ...site, policyDate: 'tomorrow' }));
  assert.throws(() => validateSite({ ...site, policyDate: '2026-02-31' }));
});
test('owner approval requires an actual identity, email, and HTTPS origin', () => {
  assert.throws(() => validateSite({ ...site, publisherName: '', ownerReviewComplete: true }));
  const approved = { ...site, publicUrl: 'https://clinic.test', publisherName: 'Test publisher', supportEmail: 'support@clinic.test', ownerReviewComplete: true };
  assert.equal(validateSite(approved).ownerReviewComplete, true);
});

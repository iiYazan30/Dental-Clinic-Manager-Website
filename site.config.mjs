// Public website settings only. Never place desktop credentials or clinic data here.
export const site = {
  productName: 'Dental Clinic Manager',
  publisherName: 'Yazan Mallah', // Owner-approved public publisher name.
  supportEmail: 'dentalclinicmanager7@gmail.com', // Owner-approved public support contact.
  phone: '+970598967653', // Owner-supplied optional public telephone.
  socialLinks: [], // Optional { label, url } entries; none supplied.
  publicUrl: 'https://dentalclinicmanager.page', // Official production origin.
  policyDate: '2026-10-24', // Owner-approved effective date for both legal pages.
  ownerReviewComplete: true, // Explicit owner approval recorded in docs/OWNER-REVIEW.md.
};

export function validateSite(config) {
  if (config.publicUrl) {
    const url = new URL(config.publicUrl);
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
      throw new Error('publicUrl must be an HTTPS origin without credentials, path, query, or fragment.');
    }
    if (url.hostname === 'localhost' || url.hostname.endsWith('.invalid') || url.hostname === 'example.com' || url.hostname.endsWith('.example.com')) {
      throw new Error('Use your real public domain, not a placeholder. Leave publicUrl empty for local previews.');
    }
  }
  if (config.supportEmail && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(config.supportEmail)) {
    throw new Error('supportEmail must be a valid public email address or empty.');
  }
  if (config.phone && !/^\+?[\d ()-]{6,25}$/.test(config.phone)) throw new Error('phone must be a phone number or empty.');
  for (const link of config.socialLinks) {
    if (!link.label || new URL(link.url).protocol !== 'https:') throw new Error('Social links need a label and an HTTPS URL.');
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(config.policyDate) || Number.isNaN(Date.parse(config.policyDate)) || new Date(config.policyDate).toISOString().slice(0, 10) !== config.policyDate) throw new Error('policyDate must be a valid ISO date.');
  if (config.ownerReviewComplete && (!config.publisherName || !config.supportEmail || !config.publicUrl)) {
    throw new Error('Complete publisherName, supportEmail, and publicUrl before approving the owner review.');
  }
  return config;
}
validateSite(site);

import { site } from '../../site.config.mjs';
export function GET() {
  const ready = site.publicUrl && site.ownerReviewComplete;
  return new Response(ready ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site.publicUrl).href}\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

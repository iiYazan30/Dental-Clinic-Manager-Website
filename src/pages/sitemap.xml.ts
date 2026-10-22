import { site } from '../../site.config.mjs';
import { route, type Lang, type Page } from '../content/ui';
export function GET() {
  const urls = site.publicUrl && site.ownerReviewComplete ? (['ar', 'en'] as Lang[]).flatMap(lang => (['home', 'privacy', 'terms'] as Page[]).map(page => `<url><loc>${new URL(route(lang, page), site.publicUrl).href}</loc></url>`)).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

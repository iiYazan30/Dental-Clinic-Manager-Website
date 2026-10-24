import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { site } from '../../site.config.mjs';

const routes = ['/', '/privacy', '/terms', '/en', '/en/privacy', '/en/terms'];
for (const path of routes) {
  test(`${path} direct navigation, refresh, semantics, accessibility`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await page.reload();
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('html')).toHaveAttribute('lang', path.startsWith('/en') ? 'en' : 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', path.startsWith('/en') ? 'ltr' : 'rtl');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', site.ownerReviewComplete && site.publicUrl ? 'index, follow' : 'noindex, nofollow');
    if (site.publicUrl) {
      const canonical = new URL(path, site.publicUrl).href;
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', canonical);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `${site.publicUrl}/social-card.png`);
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(3);
      const alternates = await page.locator('link[hreflang]').evaluateAll(links => links.map(link => link.getAttribute('href')));
      expect(alternates.every(href => href && new URL(href).origin === site.publicUrl)).toBe(true);
      expect(await page.content()).not.toContain('onrender.com');
    }
    if (site.supportEmail) await expect(page.locator(`a[href="mailto:${site.supportEmail}"]`)).toBeVisible();
    if (site.phone) await expect(page.locator(`a[href="tel:${site.phone.replace(/[ ()-]/g, '')}"]`)).toBeVisible();
    if (path.includes('privacy') || path.includes('terms')) {
      await expect(page.locator('.draft-notice')).toHaveCount(site.ownerReviewComplete ? 0 : 1);
      await expect(page.locator('time')).toHaveAttribute('datetime', site.policyDate);
      if (site.ownerReviewComplete) {
        await expect(page.locator('.legal-content')).not.toContainText(/\bdraft\b|مسودة|المسودة/i);
        await expect(page.locator('time')).toHaveText(path.startsWith('/en') ? '24 October 2026' : /24.*2026/);
      }
    }
    if (path.includes('privacy')) {
      const content = page.locator('.legal-content');
      for (const disclosure of ['drive.file', 'PKCE S256', 'DPAPI', 'XChaCha20-Poly1305', 'Dental Clinic Manager Backups', '.dcb']) {
        await expect(content).toContainText(disclosure);
      }
      const english = path.startsWith('/en');
      await expect(page.locator('#section-8')).toContainText(english ? 'without moving them to Trash' : 'دون نقلها إلى سلة المهملات');
      await expect(page.locator('#section-8')).toContainText(english ? 'without revoking permissions on Google’s servers' : 'دون إلغاء الصلاحيات على خوادم Google');
      await expect(page.locator('#section-8')).toContainText(english ? 'outcome depends on the revocation response' : 'تعتمد النتيجة على استجابة الإلغاء');
      await expect(page.locator('#section-3')).toContainText(english ? 'does not cover every backup byte' : 'لا يشمل التشفير كل بايت');
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(accessibility.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) }))).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test('all internal links and fragment targets resolve', async ({ page, request }) => {
  const checked = new Set<string>();
  for (const path of routes) {
    await page.goto(path);
    const links = await page.locator('a[href]').evaluateAll(anchors => anchors.map(a => (a as HTMLAnchorElement).getAttribute('href')!).filter(href => href.startsWith('/') || href.startsWith('#')));
    for (const href of links) {
      const url = new URL(href, `http://127.0.0.1:4321${path}`);
      const target = url.pathname + url.hash;
      if (checked.has(target)) continue;
      checked.add(target);
      const response = await request.get(url.pathname);
      expect(response.ok(), target).toBe(true);
      if (url.hash) expect(await response.text(), target).toContain(`id="${url.hash.slice(1)}"`);
    }
  }
});

test('language switching preserves page and remembers explicit selection', async ({ page }) => {
  await page.goto('/privacy');
  await page.locator('[data-language="en"]').click();
  await expect(page).toHaveURL(/\/en\/privacy$/);
  expect(await page.evaluate(() => localStorage.getItem('dcm-language'))).toBe('en');
  await page.goto('/');
  await expect(page).toHaveURL(/\/en$/);
  await page.locator('[data-language="ar"]').click();
  await expect(page).toHaveURL('http://127.0.0.1:4321/');
  await page.goto('/terms');
  await page.locator('[data-language="en"]').click();
  await expect(page).toHaveURL(/\/en\/terms$/);
});

test('FAQs work with the keyboard and respect reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const summary = page.locator('.faq-list summary').first();
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute('open', '');
  await expect(page.locator('.faq-list details').first().locator('p')).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});

test('mobile menu opens, navigates, and closes with Escape', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile');
  await page.goto('/');
  const toggle = page.locator('.menu-toggle');
  await toggle.click();
  await expect(page.locator('#mobile-nav')).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-nav')).toBeHidden();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.locator('#mobile-nav a').nth(1).click();
  await expect(page).toHaveURL(/#features$/);
  await expect(page.locator('#mobile-nav')).toBeHidden();
});

test('no external requests and fonts are self-hosted', async ({ page }) => {
  const external: string[] = [];
  page.on('request', request => { if (!request.url().startsWith('http://127.0.0.1:4321/')) external.push(request.url()); });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  expect(external).toEqual([]);
  await expect(page.locator('form, iframe')).toHaveCount(0);
});

test('static content works without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/en/privacy');
  await expect(page.locator('h1')).toHaveText('Privacy Policy');
  await expect(page.locator('code')).toContainText('https://www.googleapis.com/auth/drive.file');
  await page.locator('[data-language="ar"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  await context.close();
});

test('blocked browser storage does not break language navigation', async ({ page }) => {
  await page.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } }); });
  await page.goto('/terms');
  await page.locator('[data-language="en"]').click();
  await expect(page).toHaveURL(/\/en\/terms$/);
});

test('crawl endpoints do not publish placeholder domains', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  const sitemap = await request.get('/sitemap.xml');
  expect(robots.ok()).toBe(true);
  expect(sitemap.ok()).toBe(true);
  if (!site.ownerReviewComplete || !site.publicUrl) {
    expect(await robots.text()).toContain('Disallow: /');
    expect(await sitemap.text()).not.toContain('<loc>');
  } else {
    expect(await robots.text()).toBe(`User-agent: *\nAllow: /\nSitemap: ${site.publicUrl}/sitemap.xml\n`);
    const text = await sitemap.text();
    const locations = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    expect(locations).toEqual(routes.map(path => new URL(path, site.publicUrl).href));
  }
});

test('custom 404 offers Arabic and English recovery links', async ({ page }) => {
  await page.goto('/404');
  await expect(page.locator('h1')).toContainText('الصفحة غير موجودة');
  await expect(page.getByRole('link', { name: 'Back to the English homepage' })).toHaveAttribute('href', '/en');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
});

test('small phone and tablet layouts keep content inside the viewport', async ({ page }) => {
  for (const width of [320, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['/', '/en', '/privacy', '/en/privacy']) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path} at ${width}px`).toBe(true);
    }
  }
});

test('capture reviewed desktop and mobile pages', async ({ page }, testInfo) => {
  for (const path of ['/', '/en', '/privacy']) {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: testInfo.outputPath(`${path === '/' ? 'ar-home' : path.slice(1)}.png`), fullPage: true });
  }
});

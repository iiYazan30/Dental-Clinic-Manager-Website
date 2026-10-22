import { defineConfig } from 'astro/config';
import { site } from './site.config.mjs';
export default defineConfig({
  site: site.publicUrl || undefined,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ipv6zm.org',
  integrations: [sitemap()],
});

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chinatransit.info',
  integrations: [react(), tailwind(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        ja: 'ja',
        ko: 'ko',
        fr: 'fr',
      },
    },
  })],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

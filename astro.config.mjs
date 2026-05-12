import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

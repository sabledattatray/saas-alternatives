// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://saas-alternatives-del.pages.dev',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
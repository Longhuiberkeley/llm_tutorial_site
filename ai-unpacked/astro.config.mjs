// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://longhuiberkeley.github.io',
  base: '/llm_tutorial_site',
  vite: {
    plugins: [tailwindcss()]
  }
});
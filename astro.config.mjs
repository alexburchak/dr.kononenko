import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// SITE_URL — адреса сайту (домен). BASE_PATH — підшлях, потрібен лише поки сайт відкривається
// за адресою https://<користувач>.github.io/<репозиторій>/ без власного домену.
export default defineConfig({
  site: process.env.SITE_URL || 'https://drkononenko.com.ua',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [yaml()],
  },
});

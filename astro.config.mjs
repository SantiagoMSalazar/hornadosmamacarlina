// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
      }
    }
  }
});

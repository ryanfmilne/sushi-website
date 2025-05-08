import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from 'tailwindcss';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), // Add React support for any React components
  ],
  // Enable SSR for dynamic routes if needed
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
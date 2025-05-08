/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          serif: ['Playfair Display', 'Georgia', 'serif'],
        },
        colors: {
          // Custom color scheme can be defined here
        },
      },
    },
    plugins: [
      // Use the @tailwindcss/forms plugin with the latest import syntax
      await import('@tailwindcss/forms').then(forms => forms.default),
    ],
  };
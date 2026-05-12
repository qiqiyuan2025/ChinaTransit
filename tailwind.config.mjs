/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#F5F0E8',   // xuan paper white - primary bg
          100: '#EDE8DF',  // cream - secondary bg
          200: '#E0DBD2',  // light gray-cream - tertiary bg
          300: '#D4CFC7',  // border
        },
        cinnabar: {
          DEFAULT: '#C03C2D', // primary accent / NOT ELIGIBLE
          dark: '#9A3024',
        },
        ink: {
          DEFAULT: '#1C1917', // primary text
          light: '#6B6560',   // secondary text
        },
        mineral: {
          DEFAULT: '#2D6A6A', // links, interactive
          light: '#3D8A8A',
        },
        indigo: {
          DEFAULT: '#2C3E6B', // secondary buttons
          light: '#3B5298',
        },
        jade: {
          DEFAULT: '#3D7A5F', // success / ELIGIBLE
          light: '#4D9A75',
        },
        amber: {
          DEFAULT: '#C88A2A', // warning
          light: '#D9A040',
        },
        gold: {
          DEFAULT: '#8B7535', // premium accent (sparingly)
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', '"SF Pro"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        chinese: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
      },
      maxWidth: {
        reading: '720px',
      },
    },
  },
  plugins: [],
};

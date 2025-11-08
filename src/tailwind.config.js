const { join } = require('path');
const sharedTailwindConfig = require('../tailwind-workspace-preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],

  darkMode: ['class', '[data-mode="dark"]'],

  content: [join(__dirname, './**/*.{ts,html}')],

  theme: {
    extend: {
      container: { center: true, padding: '1rem', screens: { xl: '1200px', '2xl': '1280px' } },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      fontSize: {
        'dsp-lg-1': ['3.5rem', { lineHeight: '4.25rem', fontWeight: '400' }],
      },
    },
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};


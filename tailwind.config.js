const { UI_CORE_COLORS } = require('./src/app/core/colors.js');
const shared = require('./tailwind-workspace-preset.js');
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: UI_CORE_COLORS,
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      backgroundImage: {
        'hero-brand':
          'linear-gradient(135deg, var(--brand-start), var(--brand-end))',
        'hero-help':
          'linear-gradient(135deg, var(--help-start), var(--brand-end))',
        'hero-stroke':
          'linear-gradient(135deg, var(--stroke-start), var(--stroke-end))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

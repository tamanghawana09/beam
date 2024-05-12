import defaultTheme from 'tailwindcss/defaultTheme';
import  colors  from 'tailwindcss/colors';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: colors.black,
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

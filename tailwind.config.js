const defaultTheme = require('tailwindcss/defaultTheme')
const daisyui = require('daisyui')

module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      serif: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
      mono: ['"DM Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['winter', 'night'],
    darkTheme: 'night',
  },
}

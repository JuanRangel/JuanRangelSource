const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
      './source/**/*.html',
      './source/**/*.vue',
      './source/**/*.jsx',
      './source/**/*.php',
      './source/**/*.blade.php',
  ],
  theme: {
      extend: {
          fontFamily: {
              sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          },
      },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/ui')
  ],
}

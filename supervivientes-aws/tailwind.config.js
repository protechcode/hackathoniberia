module.exports = {
  darkMode: 'class',
/*   darkMode: 'media',
 */  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,

       padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

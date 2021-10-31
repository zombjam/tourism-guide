const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enable: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'current',
      background: '#E5E5E5',
      pink: '#FF1D6C',
      yellow: '#FFB72C',
      green: '#007350',
    },
    extend: {
      backgroundImage: {
        bannerShadow: "url('./assets/icons/box-shadow.svg')",
      },
      screens: {
        'max-sm': { max: '639px' },
        // => @media (max-width: 639px) { ... }

        'max-md': { max: '767px' },
        // => @media (max-width: 767px) { .. . }

        'max-lg': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'max-xl': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }
        pad: { min: '639px', max: '767px' },
      },
      zIndex: {
        '-1': -1,
      },
      translate: {
        '-0.6': '-60%',
      },
      scale: {
        '-100': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
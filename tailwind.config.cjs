const { boxShadow } = require('tailwindcss/defaultTheme')
const colors = require('./tailwind/colors.cjs')
const { animationsPlugin } = require('./tailwind/animations.cjs')
const { allSpacing, extendedSpacing, spacingPlugins } = require('./tailwind/spacing.cjs')
const { gradientsPlugin } = require('./tailwind/gradients.cjs')
const { anchorsPlugin } = require('./tailwind/anchors.cjs')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx}'],
  theme: {
    colors,
    extend: {
      screens: {
        '2xl': '1440px',
        print: { raw: 'print' },
        // => @media print { ... }
      },
      fontSize: {
        '2xs': '0.5rem',
        '0.5sm': '0.9375rem',
        '1.5xl': '1.375rem',
        '2.5xl': '1.75rem',
        '3.5xl': '2rem',
      },
      spacing: {
        ...extendedSpacing,
      },
      minWidth: {
        ...extendedSpacing,
      },
      maxWidth: {
        ...extendedSpacing,
        '4/5': '80%',
        content: '70rem',
      },
      minHeight: {
        ...extendedSpacing,
      },
      maxHeight: {
        ...extendedSpacing,
      },
      borderWidth: {
        '12': '0.75rem',
      },
      // Inset is used to generate classes for [top, left, bottom, right].
      // By default, tailwind does NOT generate negative values for inset.
      // allSpacing is a map of extendedSpacing, extended with negative prefixes
      // and their associated values i.e { '-4': '-1rem' }
      inset: {
        ...allSpacing,
      },
      boxShadow: {
        ...boxShadow,
        default: '0 0 2px 0 rgba(90, 90, 90, 0.14)',
        'default-focus': '0 0 2px 0 rgba(90, 90, 90, 0.14), 0 0 2px 1px rgb(0, 102, 204)',
        'default-active': '0 0 2px 0 rgba(90, 90, 90, 0.14), 0 0 0 4px rgb(0, 102, 204)',
        medium: '0 0 4px 0 rgba(107, 107, 107, 0.5)',
        'medium-focus': '0 0 4px 0 rgba(107, 107, 107, 0.5), 0 0 2px 1px rgb(0, 102, 204)',
        'medium-active': '0 0 4px 0 rgba(107, 107, 107, 0.5), 0 0 0 4px rgb(0, 102, 204)',
        dark: '0 2px 5px 0 rgba(0, 0, 0, 0.21)',
        'dark-focus': '0 2px 5px 0 rgba(0, 0, 0, 0.21), 0 0 2px 1px rgb(0, 102, 204)',
        'dark-active': '0 2px 5px 0 rgba(0, 0, 0, 0.21), 0 0 0 4px rgb(0, 102, 204)',
        'y-sm': '0 0 4px 0 rgba(196, 196, 196, 0.5)',
        'y-sm-focus': '0 0 4px 0 rgba(196, 196, 196, 0.5), 0 0 2px 1px rgb(0, 102, 204)',
        'y-sm-active': '0 0 4px 0 rgba(196, 196, 196, 0.5), 0 0 0 4px rgb(0, 102, 204)',
        'y-md': '0 0 7px 0 rgba(157, 157, 157, 0.7)',
        'y-md-focus': '0 0 7px 0 rgba(157, 157, 157, 0.7), 0 0 2px 1px rgb(0, 102, 204)',
        'y-md-active': '0 0 7px 0 rgba(157, 157, 157, 0.7), 0 0 0 4px rgb(0, 102, 204)',
        'y-lg': '0 0 14px 0 rgba(0, 0, 0, 0.14)',
        'y-lg-focus': '0 0 14px 0 rgba(0, 0, 0, 0.14), 0 0 2px 1px rgb(0, 102, 204)',
        'y-lg-active': '0 0 14px 0 rgba(0, 0, 0, 0.14), 0 0 0 4px rgb(0, 102, 204)',
        'y-lg-hover': '0 0 14px 0 rgba(0, 0, 0, 0.4)',
        'y-lg-hover-focus': '0 0 14px 0 rgba(0, 0, 0, 0.4), 0 0 2px 1px rgb(0, 102, 204)',
        'y-lg-hover-active': '0 0 14px 0 rgba(0, 0, 0, 0.4), 0 0 0 4px rgb(0, 102, 204)',
        'pricing-tile-hover': '0 0 14px 0 rgba(94, 84, 84, 0.53)',
        'pricing-tile-hover-focus': '0 0 14px 0 rgba(94, 84, 84, 0.53), 0 0 2px 1px rgb(0, 102, 204)',
        'pricing-tile-hover-active': '0 0 14px 0 rgba(94, 84, 84, 0.53), 0 0 0 4px rgb(0, 102, 204)',
        heavy: '0 0 8px 0 rgba(0, 7, 41, 0.67)',
        'heavy-focus': '0 0 8px 0 rgba(0, 7, 41, 0.67), 0 0 2px 1px rgb(0, 102, 204)',
        'heavy-active': '0 0 8px 0 rgba(0, 7, 41, 0.67), 0 0 0 4px rgb(0, 102, 204)',
        'drug-button-hover': '0 0 8px 0 rgba(0, 7, 41, 0.67)',
        'drug-button-hover-focus': '0 0 8px 0 rgba(0, 7, 41, 0.67), 0 0 2px 1px rgb(0, 102, 204)',
        'drug-button-hover-active': '0 0 8px 0 rgba(0, 7, 41, 0.67), 0 0 0 4px rgb(0, 102, 204)',
        'content-well': 'inset 0 20px 15px -15px rgba(0,0,0,0.20), inset 0 -80px 40px -40px rgba(0,0,0,.05);',
        'content-well-sm': 'inset 0 0 7px 0 rgba(157, 157, 157, 0.7)',
        focus: '0 0 0 2px rgb(0, 102, 204)',
        active: '0 0 0 4px rgb(0, 102, 204)',
        'tight-hover': '0 0 8px 0 rgba(0, 7, 41, 0.4)',
        hover: '0 0 14px 0 rgba(0, 7, 41, 0.4)',
        'inset-focus': 'inset 0 0 0 2px rgb(0, 102, 204)',
        'inset-active': 'inset 0 0 0 4px rgb(0, 102, 204)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionProperty: {
        height: 'height, min-height, max-height',
      },
      zIndex: {
        '-1': '-1',
      },
      lineHeight: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
      },
    },
  },
  plugins: [spacingPlugins, animationsPlugin, gradientsPlugin, anchorsPlugin],
};

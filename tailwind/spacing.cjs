const { spacing } = require('tailwindcss/defaultTheme');

const extendedSpacing = {
  ...spacing,
  '0.5': '0.125rem',
  '1.25': '0.3125rem',
  '2.5': '0.625rem',
  '3.5': '0.875rem',
  '4.5': '1.125rem',
  '5.5': '1.375rem',
  '7': '1.75rem',
  '9': '2.25rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '17': '4.25rem',
  '18': '4.5rem',
  '22': '5.5rem',
  '25': '6.25rem',
  '28': '7rem',
  '30': '7.5rem',
  '36': '9rem',
  '46': '11.5rem',
  '53': '13.25rem',
  '65': '16.25rem',
  '72': '18rem',
  '75': '18.75rem',
  '80': '20rem',
  '85': '21.25rem',
  '88': '22rem',
  '90': '22.5rem',
  '94': '23.5rem',
  '100': '25rem',
  '106': '26.5rem',
  '112': '28rem',
  '116': '29rem',
  '120': '30rem',
  '136': '34rem',
  '150': '37.5rem',
  '168': '42rem',
  '184': '46rem',
  '256': '64rem',
  '1/2': '50%',
  '4/5': '80%',
};

const negativeSpacing = Object.entries(extendedSpacing).reduce((acc, [key, value]) => {
  if (key !== '0') acc[`-${key}`] = `-${value}`;
  return acc;
}, {});

const allSpacing = {
  ...extendedSpacing,
  ...negativeSpacing,
};

/**
 * This is tailwind plugin to take tailwind default and extended spacing to add
 * extra minWidth, minHeight, maxWidth, maxHeight, top, right, left, right and some other classes
 * for having {'100': '25rem'} in spacing, now I have following generate from plugins
 * .w-screen-100 {
 *   width: calc(100vw + 25rem);
 * }
 * .-w-screen-100 {
 *   width: calc(100vw + -25rem);
 * }
 * .h-screen-100 {
 *   height: calc(100vh + 25rem);
 * }
 * .-h-screen-100 {
 *   height: calc(100vh + -25rem);
 * }
 * .top-full-100 {
 *   top: calc(100% + 25rem);
 * }
 * .-top-full-100 {
 *   top: calc(100% + -25rem);
 * }
 * .right-full-100 {
 *   right: calc(100% + 25rem);
 * }
 * .-right-full-100 {
 *   right: calc(100% + -25rem);
 * }
 * .bottom-full-100 {
 *   bottom: calc(100% + 25rem);
 * }
 * .-w-screen-100 {
 *   width: calc(100vw - 25rem);
 * }
 * .left-full-100 {
 *   left: calc(100% + 25rem);
 * }
 * .-left-full-100 {
 *   left: calc(100% + -25rem);
 * }
 */

const isNegative = value => value[0] === '-';

const escapeKey = key => key.replace('/', '\\/');

const spacingPlugins = ({ addUtilities, variants }) => {
  const screenArithmeticSpacing = (key, value, { prefix, property }) => {
    const negative = isNegative(key);
    return {
      [`.${negative ? '-' : ''}${prefix}-screen${negative ? '' : '-'}${key}`]: {
        [property]: `calc(100v${prefix} + ${value})`,
      },
    };
  };
  const fullArithmeticSpacing = (key, value, { prefix, property }) => {
    const negative = isNegative(key);
    return {
      [`.${negative ? '-' : ''}${prefix}-full${negative ? '' : '-'}${key}`]: { [property]: `calc(100% + ${value})` },
    };
  };

  const convertors = {
    screenWidthSpacing: (key, value) => screenArithmeticSpacing(key, value, { prefix: 'w', property: 'width' }),
    screenHeightSpacing: (key, value) => screenArithmeticSpacing(key, value, { prefix: 'h', property: 'height' }),
    fullTop: (key, value) => fullArithmeticSpacing(key, value, { prefix: 'top', property: 'top' }),
    fullRight: (key, value) => fullArithmeticSpacing(key, value, { prefix: 'right', property: 'right' }),
    fullBottom: (key, value) => fullArithmeticSpacing(key, value, { prefix: 'bottom', property: 'bottom' }),
    fullLeft: (key, value) => fullArithmeticSpacing(key, value, { prefix: 'left', property: 'left' }),
  };

  const newUtilities = Object.entries(allSpacing).reduce((acc, [key, value]) => {
    key = escapeKey(key);
    Object.values(convertors).forEach(convertor => Object.assign(acc, convertor(key, value)));
    return acc;
  }, {});

  addUtilities(newUtilities, variants());
};

module.exports = {
  extendedSpacing,
  allSpacing,
  spacingPlugins,
};

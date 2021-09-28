const delays = {
  '0': '0ms',
  '75': '75ms',
  '100': '100ms',
  '150': '150ms',
  '200': '200ms',
  '250': '250ms',
  '300': '300ms',
  '500': '500ms',
  '750': '750ms',
  '1000': '1000ms',
};

const animationsPlugin = ({ addUtilities }) => {
  const animationUtilities = Object.keys(delays).reduce((acc, key) => {
    acc[`.animation-delay-${key}`] = { 'animation-delay': delays[key] };
    return acc;
  }, {});

  addUtilities(animationUtilities);
};

module.exports = {
  animationsPlugin,
};

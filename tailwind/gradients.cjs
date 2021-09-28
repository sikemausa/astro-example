const gradients = {
  'blue-light': 'radial-gradient(circle at 77% 7%, #3dd3e8, #32b4d4 55%)',
  'pink-light': 'radial-gradient(circle at 77% 7%, #f8dfea, #f4c6db 55%)',
  'blue-dark': 'linear-gradient(to bottom, #183277 31%, #000e42 110%)',
  'gray-dark': 'linear-gradient(24deg, #2f333a 25%, #40454e 75%)',
  'purple-light': 'radial-gradient(circle at 77% 7%, #782375, #6b1368 55%)',
  gold: 'radial-gradient(circle at 77% 7%, #ffc71f, #cf9718 54%)',
};

const gradientsPlugin = ({ addUtilities, variants }) => {
  const newUtilities = Object.keys(gradients).reduce((acc, key) => {
    acc[`.bg-gradient-${key}`] = {
      'background-image': gradients[key],
    };
    return acc;
  }, {});

  addUtilities(newUtilities, variants());
};

module.exports = {
  gradientsPlugin,
};

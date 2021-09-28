const anchorsPlugin = ({ addUtilities, variants }) => {
  const anchorUtilities = ['auto', 'none'].reduce(
    (obj, value) => ({
      ...obj,
      [`.anchor-${value}`]: {
        'overflow-anchor': value,
      },
    }),
    {}
  );
  addUtilities(anchorUtilities, variants());
};

module.exports = { anchorsPlugin };

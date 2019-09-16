import pathToRegexp from 'path-to-regexp';

let methods;

export default paths => {
  if (methods) {
    return methods;
  }

  methods = Object.entries(paths).reduce((acc, [key, value]) => {
    const reversePath = pathToRegexp.compile(value);
    return {
      ...acc,
      [key]: (params, match = {}) =>
        params ? reversePath({ ...match.params, ...params }) : value,
    };
  }, {});

  return methods;
};

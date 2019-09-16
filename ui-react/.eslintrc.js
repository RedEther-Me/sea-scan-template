module.exports = {
  extends: [
    'airbnb',
    'react-app',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'prettier/react'
  ],
  plugins: ['react'],
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.jsx']
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    quotes: 0,
    'no-console': 1,
    'no-debugger': 1,
    'no-var': 1,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'import/extensions': 1,
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  globals: {
    Atomics: false,
    SharedArrayBuffer: false
  }
};

module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    jsx: true,
  },
  plugins: ['flowtype'],
  env: { node: true, browser: true },
  rules: {
    'flowtype/generic-spacing': 'off',
    'import/order': [
      'error',
      { 'newlines-between': 'always-and-inside-groups' },
    ],
    'import/default': 'off',
    'import/named': 'off',
    'no-undef': 'error',
    'arrow-parens': 'off',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    semi: 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'function-paren-newline': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/prefer-stateless-function': 'off',
    'react/require-default-props': 'off',
  },
}

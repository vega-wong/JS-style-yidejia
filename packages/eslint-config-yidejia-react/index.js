module.exports = {
  extends: [
    'eslint-config-yidejia',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};

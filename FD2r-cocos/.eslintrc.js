module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }]
  }
};

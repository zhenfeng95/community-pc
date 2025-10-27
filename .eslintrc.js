module.exports = {
  root: true,
  env: {
    node: true,
  },
  //   extends: ['plugin:vue/essential', '@vue/standard'],
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 0,
    'no-debugger': 0,
    'no-useless-escape': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-unused-vars': 'off',
    quotes: ['error', 'double'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}

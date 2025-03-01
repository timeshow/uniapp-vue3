module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2], // 缩进大小为 2 个空格
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'always'], // 使用分号
    'comma-dangle': ['error', 'always-multiline'], // 多行对象和数组末尾添加逗号
    'arrow-parens': ['error', 'always'], // 箭头函数参数始终添加括号
    'vue/multi-word-component-names': 'off', // 允许单单词组件名
  },
};

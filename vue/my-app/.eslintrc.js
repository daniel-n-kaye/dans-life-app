module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
<<<<<<< Updated upstream
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
=======
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['warn', 'always'],
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'spaced-comment': "off",
    'padded-blocks': 'off',
    'no-trailing-spaces': 'warn',
    

>>>>>>> Stashed changes
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}

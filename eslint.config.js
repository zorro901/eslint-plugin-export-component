const eslintPluginRecommended = require('eslint-plugin-eslint-plugin/configs/recommended')
const js = require('@eslint/js')

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended,
  eslintPluginRecommended,
  {
    ignores: ['eslint.config.js'],
  },
]

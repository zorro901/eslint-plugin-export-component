import eslintPluginRecommended from 'eslint-plugin-eslint-plugin/configs/recommended'
import js from '@eslint/js'

/** @type {import('eslint').Linter.FlatConfig[]} */
const configs = [js.configs.recommended, eslintPluginRecommended]

export default configs

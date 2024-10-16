import inLineDefaultExportFunction from '@/lib/rules/inline-default-export-function'
import { parse, parseForESLint } from '@typescript-eslint/parser'
import { ESLint } from 'eslint'

const plugin: ESLint.Plugin = {
  configs: {},
  rules: {
    'inline-default-export-function': inLineDefaultExportFunction,
  },
}

export const configs = {
  recommended: {
    name: 'eslint-plugin-export-component/recommended',
    plugins: {
      'eslint-plugin-export-component': plugin,
    },
    rules: {
      'eslint-plugin-export-component/inline-default-export-function': 'error',
    },
    languageOptions: {
      parser: { parse, parseForESLint },
      globals: {
        console: 'readonly',
      },
    },
  },
  /**
   * @deprecated use recommended (flat) config instead
   */
  'recommended-legacy': {
    plugins: ['eslint-plugin-export-component'],
    rules: {
      'eslint-plugin-export-component/inline-default-export-function': 'error',
    },
  },
}
Object.assign(plugin.configs!, configs)

export default plugin

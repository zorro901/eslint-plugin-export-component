import inLineDefaultExportFunction from '@/lib/rules/inline-default-export-function'
import { parse, parseForESLint } from '@typescript-eslint/parser'
import type { ESLint, Linter } from 'eslint'

const plugin: ESLint.Plugin = {
  configs: {},
  rules: {
    'inline-default-export-function': inLineDefaultExportFunction,
  },
}

export const configs: { recommended: Linter.Config } = {
  recommended: {
    name: 'eslint-plugin-export-component/recommended',
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
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
}
Object.assign(plugin.configs!, configs)

export default plugin

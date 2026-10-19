import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import nodePlugin from 'eslint-plugin-n'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/lib/rules/*.{js,ts}'],
    ...nodePlugin.configs['flat/recommended-script'],
  },
  {
    files: ['src/lib/rules/*.{js,ts}'],
    ...eslintPlugin.configs['rules-recommended'],
  },
  {
    files: ['src/tests/lib/rules/*.{js,ts}'],
    ...eslintPlugin.configs['tests-recommended'],
  },
  {
    ignores: ['eslint.config.mjs'],
  },
  {
    files: ['**/*.ts', '**/*.cts', '**/*.mts'],
  },
)

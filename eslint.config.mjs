import eslintPluginRecommended from 'eslint-plugin-eslint-plugin/configs/recommended'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import nodePlugin from 'eslint-plugin-n'

export default tseslint.config(
  eslint.configs.recommended,
  eslintPluginRecommended,
  ...tseslint.configs.recommended,
  {
    files: ['lib/rules/*.{js,ts}'],
    ...nodePlugin.configs['flat/recommended-script'],
  },
  {
    files: ['lib/rules/*.{js,ts}'],
    ...eslintPlugin.configs['flat/rules-recommended'],
  },
  {
    files: ['tests/lib/rules/*.{js,ts}'],
    ...eslintPlugin.configs['flat/tests-recommended'],
  },
  {
    ignores: ['eslint.config.mjs'],
  },
  {
    files: ['**/*.ts', '**/*.cts', '**.*.mts'],
  },
)

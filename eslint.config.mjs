import eslintPluginRecommended from 'eslint-plugin-eslint-plugin/configs/recommended'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  eslintPluginRecommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['eslint.config.mjs'],
  },
  {
    files: ['**/*.ts', '**/*.cts', '**.*.mts'],
  },
)

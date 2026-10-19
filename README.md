# eslint-plugin-export-component

ESLint plugin that moves `export default` onto the function declaration line.

```ts
// before
function Example() {}
export default Example

// after (auto-fixable)
export default function Example() {}
```

Only functions whose name starts with an uppercase letter (components) are reported.

## Install

```sh
npm i -D eslint eslint-plugin-export-component
```

Requires ESLint 9+ (flat config).

## Usage

```js
// eslint.config.js
import { configs } from 'eslint-plugin-export-component'

export default [configs.recommended]
```

## Rules

| Rule                             | Fixable |
| -------------------------------- | ------- |
| `inline-default-export-function` | ✅      |

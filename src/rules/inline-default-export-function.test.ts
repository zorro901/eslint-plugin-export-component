import { RuleTester } from 'eslint'

import rule from './inline-default-export-function'

const ruleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true,
    },
  },
})

const errors = [
  { message: 'Export should be done in the function declaration line.' },
]

ruleTester.run('inline-default-export-function', rule, {
  valid: [
    {
      code: `export default function defaultExportFunction() {}`,
    },
    {
      code: `
function otherFunction() {}
export default function defaultExportFunction() {}
          `,
    },
  ],
  invalid: [
    {
      code: `
function defaultExportFunction() {}
export default defaultExportFunction;
`,
      output: `
export default function defaultExportFunction() {}

`,
      errors,
    },
    {
      code: `
export default defaultExportFunction
function defaultExportFunction() {}
`,
      output: `

export default function defaultExportFunction() {}
`,
      errors,
    },
    {
      code: `
export default defaultExportFunction
function defaultExportFunction() {}
function otherFunction() {}
    `,
      output: `

export default function defaultExportFunction() {}
function otherFunction() {}
    `,
      errors,
    },
    {
      code: `
function defaultExportFunction() {}
function otherFunction() {}
function otherFunction1() {}
export default defaultExportFunction
function otherFunction2() {}
    `,
      output: `
export default function defaultExportFunction() {}
function otherFunction() {}
function otherFunction1() {}

function otherFunction2() {}
    `,
      errors,
    },
    {
      code: `
function Example() {
  return <h1>Example</h1>
}
export default Example
    `,
      output: `
export default function Example() {
  return <h1>Example</h1>
}

    `,
      errors,
    },
    {
      code: `
function Example() {
  return <h1>Example</h1>;
}

function Example2() {
  return <h1>Example</h1>;
}
export default Example;

`,
      output: `
export default function Example() {
  return <h1>Example</h1>;
}

function Example2() {
  return <h1>Example</h1>;
}


`,
      errors,
    },
    {
      code: `
function Example() {
  return <h1>Example</h1>;
}

export default Example;
`,
      output: `
export default function Example() {
  return <h1>Example</h1>;
}


`,
      errors,
    },
  ],
})

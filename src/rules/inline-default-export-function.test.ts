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
      code: `export default function DefaultExportFunction() {}`,
    },
    {
      code: `
function otherFunction() {}
export default function DefaultExportFunction() {}
          `,
    },
  ],
  invalid: [
    {
      code: `
function DefaultExportFunction() {}
export default DefaultExportFunction;
`,
      output: `
export default function DefaultExportFunction() {}

`,
      errors,
    },
    {
      code: `
export default DefaultExportFunction
function DefaultExportFunction() {}
`,
      output: `

export default function DefaultExportFunction() {}
`,
      errors,
    },
    {
      code: `
export default DefaultExportFunction
function DefaultExportFunction() {}
function otherFunction() {}
    `,
      output: `

export default function DefaultExportFunction() {}
function otherFunction() {}
    `,
      errors,
    },
    {
      code: `
function DefaultExportFunction() {}
function otherFunction() {}
function otherFunction1() {}
export default DefaultExportFunction
function otherFunction2() {}
    `,
      output: `
export default function DefaultExportFunction() {}
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

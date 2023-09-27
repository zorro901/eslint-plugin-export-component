import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    fixable: 'code',
  },
  create: (context) => ({
    ExportDefaultDeclaration: (node) => {
      if (
        node.declaration.type !== 'Identifier' ||
        /^(?!.*\.d\.tsx?$).*\.[tj]sx?$/.test(context.filename)
      ) {
        return
      }
      const program = context.sourceCode.ast
      const ExportDefaultFunctionName = node.declaration.name
      const targetNode = program.body.find(
        (n) =>
          n.type === 'FunctionDeclaration' &&
          n.id?.name === ExportDefaultFunctionName,
      )
      const [targetNodeStart, targetNodeEnd] = targetNode?.range ?? [
        undefined,
        undefined,
      ]
      if (!targetNodeStart || !targetNodeEnd) return

      context.report({
        node,
        message: 'Export should be done in the function declaration line.',
        fix: (fixer) => [
          fixer.insertTextBeforeRange(
            [targetNodeStart, targetNodeEnd],
            'export default ',
          ),
          fixer.remove(node),
        ],
      })
    },
  }),
}

export default rule

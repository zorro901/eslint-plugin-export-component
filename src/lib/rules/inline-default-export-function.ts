import type { Rule } from 'eslint'

const rule: Rule.RuleModule = {
  meta: {
    fixable: 'code',
    type: 'problem',
    messages: {
      onlyExportFunction:
        'Export should be done in the function declaration line.',
    },
    schema: [],
  },
  create: (context) => ({
    ExportDefaultDeclaration: (node) => {
      if (node.declaration.type !== 'Identifier') return
      const ExportDefaultFunctionName = node.declaration.name
      if (!/^[A-Z]/.test(ExportDefaultFunctionName)) return

      const program = context.sourceCode.ast
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
        messageId: 'onlyExportFunction',
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

export default function ({ types: t }) {
  return {
    name: 'import-sideeffect',
    visitor: {
      ImportDeclaration(path, { opts }) {
        const { node } = path;

        if (node.source.value === opts.libraryName) {
          node.specifiers.forEach((spec) => {
            if (t.isImportSpecifier(spec)) {
              const { name } = spec.imported;
              const importFile = opts.sideEffect[name];
              if (importFile) {
                path.insertAfter(t.ImportDeclaration([], t.stringLiteral(importFile)));
              }
            }
          });
        }
      },
    },
  };
}

/** @type {import('prettier').Config} */
module.exports = {
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@local/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["prettier-plugin-tailwindcss"],
}
//   plugins: [
//     require('prettier-plugin-organize-imports'),
//     require('prettier-plugin-tailwindcss'),
//   ],
// };

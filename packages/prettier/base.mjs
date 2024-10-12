/** @type {import('prettier').Config} */
export default {
  endOfLine: "lf",
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "none",
  importOrder: [
    "^@/types",
    "^@/styles",
    "^@/actions",
    "^@/components",
    "^@/lib",
    "^@/public",
    "(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: false,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

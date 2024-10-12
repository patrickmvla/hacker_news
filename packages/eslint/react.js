/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "eslint-plugin-import-helpers",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "newline-before-return": "error",
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "@typescript-eslint/no-explicit-any": "error",
  },
};

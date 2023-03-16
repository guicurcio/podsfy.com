module.exports = {
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "unicorn",
  ],
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  root: true,
  ignorePatterns: ["**/.eslintrc.js", "**/prettier.config.js"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "no-promise-executor-return": "off",
    curly: "off",
    "no-void": "off",
    "promise/always-return": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/order": "off",
    "import/extensions": ["error", "never", { json: "always" }],
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-no-bind": [
      "error",
      { allowArrowFunctions: true, allowFunctions: true },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    curly: ["error", "all"],
    "no-restricted-exports": "off",
    "no-undef": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { ignoreTypeReferences: true },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": "off",
    "no-lone-blocks": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "no-restricted-imports": [
      "warn",
      {
        patterns: [
          {
            group: ["..*"],
            message:
              "Please use absolute imports instead. (e.g: @/ui/, @/hooks/, etc.)",
          },
          {
            group: ["@/components/ui", "@/components/ui/*"],
            message:
              "Please use shorthand imports instead. (i.e. @/ui/Button instead of @/ui/components/Button.)",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module": "off",
      },
    },
  ],
};

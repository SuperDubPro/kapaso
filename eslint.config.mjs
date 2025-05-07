import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:import/recommended",
    ],

    plugins: ["prettier", "import"],

    rules: {
      "semi": ["error", "never"],

      "quotes": ["error", "double"],

      "indent": ["error", 2, {
        "MemberExpression": 1,
      }],

      "comma-dangle": ["error", "always-multiline"],

      "comma-spacing": ["error", { "before": false, "after": true }],

      "no-trailing-spaces": "error",

      "eol-last": ["error", "always"],

      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],

      "object-curly-spacing": ["error", "always"],

      "import/order": [
        "error",
        {
          "groups": [
            "builtin", "external", "internal", "parent", "sibling", "index",
          ],
          "newlines-between": "always",
        },
      ],

      "max-len": ["warn", { "code": 100 }],

      "no-console": "error",

      "linebreak-style": ["error", "unix"],

      "@typescript-eslint/consistent-type-imports": ["error", {
        "fixStyle": "inline-type-imports",
      }],
    },
  }),
]

export default eslintConfig

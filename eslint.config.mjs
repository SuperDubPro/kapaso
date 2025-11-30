import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import prettierPlugin from "eslint-plugin-prettier"
import importPlugin from "eslint-plugin-import"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },

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
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])

export default eslintConfig

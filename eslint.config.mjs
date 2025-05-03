import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier", "plugin:import/recommended"],

    plugins: ["prettier", "import"],

    rules: {
      "quotes": ["error", "double"],

      "no-trailing-spaces": "error",

      "eol-last": ["error", "always"],

      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],

      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ],
    },
  }),
];

export default eslintConfig;

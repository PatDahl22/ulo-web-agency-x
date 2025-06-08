import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "warn",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: ["react-hooks"],
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "react/prop-types": "off",
        },
      },
    ],
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "quotes": ["error", "single"],
    },
  },
  { ignores: ['dist'] },
  
];




export default eslintConfig;

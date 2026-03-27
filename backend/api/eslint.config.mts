import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Config base para JS
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
  },

  // Config para TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommended, // regras padrão TS
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // importante para regras mais avançadas
      },
      globals: globals.node,
    },
  },
]);
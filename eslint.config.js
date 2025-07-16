 import globals from "globals";
 import pluginJs from "@eslint/js";
 import pluginSecurity from "eslint-plugin-security";
 import pluginSecurityNode from "eslint-plugin-security-node";

 /** @type {import('eslint').Linter.Config[]} */
 export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      security: pluginSecurity,
      "security-node": pluginSecurityNode,

    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginSecurity.configs.recommended.rules,
      ...pluginSecurityNode.configs.recommended.rules,
      "security/detect-eval-with-expression": "error",
    }
  }
 ];
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    // 페이지 컴포넌트는 multi-word 규칙에서 제외합니다.
    files: ["src/pages/*.vue", "src/App.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
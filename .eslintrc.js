module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true
  },
  extends: ["eslint:recommended", "@vue/prettier", "@vue/typescript/recommended", "plugin:vue/vue3-recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "error",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    "vue/attribute-hyphenation": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
    "vue/no-setup-props-destructure": "off"
  },
  overrides: [
    {
      files: ["tests/unit/**/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    },
    {
      files: ["tests/e2e/integration/**.spec.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"]
    }
  ]
};

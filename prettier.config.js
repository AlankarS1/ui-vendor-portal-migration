// .prettierrc.js
module.exports = {
  printWidth: 120,
  trailingComma: "none",
  singleQuote: false,
  overrides: [
    {
      files: "*.html",
      options: {
        parser: "html"
      }
    }
  ]
};

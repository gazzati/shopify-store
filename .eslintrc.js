module.exports = {
    extends: ["@gazzati/eslint-config-node"],
    ignorePatterns: ["webpack.config.js"],
    rules: {
      // Specific project rules
      'no-console': 'warn'
    },
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2019,
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.eslint.json"]
    }
  }
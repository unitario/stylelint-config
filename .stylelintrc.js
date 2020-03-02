export default {
  "plugins": [
    // Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues
    "stylelint-prettier"
  ],
  "extends": [
    // Standard Stylelint Config (build on common stylistic conventions)
    "standard",
    // Prettier Stylelint Config (turns off all previos rules that are unnecessary or might conflict with Prettier)
    "stylelint-prettier/recommended"
  ],
  "rules": {
    // Overwrites Prettier defaults
    "prettier/prettier": [
      "error",
      {
        // Default is 80
        "printWidth": 160,
        // Default is 4
        "tabWidth": 2,
        // Default is false
        "semi": true
      }
    ]
  }
}
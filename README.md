# Unitario Stylelint Configuration

The package provides base [Stylelint](https://stylelint.io) configurations for Unitario. It follows a set of recommended style guidelines for writing better stylesheets.

This package use [Stylelint to run Prettier](https://prettier.io/docs/en/integrating-with-linters.html#use-stylelint-to-run-prettier).

## What it does

- Lints CSS and Sass based on latest standards
- Follows a [mostly reasonable approach](https://github.com/airbnb/css#readme) by Airbnb
- Fixes common stylesheet errors and style issues

## Installation

### 1. Install dependencies

#### Development

```
npm install @unitario/stylelint-config --save-dev
```

#### Peer

In case peer dependencies has not already been installed, make sure to install these too:

```
npm install stylelint prettier --save-dev
```

### 2. Create config file

Create an `.stylelintrc` file at the root of your project with this content:

```json
{
  "extends": "@unitario"
}
```

## Rules

### Extends

This configuration package follows a specific list of configuration rules. Each configuration overwrites the previous configuration in the case of conflicting rules.

1. [Standard Stylelint Config](https://github.com/stylelint/stylelint-config-standard) – Base ruleset that follows common stylistic conventions
2. [Prettier Stylelint Config](https://github.com/prettier/stylelint-config-prettier) – Turns off all rules that are unnecessary or might conflict with Prettier

### Enforced Rules

This configuration package makes a couple of opinionated style rules which overwrites any rules provided in the extends array.

- **Print Width.** Line wrap at 160 characters (default is `80`).
- **Tab Width.** Tab with is 2 spaces (default is `4`).
- **Semicolons.** Never print semicolons in end of statements (default is `always`).

### Overriding Rules

If you'd like to override any rules, you can add the rules to your `.stylelintrc` file.

```json
{
  "extends": "@unitario",
  "rules": {
    "indentation": "tab"
  }
}
```

## Code Editor Integrations

### Visual Studio Code

1. Install the [Stylelint Extension](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
2. Reload Visual Studio Code
3. Modify your `settings.json` file

```json
// Disable built in validators to avoid duplicate errors showing
"css.validate": false,
"less.validate": false,
"scss.validate": false,
```

## Pre-Commit Hook

You may want Stylelint to automatically fix your errors on commit, you can use [lint-staged](https://github.com/okonet/lint-staged) with [husky](https://github.com/typicode/husky), which manages git hooks.

1. Install dependencies
   - `npm install lint-staged husky --save-dev`
2. Update `package.json`:

```json
{
  "lint-staged": {
    "*.{css,scss}": ["styleint --fix", "git add"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

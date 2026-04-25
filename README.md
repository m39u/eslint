# @m39u/eslint

A strict ESLint config for TypeScript.

## Installation

1. If you already have `eslint` or `typescript` in your `package.json`,
   remove them.\
   This package includes both of these as dependencies.
2. Run `bun add -d @m39u/eslint`.

## Usage

Edit the `eslint.config.js` file:

```js
import config from "@m39u/eslint";

export default config;
```

### Overriding Rules

You can override [eslint](https://eslint.org/docs/latest/rules/) and
[typescript-eslint](https://typescript-eslint.io/rules/) rules like this:

```js
export default [
  ...config,
  {
    rules: {
      "no-undef": 0,
    },
  },
];
```

## License

@m39u/eslint is released under the terms of the
[MIT License](https://github.com/m39u/eslint/blob/main/LICENSE).

[![npm](https://img.shields.io/npm/v/stylelint-config-semantic.svg?style=flat-square)](https://www.npmjs.com/package/stylelint-config-semantic)
[![npm](https://img.shields.io/npm/dm/stylelint-config-semantic.svg?style=flat-square)](https://www.npmjs.com/package/stylelint-config-semantic)
[![Travis](https://img.shields.io/travis/rodoabad/stylelint-config-semantic.svg?style=flat-square)](https://travis-ci.org/rodoabad/stylelint-config-semantic)

# Semantic rules for your CSS

Code should always be written in such a way that makes it look like a single person wrote it, no matter how many people have contributed and that is the purpose of this set of rules powered by [stylelint](https://github.com/stylelint/stylelint).

## Installation

You need to have `stylelint` and this config as part of your `devDependencies`.

`npm i stylelint stylelint-config-semantic -D`

## Usage

Add `stylelint-config-semantic` to your `extends` property in `.stylelintrc`.

```json
{
  "extends": [
    "stylelint-config-semantic"
  ]
}
```

To override the rules set by `stylelint-config-semantic` you need to define your own rules and set them as you see fit.

```json
{
  "extends": [
    "stylelint-config-semantic"
  ],
  "rules": {
    "indentation": 2
  }
}
```

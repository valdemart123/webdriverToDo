module.exports = {
  "env": {
    "browser": true,
    node: true,
    jest: true,
    "es2021": true,
    "webextensions": true,
    "jquery": true
  },
  "plugins": [
    "mocha"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:mocha/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "mocha/no-skipped-tests": "error",
    "mocha/no-exclusive-tests": "error"
  },
  "settings": {
    "mocha/additionalCustomNames": [
      {"name": "describeModule", "type": "suite", "interfaces": ["BDD"]},
      {"name": "testModule", "type": "testCase", "interfaces": ["TDD"]}
    ]
  }
}

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    "@antfu/eslint-config-ts"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '**/prisma/**/*.ts', '**/prisma/custom/**/*.ts'],
  rules: {
    'no-console': 'off',
    'semi': ["error", "never"],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-irregular-whitespace": "off",
    "no-trailing-spaces": "error",
    "antfu/if-newline": "off",
    "unused-imports/no-unused-imports-ts": "error",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/ban-ts-comment": [
      2,
      {
        "ts-expect-error": false,
        "ts-ignore": false,
        "ts-nocheck": false,
        "ts-check": false,
        "minimumDescriptionLength": 0
      }
    ],
    "@typescript-eslint/space-before-function-paren":  [
      "error",
      {
        "anonymous": "never",
        "named": "always"
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "always"
      }
    ],
    "operator-linebreak": [
      "warn",
      "before"
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "curly": "off",
    "no-use-before-define": "off"
  },
  overrides: [
    {
      files: ['*.{ts}'],
      rules: {
        'semi': ["error", "never"],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-tabs': 0
      },
      'extends': [
        'eslint:recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    },
    {
      files: ['*.ts'],
      env: {
        jest: true
      }
    }
  ]
}
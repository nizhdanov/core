/** @type {import('eslint').Linter.Config} */
export default [
  {
    extends: ['plugin:prettier/recommended'],
    plugins: ['simple-import-sort', 'prettier'],
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // External packages:
            ['^react', '^@?\\w'],
            // Internal packages:
            ['^@(siberiacancode-core/.*|$)'],
            // Alias imports:
            ['^@(([\\/.]?\\w)|assets|test-utils)'],
            // Side effect imports:
            ['^\\u0000'],
            // Parent imports:
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports:
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports:
            ['^.+\\.s?css$']
          ]
        }
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function'],
          unnamedComponents: 'arrow-function'
        }
      ]
    }
  }
];

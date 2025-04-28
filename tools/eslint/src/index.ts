import antfu from '@antfu/eslint-config';

type Options = Parameters<typeof antfu>[0];
type UserConfigs = Array<Parameters<typeof antfu>[1]>;

export const eslint = (options: Options, ...configs: UserConfigs) => {
  if (options?.stylistic ?? true) {
    configs.unshift(
      {
        name: 'rewrite/style',
        rules: {
          'style/arrow-parens': ['error', 'always'],
          'style/brace-style': 'off',
          'style/comma-dangle': ['error', 'never'],
          'style/indent': ['error', 2, { SwitchCase: 1 }],
          'style/jsx-curly-newline': 'off',
          'style/jsx-one-expression-per-line': 'off',
          'style/jsx-quotes': ['error', 'prefer-single'],
          'style/linebreak-style': ['error', 'unix'],
          'style/max-len': [
            'error',
            100,
            2,
            { ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }
          ],
          'style/member-delimiter-style': 'off',
          'style/multiline-ternary': 'off',
          'style/no-tabs': 'error',
          'style/operator-linebreak': 'off',
          'style/quote-props': 'off',
          'style/quotes': ['error', 'single', { allowTemplateLiterals: true }],
          'style/semi': ['error', 'always']
        }
      }
    );
  }

  if (options?.typescript ?? true) {
    configs.unshift({
      files: ['**/*.ts', '**/*.tsx'],
      name: 'rewrite/typescript',
      rules: {
        'ts/explicit-function-return-type': 'off'
      }
    });
  }

  if (options?.react ?? false) {
    configs.unshift({
      files: ['**/*.jsx', '**/*.tsx'],
      name: 'rewrite/react-hooks',
      rules: {
        'react-hooks/exhaustive-deps': 'off'
      }
    });
  }

  if (options?.test ?? true) {
    configs.unshift({
      name: 'rewrite/test',
      rules: {
        'test/prefer-lowercase-title': 'off'
      }
    });
  }

  return antfu(
    {
      ...options
    },
    {
      name: 'rewrite',
      rules: {
        'no-console': 'warn'
      }
    },
    {
      name: 'rewrite/antfu',
      rules: {
        'antfu/curly': 'off',
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off'
      }
    },
    {
      name: 'rewrite/perfectionist',
      rules: {
        'perfectionist/sort-array-includes': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              ['builtin', 'external'],
              'internal-type',
              ['internal'],
              ['parent-type', 'sibling-type', 'index-type'],
              ['parent', 'sibling', 'index'],
              'object',
              'style',
              'side-effect-style',
              'unknown'
            ],
            internalPattern: ['^~/.*', '^@/.*'],
            newlinesBetween: 'always',
            order: 'asc',
            type: 'natural'
          }
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            groups: ['unknown', 'method', 'multiline'],
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: {
              callback: 'on*',
              reserved: ['key', 'ref']
            },
            groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-union-types': [
          'error',
          {
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish'
            ],
            order: 'asc',
            specialCharacters: 'keep',
            type: 'alphabetical'
          }
        ]
      }
    },
    ...configs
  );
};

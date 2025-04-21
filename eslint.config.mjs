/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * Root eslint configuration object.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...(await import('./eslint.base.config.mjs')).default,
  {
    ignores: [
      '**/.yarn/',
      '**/CHANGELOG.md',
      '**/LICENSE.md',
      '**/RELEASE_NOTES.md',
      '**/coverage/',
      '**/dist/',
      'lib/*.d.mts'
    ]
  }
]

# remark-preset

[![github release](https://img.shields.io/github/v/release/flex-development/remark-preset.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/remark-preset/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/remark-preset.svg)](https://npmjs.com/package/@flex-development/remark-preset)
[![license](https://img.shields.io/github/license/flex-development/remark-preset.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

flex development (fldv) markdown style.

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`remarkPresetFlex`](#remarkpresetflex)
- [Contribute](#contribute)

## What is this?

This is a preset for [remark][] to check markdown.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add -D @flex-development/remark-preset
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import remarkPresetFlex from 'https://esm.sh/@flex-development/remark-preset'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkPresetFlex from 'https://esm.sh/@flex-development/remark-preset'
</script>
```

## Use

```js
import remarkPresetFlex from '@flex-development/remark-preset'
import { remark } from 'remark'
import { reporter } from 'vfile-reporter'

/**
 * @import {VFile} from 'vfile'
 */

/**
 * The processed file.
 *
 * @type {VFile}
 * @const file
 */
const file = await remark()
  .use(remarkPresetFlex)
  .process('This *and* _that_.')

console.error(reporter(file))
```

Yields:

```sh
1:12-1:18 warning Unexpected emphasis marker `_`, expected `*`                                         emphasis-marker remark-lint
1:19      warning Unexpected missing final newline character, expected line feed (`\n`) at end of file final-newline   remark-lint

⚠ 2 warnings
```

## API

The default export is [`remarkPresetFlex`](#remarkpresetflex).

No identifiers or [TypeScript][] types are exported.

### `remarkPresetFlex`

([`Preset`][preset]) A [unified][] preset to encapsulate fldv markdown style.

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[preset]: https://github.com/unifiedjs/unified#preset

[remark]: https://github.com/remarkjs/remark

[typescript]: https://www.typescriptlang.org

[unified]: https://github.com/unifiedjs/unified

[yarn]: https://yarnpkg.com

/**
 * @file Example
 * @module example
 */

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

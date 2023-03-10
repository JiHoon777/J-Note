import { CustomElement } from './elements/editor-element.interface'

export const SPACE_KEY_STRING = ' '
export const ENTER_KEY_STRING = 'Enter'
export const BACK_SPACE_KEY_STRING = 'Backspace'

export type FIRST_TEXT_TYPE_TO_CONVERT_BLOCK =
  | 'p'
  | '#'
  | '##'
  | '###'
  | '*'
  | '-'
export const FIRST_TEXTS_TO_CONVERT_BLOCK: FIRST_TEXT_TYPE_TO_CONVERT_BLOCK[] =
  ['p', '#', '##', '###', '*', '-']

export const DEFAULT_BLOCK_MAP_FIRST_TEXT_TYPE_TO_CONVERT_BLOCK: Record<
  FIRST_TEXT_TYPE_TO_CONVERT_BLOCK,
  Partial<CustomElement>
> = {
  p: {
    type: 'paragraph',
  },
  '#': {
    type: 'heading',
    level: 1,
  },
  '##': {
    type: 'heading',
    level: 2,
  },
  '###': {
    type: 'heading',
    level: 3,
  },
  '*': {
    type: 'bullet',
  },
  '-': {
    type: 'bullet',
  },
}

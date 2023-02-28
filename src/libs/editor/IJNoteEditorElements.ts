import { CustomText } from './IJNoteEditorTexts'

export type JNoteEditorElementType = 'paragraph' | 'heading'

export interface IJNoteEditorElementBase {
  type: JNoteEditorElementType
}

export interface IParagraphElement extends IJNoteEditorElementBase {
  type: 'paragraph'
  children: CustomText[]
}

export interface IHeadingElement extends IJNoteEditorElementBase {
  type: 'heading'
  level: number
  children: CustomText[]
}

export type CustomElement = IParagraphElement | IHeadingElement

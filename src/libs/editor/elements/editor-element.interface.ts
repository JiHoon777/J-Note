import { CustomText } from '../text/editor-text.interface'

export type JNoteEditorElementType = 'paragraph' | 'heading' | 'bullet'

export interface IJNoteEditorElementBase {
  type: JNoteEditorElementType
  children: CustomText[]
  deps?: number
}

export interface IParagraphElement extends IJNoteEditorElementBase {
  type: 'paragraph'
}

export interface IHeadingElement extends IJNoteEditorElementBase {
  type: 'heading'
  level: number
}

export interface IBulletElement extends IJNoteEditorElementBase {
  type: 'bullet'
}

export type CustomElement = IParagraphElement | IHeadingElement | IBulletElement

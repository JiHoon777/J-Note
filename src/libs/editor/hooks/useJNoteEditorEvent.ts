import { CustomEditor } from '../IJNoteEditor'
import React from 'react'
import {
  FIRST_TEXTS_TO_CONVERT_BLOCK,
  FIRST_TEXT_TYPE_TO_CONVERT_BLOCK,
  SPACE_KEY,
} from '../JNoteEditor.const'
import { useGetJNoteEditorUtils } from './useGetJNoteEditorUtils'
import { Utils } from '../../../utils/Utils'
import { JNoteEditorElementType } from '../IJNoteEditorElements'

export function useJNoteEditorEvent(editor: CustomEditor) {
  const { getCurrentBlock, setBlockByFirstText } =
    useGetJNoteEditorUtils(editor)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentBlock = getCurrentBlock()

    // block 의 타입이 paragraph, heading 일때, 첫 텍스트가 특정 텍스트라면 특정 블록으로 변환시킨다.
    if (
      !!currentBlock?.firstText &&
      Utils.isCorrectType<JNoteEditorElementType>(currentBlock?.block.type, [
        'paragraph',
        'heading',
      ]) &&
      Utils.isCorrectType<FIRST_TEXT_TYPE_TO_CONVERT_BLOCK>(
        currentBlock.firstText,
        FIRST_TEXTS_TO_CONVERT_BLOCK
      ) &&
      e.key === SPACE_KEY
    ) {
      e.preventDefault()
      setBlockByFirstText(currentBlock.firstText)
    }
  }

  return {
    onKeyDown,
  }
}

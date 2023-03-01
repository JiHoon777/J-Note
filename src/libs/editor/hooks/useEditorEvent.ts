import { CustomEditor } from '../editor.interface'
import React from 'react'
import {
  FIRST_TEXTS_TO_CONVERT_BLOCK,
  FIRST_TEXT_TYPE_TO_CONVERT_BLOCK,
  SPACE_KEY,
} from '../editor.const'
import { useGetEditorUtils } from './useGetEditorUtils'
import { Utils } from '../../../utils/Utils'
import { JNoteEditorElementType } from '../elements/editor-element.interface'

export function useEditorEvent(editor: CustomEditor) {
  const { getCurrentBlock, setBlockByFirstText } = useGetEditorUtils(editor)

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

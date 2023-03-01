import { CustomEditor } from '../editor.interface'
import React from 'react'
import {
  BACK_SPACE_KEY_STRING,
  ENTER_KEY_STRING,
  FIRST_TEXTS_TO_CONVERT_BLOCK,
  SPACE_KEY_STRING,
} from '../editor.const'
import { useGetEditorUtils } from './useGetEditorUtils'
import { Utils } from '../../../utils/Utils'

export function useEditorEvent(editor: CustomEditor) {
  const { getCurrentBlock, setBlockByFirstText, setBlockToParagraph } =
    useGetEditorUtils(editor)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentBlock = getCurrentBlock()

    // block 의 타입이 paragraph 이 아닐때, Enter, Backspace 을 누르면 paragraph 로 변환시킨다.
    if (
      !currentBlock?.firstText &&
      currentBlock?.block.type !== 'paragraph' &&
      Utils.isCorrectType(e.key, [BACK_SPACE_KEY_STRING, ENTER_KEY_STRING])
    ) {
      e.preventDefault()
      setBlockToParagraph()

      return
    }

    // block 의 타입이 paragraph, heading 일때, 첫 텍스트가 특정 텍스트라면 특정 블록으로 변환시킨다.
    if (
      !!currentBlock?.firstText &&
      Utils.isCorrectType(currentBlock?.block.type, ['paragraph', 'heading']) &&
      Utils.isCorrectType(
        currentBlock.firstText,
        FIRST_TEXTS_TO_CONVERT_BLOCK
      ) &&
      e.key === SPACE_KEY_STRING
    ) {
      e.preventDefault()
      setBlockByFirstText(currentBlock.firstText)

      return
    }
  }

  return {
    onKeyDown,
  }
}

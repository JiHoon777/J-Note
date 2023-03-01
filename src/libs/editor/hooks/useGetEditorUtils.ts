import React from 'react'

import { CustomEditor } from '../editor.interface'
import { Utils } from '../../../utils/Utils'
import { CustomElement } from '../elements/editor-element.interface'
import {
  DEFAULT_BLOCK_MAP_FIRST_TEXT_TYPE_TO_CONVERT_BLOCK,
  FIRST_TEXT_TYPE_TO_CONVERT_BLOCK,
} from '../editor.const'
import { Editor, Transforms } from 'slate'

export function useGetEditorUtils(editor: CustomEditor) {
  const getCurrentBlock = React.useCallback(() => {
    const { selection } = editor

    if (!selection) {
      Utils.showError('unknown selection')
      return
    }

    const { anchor, focus } = selection
    const { path } = anchor
    const block = editor.children[path[0]] as CustomElement
    const firstText = block.children[0].text
    return { block, anchor, focus, firstText }
  }, [editor])

  // 첫 텍스트를 통해 블록을 변경하고, 첫 텍스트를 제거한다.
  const setBlockByFirstText = React.useCallback(
    (firstText: FIRST_TEXT_TYPE_TO_CONVERT_BLOCK) => {
      Transforms.setNodes(
        editor,
        DEFAULT_BLOCK_MAP_FIRST_TEXT_TYPE_TO_CONVERT_BLOCK[firstText]
      )
      Editor.deleteBackward(editor, { unit: 'line' })
    },
    [editor]
  )

  // 블록을 Paragraph 블록으로 변환시킨다.
  const setBlockToParagraph = React.useCallback(() => {
    Transforms.setNodes(
      editor,
      DEFAULT_BLOCK_MAP_FIRST_TEXT_TYPE_TO_CONVERT_BLOCK['p']
    )
  }, [editor])

  return { getCurrentBlock, setBlockByFirstText, setBlockToParagraph }
}

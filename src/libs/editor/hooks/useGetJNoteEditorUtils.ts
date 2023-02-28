import React from 'react'

import { CustomEditor } from '../IJNoteEditor'
import { Utils } from '../../../utils/Utils'
import { CustomElement } from '../IJNoteEditorElements'

export function useGetJNoteEditorUtils(editor: CustomEditor) {
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

  return { getCurrentBlock }
}

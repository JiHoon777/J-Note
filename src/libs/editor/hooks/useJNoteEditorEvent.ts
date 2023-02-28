import { CustomEditor } from '../IJNoteEditor'
import React from 'react'
import { SPACE_KEY } from '../JNoteEditor.const'
import { Transforms } from 'slate'
import { useGetJNoteEditorUtils } from './useGetJNoteEditorUtils'

export function useJNoteEditorEvent(editor: CustomEditor) {
  const { getCurrentBlock } = useGetJNoteEditorUtils(editor)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentBlock = getCurrentBlock()

    if (currentBlock?.firstText === '#') {
      if (e.key === SPACE_KEY) {
        e.preventDefault()

        Transforms.setNodes(editor, { type: 'heading' })
      }
    }
  }

  return {
    onKeyDown,
  }
}

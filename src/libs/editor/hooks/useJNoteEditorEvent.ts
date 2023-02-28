import { CustomEditor } from '../IJNoteEditor'
import React from 'react'
import { SPACE_KEY } from '../JNoteEditor.const'
import { Editor, Transforms } from 'slate'
import { useGetJNoteEditorUtils } from './useGetJNoteEditorUtils'

export function useJNoteEditorEvent(editor: CustomEditor) {
  const { getCurrentBlock } = useGetJNoteEditorUtils(editor)

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentBlock = getCurrentBlock()

    console.log(currentBlock)
    // Todo: 반복되는 코드 리팩토링!
    // block 의 타입이 paragraph, heading 일때, 첫 텍스트가 특정 텍스트라면 특정 블록으로 변환시킨다.
    if (['paragraph', 'heading'].includes(currentBlock?.block.type ?? '')) {
      if (currentBlock?.firstText === 'p') {
        if (e.key === SPACE_KEY) {
          e.preventDefault()

          Transforms.setNodes(editor, {
            type: 'paragraph',
          })
          Editor.deleteBackward(editor, { unit: 'line' })
        }
      }

      if (currentBlock?.firstText === '#') {
        if (e.key === SPACE_KEY) {
          e.preventDefault()

          Transforms.setNodes(editor, {
            type: 'heading',
            level: 1,
          })
          Editor.deleteBackward(editor, { unit: 'line' })
        }
      }

      if (currentBlock?.firstText === '##') {
        if (e.key === SPACE_KEY) {
          e.preventDefault()

          Transforms.setNodes(editor, { type: 'heading', level: 2 })
          Editor.deleteBackward(editor, { unit: 'line' })
        }
      }

      if (currentBlock?.firstText === '###') {
        if (e.key === SPACE_KEY) {
          e.preventDefault()

          Transforms.setNodes(editor, { type: 'heading', level: 3 })
          Editor.deleteBackward(editor, { unit: 'line' })
        }
      }
    }
  }

  return {
    onKeyDown,
  }
}

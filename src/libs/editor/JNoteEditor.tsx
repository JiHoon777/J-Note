import React from 'react'
import { Editable, RenderElementProps, Slate, withReact } from 'slate-react'
import { createEditor, Descendant, Editor, Transforms } from 'slate'
import { JEParagraphElement } from './elements/JEParagraphElement'
import { SPACE_KEY } from './JNoteEditor.const'
import { useGetJNoteEditorUtils } from './hooks/useGetJNoteEditorUtils'

type Props = {}

// Add the initial value.
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

// ex)
// 1. https://stackoverflow.com/questions/74337796/how-to-focus-to-a-block-when-cursor-at-start-of-line-with-slate-js
export const JNoteEditor = (props: Props) => {
  const [editor] = React.useState(() => withReact(createEditor()))

  const { getCurrentBlock } = useGetJNoteEditorUtils(editor)

  const renderElement = React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading': {
        return <h3 {...props.attributes}>{props.children}</h3>
      }
      default: {
        return <JEParagraphElement {...props} />
      }
    }
  }, [])

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentBlock = getCurrentBlock()

    if (currentBlock?.firstText === '#') {
      if (e.key === SPACE_KEY) {
        e.preventDefault()

        Transforms.setNodes(editor, { type: 'heading' })
      }
    }
  }

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable renderElement={renderElement} onKeyDown={onKeyDown} />
    </Slate>
  )
}

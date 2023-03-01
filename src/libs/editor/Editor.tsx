import React from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Descendant } from 'slate'
import { useEditorEvent } from './hooks/useEditorEvent'
import { useEditorRenderElement } from './hooks/useEditorRenderElement'

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
export const Editor = (props: Props) => {
  const [editor] = React.useState(() => withReact(createEditor()))

  const { onKeyDown } = useEditorEvent(editor)
  const renderElement = useEditorRenderElement()

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable renderElement={renderElement} onKeyDown={onKeyDown} />
    </Slate>
  )
}

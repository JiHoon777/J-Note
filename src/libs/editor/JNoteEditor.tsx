import React from 'react'
import { Editable, Slate, withReact } from 'slate-react'
import { createEditor, Descendant } from 'slate'

type Props = {}

// Add the initial value.
const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]
export const JNoteEditor = (props: Props) => {
  const [editor] = React.useState(() => withReact(createEditor()))

  return (
    <Slate editor={editor} value={initialValue} onChange={v => console.log(v)}>
      <Editable />
    </Slate>
  )
}

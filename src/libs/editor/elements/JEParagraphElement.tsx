import React from 'react'
import { RenderElementProps } from 'slate-react'

type Props = {} & RenderElementProps

export const JEParagraphElement = (props: Props) => {
  const { attributes, children } = props
  return <p {...attributes}>{children}</p>
}

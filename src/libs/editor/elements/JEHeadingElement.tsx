import React from 'react'
import { RenderElementProps } from 'slate-react'

type Props = {} & RenderElementProps

export const JEHeadingElement = (props: Props) => {
  const { element, children, attributes } = props

  console.log(9, props)

  return <h3 {...attributes}>{children}</h3>
}

import React from 'react'
import { RenderElementProps } from 'slate-react'
import { IHeadingElement } from './editor-element.interface'

type Props = RenderElementProps & {
  element: IHeadingElement
}

export const HeadingElement = (props: Props) => {
  const { element, children, attributes } = props

  if (element.level === 1) {
    return <h1 {...attributes}>{children}</h1>
  }

  if (element.level === 2) {
    return <h2 {...attributes}>{children}</h2>
  }

  return <h3 {...attributes}>{children}</h3>
}

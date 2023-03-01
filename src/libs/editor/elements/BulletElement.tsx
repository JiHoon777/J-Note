import React from 'react'
import { RenderElementProps } from 'slate-react'
import { IBulletElement } from './editor-element.interface'

type Props = RenderElementProps & {
  element: IBulletElement
}

export const BulletElement = (props: Props) => {
  const { element, children, attributes } = props

  return (
    <div
      {...attributes}
      className={
        'flex before:content-["•"] before:pr-2 before:text-2xl before:leading-[0.875em]'
      }
    >
      {children}
    </div>
  )
}

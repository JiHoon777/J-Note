import React from 'react'
import { RenderElementProps } from 'slate-react'
import { IHeadingElement } from './editor-element.interface'
import classNames from 'classnames'

type Props = RenderElementProps & {
  element: IHeadingElement
}

export const HeadingElement = (props: Props) => {
  const { element, children, attributes } = props

  const level = element.level

  return (
    <div
      {...attributes}
      className={classNames('font-semibold', {
        'text-[1.875em]': level === 1,
        'text-[1.5em]': level === 2,
        'text-[1.25em]': level === 3,
      })}
    >
      {children}
    </div>
  )
}

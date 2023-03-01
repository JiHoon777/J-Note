import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ParagraphElement } from '../elements/ParagraphElement'
import { HeadingElement } from '../elements/HeadingElement'
import {
  IBulletElement,
  IHeadingElement,
} from '../elements/editor-element.interface'
import { BulletElement } from '../elements/BulletElement'

export function useEditorRenderElement() {
  return React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'bullet': {
        return (
          <BulletElement {...props} element={props.element as IBulletElement} />
        )
      }
      case 'heading': {
        return (
          <HeadingElement
            {...props}
            element={props.element as IHeadingElement}
          />
        )
      }
      default: {
        return <ParagraphElement {...props} />
      }
    }
  }, [])
}

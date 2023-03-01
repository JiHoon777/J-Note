import React from 'react'
import { RenderElementProps } from 'slate-react'
import { ParagraphElement } from '../elements/ParagraphElement'
import { HeadingElement } from '../elements/HeadingElement'
import { IHeadingElement } from '../elements/editor-element.interface'

export function useEditorRenderElement() {
  return React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
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

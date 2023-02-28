import React from 'react'
import { RenderElementProps } from 'slate-react'
import { JEParagraphElement } from '../elements/JEParagraphElement'
import { JEHeadingElement } from '../elements/JEHeadingElement'
import { IHeadingElement } from '../IJNoteEditorElements'

export function useJNoteEditorRenderElement() {
  return React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading': {
        return (
          <JEHeadingElement
            {...props}
            element={props.element as IHeadingElement}
          />
        )
      }
      default: {
        return <JEParagraphElement {...props} />
      }
    }
  }, [])
}

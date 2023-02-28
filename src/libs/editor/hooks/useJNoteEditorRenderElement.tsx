import React from 'react'
import { RenderElementProps } from 'slate-react'
import { JEParagraphElement } from '../elements/JEParagraphElement'

export function useJNoteEditorRenderElement() {
  const renderElement = React.useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'heading': {
        return <h3 {...props.attributes}>{props.children}</h3>
      }
      default: {
        return <JEParagraphElement {...props} />
      }
    }
  }, [])

  return renderElement
}

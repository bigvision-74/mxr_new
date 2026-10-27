/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string
      alt?: string
      'auto-rotate'?: boolean | string
      'auto-rotate-delay'?: string
      'rotation-per-second'?: string
      'camera-controls'?: boolean | string
      'camera-orbit'?: string
      'camera-target'?: string
      'field-of-view'?: string
      'min-field-of-view'?: string
      'max-field-of-view'?: string
      'shadow-intensity'?: string
      exposure?: string
      ar?: boolean | string
      style?: React.CSSProperties
    }
  }
}

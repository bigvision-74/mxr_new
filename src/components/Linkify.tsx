import { Fragment } from 'react'

const EMAIL = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g

// Renders text with any email address turned into a mailto link.
export function Linkify({ text }: { text: string }) {
  return <>{text.split(EMAIL).map((part, i) =>
    i % 2 ? <a key={i} className="mail-link" href={`mailto:${part}`}>{part}</a> : <Fragment key={i}>{part}</Fragment>
  )}</>
}

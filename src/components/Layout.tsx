import type { ReactNode } from 'react'
import { SiteNav } from './SiteNav'
import { Footer } from './Footer'
import { StyleSwitcher } from './StyleSwitcher'

type Props = {
  children: ReactNode
  bodyClass?: string
  noHeader?: boolean
}

export function Layout({ children, bodyClass, noHeader }: Props) {
  return (
    <div className={['mxr-react-page', bodyClass].filter(Boolean).join(' ')} style={{ position: 'relative' }}>
      {!noHeader && <SiteNav />}
      {children}
      <Footer />
      <StyleSwitcher />
    </div>
  )
}

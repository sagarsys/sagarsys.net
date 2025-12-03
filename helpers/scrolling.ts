import { removeHash } from './url'

export const handleScrollToTop = (event?: React.MouseEvent): void => {
  const anchor = (event?.currentTarget?.ownerDocument || document).querySelector(
    '#back-to-top-anchor'
  )

  if (anchor) {
    removeHash()
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}



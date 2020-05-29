import { removeHash } from './url'

export const handleScrollToTop = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor'
    )

    if (anchor) {
        removeHash()
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}

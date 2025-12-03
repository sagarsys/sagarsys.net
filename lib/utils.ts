import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// String utilities
export function truncateMultiLineString(
    inputStr: string,
    numLines: number,
    charsPerLine: number
): string {
    const maxStrLength = numLines * charsPerLine
    return inputStr.length > maxStrLength
        ? `${inputStr.substring(0, maxStrLength - 3)}...`
        : inputStr
}

export function arrayToString(
    arr: string[],
    separator: string = ', '
): string[] {
    const length = arr.length
    return arr.map((item, i) =>
        i !== length - 1 ? `${item}${separator}` : `${item}`
    )
}

// Scroll utilities
export const handleScrollToTop = (event?: React.MouseEvent): void => {
    if (typeof window === 'undefined') return

    try {
        const anchor = document.querySelector('#back-to-top-anchor')

        if (anchor) {
            removeHash()
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    } catch (e) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

export function removeHash(): void {
    if (typeof window === 'undefined') return

    const { location, history } = window

    try {
        if ('pushState' in history) {
            history.pushState(
                null,
                document.title,
                location.pathname + location.search
            )
        } else {
            // Fallback
            const scrollV = document.body.scrollTop
            const scrollH = document.body.scrollLeft
            location.hash = ''
            document.body.scrollTop = scrollV
            document.body.scrollLeft = scrollH
        }
    } catch (e) {
        console.warn('Could not remove hash from URL:', e)
    }
}

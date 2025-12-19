/**
 * Keyboard navigation utilities
 *
 * Constants and helpers for keyboard accessibility
 */

// Keyboard codes
export const Keys = {
    ENTER: 'Enter',
    SPACE: ' ',
    ESCAPE: 'Escape',
    TAB: 'Tab',
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    HOME: 'Home',
    END: 'End',
} as const

/**
 * Check if an element is focusable
 */
export function isFocusable(element: HTMLElement): boolean {
    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
    ]

    return focusableSelectors.some((selector) => element.matches(selector))
}

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    return Array.from(container.querySelectorAll(focusableSelectors))
}

/**
 * Trap focus within a container
 */
export function trapFocus(container: HTMLElement, event: KeyboardEvent) {
    const focusableElements = getFocusableElements(container)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.key === Keys.TAB) {
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault()
            lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault()
            firstElement?.focus()
        }
    }
}

/**
 * Handle Enter or Space key activation (for custom buttons/links)
 */
export function handleActivation(
    event: React.KeyboardEvent,
    callback: () => void
) {
    if (event.key === Keys.ENTER || event.key === Keys.SPACE) {
        event.preventDefault()
        callback()
    }
}

/**
 * Handle Escape key
 */
export function handleEscape(event: React.KeyboardEvent, callback: () => void) {
    if (event.key === Keys.ESCAPE) {
        event.preventDefault()
        callback()
    }
}

/**
 * Navigate through items with arrow keys
 */
export function handleArrowNavigation(
    event: React.KeyboardEvent,
    currentIndex: number,
    itemsLength: number,
    onIndexChange: (index: number) => void,
    orientation: 'horizontal' | 'vertical' = 'vertical'
) {
    const isVertical = orientation === 'vertical'
    const nextKey = isVertical ? Keys.ARROW_DOWN : Keys.ARROW_RIGHT
    const prevKey = isVertical ? Keys.ARROW_UP : Keys.ARROW_LEFT

    if (event.key === nextKey) {
        event.preventDefault()
        const nextIndex = (currentIndex + 1) % itemsLength
        onIndexChange(nextIndex)
    } else if (event.key === prevKey) {
        event.preventDefault()
        const prevIndex = (currentIndex - 1 + itemsLength) % itemsLength
        onIndexChange(prevIndex)
    } else if (event.key === Keys.HOME) {
        event.preventDefault()
        onIndexChange(0)
    } else if (event.key === Keys.END) {
        event.preventDefault()
        onIndexChange(itemsLength - 1)
    }
}

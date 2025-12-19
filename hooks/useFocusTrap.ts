/**
 * useFocusTrap hook
 *
 * Traps focus within a container (for modals, dialogs, drawers)
 */

import { useEffect, useRef } from 'react'
import { trapFocus, getFocusableElements } from '@/lib/keyboard-navigation'

interface UseFocusTrapOptions {
    /**
     * Whether the focus trap is active
     */
    isActive: boolean
    /**
     * Whether to auto-focus the first element
     * @default true
     */
    autoFocus?: boolean
    /**
     * Element to return focus to when trap is deactivated
     */
    returnFocusRef?: React.RefObject<HTMLElement>
}

/**
 * Hook to trap focus within a container
 * Returns a ref to attach to the container element
 */
export function useFocusTrap(options: UseFocusTrapOptions) {
    const { isActive, autoFocus = true, returnFocusRef } = options
    const containerRef = useRef<HTMLDivElement>(null)
    const previouslyFocusedRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!isActive || !containerRef.current) return

        // Store previously focused element
        if (document.activeElement instanceof HTMLElement) {
            previouslyFocusedRef.current = document.activeElement
        }

        // Auto-focus first focusable element
        if (autoFocus) {
            const focusableElements = getFocusableElements(containerRef.current)
            focusableElements[0]?.focus()
        }

        // Handle keyboard events
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!containerRef.current) return
            trapFocus(containerRef.current, event)
        }

        document.addEventListener('keydown', handleKeyDown)

        // Cleanup: return focus to previous element
        return () => {
            document.removeEventListener('keydown', handleKeyDown)

            // Return focus
            const elementToFocus =
                returnFocusRef?.current || previouslyFocusedRef.current
            elementToFocus?.focus()
        }
    }, [isActive, autoFocus, returnFocusRef])

    return containerRef
}

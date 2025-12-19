/**
 * useKeyboardNavigation hook
 *
 * Manages keyboard navigation for lists, menus, and interactive elements
 */

import { useState, useEffect, useRef } from 'react'
import { Keys, handleArrowNavigation } from '@/lib/keyboard-navigation'

interface UseKeyboardNavigationOptions {
    /**
     * Number of items to navigate through
     */
    itemCount: number
    /**
     * Navigation orientation
     * @default 'vertical'
     */
    orientation?: 'horizontal' | 'vertical'
    /**
     * Callback when selection changes
     */
    onSelect?: (index: number) => void
    /**
     * Whether keyboard navigation is enabled
     * @default true
     */
    enabled?: boolean
}

/**
 * Hook for managing keyboard navigation
 * Returns current index and keyboard event handler
 */
export function useKeyboardNavigation(options: UseKeyboardNavigationOptions) {
    const {
        itemCount,
        orientation = 'vertical',
        onSelect,
        enabled = true,
    } = options

    const [focusedIndex, setFocusedIndex] = useState(-1)

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (!enabled || itemCount === 0) return

        handleArrowNavigation(
            event,
            focusedIndex,
            itemCount,
            (newIndex) => {
                setFocusedIndex(newIndex)
            },
            orientation
        )

        // Handle Enter key activation
        if (event.key === Keys.ENTER && focusedIndex >= 0) {
            event.preventDefault()
            onSelect?.(focusedIndex)
        }
    }

    return {
        focusedIndex,
        setFocusedIndex,
        handleKeyDown,
    }
}

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Enable View Transitions API for smooth page transitions
 * Requires browser support (Chrome 111+, Edge 111+)
 */
export default function ViewTransitions() {
    const pathname = usePathname()

    useEffect(() => {
        // Feature detection
        if (!document.startViewTransition) {
            return
        }

        // Add CSS for view transitions
        const style = document.createElement('style')
        style.textContent = `
            @view-transition {
                navigation: auto;
            }
            
            ::view-transition-old(root),
            ::view-transition-new(root) {
                animation-duration: 0.3s;
            }
        `
        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [])

    return null
}

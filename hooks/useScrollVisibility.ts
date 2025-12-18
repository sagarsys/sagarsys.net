/**
 * useScrollVisibility hook
 *
 * Tracks scroll direction and hides/shows elements based on scroll behavior
 */

import { useState, useEffect } from 'react'
import { useScroll } from 'framer-motion'

interface UseScrollVisibilityOptions {
    /**
     * Threshold in pixels before hiding on scroll down
     * @default 100
     */
    threshold?: number
    /**
     * Minimum scroll distance to trigger visibility change
     * @default 5
     */
    minDistance?: number
}

/**
 * Hook to manage element visibility based on scroll direction
 * Returns true if element should be visible
 */
export function useScrollVisibility(options: UseScrollVisibilityOptions = {}) {
    const { threshold = 100, minDistance = 5 } = options
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { scrollY } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            const difference = latest - lastScrollY

            if (latest < threshold) {
                setIsVisible(true)
            } else if (difference > minDistance) {
                setIsVisible(false)
            } else if (difference < -minDistance) {
                setIsVisible(true)
            }

            setLastScrollY(latest)
        })

        return () => unsubscribe()
    }, [scrollY, lastScrollY, threshold, minDistance])

    return isVisible
}

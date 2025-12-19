/**
 * useMouseParallax hook
 *
 * Creates parallax effect based on mouse movement
 */

import { useMotionValue, useTransform, MotionValue } from 'framer-motion'
import { useEffect } from 'react'

interface UseMouseParallaxReturn {
    mouseX: MotionValue<number>
    mouseY: MotionValue<number>
    orb1X: MotionValue<number>
    orb1Y: MotionValue<number>
    orb2X: MotionValue<number>
    orb2Y: MotionValue<number>
}

/**
 * Hook for creating mouse-based parallax animations
 * Returns motion values for two orbs that respond to mouse movement
 */
export function useMouseParallax(): UseMouseParallaxReturn {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
    const windowHeight =
        typeof window !== 'undefined' ? window.innerHeight : 1080

    const orb1X = useTransform(mouseX, [0, windowWidth], [-20, 20])
    const orb1Y = useTransform(mouseY, [0, windowHeight], [-20, 20])
    const orb2X = useTransform(mouseX, [0, windowWidth], [20, -20])
    const orb2Y = useTransform(mouseY, [0, windowHeight], [20, -20])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    return { mouseX, mouseY, orb1X, orb1Y, orb2X, orb2Y }
}

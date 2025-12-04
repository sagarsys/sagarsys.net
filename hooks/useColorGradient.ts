'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { COLOR_GRADIENTS, COLOR_ROTATION_INTERVAL } from '@/config/colors'

export function useColorGradient() {
    const [gradientIndex, setGradientIndex] = useState(0)
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    useEffect(() => {
        // Set initial index based on time
        const now = Date.now()
        const initialIndex =
            Math.floor(now / COLOR_ROTATION_INTERVAL) % COLOR_GRADIENTS.length
        setGradientIndex(initialIndex)

        // Update gradient index every 30 seconds
        const interval = setInterval(() => {
            setGradientIndex((prev) => (prev + 1) % COLOR_GRADIENTS.length)
        }, COLOR_ROTATION_INTERVAL)

        return () => clearInterval(interval)
    }, [])

    const currentGradient = COLOR_GRADIENTS[gradientIndex]
    const colors = isDark ? currentGradient.dark : currentGradient.light

    return {
        gradient: currentGradient,
        colors,
        gradientIndex,
        cssGradient: `linear-gradient(135deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
        textGradientClasses: `from-[${colors.from}] via-[${colors.via}] to-[${colors.to}]`,
    }
}

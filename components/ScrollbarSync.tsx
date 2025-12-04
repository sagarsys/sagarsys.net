'use client'

import { useEffect } from 'react'
import { useColorGradient } from '@/hooks/useColorGradient'

export default function ScrollbarSync() {
    const { colors } = useColorGradient()

    useEffect(() => {
        // Update global CSS variables for scrollbar colors
        document.documentElement.style.setProperty(
            '--scroll-color-from',
            colors.from
        )
        document.documentElement.style.setProperty(
            '--scroll-color-to',
            colors.via
        )
    }, [colors])

    return null
}

'use client'

import { useEffect } from 'react'
import { initWebVitals } from '@/lib/web-vitals'

/**
 * WebVitalsReporter component
 *
 * Initializes Web Vitals tracking on the client side.
 * This component should be included in the root layout.
 */
export default function WebVitalsReporter() {
    useEffect(() => {
        initWebVitals()
    }, [])

    // This component doesn't render anything
    return null
}

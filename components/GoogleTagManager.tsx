'use client'

import { useEffect } from 'react'
import { setupLazyGTM } from '@/lib/gtm'

interface GoogleTagManagerProps {
    gtmId: string
    delayMs?: number
}

/**
 * GoogleTagManager component
 *
 * Lazy loads GTM script to improve initial page load performance
 * Loads after user interaction or after a configurable delay (default: 5 seconds)
 */
export default function GoogleTagManager({
    gtmId,
    delayMs = 5000,
}: GoogleTagManagerProps) {
    useEffect(() => {
        if (!gtmId) {
            console.warn('GTM: No GTM ID provided')
            return
        }

        // Setup lazy loading
        setupLazyGTM(gtmId, delayMs)
    }, [gtmId, delayMs])

    // Noscript fallback for non-JavaScript users
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
                title="Google Tag Manager"
            />
        </noscript>
    )
}

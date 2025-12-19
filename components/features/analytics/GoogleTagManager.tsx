'use client'

import { useEffect, useState } from 'react'
import { setupLazyGTM, loadGA4 } from '@/lib/gtm'
import { hasConsent } from '@/lib/consent'

interface GoogleTagManagerProps {
    gtmId: string
    gaMeasurementId?: string
    delayMs?: number
}

/**
 * GoogleTagManager component
 *
 * Lazy loads GTM and GA4 scripts to improve initial page load performance
 * Loads after user interaction or after a configurable delay (default: 5 seconds)
 * Respects GDPR cookie consent preferences
 */
export default function GoogleTagManager({
    gtmId,
    gaMeasurementId,
    delayMs = 5000,
}: GoogleTagManagerProps) {
    const [consentGiven, setConsentGiven] = useState(false)

    useEffect(() => {
        // Check initial consent
        setConsentGiven(hasConsent())

        // Listen for consent changes
        const handleConsentChange = () => {
            setConsentGiven(hasConsent())
        }

        window.addEventListener('consentChange', handleConsentChange)

        return () => {
            window.removeEventListener('consentChange', handleConsentChange)
        }
    }, [])

    useEffect(() => {
        // Only load analytics if user has given consent
        if (!consentGiven) {
            console.log('GTM: Waiting for user consent')
            return
        }

        console.log('GTM: Consent given, initializing analytics')

        // Setup GTM lazy loading if GTM ID provided
        if (gtmId) {
            setupLazyGTM(gtmId, delayMs, true)
        }

        // Load GA4 directly if measurement ID provided
        // This ensures GA4 works even if GTM doesn't have GA4 tag configured
        if (gaMeasurementId) {
            setTimeout(() => {
                loadGA4(gaMeasurementId)
            }, delayMs)
        }
    }, [gtmId, gaMeasurementId, delayMs, consentGiven])

    // Noscript fallback for non-JavaScript users (only if consent given)
    if (!consentGiven) return null

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

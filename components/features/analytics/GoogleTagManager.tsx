'use client'

import { useEffect, useState } from 'react'
import { setupLazyGTM, updateGTMConsent } from '@/lib/gtm'
import { hasConsent, getConsent } from '@/lib/consent'

interface GoogleTagManagerProps {
    gtmId: string
    delayMs?: number
}

/**
 * GoogleTagManager component
 *
 * Lazy loads GTM script to improve initial page load performance
 * Loads after user interaction or after a configurable delay (default: 5 seconds)
 * Respects GDPR cookie consent preferences
 */
export default function GoogleTagManager({
    gtmId,
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
        if (!gtmId) {
            console.warn('GTM: No GTM ID provided')
            return
        }

        // Only load GTM if user has given consent
        if (!consentGiven) {
            console.log('GTM: Waiting for user consent')
            return
        }

        console.log('GTM: Consent given, initializing')
        // Setup lazy loading
        setupLazyGTM(gtmId, delayMs)

        // Signal consent to GTM after a short delay to ensure GTM is ready
        setTimeout(() => {
            updateGTMConsent(true)
        }, delayMs + 500)
    }, [gtmId, delayMs, consentGiven])

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

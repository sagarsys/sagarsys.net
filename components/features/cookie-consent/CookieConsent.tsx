'use client'

import { useState, useEffect } from 'react'
import { shouldShowConsentBanner, setConsent } from '@/lib/consent'
import { trackEvent } from '@/lib/analytics'
import ConsentBanner from './ConsentBanner'

/**
 * CookieConsent component
 *
 * GDPR-compliant cookie consent orchestrator
 * Manages state and handles consent actions
 */
export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        // Check if we should show the banner
        setShowBanner(shouldShowConsentBanner())
    }, [])

    const handleAccept = () => {
        trackEvent({
            action: 'cookie_consent',
            category: 'privacy',
            label: 'accepted',
        })
        setConsent({ analytics: true })
        setShowBanner(false)

        // Reload page to initialize analytics
        if (typeof window !== 'undefined') {
            window.location.reload()
        }
    }

    const handleDecline = () => {
        trackEvent({
            action: 'cookie_consent',
            category: 'privacy',
            label: 'declined',
        })
        setConsent({ analytics: false })
        setShowBanner(false)
    }

    const handleClose = () => {
        // Treat close as decline
        handleDecline()
    }

    if (!showBanner) return null

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
                onClick={handleClose}
            />

            <ConsentBanner
                showDetails={showDetails}
                onToggleDetails={() => setShowDetails(!showDetails)}
                onAccept={handleAccept}
                onDecline={handleDecline}
                onClose={handleClose}
            />
        </>
    )
}

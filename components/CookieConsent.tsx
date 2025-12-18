'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield, Info } from 'lucide-react'
import { shouldShowConsentBanner, setConsent, hasConsent } from '@/lib/consent'

/**
 * CookieConsent component
 *
 * GDPR-compliant cookie consent banner
 * Shows on first visit and allows users to accept or decline analytics cookies
 */
export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    useEffect(() => {
        // Check if we should show the banner
        setShowBanner(shouldShowConsentBanner())
    }, [])

    const handleAccept = () => {
        setConsent({ analytics: true })
        setShowBanner(false)

        // Reload page to initialize analytics
        if (typeof window !== 'undefined') {
            window.location.reload()
        }
    }

    const handleDecline = () => {
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

            {/* Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none">
                <div className="max-w-4xl mx-auto pointer-events-auto">
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                            <div className="flex items-center gap-3">
                                <Cookie className="w-6 h-6 text-secondary" />
                                <h3 className="text-lg font-semibold text-white">
                                    Cookie Preferences
                                </h3>
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-gray-400 hover:text-white transition-colors p-1"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We use cookies to enhance your browsing
                                experience and analyze our traffic. By clicking
                                "Accept All", you consent to our use of
                                analytics cookies.
                            </p>

                            {/* Details Toggle */}
                            {!showDetails && (
                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="flex items-center gap-2 text-secondary hover:text-orange-400 text-sm mb-4 transition-colors"
                                >
                                    <Info className="w-4 h-4" />
                                    <span>Learn more about our cookies</span>
                                </button>
                            )}

                            {/* Expanded Details */}
                            {showDetails && (
                                <div className="mb-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <button
                                        onClick={() => setShowDetails(false)}
                                        className="flex items-center gap-2 text-secondary hover:text-orange-400 text-sm mb-3 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                        <span>Hide details</span>
                                    </button>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                                <Shield className="w-4 h-4 text-green-400" />
                                                Essential Cookies (Always
                                                Active)
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                These cookies are necessary for
                                                the website to function and
                                                cannot be disabled. They store
                                                your cookie preferences and
                                                remember your theme choice.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-white font-semibold mb-2">
                                                Analytics Cookies (Optional)
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                These cookies help us understand
                                                how visitors interact with our
                                                website by collecting anonymous
                                                information. We use Google
                                                Analytics to improve our content
                                                and user experience.
                                            </p>
                                            <ul className="mt-2 space-y-1 text-gray-400 text-sm list-disc list-inside">
                                                <li>
                                                    Page views and navigation
                                                </li>
                                                <li>
                                                    Performance metrics (Web
                                                    Vitals)
                                                </li>
                                                <li>
                                                    Anonymous usage statistics
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="pt-2 border-t border-slate-700">
                                            <p className="text-gray-400 text-xs">
                                                Your privacy is important to us.
                                                We do not sell your data or use
                                                it for advertising purposes. You
                                                can change your preferences at
                                                any time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 px-6 py-3 bg-secondary hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Essential Only
                                </button>
                            </div>

                            {/* Privacy Policy Link */}
                            <p className="text-center text-xs text-gray-500 mt-4">
                                By continuing to use this site, you acknowledge
                                our use of cookies.{' '}
                                <a
                                    href="#privacy"
                                    className="text-secondary hover:underline"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

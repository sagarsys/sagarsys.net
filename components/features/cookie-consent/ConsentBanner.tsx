'use client'

import { X, Cookie, Info } from 'lucide-react'
import ConsentDetails from './ConsentDetails'

interface ConsentBannerProps {
    showDetails: boolean
    onToggleDetails: () => void
    onAccept: () => void
    onDecline: () => void
    onClose: () => void
}

/**
 * ConsentBanner component
 *
 * Cookie consent banner UI with actions
 */
export default function ConsentBanner({
    showDetails,
    onToggleDetails,
    onAccept,
    onDecline,
    onClose,
}: ConsentBannerProps) {
    return (
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
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors p-1"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            We use cookies to enhance your browsing experience
                            and analyze our traffic. By clicking "Accept All",
                            you consent to our use of analytics cookies.
                        </p>

                        {/* Details Toggle */}
                        {!showDetails && (
                            <button
                                onClick={onToggleDetails}
                                className="flex items-center gap-2 text-secondary hover:text-orange-400 text-sm mb-4 transition-colors"
                            >
                                <Info className="w-4 h-4" />
                                <span>Learn more about our cookies</span>
                            </button>
                        )}

                        {/* Expanded Details */}
                        {showDetails && (
                            <ConsentDetails onClose={onToggleDetails} />
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={onAccept}
                                className="flex-1 px-6 py-3 bg-secondary hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={onDecline}
                                className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Essential Only
                            </button>
                        </div>

                        {/* Privacy Policy Link */}
                        <p className="text-center text-xs text-gray-500 mt-4">
                            By continuing to use this site, you acknowledge our
                            use of cookies.{' '}
                            <a
                                href="/privacy"
                                className="text-secondary hover:underline"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

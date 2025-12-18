'use client'

import { X, Shield } from 'lucide-react'

interface ConsentDetailsProps {
    onClose: () => void
}

/**
 * ConsentDetails component
 *
 * Expandable cookie information details
 */
export default function ConsentDetails({ onClose }: ConsentDetailsProps) {
    return (
        <div className="mb-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <button
                onClick={onClose}
                className="flex items-center gap-2 text-secondary hover:text-orange-400 text-sm mb-3 transition-colors"
            >
                <X className="w-4 h-4" />
                <span>Hide details</span>
            </button>

            <div className="space-y-3">
                <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        Essential Cookies (Always Active)
                    </h4>
                    <p className="text-gray-400 text-sm">
                        These cookies are necessary for the website to function
                        and cannot be disabled. They store your cookie
                        preferences and remember your theme choice.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-2">
                        Analytics Cookies (Optional)
                    </h4>
                    <p className="text-gray-400 text-sm">
                        These cookies help us understand how visitors interact
                        with our website by collecting anonymous information. We
                        use Google Analytics to improve our content and user
                        experience.
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-400 text-sm list-disc list-inside">
                        <li>Page views and navigation</li>
                        <li>Performance metrics (Web Vitals)</li>
                        <li>Anonymous usage statistics</li>
                    </ul>
                </div>

                <div className="pt-2 border-t border-slate-700">
                    <p className="text-gray-400 text-xs">
                        Your privacy is important to us. We do not sell your
                        data or use it for advertising purposes. You can change
                        your preferences at any time.
                    </p>
                </div>
            </div>
        </div>
    )
}

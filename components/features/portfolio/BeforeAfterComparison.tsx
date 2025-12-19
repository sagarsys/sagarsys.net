'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Monitor, Smartphone } from 'lucide-react'
import { getWebPImageSrc } from '@/lib/image-utils'

interface BeforeAfterComparisonProps {
    beforeImages: {
        desktop?: string
        mobile?: string
        description?: string
    }
    afterImages: {
        desktop?: string
        mobile?: string
    }
    title: string
}

/**
 * BeforeAfterComparison component
 *
 * Displays side-by-side before/after comparison for redesign projects
 * Supports desktop/mobile toggle
 */
export default function BeforeAfterComparison({
    beforeImages,
    afterImages,
    title,
}: BeforeAfterComparisonProps) {
    const [comparisonView, setComparisonView] = useState<'desktop' | 'mobile'>(
        'desktop'
    )

    const hasDesktopComparison = beforeImages.desktop && afterImages.desktop
    const hasMobileComparison = beforeImages.mobile && afterImages.mobile

    return (
        <div className="space-y-4">
            {/* Device toggle within comparison */}
            <div className="flex justify-center gap-2">
                {hasDesktopComparison && (
                    <button
                        onClick={() => setComparisonView('desktop')}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                            comparisonView === 'desktop'
                                ? 'bg-secondary text-black font-medium'
                                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                        }`}
                    >
                        <Monitor className="w-4 h-4" />
                        Desktop
                    </button>
                )}
                {hasMobileComparison && (
                    <button
                        onClick={() => setComparisonView('mobile')}
                        className={`px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                            comparisonView === 'mobile'
                                ? 'bg-secondary text-black font-medium'
                                : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                        }`}
                    >
                        <Smartphone className="w-4 h-4" />
                        Mobile
                    </button>
                )}
            </div>

            {beforeImages.description && (
                <p className="text-sm text-gray-400 italic text-center">
                    {beforeImages.description}
                </p>
            )}

            {/* Side-by-side comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Before */}
                <div className="space-y-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full">
                        Before
                    </span>
                    <div
                        className={`relative rounded-lg overflow-hidden border border-slate-700/50 bg-slate-800/30 ${
                            comparisonView === 'mobile'
                                ? 'max-w-md mx-auto'
                                : ''
                        }`}
                    >
                        <Image
                            src={`/${
                                comparisonView === 'desktop'
                                    ? beforeImages.desktop || ''
                                    : beforeImages.mobile || ''
                            }`}
                            alt={`${title} - Before`}
                            width={comparisonView === 'mobile' ? 375 : 1200}
                            height={comparisonView === 'mobile' ? 812 : 800}
                            className="w-full h-auto"
                            loading="lazy"
                            unoptimized
                        />
                    </div>
                </div>

                {/* After */}
                <div className="space-y-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full">
                        After
                    </span>
                    <div
                        className={`relative rounded-lg overflow-hidden border border-secondary/30 bg-slate-800/30 ${
                            comparisonView === 'mobile'
                                ? 'max-w-md mx-auto'
                                : ''
                        }`}
                    >
                        <Image
                            src={getWebPImageSrc(
                                comparisonView === 'desktop'
                                    ? afterImages.desktop || ''
                                    : afterImages.mobile || ''
                            )}
                            alt={`${title} - After`}
                            width={comparisonView === 'mobile' ? 375 : 1200}
                            height={comparisonView === 'mobile' ? 812 : 800}
                            className="w-full h-auto"
                            loading="lazy"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

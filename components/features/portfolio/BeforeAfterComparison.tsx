'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
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
 * Displays before/after comparison for redesign projects
 * Supports toggle between desktop and mobile views
 */
export default function BeforeAfterComparison({
    beforeImages,
    afterImages,
    title,
}: BeforeAfterComparisonProps) {
    const [activeView, setActiveView] = useState<'desktop' | 'mobile'>(
        'desktop'
    )

    const beforeImage =
        activeView === 'desktop' ? beforeImages.desktop : beforeImages.mobile
    const afterImage =
        activeView === 'desktop' ? afterImages.desktop : afterImages.mobile

    const hasDesktop = beforeImages.desktop && afterImages.desktop
    const hasMobile = beforeImages.mobile && afterImages.mobile

    if (!beforeImage || !afterImage) return null

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-secondary">
                    Before & After Comparison
                </h3>

                {/* View Toggle */}
                {hasDesktop && hasMobile && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveView('desktop')}
                            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                                activeView === 'desktop'
                                    ? 'bg-secondary text-black font-medium'
                                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                            }`}
                        >
                            Desktop
                        </button>
                        <button
                            onClick={() => setActiveView('mobile')}
                            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                                activeView === 'mobile'
                                    ? 'bg-secondary text-black font-medium'
                                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                            }`}
                        >
                            Mobile
                        </button>
                    </div>
                )}
            </div>

            {beforeImages.description && (
                <p className="text-sm text-gray-400 italic">
                    {beforeImages.description}
                </p>
            )}

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeView}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Before */}
                    <div className="space-y-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full">
                            Before
                        </span>
                        <div className="relative rounded-lg overflow-hidden border border-slate-700/50 bg-slate-800/30">
                            <Image
                                src={getWebPImageSrc(beforeImage)}
                                alt={`${title} - Before`}
                                width={activeView === 'mobile' ? 400 : 800}
                                height={activeView === 'mobile' ? 800 : 600}
                                className={`object-contain w-full ${
                                    activeView === 'mobile'
                                        ? 'max-h-[500px]'
                                        : 'max-h-[400px]'
                                }`}
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* After */}
                    <div className="space-y-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full">
                            After
                        </span>
                        <div className="relative rounded-lg overflow-hidden border border-secondary/30 bg-slate-800/30">
                            <Image
                                src={getWebPImageSrc(afterImage)}
                                alt={`${title} - After`}
                                width={activeView === 'mobile' ? 400 : 800}
                                height={activeView === 'mobile' ? 800 : 600}
                                className={`object-contain w-full ${
                                    activeView === 'mobile'
                                        ? 'max-h-[500px]'
                                        : 'max-h-[400px]'
                                }`}
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

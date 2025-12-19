'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Monitor, Tablet, Smartphone, GitCompare } from 'lucide-react'
import { getWebPImageSrc } from '@/lib/image-utils'

interface DevicesPreviewProps {
    images: {
        desktop?: string
        tablet?: string
        mobile?: string
    }
    beforeImages?: {
        desktop?: string
        mobile?: string
        description?: string
    }
    title?: string
}

export default function DevicesPreview({
    images,
    beforeImages,
    title = 'Project',
}: DevicesPreviewProps) {
    const { desktop, tablet, mobile } = images
    const [comparisonView, setComparisonView] = useState<'desktop' | 'mobile'>(
        'desktop'
    )

    // Check if we have before/after comparison available
    const hasComparison =
        beforeImages && (beforeImages.desktop || beforeImages.mobile)

    // If only one image type and no comparison, show it directly
    const imageCount = [desktop, tablet, mobile].filter(Boolean).length

    if (imageCount === 0 && !hasComparison) return null

    if (imageCount === 1 && !hasComparison) {
        const singleImage = desktop || tablet || mobile
        if (!singleImage) return null
        return (
            <div className="my-8">
                <div className="relative w-full rounded-lg overflow-hidden border border-slate-700">
                    <Image
                        src={getWebPImageSrc(singleImage)}
                        alt="Project preview"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        unoptimized
                    />
                </div>
            </div>
        )
    }

    // Calculate number of tabs needed
    const tabCount =
        [desktop, tablet, mobile].filter(Boolean).length +
        (hasComparison ? 1 : 0)

    // Determine default tab - prioritize comparison if available
    const defaultTab = hasComparison ? 'comparison' : 'desktop'

    // Multiple images or comparison - show tabs
    return (
        <div className="my-8">
            <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList
                    className={`grid w-full mb-6`}
                    style={{
                        gridTemplateColumns: `repeat(${tabCount}, minmax(0, 1fr))`,
                    }}
                >
                    {desktop && (
                        <TabsTrigger
                            value="desktop"
                            className="flex items-center gap-2"
                        >
                            <Monitor className="w-4 h-4" />
                            <span className="hidden sm:inline">Desktop</span>
                        </TabsTrigger>
                    )}
                    {tablet && (
                        <TabsTrigger
                            value="tablet"
                            className="flex items-center gap-2"
                        >
                            <Tablet className="w-4 h-4" />
                            <span className="hidden sm:inline">Tablet</span>
                        </TabsTrigger>
                    )}
                    {mobile && (
                        <TabsTrigger
                            value="mobile"
                            className="flex items-center gap-2"
                        >
                            <Smartphone className="w-4 h-4" />
                            <span className="hidden sm:inline">Mobile</span>
                        </TabsTrigger>
                    )}
                    {hasComparison && (
                        <TabsTrigger
                            value="comparison"
                            className="flex items-center gap-2"
                        >
                            <GitCompare className="w-4 h-4" />
                            <span className="hidden sm:inline">
                                Before/After
                            </span>
                        </TabsTrigger>
                    )}
                </TabsList>

                {desktop && (
                    <TabsContent value="desktop">
                        <div className="relative w-full rounded-lg overflow-hidden border border-slate-700">
                            <Image
                                src={getWebPImageSrc(desktop)}
                                alt="Desktop view"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 1200px"
                                unoptimized
                            />
                        </div>
                    </TabsContent>
                )}

                {tablet && (
                    <TabsContent value="tablet">
                        <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-slate-700">
                            <Image
                                src={getWebPImageSrc(tablet)}
                                alt="Tablet view"
                                width={768}
                                height={1024}
                                className="w-full h-auto"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 768px"
                                unoptimized
                            />
                        </div>
                    </TabsContent>
                )}

                {mobile && (
                    <TabsContent value="mobile">
                        <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden border border-slate-700">
                            <Image
                                src={getWebPImageSrc(mobile)}
                                alt="Mobile view"
                                width={375}
                                height={812}
                                className="w-full h-auto"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 375px"
                                unoptimized
                            />
                        </div>
                    </TabsContent>
                )}

                {/* Before/After Comparison Tab */}
                {hasComparison && beforeImages && (
                    <TabsContent value="comparison" className="space-y-4">
                        {/* Device toggle within comparison */}
                        <div className="flex justify-center gap-2">
                            {beforeImages.desktop && desktop && (
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
                            {beforeImages.mobile && mobile && (
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
                                        width={
                                            comparisonView === 'mobile'
                                                ? 375
                                                : 1200
                                        }
                                        height={
                                            comparisonView === 'mobile'
                                                ? 812
                                                : 800
                                        }
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
                                                ? desktop || ''
                                                : mobile || ''
                                        )}
                                        alt={`${title} - After`}
                                        width={
                                            comparisonView === 'mobile'
                                                ? 375
                                                : 1200
                                        }
                                        height={
                                            comparisonView === 'mobile'
                                                ? 812
                                                : 800
                                        }
                                        className="w-full h-auto"
                                        loading="lazy"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    )
}

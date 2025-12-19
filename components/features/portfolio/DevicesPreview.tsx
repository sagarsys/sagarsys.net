'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Monitor, Tablet, Smartphone } from 'lucide-react'
import { getWebPImageSrc } from '@/lib/image-utils'

interface DevicesPreviewProps {
    images: {
        desktop?: string
        tablet?: string
        mobile?: string
    }
}

export default function DevicesPreview({ images }: DevicesPreviewProps) {
    const { desktop, tablet, mobile } = images

    // If only one image type, show it directly
    const imageCount = [desktop, tablet, mobile].filter(Boolean).length

    if (imageCount === 0) return null

    if (imageCount === 1) {
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

    // Multiple images - show tabs
    return (
        <div className="my-8">
            <Tabs defaultValue="desktop" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
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
            </Tabs>
        </div>
    )
}

'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { arrayToString } from '@/lib/utils'
import DevicesPreview from './DevicesPreview'

/**
 * Lazy-load MarkdownRenderer - Code splitting strategy
 *
 * This creates a separate JavaScript chunk that only loads when the dialog opens.
 * Benefits:
 * - ~60KB removed from initial page bundle
 * - Faster initial page load
 * - Markdown library loads on-demand when user opens project details
 *
 * ssr: false because this is a client component and markdown is rendered client-side
 */
const MarkdownRenderer = dynamic(() => import('./MarkdownRenderer'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 text-secondary animate-spin" />
        </div>
    ),
})

interface PortfolioItemData {
    images: {
        thumb: string
        mobile?: string
        tablet?: string
        desktop?: string
    }
    title: string
    description: string
    tech?: string[]
    client?: string
    clientLink?: string
    role?: string
    roleDescription?: string
    challenges?: string[]
    video?: string
    live?: Array<{
        title: string
        link: string
        thumb: string
    }>
    [key: string]: any
}

interface PortfolioItemDetailsDialogContentProps {
    item: PortfolioItemData
}

export default function PortfolioItemDetailsDialogContent({
    item,
}: PortfolioItemDetailsDialogContentProps) {
    const {
        images,
        title,
        description,
        tech,
        client,
        clientLink,
        role,
        roleDescription,
        challenges,
        video,
        live,
    } = item

    return (
        <div className="space-y-6">
            {/* Mobile: Keep single column layout, Desktop: Single column (media top, text below) */}
            <div className="grid grid-cols-1 md:flex md:flex-col gap-6">
                {/* Media section - Video takes priority, fallback to image */}
                <div className="flex justify-center md:w-full">
                    <div className="relative w-full max-w-full">
                        {video ? (
                            <video
                                src={`/${video}`}
                                controls
                                className="w-full max-w-full md:max-w-4xl md:max-h-[50vh] mx-auto rounded-lg shadow-lg"
                                playsInline
                                autoPlay
                                muted
                                loop
                            >
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <Image
                                src={`/${images.thumb}`}
                                alt={title}
                                width={800}
                                height={600}
                                className="object-contain w-auto max-w-full md:max-w-4xl md:max-h-[50vh] mx-auto"
                            />
                        )}
                    </div>
                </div>

                {/* Text content section - centered column on desktop */}
                <div className="space-y-4 md:max-w-3xl md:mx-auto">
                    <MarkdownRenderer>{description || ''}</MarkdownRenderer>

                    {tech && (
                        <p className="text-secondary">
                            Technologies:{' '}
                            <span className="text-foreground">
                                {arrayToString(tech).join('')}
                            </span>
                        </p>
                    )}

                    {client && (
                        <p className="text-secondary">
                            Client:{' '}
                            {clientLink ? (
                                <a
                                    href={clientLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-secondary hover:underline"
                                >
                                    {client}
                                </a>
                            ) : (
                                <span className="text-foreground">
                                    {client}
                                </span>
                            )}
                        </p>
                    )}

                    {role && (
                        <p className="text-secondary">
                            Role:{' '}
                            <span className="text-foreground">{role}</span>
                        </p>
                    )}

                    {roleDescription && (
                        <p className="text-secondary">
                            Role description:{' '}
                            <span className="text-foreground">
                                {roleDescription}
                            </span>
                        </p>
                    )}

                    {challenges && (
                        <div className="text-secondary">
                            Challenges:{' '}
                            <ul className="text-foreground list-disc list-inside mt-2 space-y-1">
                                {challenges.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Live Examples */}
            {live && live.length > 0 && (
                <div className="my-8">
                    <h3 className="text-xl font-bold mb-4 text-secondary">
                        Live Examples
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {live.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group border border-slate-700 rounded-lg overflow-hidden hover:border-secondary transition-colors"
                            >
                                <div className="relative h-32">
                                    <Image
                                        src={`/${item.thumb}`}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                        unoptimized
                                    />
                                </div>
                                <div className="p-3">
                                    <p className="text-sm font-medium text-gray-300 group-hover:text-secondary transition-colors">
                                        {item.title}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Device Preview - Desktop/Tablet/Mobile */}
            <DevicesPreview images={images} />
        </div>
    )
}

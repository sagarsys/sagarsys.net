'use client'

import Image from 'next/image'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import { arrayToString } from '@/lib/utils'
import DevicesPreview from './DevicesPreview'
import BeforeAfterComparison from './BeforeAfterComparison'
import MarkdownRenderer from '@/components/shared/media/LazyMarkdownRenderer'

interface PortfolioItemData {
    images: {
        thumb: string
        mobile?: string
        tablet?: string
        desktop?: string
    }
    beforeImages?: {
        desktop?: string
        mobile?: string
        description?: string
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
    liveUrl?: string
    githubUrl?: string
    stars?: number
    forks?: number
    source?: 'markdown' | 'github'
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
        beforeImages,
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
        liveUrl,
        githubUrl,
        stars,
        forks,
        source,
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
                                className="w-full max-w-full md:max-w-[2000px] md:max-h-[50vh] mx-auto rounded-lg shadow-lg"
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
                                className="object-contain w-auto max-w-full md:max-w-[2000px] md:max-h-[50vh] mx-auto"
                            />
                        )}
                    </div>
                </div>

                {/* Project Links and Stats */}
                {(liveUrl || githubUrl || source === 'github') && (
                    <div className="flex flex-wrap items-center justify-center gap-4 py-2">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors font-medium"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live Site
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-gray-200 rounded-lg hover:bg-slate-600/50 transition-colors font-medium"
                            >
                                <Github className="w-4 h-4" />
                                View Source Code
                            </a>
                        )}
                        {source === 'github' && (
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                {typeof stars === 'number' && (
                                    <span className="flex items-center gap-1.5">
                                        <Star className="w-4 h-4 fill-yellow-500/80 text-yellow-500" />
                                        {stars} stars
                                    </span>
                                )}
                                {typeof forks === 'number' && forks > 0 && (
                                    <span className="flex items-center gap-1.5">
                                        <GitFork className="w-4 h-4" />
                                        {forks} forks
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}

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

            {/* Before/After Comparison for redesign projects */}
            {beforeImages && (beforeImages.desktop || beforeImages.mobile) && (
                <BeforeAfterComparison
                    beforeImages={beforeImages}
                    afterImages={{
                        desktop: images.desktop,
                        mobile: images.mobile,
                    }}
                    title={title}
                />
            )}

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

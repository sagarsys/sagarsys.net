'use client'

import Image from 'next/image'
import { arrayToString } from '@/lib/utils'
import DevicesPreview from './DevicesPreview'

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
        live,
    } = item

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center">
                    <div className="relative w-full max-w-full max-h-[70vh]">
                        <Image
                            src={`/${images.thumb}`}
                            alt={title}
                            width={800}
                            height={600}
                            className="object-contain w-auto max-w-full max-h-[70vh]"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-foreground">{description}</p>

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

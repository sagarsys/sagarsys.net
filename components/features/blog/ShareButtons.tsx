'use client'

import { useState } from 'react'
import { Share2, Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-react'
import { trackClick } from '@/lib/analytics'

interface ShareButtonsProps {
    url: string
    title: string
    description?: string
}

/**
 * ShareButtons component
 *
 * Provides social sharing buttons for blog posts and articles
 */
export default function ShareButtons({
    url,
    title,
    description,
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)

    const fullUrl =
        typeof window !== 'undefined' ? `${window.location.origin}${url}` : url

    const handleShare = async (platform: string) => {
        const encodedUrl = encodeURIComponent(fullUrl)
        const encodedTitle = encodeURIComponent(title)
        const encodedDescription = encodeURIComponent(description || '')

        // Track share click
        trackClick(`share_${platform}`, {
            content_type: 'blog_post',
            content_title: title,
            share_platform: platform,
        })

        let shareUrl = ''

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
                break
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
                break
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
                break
            case 'copy':
                try {
                    await navigator.clipboard.writeText(fullUrl)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                    return
                } catch (err) {
                    console.error('Failed to copy:', err)
                    return
                }
            default:
                return
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="hidden md:flex text-sm text-gray-400 items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share:
            </span>
            <button
                onClick={() => handleShare('twitter')}
                className="flex items-center justify-center gap-2 p-3 md:px-4 md:py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-full md:rounded-lg transition-all hover:border-blue-400/50"
                aria-label="Share on Twitter"
            >
                <Twitter className="w-4 h-4 text-blue-400" />
                <span className="hidden md:inline text-sm text-gray-300">
                    Twitter
                </span>
            </button>
            <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center justify-center gap-2 p-3 md:px-4 md:py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-full md:rounded-lg transition-all hover:border-blue-500/50"
                aria-label="Share on LinkedIn"
            >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span className="hidden md:inline text-sm text-gray-300">
                    LinkedIn
                </span>
            </button>
            <button
                onClick={() => handleShare('facebook')}
                className="flex items-center justify-center gap-2 p-3 md:px-4 md:py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-full md:rounded-lg transition-all hover:border-blue-600/50"
                aria-label="Share on Facebook"
            >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span className="hidden md:inline text-sm text-gray-300">
                    Facebook
                </span>
            </button>
            <button
                onClick={() => handleShare('copy')}
                className="flex items-center justify-center gap-2 p-3 md:px-4 md:py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-full md:rounded-lg transition-all hover:border-secondary/50"
                aria-label="Copy link"
            >
                {copied ? (
                    <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="hidden md:inline text-sm text-green-400">
                            Copied!
                        </span>
                    </>
                ) : (
                    <>
                        <Link2 className="w-4 h-4 text-secondary" />
                        <span className="hidden md:inline text-sm text-gray-300">
                            Copy Link
                        </span>
                    </>
                )}
            </button>
        </div>
    )
}

'use client'

import { useState } from 'react'
import {
    Share2,
    X,
    Twitter,
    Linkedin,
    Facebook,
    Link2,
    Check,
    MessageCircle,
    Hash,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FloatingShareButtonProps {
    url: string
    title: string
    description?: string
}

/**
 * FloatingShareButton component
 *
 * Floating share button that stays visible on the right side of the page
 */
export default function FloatingShareButton({
    url,
    title,
    description,
}: FloatingShareButtonProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [copied, setCopied] = useState(false)

    const fullUrl =
        typeof window !== 'undefined' ? `${window.location.origin}${url}` : url

    const handleShare = async (platform: string) => {
        const encodedUrl = encodeURIComponent(fullUrl)
        const encodedTitle = encodeURIComponent(title)
        const encodedDescription = encodeURIComponent(description || '')

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
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
                break
            case 'slack':
                shareUrl = `https://slack.com/share?url=${encodedUrl}&text=${encodedTitle}`
                break
            case 'copy':
                try {
                    await navigator.clipboard.writeText(fullUrl)
                    setCopied(true)
                    setTimeout(() => {
                        setCopied(false)
                        setIsOpen(false)
                    }, 2000)
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
            setIsOpen(false)
        }
    }

    return (
        <div className="fixed right-6 top-24 z-40">
            {/* Toggle button - always in same position */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-secondary/90 hover:bg-secondary backdrop-blur-md border border-secondary/50 rounded-full shadow-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Share"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Share2 className="w-6 h-6 text-white" />
                )}
            </motion.button>

            {/* Share menu - positioned below button */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                        className="absolute right-0 top-16 mt-2 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg p-3 shadow-xl"
                    >
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => handleShare('twitter')}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:border-blue-400/50 text-left"
                                aria-label="Share on Twitter"
                            >
                                <Twitter className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-gray-300">
                                    Twitter
                                </span>
                            </button>
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:border-blue-500/50 text-left"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 text-blue-500" />
                                <span className="text-sm text-gray-300">
                                    LinkedIn
                                </span>
                            </button>
                            <button
                                onClick={() => handleShare('facebook')}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:border-blue-600/50 text-left"
                                aria-label="Share on Facebook"
                            >
                                <Facebook className="w-4 h-4 text-blue-600" />
                                <span className="text-sm text-gray-300">
                                    Facebook
                                </span>
                            </button>
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:border-green-500/50 text-left"
                                aria-label="Share on WhatsApp"
                            >
                                <MessageCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-300">
                                    WhatsApp
                                </span>
                            </button>
                            <button
                                onClick={() => handleShare('slack')}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:border-purple-500/50 text-left"
                                aria-label="Share on Slack"
                            >
                                <Hash className="w-4 h-4 text-purple-500" />
                                <span className="text-sm text-gray-300">
                                    Slack
                                </span>
                            </button>
                            <button
                                onClick={() => handleShare('copy')}
                                className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:border-secondary/50 text-left"
                                aria-label="Copy link"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span className="text-sm text-green-400">
                                            Copied!
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <Link2 className="w-4 h-4 text-secondary" />
                                        <span className="text-sm text-gray-300">
                                            Copy Link
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

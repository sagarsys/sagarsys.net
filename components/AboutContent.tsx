'use client'

import { motion } from 'framer-motion'
import AboutCardScroller from './AboutCardScroller'
import type { MarkdownContent, AboutFrontmatter } from '@/types'

interface AboutContentProps {
    data: MarkdownContent<AboutFrontmatter> | null
}

export default function AboutContent({ data }: AboutContentProps) {
    if (!data) return null

    const { name, image = '/images/sagar.jpg' } = data.frontmatter

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Image - Top on mobile, left on desktop */}
            <motion.div
                className="md:sticky md:top-24 md:h-fit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="relative aspect-square max-w-md mx-auto">
                    {/* Glow effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Image container */}
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden p-4 shadow-xl">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-700">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right: Card Scroller */}
            <motion.div
                className="order-1 md:order-2 w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <AboutCardScroller content={data.content} />
            </motion.div>
        </div>
    )
}

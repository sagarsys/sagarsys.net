'use client'

import { motion } from 'framer-motion'
import { renderMarkdown } from '@/lib/simple-markdown'
import type { MarkdownContent, AboutFrontmatter } from '@/types'

interface AboutContentProps {
    data: MarkdownContent<AboutFrontmatter> | null
}

export default function AboutContent({ data }: AboutContentProps) {
    if (!data) return null

    const { name, image = '/images/sagar.jpg' } = data.frontmatter
    const content = renderMarkdown(data.content)

    return (
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
                            {/* Using regular img tag for better compatibility */}
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

            {/* Right: Content */}
            <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {content}
                </motion.div>
            </motion.div>
        </div>
    )
}

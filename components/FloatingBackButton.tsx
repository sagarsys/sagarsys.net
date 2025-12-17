'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * FloatingBackButton component
 *
 * Floating back button with solid orange color, positioned at top left
 * Matches the style of FloatingShareButton for consistency
 */
export default function FloatingBackButton({ href }: { href: string }) {
    return (
        <Link href={href} className="fixed left-6 top-24 z-40 group">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-secondary/90 hover:bg-secondary backdrop-blur-md border border-secondary/50 rounded-full shadow-lg flex items-center justify-center transition-all"
            >
                <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </motion.div>
        </Link>
    )
}

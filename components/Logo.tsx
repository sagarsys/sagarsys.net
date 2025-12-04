'use client'

import { motion } from 'framer-motion'
import { handleScrollToTop } from '@/lib/utils'

export default function Logo() {
    const siteTitle = 'SAGARSYS'

    return (
        <motion.a
            onClick={handleScrollToTop}
            className="font-neuropol text-3xl md:text-4xl cursor-pointer relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="bg-gradient-to-r from-secondary via-orange-500 to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {siteTitle}
            </span>

            {/* Subtle glow on hover */}
            <motion.div
                className="absolute inset-0 blur-xl bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.a>
    )
}

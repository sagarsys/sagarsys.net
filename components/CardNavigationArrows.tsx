'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CardNavigationArrowsProps {
    activeCard: number
    totalCards: number
    onPrev: () => void
    onNext: () => void
}

export default function CardNavigationArrows({
    activeCard,
    totalCards,
    onPrev,
    onNext,
}: CardNavigationArrowsProps) {
    return (
        <>
            {activeCard > 0 && (
                <motion.button
                    onClick={onPrev}
                    className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous card"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
            )}

            {activeCard < totalCards - 1 && (
                <motion.button
                    onClick={onNext}
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next card"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
            )}
        </>
    )
}

'use client'

import { motion } from 'framer-motion'

interface CardDotNavigationProps {
    totalCards: number
    activeCard: number
    onNavigate: (index: number) => void
    cardTitles?: string[]
}

export default function CardDotNavigation({
    totalCards,
    activeCard,
    onNavigate,
    cardTitles,
}: CardDotNavigationProps) {
    return (
        <div>
            {/* Dot Markers */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalCards }).map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => onNavigate(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === activeCard
                                ? 'w-8 bg-secondary'
                                : 'w-2 bg-slate-600 hover:bg-slate-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={
                            cardTitles?.[index]
                                ? `Go to ${cardTitles[index]}`
                                : `Go to card ${index + 1}`
                        }
                    />
                ))}
            </div>

            {/* Card Counter */}
            <div className="text-center mt-4 text-sm text-gray-500">
                {activeCard + 1} / {totalCards}
            </div>
        </div>
    )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { renderMarkdown } from '@/lib/simple-markdown'
import CardDotNavigation from './CardDotNavigation'

interface AboutCard {
    title: string
    content: string
}

interface AboutCardScrollerMobileProps {
    cards: AboutCard[]
    gradientColors: { from: string; via: string; to: string }
}

export default function AboutCardScrollerMobile({
    cards,
    gradientColors,
}: AboutCardScrollerMobileProps) {
    const [activeCard, setActiveCard] = useState(0)
    const [direction, setDirection] = useState(0)

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        const newCard = newDirection === 1 ? activeCard + 1 : activeCard - 1
        if (newCard >= 0 && newCard < cards.length) {
            setActiveCard(newCard)
        }
    }

    const cardVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
        }),
    }

    return (
        <div
            className="relative w-full"
            style={{
                ['--scroll-color-from' as any]: gradientColors.from,
                ['--scroll-color-to' as any]: gradientColors.via,
            }}
        >
            <div className="relative min-h-[400px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={activeCard}
                        custom={direction}
                        variants={cardVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                    >
                        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-3xl p-6 flex flex-col shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4">
                                <span
                                    className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
                                    }}
                                >
                                    {cards[activeCard].title}
                                </span>
                            </h3>
                            <div className="space-y-2">
                                {renderMarkdown(cards[activeCard].content)}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Mobile Arrow Navigation (top position) */}
            {activeCard > 0 && (
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-2 top-4 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center z-20"
                    aria-label="Previous card"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
            )}

            {activeCard < cards.length - 1 && (
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-2 top-4 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center z-20"
                    aria-label="Next card"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            )}

            {/* Reusable Dot Navigation */}
            <CardDotNavigation
                totalCards={cards.length}
                activeCard={activeCard}
                onNavigate={setActiveCard}
                cardTitles={cards.map((c) => c.title)}
            />
        </div>
    )
}

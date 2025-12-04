'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { renderMarkdown } from '@/lib/simple-markdown'

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

    const nextCard = () => {
        if (activeCard < cards.length - 1) {
            setActiveCard(activeCard + 1)
        }
    }

    const prevCard = () => {
        if (activeCard > 0) {
            setActiveCard(activeCard - 1)
        }
    }

    const goToCard = (index: number) => {
        setActiveCard(index)
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        if (newDirection === 1) {
            nextCard()
        } else {
            prevCard()
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

            {/* Navigation Arrows */}
            {activeCard > 0 && (
                <button
                    onClick={() => paginate(-1)}
                    className="absolute left-2 top-4 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center z-20"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
            )}

            {activeCard < cards.length - 1 && (
                <button
                    onClick={() => paginate(1)}
                    className="absolute right-2 top-4 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center z-20"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            )}

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-6">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToCard(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === activeCard
                                ? 'w-8 bg-secondary'
                                : 'w-2 bg-slate-600'
                        }`}
                    />
                ))}
            </div>

            {/* Card Counter */}
            <div className="text-center mt-3 text-sm text-gray-500">
                {activeCard + 1} / {cards.length}
            </div>
        </div>
    )
}

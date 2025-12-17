'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import CardDotNavigation from './CardDotNavigation'
import GradientText from './GradientText'
import MarkdownRenderer from './LazyMarkdownRenderer'

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

    // Handle empty cards array
    if (!cards || cards.length === 0) {
        return null
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        const newCard = newDirection === 1 ? activeCard + 1 : activeCard - 1
        if (newCard >= 0 && newCard < cards.length) {
            setActiveCard(newCard)
        }
    }

    const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
        const swipeThreshold = 50
        if (info.offset.x < -swipeThreshold) {
            paginate(1) // Swipe left = next
        } else if (info.offset.x > swipeThreshold) {
            paginate(-1) // Swipe right = previous
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
            {/* Top Navigation Bar with Arrows and Swipe Indicator */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => paginate(-1)}
                    disabled={activeCard === 0}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous card"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Swipe</span>
                    <motion.div
                        animate={{ x: [-3, 3, -3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        ←→
                    </motion.div>
                </div>

                <button
                    onClick={() => paginate(1)}
                    disabled={activeCard === cards.length - 1}
                    className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Next card"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            </div>

            {/* Card Container */}
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
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className="cursor-grab active:cursor-grabbing"
                    >
                        <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-3xl p-6 flex flex-col shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-center">
                                <GradientText
                                    gradientColors={gradientColors}
                                    className="transition-all duration-1000"
                                >
                                    {cards[activeCard].title}
                                </GradientText>
                            </h3>
                            <div className="space-y-2">
                                <MarkdownRenderer>
                                    {cards[activeCard].content}
                                </MarkdownRenderer>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <CardDotNavigation
                totalCards={cards.length}
                activeCard={activeCard}
                onNavigate={setActiveCard}
                cardTitles={cards.map((c) => c.title)}
            />
        </div>
    )
}

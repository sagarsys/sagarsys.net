'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { renderMarkdown } from '@/lib/simple-markdown'
import { useColorGradient } from '@/hooks/useColorGradient'

interface AboutCard {
    title: string
    content: string
}

interface AboutCardScrollerProps {
    content: string
}

export default function AboutCardScroller({ content }: AboutCardScrollerProps) {
    const [activeCard, setActiveCard] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [direction, setDirection] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Parse content into cards
    const parseIntoCards = (markdown: string): AboutCard[] => {
        const sections = markdown.split(/(?=^## )/gm).filter(Boolean)
        return sections
            .map((section) => {
                const lines = section.trim().split('\n')
                const firstLine = lines[0] || ''
                if (firstLine.startsWith('## ')) {
                    const title = firstLine.replace('## ', '')
                    const content = lines.slice(1).join('\n').trim()
                    return { title, content }
                }
                return null
            })
            .filter((card): card is AboutCard => card !== null)
    }

    const cards = parseIntoCards(content)

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

    const scrollToCard = (index: number) => {
        setActiveCard(index)
        const container = scrollContainerRef.current
        if (container) {
            container.scrollTo({
                left: container.clientWidth * index,
                behavior: 'smooth',
            })
        }
    }

    const handleScroll = () => {
        const container = scrollContainerRef.current
        if (container) {
            const index = Math.round(
                container.scrollLeft / container.clientWidth
            )
            setActiveCard(index)
        }
    }

    // Render mobile version
    if (isMobile) {
        return (
            <div
                className="relative w-full"
                style={{
                    ['--scroll-color-from' as any]: gradientColors.from,
                    ['--scroll-color-to' as any]: gradientColors.via,
                }}
            >
                <div className="relative min-h-[400px]">
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                        mode="wait"
                    >
                        <motion.div
                            key={activeCard}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                },
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

                <div className="text-center mt-3 text-sm text-gray-500">
                    {activeCard + 1} / {cards.length}
                </div>
            </div>
        )
    }

    // Desktop version
    return (
        <div
            className="relative w-full"
            style={{
                ['--scroll-color-from' as any]: gradientColors.from,
                ['--scroll-color-to' as any]: gradientColors.via,
            }}
        >
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                onScroll={handleScroll}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="flex">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 snap-center"
                        >
                            <div className="bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-3xl p-12 h-[600px] flex flex-col shadow-2xl">
                                <h3 className="text-4xl font-bold mb-6">
                                    <span
                                        className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
                                        }}
                                    >
                                        {card.title}
                                    </span>
                                </h3>
                                <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
                                    {renderMarkdown(card.content)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeCard > 0 && (
                <motion.button
                    onClick={() => scrollToCard(activeCard - 1)}
                    className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
            )}

            {activeCard < cards.length - 1 && (
                <motion.button
                    onClick={() => scrollToCard(activeCard + 1)}
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
            )}

            <div className="flex justify-center gap-2 mt-8">
                {cards.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => scrollToCard(index)}
                        className={`h-2 rounded-full transition-all ${
                            index === activeCard
                                ? 'w-8 bg-secondary'
                                : 'w-2 bg-slate-600 hover:bg-slate-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            <div className="text-center mt-4 text-sm text-gray-500">
                {activeCard + 1} / {cards.length}
            </div>
        </div>
    )
}

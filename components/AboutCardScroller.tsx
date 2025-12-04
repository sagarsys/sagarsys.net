'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { renderMarkdown } from '@/lib/simple-markdown'
import { useColorGradient } from '@/hooks/useColorGradient'
import AboutCardScrollerMobile from './AboutCardScrollerMobile'

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
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

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

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

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
            <AboutCardScrollerMobile
                cards={cards}
                gradientColors={gradientColors}
            />
        )
    }

    // Desktop version - Horizontal scroll
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

            {/* Navigation Arrows */}
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

            {/* Dot Navigation */}
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

            {/* Card Counter */}
            <div className="text-center mt-4 text-sm text-gray-500">
                {activeCard + 1} / {cards.length}
            </div>
        </div>
    )
}

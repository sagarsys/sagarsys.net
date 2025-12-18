'use client'

import { useState, useRef, useEffect } from 'react'
import { useColorGradient } from '@/hooks/useColorGradient'
import AboutCardScrollerMobile from './AboutCardScrollerMobile'
import CardNavigationArrows from './CardNavigationArrows'
import CardDotNavigation from './CardDotNavigation'
import GradientText from '@/components/shared/animations/GradientText'
import MarkdownRenderer from './LazyMarkdownRenderer'

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
            {/* Scrollable Cards */}
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
                                    <GradientText
                                        gradientColors={gradientColors}
                                        className="transition-all duration-1000"
                                    >
                                        {card.title}
                                    </GradientText>
                                </h3>
                                <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
                                    <MarkdownRenderer>
                                        {card.content}
                                    </MarkdownRenderer>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Components */}
            <CardNavigationArrows
                activeCard={activeCard}
                totalCards={cards.length}
                onPrev={() => scrollToCard(activeCard - 1)}
                onNext={() => scrollToCard(activeCard + 1)}
            />

            <CardDotNavigation
                totalCards={cards.length}
                activeCard={activeCard}
                onNavigate={scrollToCard}
                cardTitles={cards.map((c) => c.title)}
            />
        </div>
    )
}

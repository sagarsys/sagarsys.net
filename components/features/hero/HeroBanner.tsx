'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useColorGradient } from '@/hooks/useColorGradient'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import HeroOrbs from './HeroOrbs'
import HeroContent from './HeroContent'
import HeroActions from './HeroActions'

interface HeroBannerProps {
    email?: string
    github?: string
    linkedin?: string
}

/**
 * HeroBanner component
 *
 * Main hero section with animated background, title, and CTAs
 */
export default function HeroBanner({
    email,
    github,
    linkedin,
}: HeroBannerProps) {
    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    const { orb1X, orb1Y, orb2X, orb2Y } = useMouseParallax()

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <HeroOrbs
                orb1X={orb1X}
                orb1Y={orb1Y}
                orb2X={orb2X}
                orb2Y={orb2Y}
                gradientColors={gradientColors}
            />

            {/* Main content wrapper for proper vertical stacking */}
            <div className="relative z-10 flex flex-col items-center">
                <HeroContent gradientColors={gradientColors} />

                <HeroActions
                    gradientColors={gradientColors}
                    contactInfo={{ email, github, linkedin }}
                />
            </div>

            {/* Scroll Indicator - positioned relative to section */}
            <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-600 cursor-pointer z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                onClick={() => {
                    document
                        .getElementById('about')
                        ?.scrollIntoView({ behavior: 'smooth' })
                }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">Scroll Down</span>
                    <ArrowDown className="w-6 h-6" />
                </div>
            </motion.div>
        </section>
    )
}

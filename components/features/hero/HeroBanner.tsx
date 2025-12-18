'use client'

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

            <HeroContent gradientColors={gradientColors} />

            <HeroActions
                gradientColors={gradientColors}
                contactInfo={{ email, github, linkedin }}
            />
        </section>
    )
}

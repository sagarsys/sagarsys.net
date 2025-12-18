'use client'

import { motion } from 'framer-motion'
import { useColorGradient } from '@/hooks/useColorGradient'
import GradientText from './GradientText'

import { useHashNavigation } from './HashNavigationProvider'

interface SectionHeadingProps {
    title: string
    subtitle?: string
    centered?: boolean
    skipAnimation?: boolean
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    skipAnimation = false,
}: SectionHeadingProps) {
    const { colors, mounted } = useColorGradient()
    const { instantAnimations } = useHashNavigation()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    return (
        <motion.div
            className={
                centered ? 'text-center mb-16 md:mb-24' : 'mb-16 md:mb-24'
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: instantAnimations ? 0 : 0.6 }}
        >
            <div
                className={`relative ${
                    centered ? 'flex flex-col items-center' : ''
                }`}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-2">
                    <GradientText
                        gradientColors={gradientColors}
                        className="transition-all duration-1000"
                    >
                        {title}
                    </GradientText>
                </h2>

                {/* Fixed width animated underline */}
                <motion.div
                    className="h-2 rounded-full mb-6 w-48 md:w-64"
                    style={{
                        background: `linear-gradient(90deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </div>

            {subtitle && (
                <p className="text-lg md:text-xl text-gray-400">{subtitle}</p>
            )}
        </motion.div>
    )
}

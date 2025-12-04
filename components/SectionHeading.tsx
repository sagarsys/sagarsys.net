'use client'

import { motion } from 'framer-motion'
import { useColorGradient } from '@/hooks/useColorGradient'

interface SectionHeadingProps {
    title: string
    subtitle?: string
    centered?: boolean
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
}: SectionHeadingProps) {
    const { colors } = useColorGradient()

    return (
        <motion.div
            className={
                centered ? 'text-center mb-16 md:mb-24' : 'mb-16 md:mb-24'
            }
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
        >
            <div
                className={`relative ${
                    centered ? 'flex flex-col items-center' : ''
                }`}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-2">
                    <span
                        className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000"
                        style={{
                            backgroundImage: `linear-gradient(135deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
                        }}
                    >
                        {title}
                    </span>
                </h2>

                {/* Fixed width animated underline - centered under heading */}
                <motion.div
                    className="h-2 rounded-full mb-6 w-48 md:w-64"
                    style={{
                        background: `linear-gradient(90deg, ${colors.from}, ${colors.via}, ${colors.to})`,
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

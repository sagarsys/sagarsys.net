'use client'

import { motion } from 'framer-motion'

interface GradientTextProps {
    children: React.ReactNode
    gradientColors: { from: string; via: string; to: string }
    animate?: boolean
    className?: string
}

export default function GradientText({
    children,
    gradientColors,
    animate = false,
    className = '',
}: GradientTextProps) {
    const baseClasses = `bg-gradient-to-r bg-clip-text text-transparent ${className}`

    if (animate) {
        return (
            <motion.span
                className={`inline-block ${baseClasses}`}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    backgroundImage: `linear-gradient(90deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to}, ${gradientColors.from})`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {children}
            </motion.span>
        )
    }

    return (
        <span
            className={baseClasses}
            style={{
                backgroundImage: `linear-gradient(135deg, ${gradientColors.from} 0%, ${gradientColors.via} 50%, ${gradientColors.to} 100%)`,
            }}
        >
            {children}
        </span>
    )
}

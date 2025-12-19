'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import GradientText from '@/components/shared/animations/GradientText'

interface HeroContentProps {
    gradientColors: { from: string; via: string; to: string }
}

/**
 * HeroContent component
 *
 * Main text content for hero banner (title, subtitle, tech stack)
 */
export default function HeroContent({ gradientColors }: HeroContentProps) {
    return (
        <motion.div
            className="max-w-5xl mx-auto px-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
        >
            {/* Greeting */}
            <motion.p
                className="text-secondary text-xl md:text-2xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Hi there 👋 &nbsp; I'm
            </motion.p>

            {/* Name */}
            <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <GradientText
                    gradientColors={gradientColors}
                    className="transition-all duration-1000"
                >
                    Sagar Sawuck
                </GradientText>
            </motion.h1>

            {/* Title & Description */}
            <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-8 md:mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <motion.span
                    className="inline-block"
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
                    Senior Fullstack Developer
                </motion.span>{' '}
                with 10+ years of experience. I build{' '}
                <GradientText gradientColors={gradientColors} animate>
                    exceptional
                </GradientText>{' '}
                digital experiences{' '}
                <motion.span
                    className="inline-block"
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
                    for people.
                </motion.span>
            </motion.h2>

            {/* Tech Stack Pills */}
            <motion.div
                className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
            >
                {['TypeScript', 'React', 'Next.js', 'Node.js', 'AWS'].map(
                    (tech, i) => (
                        <motion.span
                            key={tech}
                            className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium border border-slate-700/50 shadow-sm hover:shadow-md transition-all cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 1.8 + i * 0.15,
                                duration: 0.5,
                            }}
                            whileHover={{
                                y: -2,
                                boxShadow: `0 10px 30px ${gradientColors.via}30`,
                            }}
                        >
                            {tech}
                        </motion.span>
                    )
                )}
            </motion.div>
        </motion.div>
    )
}

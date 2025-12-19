'use client'

import { motion, MotionValue } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface HeroOrbsProps {
    orb1X: MotionValue<number>
    orb1Y: MotionValue<number>
    orb2X: MotionValue<number>
    orb2Y: MotionValue<number>
    gradientColors: { from: string; via: string; to: string }
}

/**
 * HeroOrbs component
 *
 * Animated background orbs with mouse parallax effect
 */
export default function HeroOrbs({
    orb1X,
    orb1Y,
    orb2X,
    orb2Y,
    gradientColors,
}: HeroOrbsProps) {
    return (
        <>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Animated Orbs */}
            <motion.div
                className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
                style={{ x: orb1X, y: orb1Y }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
                style={{ x: orb2X, y: orb2Y }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Floating Sparkles */}
            <motion.div
                className="absolute top-1/4 right-1/4 opacity-20"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <Sparkles className="w-16 h-16 text-purple-500" />
            </motion.div>
        </>
    )
}

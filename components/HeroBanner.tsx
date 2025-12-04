'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Download, ArrowDown, Sparkles } from 'lucide-react'
import { useEffect } from 'react'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { useColorGradient } from '@/hooks/useColorGradient'
import SocialLinks from './SocialLinks'

interface HeroBannerProps {
    email?: string
    github?: string
    linkedin?: string
}

export default function HeroBanner({
    email = 'sagar.sawuck@gmail.com',
    github = 'https://github.com/sagarsys',
    linkedin = 'https://linkedin.com/in/sagarsys/',
}: HeroBannerProps) {
    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
    const windowHeight =
        typeof window !== 'undefined' ? window.innerHeight : 1080

    const orb1X = useTransform(mouseX, [0, windowWidth], [-20, 20])
    const orb1Y = useTransform(mouseY, [0, windowHeight], [-20, 20])
    const orb2X = useTransform(mouseX, [0, windowWidth], [20, -20])
    const orb2Y = useTransform(mouseY, [0, windowHeight], [20, -20])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    const handleDownloadCV = () => {
        window.open('/assets/Sagar-Sawuck-CV-2025.pdf', '_blank')
    }

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

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

            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.p
                    className="text-secondary text-lg md:text-xl mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <span
                        className="bg-gradient-to-r bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-1000 inline-block"
                        style={{
                            backgroundImage: `linear-gradient(135deg, ${gradientColors.from} 0%, ${gradientColors.via} 50%, ${gradientColors.to} 100%)`,
                        }}
                    >
                        Sagar Sawuck
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    I build{' '}
                    <motion.span
                        className="inline-block"
                        animate={{
                            backgroundPosition: [
                                '0% 50%',
                                '100% 50%',
                                '0% 50%',
                            ],
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
                        exceptional
                    </motion.span>{' '}
                    digital experiences
                </motion.h2>

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

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
                >
                    <motion.button
                        onClick={handleDownloadCV}
                        className="relative inline-flex items-center gap-3 px-8 py-4 backdrop-blur-md rounded-full border shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
                            borderColor: gradientColors.via,
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Download className="w-5 h-5 text-white relative z-10 group-hover:animate-bounce" />
                        <span className="font-semibold text-white relative z-10">
                            Download CV
                        </span>

                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-200%', '200%'] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear',
                                repeatDelay: 1,
                            }}
                        />
                    </motion.button>

                    <motion.button
                        onClick={scrollToProjects}
                        className="inline-flex items-center gap-2 px-8 py-4 text-gray-300 hover:text-secondary transition-colors font-semibold"
                        whileHover={{ x: 5 }}
                    >
                        View Projects
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>

                {email && github && linkedin && (
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.8 }}
                    >
                        <SocialLinks
                            contactInfo={{ email, github, linkedin } as any}
                            essentialsOnly={true}
                            size="sm"
                        />
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                onClick={() => {
                    const about = document.getElementById('about')
                    about?.scrollIntoView({ behavior: 'smooth' })
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

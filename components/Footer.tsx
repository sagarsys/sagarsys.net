'use client'

import { motion } from 'framer-motion'
import { useColorGradient } from '@/hooks/useColorGradient'
import SocialLinks from './SocialLinks'
import GradientText from './GradientText'
import type { ContactInfo } from '@/types'

interface FooterProps {
    contactInfo?: ContactInfo
}

export default function Footer({ contactInfo }: FooterProps) {
    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    return (
        <footer className="relative py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                {/* Social Links - Essentials only */}
                {contactInfo && (
                    <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SocialLinks
                            contactInfo={contactInfo}
                            essentialsOnly={true}
                            size="md"
                        />
                    </motion.div>
                )}

                {/* Copyright */}
                <motion.div
                    className="text-center text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="mb-2">
                        Designed & Built by{' '}
                        <GradientText
                            gradientColors={gradientColors}
                            className="font-semibold transition-all duration-1000"
                            animate
                        >
                            Sagar Sawuck
                        </GradientText>
                    </p>
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    )
}

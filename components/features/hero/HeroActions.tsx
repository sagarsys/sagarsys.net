'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { trackDownload } from '@/lib/analytics'
import SocialLinks from '@/components/features/contact/SocialLinks'
import type { ContactInfo } from '@/types'

interface HeroActionsProps {
    gradientColors: { from: string; via: string; to: string }
    contactInfo?: Partial<ContactInfo>
}

/**
 * HeroActions component
 *
 * Action buttons (Download CV, View Projects) and social links
 */
export default function HeroActions({
    gradientColors,
    contactInfo,
}: HeroActionsProps) {
    const handleDownloadCV = () => {
        trackDownload('Sagar-Sawuck-CV-Feb-26.pdf', 'pdf')
        window.open('/assets/Sagar-Sawuck-CV-Feb-26.pdf', '_blank')
    }

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* Action Buttons */}
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

            {/* Social Links */}
            {contactInfo?.email &&
                contactInfo?.github &&
                contactInfo?.linkedin && (
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.8 }}
                    >
                        <SocialLinks
                            contactInfo={contactInfo as any}
                            essentialsOnly={true}
                            size="sm"
                        />
                    </motion.div>
                )}
        </>
    )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useColorGradient } from '@/hooks/useColorGradient'
import { trackClick } from '@/lib/analytics'
import SocialLinks from '@/components/features/contact/SocialLinks'
import GradientText from '@/components/shared/animations/GradientText'
import type { ContactInfo } from '@/types'
import { Building2 } from 'lucide-react'

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
                {/* 3-Column Layout: KVK | Socials | Copyright */}
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.2fr] gap-8 items-start">
                    {/* Left: Business Information */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {contactInfo &&
                            (contactInfo.kvk || contactInfo.vat) && (
                                <div className="space-y-3">
                                    {contactInfo.tradeName && (
                                        <div className="flex items-start gap-2 text-gray-300 text-sm justify-center md:justify-start">
                                            <Building2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="font-medium leading-snug">
                                                {contactInfo.tradeName}
                                            </span>
                                        </div>
                                    )}
                                    <div className="space-y-1.5 text-sm text-gray-400">
                                        {contactInfo.kvk && (
                                            <p>
                                                <span className="text-gray-500">
                                                    KVK:
                                                </span>{' '}
                                                {contactInfo.kvk}
                                            </p>
                                        )}
                                        {contactInfo.vat && (
                                            <p>
                                                <span className="text-gray-500">
                                                    BTW/VAT:
                                                </span>{' '}
                                                {contactInfo.vat}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                    </motion.div>

                    {/* Center: Social Links */}
                    {contactInfo && (
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <SocialLinks
                                contactInfo={contactInfo}
                                essentialsOnly={true}
                                size="md"
                            />
                        </motion.div>
                    )}

                    {/* Right: Copyright and Links */}
                    <motion.div
                        className="text-sm text-gray-400 flex flex-col items-center md:items-end"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="mb-3 text-center md:text-right">
                            Designed & Built by{' '}
                            <GradientText
                                gradientColors={gradientColors}
                                className="font-semibold transition-all duration-1000"
                                animate
                            >
                                Sagar Sawuck
                            </GradientText>
                        </p>
                        <div className="flex flex-col items-center md:items-end gap-2 text-xs mb-3">
                            <Link
                                href="/privacy"
                                className="text-secondary hover:text-orange-400 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <button
                                onClick={() => {
                                    trackClick('cookie_preferences_reset', {
                                        location: 'footer',
                                    })
                                    localStorage.removeItem('cookie-consent')
                                    window.location.reload()
                                }}
                                className="text-secondary hover:text-orange-400 transition-colors cursor-pointer"
                            >
                                Cookie Preferences
                            </button>
                        </div>
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

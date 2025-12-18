'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useColorGradient } from '@/hooks/useColorGradient'
import SocialLinks from './SocialLinks'
import GradientText from './GradientText'
import type { ContactInfo } from '@/types'
import { Building2, Mail } from 'lucide-react'

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

                {/* Business Information */}
                {contactInfo && (contactInfo.kvk || contactInfo.vat) && (
                    <motion.div
                        className="flex flex-col items-center mb-8 space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {contactInfo.tradeName && (
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Building2 className="w-4 h-4 text-secondary" />
                                <span>{contactInfo.tradeName}</span>
                            </div>
                        )}
                        {contactInfo.email && (
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-secondary" />
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="hover:text-secondary transition-colors"
                                >
                                    {contactInfo.email}
                                </a>
                            </div>
                        )}
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                            {contactInfo.kvk && (
                                <span>KVK: {contactInfo.kvk}</span>
                            )}
                            {contactInfo.vat && (
                                <span>BTW/VAT: {contactInfo.vat}</span>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Copyright and Links */}
                <motion.div
                    className="text-center text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="mb-3">
                        Designed & Built by{' '}
                        <GradientText
                            gradientColors={gradientColors}
                            className="font-semibold transition-all duration-1000"
                            animate
                        >
                            Sagar Sawuck
                        </GradientText>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mb-3 text-xs">
                        <Link
                            href="/privacy"
                            className="hover:text-secondary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-gray-600">|</span>
                        <button
                            onClick={() => {
                                localStorage.removeItem('cookie-consent')
                                window.location.reload()
                            }}
                            className="hover:text-secondary transition-colors cursor-pointer"
                        >
                            Cookie Preferences
                        </button>
                    </div>
                    <p className="text-xs">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

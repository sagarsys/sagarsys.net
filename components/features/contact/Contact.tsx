'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/shared/layout/SectionHeading'
import EmailCard from './EmailCard'
import ContactForm from './ContactForm'
import SocialLinks from '@/components/features/contact/SocialLinks'
import { useColorGradient } from '@/hooks/useColorGradient'
import { useHashNavigation } from './HashNavigationProvider'
import type { ContactInfo } from '@/types'

interface ContactProps {
    contactInfo?: ContactInfo
}

export default function Contact({ contactInfo }: ContactProps) {
    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    const email = contactInfo?.email || 'sagar.sawuck@gmail.com'
    const { instantAnimations } = useHashNavigation()

    return (
        <section id="contact" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Let's build something amazing together"
                />

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: instantAnimations ? 0 : 0.6 }}
                    >
                        <EmailCard
                            email={email}
                            gradientColors={gradientColors}
                        />

                        {/* Business Details */}
                        {contactInfo &&
                            (contactInfo.kvk || contactInfo.vat) && (
                                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md">
                                    <p className="text-sm text-gray-400 mb-4">
                                        Business Information
                                    </p>
                                    <div className="space-y-2 text-sm text-gray-300">
                                        {contactInfo.tradeName && (
                                            <p>
                                                <span className="text-gray-400">
                                                    Trade Name:
                                                </span>{' '}
                                                <span className="text-white font-medium">
                                                    {contactInfo.tradeName}
                                                </span>
                                            </p>
                                        )}
                                        {contactInfo.kvk && (
                                            <p>
                                                <span className="text-gray-400">
                                                    KVK:
                                                </span>{' '}
                                                {contactInfo.kvk}
                                            </p>
                                        )}
                                        {contactInfo.vat && (
                                            <p>
                                                <span className="text-gray-400">
                                                    BTW/VAT:
                                                </span>{' '}
                                                {contactInfo.vat}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                        {/* Social Links - All platforms */}
                        {contactInfo && (
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md">
                                <p className="text-sm text-gray-400 mb-4">
                                    Connect with me
                                </p>
                                <SocialLinks
                                    contactInfo={contactInfo}
                                    essentialsOnly={false}
                                    size="md"
                                />
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <ContactForm
                        email={email}
                        gradientColors={gradientColors}
                        instantAnimations={instantAnimations}
                    />
                </div>
            </div>
        </section>
    )
}

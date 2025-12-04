'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import EmailCard from './EmailCard'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'
import { useColorGradient } from '@/hooks/useColorGradient'
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
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <EmailCard
                            email={email}
                            gradientColors={gradientColors}
                        />

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
                    />
                </div>
            </div>
        </section>
    )
}

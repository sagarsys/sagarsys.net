'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useColorGradient } from '@/hooks/useColorGradient'
import type { ContactInfo } from '@/types'

const socialIcons: Record<string, React.FC<{ className?: string }>> = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
}

interface FooterProps {
    contactInfo?: ContactInfo
}

export default function Footer({ contactInfo }: FooterProps) {
    const { colors, mounted } = useColorGradient()
    const gradientColors = mounted
        ? colors
        : { from: '#a78bfa', via: '#f472b6', to: '#a78bfa' }

    const socialLinks = contactInfo
        ? [
              { name: 'GitHub', key: 'github', url: contactInfo.github },
              { name: 'LinkedIn', key: 'linkedin', url: contactInfo.linkedin },
              {
                  name: 'Email',
                  key: 'email',
                  url: `mailto:${contactInfo.email}`,
              },
          ]
        : []

    return (
        <footer className="relative py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                {/* Social Links */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {socialLinks.map((social, index) => {
                        const Icon = socialIcons[social.key]
                        if (!Icon) return null

                        return (
                            <motion.a
                                key={social.key}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:shadow-lg transition-all group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                title={social.name}
                                aria-label={social.name}
                            >
                                <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </motion.a>
                        )
                    })}
                </motion.div>

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
                        <span
                            className="font-semibold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000"
                            style={{
                                backgroundImage: `linear-gradient(90deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`,
                            }}
                        >
                            Sagar Sawuck
                        </span>
                    </p>
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    )
}

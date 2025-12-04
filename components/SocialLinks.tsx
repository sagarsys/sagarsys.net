'use client'

import { motion } from 'framer-motion'
import { getSocialLinks, getEssentialLinks } from '@/config/social-links'
import type { ContactInfo } from '@/types'

interface SocialLinksProps {
    contactInfo: ContactInfo
    essentialsOnly?: boolean
    size?: 'sm' | 'md' | 'lg'
    layout?: 'inline' | 'grid'
    showLabels?: boolean
}

export default function SocialLinks({
    contactInfo,
    essentialsOnly = true,
    size = 'md',
    layout = 'inline',
    showLabels = false,
}: SocialLinksProps) {
    const links = essentialsOnly
        ? getEssentialLinks(contactInfo)
        : getSocialLinks(contactInfo)

    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-12 h-12',
        lg: 'w-14 h-14',
    }

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    }

    const containerClass =
        layout === 'grid'
            ? 'grid grid-cols-4 gap-3'
            : 'flex flex-wrap justify-start gap-3'

    return (
        <div className={containerClass}>
            {links.map((social, index) => {
                const Icon = social.icon

                return (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                            sizeClasses[size]
                        } rounded-full bg-slate-700 text-gray-300 flex items-center justify-center transition-all ${
                            social.hoverColor
                        } ${showLabels ? 'gap-2 px-4 w-auto' : ''}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        aria-label={social.name}
                        title={social.name}
                    >
                        <Icon className={iconSizes[size]} />
                        {showLabels && (
                            <span className="text-sm font-medium">
                                {social.name}
                            </span>
                        )}
                    </motion.a>
                )
            })}
        </div>
    )
}

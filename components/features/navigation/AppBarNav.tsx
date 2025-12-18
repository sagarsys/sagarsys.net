'use client'

import { motion } from 'framer-motion'
import { navItems, isNavItemActive, type NavItem } from './navItems'

interface AppBarNavProps {
    currentPath: string
    activeSection: string
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        navItem: string,
        href: string
    ) => void
}

/**
 * AppBarNav component
 *
 * Desktop navigation menu
 */
export default function AppBarNav({
    currentPath,
    activeSection,
    onItemClick,
}: AppBarNavProps) {
    return (
        <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
                const isHashLink = item.href.includes('#')
                const isExternalLink =
                    item.href.startsWith('/') &&
                    item.href !== '/' &&
                    !isHashLink
                const isActive = isNavItemActive(
                    item,
                    currentPath,
                    activeSection
                )

                return (
                    <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={
                            isExternalLink
                                ? undefined
                                : (event) =>
                                      onItemClick(event, item.name, item.href)
                        }
                        className={`flex items-center gap-2 px-4 py-2 transition-colors cursor-pointer font-medium rounded-lg hover:bg-secondary/5 ${
                            isActive
                                ? 'text-secondary bg-secondary/10'
                                : 'text-gray-300 hover:text-secondary'
                        }`}
                        whileHover={{ y: -2 }}
                    >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                    </motion.a>
                )
            })}
        </div>
    )
}

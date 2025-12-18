'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '@/components/shared/layout/Logo'
import { useHashNavigation } from '@/components/shared/layout/HashNavigationProvider'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import AppBarNav from './AppBarNav'
import AppBarMobile from './AppBarMobile'

/**
 * AppBarClient component
 *
 * Main navigation bar with responsive desktop and mobile menus
 */
export default function AppBarClient() {
    const [isOpen, setIsOpen] = useState(false)
    const { activeSection, currentPath } = useHashNavigation()
    const isVisible = useScrollVisibility({ threshold: 100, minDistance: 5 })

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        navItem: string,
        href: string
    ) => {
        event.preventDefault()
        setIsOpen(false)

        // Check if we're on the homepage already
        if (window.location.pathname === '/') {
            // Already on homepage - smooth scroll to section
            const anchor = document.getElementById(navItem)
            if (anchor) {
                const navBarHeight = 60
                const isMobileView = window.innerWidth < 768
                const scrollY = isMobileView
                    ? anchor.offsetTop
                    : anchor.offsetTop - navBarHeight
                window.scrollTo({ top: scrollY, behavior: 'smooth' })

                // Update URL hash without scrolling
                window.history.pushState(null, '', href)
            }
        } else {
            // Navigate to homepage, then scroll after load
            window.location.href = href
        }
    }

    return (
        <motion.header
            className="sticky top-0 left-0 right-0 z-50"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-sm">
                <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[60px]">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <AppBarNav
                        currentPath={currentPath}
                        activeSection={activeSection}
                        onItemClick={handleClick}
                    />

                    {/* Mobile Navigation */}
                    <AppBarMobile
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        currentPath={currentPath}
                        activeSection={activeSection}
                        onItemClick={handleClick}
                    />
                </nav>
            </div>
        </motion.header>
    )
}

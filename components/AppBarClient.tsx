'use client'

import { useState, useEffect } from 'react'
import {
    Menu,
    Home,
    User,
    Code,
    Briefcase,
    FolderOpen,
    Mail,
    BookOpen,
} from 'lucide-react'
import { motion, useScroll } from 'framer-motion'
import Logo from './Logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useHashNavigation } from './HashNavigationProvider'

export default function AppBarClient() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { scrollY } = useScroll()
    const { activeSection } = useHashNavigation()

    const navItems: Array<{
        name: string
        label: string
        icon: React.ComponentType<{ className?: string }>
        href?: string
    }> = [
        { name: 'home', label: 'Home', icon: Home, href: '/' },
        { name: 'about', label: 'About', icon: User, href: '/#about' },
        { name: 'skills', label: 'Skills', icon: Code, href: '/#skills' },
        {
            name: 'experience',
            label: 'Experience',
            icon: Briefcase,
            href: '/#experience',
        },
        {
            name: 'projects',
            label: 'Projects',
            icon: FolderOpen,
            href: '/#projects',
        },
        { name: 'blog', label: 'Blog', icon: BookOpen, href: '/blog' },
        { name: 'contact', label: 'Contact', icon: Mail, href: '/#contact' },
    ]

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            const difference = latest - lastScrollY

            if (latest < 100) {
                setIsVisible(true)
            } else if (difference > 5) {
                setIsVisible(false)
            } else if (difference < -5) {
                setIsVisible(true)
            }

            setLastScrollY(latest)
        })

        return () => unsubscribe()
    }, [scrollY, lastScrollY])

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

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const href = item.href || `#${item.name}`
                            // External link is a path change (not hash-only or homepage with hash)
                            const isHashLink = href.includes('#')
                            const isExternalLink =
                                item.href?.startsWith('/') &&
                                item.href !== '/' &&
                                !isHashLink
                            // Check if active: for blog, check pathname; for sections, check activeSection
                            const isActive = isExternalLink
                                ? window.location.pathname === href
                                : activeSection === href
                            return (
                                <motion.a
                                    key={item.name}
                                    href={href}
                                    onClick={
                                        isExternalLink
                                            ? undefined
                                            : (event) =>
                                                  handleClick(
                                                      event,
                                                      item.name,
                                                      href
                                                  )
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

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-300 hover:text-secondary"
                                    aria-label="menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[280px] bg-slate-900/95 backdrop-blur-md border-slate-700"
                            >
                                <nav
                                    className="flex flex-col space-y-2 mt-8"
                                    aria-label="mobile navigation"
                                >
                                    {navItems.map((item) => {
                                        const href =
                                            item.href || `#${item.name}`
                                        // External link is a path change (not hash-only or homepage with hash)
                                        const isHashLink = href.includes('#')
                                        const isExternalLink =
                                            item.href?.startsWith('/') &&
                                            item.href !== '/' &&
                                            !isHashLink
                                        // Check if active: for blog, check pathname; for sections, check activeSection
                                        const isActive = isExternalLink
                                            ? window.location.pathname === href
                                            : activeSection === href
                                        return (
                                            <a
                                                key={item.name}
                                                href={href}
                                                onClick={
                                                    isExternalLink
                                                        ? undefined
                                                        : (event) =>
                                                              handleClick(
                                                                  event,
                                                                  item.name,
                                                                  href
                                                              )
                                                }
                                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                                                    isActive
                                                        ? 'text-secondary bg-secondary/10'
                                                        : 'text-gray-300 hover:text-secondary hover:bg-secondary/5'
                                                }`}
                                            >
                                                <item.icon className="w-5 h-5" />
                                                <span>{item.label}</span>
                                            </a>
                                        )
                                    })}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}

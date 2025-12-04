'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Logo from './Logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function AppBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { scrollY } = useScroll()

    const navItems = [
        { name: 'about', label: 'About' },
        { name: 'skills', label: 'Skills' },
        { name: 'career', label: 'Experience' },
        { name: 'projects', label: 'Projects' },
        { name: 'contact', label: 'Contact' },
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
        navItem: string
    ) => {
        event.preventDefault()
        const anchor = document.getElementById(navItem)
        if (anchor) {
            const navBarHeight = 60
            const isMobileView = window.innerWidth < 768
            const scrollY = isMobileView
                ? anchor.offsetTop
                : anchor.offsetTop - navBarHeight
            window.scrollTo({ top: scrollY, behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    className="fixed top-0 left-0 right-0 z-50"
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50">
                        <nav className="max-w-7xl mx-auto flex items-center px-6 h-[60px]">
                            {/* Mobile menu button */}
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="mr-2 text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary md:hidden"
                                        aria-label="menu"
                                    >
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="left"
                                    className="w-[250px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-gray-200 dark:border-slate-700"
                                >
                                    <nav
                                        className="flex flex-col space-y-1 mt-8"
                                        aria-label="mobile navigation"
                                    >
                                        {navItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={`#${item.name}`}
                                                onClick={(event) =>
                                                    handleClick(
                                                        event,
                                                        item.name
                                                    )
                                                }
                                                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all font-medium"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                </SheetContent>
                            </Sheet>

                            {/* Logo */}
                            <div className="flex-1 md:flex-none">
                                <Logo />
                            </div>

                            {/* Desktop navigation */}
                            <div className="hidden md:flex flex-1" />
                            <nav
                                className="hidden md:flex items-center gap-2"
                                aria-label="main site navigation"
                            >
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={`#${item.name}`}
                                        onClick={(event) =>
                                            handleClick(event, item.name)
                                        }
                                        className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors cursor-pointer font-medium rounded-lg hover:bg-secondary/5"
                                        whileHover={{ y: -2 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </nav>
                        </nav>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}

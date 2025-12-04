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
} from 'lucide-react'
import { motion, useScroll } from 'framer-motion'
import Logo from './Logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function AppBarClient() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { scrollY } = useScroll()

    const navItems = [
        { name: 'home', label: 'Home', icon: Home },
        { name: 'about', label: 'About', icon: User },
        { name: 'skills', label: 'Skills', icon: Code },
        { name: 'experience', label: 'Experience', icon: Briefcase },
        { name: 'projects', label: 'Projects', icon: FolderOpen },
        { name: 'contact', label: 'Contact', icon: Mail },
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
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={`#${item.name}`}
                                onClick={(event) =>
                                    handleClick(event, item.name)
                                }
                                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-secondary transition-colors cursor-pointer font-medium rounded-lg hover:bg-secondary/5"
                                whileHover={{ y: -2 }}
                            >
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                            </motion.a>
                        ))}
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
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={`#${item.name}`}
                                            onClick={(event) =>
                                                handleClick(event, item.name)
                                            }
                                            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all font-medium"
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.label}</span>
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </motion.header>
    )
}

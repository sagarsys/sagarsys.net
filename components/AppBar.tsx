'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function AppBar() {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = ['about', 'portfolio', 'career', 'contact']
    const navBarHeight = 60

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        navItem: string
    ) => {
        event.preventDefault()
        const anchor = document.getElementById(navItem)
        if (anchor) {
            // On mobile (sticky), no offset needed. On desktop (fixed), subtract navbar height
            const isMobileView = window.innerWidth < 768
            const scrollY = isMobileView
                ? anchor.offsetTop
                : anchor.offsetTop - navBarHeight
            window.scrollTo({ top: scrollY, behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <header className="sticky md:fixed top-0 left-0 right-0 z-50 bg-primary">
            <nav className="flex items-center px-4 h-[60px]">
                {/* Mobile menu button */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-1 text-white hover:text-white hover:bg-primary/80 md:hidden"
                            aria-label="menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-[250px] bg-primary border-primary"
                    >
                        <nav
                            className="flex flex-col space-y-1"
                            aria-label="mobile navigation"
                        >
                            {navItems.map((navItem) => (
                                <a
                                    key={navItem}
                                    href={`#${navItem}`}
                                    onClick={(event) =>
                                        handleClick(event, navItem)
                                    }
                                    className="block px-4 py-2 text-white hover:text-secondary transition-colors cursor-pointer uppercase"
                                >
                                    {navItem}
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
                    className="hidden md:flex items-center"
                    aria-label="main site navigation"
                >
                    {navItems.map((navItem) => (
                        <a
                            key={navItem}
                            href={`#${navItem}`}
                            onClick={(event) => handleClick(event, navItem)}
                            className="px-4 py-2 text-white hover:text-secondary transition-colors cursor-pointer uppercase"
                        >
                            {navItem}
                        </a>
                    ))}
                </nav>
            </nav>
        </header>
    )
}

'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/shared/ui/sheet'
import { Button } from '@/components/shared/ui/button'
import { Menu } from 'lucide-react'
import { navItems, isNavItemActive } from './navItems'

interface AppBarMobileProps {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    currentPath: string
    activeSection: string
    onItemClick: (
        event: React.MouseEvent<HTMLAnchorElement>,
        navItem: string,
        href: string
    ) => void
}

/**
 * AppBarMobile component
 *
 * Mobile navigation drawer
 */
export default function AppBarMobile({
    isOpen,
    setIsOpen,
    currentPath,
    activeSection,
    onItemClick,
}: AppBarMobileProps) {
    return (
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
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={
                                        isExternalLink
                                            ? undefined
                                            : (event) =>
                                                  onItemClick(
                                                      event,
                                                      item.name,
                                                      item.href
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
    )
}

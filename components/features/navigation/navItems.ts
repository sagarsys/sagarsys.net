/**
 * Navigation items configuration
 *
 * Centralized navigation structure for app bar
 */

import {
    Home,
    User,
    Code,
    Briefcase,
    FolderOpen,
    Mail,
    BookOpen,
    LucideIcon,
} from 'lucide-react'

export interface NavItem {
    name: string
    label: string
    icon: LucideIcon
    href: string
}

export const navItems: NavItem[] = [
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

/**
 * Check if a nav item is active
 */
export function isNavItemActive(
    item: NavItem,
    currentPath: string,
    activeSection: string | null
): boolean {
    const { href } = item
    const isHashLink = href.includes('#')
    const isExternalLink = href.startsWith('/') && href !== '/' && !isHashLink

    if (isExternalLink) {
        return currentPath.startsWith(href)
    }

    if (href === '/') {
        return currentPath === '/' && !activeSection
    }

    return activeSection === href
}

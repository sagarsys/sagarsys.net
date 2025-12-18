'use client'

import { createContext, useContext, useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface HashNavigationContextType {
    instantAnimations: boolean
    targetHash: string | null
    activeSection: string | null
    currentPath: string
}

const HashNavigationContext = createContext<HashNavigationContextType>({
    instantAnimations: false,
    targetHash: null,
    activeSection: null,
    currentPath: '/',
})

export const useHashNavigation = () => useContext(HashNavigationContext)

/**
 * Provider that handles hash navigation with smooth scrolling after page load
 * Also tracks active section for nav highlighting
 */
export default function HashNavigationProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [instantAnimations, setInstantAnimations] = useState(false)
    const [targetHash, setTargetHash] = useState<string | null>(null)
    const [activeSection, setActiveSection] = useState<string | null>(null)
    const hasScrolledToHash = useRef(false)
    const pathname = usePathname() // Reactive pathname from Next.js

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Handle hash on page load - scroll after content is ready (ONCE only)
        const hash = window.location.hash
        if (hash && hash !== '#' && !hasScrolledToHash.current) {
            setTargetHash(hash)
            setActiveSection(`/${hash}`) // Store as /# format to match nav hrefs
            hasScrolledToHash.current = true

            // Wait for page to fully render, then smooth scroll
            const scrollTimer = setTimeout(() => {
                const targetId = hash.substring(1)
                const element = document.getElementById(targetId)
                if (element) {
                    const navBarHeight = 60
                    const isMobileView = window.innerWidth < 768
                    const scrollY = isMobileView
                        ? element.offsetTop
                        : element.offsetTop - navBarHeight

                    window.scrollTo({ top: scrollY, behavior: 'smooth' })
                }
            }, 300)

            return () => clearTimeout(scrollTimer)
        }
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined') return
        // Only track sections on homepage
        if (pathname !== '/') {
            setActiveSection(null)
            return
        }

        // Track active section with better logic
        const updateActiveSection = () => {
            const sections = document.querySelectorAll('section[id]')
            const scrollY = window.scrollY
            const navBarHeight = 80

            // If at the very top (before first section), show "Home" as active
            if (scrollY < 100) {
                setActiveSection(null) // null means Home is active
                return
            }

            let newActiveSection: string | null = null
            let minTop = Infinity

            sections.forEach((section) => {
                const element = section as HTMLElement
                const rect = element.getBoundingClientRect()
                const sectionTop = rect.top

                // Section top is above the threshold (in view or passed)
                // Pick the one closest to the navbar
                if (
                    sectionTop < navBarHeight + 100 &&
                    sectionTop > -rect.height + 100
                ) {
                    if (Math.abs(sectionTop) < Math.abs(minTop)) {
                        minTop = sectionTop
                        newActiveSection = `/#${section.id}`
                    }
                }
            })

            // Only update if changed
            setActiveSection((prev) =>
                newActiveSection !== prev ? newActiveSection : prev
            )
        }

        // Initial check after a delay
        const initTimer = setTimeout(updateActiveSection, 100)

        // Throttled scroll listener
        let scrollTimeout: NodeJS.Timeout
        const handleScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(updateActiveSection, 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            clearTimeout(initTimer)
            clearTimeout(scrollTimeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])

    return (
        <HashNavigationContext.Provider
            value={{
                instantAnimations,
                targetHash,
                activeSection,
                currentPath: pathname,
            }}
        >
            {children}
        </HashNavigationContext.Provider>
    )
}

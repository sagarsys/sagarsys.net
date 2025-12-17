'use client'

import { createContext, useContext, useEffect, useState, useRef } from 'react'

interface HashNavigationContextType {
    instantAnimations: boolean
    targetHash: string | null
    activeSection: string | null
}

const HashNavigationContext = createContext<HashNavigationContextType>({
    instantAnimations: false,
    targetHash: null,
    activeSection: null,
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

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Handle hash on page load - scroll after content is ready (ONCE only)
        const hash = window.location.hash
        if (hash && hash !== '#' && !hasScrolledToHash.current) {
            setTargetHash(hash)
            setActiveSection(hash)
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

        // Track active section with better logic
        const updateActiveSection = () => {
            const sections = document.querySelectorAll('section[id]')
            const scrollPos = window.scrollY + 200 // Generous offset
            const windowHeight = window.innerHeight

            let newActiveSection: string | null = null
            let minDistance = Infinity

            sections.forEach((section) => {
                const element = section as HTMLElement
                const rect = element.getBoundingClientRect()
                const distance = Math.abs(rect.top)

                // Section is in viewport and closest to top
                if (
                    rect.top < windowHeight &&
                    rect.bottom > 0 &&
                    distance < minDistance
                ) {
                    minDistance = distance
                    newActiveSection = `#${section.id}`
                }
            })

            if (newActiveSection && newActiveSection !== activeSection) {
                setActiveSection(newActiveSection)
            }
        }

        // Initial check after a delay
        const initTimer = setTimeout(updateActiveSection, 100)

        // Throttled scroll listener
        let scrollTimeout: NodeJS.Timeout
        const handleScroll = () => {
            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(updateActiveSection, 150)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            clearTimeout(initTimer)
            clearTimeout(scrollTimeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [activeSection])

    return (
        <HashNavigationContext.Provider
            value={{ instantAnimations, targetHash, activeSection }}
        >
            {children}
        </HashNavigationContext.Provider>
    )
}

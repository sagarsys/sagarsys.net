'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView, trackScrollDepth } from '@/lib/analytics'

/**
 * EngagementTracker component
 *
 * Tracks page views and scroll depth for analytics
 * Should be included once in the root layout
 */
export default function EngagementTracker() {
    const pathname = usePathname()
    const scrollMilestones = useRef<Set<number>>(new Set())
    const lastPathname = useRef<string>('')

    // Track page views on route change
    useEffect(() => {
        if (pathname !== lastPathname.current) {
            lastPathname.current = pathname

            // Track page view
            trackPageView({
                page_path: pathname,
                page_title: document.title,
                page_location: window.location.href,
            })

            // Reset scroll milestones for new page
            scrollMilestones.current = new Set()
        }
    }, [pathname])

    // Track scroll depth
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = Math.round((scrollTop / docHeight) * 100)

            // Track at 25%, 50%, 75%, 90% milestones
            const milestones = [25, 50, 75, 90]

            milestones.forEach((milestone) => {
                if (
                    scrollPercent >= milestone &&
                    !scrollMilestones.current.has(milestone)
                ) {
                    scrollMilestones.current.add(milestone)
                    trackScrollDepth(milestone)
                }
            })
        }

        // Throttle scroll handler
        let ticking = false
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', throttledScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', throttledScroll)
        }
    }, [pathname])

    return null
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { handleScrollToTop } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'

interface ScrollTopProps {
    children?: React.ReactNode
}

export default function ScrollTop({ children }: ScrollTopProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        let lastScrollY = window.scrollY
        let ticking = false

        const toggleVisibility = () => {
            const scrollY = window.scrollY
            // Use hysteresis: show at 100, hide when back to top
            if (scrollY > 100 && scrollY > lastScrollY) {
                setIsVisible(true)
            } else if (scrollY <= 100) {
                setIsVisible(false)
            }
            lastScrollY = scrollY
            ticking = false
        }

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(toggleVisibility)
                ticking = true
            }
        }

        // Check initial state
        toggleVisibility()

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="fixed bottom-8 right-8 z-50"
                    onClick={handleScrollToTop}
                    role="presentation"
                >
                    {children || (
                        <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full h-10 w-10 p-0 bg-secondary hover:bg-[#e64a19] text-white shadow-lg"
                            aria-label="scroll back to top"
                        >
                            <ChevronUp className="h-4 w-4" />
                        </Button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

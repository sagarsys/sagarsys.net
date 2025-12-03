'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { handleScrollToTop } from '@/helpers/scrolling'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'

interface ScrollTopProps {
  children?: React.ReactNode
}

export default function ScrollTop({ children }: ScrollTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {children || (
            <Button
              onClick={handleScrollToTop}
              size="sm"
              className="rounded-full h-10 w-10 p-0"
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



import { useEffect, useState } from 'react'

export default function useResizer(): boolean {
  const mobileBreakpoint = 640
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < mobileBreakpoint
    }
    return false
  })

  useEffect(() => {
    function handleSizeChange() {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }

    window.addEventListener('resize', handleSizeChange)
    return () => {
      window.removeEventListener('resize', handleSizeChange)
    }
  }, [])

  return isMobile
}



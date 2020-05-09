import { useEffect, useState } from 'react'

export default function useResizer() {
    const mobileBreakpoint = 640
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < mobileBreakpoint
    )

    useEffect(() => {
        function handleSizeChange() {
            return setIsMobile(window.innerWidth < mobileBreakpoint)
        }

        window.addEventListener('resize', handleSizeChange)
        return () => {
            window.removeEventListener('resize', handleSizeChange)
        }
    }, [isMobile])

    return isMobile
}

import { useState, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core'

export default function useResizer() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('xs'))
    const [isMobile, setIsMobile] = useState(matches)

    useEffect(() => {
        function handleSizeChange() {
            return setIsMobile(matches)
        }

        window.addEventListener('resize', handleSizeChange)
        return () => {
            window.removeEventListener('resize', handleSizeChange)
        }
    }, [matches])

    return isMobile
}

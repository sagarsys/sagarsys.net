import React from 'react'
import DesktopAppBar from './DesktopAppBar'
import MobileAppBar from './MobileAppBar'
import useResizer from '../hooks/useResizer'

export default function AppBar() {
    const isMobile = useResizer()
    return isMobile ? <MobileAppBar /> : <DesktopAppBar />
}

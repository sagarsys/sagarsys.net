'use client'

import Logo from './Logo'
import FlexSpacer from './FlexSpacer'
import NavBar from './NavBar'

export default function DesktopAppBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <nav className="flex items-center px-4 h-[60px]">
        <Logo />
        <FlexSpacer />
        <NavBar />
      </nav>
    </header>
  )
}



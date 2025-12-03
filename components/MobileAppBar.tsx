'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import NavBar from './NavBar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function MobileAppBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <nav className="flex items-center px-4 h-[60px]">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mr-1 text-white hover:text-white hover:bg-primary/80"
              aria-label="menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px] bg-primary border-primary">
            <NavBar onClick={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
        <div className="flex-grow">
          <Logo />
        </div>
      </nav>
    </header>
  )
}



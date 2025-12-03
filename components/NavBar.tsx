'use client'

import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'

interface NavBarProps {
  onClick?: () => void
}

export default function NavBar({ onClick }: NavBarProps) {
  const navItems = ['about', 'portfolio', 'career', 'contact']
  const isMobile = useResizer()
  const navBarHeight = 60

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, navItem: string) => {
    event.preventDefault()
    const anchor = document.getElementById(navItem)
    if (anchor) {
      const scrollY = isMobile
        ? anchor.offsetTop
        : anchor.offsetTop - navBarHeight
      window.scrollTo(0, scrollY)
      onClick?.()
    }
  }

  return (
    <nav
      className={cn(
        isMobile ? 'block w-[250px]' : 'flex',
        'list-none m-0 p-0'
      )}
      aria-label="main site navigation"
    >
      {navItems.map((navItem) => (
        <a
          key={navItem}
          href={`#${navItem}`}
          onClick={(event) => handleClick(event, navItem)}
          className="block px-4 py-2 text-white hover:text-secondary transition-colors cursor-pointer uppercase"
        >
          {navItem}
        </a>
      ))}
    </nav>
  )
}



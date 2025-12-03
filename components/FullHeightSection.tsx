'use client'

import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface FullHeightSectionProps {
  height?: string
  id?: string
  children: ReactNode
  className?: string
}

export default function FullHeightSection({
  height,
  id,
  children,
  className,
}: FullHeightSectionProps) {
  const isMobile = useResizer()

  return (
    <section
      id={id}
      className={cn(
        'h-auto',
        isMobile ? 'min-h-screen' : '',
        className
      )}
      style={height ? { height, minHeight: 'unset' } : undefined}
    >
      {children}
    </section>
  )
}



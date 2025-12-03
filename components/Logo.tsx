'use client'

import { handleScrollToTop } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface LogoProps {
    dark?: boolean
    className?: string
}

export default function Logo({ dark = false, className }: LogoProps) {
    const siteTitle = 'SAGARSYS'
    const color = dark ? '#263238' : '#ff5722'

    return (
        <a
            onClick={handleScrollToTop}
            style={{ color, cursor: 'pointer' }}
            className={cn('font-neuropol text-4xl', className)}
        >
            {siteTitle}
        </a>
    )
}

'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronLeft, Home } from 'lucide-react'

interface BreadcrumbProps {
    items: Array<{
        label: string
        href?: string
    }>
}

/**
 * Breadcrumb component
 *
 * Provides navigation breadcrumbs for better UX
 */
export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link
                href="/"
                className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
                <Home className="w-4 h-4" />
                <span>Home</span>
            </Link>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <ChevronLeft className="w-4 h-4" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-secondary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-300">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    )
}

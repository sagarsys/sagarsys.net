'use client'

import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

/**
 * Lazy-loaded MarkdownRenderer component
 *
 * Code splitting strategy: Creates a separate JavaScript chunk that only loads
 * when the component is rendered. This reduces initial bundle size by ~60KB.
 *
 * Benefits:
 * - Faster initial page load
 * - Markdown library loads on-demand
 * - Better performance for content-heavy pages
 *
 * ssr: false because this is a client component and markdown is rendered client-side
 */
const MarkdownRenderer = dynamic(() => import('./MarkdownRenderer'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center py-4">
            <Loader2 className="w-5 h-5 text-secondary animate-spin" />
        </div>
    ),
})

export default MarkdownRenderer

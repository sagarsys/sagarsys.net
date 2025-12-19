'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'

interface TagFiltersProps {
    tags: string[]
}

/**
 * TagFilters component
 *
 * Displays tags as a horizontal sticky bar above blog posts
 */
function TagFiltersContent({ tags }: TagFiltersProps) {
    const searchParams = useSearchParams()
    const activeTag = searchParams.get('tag') || undefined

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
        return params.toString()
    }

    const clearFilter = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('tag')
        return params.toString()
    }

    return (
        <div className="sticky top-20 z-20 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-3">
                {/* Active tag filter */}
                {activeTag && (
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-gray-400 font-medium">
                            Active filter:
                        </span>
                        <Link
                            href={`/blog?${clearFilter()}`}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 text-secondary rounded-lg text-sm border border-secondary/30 hover:bg-secondary/30 transition-colors"
                        >
                            <span>{activeTag}</span>
                            <X className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-2">
                            Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/blog?${createQueryString(
                                        'tag',
                                        tag
                                    )}`}
                                    className={`px-3 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                                        activeTag === tag
                                            ? 'bg-secondary/20 text-secondary border border-secondary/30'
                                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/50'
                                    }`}
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

/**
 * TagFilters wrapper with Suspense for useSearchParams
 */
export default function TagFilters(props: TagFiltersProps) {
    return (
        <Suspense
            fallback={<div className="text-gray-400">Loading filters...</div>}
        >
            <TagFiltersContent {...props} />
        </Suspense>
    )
}

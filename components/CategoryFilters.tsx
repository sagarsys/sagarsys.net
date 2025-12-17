'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'

interface CategoryFiltersProps {
    categories: string[]
}

/**
 * CategoryFilters component
 *
 * Displays categories in a vertical sidebar layout
 */
function CategoryFiltersContent({ categories }: CategoryFiltersProps) {
    const searchParams = useSearchParams()
    const activeCategory = searchParams.get('category') || undefined

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
        return params.toString()
    }

    const clearFilter = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('category')
        return params.toString()
    }

    return (
        <div className="space-y-4">
            {categories.length > 0 && (
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Categories
                    </h3>
                    <div className="space-y-2">
                        {activeCategory && (
                            <Link
                                href={`/blog?${clearFilter()}`}
                                className="flex items-center gap-2 px-3 py-2 bg-secondary/20 text-secondary rounded-lg text-sm border border-secondary/30 hover:bg-secondary/30 transition-colors"
                            >
                                <X className="w-4 h-4" />
                                Clear category
                            </Link>
                        )}
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href={`/blog?${createQueryString(
                                    'category',
                                    category
                                )}`}
                                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                    activeCategory === category
                                        ? 'bg-secondary/20 text-secondary border border-secondary/30'
                                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                                }`}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

/**
 * CategoryFilters wrapper with Suspense for useSearchParams
 */
export default function CategoryFilters(props: CategoryFiltersProps) {
    return (
        <Suspense
            fallback={<div className="text-gray-400">Loading filters...</div>}
        >
            <CategoryFiltersContent {...props} />
        </Suspense>
    )
}

import { getBlogPosts, getCategories, getTags } from '@/lib/blog'
import BlogPostsList from '@/components/BlogPostsList'
import TagFilters from '@/components/TagFilters'
import CategoryFilters from '@/components/CategoryFilters'
import AppBarClient from '@/components/AppBarClient'
import ScrollTop from '@/components/ScrollTop'
import Image from 'next/image'
import { Suspense } from 'react'

export const metadata = {
    title: 'Blog | Sagar Sawuck',
    description:
        'Articles, tutorials, and thoughts on web development, React, Next.js, and modern frontend technologies.',
}

/**
 * Blog listing page
 *
 * Displays all blog posts with filtering by category and tag
 * Note: Filtering is done client-side because static export doesn't support searchParams
 */
export default function BlogPage() {
    // Get all posts at build time (server-side)
    const posts = getBlogPosts()
    const categories = getCategories()
    const tags = getTags()

    return (
        <div className="min-h-screen relative">
            {/* Fixed elements */}
            <div id="back-to-top-anchor" className="h-0 min-h-0" />
            <AppBarClient />
            <ScrollTop />

            {/* Hero Banner */}
            <div className="relative w-full h-[50vh] md:h-[60vh] max-h-[500px] overflow-hidden mt-16">
                <Image
                    src="/images/blog/default.png"
                    alt="Blog & Articles"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Blog & Articles
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                            Thoughts, tutorials, and insights on web development
                        </p>
                    </div>
                </div>
            </div>

            {/* Page content */}
            <main className="relative z-10">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Filters - Mobile: category on top, then tags. Desktop: tags sticky, category sidebar */}
                    <div>
                        {/* Mobile: Category filter on top */}
                        <div className="lg:hidden mb-6">
                            <CategoryFilters categories={categories} />
                        </div>

                        {/* Sticky tags filter bar */}
                        <div className="mb-8">
                            <TagFilters tags={tags} />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Desktop: Sidebar with category filters */}
                            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
                                <div className="sticky top-32">
                                    <CategoryFilters categories={categories} />
                                </div>
                            </aside>

                            {/* Blog posts grid - takes remaining space */}
                            <div className="flex-1 min-w-0">
                                <Suspense
                                    fallback={
                                        <div className="text-gray-400">
                                            Loading posts...
                                        </div>
                                    }
                                >
                                    <BlogPostsList posts={posts} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

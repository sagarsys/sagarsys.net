import { getBlogPosts, getCategories, getTags } from '@/lib/blog'
import BlogPostsList from '@/components/BlogPostsList'
import TagFilters from '@/components/TagFilters'
import CategoryFilters from '@/components/CategoryFilters'
import SectionHeading from '@/components/SectionHeading'
import AppBarClient from '@/components/AppBarClient'
import ScrollTop from '@/components/ScrollTop'
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

            {/* Page content */}
            <main className="relative z-10 pt-20">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <SectionHeading
                        title="Blog & Articles"
                        subtitle="Thoughts, tutorials, and insights on web development"
                    />

                    {/* Filters - Mobile: category on top, then tags. Desktop: tags sticky, category sidebar */}
                    <div className="mt-12">
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

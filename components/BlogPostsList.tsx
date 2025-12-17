'use client'

import { useSearchParams } from 'next/navigation'
import BlogPostCard from './BlogPostCard'
import type { MarkdownContent, BlogPostFrontmatter } from '@/types'

interface BlogPostsListProps {
    posts: MarkdownContent<BlogPostFrontmatter>[]
}

/**
 * BlogPostsList component
 *
 * Client component that handles filtering blog posts based on URL search params
 * This is needed because static export doesn't support searchParams in server components
 */
export default function BlogPostsList({ posts }: BlogPostsListProps) {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const tag = searchParams.get('tag')

    // Filter posts based on search params
    let filteredPosts = posts

    if (category) {
        filteredPosts = filteredPosts.filter((post) =>
            post.frontmatter.categories?.includes(category)
        )
    }

    if (tag) {
        filteredPosts = filteredPosts.filter((post) =>
            post.frontmatter.tags?.includes(tag)
        )
    }

    // Sort by date (newest first)
    filteredPosts = filteredPosts.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date).getTime()
        const dateB = new Date(b.frontmatter.date).getTime()
        return dateB - dateA
    })

    if (filteredPosts.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No blog posts found.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
            ))}
        </div>
    )
}

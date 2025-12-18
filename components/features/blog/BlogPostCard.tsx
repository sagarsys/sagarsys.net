'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { calculateReadingTime } from '@/lib/reading-time'
import type { MarkdownContent, BlogPostFrontmatter } from '@/types'

interface BlogPostCardProps {
    post: MarkdownContent<BlogPostFrontmatter>
}

/**
 * BlogPostCard component
 *
 * Displays a blog post preview card with image, title, description, and metadata
 */
export default function BlogPostCard({ post }: BlogPostCardProps) {
    const readingTime = calculateReadingTime(post.content)
    const publishDate = new Date(post.frontmatter.date).toLocaleDateString(
        'en-US',
        {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }
    )

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:border-secondary/50"
        >
            {/* Featured image */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={post.frontmatter.image || '/images/blog/default.jpg'}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Categories */}
                {post.frontmatter.categories &&
                    post.frontmatter.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                            {post.frontmatter.categories
                                .slice(0, 2)
                                .map((category) => (
                                    <span
                                        key={category}
                                        className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs border border-secondary/30"
                                    >
                                        {category}
                                    </span>
                                ))}
                        </div>
                    )}

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                    {post.frontmatter.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.frontmatter.description}
                </p>

                {/* Meta information */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{readingTime} min read</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

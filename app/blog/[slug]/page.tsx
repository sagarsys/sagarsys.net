import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { calculateReadingTime } from '@/lib/reading-time'
import { notFound } from 'next/navigation'
import LazyMarkdownRenderer from '@/components/LazyMarkdownRenderer'
import ShareButtons from '@/components/ShareButtons'
import FloatingShareButton from '@/components/FloatingShareButton'
import FloatingBackButton from '@/components/FloatingBackButton'
import Breadcrumb from '@/components/Breadcrumb'
import ScrollTop from '@/components/ScrollTop'
import { Calendar, Clock, Tag } from 'lucide-react'
import Image from 'next/image'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

/**
 * Generate static params for all blog posts
 */
export function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

/**
 * Generate metadata for blog post
 */
export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    const heroImage = post.frontmatter.image || '/images/blog/default.jpg'

    return {
        title: `${post.frontmatter.title} | Sagar Sawuck Blog`,
        description: post.frontmatter.description,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: 'article',
            publishedTime: post.frontmatter.date,
            images: [{ url: heroImage }],
        },
    }
}

/**
 * Blog post detail page
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        notFound()
    }

    const readingTime = calculateReadingTime(post.content)
    const publishDate = new Date(post.frontmatter.date).toLocaleDateString(
        'en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    )

    const heroImage = post.frontmatter.image || '/images/blog/default.jpg'

    return (
        <div className="min-h-screen relative">
            {/* Fixed elements */}
            <div id="back-to-top-anchor" className="h-0 min-h-0" />
            <ScrollTop />

            {/* Hero Banner with Overlay */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src={heroImage}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end">
                    <div className="w-full bg-black/70 backdrop-blur-sm border-t border-slate-700/50">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {/* Categories */}
                            {post.frontmatter.categories &&
                                post.frontmatter.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.frontmatter.categories.map(
                                            (category) => (
                                                <span
                                                    key={category}
                                                    className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm border border-secondary/30"
                                                >
                                                    {category}
                                                </span>
                                            )
                                        )}
                                    </div>
                                )}

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {post.frontmatter.title}
                            </h1>

                            {/* Description */}
                            <p className="text-xl text-gray-200 mb-6">
                                {post.frontmatter.description}
                            </p>

                            {/* Meta information */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{publishDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{readingTime} min read</span>
                                </div>
                                {post.frontmatter.author && (
                                    <span>By {post.frontmatter.author}</span>
                                )}
                            </div>

                            {/* Tags */}
                            {post.frontmatter.tags &&
                                post.frontmatter.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.frontmatter.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-slate-700/50 text-gray-200 rounded-full text-sm border border-slate-600/50 flex items-center gap-1"
                                            >
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                            {/* Share buttons */}
                            <ShareButtons
                                url={`/blog/${post.slug}`}
                                title={post.frontmatter.title}
                                description={post.frontmatter.description}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Back Button - top left */}
            <FloatingBackButton href="/blog" />

            {/* Floating Share Button */}
            <FloatingShareButton
                url={`/blog/${post.slug}`}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
            />

            {/* Article content */}
            <main className="relative z-10">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Breadcrumb */}
                    <Breadcrumb
                        items={[
                            { label: 'Blog', href: '/blog' },
                            { label: post.frontmatter.title },
                        ]}
                    />

                    {/* Content */}
                    <div className="prose prose-invert max-w-none">
                        <LazyMarkdownRenderer>
                            {post.content}
                        </LazyMarkdownRenderer>
                    </div>

                    {/* Footer with share buttons */}
                    <footer className="mt-12 pt-8 border-t border-slate-700">
                        <ShareButtons
                            url={`/blog/${post.slug}`}
                            title={post.frontmatter.title}
                            description={post.frontmatter.description}
                        />
                    </footer>
                </article>
            </main>
        </div>
    )
}

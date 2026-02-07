import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { calculateReadingTime } from '@/lib/reading-time'
import { notFound } from 'next/navigation'
import LazyMarkdownRenderer from '@/components/shared/media/LazyMarkdownRenderer'
import LazyParticleBackground from '@/components/shared/animations/LazyParticleBackground'
import ShareButtons from '@/components/features/blog/ShareButtons'
import FloatingShareButton from '@/components/features/blog/FloatingShareButton'
import FloatingBackButton from '@/components/features/blog/FloatingBackButton'
import Breadcrumb from '@/components/features/navigation/Breadcrumb'
import ScrollTop from '@/components/features/navigation/ScrollTop'
import { Calendar, Clock, Tag } from 'lucide-react'
import Image from 'next/image'
import {
    generateBlogPostMetadata,
    generateArticleSchema,
    generateBreadcrumbSchema,
} from '@/lib/seo'

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

    return generateBlogPostMetadata({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        slug: post.slug,
        image: post.frontmatter.image,
        date: post.frontmatter.date,
        categories: post.frontmatter.categories,
        tags: post.frontmatter.tags,
    })
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
    const wordCount = post.content.split(/\s+/).length

    // Generate structured data
    const articleSchema = generateArticleSchema({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        url: `https://sagarsys.net/blog/${post.slug}`,
        image: heroImage,
        datePublished: post.frontmatter.date,
        author: post.frontmatter.author || 'Sagar Sawuck',
        tags: post.frontmatter.tags,
        categories: post.frontmatter.categories,
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://sagarsys.net' },
        { name: 'Blog', url: 'https://sagarsys.net/blog' },
        {
            name: post.frontmatter.title,
            url: `https://sagarsys.net/blog/${post.slug}`,
        },
    ])

    return (
        <div className="min-h-screen relative">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            {/* Fixed elements */}
            <div id="back-to-top-anchor" className="h-0 min-h-0" />
            <ScrollTop />

            {/* Particle Background */}
            <LazyParticleBackground />

            {/* Hero Banner with Overlay - pulls up under navbar for full-bleed effect */}
            <div className="relative w-full min-h-[60vh] md:min-h-[70vh] -mt-[60px] overflow-hidden">
                <Image
                    src={heroImage}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end">
                    <div className="w-full max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border-t border-slate-700/30 shadow-[0_0_30px_15px_rgba(0,0,0,0.4)] rounded-t-3xl">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
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
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
                                {post.frontmatter.title}
                            </h1>

                            {/* Description - hidden on mobile */}
                            <p className="hidden md:block text-xl text-secondary font-bold mb-6">
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

                            {/* Tags - hidden on mobile */}
                            {post.frontmatter.tags &&
                                post.frontmatter.tags.length > 0 && (
                                    <div className="hidden md:flex flex-wrap gap-2 mb-4">
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

                            {/* Share buttons - hidden on mobile (floating button available) */}
                            <div className="hidden md:block">
                                <ShareButtons
                                    url={`/blog/${post.slug}`}
                                    title={post.frontmatter.title}
                                    description={post.frontmatter.description}
                                />
                            </div>
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

                        {/* Tags - visible on mobile only */}
                        {post.frontmatter.tags &&
                            post.frontmatter.tags.length > 0 && (
                                <div className="md:hidden flex flex-wrap gap-2 mt-6">
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
                    </footer>
                </article>
            </main>
        </div>
    )
}

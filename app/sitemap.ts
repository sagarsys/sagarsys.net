import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'

// Required for static export
export const dynamic = 'force-static'

/**
 * Generate dynamic sitemap for all pages
 *
 * Includes static pages and dynamic blog posts
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sagarsys.net'

    // Static pages with their priorities
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        },
    ]

    // Dynamic blog posts
    const posts = getBlogPosts()
    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...blogPosts]
}

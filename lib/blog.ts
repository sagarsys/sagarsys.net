import { getMarkdownFiles, getMarkdownFile } from './markdown'
import type { MarkdownContent, BlogPostFrontmatter } from '@/types'

/**
 * Get all blog posts
 */
export function getBlogPosts(): MarkdownContent<BlogPostFrontmatter>[] {
    return getMarkdownFiles<BlogPostFrontmatter>('blog')
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(
    slug: string
): MarkdownContent<BlogPostFrontmatter> | null {
    return getMarkdownFile<BlogPostFrontmatter>(`blog/${slug}.md`)
}

/**
 * Get all unique categories from blog posts
 */
export function getCategories(): string[] {
    const posts = getBlogPosts()
    const categories = new Set<string>()
    posts.forEach((post) => {
        post.frontmatter.categories?.forEach((cat) => categories.add(cat))
    })
    return Array.from(categories).sort()
}

/**
 * Get all unique tags from blog posts
 */
export function getTags(): string[] {
    const posts = getBlogPosts()
    const tags = new Set<string>()
    posts.forEach((post) => {
        post.frontmatter.tags?.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(
    category: string
): MarkdownContent<BlogPostFrontmatter>[] {
    return getBlogPosts().filter((post) =>
        post.frontmatter.categories?.includes(category)
    )
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(
    tag: string
): MarkdownContent<BlogPostFrontmatter>[] {
    return getBlogPosts().filter((post) => post.frontmatter.tags?.includes(tag))
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): MarkdownContent<BlogPostFrontmatter>[] {
    return getBlogPosts()
        .filter((post) => post.frontmatter.featured)
        .slice(0, 3) // Limit to 3 featured posts
}

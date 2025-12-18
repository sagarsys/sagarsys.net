/**
 * SEO utilities
 *
 * Provides helpers for generating SEO metadata, JSON-LD structured data, and Open Graph tags
 */

import type { Metadata } from 'next'

export const SITE_CONFIG = {
    name: 'Sagar Sawuck',
    title: 'Sagar Sawuck | Senior Fullstack Developer (TypeScript)',
    description:
        'Senior Fullstack Developer (Typescript) with 10+ years of experience. Front-end specialist with full-stack capabilities. Expertise in React, Next.js, Node.js, and modern web technologies.',
    url: 'https://sagarsys.net',
    ogImage: 'https://sagarsys.net/images/sagarsys_og_img.png',
    links: {
        twitter: 'https://twitter.com/sagavortex',
        github: 'https://github.com/sagarsys',
        linkedin: 'https://linkedin.com/in/sagarsys',
    },
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string = ''): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${SITE_CONFIG.url}${cleanPath}`
}

/**
 * Generate Person JSON-LD schema
 */
export function generatePersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        image: SITE_CONFIG.ogImage,
        jobTitle: 'Senior Fullstack Developer',
        description: SITE_CONFIG.description,
        sameAs: [
            SITE_CONFIG.links.github,
            SITE_CONFIG.links.linkedin,
            SITE_CONFIG.links.twitter,
        ],
        knowsAbout: [
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'Web Development',
            'Frontend Development',
            'Backend Development',
        ],
    }
}

/**
 * Generate WebSite JSON-LD schema
 */
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        author: {
            '@type': 'Person',
            name: SITE_CONFIG.name,
        },
        inLanguage: 'en-US',
    }
}

/**
 * Generate Organization JSON-LD schema
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        logo: SITE_CONFIG.ogImage,
        sameAs: [
            SITE_CONFIG.links.github,
            SITE_CONFIG.links.linkedin,
            SITE_CONFIG.links.twitter,
        ],
    }
}

/**
 * Generate BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}

/**
 * Generate Article JSON-LD schema for blog posts
 */
export function generateArticleSchema(article: {
    title: string
    description: string
    url: string
    image?: string
    datePublished: string
    dateModified?: string
    author?: string
    tags?: string[]
    categories?: string[]
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        url: article.url,
        image: article.image || SITE_CONFIG.ogImage,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Person',
            name: article.author || SITE_CONFIG.name,
            url: SITE_CONFIG.url,
        },
        publisher: {
            '@type': 'Person',
            name: SITE_CONFIG.name,
            logo: {
                '@type': 'ImageObject',
                url: SITE_CONFIG.ogImage,
            },
        },
        keywords: [...(article.tags || []), ...(article.categories || [])].join(
            ', '
        ),
        inLanguage: 'en-US',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': article.url,
        },
    }
}

/**
 * Generate BlogPosting JSON-LD schema
 */
export function generateBlogPostingSchema(post: {
    title: string
    description: string
    url: string
    image?: string
    datePublished: string
    dateModified?: string
    author?: string
    wordCount?: number
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        url: post.url,
        image: post.image || SITE_CONFIG.ogImage,
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
        author: {
            '@type': 'Person',
            name: post.author || SITE_CONFIG.name,
        },
        publisher: {
            '@type': 'Person',
            name: SITE_CONFIG.name,
        },
        wordCount: post.wordCount,
        inLanguage: 'en-US',
    }
}

/**
 * Generate base metadata for pages
 */
export function generateBaseMetadata(
    params: {
        title?: string
        description?: string
        path?: string
        image?: string
        noIndex?: boolean
    } = {}
): Metadata {
    const {
        title = SITE_CONFIG.title,
        description = SITE_CONFIG.description,
        path = '',
        image = SITE_CONFIG.ogImage,
        noIndex = false,
    } = params

    const url = generateCanonicalUrl(path)

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        robots: noIndex
            ? {
                  index: false,
                  follow: false,
              }
            : {
                  index: true,
                  follow: true,
                  googleBot: {
                      index: true,
                      follow: true,
                      'max-video-preview': -1,
                      'max-image-preview': 'large',
                      'max-snippet': -1,
                  },
              },
        openGraph: {
            type: 'website',
            url,
            title,
            description,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
    }
}

/**
 * Generate blog post metadata
 */
export function generateBlogPostMetadata(post: {
    title: string
    description: string
    slug: string
    image?: string
    date: string
    categories?: string[]
    tags?: string[]
}): Metadata {
    const url = generateCanonicalUrl(`/blog/${post.slug}`)
    const image = post.image
        ? `${SITE_CONFIG.url}${post.image}`
        : SITE_CONFIG.ogImage

    return {
        ...generateBaseMetadata({
            title: `${post.title} | ${SITE_CONFIG.name}`,
            description: post.description,
            path: `/blog/${post.slug}`,
            image,
        }),
        keywords: [...(post.categories || []), ...(post.tags || [])],
        openGraph: {
            type: 'article',
            url,
            title: post.title,
            description: post.description,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            publishedTime: post.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [image],
        },
    }
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLd(data: Record<string, any>) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

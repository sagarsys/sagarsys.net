import { MetadataRoute } from 'next'

/**
 * Generate dynamic robots.txt
 *
 * Allows all pages to be crawled and references the sitemap
 */
export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://sagarsys.net'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}

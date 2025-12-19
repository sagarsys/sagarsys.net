/**
 * Curated list of GitHub repositories to display in projects section
 * This allows full control over which repos appear and in what order
 *
 * Usage:
 * - Add repos by their full path: "username/repo-name"
 * - Set featured: true for highlighted projects
 * - Use order to control display position (lower = first)
 * - Add custom descriptions to override GitHub descriptions
 * - Use overrides to customize title, images, or tech stack
 */

export interface CuratedGitHubProject {
    /** GitHub repo in format "owner/repo" */
    repo: string
    /** Display order (lower numbers appear first) */
    order: number
    /** Show in featured section */
    featured?: boolean
    /** Custom description to override GitHub description */
    customDescription?: string
    /** Override fields fetched from GitHub */
    overrides?: {
        title?: string
        tech?: string[]
        images?: {
            thumb?: string
            mobile?: string
            tablet?: string
            desktop?: string
        }
        /** Before images for comparison (e.g., redesign projects) */
        beforeImages?: {
            desktop?: string
            mobile?: string
            description?: string
        }
    }
}

/**
 * Curated GitHub projects to display on the website
 * Add your repos here to include them in the projects showcase
 */
export const CURATED_GITHUB_PROJECTS: CuratedGitHubProject[] = [
    {
        repo: 'sagarsys/sagarsys.net',
        order: 3,
        featured: true,
        customDescription:
            'Personal portfolio website built with Next.js 15, featuring glassmorphism design, dynamic color theming, and framer-motion animations.',
        overrides: {
            title: 'Sagarsys Portfolio Website',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            images: {
                thumb: 'images/github/sagarsys.net.png',
                mobile: 'images/github/sagarsys.net_mobile.png',
                desktop: 'images/github/sagarsys.net.png',
            },
        },
    },
    {
        repo: 'sagarsys/tomato-farm',
        order: 7,
        featured: true,
        overrides: {
            title: 'Tomato Farm',
            tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            images: {
                thumb: 'images/github/tomato-farm.png',
                desktop: 'images/github/tomato-farm.png',
            },
        },
    },
    {
        repo: 'sagarsys/sagavortex',
        order: 6,
        featured: true,
        overrides: {
            title: 'Sagavortex Art Gallery',
            tech: ['React', 'TypeScript', 'Material UI', 'Next JS'],
            images: {
                thumb: 'images/github/sagavortex.png',
                mobile: 'images/github/sagavortex_mobile.png',
                desktop: 'images/github/sagavortex.png',
            },
        },
    },
    {
        repo: 'sagarsys/bengalivo-redesign',
        order: 5,
        featured: true,
        customDescription: `**Complete website redesign and migration** from WordPress to Next.js for a Bengal cat breeder.

## My Role
I handled the entire project end-to-end: requirements gathering, UI/UX design, frontend development, backend implementation, and deployment.

## Key Highlights
- **Full-stack development**: Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui
- **Admin dashboard**: Custom CMS with SQLite database using Prisma ORM and Google OAuth authentication
- **Internationalization**: Multi-language support (English/Dutch) with react-i18next
- **SEO optimized**: Comprehensive meta tags, structured data, and sitemap generation
- **Responsive design**: Fully responsive with beautiful Framer Motion animations
- **Modern architecture**: Server components, API routes, and optimized image loading

## The Problem
The original WordPress site had a **completely broken mobile experience** (see before screenshot) and outdated design that didn't reflect the premium quality of the Bengal cat breeder.

## The Solution
A complete redesign with a modern black and gold theme, elegant typography, and smooth animations that creates a premium feel matching the quality of the cats being bred.`,
        overrides: {
            title: 'Bengalivo - Complete Website Redesign',
            tech: [
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'shadcn/ui',
                'Prisma',
                'SQLite',
                'NextAuth.js',
                'Framer Motion',
                'i18n',
            ],
            images: {
                thumb: 'images/github/bengalivo.png',
                mobile: 'images/github/bengalivo-mobile.png',
                desktop: 'images/github/bengalivo-desktop.png',
            },
            beforeImages: {
                desktop: 'images/github/bengalivo-desktop-before.png',
                mobile: 'images/github/bengalivo-mobile-before.png',
                description:
                    'Original WordPress site with broken mobile layout and outdated design',
            },
        },
    },
]

/**
 * Get all curated GitHub projects sorted by order
 */
export function getCuratedGitHubProjects(): CuratedGitHubProject[] {
    return [...CURATED_GITHUB_PROJECTS].sort((a, b) => a.order - b.order)
}

/**
 * Get featured GitHub projects only
 */
export function getFeaturedGitHubProjects(): CuratedGitHubProject[] {
    return getCuratedGitHubProjects().filter((p) => p.featured)
}

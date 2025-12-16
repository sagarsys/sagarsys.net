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
    }
}

/**
 * Curated GitHub projects to display on the website
 * Add your repos here to include them in the projects showcase
 */
export const CURATED_GITHUB_PROJECTS: CuratedGitHubProject[] = [
    {
        repo: 'sagarsys/sagarsys.net',
        order: 10,
        featured: true,
        customDescription:
            'Personal portfolio website built with Next.js 15, featuring glassmorphism design, dynamic color theming, and framer-motion animations.',
        overrides: {
            title: 'Portfolio Website',
            tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            images: {
                thumb: 'images/github/portfolio-thumb.png',
            },
        },
    },
    // Add more curated repos below as needed
    // Example:
    // {
    //     repo: 'sagarsys/another-project',
    //     order: 11,
    //     featured: false,
    //     overrides: {
    //         title: 'Project Name',
    //         tech: ['React', 'Node.js'],
    //     },
    // },
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

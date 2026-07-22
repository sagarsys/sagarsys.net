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
        order: 5,
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
        order: 6,
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
        order: 9,
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
        order: 1,
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
    {
        repo: 'sagarsys/vercel-ai-deep-research-chatbot',
        order: 3,
        featured: true,
        customDescription: `**AI deep-research agent** built on the Vercel AI SDK. Give it a question and it plans a multi-step research process, calls tools to gather sources, and synthesises a cited answer — streamed live into a Next.js chat UI.

## Highlights
- **Agentic workflow**: multi-step planning, tool use, and synthesis with the Vercel AI SDK
- **Streaming UX**: token-by-token responses with tool-call visibility
- **Modern stack**: Next.js, React, TypeScript, server actions`,
        overrides: {
            title: 'AI Deep Research Chatbot',
            tech: [
                'Next.js',
                'TypeScript',
                'Vercel AI SDK',
                'LLMs / Agents',
                'React',
            ],
        },
    },
    {
        repo: 'sagarsys/photography-booking-app',
        order: 7,
        featured: true,
        customDescription: `**Full-stack booking platform** for a photography business — a Java + Spring Boot REST API paired with a React/TypeScript (Vite) frontend.

## Highlights
- **Backend**: Spring Boot REST API with booking logic and persistence
- **Frontend**: React + TypeScript on Vite, typed API integration
- **End-to-end ownership**: demonstrates full-stack range beyond the JS ecosystem`,
        overrides: {
            title: 'Photography Booking App',
            tech: [
                'Java',
                'Spring Boot',
                'REST API',
                'React',
                'TypeScript',
                'Vite',
            ],
            images: {
                thumb: 'images/github/photography-booking-app.png',
                desktop: 'images/github/photography-booking-app.png',
            },
        },
    },
    {
        repo: 'sagarsys/vue3-tvmaze',
        order: 11,
        customDescription: `**TV discovery app** built with Vue 3 and TypeScript on the TVMaze API — browse, search and explore shows with a clean, responsive interface.`,
        overrides: {
            title: 'Vue 3 TV Discovery',
            tech: ['Vue 3', 'TypeScript', 'Vite', 'TVMaze API'],
            images: {
                thumb: 'images/github/vue3-tvmaze.png',
                desktop: 'images/github/vue3-tvmaze.png',
            },
        },
    },
    {
        repo: 'sagarsys/ai-mood-journal',
        order: 12,
        customDescription: `**AI journaling app** that analyses entries to surface mood insights and patterns over time. Built with Next.js and React.`,
        overrides: {
            title: 'AI Mood Journal',
            tech: ['Next.js', 'React', 'TypeScript', 'LLMs'],
        },
    },
    {
        repo: 'sagarsys/react-music-player',
        order: 13,
        customDescription: `**Music player** built with React and TypeScript — playback controls, track list, shuffle and loop modes, with a polished animated UI.`,
        overrides: {
            title: 'React Music Player',
            tech: ['React', 'TypeScript', 'CSS3 Animations'],
            images: {
                thumb: 'images/github/react-music-player.png',
                desktop: 'images/github/react-music-player.png',
            },
        },
    },
    {
        repo: 'sagarsys/zod-returns',
        order: 14,
        customDescription: `**"Zod Returns" talk demo** — companion project to my iO Frontend Day talk on runtime data validation with Zod in TypeScript. Shows schema-first validation patterns for safer data at the boundaries.`,
        overrides: {
            title: 'Zod Returns — Talk Demo',
            tech: ['TypeScript', 'Zod', 'React'],
            images: {
                thumb: 'images/github/zod-returns.png',
                desktop: 'images/github/zod-returns.png',
            },
        },
    },
    {
        repo: 'sagarsys/react-feedback-popup',
        order: 17,
        customDescription: `**Reusable feedback-popup component** for React — a self-contained, typed widget for collecting user feedback, designed for drop-in reuse across projects.`,
        overrides: {
            title: 'React Feedback Popup',
            tech: ['React', 'TypeScript', 'Component Library'],
        },
    },
    {
        repo: 'sagarsys/sagavortex-print-brochure',
        order: 20,
        customDescription: `**Print brochure design** for SagaVortex Art Photography — a print-ready, layout-focused brochure built in HTML/CSS for the photography business.`,
        overrides: {
            title: 'SagaVortex Print Brochure',
            tech: ['HTML', 'CSS', 'Print Design'],
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

// Global type definitions

export interface ExperienceFrontmatter {
    title: string
    company: string
    startDate: string
    endDate: string
    location: string
    description: string
    tags: string[]
    order: number
    featured?: boolean
}

export interface ProjectFrontmatter {
    title: string
    description: string
    tech: string[]
    featured: boolean
    liveUrl?: string
    githubUrl?: string
    client?: string
    clientLink?: string
    role?: string
    images: {
        thumb: string
        mobile?: string
        tablet?: string
        desktop?: string
    }
    order: number
}

export interface AboutFrontmatter {
    name: string
    title: string
    location: string
    email: string
    image?: string
}

export interface ContactInfo {
    email: string
    github: string
    linkedin: string
    twitter: string
    instagram: string
    youtube: string
    soundcloud: string
    stackblitz: string
    codeSandbox: string
}

export interface MarkdownContent<T> {
    frontmatter: T
    content: string
    slug: string
}

export interface PortfolioItemData {
    id: string
    title: string
    description: string
    images: {
        thumb: string
        mobile?: string
        tablet?: string
        desktop?: string
    }
    tech?: string[]
    [key: string]: any
}

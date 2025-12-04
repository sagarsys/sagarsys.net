import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type {
    ExperienceFrontmatter,
    ProjectFrontmatter,
    AboutFrontmatter,
    ContactInfo,
    MarkdownContent,
} from '@/types'

const contentDirectory = path.join(process.cwd(), 'content')

// Get all markdown files from a directory
export function getMarkdownFiles<T>(directory: string): MarkdownContent<T>[] {
    const fullPath = path.join(contentDirectory, directory)

    if (!fs.existsSync(fullPath)) {
        return []
    }

    const fileNames = fs.readdirSync(fullPath)
    const markdownFiles = fileNames.filter((fileName) =>
        fileName.endsWith('.md')
    )

    const files = markdownFiles.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const filePath = path.join(fullPath, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            frontmatter: data as T,
            content,
            slug,
        }
    })

    // Sort by order field if it exists
    return files.sort((a, b) => {
        const orderA = (a.frontmatter as any).order || 0
        const orderB = (b.frontmatter as any).order || 0
        return orderA - orderB
    })
}

// Get single markdown file
export function getMarkdownFile<T>(
    filePath: string
): MarkdownContent<T> | null {
    const fullPath = path.join(contentDirectory, filePath)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const slug = path.basename(filePath, '.md')

    return {
        frontmatter: data as T,
        content,
        slug,
    }
}

// Get all experiences
export function getExperiences(): MarkdownContent<ExperienceFrontmatter>[] {
    return getMarkdownFiles<ExperienceFrontmatter>('experiences')
}

// Get all projects
export function getProjects(): MarkdownContent<ProjectFrontmatter>[] {
    return getMarkdownFiles<ProjectFrontmatter>('projects')
}

// Get about content
export function getAbout(): MarkdownContent<AboutFrontmatter> | null {
    return getMarkdownFile<AboutFrontmatter>('about.md')
}

// Get contact info
export function getContactInfo(): MarkdownContent<ContactInfo> | null {
    return getMarkdownFile<ContactInfo>('contact.md')
}

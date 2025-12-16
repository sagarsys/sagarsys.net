/**
 * Merged projects helper - combines markdown projects with GitHub repos
 * Implements Strategy C: Hybrid approach with full control over curation
 */

import { getProjects } from './markdown'
import { fetchGitHubRepo, type GitHubRepo } from './github'
import {
    getCuratedGitHubProjects,
    type CuratedGitHubProject,
} from '@/config/github-projects'
import type { MarkdownContent, ProjectFrontmatter } from '@/types'

// Default placeholder image for GitHub projects without custom images
const DEFAULT_GITHUB_THUMB = 'images/github/default-project.png'

/**
 * Transforms a GitHub repo + curation config into a project format
 */
function transformGitHubToProject(
    repo: GitHubRepo,
    config: CuratedGitHubProject
): MarkdownContent<ProjectFrontmatter> {
    return {
        slug: `github-${repo.name}`,
        frontmatter: {
            title: config.overrides?.title || repo.name,
            description: config.customDescription || repo.description || '',
            tech:
                config.overrides?.tech ||
                (repo.topics.length > 0
                    ? repo.topics.slice(0, 6)
                    : repo.language
                    ? [repo.language]
                    : []),
            featured: config.featured || false,
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || undefined,
            images: {
                thumb: config.overrides?.images?.thumb || DEFAULT_GITHUB_THUMB,
                mobile: config.overrides?.images?.mobile,
                tablet: config.overrides?.images?.tablet,
                desktop: config.overrides?.images?.desktop,
            },
            order: config.order,
            // GitHub-specific metadata
            source: 'github',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || undefined,
            lastUpdated: repo.updated_at,
        },
        content: config.customDescription || repo.description || '',
    }
}

/**
 * Fetches and merges all projects from markdown files and GitHub
 * @returns Combined array of projects sorted by order
 */
export async function getMergedProjects(): Promise<
    MarkdownContent<ProjectFrontmatter>[]
> {
    // Get markdown projects (synchronous)
    const markdownProjects = getProjects().map((project) => ({
        ...project,
        frontmatter: {
            ...project.frontmatter,
            source: 'markdown' as const,
        },
    }))

    // Get curated GitHub projects config
    const curatedConfigs = getCuratedGitHubProjects()

    // Fetch GitHub repos in parallel
    const githubProjects = await Promise.all(
        curatedConfigs.map(async (config) => {
            const repo = await fetchGitHubRepo(config.repo)
            if (!repo) {
                console.warn(`Could not fetch GitHub repo: ${config.repo}`)
                return null
            }
            return transformGitHubToProject(repo, config)
        })
    )

    // Filter out failed fetches and combine
    const validGitHubProjects = githubProjects.filter(
        (p): p is MarkdownContent<ProjectFrontmatter> => p !== null
    )

    // Merge and sort by order
    const allProjects = [...markdownProjects, ...validGitHubProjects]

    return allProjects.sort(
        (a, b) => (a.frontmatter.order || 999) - (b.frontmatter.order || 999)
    )
}

/**
 * Gets only featured projects (from both sources)
 */
export async function getFeaturedProjects(): Promise<
    MarkdownContent<ProjectFrontmatter>[]
> {
    const projects = await getMergedProjects()
    return projects.filter((p) => p.frontmatter.featured)
}

/**
 * Gets projects by source type
 */
export async function getProjectsBySource(
    source: 'markdown' | 'github'
): Promise<MarkdownContent<ProjectFrontmatter>[]> {
    const projects = await getMergedProjects()
    return projects.filter((p) => p.frontmatter.source === source)
}

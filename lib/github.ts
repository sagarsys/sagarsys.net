/**
 * GitHub API helper for fetching repository data
 * Used to integrate GitHub repos into the projects showcase
 */

// GitHub API types
export interface GitHubRepo {
    name: string
    full_name: string
    description: string | null
    html_url: string
    homepage: string | null
    stargazers_count: number
    forks_count: number
    language: string | null
    topics: string[]
    updated_at: string
    created_at: string
    fork: boolean
    archived: boolean
    private: boolean
}

// Optional: Use GitHub token for higher rate limits (60/hr without, 5000/hr with)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
    ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
}

/**
 * Fetches a single GitHub repository by owner/repo
 * @param repo - Repository in format "owner/repo"
 * @returns Repository data or null if not found
 */
export async function fetchGitHubRepo(
    repo: string
): Promise<GitHubRepo | null> {
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers,
        })

        if (!response.ok) {
            console.error(`GitHub API error for ${repo}: ${response.status}`)
            return null
        }

        return await response.json()
    } catch (error) {
        console.error(`Failed to fetch GitHub repo ${repo}:`, error)
        return null
    }
}

/**
 * Fetches all public repositories for a GitHub user
 * @param username - GitHub username
 * @param options - Filter options
 * @returns Array of repositories
 */
export async function fetchUserRepos(
    username: string,
    options: {
        excludeForks?: boolean
        excludeArchived?: boolean
        limit?: number
    } = {}
): Promise<GitHubRepo[]> {
    const { excludeForks = true, excludeArchived = true, limit = 100 } = options

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`,
            {
                headers,
            }
        )

        if (!response.ok) {
            console.error(
                `GitHub API error for user ${username}: ${response.status}`
            )
            return []
        }

        const repos: GitHubRepo[] = await response.json()

        // Apply filters
        return repos.filter((repo) => {
            if (excludeForks && repo.fork) return false
            if (excludeArchived && repo.archived) return false
            return true
        })
    } catch (error) {
        console.error(`Failed to fetch repos for ${username}:`, error)
        return []
    }
}

/**
 * Fetches the Open Graph image URL for a GitHub repository
 * @param repo - Repository in format "owner/repo"
 * @returns OG image URL or null if not found
 */
export async function fetchGitHubRepoImage(
    repo: string
): Promise<string | null> {
    try {
        // Fetch the repository page HTML to extract og:image
        const response = await fetch(`https://github.com/${repo}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
            },
        })

        if (!response.ok) {
            return null
        }

        const html = await response.text()

        // Extract og:image from meta tags
        const ogImageMatch = html.match(
            /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i
        )

        if (ogImageMatch && ogImageMatch[1]) {
            return ogImageMatch[1]
        }

        return null
    } catch (error) {
        console.error(`Failed to fetch OG image for ${repo}:`, error)
        return null
    }
}

/**
 * Fetches multiple repositories in parallel
 * @param repos - Array of repo strings in "owner/repo" format
 * @returns Array of repository data (nulls filtered out)
 */
export async function fetchMultipleRepos(
    repos: string[]
): Promise<GitHubRepo[]> {
    const results = await Promise.all(repos.map(fetchGitHubRepo))
    return results.filter((repo): repo is GitHubRepo => repo !== null)
}

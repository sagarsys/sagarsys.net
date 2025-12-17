import { getMergedProjects } from '@/lib/projects'
import ProjectsContent from './ProjectsContent'

/**
 * Projects showcase section - displays curated markdown and GitHub projects
 * This is an async Server Component that fetches GitHub data at build time (static export)
 */
export default async function ProjectsShowcase() {
    const projects = await getMergedProjects()

    return <ProjectsContent projects={projects} />
}

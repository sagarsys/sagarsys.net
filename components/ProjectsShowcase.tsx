import { getMergedProjects } from '@/lib/projects'
import ProjectsGrid from './ProjectsGrid'
import SectionHeading from './SectionHeading'

/**
 * Projects showcase section - displays curated markdown and GitHub projects
 * This is an async Server Component that fetches GitHub data at build time (static export)
 */
export default async function ProjectsShowcase() {
    const projects = await getMergedProjects()

    return (
        <section id="projects" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    title="Projects"
                    subtitle="A collection of my professional and personal work"
                />
                <ProjectsGrid projects={projects} />
            </div>
        </section>
    )
}

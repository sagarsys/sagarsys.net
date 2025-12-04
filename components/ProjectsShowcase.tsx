import { getProjects } from '@/lib/markdown'
import ProjectsGrid from './ProjectsGrid'
import SectionHeading from './SectionHeading'

export default function ProjectsShowcase() {
    const projects = getProjects()

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

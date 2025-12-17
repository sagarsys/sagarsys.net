'use client'

import ProjectsGrid from './ProjectsGrid'
import SectionHeading from './SectionHeading'
import { useHashNavigation } from './HashNavigationProvider'
import type { MarkdownContent, ProjectFrontmatter } from '@/types'

interface ProjectsContentProps {
    projects: MarkdownContent<ProjectFrontmatter>[]
}

/**
 * Client component wrapper for Projects section
 */
export default function ProjectsContent({ projects }: ProjectsContentProps) {
    const { instantAnimations } = useHashNavigation()

    return (
        <section id="projects" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    title="Projects"
                    subtitle="A collection of my professional and personal work"
                />
                <ProjectsGrid
                    projects={projects}
                    instantAnimations={instantAnimations}
                />
            </div>
        </section>
    )
}

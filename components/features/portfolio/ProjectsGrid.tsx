'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { staggerContainer } from '@/lib/animations'
import type { MarkdownContent, ProjectFrontmatter } from '@/types'
import PortfolioItemDetailsDialog from '@/components/PortfolioItemDetailsDialog'
import { Button } from '@/components/shared/ui/button'
import ProjectCard from './ProjectCard'

interface ProjectsGridProps {
    projects: MarkdownContent<ProjectFrontmatter>[]
    instantAnimations?: boolean
}

/**
 * ProjectsGrid component
 *
 * Grid display of project cards with load more functionality
 */
export default function ProjectsGrid({
    projects,
    instantAnimations = false,
}: ProjectsGridProps) {
    const [selectedProject, setSelectedProject] =
        useState<MarkdownContent<ProjectFrontmatter> | null>(null)
    const [showAll, setShowAll] = useState(false)

    const displayCount = 9
    const displayedProjects = showAll
        ? projects
        : projects.slice(0, displayCount)
    const hasMore = projects.length > displayCount

    return (
        <>
            <motion.div
                key={showAll ? 'all' : 'partial'}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                transition={instantAnimations ? { duration: 0 } : undefined}
            >
                {displayedProjects.map((project, index) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </motion.div>

            {hasMore && !showAll && (
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Button
                        onClick={() => setShowAll(true)}
                        variant="outline"
                        size="lg"
                        className="group"
                    >
                        Load More Projects ({projects.length - displayCount}{' '}
                        more)
                        <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                </motion.div>
            )}

            {/* Project Details Dialog */}
            {selectedProject && (
                <PortfolioItemDetailsDialog
                    open={!!selectedProject}
                    handleClose={() => setSelectedProject(null)}
                    item={{
                        id: selectedProject.slug,
                        ...selectedProject.frontmatter,
                        description: selectedProject.content,
                    }}
                />
            )}
        </>
    )
}

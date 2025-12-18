'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import { staggerItem } from '@/lib/animations'
import { getWebPImageSrc } from '@/lib/image-utils'
import { trackClick } from '@/lib/analytics'
import type { MarkdownContent, ProjectFrontmatter } from '@/types'

interface ProjectCardProps {
    project: MarkdownContent<ProjectFrontmatter>
    index: number
    onClick: () => void
}

/**
 * ProjectCard component
 *
 * Individual project card with image, title, description, and metadata
 */
export default function ProjectCard({
    project,
    index,
    onClick,
}: ProjectCardProps) {
    const handleClick = () => {
        trackClick('project_details', {
            project_title: project.frontmatter.title,
            project_id: project.slug,
        })
        onClick()
    }

    return (
        <motion.div
            className="group cursor-pointer"
            variants={staggerItem}
            whileHover={{ y: -10 }}
            onClick={handleClick}
        >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-slate-700">
                    {project.frontmatter.images?.thumb && (
                        <Image
                            src={getWebPImageSrc(
                                project.frontmatter.images.thumb
                            )}
                            alt={project.frontmatter.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            loading={index < 6 ? 'eager' : 'lazy'}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            unoptimized
                        />
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
                            {project.frontmatter.title}
                        </h3>
                        <div className="flex items-center gap-2">
                            {/* GitHub source badge */}
                            {project.frontmatter.source === 'github' && (
                                <span className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full flex items-center gap-1">
                                    <Github className="w-3 h-3" />
                                    OSS
                                </span>
                            )}
                            {project.frontmatter.featured && (
                                <span className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full font-semibold">
                                    Featured
                                </span>
                            )}
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {project.frontmatter.description}
                    </p>

                    {/* Tech Tags */}
                    {project.frontmatter.tech &&
                        Array.isArray(project.frontmatter.tech) &&
                        project.frontmatter.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.frontmatter.tech
                                    .slice(0, 3)
                                    .map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-slate-700 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                {project.frontmatter.tech.length > 3 && (
                                    <span className="px-2 py-1 text-xs text-gray-500">
                                        +{project.frontmatter.tech.length - 3}
                                    </span>
                                )}
                            </div>
                        )}

                    {/* Links and GitHub Stats */}
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                            {project.frontmatter.liveUrl && (
                                <a
                                    href={project.frontmatter.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-secondary hover:underline"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live
                                </a>
                            )}
                            {project.frontmatter.githubUrl && (
                                <a
                                    href={project.frontmatter.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-secondary hover:underline"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </a>
                            )}
                        </div>

                        {/* GitHub Stats - only for GitHub source projects */}
                        {project.frontmatter.source === 'github' && (
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                                {typeof project.frontmatter.stars ===
                                    'number' && (
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 fill-yellow-500/80 text-yellow-500" />
                                        {project.frontmatter.stars}
                                    </span>
                                )}
                                {typeof project.frontmatter.forks ===
                                    'number' &&
                                    project.frontmatter.forks > 0 && (
                                        <span className="flex items-center gap-1">
                                            <GitFork className="w-3.5 h-3.5" />
                                            {project.frontmatter.forks}
                                        </span>
                                    )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

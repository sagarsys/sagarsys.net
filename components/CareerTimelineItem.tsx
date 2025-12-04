'use client'

import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { renderMarkdown } from '@/lib/simple-markdown'
import type { ExperienceFrontmatter } from '@/types'

interface CareerTimelineItemProps {
    event: ExperienceFrontmatter
    content: string
    isLast: boolean
}

export default function CareerTimelineItem({
    event,
    content,
    isLast,
}: CareerTimelineItemProps) {
    const renderedContent = renderMarkdown(content)

    return (
        <div className="flex items-start mb-8 w-full relative">
            {/* Mobile layout (left-aligned) */}
            <div className="flex items-start w-full md:hidden">
                {/* TimelineSeparator - left side */}
                <div className="flex flex-col items-center mr-4 relative z-10 flex-shrink-0">
                    <motion.div
                        className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <Briefcase className="text-white" size={20} />
                    </motion.div>
                    {!isLast && (
                        <div className="w-0.5 bg-gradient-to-b from-secondary to-transparent min-h-[100px] mt-2 flex-grow" />
                    )}
                </div>

                {/* TimelineContent - right side */}
                <div className="flex-1 min-w-0">
                    <div className="mb-4">
                        <h6 className="text-secondary text-lg font-secondary font-semibold">
                            {event.startDate} - {event.endDate}
                        </h6>
                    </div>
                    <motion.div
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                        whileHover={{ y: -2 }}
                    >
                        <h6 className="text-xl font-bold mb-2 text-white">
                            {event.title}
                        </h6>
                        <h6 className="text-secondary text-lg mb-4">
                            {event.company} • {event.location}
                        </h6>
                        <div className="text-sm space-y-2 mb-4">
                            {renderedContent}
                        </div>
                        {event.tags && event.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {event.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Desktop layout (alternating) */}
            <div className="hidden md:flex items-start w-full">
                {/* TimelineOppositeContent - left side */}
                <div className="flex-1 text-right pr-8 min-w-0">
                    <h6 className="text-secondary text-xl font-secondary font-semibold">
                        {event.startDate} - {event.endDate}
                    </h6>
                </div>

                {/* TimelineSeparator - middle */}
                <div className="flex flex-col items-center mx-4 relative z-10 flex-shrink-0">
                    <motion.div
                        className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <Briefcase className="text-white" size={24} />
                    </motion.div>
                    {!isLast && (
                        <div className="w-0.5 bg-gradient-to-b from-secondary to-transparent min-h-[120px] mt-2 flex-grow" />
                    )}
                </div>

                {/* TimelineContent - right side */}
                <div className="flex-1 pl-8 min-w-0">
                    <motion.div
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                        whileHover={{ y: -5 }}
                    >
                        <h6 className="text-2xl font-bold mb-2 text-white">
                            {event.title}
                        </h6>
                        <h6 className="text-secondary text-lg mb-4">
                            {event.company} • {event.location}
                        </h6>
                        <div className="text-sm space-y-2 mb-4">
                            {renderedContent}
                        </div>
                        {event.tags && event.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {event.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

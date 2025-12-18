'use client'

import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ExperienceFrontmatter } from '@/types'
import MarkdownRenderer from './LazyMarkdownRenderer'

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
    return (
        <div className="flex items-start mb-8 w-full relative">
            {/* Mobile layout (full width) */}
            <div className="flex flex-col w-full md:hidden">
                {/* Date and Icon */}
                <div className="flex items-center gap-3 mb-4">
                    <motion.div
                        className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <Briefcase className="text-white" size={20} />
                    </motion.div>
                    <h6 className="text-secondary text-lg font-secondary font-semibold">
                        {event.startDate} - {event.endDate}
                    </h6>
                </div>

                {/* Full Width Content Card */}
                <motion.div
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all mb-6"
                    whileHover={{ y: -2 }}
                >
                    <h6 className="text-xl font-bold mb-2 text-white">
                        {event.title}
                    </h6>
                    <h6 className="text-secondary text-lg mb-4">
                        {event.company} • {event.location}
                    </h6>
                    <div className="text-sm space-y-2 mb-4">
                        <MarkdownRenderer>{content}</MarkdownRenderer>
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

                {/* Separator line for mobile */}
                {!isLast && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-transparent ml-6 mb-2" />
                )}
            </div>

            {/* Desktop layout (25% dates, timeline, 75% content) */}
            <div className="hidden md:flex items-start w-full">
                {/* Dates - left side (25%) */}
                <div className="w-1/4 text-right pr-8 min-w-0">
                    <h6 className="text-secondary text-xl font-secondary font-semibold">
                        {event.startDate} - {event.endDate}
                    </h6>
                </div>

                {/* Timeline Separator - middle */}
                <div className="flex flex-col items-center relative z-10 flex-shrink-0">
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

                {/* Content - right side (75%) */}
                <div className="w-3/4 pl-8 min-w-0">
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
                            <MarkdownRenderer>{content}</MarkdownRenderer>
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

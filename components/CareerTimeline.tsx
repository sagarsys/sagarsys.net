'use client'

import { useState } from 'react'
import CareerTimelineItem from './CareerTimelineItem'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer } from '@/lib/animations'
import type { MarkdownContent, ExperienceFrontmatter } from '@/types'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

interface CareerTimelineProps {
    experiences: MarkdownContent<ExperienceFrontmatter>[]
}

export default function CareerTimeline({ experiences }: CareerTimelineProps) {
    const [showAll, setShowAll] = useState(false)
    const displayCount = 5
    const displayedExperiences = showAll
        ? experiences
        : experiences.slice(0, displayCount)
    const hasMore = experiences.length > displayCount

    return (
        <div>
            <div className="flex flex-col">
                {displayedExperiences.map((event, i) => (
                    <motion.div
                        key={event.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <CareerTimelineItem
                            event={event.frontmatter}
                            content={event.content}
                            isLast={
                                showAll
                                    ? i === experiences.length - 1
                                    : i === displayedExperiences.length - 1
                            }
                        />
                    </motion.div>
                ))}
            </div>

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
                        Show More Experiences (
                        {experiences.length - displayCount} more)
                        <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                </motion.div>
            )}
        </div>
    )
}

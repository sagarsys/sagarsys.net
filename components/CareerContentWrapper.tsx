'use client'

import CareerTimeline from './CareerTimeline'
import SectionHeading from './SectionHeading'
import type { MarkdownContent, ExperienceFrontmatter } from '@/types'

interface CareerContentWrapperProps {
    experiences: MarkdownContent<ExperienceFrontmatter>[]
}

export default function CareerContentWrapper({
    experiences,
}: CareerContentWrapperProps) {
    return (
        <section
            id="experience"
            className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
        >
            <SectionHeading
                title="Experience"
                subtitle="My professional journey"
            />
            <CareerTimeline experiences={experiences} />
        </section>
    )
}

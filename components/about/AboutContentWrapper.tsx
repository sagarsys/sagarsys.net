'use client'

import AboutContent from './AboutContent'
import SectionHeading from '@/components/shared/layout/SectionHeading'
import type { MarkdownContent, AboutFrontmatter } from '@/types'

interface AboutContentWrapperProps {
    data: MarkdownContent<AboutFrontmatter> | null
}

export default function AboutContentWrapper({
    data,
}: AboutContentWrapperProps) {
    return (
        <section id="about" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me better"
                />
                <AboutContent data={data} />
            </div>
        </section>
    )
}

import { getExperiences } from '@/lib/markdown'
import CareerTimeline from './CareerTimeline'
import SectionHeading from './SectionHeading'

export default function Career() {
    const allExperiences = getExperiences()

    return (
        <section
            id="experience"
            className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
        >
            <SectionHeading
                title="Experience"
                subtitle="My professional journey"
            />
            <CareerTimeline experiences={allExperiences} />
        </section>
    )
}

import { getAbout } from '@/lib/markdown'
import AboutContent from './AboutContent'
import SectionHeading from './SectionHeading'

export default function About() {
    const about = getAbout()

    return (
        <section id="about" className="py-20 md:py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me better"
                />
                <AboutContent data={about} />
            </div>
        </section>
    )
}

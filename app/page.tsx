import HeroBanner from '@/components/features/hero/HeroBanner'
import About from '@/components/about/About'
import SkillsShowcase from '@/components/skills/SkillsShowcase'
import Career from '@/components/career/Career'
import ProjectsShowcase from '@/components/features/portfolio/ProjectsShowcase'
import Contact from '@/components/features/contact/Contact'
import ScrollTop from '@/components/features/navigation/ScrollTop'
import ParticleBackground from '@/components/shared/animations/ParticleBackground'
import ScrollbarSync from '@/components/shared/layout/ScrollbarSync'
import ViewTransitions from './ViewTransitions'
import { getContactInfo } from '@/lib/markdown'

export default function Home() {
    const contactData = getContactInfo()

    return (
        <>
            <ViewTransitions />
            <div className="min-h-screen relative">
                {/* Particle Background - subtle, throughout the page */}
                <ParticleBackground />

                {/* Scrollbar color sync */}
                <ScrollbarSync />

                {/* Fixed elements */}
                <div id="back-to-top-anchor" className="h-0 min-h-0" />
                <ScrollTop />

                {/* Page content */}
                <main className="relative z-10">
                    <HeroBanner
                        email={contactData?.frontmatter.email}
                        github={contactData?.frontmatter.github}
                        linkedin={contactData?.frontmatter.linkedin}
                    />
                    <About />
                    <SkillsShowcase />
                    <Career />
                    <ProjectsShowcase />
                    <Contact contactInfo={contactData?.frontmatter} />
                </main>
            </div>
        </>
    )
}

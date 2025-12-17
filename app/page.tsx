import AppBarClient from '@/components/AppBarClient'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import SkillsShowcase from '@/components/SkillsShowcase'
import Career from '@/components/Career'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollbarSync from '@/components/ScrollbarSync'
import HashNavigationProvider from '@/components/HashNavigationProvider'
import ViewTransitions from './ViewTransitions'
import { getContactInfo } from '@/lib/markdown'

export default function Home() {
    const contactData = getContactInfo()

    return (
        <HashNavigationProvider>
            <ViewTransitions />
            <div className="min-h-screen relative">
                {/* Particle Background - subtle, throughout the page */}
                <ParticleBackground />

                {/* Scrollbar color sync */}
                <ScrollbarSync />

                {/* Fixed elements */}
                <div id="back-to-top-anchor" className="h-0 min-h-0" />
                <AppBarClient />
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
                    <Footer contactInfo={contactData?.frontmatter} />
                </main>
            </div>
        </HashNavigationProvider>
    )
}

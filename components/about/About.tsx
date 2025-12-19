import { getAbout } from '@/lib/markdown'
import AboutContentWrapper from './AboutContentWrapper'

export default function About() {
    const about = getAbout()
    return <AboutContentWrapper data={about} />
}

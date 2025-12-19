import { getExperiences } from '@/lib/markdown'
import CareerContentWrapper from './CareerContentWrapper'

export default function Career() {
    const allExperiences = getExperiences()
    return <CareerContentWrapper experiences={allExperiences} />
}

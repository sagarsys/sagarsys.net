'use client'

import FullHeightSection from './FullHeightSection'
import useFetchData from '@/hooks/useFetchData'
import AboutSkeleton from './AboutSkeleton'
import ErrorMessage from './ErrorMessage'
import AboutContent from './AboutContent'

interface AboutData {
  name: string
  title: string
  description: string
}

export default function About() {
  const apiUrl = `/data/about.json`
  const { data, error, isLoading } = useFetchData<AboutData>(
    apiUrl,
    'about section data'
  )

  return (
    <FullHeightSection id="about" className="pb-12 mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <AboutContent data={data} />
        {isLoading && <AboutSkeleton />}
        {error && <ErrorMessage error={error} />}
      </div>
    </FullHeightSection>
  )
}



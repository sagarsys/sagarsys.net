'use client'

import FullHeightSection from './FullHeightSection'
import PortfolioList from './PortfolioList'
import useFetchData from '@/hooks/useFetchData'
import ErrorMessage from './ErrorMessage'

interface PortfolioItem {
  id: string
  title: string
  description: string
  images: {
    thumb: string
    mobile?: string
    tablet?: string
    desktop?: string
  }
  [key: string]: any
}

export default function Portfolio() {
  const apiUrl = `/data/portfolio.json`
  const { data, error, isLoading } = useFetchData<PortfolioItem[]>(
    apiUrl,
    'portfolio'
  )

  return (
    <FullHeightSection id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-secondary mb-4">Portfolio</h2>
        <p className="text-secondary mb-8">
          Dedicated to some of the best professional work through my career
          as a web developer
        </p>
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <PortfolioList loading={isLoading} items={data || []} />
        )}
      </div>
    </FullHeightSection>
  )
}



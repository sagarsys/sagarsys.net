'use client'

import useFetchData from '@/hooks/useFetchData'
import ErrorMessage from './ErrorMessage'
import CareerTimeline from './CareerTimeline'

interface CareerEvent {
  startDate: string
  endDate: string
  title: string
  company: string
  location: string
  description: string
}

export default function Career() {
  const apiUrl = `/data/career.json`
  const { data, error, isLoading } = useFetchData<CareerEvent[]>(
    apiUrl,
    'career section data'
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-16" id="career">
      <h2 className="text-4xl font-secondary mb-8">Career</h2>
      {data && <CareerTimeline events={data} />}
      {isLoading && (
        <div className="w-full h-[500px] bg-gray-700 rounded animate-pulse" />
      )}
      {error && <ErrorMessage error={error} />}
    </div>
  )
}



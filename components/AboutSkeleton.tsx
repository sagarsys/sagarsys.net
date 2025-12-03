'use client'

import useResizer from '@/hooks/useResizer'

export default function AboutSkeleton() {
  const isMobile = useResizer()
  return (
    <>
      <div
        className="mb-4 bg-gray-700 rounded animate-pulse"
        style={{
          width: isMobile ? '80%' : '33%',
          height: '20px',
        }}
      />
      <div className="mb-2 bg-gray-700 rounded animate-pulse h-3.5" />
      <div className="mb-2 bg-gray-700 rounded animate-pulse h-3.5" />
      <div className="mb-2 bg-gray-700 rounded animate-pulse h-3.5" />
      <div className="mb-2 bg-gray-700 rounded animate-pulse h-3.5" />
      <div className="mb-2 bg-gray-700 rounded animate-pulse h-3.5" />
      <div className="my-8 bg-gray-700 rounded animate-pulse h-[250px]" />
      <div
        className="ml-auto bg-gray-700 rounded animate-pulse"
        style={{
          width: isMobile ? '100%' : '33%',
          height: '24px',
        }}
      />
    </>
  )
}



'use client'

import PortfolioItem from './PortfolioItem'
import useResizer from '@/hooks/useResizer'
import PortfolioItemSkeleton from './PortfolioItemSkeleton'
import { cn } from '@/lib/utils'

interface PortfolioItemData {
  id: string
  title: string
  description: string
  images: {
    thumb: string
  }
  [key: string]: any
}

interface PortfolioListProps {
  items: PortfolioItemData[]
  loading: boolean
}

export default function PortfolioList({
  items,
  loading,
}: PortfolioListProps) {
  const isMobile = useResizer()

  return (
    <div className="flex-grow overflow-hidden py-12 pb-16">
      <div
        className={cn(
          'grid gap-6',
          isMobile
            ? 'grid-cols-1 justify-center'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        )}
      >
        {loading &&
          [1, 2, 3].map((i) => <PortfolioItemSkeleton key={i} />)}
        {!loading &&
          items.length > 0 &&
          items.map((item) => <PortfolioItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}



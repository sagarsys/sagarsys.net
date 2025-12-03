'use client'

import CareerTimelineItem from './CareerTimelineItem'
import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'

interface CareerEvent {
  startDate: string
  endDate: string
  title: string
  company: string
  location: string
  description: string
}

interface CareerTimelineProps {
  events: CareerEvent[]
}

export default function CareerTimeline({ events }: CareerTimelineProps) {
  const isMobile = useResizer()

  return (
    <div className={cn('relative', isMobile ? '' : '')}>
      {events.map((e, i) => (
        <CareerTimelineItem
          event={e}
          key={i}
          isLast={i === events.length - 1}
        />
      ))}
    </div>
  )
}



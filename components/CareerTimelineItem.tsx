'use client'

import useResizer from '@/hooks/useResizer'
import CareerTimelineItemDesktop from './CareerTimelineItemDesktop'
import CareerTimelineItemMobile from './CareerTimelineItemMobile'

interface CareerEvent {
  startDate: string
  endDate: string
  title: string
  company: string
  location: string
  description: string
}

interface CareerTimelineItemProps {
  event: CareerEvent
  isLast: boolean
}

export default function CareerTimelineItem({
  event,
  isLast,
}: CareerTimelineItemProps) {
  const isMobile = useResizer()
  return isMobile ? (
    <CareerTimelineItemMobile event={event} isLast={isLast} />
  ) : (
    <CareerTimelineItemDesktop event={event} isLast={isLast} />
  )
}



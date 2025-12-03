'use client'

import { Briefcase } from 'lucide-react'
import CareerTimelineItemContent from './CareerTimelineItemContent'

interface CareerEvent {
  startDate: string
  endDate: string
  title: string
  company: string
  location: string
  description: string
}

interface CareerTimelineItemMobileProps {
  event: CareerEvent
  isLast: boolean
}

export default function CareerTimelineItemMobile({
  event,
  isLast,
}: CareerTimelineItemMobileProps) {
  return (
    <div className="flex items-start mb-8">
      <div className="flex flex-col items-center mr-4">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
          <Briefcase className="text-primary" size={24} />
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-secondary min-h-[80px] mt-2" />
        )}
      </div>
      <div className="flex-1">
        <h6 className="text-secondary text-xl mb-4">
          {event.startDate} - {event.endDate}
        </h6>
        <CareerTimelineItemContent event={event} />
      </div>
    </div>
  )
}



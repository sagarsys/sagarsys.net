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

interface CareerTimelineItemProps {
    event: CareerEvent
    isLast: boolean
}

export default function CareerTimelineItem({
    event,
    isLast,
}: CareerTimelineItemProps) {
    return (
        <div className="flex items-start mb-8 w-full relative">
            {/* Mobile layout (left-aligned) */}
            <div className="flex items-start w-full md:hidden">
                {/* TimelineSeparator - left side */}
                <div className="flex flex-col items-center mr-4 relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Briefcase className="text-white" size={24} />
                    </div>
                    {!isLast && (
                        <div className="w-0.5 bg-secondary min-h-[80px] mt-2 flex-grow" />
                    )}
                </div>

                {/* TimelineContent - right side */}
                <div className="flex-1 min-w-0">
                    <div className="mb-4">
                        <h6 className="text-secondary text-xl font-secondary">
                            {event.startDate} - {event.endDate}
                        </h6>
                    </div>
                    <CareerTimelineItemContent event={event} />
                </div>
            </div>

            {/* Desktop layout (alternating) */}
            <div className="hidden md:flex items-start w-full">
                {/* TimelineOppositeContent - left side */}
                <div className="flex-1 text-right pr-8 min-w-0">
                    <h6 className="text-secondary text-xl font-secondary">
                        {event.startDate} - {event.endDate}
                    </h6>
                </div>

                {/* TimelineSeparator - middle */}
                <div className="flex flex-col items-center mx-4 relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Briefcase className="text-white" size={24} />
                    </div>
                    {!isLast && (
                        <div className="w-0.5 bg-secondary min-h-[80px] mt-2 flex-grow" />
                    )}
                </div>

                {/* TimelineContent - right side */}
                <div className="flex-1 pl-8 min-w-0">
                    <CareerTimelineItemContent event={event} />
                </div>
            </div>
        </div>
    )
}

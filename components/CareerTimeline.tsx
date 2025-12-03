'use client'

import CareerTimelineItem from './CareerTimelineItem'

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
    return (
        <div className="flex flex-col">
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

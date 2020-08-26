import React from 'react'
import CareerTimelineItem from './CareerTimelineItem'

export default function CareerTimeline({ events }) {
    return (
        <pre>
            {events.map((e, i) => (
                <CareerTimelineItem event={e} key={i} />
            ))}
        </pre>
    )
}

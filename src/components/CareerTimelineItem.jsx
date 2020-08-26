import React from 'react'

export default function CareerTimelineItem({ event }) {
    return (
        <p>
            <span>{event.startDate}</span>
            <span>{event.endDate}</span>
            <span>{event.title}</span>
            <span>{event.description}</span>
        </p>
    )
}

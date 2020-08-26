import React from 'react'
import CareerTimelineItem from './CareerTimelineItem'
import Timeline from '@material-ui/lab/Timeline'
import useResizer from '../hooks/useResizer'

export default function CareerTimeline({ events }) {
    const isMobile = useResizer()
    return (
        <Timeline align={isMobile ? 'left' : 'alternate'}>
            {events.map((e, i) => (
                <CareerTimelineItem
                    event={e}
                    key={i}
                    isLast={i === events.length - 1}
                />
            ))}
        </Timeline>
    )
}

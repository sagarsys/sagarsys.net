import React from 'react'
import useResizer from '../hooks/useResizer'
import CareerTimelineItemDesktop from './CareerTimelineItemDesktop'
import CareerTimelineItemMobile from './CareerTimelineItemMobile'

export default function CareerTimelineItem({ event, isLast }) {
    const isMobile = useResizer()
    return isMobile ? (
        <CareerTimelineItemMobile event={event} isLast={isLast} />
    ) : (
        <CareerTimelineItemDesktop event={event} isLast={isLast} />
    )
}

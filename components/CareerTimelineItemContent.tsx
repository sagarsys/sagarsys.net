interface CareerEvent {
    startDate: string
    endDate: string
    title: string
    company: string
    location: string
    description: string
}

interface CareerTimelineItemContentProps {
    event: CareerEvent
}

export default function CareerTimelineItemContent({
    event,
}: CareerTimelineItemContentProps) {
    return (
        <div className="bg-[#263238] rounded-lg shadow-lg p-6 my-8 mx-0 md:m-4">
            <h6 className="text-secondary text-xl mb-4 text-left">
                {event.title} - {event.company} ({event.location})
            </h6>
            <p className="whitespace-pre-wrap text-left">{event.description}</p>
        </div>
    )
}

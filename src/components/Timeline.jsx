import React from 'react'

export default function Timeline({ events }) {
    return (
        <pre>
            {events.map((e, i) => (
                <p key={i}>
                    <span>{e.startDate}</span>
                    <span>{e.endDate}</span>
                    <span>{e.title}</span>
                    <span>{e.description}</span>
                </p>
            ))}
        </pre>
    )
}

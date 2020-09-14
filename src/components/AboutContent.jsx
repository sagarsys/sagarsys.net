import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function AboutContent({ data }) {
    return (
        <>
            <Typography variant="h2">About</Typography>
            {data && (
                <>
                    <Typography color="secondary" variant="h6">
                        {data.name}: {data.title}
                    </Typography>
                    <Typography variant="body1">{data.description}</Typography>
                </>
            )}
        </>
    )
}

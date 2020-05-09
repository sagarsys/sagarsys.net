import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Logo(props) {
    const siteTitle = 'sagarsys'
    return (
        <Typography variant="h6" {...props}>
            {siteTitle}
        </Typography>
    )
}

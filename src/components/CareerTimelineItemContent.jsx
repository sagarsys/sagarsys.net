import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useResizer from '../hooks/useResizer'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: ({ isMobile }) =>
            isMobile ? theme.spacing(4, 0) : theme.spacing(4),
        padding: theme.spacing(3),
    },
    title: {
        textAlign: 'left',
        paddingBottom: theme.spacing(1),
    },
    description: {
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
    },
}))

export default function CareerTimelineItemContent({ event }) {
    const isMobile = useResizer()
    const classes = useStyles({ isMobile })
    return (
        <Paper elevation={3} className={classes.root}>
            <Typography
                className={classes.title}
                variant="h6"
                color="secondary"
            >
                {event.title} - {event.company} ({event.location})
            </Typography>
            <Typography className={classes.description}>
                {event.description}
            </Typography>
        </Paper>
    )
}

import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useResizer from '../hooks/useResizer'
import DOMPurify from 'isomorphic-dompurify'
import { safeParseHtmlString } from '../helpers/html'

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
    const { title, company, location, description, details } = event

    return (
        <Paper elevation={3} className={classes.root}>
            <Typography
                className={classes.title}
                variant="h6"
                color="secondary"
            >
                {title} - {company} ({location})
            </Typography>
            <Typography className={classes.description}>
                {description}
            </Typography>
            {details && (<Typography className={classes.description} dangerouslySetInnerHTML={safeParseHtmlString(details)} />)}
        </Paper>
    )
}

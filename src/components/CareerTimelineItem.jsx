import React from 'react'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Typography from '@material-ui/core/Typography'
import WorkIcon from '@material-ui/icons/Work'
import CareerTimelineItemContent from './CareerTimelineItemContent'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    connector: {
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default function CareerTimelineItem({ event, isLast }) {
    const classes = useStyles()
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="h6" color="secondary">
                    {event.startDate} - {event.endDate}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary">
                    <WorkIcon />
                </TimelineDot>
                {!isLast && <TimelineConnector className={classes.connector} />}
            </TimelineSeparator>
            <TimelineContent>
                <CareerTimelineItemContent event={event} />
            </TimelineContent>
        </TimelineItem>
    )
}

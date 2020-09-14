import React from 'react'
import Typography from '@material-ui/core/Typography'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineDot from '@material-ui/lab/TimelineDot'
import WorkIcon from '@material-ui/icons/Work'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import CareerTimelineItemContent from './CareerTimelineItemContent'
import TimelineItem from '@material-ui/lab/TimelineItem'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
    connector: {
        backgroundColor: theme.palette.secondary.main,
    },
}))

export default function CareerTimelineItemMobile({ event, isLast }) {
    const classes = useStyles()
    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary">
                    <WorkIcon />
                </TimelineDot>
                {!isLast && <TimelineConnector className={classes.connector} />}
            </TimelineSeparator>
            <TimelineContent>
                <TimelineContent>
                    <Typography variant="h6" color="secondary">
                        {event.startDate} - {event.endDate}
                    </Typography>
                </TimelineContent>
                <CareerTimelineItemContent event={event} />
            </TimelineContent>
        </TimelineItem>
    )
}

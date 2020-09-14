import React from 'react'
import useFetchData from '../hooks/useFetchData'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ErrorMessage from './ErrorMessage'
import CareerTimeline from './CareerTimeline'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4, 0),
    },
}))

export default function Career() {
    const classes = useStyles()
    const apiUrl = `data/career.json`
    const { data, error, isLoading } = useFetchData(
        apiUrl,
        'career section data'
    )
    return (
        <Container id="career" className={classes.root}>
            <Typography variant="h3">Career</Typography>
            {data && <CareerTimeline events={data} />}
            {isLoading && <Skeleton variant="rect" width="100%" height={500} />}
            {error && <ErrorMessage error={error} />}
        </Container>
    )
}

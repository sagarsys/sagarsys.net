import React from 'react'
import useFetchData from '../hooks/useFetchData'
import FullHeightSection from './FullHeightSection'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ErrorMessage from './ErrorMessage'
import Timeline from './Timeline'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles({
    root: {},
})

export default function Career() {
    const classes = useStyles()
    const apiUrl = `data/career.json`
    const { data, error, isLoading } = useFetchData(
        apiUrl,
        'career section data'
    )
    return (
        <FullHeightSection id="career" className={classes.root}>
            <Container fixed>
                <Typography variant="h3">Career</Typography>
                {data && <Timeline events={data} />}
                {isLoading && (
                    <Skeleton variant="rect" width="100%" height={500} />
                )}
                {error && <ErrorMessage error={error} />}
            </Container>
        </FullHeightSection>
    )
}

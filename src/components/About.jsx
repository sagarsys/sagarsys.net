import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'
import Contact from './Contact'
import useFetchData from '../hooks/useFetchData'
import AboutSkeleton from './AboutSkeleton'
import { makeStyles } from '@material-ui/core/styles'
import ErrorMessage from './ErrorMessage'
import Career from './Career'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(3),
    },
}))

export default function About() {
    const classes = useStyles()
    const apiUrl = `data/about.json`
    const { data, error, isLoading } = useFetchData(
        apiUrl,
        'about section data'
    )

    return (
        <FullHeightSection id="about" className={classes.root}>
            <Container fixed>
                <Typography variant="h2">About</Typography>
                {data && (
                    <>
                        <Typography color="secondary" variant="h6">
                            {data.name}: {data.title}
                        </Typography>
                        <Typography variant="body1">
                            {data.description}
                        </Typography>
                        <Contact data={data} />
                    </>
                )}
                {isLoading && <AboutSkeleton />}
                {error && <ErrorMessage error={error} />}
            </Container>
            <Career />
        </FullHeightSection>
    )
}

import React from 'react'
import Container from '@material-ui/core/Container'
import FullHeightSection from './FullHeightSection'
import Contact from './Contact'
import useFetchData from '../hooks/useFetchData'
import AboutSkeleton from './AboutSkeleton'
import { makeStyles } from '@material-ui/core/styles'
import ErrorMessage from './ErrorMessage'
import Career from './Career'
import AboutContent from './AboutContent'

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
                <AboutContent data={data} />
                {isLoading && <AboutSkeleton />}
                {error && <ErrorMessage error={error} />}
                <Career />
                {data && <Contact data={data} />}
            </Container>
        </FullHeightSection>
    )
}

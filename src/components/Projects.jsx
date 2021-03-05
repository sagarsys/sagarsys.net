import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'
import useFetchData from '../hooks/useFetchData'
import ErrorMessage from './ErrorMessage'
import PortfolioList from './PortfolioList'

export default function Projects() {
    const apiUrl = `/data/projects.json`
    const { data, error, isLoading } = useFetchData(apiUrl, 'projects')

    return (
        <FullHeightSection id="projects">
            <Container fixed>
                <Typography variant="h2">Projects</Typography>
                <Typography variant="body1" color="secondary">
                    Showcasing some fun personal projects that I have worked on
                </Typography>
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    <PortfolioList loading={isLoading} items={data} />
                )}
            </Container>
        </FullHeightSection>
    )
}

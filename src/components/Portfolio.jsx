import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'
import PortfolioList from './PortfolioList'
import useFetchData from '../hooks/useFetchData'
import ErrorMessage from './ErrorMessage'

export default function Portfolio() {
    const apiUrl = `/data/mock/portfolio.json`
    const { data, error, isLoading } = useFetchData(apiUrl, 'portfolio')

    return (
        <FullHeightSection id="portfolio">
            <Container fixed>
                <Typography variant="h2">Portfolio</Typography>
                <Typography variant="body1">
                    This section is dedicated to some of my best work in my
                    career as a web developer
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

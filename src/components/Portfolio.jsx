import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'
import PortfolioList from './PortfolioList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    error: {
        padding: theme.spacing(6, 0, 8),
    },
}))

export default function Portfolio() {
    const classes = useStyles()
    const [portfolio, setPortfolio] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchData() {
            setError(null)
            setIsLoading(true)
            try {
                const response = await fetch('/data/mock/portfolio.json')
                return await response.json()
            } catch (e) {
                console.error(`Fetch portfolio failed: \n${e}`)
                setError(e)
                return []
            }
        }
        fetchData()
            .then(setPortfolio)
            .then(() => setIsLoading(false))
    }, [])

    return (
        <FullHeightSection id="portfolio">
            <Container fixed>
                <Typography variant="h2">Portfolio</Typography>
                <Typography variant="body1">
                    This section is dedicated to some of my best work in my
                    career as a web developer
                </Typography>
                {error ? (
                    <Typography
                        className={classes.error}
                        variant="body2"
                        color="error"
                    >
                        Something went wrong: {error.message}. Please try again
                        later.
                    </Typography>
                ) : (
                    <PortfolioList loading={isLoading} items={portfolio} />
                )}
            </Container>
        </FullHeightSection>
    )
}

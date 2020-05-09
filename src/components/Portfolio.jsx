import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'

export default function Portfolio() {
    return (
        <FullHeightSection id="portfolio">
            <Container fixed>
                <Typography variant="h2">Portfolio</Typography>
            </Container>
        </FullHeightSection>
    )
}

import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'

export default function About() {
    return (
        <FullHeightSection id="about">
            <Container fixed>
                <Typography variant="h2">About</Typography>
            </Container>
        </FullHeightSection>
    )
}

import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'

export default function Projects() {
    return (
        <FullHeightSection id="projects">
            <Container fixed>
                <Typography variant="h2">Projects</Typography>
            </Container>
        </FullHeightSection>
    )
}

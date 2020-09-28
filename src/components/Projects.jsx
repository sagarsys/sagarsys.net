import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FullHeightSection from './FullHeightSection'
import ProjectsList from './ProjectsList'

export default function Projects() {
    return (
        <FullHeightSection id="projects">
            <Container fixed>
                <Typography variant="h2">Projects</Typography>
                <ProjectsList />
            </Container>
        </FullHeightSection>
    )
}

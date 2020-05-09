import React from 'react'
import Container from '@material-ui/core/Container'
import HeroBanner from './HeroBanner'
import AppBar from './AppBar'

function Routes() {
    return (
        <Container maxWidth={false} disableGutters={true}>
            <AppBar />
            <HeroBanner />
        </Container>
    )
}

export default Routes

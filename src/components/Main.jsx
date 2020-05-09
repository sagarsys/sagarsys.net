import React from 'react'
import Container from '@material-ui/core/Container'
import HeroBanner from './HeroBanner'
import AppBar from './AppBar'
import Portfolio from './Portfolio'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

function Main() {
    return (
        <Container maxWidth={false} disableGutters={true}>
            <AppBar />
            <HeroBanner />
            <Portfolio />
            <Projects />
            <About />
            <Footer />
        </Container>
    )
}

export default Main

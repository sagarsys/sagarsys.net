import React from 'react'
import Container from '@material-ui/core/Container'
import HeroBanner from './HeroBanner'
import AppBar from './AppBar'
import Portfolio from './Portfolio'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Toolbar from '@material-ui/core/Toolbar'

function Main(props) {
    return (
        <Container maxWidth={false} disableGutters={true}>
            <Toolbar id="back-to-top-anchor" />
            <AppBar />
            <HeroBanner />
            <Portfolio />
            <Projects />
            <About />
            <Footer />
            <ScrollTop {...props}>
                <Fab
                    color="secondary"
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Container>
    )
}

export default Main

import React from 'react'
import Container from '@material-ui/core/Container'
import HeroBanner from './HeroBanner'
import AppBar from './AppBar'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Career from './Career'

const useStyles = makeStyles({
    anchor: {
        minHeight: 'unset',
        height: 0,
    },
})

function Main(props) {
    const classes = useStyles()
    return (
        <Container maxWidth={false} disableGutters={true}>
            <Toolbar id="back-to-top-anchor" className={classes.anchor} />
            <AppBar />
            <HeroBanner />
            <About />
            <Portfolio />
            <Career />
            <Contact />
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

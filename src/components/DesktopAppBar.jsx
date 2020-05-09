import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from './Logo'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FlexSpacer from './FlexSpacer'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

export default function DesktopAppBar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <Logo />
                    <FlexSpacer />
                    <nav>
                        <Button color="inherit">Portfolio</Button>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">About</Button>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    )
}

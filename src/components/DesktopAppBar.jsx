import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from './Logo'
import { makeStyles } from '@material-ui/core/styles'
import FlexSpacer from './FlexSpacer'
import NavBar from './NavBar'

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
                <Toolbar variant="dense">
                    <Logo />
                    <FlexSpacer />
                    <NavBar />
                </Toolbar>
            </AppBar>
        </div>
    )
}

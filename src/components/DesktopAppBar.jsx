import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import NavBar from './NavBar'
import Logo from './Logo'

export default function DesktopAppBar(props) {
    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Logo />
                <NavBar />
            </Toolbar>
        </AppBar>
    )
}

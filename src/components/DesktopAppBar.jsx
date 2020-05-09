import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Logo from './Logo'
import FlexSpacer from './FlexSpacer'
import NavBar from './NavBar'

export default function DesktopAppBar() {
    return (
        <AppBar position="fixed">
            <Toolbar variant="dense">
                <Logo />
                <FlexSpacer />
                <NavBar />
            </Toolbar>
        </AppBar>
    )
}

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Logo from './Logo'
import { SwipeableDrawer } from '@material-ui/core'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    logo: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))

export default function MobileAppBar() {
    const classes = useStyles()
    const [isVisible, setIsVisible] = useState(false)

    const toggleDrawer = (visibility) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setIsVisible(visibility)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo className={classes.logo} />
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                open={isVisible}
            >
                <NavBar onClick={toggleDrawer(false)} />
            </SwipeableDrawer>
        </div>
    )
}

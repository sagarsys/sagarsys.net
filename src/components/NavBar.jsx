import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginRight: 0,
    },
})

export default function NavBar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">About</Button>
        </div>
    )
}

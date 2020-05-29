import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useScrollTrigger, Zoom } from '@material-ui/core'
import { handleScrollToTop } from '../helpers/scrolling'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

export default function ScrollTop(props) {
    const { children } = props
    const classes = useStyles()
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    })
    return (
        <Zoom in={trigger}>
            <div
                onClick={handleScrollToTop}
                role="presentation"
                className={classes.root}
            >
                {children}
            </div>
        </Zoom>
    )
}

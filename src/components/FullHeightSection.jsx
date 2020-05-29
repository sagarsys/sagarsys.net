import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        minHeight: `calc(100vh - ${theme.navBarHeight}px)`,
    },
}))

export default function FullHeightSection(props) {
    const { height } = props
    const classes = useStyles()
    return (
        <Box
            className={classes.root}
            style={height ? { height, minHeight: 'unset' } : null}
            {...props}
        />
    )
}

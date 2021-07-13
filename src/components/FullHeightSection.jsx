import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useResizer from '../hooks/useResizer'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        minHeight: ({ isMobile }) => (isMobile ? `100vh` : `auto`),
    },
}))

export default function FullHeightSection(props) {
    const { height } = props
    const isMobile = useResizer()
    const classes = useStyles({ isMobile })
    return (
        <Box
            className={classes.root}
            style={height ? { height, minHeight: 'unset' } : null}
            {...props}
        />
    )
}

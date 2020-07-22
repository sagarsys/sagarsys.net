import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link, useTheme } from '@material-ui/core'
import { handleScrollToTop } from '../helpers/scrolling'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    logo: {
        fontFamily: `'neuropol_nova_cnd', sans-serif;`,
        fontSize: `2.22rem`,
    },
}))

export default function Logo(props) {
    const siteTitle = 'SAGARSYS'
    const classes = useStyles()
    const theme = useTheme()
    const { dark } = props || false
    const color = dark
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    return (
        <Link onClick={handleScrollToTop} style={{ color }}>
            <Typography className={classes.logo} variant="h4" {...props}>
                {siteTitle}
            </Typography>
        </Link>
    )
}

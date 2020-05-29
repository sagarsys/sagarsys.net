import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link, useTheme } from '@material-ui/core'
import { handleScrollToTop } from '../helpers/scrolling'

export default function Logo(props) {
    const siteTitle = 'SAGARSYS'
    const theme = useTheme()
    const { dark } = props || false
    const color = dark
        ? theme.palette.primary.main
        : theme.palette.secondary.main
    return (
        <Link onClick={handleScrollToTop} style={{ color }}>
            <Typography variant="h5" {...props}>
                {siteTitle}
            </Typography>
        </Link>
    )
}

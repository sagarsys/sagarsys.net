import React from 'react'
import { Link } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    linkIcon: {
        margin: theme.spacing(0, 1),
        transform: 'translate3d(0, 4px, 0)',
    },
}))

export function LinkOrText({ link, title, color }) {
    const classes = useStyles()
    return (
        <>
            {(link && (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener"
                    color={color}
                    title="Open website link in a new tab"
                >
                    {title}
                    <LinkIcon className={classes.linkIcon} />
                </Link>
            )) ||
                title}
        </>
    )
}

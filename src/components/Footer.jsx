import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
    },
    copyright: {
        paddingRight: theme.spacing(1),
    },
}))

export default function Footer() {
    const classes = useStyles()
    const year = new Date().getFullYear()
    return (
        <Container maxWidth={false} className={classes.root} color="primary">
            <Toolbar variant="dense" className={classes.content}>
                <Typography className={classes.copyright} variant="subtitle1">
                    &copy; {year} - Designed & developed by
                </Typography>
                <Typography variant="subtitle1">
                    <Link
                        color="secondary"
                        href="https://github.com/sagarsys"
                        rel="noreferrer"
                        target="_blank"
                    >
                        sagarsys
                    </Link>
                </Typography>
            </Toolbar>
        </Container>
    )
}

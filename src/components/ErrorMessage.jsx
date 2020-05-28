import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    error: {
        padding: theme.spacing(6, 0, 8),
    },
}))

export default function ErrorMessage({ error }) {
    const classes = useStyles()
    return (
        <Typography className={classes.error} variant="body2" color="error">
            Something went wrong: {error.message}.
            <br />
            Please try again later.
        </Typography>
    )
}

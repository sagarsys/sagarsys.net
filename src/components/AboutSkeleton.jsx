import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import useResizer from '../hooks/useResizer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(1),
    },
    graphics: {
        margin: theme.spacing(2, 0),
    },
    social: {
        marginLeft: 'auto',
    },
}))

export default function AboutSkeleton() {
    const isMobile = useResizer()
    const classes = useStyles()
    return (
        <>
            <Skeleton
                variant="text"
                width={isMobile ? '80%' : '33%'}
                height={20}
                className={classes.title}
            />
            <Skeleton variant="text" height={14} />
            <Skeleton variant="text" height={14} />
            <Skeleton variant="text" height={14} />
            <Skeleton variant="text" height={14} />
            <Skeleton variant="text" height={14} />
            <Skeleton
                variant="rect"
                height={250}
                className={classes.graphics}
            />
            <Skeleton
                variant="rect"
                width={isMobile ? '100%' : '33%'}
                height={24}
                className={classes.social}
            />
        </>
    )
}

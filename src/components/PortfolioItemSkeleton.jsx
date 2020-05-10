import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { usePortfolioItemStyles } from './PortfolioItem'

export default function PortfolioItemSkeleton() {
    const classes = usePortfolioItemStyles()
    return (
        <Grid item sm={12} md={4} zeroMinWidth className={classes.root}>
            <Card raised={true} className={classes.card}>
                <Skeleton variant="rect" width={'100%'} height={240} />
                <CardContent className={classes.content}>
                    <Skeleton variant="text" height={24} width={160} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </CardContent>
                <CardActions>
                    <Skeleton
                        variant="text"
                        width={100}
                        className={classes.button}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}

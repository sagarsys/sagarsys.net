import React from 'react'
import PortfolioItem from './PortfolioItem'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import useResizer from '../hooks/useResizer'
import PortfolioItemSkeleton from './PortfolioItemSkeleton'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(6, 0, 8),
    },
}))

export default function PortfolioList({ items, loading }) {
    const classes = useStyles()
    const isMobile = useResizer()

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                justifyContent={isMobile ? 'center' : 'flex-start'}
            >
                {loading &&
                    [1, 2, 3].map((i) => <PortfolioItemSkeleton key={i} />)}
                {!loading &&
                    items.length > 0 &&
                    items.map((item) => (
                        <PortfolioItem key={item.id} item={item} />
                    ))}
            </Grid>
        </div>
    )
}

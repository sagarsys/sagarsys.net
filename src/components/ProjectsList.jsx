import React from 'react'
import PortfolioItemSkeleton from './PortfolioItemSkeleton'
import Grid from '@material-ui/core/Grid'
import useResizer from '../hooks/useResizer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(6, 0, 8),
    },
}))

export default function ProjectsList({ loading, items }) {
    const classes = useStyles()
    const isMobile = useResizer()

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                justify={isMobile ? 'center' : 'flex-start'}
            >
                {loading &&
                    [1, 2, 3].map((i) => <PortfolioItemSkeleton key={i} />)}
                {!loading &&
                    items?.length > 0 &&
                    items?.map((item) => (
                        <ProjectsList key={item.id} item={item} />
                    ))}
            </Grid>
        </div>
    )
}

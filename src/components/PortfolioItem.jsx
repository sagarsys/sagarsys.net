import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import { truncateMultiLineString } from '../helpers/string'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { makeStyles } from '@material-ui/core/styles'
import PortfolioItemDetailsDialog from './PortfolioItemDetailsDialog'

export const usePortfolioItemStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    card: {
        margin: theme.spacing(0, 'auto'),
        minWidth: 240,
        maxWidth: 400,
    },
    content: {
        minHeight: 150,
    },
    button: {
        width: '100%',
        margin: theme.spacing(0, 'auto'),
    },
}))

export default function PortfolioItem({ item }) {
    const classes = usePortfolioItemStyles()
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const thumb = (item.images && item.images.thumb) || null
    return (
        <Grid item sm={12} md={4} zeroMinWidth className={classes.root}>
            <Card
                raised={true}
                className={classes.card}
                onClick={handleClickOpen}
                title="Click to learn more"
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="240"
                        image={thumb}
                        title="Learn more"
                    />
                    <CardContent className={classes.content}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            color="secondary"
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {truncateMultiLineString(item.description, 5, 64)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        className={classes.button}
                        size="small"
                        color="secondary"
                        startIcon={<ArrowRightAltIcon />}
                    >
                        Learn more
                    </Button>
                </CardActions>
            </Card>
            <PortfolioItemDetailsDialog
                open={open}
                handleClose={handleClose}
                item={item}
            />
        </Grid>
    )
}

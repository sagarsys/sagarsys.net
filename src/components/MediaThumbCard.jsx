import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 200,
    },
    button: {
        width: '100%',
    },
}))

export default function MediaThumbCard({ title, link, thumb }) {
    const classes = useStyles()
    const handleClick = () => {
        window.open(link, 'newTab', 'rel=noreferrer')
    }
    return (
        <Card
            className={classes.root}
            title="Click to open link"
            onClick={handleClick}
        >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={thumb}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    className={classes.button}
                    size="small"
                    color="secondary"
                >
                    Open link
                </Button>
            </CardActions>
        </Card>
    )
}

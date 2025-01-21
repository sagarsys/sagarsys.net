import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    description: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: '100px',
        height: '100px',
        marginRight: theme.spacing(4),
    }
}))


export default function AboutContent({ data }) {
    const classes = useStyles();

    if (!data) return null;
    const { name, title, description } = data;
    const descriptions = description.split('|');

    return (
        <>
            <Typography variant="h2">About</Typography>
            <Typography color="secondary" variant="h6">
                {name}: {title}
            </Typography>

            <div className={classes.description}>
                <Avatar alt="Sagar Sawuck" src="images/img/sagar.jpeg" className={classes.avatar} />
                <div>
                    {descriptions.map((item, index) => (
                        <Typography variant="body1" key={`${item}-${index}`}>- {item}</Typography>
                    ))}
                </div>
            </div>
        </>
    )
}

import React from 'react'
import DialogContent from '@material-ui/core/DialogContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import { arrayToString } from '../helpers/string'
import { LinkOrText } from './LinkOrText'
import Grid from '@material-ui/core/Grid'
import { LiveMedia } from './LiveMedia'
import DevicesPreview from './DevicesPreview'

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        objectFit: 'contain',
    },
    image: {
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '70vh',
    },
    primaryText: {
        color: theme.palette.text.primary,
    },
}))

export default function PortfolioItemDetailsDialogContent({ item }) {
    const classes = useStyles()
    const {
        images,
        title,
        description,
        tech,
        client,
        clientLink,
        role,
        roleDescription,
        challenges,
        live,
    } = item
    return (
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <div className={classes.imageWrapper}>
                        <img
                            className={classes.image}
                            src={images.thumb}
                            alt={title}
                            title={title}
                        />
                    </div>
                </Grid>

                <Grid item md={6}>
                    <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        paragraph={true}
                        component="p"
                    >
                        {description}
                    </Typography>

                    {tech && (
                        <Typography
                            variant="subtitle1"
                            paragraph={true}
                            color="secondary"
                        >
                            Technologies:{' '}
                            <span className={classes.primaryText}>
                                {arrayToString(tech)}
                            </span>
                        </Typography>
                    )}

                    {client && (
                        <Typography
                            variant="subtitle1"
                            paragraph={true}
                            color="secondary"
                        >
                            Client:{' '}
                            <span className={classes.primaryText}>
                                <LinkOrText
                                    link={clientLink}
                                    title={client}
                                    color="textPrimary"
                                />
                            </span>
                        </Typography>
                    )}

                    {role && (
                        <Typography
                            variant="body1"
                            paragraph={true}
                            color="secondary"
                        >
                            Role:{' '}
                            <span className={classes.primaryText}>{role}</span>
                        </Typography>
                    )}

                    {roleDescription && (
                        <Typography
                            variant="body1"
                            paragraph={true}
                            component="p"
                            color="secondary"
                        >
                            Role description:{' '}
                            <span className={classes.primaryText}>
                                {roleDescription}
                            </span>
                        </Typography>
                    )}

                    {challenges && (
                        <Typography
                            variant="body1"
                            paragraph={true}
                            component="div"
                            color="secondary"
                        >
                            Challenges:{' '}
                            <ul className={classes.primaryText}>
                                {challenges.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </Typography>
                    )}
                </Grid>
            </Grid>
            <LiveMedia live={live} />
            <DevicesPreview images={images} />
        </DialogContent>
    )
}

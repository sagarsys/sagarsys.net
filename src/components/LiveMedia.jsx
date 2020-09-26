import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import MediaThumbCard from './MediaThumbCard'

export function LiveMedia({ live }) {
    return (
        <>
            {live && live.length && (
                <>
                    <Typography
                        variant="subtitle1"
                        paragraph={true}
                        component="p"
                        color="secondary"
                    >
                        Live:
                    </Typography>
                    <Grid container spacing={1}>
                        {live.map((media, i) => (
                            <Grid key={i} item xs={12} sm={6} md={3}>
                                <MediaThumbCard
                                    title={media.title}
                                    link={media.link}
                                    thumb={media.thumb}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </>
    )
}

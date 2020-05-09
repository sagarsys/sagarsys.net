import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FullHeightSection from './FullHeightSection'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        textAlign: 'center',
    },
}))

export default function HeroBanner() {
    const classes = useStyles()
    return (
        <FullHeightSection id="home">
            <Container className={classes.root} maxWidth={false}>
                <Typography variant="h1">SAGARSYS</Typography>
                <Typography variant="h6">
                    Passionate web developer striving to make the web a better
                    place ;)
                </Typography>
            </Container>
        </FullHeightSection>
    )
}

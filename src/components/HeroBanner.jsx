import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FullHeightSection from './FullHeightSection'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
})

export default function HeroBanner() {
    const classes = useStyles()
    return (
        <FullHeightSection className={classes.root} id="home">
            <Typography variant="h1">SAGARSYS</Typography>
            <Typography variant="h6">
                Passionate web developer striving to make the web a better place
                ;)
            </Typography>
        </FullHeightSection>
    )
}

import React from 'react'
import { Container } from '@material-ui/core'
import SocialLinks from './SocialLinks'
import useFetchData from '../hooks/useFetchData'
import { ContactAnimation } from './ContactAnimation'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    }
}))

export default function Contact() {
    const apiUrl = `data/about.json`
    const { data, isLoading } = useFetchData(
        apiUrl,
        'about section data'
    )
    const classes = useStyles();

    if (isLoading || !data) return null;

    const { social } = data
    const { email } = social
    return (
        <Container fixed className={classes.root}>
            <section id="contact">
                <ContactAnimation email={email} />
                <SocialLinks data={social} />
            </section>
        </Container>
    )
}

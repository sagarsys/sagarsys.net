import Typography from '@material-ui/core/Typography'
import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import PublicIcon from '@material-ui/icons/Public'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 32
    },
    logo: {
        fontFamily: `'neuropol_nova_cnd', sans-serif;`,
        fontSize: `6.66rem`,
        textAlign: 'center',
    },
    tagline: {
        textAlign: 'center',
        marginBottom: 32
    },
    bottom: {
        textAlign: 'center',
    }
}))


export default function EmailBanner(props) {
    const classes = useStyles()
    
    return (
        <Container className={classes.root}>
            <Divider light  />
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={6} alignItems={'center'} justifyContent={'center'}>
                    <Typography color={'secondary'} className={classes.logo} variant="h1" {...props}>
                        SAGARSYS
                    </Typography>
                    <Typography className={classes.tagline} variant="h3" {...props}>
                        Web solutions
                    </Typography>
                </Grid>
                <Grid item xs={6}>
    
    
                    <Container>
                        <IconButton
                            color="textPrimary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <PublicIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'secondary'}>https://sagarsys.net</Typography>
                        </IconButton>
                    </Container>
    
                    <Container>
                        <IconButton
                            color="textPrimary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'secondary'}>https://www.linkedin.com/in/sagarsys/</Typography>
                        </IconButton>
                    </Container>
                    
                    <Container>
                        <IconButton
                            color="textPrimary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'secondary'}>https://github.com/sagarsys</Typography>
                        </IconButton>
                    </Container>
    
                    <Container>
                        <IconButton
                            color="textPrimary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'secondary'}>https://twitter.com/sagarsys</Typography>
                        </IconButton>
                    </Container>
    
                    <Container>
                        <IconButton
                            color="textPrimary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <InstagramIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'secondary'}>https://www.instagram.com/sagarsys/</Typography>
                        </IconButton>
                    </Container>
    
                </Grid>
            </Grid>
            <Divider />
            

                    <Container className={classes.bottom}>
                        <IconButton
                            color="secondary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <MailOutlineIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'textPrimary'}>sagar.sawuck@gmail.com</Typography>
                        </IconButton>

                        <IconButton
                            color="secondary"
                            aria-label="Link to Github"
                            title="Link to Github"
                            component="a"
                            href={''}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <PhoneIcon fontSize="large"  className={'mr-2'}/>
                            <Typography className={'ml-2'} variant={'h5'} color={'textPrimary'}>(+230) 5755 3561</Typography>
                        </IconButton>
                    </Container>

            <Divider />
        </Container>
    )
}

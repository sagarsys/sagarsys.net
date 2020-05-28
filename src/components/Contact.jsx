import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import Typography from '@material-ui/core/Typography'

const desktopHeight = 400
const mobileHeight = 200
const useStyles = makeStyles((theme) => ({
    root: {
        height: desktopHeight,
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            height: mobileHeight,
        },
    },
    link: {
        position: 'absolute',
        zIndex: 9,
        display: 'flex',
        width: '100%',
        height: '100%',
        transition: theme.transitions.easing.easeInOut,
        '&:hover svg': {
            transform: `translate(0, 25%) scale(1.1)`,
        },
        '&:hover span': {
            textDecoration: 'underline',
        },
    },
    contactInfo: {
        position: 'absolute',
        top: '55%',
        right: '2%',
        [theme.breakpoints.down('sm')]: {
            top: 'unset',
            right: 'unset',
            left: 0,
            bottom: 0,
        },
    },
    mail: {
        marginRight: theme.spacing(3),
        transform: `translate(0, 25%)`,
    },
    animatedSvg: {
        opacity: 0.8,
        width: '100%',
        height: '100%',
        transform: 'rotate(5deg)',
    },
    planePath: {
        stroke: '#D9DADA',
        strokeWidth: '.5%',
        strokeDasharray: '1% 2%',
        strokeLinecap: 'round',
        fill: 'none',
    },
    fil1: {
        fill: '#D9DADA',
    },
    fil2: {
        fill: '#C5C6C6',
    },
    fil3: {
        fill: '#AEAFB0',
    },
    fil4: {
        fill: '#9D9E9E',
    },
}))

export default function Contact() {
    const classes = useStyles()
    return (
        <Container className={classes.root} disableGutters>
            <Link
                color="secondary"
                href="mailto:sagar.sawuck@gmail.com"
                title="Send mail"
                className={classes.link}
            >
                <Typography
                    variant="h4"
                    className={classes.contactInfo}
                    component="span"
                >
                    <MailOutlineIcon
                        className={classes.mail}
                        fontSize="large"
                    />
                    Get in touch
                </Typography>
            </Link>
            <svg className={classes.animatedSvg} viewBox="0 0 3387 1270">
                <path
                    id="planePath"
                    className={classes.planePath}
                    d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
                />
                <g id="plane">
                    <polygon
                        className={classes.fil1}
                        points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
                    />
                    <polygon
                        className={classes.fil2}
                        points="199,0 -141,-10 -163,63 -123,9 "
                    />
                    <polygon
                        className={classes.fil3}
                        points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
                    />
                    <path
                        className={classes.fil4}
                        d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
                    />
                    <polygon
                        className={classes.fil1}
                        points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
                    />
                </g>
                <animateMotion
                    xlinkHref="#plane"
                    dur="8s"
                    repeatCount="indefinite"
                    rotate="auto"
                >
                    <mpath xlinkHref="#planePath" />
                </animateMotion>
            </svg>
        </Container>
    )
}

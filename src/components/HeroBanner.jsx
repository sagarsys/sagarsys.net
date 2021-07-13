import React from 'react'
import Typography from '@material-ui/core/Typography'
import { lighten, makeStyles } from '@material-ui/core/styles'
import FullHeightSection from './FullHeightSection'
import Container from '@material-ui/core/Container'
import { generateTextLineChangeKeyFrameAnimation } from '../helpers/animations'
import useResizer from '../hooks/useResizer'

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
        marginTop: theme.navBarHeight,
    },
    wrapper: {
        position: 'relative',
        marginTop: '4rem',
        height: (props) => props.tagline.fontSize * 2,
    },
    tagline: {
        color: theme.palette.common.white,
        height: ({ tagline, isMobile }) =>
            isMobile ? 'auto' : tagline.fontSize,
        lineHeight: (props) => `${props.tagline.fontSize}px`,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        '&:before': {
            content: '"["',
        },
        '&:after': {
            content: '"]"',
        },
        '&:before, &:after': {
            position: 'relative',
            fontSize: ({ tagline, isMobile }) =>
                isMobile
                    ? `${(tagline.fontSize - 4) * 2}px`
                    : `${tagline.fontSize - 2}px`,
            top: ({ isMobile }) => (isMobile ? 10 : -2),
            animation: `opacity 2s infinite`,
        },
    },
    listWrap: ({ isMobile, tagline }) => ({
        height: tagline.fontSize,
        overflowY: isMobile ? 'hidden' : 'none',
        width: isMobile ? 150 : 'auto',
    }),
    list: {
        margin: 0,
        transform: `translate(0, 1px)`,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        listStyle: 'none',
        color: lighten(theme.palette.secondary.main, 0.1),
        fontWeight: 'bold',
        animation: `$change-text 10s infinite`,
    },
    fixed: {
        paddingRight: theme.spacing(2),
    },
    [`@keyframes change-text`]: {
        ...generateTextLineChangeKeyFrameAnimation(4),
    },
}))

export default function HeroBanner() {
    const listItems = ['Passionate', 'Creative', 'Innovative', 'Dedicated']
    const isMobile = useResizer()
    const classes = useStyles({
        tagline: { fontSize: 24, numLines: listItems.length },
        isMobile,
    })
    return (
        <FullHeightSection id="home" height="60vh">
            <Container className={classes.root} maxWidth={false}>
                <div id="banner">
                    {Array(40)
                        .fill(0)
                        .map((v, i) => (
                            <Typography
                                key={i}
                                variant="h1"
                                className="sagarsys"
                            >
                                SAGARSYS
                            </Typography>
                        ))}
                </div>
                <div className={classes.wrapper}>
                    <Typography variant="h6" className={classes.tagline}>
                        <div className={classes.listWrap}>
                            <ul className={classes.list}>
                                {listItems.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <span className={classes.fixed}>
                            web developer striving to make the web a better
                            place
                        </span>
                    </Typography>
                </div>
            </Container>
        </FullHeightSection>
    )
}

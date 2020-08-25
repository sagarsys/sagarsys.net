import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import useResizer from '../hooks/useResizer'
import { makeStyles, useTheme } from '@material-ui/core/styles'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles({
    desktop: {
        display: 'flex',
    },
    mobile: {
        display: 'block',
        width: '250px',
    },
})

export default function NavBar({ onClick }) {
    const navItems = ['portfolio', 'projects', 'about', 'career']
    const isMobile = useResizer()
    const classes = useStyles()
    const theme = useTheme()
    const handleClick = (event, navItem) => {
        event.preventDefault()
        const { navBarHeight } = theme
        const anchor = (event.target.ownerDocument || document).getElementById(
            navItem
        )
        const scrollY = isMobile
            ? anchor.offsetTop
            : anchor.offsetTop - navBarHeight
        window.scrollTo(0, scrollY)
        onClick && onClick()
    }
    return (
        <List
            className={isMobile ? classes.mobile : classes.desktop}
            component="nav"
            aria-label="main site navigation"
        >
            {navItems.map((navItem) => (
                <ListItemLink
                    key={navItem}
                    href={`#${navItem}`}
                    onClick={(event) => handleClick(event, navItem)}
                >
                    <ListItemText primary={navItem.toUpperCase()} />
                </ListItemLink>
            ))}
        </List>
    )
}

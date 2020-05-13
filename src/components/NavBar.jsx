import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import useResizer from '../hooks/useResizer'
import { makeStyles } from '@material-ui/core/styles'

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
    const navItems = ['portfolio', 'projects', 'about']
    const isMobile = useResizer()
    const classes = useStyles()
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
                    onClick={onClick}
                >
                    <ListItemText primary={navItem.toUpperCase()} />
                </ListItemLink>
            ))}
        </List>
    )
}

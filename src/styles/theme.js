import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: grey[900],
        },
        secondary: {
            main: red[900],
        },
    },
    status: {
        danger: 'orange',
    },
})
theme = responsiveFontSizes(theme)

export default theme

import { blueGrey, deepOrange, red } from '@material-ui/core/colors'
import { darken } from '@material-ui/core'

const fonts = {
    primary: ['Titillium Web', 'sans-serif'].join(','),
    secondary: ['Play', 'sans-serif'].join(','),
}

export const themeOptions = ({ prefersDarkMode }) => ({
    palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: deepOrange[500],
        },
        background: {
            default: darken(blueGrey[900], 0.125),
            paper: darken(blueGrey[900], 0.125),
        },
    },
    typography: {
        fonts,
        fontFamily: fonts.primary,
        fontSize: 12,
        h1: {
            fontFamily: fonts.secondary,
        },
        h2: {
            fontFamily: fonts.secondary,
        },
        h3: {
            fontFamily: fonts.secondary,
        },
        h4: {
            fontFamily: fonts.secondary,
        },
        h5: {
            fontFamily: fonts.secondary,
        },
        h6: {
            fontFamily: fonts.secondary,
        },
    },
    spacing: [0, 4, 8, 16, 24, 32, 40, 50, 64, 80, 128],
    status: {
        danger: red[900],
    },
    // custom variables \\
    navBarHeight: '60px',
})

export default themeOptions

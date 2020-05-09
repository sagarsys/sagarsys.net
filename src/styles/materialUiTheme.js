import { blueGrey, red } from '@material-ui/core/colors'
import { darken } from '@material-ui/core'

export const themeOptions = ({ prefersDarkMode }) => ({
    palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: red[900],
        },
        background: {
            default: darken(blueGrey[900], 0.125),
            paper: darken(blueGrey[900], 0.125),
        },
    },
    typography: {
        fontSize: 12,
    },
    spacing: [0, 4, 8, 16, 32, 64],
    status: {
        danger: 'orange',
    },
})

export default themeOptions

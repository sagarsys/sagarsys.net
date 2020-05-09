import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

export const themeOptions = ({ prefersDarkMode }) => ({
    palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
            main: grey[900],
        },
        secondary: {
            main: red[900],
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

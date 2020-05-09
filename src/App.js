import React, { useMemo } from 'react'
import './App.scss'
import { themeOptions } from './styles/materialUiTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles'
import Main from './components/Main'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    let theme = useMemo(
        () => createMuiTheme(themeOptions({ prefersDarkMode })),
        [prefersDarkMode]
    )
    theme = responsiveFontSizes(theme)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
        </ThemeProvider>
    )
}

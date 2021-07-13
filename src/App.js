import React, { useMemo } from 'react'
import './App.scss'
import { themeOptions } from './styles/materialUiTheme'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles'
import Main from './components/Main'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function App() {
    let theme = useMemo(() => createTheme(themeOptions()), [])
    theme = responsiveFontSizes(theme)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Main />
        </ThemeProvider>
    )
}

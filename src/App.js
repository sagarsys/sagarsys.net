import React from 'react'
import './App.scss'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/styles'
import theme from './styles/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Button variant="contained" color="secondary">
                Hello World
            </Button>
        </ThemeProvider>
    )
}

export default App

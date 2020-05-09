import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// React findNode warning hack
;(() => {
    const oldLogError = console.error
    console.error = function (...args) {
        if (
            typeof args[0] !== 'string' ||
            args[0].indexOf('is deprecated in StrictMode') === -1
        ) {
            oldLogError.apply(console, args)
        }
    }
})()

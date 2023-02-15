import React from 'react'
import ReactDOM from 'react-dom'
import "./assets/css/reset.css"
import "./assets/css/style.css"

import App from './App.js'

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

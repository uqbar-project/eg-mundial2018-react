import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Favicon from 'react-favicon'

ReactDOM.render(
    <div>
        <Favicon url="./favicon.ico" ></Favicon>
        <App />
    </div>
    , document.getElementById('root'))
registerServiceWorker()
